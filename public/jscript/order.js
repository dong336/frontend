$(function () {
	var f = document.Frm;

	var objOption = f.ordEmailDomains.options[f.ordEmailDomains.selectedIndex];
	if (isEmpty(objOption)) f.ordEmailDomain.readOnly = false;
	else {
		f.ordEmailDomain.readOnly = true;
		f.ordEmailDomain.value = objOption.value;
	}

	$('input:radio[name="payway"]:first').prop('checked', true);
	checkPayway();
});

function getGoodsSize() {
	return $('input[name="cart"]').length;
}

function checkEmailDomain(obj) {
	var f = obj.form;
	var objOption = obj.options[obj.selectedIndex];
	var objTarget;

	if (obj.name == 'ordEmailDomains') {
		objTarget = f.ordEmailDomain;
	} else {
		objTarget = f.rcvEmailDomain;
	}

	if (isEmpty(objOption)) {
		objTarget.readOnly = false;
		objTarget.value = '';
		objTarget.focus();
	} else {
		objTarget.readOnly = true;
		objTarget.value = objOption.value;
	}
}

// 최근 배송지
function openAddressHistory() {
	$.laybox({
		type: 'iframe',
		source: '../order/address_history_ifrm',
		borderSize: 0,
		maskColor: '#000',
		maskOpacity: 70,
		close: false,
		canvasBgColor: null,
	});
}

// 주소록
function openAddressList() {
	$.laybox({
		type: 'iframe',
		source: '../order/address_list_ifrm',
		borderSize: 0,
		maskColor: '#000',
		maskOpacity: 70,
		close: false,
		canvasBgColor: null,
	});
}

// 주소정보 처리
function setAddress(obj) {
	var f = document.Frm;

	f.rcvName.value = obj.name;
	f.rcvTel1.value = typeof obj.tel[0] == 'undefined' ? '' : obj.tel[0];
	f.rcvTel2.value = typeof obj.tel[1] == 'undefined' ? '' : obj.tel[1];
	f.rcvTel3.value = typeof obj.tel[2] == 'undefined' ? '' : obj.tel[2];
	f.rcvMobile1.value = obj.mobile[0];
	f.rcvMobile2.value = obj.mobile[1];
	f.rcvMobile3.value = obj.mobile[2];
	f.rcvPost.value = obj.post;
	f.rcvAddr.value = obj.addr;
	f.rcvAddrDetail.value = obj.addrDetail;

	try {
		$.laybox.close();
	} catch (e) {}
}

// 받는분 정보 복사
function copyInfo(obj) {
	var f = document.Frm;

	if (obj.checked) {
		f.rcvName.value = f.ordName.value;
		f.rcvTel1.value = f.ordTel1.value;
		f.rcvTel2.value = f.ordTel2.value;
		f.rcvTel3.value = f.ordTel3.value;
		f.rcvMobile1.value = f.ordMobile1.value;
		f.rcvMobile2.value = f.ordMobile2.value;
		f.rcvMobile3.value = f.ordMobile3.value;
		f.rcvPost.value = f.ordPost.value;
		f.rcvAddr.value = f.ordAddr.value;
		f.rcvAddrDetail.value = f.ordAddrDetail.value;
	} else {
		f.rcvName.value = '';
		f.rcvTel1.value = '';
		f.rcvTel2.value = '';
		f.rcvTel3.value = '';
		f.rcvMobile1.value = '';
		f.rcvMobile2.value = '';
		f.rcvMobile3.value = '';
		f.rcvPost.value = '';
		f.rcvAddr.value = '';
		f.rcvAddrDetail.value = '';
	}
}

// # 쿠폰 사용 : 시작 ######################################################################
function openCoupon(kind) {
	var f = document.Frm;
	var useMoney = f.useCmoney.value.toNumeric();

	if (useMoney > 0) {
		alert('적립금 사용을 해제한 상태에서만 쿠폰적용이 가능합니다.');
		return false;
	} else {
		clearCoupon(kind);

		openPopup(
			'order_coupon_pop?kind=' + kind,
			'Coupon',
			653,
			570,
			'scrollbars=yes',
		);
	}
}

function setCoupon(kind, obj) {
	var $total = null;
	var totalDiscountPrice = 0;

	switch (kind) {
		case CONST_COUPON_KIND_GOODS:
			var $total = $('input[name="totalCouponGoodsDiscountPrice"]').val('');

			for (var cart in obj) {
				var $row = $('input[name="cart"][value="' + cart + '"]').closest('tr');
				$row.find('input[name="couponGoodsMemberIdx"]').val(obj[cart].idx);
				$row
					.find('input[name="couponGoodsDiscountPrice"]')
					.val(obj[cart].price);

				totalDiscountPrice += obj[cart].price;
			}
			break;
		case CONST_COUPON_KIND_CART:
			var $total = $('input[name="totalCouponCartDiscountPrice"]').val('');

			for (var cart in obj) {
				$('input[name="couponCartMemberIdx"]').val(obj[cart].idx);
				$('input[name="couponCartDiscountRate"]').val(obj[cart].rate);
				$('input[name="couponCartDiscountMax"]').val(obj[cart].max);

				totalDiscountPrice += obj[cart].price;
				break;
			}
			break;
		case CONST_COUPON_KIND_DELIVERY:
			var $total = $('input[name="totalCouponDlvrDiscountPrice"]').val('');

			$('input[name^="couponDlvr"]').remove();

			for (var cart in obj) {
				if (obj[cart].idx <= 0) continue;

				$total.after(
					'<input type="hidden" name="couponDlvrKey" value="' +
						obj[cart].key +
						'" />',
				);
				$total.after(
					'<input type="hidden" name="couponDlvrMemberIdx" value="' +
						obj[cart].idx +
						'" />',
				);
				$total.after(
					'<input type="hidden" name="couponDlvrDiscountPrice" value="' +
						obj[cart].price +
						'" key="' +
						obj[cart].key +
						'" />',
				);

				totalDiscountPrice += obj[cart].price;
			}
			break;
	}

	if ($total.length > 0 && totalDiscountPrice > 0) {
		$total.val(formatComma(totalDiscountPrice));
	}

	reCal();
}

function clearCoupon(kind) {
	switch (kind) {
		case CONST_COUPON_KIND_GOODS:
			$('#goods_list tbody')
				.children()
				.each(function () {
					$(this).find('input[name="couponGoodsMemberIdx"]').val('');
					$(this).find('input[name="couponGoodsDiscountPrice"]').val('');
				});

			$('input[name="totalCouponGoodsDiscountPrice"]').val('');

			clearGoodsCoupon();
			break;
		case CONST_COUPON_KIND_CART:
			$('#goods_list tbody')
				.children()
				.each(function () {
					$(this).find('input[name="couponCartDiscountPrice"]').val('');
				});

			$('input[name="couponCartMemberIdx"]').val('');
			$('input[name="couponCartDiscountRate"]').val('');
			$('input[name="couponCartDiscountMax"]').val('');

			$('input[name="totalCouponCartDiscountPrice"]').val('');
			break;
		case CONST_COUPON_KIND_DELIVERY:
			$('input[name^="couponDlvr"]').remove();

			$('input[name="totalCouponDlvrDiscountPrice"]').val('');
			break;
	}

	reCal();
}

function clearGoodsCoupon() {
	$.ajax({
		type: 'POST',
		dataType: 'json',
		url: 'order_goods_coupon_act_ajax',
		data: null,
		error: function (request, status, error) {
			console.log(request.responseText);
			alert('상품 쿠폰 초기화가 실패하였습니다.');
		},
		success: function (data) {
			if (data.result.code == 9) {
				alert('로그인 후 이용할 수 있습니다.');
				return false;
			} else if (data.result.code > 0) {
				alert(data.result.msg);
				return false;
			}
		},
	});
}

// # 쿠폰 사용 : 끝 ######################################################################

// # 적립금 사용 : 시작 ######################################################################
function changeUseVmoney(obj) {
	var f = document.Frm;

	var moneyName = obj.name.substr(5);
	var moneyUseLimit = f.moneyUseLimit.value.toNumeric();
	var moneyUseMin = f.moneyUseMin.value.toNumeric();
	var moneyUseMax = f.moneyUseMax.value.toNumeric();

	var hasMoney = $('input[name="has' + moneyName + '"]', f)
		.val()
		.toNumeric();

	if (hasMoney < 0) {
		alert('적립금 조회 후 사용 가능합니다.');
		obj.checked = false;
		return false;
	}

	if (moneyName == 'Cmoney') {
		if (hasMoney < moneyUseLimit) {
			alert(
				'보유하신 적립금이 ' +
					formatComma(moneyUseLimit) +
					'원 이상인 경우에만 사용 가능합니다.',
			);
			obj.checked = false;
		} else if (hasMoney < moneyUseMin) {
			alert(
				'적립금은 최소 ' +
					formatComma(moneyUseMin) +
					'원 이상부터 사용 가능합니다.',
			);
			obj.checked = false;
		}
	}

	var $useInput = $('input[name="use' + moneyName + 'Input"]', f);
	if (obj.checked) {
		$useInput.prop('disabled', false);
	} else {
		$useInput.prop('disabled', true).val('');

		cancelUseVmoney(moneyName);
	}

	reCal();
}

function checkUseVmoney(obj) {
	var f = document.Frm;
	var errMessage = null;

	if (obj.disabled) {
		return false;
	}

	var totalOrderPrice = f.totalOrderPrice.value.toNumeric();
	var totalDeliveryFee = f.totalDeliveryFee.value.toNumeric();
	var totalInstantDiscountPrice = f.totalInstantDiscountPrice.value.toNumeric();
	var totalCouponGoodsDiscountPrice = f.totalCouponGoodsDiscountPrice
		? f.totalCouponGoodsDiscountPrice.value.toNumeric()
		: 0;
	var totalCouponCartDiscountPrice = f.totalCouponCartDiscountPrice
		? f.totalCouponCartDiscountPrice.value.toNumeric()
		: 0;
	var totalCouponDlvrDiscountPrice = f.totalCouponDlvrDiscountPrice
		? f.totalCouponDlvrDiscountPrice.value.toNumeric()
		: 0;
	var totalCouponDiscountPrice =
		totalCouponGoodsDiscountPrice + totalCouponCartDiscountPrice;

	var useCmoney = f.useCmoney ? f.useCmoney.value.toNumeric() : 0;

	var moneyName = obj.name.substr(3, 6);
	var moneyUseLimit = f.moneyUseLimit.value.toNumeric();
	var moneyUseMin = f.moneyUseMin.value.toNumeric();
	var moneyUseMax = f.moneyUseMax.value.toNumeric();

	var moneyUsable =
		totalOrderPrice +
		totalDeliveryFee -
		totalInstantDiscountPrice -
		(totalCouponGoodsDiscountPrice +
			totalCouponCartDiscountPrice +
			totalCouponDlvrDiscountPrice);

	var hasMoney = $('input[name="has' + moneyName + '"]', f)
		.val()
		.toNumeric();
	var useMoney = $('input[name="use' + moneyName + 'Input"]', f)
		.val()
		.toNumeric();

	if (useMoney > 0) {
		if (moneyName == 'Cmoney') {
			if (hasMoney < moneyUseLimit) {
				errMessage =
					'보유하신 적립금이 ' +
					formatComma(moneyUseLimit) +
					'원 이상인 경우에만 사용 가능합니다.';
			} else if (useMoney < moneyUseMin || moneyUseMax < useMoney) {
				errMessage =
					'적립금은 최소 ' +
					formatComma(moneyUseMin) +
					'원부터 최대 ' +
					formatComma(moneyUseMax) +
					'원까지 사용 가능합니다.';
			} else if (useMoney > hasMoney) {
				errMessage = '보유하신 적립금보다 많이 입력하셨습니다.';
			} else if (useMoney > moneyUsable) {
				errMessage =
					'적립금 사용 가능 금액(' +
					formatComma(moneyUsable) +
					'원)을 초과하여 입력하셨습니다.';
			}
		} else {
			if (useMoney > hasMoney) {
				errMessage = '보유하신 적립금보다 많이 입력하셨습니다.';
			} else if (useMoney > moneyUsable) {
				errMessage =
					'적립금 사용 가능 금액(' +
					formatComma(moneyUsable) +
					'원)을 초과하여 입력하셨습니다.';
			}
		}

		if (errMessage) {
			alert(errMessage);
			$('input[name="use' + moneyName + 'Input"]', f)
				.val('')
				.focus();

			cancelUseVmoney(moneyName);
		} else {
			$('input[name="use' + moneyName + '"]', f).val(useMoney);
		}
	} else {
		cancelUseVmoney(moneyName);
	}

	reCal();
}

function cancelUseVmoney(moneyName) {
	$('input[name="use' + moneyName + '"]', document.Frm).val('');
}
// # 적립금 사용 : 끝 ######################################################################

//# 결제수단 확인 : 시작 ######################################################################
function checkPayway() {
	var f = document.Frm;
	var payway = getRadio(f.payway).toNumeric();

	if (typeof f.dpIssueKind != 'undefined') {
		//계좌이체, 가상계좌, 온라인입금 > 거래증빙요청 영역
		if (
			payway == CONST_PAYWAY_ONLINE ||
			payway == CONST_PAYWAY_BANK ||
			payway == CONST_PAYWAY_VIRTUAL
		) {
			setRadioDisabledAll(f.dpIssueKind, false);
			setRadio(f.dpIssueInput, '');
			checkDealproof();
			$('#tr_dealproof').show();
		} else {
			$('#tr_dealproof').hide();
			setRadioDisabledAll(f.dpIssueKind, true);
		}
	}

	if (f.payBankIdx) {
		if (
			payway == CONST_PAYWAY_ONLINE ||
			payway == CONST_PAYWAY_BANK ||
			payway == CONST_PAYWAY_VIRTUAL
		) {
			f.payBankIdx.disabled = false;
			f.payRemittor.disabled = false;
		} else {
			f.payBankIdx.disabled = true;
			f.payRemittor.disabled = true;
		}
	}

	//현금건 입금일때만 거래증빙요청 데이터를 넘긴다.
	if (
		payway == CONST_PAYWAY_ONLINE ||
		payway == CONST_PAYWAY_BANK ||
		payway == CONST_PAYWAY_VIRTUAL
	) {
		f.dpCashMobile1.disabled = false;
		f.dpCashMobile2.disabled = false;
		f.dpCashMobile3.disabled = false;
		f.dpCashBizNo1.disabled = false;
		f.dpCashBizNo2.disabled = false;
		f.dpCashBizNo3.disabled = false;
		f.dpIssueKind.disabled = false;
		f.dpTaxBizNo.disabled = false;
		f.dpCompany.disabled = false;
		f.dpCeoName.disabled = false;
		f.dpBizLocation.disabled = false;
		f.dpBizCondition.disabled = false;
		f.dpBizItem.disabled = false;
		f.dpTel.disabled = false;
		f.dpEmail.disabled = false;
		f.dpMemo.disabled = false;
		f.dpPost.disabled = false;
		f.dpAddr.disabled = false;
		f.dpAddrDetail.disabled = false;
	} else {
		f.dpCashMobile1.disabled = true;
		f.dpCashMobile2.disabled = true;
		f.dpCashMobile3.disabled = true;
		f.dpCashBizNo1.disabled = true;
		f.dpCashBizNo2.disabled = true;
		f.dpCashBizNo3.disabled = true;
		f.dpIssueKind.disabled = true;
		f.dpTaxBizNo.disabled = true;
		f.dpCompany.disabled = true;
		f.dpCeoName.disabled = true;
		f.dpBizLocation.disabled = true;
		f.dpBizCondition.disabled = true;
		f.dpBizItem.disabled = true;
		f.dpTel.disabled = true;
		f.dpEmail.disabled = true;
		f.dpMemo.disabled = true;
		f.dpPost.disabled = true;
		f.dpAddr.disabled = true;
		f.dpAddrDetail.disabled = true;
	}
}
// # 결제수단 확인 : 끝 ######################################################################

// # 거래증빙서류 : 시작 ######################################################################
function checkDealproof() {
	var f = document.Frm;
	var msg;
	var payway = getRadio(f.payway).toNumeric();
	var dpIssueKind = getRadio(f.dpIssueInput);

	f.dpIssueKind.value = '';
	$('#dealproof_cash_num_per').hide();
	$('#dealproof_cash_num_biz').hide();

	switch (dpIssueKind) {
		case CONST_DEALPROOF_CASH_PER:
			f.dpIssueKind.value = dpIssueKind;
			$('#dealproof_cash_num_per').show();
			break;
		case CONST_DEALPROOF_CASH_BIZ:
			f.dpIssueKind.value = dpIssueKind;
			$('#dealproof_cash_num_biz').show();
			break;
		case CONST_DEALPROOF_TAX:
			if (
				confirm(
					'세금계산서 신청팝업이 뜬 후 내용을 정확히 입력하고,\n반드시 [확인]을 누르셔야 세금계산서가 정상적으로 발급이 됩니다.',
				)
			) {
				openPopup('order_tax_pop', 'DealProof', 546, 696, 'scrollbars=1');
			} else {
				setRadio(f.dpIssueInput, '');
			}
			break;
	}
}

function getDealProofTax() {
	var f = document.Frm;
	return {
		bizNo: f.dpTaxBizNo.value,
		company: f.dpCompany.value,
		ceoName: f.dpCeoName.value,
		bizPost: f.dpBizPost.value,
		bizAddr: f.dpBizAddr.value,
		bizAddrDetail: f.dpBizAddrDetail.value,
		bizLocation: f.dpBizLocation.value,
		bizCondition: f.dpBizCondition.value,
		bizItem: f.dpBizItem.value,
		post: f.dpPost.value,
		addr: f.dpAddr.value,
		addrDetail: f.dpAddrDetail.value,
		email: f.dpEmail.value,
		tel: f.dpTel.value,
		memo: f.dpMemo.value,
	};
}

function setDealProofTax(data) {
	var f = document.Frm;
	f.dpIssueKind.value = CONST_DEALPROOF_TAX;

	f.dpTaxBizNo.value = data.bizNo;
	f.dpCompany.value = data.company;
	f.dpCeoName.value = data.ceoName;
	f.dpBizPost.value = data.bizPost;
	f.dpBizAddr.value = data.bizAddr;
	f.dpBizAddrDetail.value = data.bizAddrDetail;
	f.dpBizLocation.value = data.bizLocation;
	f.dpBizCondition.value = data.bizCondition;
	f.dpBizItem.value = data.bizItem;
	f.dpTel.value = data.tel;
	f.dpEmail.value = data.email;
	f.dpMemo.value = data.memo;

	alert('정상적으로 신청되었습니다.');
}

function clearDealproof() {
	var f = document.Frm;
	f.dpIssueKind.value = '';
}
// # 거래증빙서류 : 끝 ######################################################################

// # 주문 : 시작 ######################################################################
var payIng = 0; // 0 : 결제전, 1 : 결제중

function validOrder() {
	var f = document.Frm;

	if (payIng > 0) {
		alert('결제가 진행중입니다. 잠시만 기다려주세요.');
		return;
	}

	var payway = getRadio(f.payway).toNumeric();
	var escrowPayway = f.escrowPayway.value.toNumeric(); // 에스크로 결제수단

	var arrMsgOrd = new Array();
	if (isEmpty(f.ordName)) {
		arrMsgOrd[arrMsgOrd.length] = '이름';
	}
	if (isEmpty(f.ordAddr)) {
		arrMsgOrd[arrMsgOrd.length] = '주소';
	}
	//if (isEmpty(f.ordTel1) || isEmpty(f.ordTel2) || isEmpty(f.ordTel3)) {						arrMsgOrd[arrMsgOrd.length] = "일반전화";}
	if (isEmpty(f.ordMobile1) || isEmpty(f.ordMobile2) || isEmpty(f.ordMobile3)) {
		arrMsgOrd[arrMsgOrd.length] = '휴대전화';
	}
	if (isEmpty(f.ordEmailId) || isEmpty(f.ordEmailDomain)) {
		arrMsgOrd[arrMsgOrd.length] = '이메일';
	}

	var arrMsgRcv = new Array();
	if (isEmpty(f.rcvName)) {
		arrMsgRcv[arrMsgRcv.length] = '이름';
	}
	if (isEmpty(f.rcvAddr)) {
		arrMsgRcv[arrMsgRcv.length] = '주소';
	}
	//if (isEmpty(f.rcvTel1) || isEmpty(f.rcvTel2) || isEmpty(f.rcvTel3)) {						arrMsgRcv[arrMsgRcv.length] = "일반전화";}
	if (isEmpty(f.rcvMobile1) || isEmpty(f.rcvMobile2) || isEmpty(f.rcvMobile3)) {
		arrMsgRcv[arrMsgRcv.length] = '휴대전화';
	}

	var arrMsgPay = new Array();
	if (payway == CONST_PAYWAY_ONLINE) {
		if (isEmpty(f.payRemittor)) {
			arrMsgPay[arrMsgPay.length] = '입금자명';
		}
	}

	var errMessage = '';
	if (arrMsgOrd.length + arrMsgRcv.length + arrMsgPay.length > 0) {
		if (arrMsgOrd.length > 0) {
			errMessage += '[주문하시는 분]\n' + arrMsgOrd.join(' / ') + '\n\n';
		}
		if (arrMsgRcv.length > 0) {
			errMessage += '[받으시는 분]\n' + arrMsgRcv.join(' / ') + '\n\n';
		}
		if (arrMsgPay.length > 0) {
			errMessage += '[결제정보]\n' + arrMsgPay.join(' / ') + '\n\n';
		}
	}

	if (errMessage) {
		alert(
			'필수 입력 정보를 입력하여 주세요.\n--------------------------------------------------------\n\n' +
				errMessage,
		);
		return false;
	}

	if (!isEmpty(f.ordEmailId) && !isEmpty(f.ordEmailDomain)) {
		if (!checkEmail(f.ordEmailId.value + '@' + f.ordEmailDomain.value)) {
			alert(
				'형식에 맞지 않는 이메일 주소입니다.\n이메일 주소를 정확히 입력해 주세요.',
			);
			return false;
		}
	}

	var payway = getRadio(f.payway).toNumeric();

	// 무통장입금 - 거래증빙서류 확인
	if (
		(payway == CONST_PAYWAY_ONLINE ||
			payway == CONST_PAYWAY_BANK ||
			payway == CONST_PAYWAY_VIRTUAL) &&
		typeof f.dpIssueKind != 'undefined'
	) {
		var errMessage = '';

		switch (getRadio(f.dpIssueInput)) {
			case CONST_DEALPROOF_CASH_PER: // 현금영수증-개인소득공제
				if (
					f.dpCashMobile1.value.length == 0 ||
					f.dpCashMobile2.value.length == 0 ||
					f.dpCashMobile3.value.length == 0
				)
					errMessage += '[거래증빙서류]\n휴대폰 번호를 입력해 주세요.\n\n';
				break;
			case CONST_DEALPROOF_CASH_BIZ: // 현금영수증-사업자지출증빙
				if (
					f.dpCashBizNo1.value.length == 0 ||
					f.dpCashBizNo2.value.length == 0 ||
					f.dpCashBizNo3.value.length == 0
				)
					errMessage += '[거래증빙서류]\n사업자등록번호를 입력해 주세요.\n\n';
				break;
			case CONST_DEALPROOF_TAX: // 세금계산서
				if (f.dpIssueKind.value.length == 0 || f.dpTaxBizNo.value.length == 0)
					errMessage += '[거래증빙서류]\n사업자정보를 입력해 주세요.\n\n';
				break;
		}

		if (errMessage) {
			alert(
				'필수 입력 정보를 입력하여 주세요.\n--------------------------------------------------------\n\n' +
					errMessage,
			);
			return false;
		}
	}

	var settlePrice = f.settlePrice.value.toNumeric();

	// 결제금액 0 원(적립금, 쿠폰... 사용)
	if (settlePrice == 0) {
		payIng = 1;
		$('#order_payment_button').hide();
		$('#order_payment_progress').show();

		f.action = 'order_process';
		f.target = '_self';
		f.submit();
		return;
	}

	// 온라인입금 (5만원 이상 에스크로 적용)
	else if (payway == CONST_PAYWAY_ONLINE) {
		// 에스크로 결제
		if (
			(escrowPayway & CONST_PAYWAY_VIRTUAL) > 0 &&
			settlePrice >= 50000 &&
			getGoodsSize() == 1
		) {
			if (
				confirm(
					'에스크로를 이용하실 수 있습니다.\n에스크로를 이용하여 결제를 진행하시겠습니까?',
				)
			) {
				payVirtual(f, true, true);
				return;
			}
		}

		payIng = 1;
		$('#order_payment_button').hide();
		$('#order_payment_progress').show();

		f.action = 'order_process';
		f.target = '_self';
		f.submit();
		return;
	}

	// PAYCO
	else if (payway == CONST_PAYWAY_PAYCO) {
		payPaycoReserve(f);
	}

	// 신용카드, 실시간계좌이체, 가상계좌, 휴대폰, 유선전화
	else {
		//		if (settlePrice < 1000) {
		var strPayway;
		switch (payway) {
			case CONST_PAYWAY_CARD:
				strPayway = '신용카드';
				break;
			case CONST_PAYWAY_BANK:
				strPayway = '계좌이체';
				break;
			case CONST_PAYWAY_VIRTUAL:
				strPayway = '가상계좌';
				break;
			case CONST_PAYWAY_KAKAOPAY:
				strPayway = '카카오페이';
				break;
			case CONST_PAYWAY_PHONE:
				strPayway = '휴대폰';
				break;
			case CONST_PAYWAY_PAYCO:
				strPayway = 'KCP페이코';
				break;
		}
		//			alert("1,000원 미만의 금액은 "+strPayway+"를 이용하여 결제하실 수 없습니다.");
		//			return;
		//		}

		var usableEscrow = (escrowPayway & payway) > 0 ? true : false;

		switch (payway) {
			case CONST_PAYWAY_CARD:
				payCard(f, usableEscrow);
				break;
			case CONST_PAYWAY_BANK:
				payBank(f, usableEscrow);
				break;
			case CONST_PAYWAY_VIRTUAL:
				payVirtual(f, usableEscrow);
				break;
			case CONST_PAYWAY_KAKAOPAY:
				payKakaopay(f);
				break;
			case CONST_PAYWAY_PHONE:
				payPhone(f);
				break;
			case CONST_PAYWAY_PAYCO:
				payPayco(f);
				break;
		}
		return;
	}
}

function failPay(failmsg) {
	console.log('failPay called msg=' + failmsg);

	payIng = 0;
	if (typeof failmsg != 'undefined') alert(failmsg);
	$('#order_payment_progress').hide();
	$('#order_payment_button').show();

	$('#frmPay').attr({ src: '/dummy.htm' });
}
