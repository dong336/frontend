/**
 *
 */
var clsGoods = function (_obj) {
	var obj = _obj;

	obj.couponDcp = {
		goods: 0,
		cart: 0,
	};
	obj.useCmoney = 0;
	obj.settlePrice = 0; // 상품별 결제금액

	this.getObj = function () {
		return obj;
	};
};

var clsDelivery = function (_obj) {
	var obj = _obj;

	obj.couponDcp = {
		delivery: 0,
	};
	obj.useCmoney = 0;
	obj.settlePrice = 0; // 배송비별 결제금액

	this.getObj = function () {
		return obj;
	};
};

var clsDeliveryPolicy = function (_policy, _method, _fee, _limit) {
	var policy = _policy,
		method = _method,
		fee = _fee,
		limit = _limit;
	switch (method) {
		case CONST_DELIVERY_FREE:
		case CONST_DELIVERY_DEFAULT_FREE:
			fee = 0;
			limit = 0;
			break;
	}

	this.isMethod = function (_method) {
		return method == _method ? true : false;
	};

	this.getPrice = function (orderPrice) {
		if (fee == 0) return 0;
		if (method == CONST_DELIVERY_COLLECT) return 0;
		if (limit > 0 && orderPrice >= limit) return 0;
		return fee;
	};

	this.toString = function () {
		if (method == CONST_DELIVERY_FREE) {
			return '무료';
		}
		if (method == CONST_DELIVERY_DEFAULT_FREE) {
			return '기본 배송 상품포함 무료';
		}

		var arr = [];
		if (method == CONST_DELIVERY_PREPAY) {
			arr.push('선불');
		} else if (method == CONST_DELIVERY_COLLECT) {
			arr.push('착불');
		}
		arr.push(formatComma('' + fee, 0) + '원');
		if (limit > 0) {
			arr.push('(' + formatComma('' + limit, 0) + '원 이상 구매시  무료)');
		}
		return arr.join(' ');
	};
};

var clsSaveCmoneyPolicy = function (_p, _v) {
	var policy = _p,
		value = _v;
	this.getPrice = function (price, ea, settlePrice) {
		if (value > 0) {
			switch (policy) {
				case CONST_CMONEY_POLICY_PRICE_SALE:
					return setRound(price * ea * value, 0);
					break;
				case CONST_CMONEY_POLICY_PRICE_PAY:
					return setRound(settlePrice * value, 0);
					break;
				case CONST_CMONEY_POLICY_AMOUNT:
					return value * ea;
					break;
			}
		}
		return 0;
	};
};

var Mall = function () {
	this.mGoods = { size: 0 };
	this.mDeliveryPolicy = {};
	this.mDelivery = null;

	this.settlePrice = 0;

	this.total = {
		orderPrice: 0,
		pureOrderPrice: 0,
		eventDiscountPrice: 0,
		memberDiscountPrice: 0,
		deliveryFee: 0,
		couponGoodsDiscountPrice: 0,
		couponCartDiscountPrice: 0,
		couponDlvrDiscountPrice: 0,
		useCmoney: 0,
		saveCmoney: 0,
	};

	this.getResult = function () {
		return {
			totalOrderPrice: this.total.orderPrice,
			totalPureOrderPrice: this.total.pureOrderPrice,
			totalEventDiscountPrice: this.total.eventDiscountPrice,
			totalMemberDiscountPrice: this.total.memberDiscountPrice,
			totalDeliveryFee: this.total.deliveryFee,
			totalCouponGoodsDiscountPrice: this.total.couponGoodsDiscountPrice,
			totalCouponCartDiscountPrice: this.total.couponCartDiscountPrice,
			totalCouponDlvrDiscountPrice: this.total.couponDlvrDiscountPrice,
			totalCouponDiscountPrice:
				this.total.couponGoodsDiscountPrice +
				this.total.couponCartDiscountPrice +
				this.total.couponDlvrDiscountPrice,
			totalUseCmoney: this.total.useCmoney,
			totalSaveCmoney: this.total.saveCmoney,
			settlePrice: this.settlePrice,
		};
	};

	this.setGoodsChecked = function (idx, checked) {
		var goods = this.mGoods[idx].getObj();
		if (goods) goods.checked = checked;
	};

	this.addGoods = function (idx, data) {
		var data = $.extend(
			{
				saveCmoneySvc: null,
				saveCmoneyPolicy: 0,
				saveCmoneyValue: 0,
				saveCmoney: 0,
				checked: true,
			},
			data,
		);

		if (data.saveCmoneyPolicy && data.saveCmoneyValue) {
			data.saveCmoneySvc = new clsSaveCmoneyPolicy(
				data.saveCmoneyPolicy,
				data.saveCmoneyValue,
			);
		}

		// 배송비 추가
		if (data.deliveryPolicy && data.deliveryMethod) {
			this.addDeliveryPolicy({
				idx: idx,
				goodsNo: data.goodsNo,
				dealerNo: data.dealerNo,
				key: data.deliveryKey,
				policy: data.deliveryPolicy,
				method: data.deliveryMethod,
				fee: data.deliveryFee,
				limit: data.deliveryLimit,
			});
		}

		this.mGoods[idx] = new clsGoods(data);

		++this.mGoods.size;
	};

	this.addDeliveryPolicy = function (data) {
		var keyP = data.policy;
		var keyNo =
			data.policy == CONST_DELIVERY_GOODS ? data.goodsNo : data.dealerNo;

		var dmaps = {};
		if (keyP in this.mDeliveryPolicy) {
			dmaps = this.mDeliveryPolicy[keyP];
		}

		var dpack = null;
		if (keyNo in dmaps) {
			dpack = dmaps[keyNo];
		}

		if (!dpack) {
			dpack = {
				policy: new clsDeliveryPolicy(
					data.policy,
					data.method,
					data.fee,
					data.limit,
				),
				key: data.key,
				idxs: [data.idx],
			};
		} else dpack.idxs.push(data.idx);

		dmaps[keyNo] = dpack;
		this.mDeliveryPolicy[keyP] = dmaps;
	};

	this.addDelivery = function (data) {
		// data = { key, policy, method, fee, limit, realFee, idxs[] }
		if (!this.mDelivery) {
			this.initDelivery();
		}

		var arrGoods = [];

		for (var i in data.idxs) {
			var idx = data.idxs[i];

			var obj = this.mGoods[idx];
			if (!obj) continue;

			var goods = obj.getObj();
			if (goods.checked != true) continue;

			arrGoods.push(goods.goodsName);
		}

		// 배송비 결과 설정
		if (arrGoods.length > 0) {
			this.mDelivery[data.policy].push(
				new clsDelivery({
					policy: new clsDeliveryPolicy(
						data.policy,
						data.method,
						data.fee,
						data.limit,
					),
					key: data.key,
					realFee: data.realFee,
					goods: arrGoods,
				}),
			);
		}
	};

	// 실배송비 계산
	this.setDelivery = function () {
		this.initDelivery();

		// 기본정책 포함 배송비 무료 정책 입점업체정보
		var defaultFrees = [];

		// 배송정책별 실 배송비 계산 설정
		var arrPolicy = [
			CONST_DELIVERY_GOODS,
			CONST_DELIVERY_DEALER,
			CONST_DELIVERY_DEFAULT,
		];
		for (var p in arrPolicy) {
			var policy = arrPolicy[p];
			var dmaps = this.mDeliveryPolicy[policy];

			if (dmaps) {
				for (var no in dmaps) {
					var dpolicy = dmaps[no].policy;
					var dkey = dmaps[no].key;
					var idxs = dmaps[no].idxs;

					var dealerNo = 0;
					var pureOrderPrice = 0;
					var arrGoods = [];

					for (var m = 0; m < idxs.length; m++) {
						var idx = idxs[m];

						var obj = this.mGoods[idx];
						if (!obj) continue;

						var goods = obj.getObj();
						if (goods.checked != true) continue;

						if (dealerNo == 0) dealerNo = goods.dealerNo;
						pureOrderPrice += goods.purePrice * goods.ea;

						arrGoods.push(goods.goodsName);
					}

					if (arrGoods.length == 0) continue;

					// 실 배송비
					var realFee = dpolicy.getPrice(pureOrderPrice);

					switch (policy) {
						case CONST_DELIVERY_GOODS: // 상품정책
							// 기본정책 포함 배송비 무료항목 추가
							if (
								dpolicy.isMethod(CONST_DELIVERY_DEFAULT_FREE) &&
								defaultFrees.indexOf(dealerNo) < 0
							) {
								defaultFrees.push(dealerNo);
							}
							break;
						case CONST_DELIVERY_DEALER: // 입점정책
							// 기본정책 포함 배송비 무료 적용
							if (defaultFrees.indexOf(dealerNo) > -1) {
								realFee = 0;
							}
							break;
						case CONST_DELIVERY_DEFAULT: // 기본정책
							// 기본정책 포함 배송비 무료 적용
							if (defaultFrees.indexOf(dealerNo) > -1) {
								realFee = 0;
							}
							break;
					}

					// 배송비 결과 설정
					this.mDelivery[policy].push(
						new clsDelivery({
							policy: dpolicy,
							key: dkey,
							realFee: realFee,
							goods: arrGoods,
						}),
					);
				}
			}
		}
	};

	// 모든 금액을 계산 한다.
	this.calculate = function () {
		var f = document.Frm;

		// 배송비 설정
		this.setDelivery();

		var totalOrderPrice = this.getTotalOrderPrice();
		var totalPureOrderPrice = this.getTotalPureOrderPrice();
		var totalEventDiscountPrice = this.getTotalEventDiscountPrice();
		var totalMemberDiscountPrice = this.getTotalMemberDiscountPrice();

		var totalDeliveryFee = this.getTotalDeliveryFee();

		var totalCouponGoodsDiscountPrice = 0;
		var totalCouponCartDiscountPrice = 0;
		var totalCouponDlvrDiscountPrice = 0;

		var totalUseCmoney = f.useCmoney ? f.useCmoney.value.toNumeric() : 0;
		var totalSaveCmoney = 0;

		var totalSettleGoodsPrice = 0;
		var totalSettleDeliveryFee = 0;

		var validSettleGoodsSize = 0;
		var validDeliveryFeeSize = 0;

		// 상품 쿠폰, 적립금 정보 초기화
		for (var idx in this.mGoods) {
			if (isNaN(idx)) continue;

			var goods = this.mGoods[idx].getObj();

			goods.couponDcp.goods = 0;
			goods.couponDcp.cart = 0;
			goods.useCmoney = 0;
			goods.settlePrice = 0;
			if (goods.checked) {
				var $row = $('input[name="cart"][value="' + idx + '"]', f).closest(
					'tr,li',
				);
				if ($row.length > 0) {
					var $couponDcp = $row.find('input[name="couponGoodsDiscountPrice"]');
					if ($couponDcp.length > 0) {
						goods.couponDcp.goods = $couponDcp.val().toNumeric();
					}
				}

				goods.settlePrice = goods.finalPrice * goods.ea - goods.couponDcp.goods;

				// 쿠폰 할인금액 합계
				totalCouponGoodsDiscountPrice += goods.couponDcp.goods;
				// 상품 결제금액 합계
				totalSettleGoodsPrice += goods.settlePrice;

				if (goods.settlePrice > 0) ++validSettleGoodsSize;
			}
		}

		// 무료배송 쿠폰 정보 초기화
		for (var p in this.mDelivery) {
			var arrDp = this.mDelivery[p];

			for (var i = 0; i < arrDp.length; i++) {
				var delivery = arrDp[i].getObj();

				delivery.couponDcp.delivery = 0;
				delivery.useCmoney = 0;

				var $couponDcp = $(
					'input[name="couponDlvrDiscountPrice"][key="' + delivery.key + '"]',
				);
				if ($couponDcp.length > 0) {
					delivery.couponDcp.delivery = $couponDcp.val().toNumeric();
				}

				delivery.settlePrice = delivery.realFee - delivery.couponDcp.delivery;

				// 쿠폰 할인금액 합계
				totalCouponDlvrDiscountPrice += delivery.couponDcp.delivery;
				// 배송비 결제금액 합계
				totalSettleDeliveryFee += delivery.settlePrice;

				if (delivery.settlePrice > 0) ++validDeliveryFeeSize;
			}
		}

		// 장바구니 쿠폰 금액 계산
		// - 상품할인 쿠폰 반영 및 정률 할인 경우 상품쿠폰 적용 후 금액으로 재계산 (couponCartDiscountRate > 0 경우)
		// - 이외 장바구니 쿠폰 할인정보가 설정되어 있지 않으므로 할인금액 그대로 사용
		if ($('input[name="couponCartMemberIdx"]').length > 0) {
			var couponCartDiscountRate = $('input[name="couponCartDiscountRate"]')
				.val()
				.toNumeric();
			var couponCartDiscountMax = $('input[name="couponCartDiscountMax"]')
				.val()
				.toNumeric();

			if (couponCartDiscountRate > 0) {
				var couponCartSourcePrice =
					totalPureOrderPrice - totalCouponGoodsDiscountPrice;

				totalCouponCartDiscountPrice = setRound(
					couponCartSourcePrice * couponCartDiscountRate,
					CONST_PRICE_ROUND_UNIT,
				);
				if (
					couponCartDiscountMax > 0 &&
					totalCouponCartDiscountPrice > couponCartDiscountMax
				) {
					totalCouponCartDiscountPrice = couponCartDiscountMax;
				}

				$('input[name="totalCouponCartDiscountPrice"]').val(
					formatComma(totalCouponCartDiscountPrice),
				);
			} else {
				totalCouponCartDiscountPrice = $(
					'input[name="totalCouponCartDiscountPrice"]',
				)
					.val()
					.toNumeric();
			}

			// 장바구니 쿠폰 할인금액 배분
			if (totalCouponCartDiscountPrice > 0) {
				var restCouponCartDiscountPrice = totalCouponCartDiscountPrice;
				var restSettleGoodsSize = validSettleGoodsSize;
				validSettleGoodsSize = 0;

				for (var idx in this.mGoods) {
					if (isNaN(idx)) continue;

					var goods = this.mGoods[idx].getObj();
					if (goods.checked != true) continue;
					if (goods.settlePrice <= 0) continue;

					--restSettleGoodsSize;

					var couponCartDiscountPrice = 0;
					if (restSettleGoodsSize <= 0)
						couponCartDiscountPrice = restCouponCartDiscountPrice;
					else {
						couponCartDiscountPrice = setRound(
							totalCouponCartDiscountPrice *
								(goods.settlePrice / totalSettleGoodsPrice),
							CONST_PRICE_ROUND_UNIT,
						);
						if (couponCartDiscountPrice > restCouponCartDiscountPrice) {
							couponCartDiscountPrice = restCouponCartDiscountPrice;
						}
					}
					restCouponCartDiscountPrice -= couponCartDiscountPrice;

					goods.couponDcp.cart = couponCartDiscountPrice;
					goods.settlePrice -= goods.couponDcp.cart;

					if (goods.settlePrice > 0) {
						++validSettleGoodsSize;
					}
				}

				totalSettleGoodsPrice -= totalCouponCartDiscountPrice;
			} else {
				for (var idx in this.mGoods) {
					if (isNaN(idx)) continue;

					var goods = this.mGoods[idx].getObj();

					goods.couponDcp.cart = 0;
				}
			}
		}

		// 사용 적립금 배분
		var useVmTotal = totalUseCmoney;

		if (useVmTotal > 0) {
			var useVmSourceGoods = totalSettleGoodsPrice;
			var useVmSourceDelivery = totalSettleDeliveryFee;

			var useVmShareGoods = useVmTotal;
			var useVmShareDelivery = 0;

			var restVm = 0;
			var restSize = 0;

			// 상품, 배송비 사용 적립금 배분
			if (useVmSourceGoods < useVmTotal) {
				useVmShareDelivery = useVmTotal - useVmSourceGoods;
				useVmShareGoods -= useVmShareDelivery;
			}

			// 상품별 사용 적립금 배분
			if (useVmShareGoods > 0) {
				totalSettleGoodsPrice = 0;

				restVm = useVmShareGoods;
				restSize = validSettleGoodsSize;

				for (var idx in this.mGoods) {
					if (isNaN(idx)) continue;

					var goods = this.mGoods[idx].getObj();
					if (goods.checked != true) continue;

					var useVm = 0;

					// 상품별 결제대상 금액
					var settleGoodsPrice = goods.settlePrice;

					if (settleGoodsPrice > 0) {
						--restSize;

						if (restSize <= 0) useVm = restVm;
						else {
							useVm = setRound(
								useVmShareGoods * (settleGoodsPrice / useVmSourceGoods),
								CONST_PRICE_ROUND_UNIT,
							);
							restVm -= useVm;
						}

						// 상품별 결제금액 산출(상품별 사용 적립금 차감)
						settleGoodsPrice -= useVm;
					}

					goods.settlePrice = settleGoodsPrice;
					goods.useCmoney = useVm;

					totalSettleGoodsPrice += goods.settlePrice;
				}
			}

			// 배송비별 사용 적립금 배분
			if (useVmShareDelivery > 0) {
				totalSettleDeliveryFee = 0;

				restVm = useVmShareDelivery;
				restSize = validDeliveryFeeSize;

				for (var p in this.mDelivery) {
					var arrDp = this.mDelivery[p];

					for (var i = 0; i < arrDp.length; i++) {
						var delivery = arrDp[i].getObj();

						var useVm = 0;

						// 배송비별 결제대상 금액
						var settleDeliveryFee = delivery.settlePrice;

						if (settleDeliveryFee > 0) {
							--restSize;

							if (restSize <= 0) useVm = restVm;
							else {
								useVm = setRound(
									useVmShareDelivery *
										(settleDeliveryFee / useVmSourceDelivery),
									CONST_PRICE_ROUND_UNIT,
								);
								restVm -= useVm;
							}

							// 배송비별 결제금액 산출(배송비별 사용 적립금 차감)
							settleDeliveryFee -= useVm;
						}

						delivery.settlePrice = settleDeliveryFee;
						delivery.useCmoney = useVm;

						totalSettleDeliveryFee += delivery.settlePrice;
					}
				}
			}
		}

		// 지급 적립금 계산
		for (var idx in this.mGoods) {
			if (isNaN(idx)) continue;

			var goods = this.mGoods[idx].getObj();
			if (goods.checked != true) continue;

			var saveCmoney = 0;

			// 지급 적립금 계산
			if (goods.saveCmoneySvc) {
				saveCmoney = goods.saveCmoneySvc.getPrice(
					goods.price,
					goods.ea,
					goods.settlePrice,
				);
			}

			goods.saveCmoney = saveCmoney;

			totalSaveCmoney += goods.saveCmoney;
		}

		this.settlePrice = totalSettleGoodsPrice + totalSettleDeliveryFee;
		this.total = {
			orderPrice: totalOrderPrice,
			pureOrderPrice: totalPureOrderPrice,
			eventDiscountPrice: totalEventDiscountPrice,
			memberDiscountPrice: totalMemberDiscountPrice,
			deliveryFee: totalDeliveryFee,
			couponGoodsDiscountPrice: totalCouponGoodsDiscountPrice,
			couponCartDiscountPrice: totalCouponCartDiscountPrice,
			couponDlvrDiscountPrice: totalCouponDlvrDiscountPrice,
			useCmoney: totalUseCmoney,
			saveCmoney: totalSaveCmoney,
		};
	};

	this.initDelivery = function () {
		var arrPolicy = [
			CONST_DELIVERY_GOODS,
			CONST_DELIVERY_DEALER,
			CONST_DELIVERY_DEFAULT,
		];

		this.mDelivery = {};
		for (var p in arrPolicy) {
			this.mDelivery[arrPolicy[p]] = [];
		}
	};

	this.getDeliveryGoods = function (key) {
		var result = [];

		if (!this.mDelivery) {
			this.setDelivery();
		}

		var arrPolicy = [
			CONST_DELIVERY_GOODS,
			CONST_DELIVERY_DEALER,
			CONST_DELIVERY_DEFAULT,
		];
		for (var p in arrPolicy) {
			var arrDp = this.mDelivery[arrPolicy[p]];
			if (arrDp) {
				for (var i = 0; i < arrDp.length; i++) {
					var delivery = arrDp[i].getObj();
					if (delivery.key == key) {
						result = delivery.goods;
						break;
					}
				}
			}

			if (result.length > 0) break;
		}

		return result;
	};

	this.getDeliveryInfoList = function () {
		var result = [];

		if (!this.mDelivery) {
			this.setDelivery();
		}

		var arrPolicy = [
			CONST_DELIVERY_GOODS,
			CONST_DELIVERY_DEALER,
			CONST_DELIVERY_DEFAULT,
		];
		for (var p in arrPolicy) {
			var arrDp = this.mDelivery[arrPolicy[p]];
			if (arrDp) {
				for (var i = 0; i < arrDp.length; i++) {
					var delivery = arrDp[i].getObj();

					result.push({
						summary: delivery.policy.toString(),
						price: delivery.realFee,
						goods: delivery.goods,
					});
				}
			}
		}

		return result;
	};

	this.getEventDiscountInfoList = function () {
		var result = [];

		var items = {};
		for (var idx in this.mGoods) {
			if (isNaN(idx)) continue;

			var goods = this.mGoods[idx].getObj();

			if (goods.checked && goods.eventDiscountPrice > 0) {
				var idx = goods.eventIdx;

				var emaps = {};
				if (idx in items) {
					emaps = items[idx];
					emaps.discountPrice += goods.eventDiscountPrice * goods.ea;
					emaps.goods.push(goods.goodsName);
				} else {
					emaps = {
						subject: goods.eventSubject,
						discountPrice: goods.eventDiscountPrice * goods.ea,
						goods: [goods.goodsName],
					};
				}

				items[idx] = emaps;
			}
		}

		for (var idx in items) {
			var emaps = items[idx];

			var goodsName = emaps.goods[0];
			if (emaps.goods.length > 1) {
				goodsName += ' 외 ' + (emaps.goods.length - 1) + '건';
			}

			result.push({
				summary: emaps.subject,
				price: emaps.discountPrice,
				goodsName: goodsName,
			});
		}

		return result;
	};

	this.getMemberDiscountInfo = function () {
		var result = null;

		var discountPrice = 0;
		var items = [];

		for (var idx in this.mGoods) {
			if (isNaN(idx)) continue;

			var goods = this.mGoods[idx].getObj();

			if (goods.checked && goods.memberDiscountPrice > 0) {
				discountPrice += goods.memberDiscountPrice * goods.ea;
				items.push(goods.goodsName);
			}
		}

		if (discountPrice > 0) {
			var goodsName = items[0];
			if (items.length > 1) {
				goodsName += ' 외 ' + (items.length - 1) + '건';
			}

			result = {
				summary: '등급',
				price: discountPrice,
				goodsName: goodsName,
			};
		}

		return result;
	};

	this.getTotalOrderPrice = function () {
		var total = 0;
		for (var idx in this.mGoods) {
			if (isNaN(idx)) continue;

			var goods = this.mGoods[idx].getObj();
			if (goods.checked != true) continue;

			total += (goods.price + goods.optionPrice) * goods.ea;
		}
		return total;
	};

	this.getTotalPureOrderPrice = function () {
		var total = 0;
		for (var idx in this.mGoods) {
			if (isNaN(idx)) continue;

			var goods = this.mGoods[idx].getObj();
			if (goods.checked != true) continue;

			total += goods.purePrice * goods.ea;
		}
		return total;
	};

	this.getTotalFinalOrderPrice = function () {
		var total = 0;
		for (var idx in this.mGoods) {
			if (isNaN(idx)) continue;

			var goods = this.mGoods[idx].getObj();
			if (goods.checked != true) continue;

			total += goods.finalPrice * goods.ea;
		}
		return total;
	};

	this.getTotalEventDiscountPrice = function () {
		var total = 0;
		for (var idx in this.mGoods) {
			if (isNaN(idx)) continue;

			var goods = this.mGoods[idx].getObj();
			if (goods.checked != true) continue;

			total += goods.eventDiscountPrice * goods.ea;
		}
		return total;
	};

	this.getTotalMemberDiscountPrice = function () {
		var total = 0;
		for (var idx in this.mGoods) {
			if (isNaN(idx)) continue;

			var goods = this.mGoods[idx].getObj();
			if (goods.checked != true) continue;

			total += goods.memberDiscountPrice * goods.ea;
		}
		return total;
	};

	this.getTotalDeliveryFee = function () {
		var total = 0;
		if (this.mDelivery) {
			for (var p in this.mDelivery) {
				var arrDp = this.mDelivery[p];

				for (var i = 0; i < arrDp.length; i++) {
					var delivery = arrDp[i].getObj();

					total += delivery.realFee;
				}
			}
		}
		return total;
	};
};
