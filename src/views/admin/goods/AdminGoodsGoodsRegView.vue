<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				상품등록<button
					id="addBmark"
					onclick="addBookmark('상품등록')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>상품관리</li>
				<li>상품등록</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>가격과 상품이미지 설정하여 상품등록합니다.</li>
			<li>
				<span class="red">*</span>로 설정된 부분은 필수 입력하셔야 합니다.
			</li>
			<li>시중가를 적으면 세일이 적용됩니다. (필요할 경우에만 입력하세요.)</li>
		</ul>

		<!-- <script type="text/javascript">
			var console = window.console || { log: function () {} };

			var CONST_PAYWAY_CARD = 1; // 신용카드
			var CONST_PAYWAY_BANK = 2; // 실시간계좌이체
			var CONST_PAYWAY_VIRTUAL = 4; // 가상계좌
			var CONST_PAYWAY_ONLINE = 128; // 온라인입금
			var CONST_PAYWAY_PHONE = 1024; // 휴대폰
			var CONST_PAYWAY_ETC = 512; // 기타
			var CONST_PAYWAY_KAKAOPAY = 32; // 카카오페이
			var CONST_PAYWAY_PAYCO = 64; // 페이코

			var CONST_DELIVERY_DEFAULT_FREE = 100; // 기본정책 포함하여 배송비 무료
			var CONST_DELIVERY_DEFAULT = 990;
			var CONST_DELIVERY_DEALER = 920;
			var CONST_DELIVERY_GOODS = 910;
			var CONST_DELIVERY_FREE = 101;
			var CONST_DELIVERY_PREPAY = 102;
			var CONST_DELIVERY_COLLECT = 103;

			var CONST_COUPON_KIND_GOODS = '100';
			var CONST_COUPON_KIND_CART = '200';
			var CONST_COUPON_KIND_DELIVERY = '300';

			var CONST_CMONEY_POLICY_PRICE_SALE = 2; // 적립금-판매가 정률
			var CONST_CMONEY_POLICY_PRICE_PAY = 4; // 적립금-결제가 정률
			var CONST_CMONEY_POLICY_AMOUNT = 8; // 적립금-수량 정액

			var CONST_DEALPROOF_CASH_PER = '101'; // 현금영수증-개인소득공제
			var CONST_DEALPROOF_CASH_BIZ = '102'; // 현금영수증-사업자지출증빙
			var CONST_DEALPROOF_TAX = '200'; // 세금계산서

			var CONST_UNIT_MONEY = '100';
			var CONST_UNIT_PERCENT = '200';

			var CONST_PRICE_ROUND_UNIT = -1;

			var CONST_STOCK_LIMITLESS = 0; // 무제한
			var CONST_STOCK_QUANTITY = 1; // 수량(제한)
			var CONST_STOCK_SOLDOUT = 2; // 품절
		</script> -->

		<!-- 에디터 Script -->
		<!-- <script
			type="text/javascript"
			src="/common/editor/se2/js/HuskyEZCreator.js"
		></script>

		<script type="text/javascript">
			//]]>
		</script>

		<script type="text/javascript">
			$(function () {
				/*
		var mp = new MallJsonParam("aaa");
		mp.add("a", "1");
		mp.add("b", "1");
		mp.add("c", "1");
		mp.add("d", "1");
		console.log(mp.stringify());
*/
				/*
		// 상품 옵션 테스트
		var gai1 = new GoodsAdditionItem();
		gai1.name("LG").price(1000).originalPrice(900).stock(CONST_STOCK_LIMITLESS).sort(1);
		//gai1.toString();
		
		var gai2 = new GoodsAdditionItem();
		gai2.name("대우").price(1500).originalPrice(1300).stock(CONST_STOCK_QUANTITY).quantity(100).sort(2);
		//gai2.toString();
		
		var gai3 = new GoodsAdditionItem();
		gai3.name("삼성").price(2000).originalPrice(1800).stock(CONST_STOCK_QUANTITY).quantity(20).sort(3).soldOut("T");
		//gai3.toString();
		
		var ga = new GoodsAddition();
		ga.name("모니터").isUseAddition("T");
		ga.addItem(gai1);
		ga.addItem(gai2);
		ga.addItem(gai3);
		
		//ga.toString();
		var f = document.Frm;
		f.goodsAddition.value = ga.getStringifyValue();
*/
				/*
		var arrGoodsAddition = new GoodsAdditionArray();
		
		var ga1 = new GoodsAddition();
		ga1.name("모니터");
		
		var gai1 = new GoodsAdditionItem();
		gai1.name("LG").price(1000).originalPrice(900).stock(CONST_STOCK_LIMITLESS).sort(1);
		ga1.addItem(gai1);
		
		var gai2 = new GoodsAdditionItem();
		gai2.name("대우").price(1500).originalPrice(1300).stock(CONST_STOCK_QUANTITY).quantity(100).sort(2);
		ga1.addItem(gai2);
		
		var gai3 = new GoodsAdditionItem();
		gai3.name("삼성").price(2000).originalPrice(1800).stock(CONST_STOCK_QUANTITY).quantity(20).sort(3).soldOut("T");
		ga1.addItem(gai3);
		
		arrGoodsAddition.addAddition(ga1);
		
		
		var ga2 = new GoodsAddition();
		ga2.name("CPU");
		
		var gai4 = new GoodsAdditionItem();
		gai4.name("Intel").price(4000).originalPrice(4444).stock(CONST_STOCK_LIMITLESS).sort(1);
		ga2.addItem(gai4);
		
		var gai5 = new GoodsAdditionItem();
		gai5.name("AMD").price(5000).originalPrice(5555).stock(CONST_STOCK_QUANTITY).quantity(100).sort(2);
		ga2.addItem(gai5);
		
		arrGoodsAddition.addAddition(ga2);
		
		//console.log(arrGoodsAddition.getStringifyValue());
		
		var f = document.Frm;
		f.goodsAddition.value = arrGoodsAddition.getStringifyValue();
*/
			});
			//]]>
		</script>

		<script type="text/javascript">
			function download(filename) {
				frmProc.location.replace(
					'/common/download/goods?file=' + filename + '&gno=' + '0',
				);
			}

			function changeImgRegAuto(obj) {
				if (obj.checked) {
					$('.imgManuals').hide();
				} else {
					$('.imgManuals').show();
				}
			}

			// 회원등급설정 정리
			/*function adjustMemberLevel() {
	var f = document.Frm;
	var cmoneyPolicy = '';
	var pTotals = pCheckeds = 0;

	if ($('input:radio[name="cmoneyPolicy"]').length > 0) {
		cmoneyPolicy = getRadio(f.cmoneyPolicy);
	}
	else {
		cmoneyPolicy = f.cmoneyPolicy.value;		
	}

	$('input[name="memberLevelParent"]').each(function() {
		var $cb = $(this).parent().next().find('input:checkbox');

		var checkedSize = 0;
		$cb.each(function() {
			$('input[name="memberLevelDiscountRate_'+this.value+'"]').prop('disabled', !this.checked);
			$('input[name="memberLevelSalePrice_'+this.value+'"]').prop('disabled', !this.checked);

			if (cmoneyPolicy == '1') {
				$('input[name="cmoneyMemberLevelRate_'+this.value+'"]').prop('disabled', !this.checked);
			}

			if (this.checked) ++checkedSize;
		});
		$(this).prop('checked', ($cb.length<=checkedSize ? true : false));

		if ($(this).is(':checked')) ++pCheckeds;
		++pTotals;
	});

	$('#member_level_all').prop('checked', (pTotals<=pCheckeds ? true : false));
}*/

			//재고설정 확인
			function checkStock() {
				var f = document.Frm;

				if (getRadio(f.stock) == '0') {
					f.quantity.readOnly = false;
					f.quantity.disabled = true;
					f.quantity.style.backgroundColor = '#E0E0E0';
				}
				//재고옵션
				else if (getRadio(f.optionKind) == '200') {
					f.quantity.readOnly = true;
					f.quantity.disabled = false;
					f.quantity.style.backgroundColor = '#E0E0E0';
					// 		f.quantity.value = f.optQuantityTotal.value;
				} else {
					f.quantity.readOnly = false;
					f.quantity.disabled = false;
					f.quantity.style.backgroundColor = '';
				}
			}

			//정책 설정
			function setPolicy() {
				var f = document.Frm;

				if (f.dealerNo.value.toNumeric() > 0) {
					if ($(f.cmoneyPolicy).is(':radio')) {
						setRadioDisabled(f.cmoneyPolicy, '128', false);
					}

					setRadioDisabled(f.deliveryMethod, '920', false);
				} else {
					if ($(f.cmoneyPolicy).is(':radio')) {
						setRadioDisabled(f.cmoneyPolicy, '128', true);

						if (getRadio(f.cmoneyPolicy) == '128') {
							setRadio(f.cmoneyPolicy, '256');
						}
					}

					setRadioDisabled(f.deliveryMethod, '920', true);

					if (getRadio(f.deliveryMethod) == '920') {
						setRadio(f.deliveryMethod, '990');
					}
				}
			}

			// 적립금정책 확인
			function checkCmoneyPolicy() {
				var f = document.Frm;

				if ($('input:radio[name="cmoneyPolicy"]').length > 0) {
					$('input[name="cmoneyPolicy"]')
						.closest('td')
						.find('input:text, select')
						.prop('disabled', true);

					switch (getRadio(f.cmoneyPolicy)) {
						case '6':
							f.cmoneyPolicyPrice.disabled = false;
							f.cmoneyPercent.disabled = false;
							break;
						case '8':
							f.cmoneyMoney.disabled = false;
							break;
					}
				}
			}

			// 배송료설정 확인
			function checkDeliveryMethod() {
				var f = document.Frm;

				f.deliveryFeeCollect.disabled = true;
				f.deliveryFeeCollect.style.backgroundColor = '#E0E0E0';
				f.deliveryLimitCollect.disabled = true;
				f.deliveryLimitCollect.style.backgroundColor = '#E0E0E0';
				f.deliveryFeePrepay.disabled = true;
				f.deliveryFeePrepay.style.backgroundColor = '#E0E0E0';
				f.deliveryLimitPrepay.disabled = true;
				f.deliveryLimitPrepay.style.backgroundColor = '#E0E0E0';

				switch (getRadio(f.deliveryMethod)) {
					case '103':
						f.deliveryFeeCollect.disabled = false;
						f.deliveryFeeCollect.style.backgroundColor = '';
						f.deliveryLimitCollect.disabled = false;
						f.deliveryLimitCollect.style.backgroundColor = '';
						break;
					case '102':
						f.deliveryFeePrepay.disabled = false;
						f.deliveryFeePrepay.style.backgroundColor = '';
						f.deliveryLimitPrepay.disabled = false;
						f.deliveryLimitPrepay.style.backgroundColor = '';
						break;
				}
			}
			//]]>
		</script>

		<script type="text/javascript">
			var cellHtmls = new Array();

			cellHtmls['tb_category'] = new Array();
			cellHtmls['tb_category'][0] = {
				html: '<input type="hidden" name="cate" value="#CODE#" cms="#CMS#" /><label><input type="radio" name="cateDefault" value="#CODE#" onclick="cateDefaultCms(this)" />선택</label>',
			};
			cellHtmls['tb_category'][1] = { html: '#CATEGORY#', css: 'txt' };
			cellHtmls['tb_category'][2] = {
				html: '<button type="button" onClick="delCate(this)" class="btn_sec sm">삭제</button>',
			};

			cellHtmls['tb_img_etc'] = new Array();
			cellHtmls['tb_img_etc'][0] = { html: '<span class="numbering"></span>.' };
			cellHtmls['tb_img_etc'][1] = {
				html: '<label><input type="checkbox" name="cbImgEtc">선택</label><input type="hidden" name="imgIdx" />',
			};
			cellHtmls['tb_img_etc'][2] = {
				html: '<input type="file" name="imgEtc"  onKeyPress="blockKey(event)" onKeyDown="blockKey(event)" />',
			};
			cellHtmls['tb_img_etc'][3] = { html: '' };

			cellHtmls['tb_notify'] = new Array();
			cellHtmls['tb_notify'][0] = { html: '<span class="numbering"></span>' };
			cellHtmls['tb_notify'][1] = {
				html: '<input type="hidden" name="notifyNo" value=""/><label><input type="checkbox" name="cbNotify" />선택</label>',
			};
			cellHtmls['tb_notify'][2] = {
				html: '<input type="text" name="notifyName" class="text_input wide" style="width:170px" maxlength="100" />',
			};
			cellHtmls['tb_notify'][3] = {
				html: '<textarea name="notifyData" rows="2" class="text_input wide" onKeyUp="checkTextLen(this, 2000)"></textarea>',
				css: 'last',
			};

			function addRow(tbId, replacements, htmlKey) {
				var $table = $('#' + tbId);

				var headSize = $table.attr('head')
					? $table.attr('head').toString().toNumeric()
					: 0;
				var maxSize = $table.attr('max')
					? $table.attr('max').toString().toNumeric()
					: 0;
				var rowSize = $('tr', $table).length;

				if (maxSize > 0 && rowSize - headSize >= maxSize) {
					alert(
						'더 이상 추가할 수 없습니다.\n\n최대 ' +
							maxSize +
							'개까지 추가할 수 있습니다.',
					);
					return false;
				}

				var htmls = cellHtmls[htmlKey ? htmlKey : tbId];

				var $tr = $('<tr />');
				for (i = 0; i < htmls.length; i++) {
					var html = htmls[i].html;

					if (replacements) {
						for (var key in replacements) {
							html = html.replaceAll(key, replacements[key]);
						}
					}

					if (tbId == 'tb_notify') {
						html = html.replaceAll(
							'name="notifyNo" value=""',
							'name="notifyNo" value="' +
								($('#' + tbId + ' tr').length + 1) +
								'"',
						);
					}

					$(
						'<td' +
							(htmls[i].css ? ' class="' + htmls[i].css + '"' : '') +
							' />',
					)
						.html(html)
						.appendTo($tr);
				}

				$table.append($tr);

				numbering(tbId);

				return true;
			}

			function delRow(obj, tbId) {
				var $table = null;
				if (typeof tbId == 'undefined') {
					$table = $(obj).parents('table').first();
					tbId = $table.attr('id');
				} else {
					$table = $('#' + tbId);
				}

				var headSize = $table.attr('head')
					? $table.attr('head').toString().toNumeric()
					: 0;
				var noBlank = $table.attr('noBlank')
					? $table.attr('noBlank').toString().toNumeric()
					: 0;

				$(obj).parents('tr').first().remove();

				numbering(tbId);

				if (noBlank && $('tr', $table).length - headSize < 1) addRow(tbId);

				return true;
			}

			function delRowList(tbId) {
				var f = document.Frm;

				var $table = $('#' + tbId);
				var $cb = null;

				switch (tbId) {
					case 'tb_img_etc':
						$cb = $(f.cbImgEtc);
						break;
					case 'tb_notify':
						$cb = $(f.cbNotify);
						break;
				}

				var headSize = $table.attr('head')
					? $table.attr('head').toString().toNumeric()
					: 0;
				var noBlank = $table.attr('noBlank')
					? $table.attr('noBlank').toString().toNumeric()
					: 0;

				var checker = 0;
				$cb.each(function () {
					if (this.checked) ++checker;
				});

				if (checker <= 0) {
					alert('삭제할 항목을 선택해주세요.');
					return;
				}

				$cb.each(function () {
					if (this.checked) {
						$(this).parents('tr').first().remove();
					}
				});

				numbering(tbId);

				if (noBlank && $('tr', $table).length - headSize < 1) addRow(tbId);

				return true;
			}

			function numbering(tbId) {
				$('span.numbering', $('#' + tbId)).each(function (index) {
					$(this).text(index + 1);
				});
			}
			//]]>
		</script>

		<script type="text/javascript">
			var cateDepth = '3'.toNumeric();
			var cateDepthGoods = '2'.toNumeric();

			function changeCate(obj) {
				var f = document.Frm;
				var depth = obj ? obj.getAttribute('depth').toString().toNumeric() : 0;
				var parent = obj ? obj.value : 0;

				var _depth = depth;
				var _parent = parent;

				if (cateDepth > depth) {
					$.ajax({
						type: 'GET',
						dataType: 'json',
						url: '/common/ajax/category_ajax',
						cache: false,
						data: { parent: parent, depth: depth },
						error: function (request, status, error) {
							alert(request.responseText);
						},
						success: function (data) {
							var depth = data.depth.toString().toNumeric();

							for (i = depth; i <= cateDepth; i++) {
								removeSelectOptionAll(f['cate_' + i]);
								addSelectOption(f['cate_' + i], '선택', '');
							}

							var objSelect = f['cate_' + depth];

							if (_parent == '' && _depth == 1) {
								$("select[name='scate_2'] option").not("[value='']").remove();
							} else if (_parent == '' && _depth == 2) {
								$("select[name='scate_3'] option").not("[value='']").remove();
							} else {
								if (data.list) {
									for (var i = 0; i < data.list.length; i++) {
										var objOption = document.createElement('option');
										with (objOption) {
											text = data.list[i].name + ' [' + data.list[i].cms + '%]';
											value = data.list[i].cate;
											setAttribute('name', data.list[i].name);
											setAttribute('cms', data.list[i].cms);
											setAttribute('child', data.list[i].child);
										}
										objSelect.options.add(objOption);
									}
								}
							}
						},
					});
				}
			}

			// 카테고리 처리
			function addCate() {
				var f = document.Frm;
				var cate = (cms = child = depth = 0);
				var category = '';

				for (var i = 1; i <= cateDepth; i++) {
					var objOption = f['cate_' + i].options[f['cate_' + i].selectedIndex];

					if (!isEmpty(objOption)) {
						cate = objOption.value.toNumeric();
						cms = objOption.getAttribute('cms').toString().toNumeric();
						child = objOption.getAttribute('child').toString().toNumeric();

						category += (category ? '>' : '') + objOption.getAttribute('name');
						depth = i;
					}
				}

				category += ' [' + cms + '%]';

				if (cate == 0) {
					alert('카테고리를 선택해 주세요.');
					f.cate_1.focus();
					return false;
				}

				if (cateDepthGoods > depth) {
					alert('카테고리를 ' + cateDepthGoods + '단계 이상 선택해 주세요.');
					return false;
				}

				if (child > 0) {
					alert('하위 카테고리가 존재하지 않는 카테고리만 선택할 수 있습니다.');
					return false;
				}

				if (f.cate) {
					if (typeof f.cate.length == 'undefined') {
						if (f.cate.value == cate.toString()) {
							alert('이미 추가된 상품분류 입니다.');
							return false;
						}
					} else {
						for (var i = 0; i < f.cate.length; i++) {
							if (f.cate[i].value == cate.toString()) {
								alert('이미 추가된 상품분류 입니다.');
								return false;
							}
						}
					}
				}

				if (f.dealerCmsType.value == 'CTG') {
					// 입점업체 수수료 설정 : 카테고리 경우
					if (typeof f.cate == 'undefined') {
						// 등록한 카테고리가 없는 경우
						f.margin.value = cms;
					} else if (
						getRadio(f.cmsType) != 'GOS' &&
						f.margin.value.toNumeric() != cms
					) {
						alert(
							'수수료율이 서로 다른 다중 카테고리를 선택하셨습니다.\n기본카테고리 수수료율로 설정합니다.',
						);
						if (checkCmsType() == false) {
							return;
						}
					}
				} else {
					// 입점업체 수수료 설정 : 입점업체 경우
					f.margin.value = f.dealerCmsRate.value.toNumeric();
				}

				if (
					addRow('tb_category', {
						'#CODE#': cate,
						'#CATEGORY#': category,
						'#CMS#': cms,
					})
				) {
					setCateDefault();
				}

				calcPrice();
			}

			function delCate(obj) {
				if (delRow(obj) == true) {
					setCateDefault();
				}
			}

			function setCateDefault() {
				var f = document.Frm;
				if (f.cateDefault) {
					if (typeof f.cateDefault.length == 'undefined') {
						f.cateDefault.checked = true;
						cateDefaultCms(f.cateDefault);
					} else if (getRadio(f.cateDefault) == '') {
						f.cateDefault[0].checked = true;
						cateDefaultCms(f.cateDefault[0]);
					}
				}
			}

			function checkDifferCateCms() {
				var f = document.Frm;
				var previous = -1;
				var result = false;

				if (f.cate && typeof f.cate.length != 'undefined') {
					for (var i = 0; i < f.cate.length; i++) {
						var cms = f.cate[i].getAttribute('cms').toString().toNumeric();
						if (previous > 0 && previous != cms) result = true;
						previous = cms;
					}
				}
				return result;
			}
			//]]>
		</script>

		<script type="text/javascript">
			function openSelectGoods(target, dealerno) {
				openPopup(
					'/common/select/select_goods_pop?target=' +
						target +
						'&dealerno=' +
						dealerno,
					'SelectGoods',
					1100,
					800,
					'scrollbars=yes',
				);
			}

			function takeSelectGoods(target, goods) {
				var f = document.Frm;
				var objSelect = f[target];
				var max =
					objSelect.getAttribute('max') == null
						? 0
						: objSelect.getAttribute('max').toString().toNumeric();

				if (max > 0 && max <= objSelect.length) {
					alert(
						'더 이상 추가할 수 없습니다.\n\n최대 ' +
							max +
							'개까지 추가할 수 있습니다.',
					);
					return false;
				}

				var isExist = false;
				for (var i = 0; i < objSelect.length; i++) {
					if (objSelect.options[i].value == goods.no.toString()) isExist = true;
				}

				if (isExist) alert('이미 추가된 상품입니다.');
				else {
					addSelectOption(objSelect, goods.name, goods.no);
					return true;
				}
			}

			function addGoods(target, dealerno) {
				var f = document.Frm;

				if (!f[target].disabled) {
					openSelectGoods(target, dealerno);
				}
			}

			function delGoods(target) {
				var f = document.Frm;
				var objSelect = f[target];

				for (var i = objSelect.length - 1; i > -1; i--) {
					if (objSelect[i].selected) removeSelectOption(objSelect, i);
				}
			}

			function moveGoods(target, direction) {
				var f = document.Frm;

				var objSelect = f[target];

				var checker = 0;
				for (var i = 0; i < objSelect.length; i++) {
					if (objSelect[i].selected) {
						if (checker > 0) objSelect[i].selected = false;
						else checker = 1;
					}
				}

				var currIdx = objSelect.selectedIndex;

				if (currIdx == -1) return false;

				if (
					(currIdx <= 0 && direction == 'UP') ||
					(currIdx >= objSelect.length - 1 && direction == 'DOWN')
				)
					return false;

				var currText = objSelect.options[currIdx].text;
				var currValue = objSelect.options[currIdx].value;

				if (direction == 'UP') {
					objSelect.options[currIdx].text = objSelect.options[currIdx - 1].text;
					objSelect.options[currIdx].value =
						objSelect.options[currIdx - 1].value;
					objSelect.options[currIdx - 1].text = currText;
					objSelect.options[currIdx - 1].value = currValue;
					currIdx = currIdx - 1;
				} else if (direction == 'DOWN') {
					objSelect.options[currIdx].text = objSelect.options[currIdx + 1].text;
					objSelect.options[currIdx].value =
						objSelect.options[currIdx + 1].value;
					objSelect.options[currIdx + 1].text = currText;
					objSelect.options[currIdx + 1].value = currValue;
					currIdx = currIdx + 1;
				}

				for (var i = 0; i < objSelect.length; i++) {
					objSelect[i].selected = false;
				}
				objSelect[currIdx].selected = true;
			}

			function openGoods(obj) {
				var index = obj.selectedIndex;
				if (index == -1) return false;

				window.open('/goods/detail?gno=' + obj.options[index].value);
			}

			function getNotify(obj) {
				if (!isEmpty(obj)) {
					$.ajax({
						type: 'POST',
						url: '/common/ajax/notifyTpl_ajax',
						data: { idx: obj.value },
						error: function (request, status, error) {
							alert(request.responseText);
						},
						success: function (data) {
							$('#tb_notify').remove();
							$('.notify').append(data);
						},
					});
				}
				//obj.value = "";
			}
			//]]>
		</script>

		<script type="text/javascript">
			// 상품아이콘 등록/수정 오픈
			function openIcon() {
				openPopup(
					'/nmanager/goods/goods_icon_pop',
					'Icon',
					498,
					500,
					'scrollbars=1',
				);
			}

			$(function () {});

			function removeTag(str) {
				str = str.replace(/(\&gt\;)/gi, '>');
				str = str.replace(/(\&lt\;)/gi, '<');
				return str.replace(/(<([^>]+)>)/gi, '');
			}

			function setIcons() {
				$.ajax({
					type: 'POST',
					dataType: 'json',
					url: '/common/ajax/goodsIcons_ajax',
					data: { gno: '0' },
					error: function (request, status, error) {
						alert(request.responseText);
					},
					success: function (data) {
						var f = document.Frm;
						var icons = new Array();

						if (data) {
							for (var i = 0; i < data.list.length; i++) {
								var checked = data.list[i].checked
									? data.list[i].checked.toString().toNumeric()
									: -1;

								icons[data.list[i].code.toString().toNumeric()] = {
									img: data.list[i].icon.trim(),
									checked: checked,
								};
							}
						}

						$(f.icon).each(function () {
							var code = this.value.toNumeric();

							if (icons[code] && icons[code].img) {
								this.disabled = false;
								if (icons[code].checked > -1) {
									this.checked = icons[code].checked ? true : false;
								}

								/* 					var $parent = $('#icon_'+code).parent();
					$parent.children().remove();

					$('<img id="icon_'+code+'" src="//bootdev.mallstore.co.kr'+icons[code].img+'" />').appendTo($parent).parent().parent().adjustImage({
						type: 'both-max'
					}); */
								var $label = $('#cb_icon_' + code).parent('label');
								var imgElement =
									'<img id="icon_' +
									code +
									'" src="//bootdev.mallstore.co.kr' +
									icons[code].img +
									'"/>';

								$label.children('img').remove();
								$label.append(imgElement);
							} else {
								var $label = $('#cb_icon_' + code).parent('label');

								$label.remove();
								/*  					this.disabled = true;
					$('icon_'+code).attr('src', '/images/blank.gif').css({
						width: 1,
						height: 1
					}); */
							}
						});
					},
				});
			}
			//]]>
		</script>

		<script type="text/javascript">
			// 가격 계산시 절사단위
			var priceRoundUnit = '-1'.toNumeric();

			// 상품공급업체 확인
			function changeDealer(obj) {
				var f = document.Frm;

				if (!isEmpty(obj)) {
					var objOption = obj.options[obj.selectedIndex];
					var dealerNo = objOption.value.toNumeric();
					var dealerName = dealerNo
						? objOption.text.substring(0, objOption.text.indexOf('(') - 1)
						: objOption.text;
					var dealerCmsType = objOption.getAttribute('cmsType');
					var dealerCmsRate = objOption.getAttribute('cmsRate');
					f.dealerCmsType.value = dealerCmsType;
					f.dealerCmsRate.value = dealerCmsRate;

					if (getRadio(f.cmsType) != 'GOS') {
						if (dealerCmsType == 'MIM') {
							f.margin.value = dealerCmsRate;

							alert(
								dealerName +
									' 업체는 입점업체별 수수료로 ' +
									dealerCmsRate +
									'% 설정됩니다.',
							);
						} else if (dealerCmsType == 'CTG') {
							f.dealerCmsType.value = dealerCmsType;
							f.dealerCmsRate.value = 0;

							// 기본으로 설정된 카테고리의 수수료율을 마진율로 적용
							// 등록한 카테고리가 없는 경우
							if (typeof f.cate == 'undefined') {
								f.margin.value = 0;
								alert(
									dealerName +
										'업체는 카테고리별 수수료로 설정되어있습니다.\n카테고리를 선택해주세요.',
								);
								$('#cate_1').focus();
							} else {
								var cateCms = $('input[name="cateDefault"]:checked')
									.prev()
									.attr('cms');
								f.margin.value = cateCms;
								alert(
									dealerName + '업체는 기본 카테고리 수수료로 설정했습니다.',
								);
							}
						}
					}
				}

				f.dealerNo.value = obj.options[obj.selectedIndex].value;

				setPolicy();
				calcPrice();
			}

			// 수수료 설정 확인
			function checkCmsType() {
				var f = document.Frm;

				// 현재 선택된 입점업체 수수료 타입
				var currentDealerCmsType = f.dealerCmsType.value;
				console.log('현재 딜러의 cms 타입 = ' + currentDealerCmsType);

				if (getRadio(f.cmsType) != 'GOS') {
					// 카테고리 또는 입점업체 수수료로 설정한 경우
					checkPriceSplit('100');

					if (f.dealerCmsType.value == 'CTG') {
						// 입점업체 수수료 설정 : 카테고리 경우
						if (typeof f.cate == 'undefined') {
							f.margin.value = 0;
						} else {
							var cateCms = $('input[name="cateDefault"]:checked')
								.prev()
								.attr('cms');
							f.margin.value = cateCms;
						}
					} else {
						// 입점업체 수수료 설정 : 입점업체 경우
						f.margin.value = f.dealerCmsRate.value.toNumeric();
					}

					calcPrice();
				}
			}

			// 가격입력 : 기준 설정
			function checkPriceSplit(code) {
				var f = document.Frm;

				if (code == '100') {
					// 공급가 기준
					f.originalPrice.style.backgroundColor = '';
					f.margin.style.backgroundColor = '#E0E0E0';
					f.originalPrice.readOnly = false;
					f.margin.readOnly = true;
					setRadio(f.priceSplit, '100');
				} else {
					// 수수료 기준
					if (getRadio(f.cmsType) != 'GOS') {
						setRadio(f.priceSplit, '100');
						alert(
							'수수료 설정이 상품별 수수료 설정일 경우에만 선택이 가능합니다.',
						);
						return false;
					}

					f.originalPrice.style.backgroundColor = '#E0E0E0';
					f.margin.style.backgroundColor = '';
					f.originalPrice.readOnly = true;
					f.margin.readOnly = false;
				}
			}

			// 가격입력 : 계산
			function calcPrice(caller) {
				var f = document.Frm;

				if (typeof caller == 'undefined') caller = f.price;

				var price = f.price.value.toNumeric();
				var margin = f.margin.value.toNumeric();
				var originalPrice = f.originalPrice.value.toNumeric();

				if (margin > 100) {
					alert('수수료는 100% 이하로 설정하셔야 됩니다.');
					margin = 100;
					f.margin.value = margin;
				}

				if (getRadio(f.priceSplit) == '100') {
					// 공급가 기준 경우
					if (getRadio(f.cmsType) != 'GOS') {
						// 카테고리 또는 입점업체 수수료 설정
						// 판매가 입력 경우
						if (caller.name == 'price') {
							originalPrice = setRound(
								price - (price * margin) / 100,
								priceRoundUnit,
							);
							f.originalPrice.value = formatComma(originalPrice);
						}
						// 공급가 입력 경우
						else if (margin == 100) {
							f.price.value = 0;
							f.originalPrice.value = 0;
						} else {
							price = setRound(
								(originalPrice / (100 - margin)) * 100,
								priceRoundUnit,
							);
							f.price.value = formatComma(price);
						}
					} else {
						// 상품별 수수료 설정
						margin = price == 0 ? 0 : 100 - (originalPrice / price) * 100;
						f.margin.value = setRound(margin, 2);
					}
				} else {
					// 수수료 기준 경우
					originalPrice = setRound(
						(price * (100 - margin)) / 100,
						priceRoundUnit,
					);
					f.originalPrice.value = formatComma(originalPrice);
				}

				//	calcDiscountAll();
			}

			/*function calcDiscount(obj) {
	var f = document.Frm;
	var price = f.price.value.toNumeric();
	var value = obj.value.toNumeric();

	if (price <= 0) {
		alert("판매가를 입력해 주세요.");
		f.price.focus();
		return false;
	}

	switch (obj.name.split('_')[0]) {
		case 'memberLevelDiscountRate':
			$(obj).parent().next().children('input').val(formatComma(setRound(price * (1 - (value / 100)), priceRoundUnit)));
		break;
		case 'memberLevelSalePrice':
			$(obj).parent().prev().children('input').val(price>0 ? setRound((1 - (value / price)) * 100, 0) : 0);
		break;
	}
	return true;
}

function calcDiscountAll(init) {
	var f = document.Frm;
	var price = f.price.value.toNumeric();

	$('input[name^="memberLevelDiscountRate"]').each(function() {
		if (init) {
			if (price > 0 && $(this).parent().next().children('input').val().toNumeric() <= 0) {
				calcDiscount(this);
			}
		} else {
			if (price > 0) {
				calcDiscount(this);
			} else {
				$(this).parent().next().children('input').val('');
			}
		}
	});
}*/

			// 절사단위 확인
			function checkPriceRound(obj) {
				var f = document.Frm;

				if (typeof f.cate == 'undefined') return false;

				var value = obj.value.toNumeric();
				if (value != setRound(value, priceRoundUnit)) {
					obj.value = formatComma(setRound(value, priceRoundUnit));
					calcPrice(obj);
				}
			}
			//]]>
		</script>

		<script type="text/javascript">
			function validSubmit() {
				// 	if (!validOption()) return false;
				// 	return false;

				var f = document.Frm;

				if (f.goodsDealer && isEmpty(f.goodsDealer)) {
					alert('상품공급업체를 선택해 주세요.');
					f.goodsDealer.focus();
					return false;
				}

				if (typeof f.cate == 'undefined') {
					alert('카테고리를 선택해 주세요.');
					f.cate_1.focus();
					return false;
				}

				if (isEmpty(f.goodsName)) {
					alert('상품명을 입력해 주세요.');
					f.goodsName.focus();
					return false;
				}

				// 이미지 관련 : 시작
				if (f.mode.value == 'REG' && isEmpty(f.imgB)) {
					alert('이미지를 선택해 주세요.');
					f.imgB.focus();
					return false;
				}

				if (!isEmpty(f.imgB)) {
					if (
						!checkFileExt(
							f.imgB,
							'jpg,gif,png',
							'이미지(jpg, gif, png) 파일만 선택해 주세요.',
						)
					)
						return false;
				}

				if (!f.isImgAuto.checked) {
					if (f.mode.value == 'REG') {
						if (isEmpty(f.imgS)) {
							alert('이미지를 선택해 주세요.');
							f.imgS.focus();
							return false;
						}

						if (isEmpty(f.imgM)) {
							alert('이미지를 선택해 주세요.');
							f.imgM.focus();
							return false;
						}
					}

					if (!isEmpty(f.imgS)) {
						if (
							!checkFileExt(
								f.imgS,
								'jpg,gif,png',
								'이미지(jpg, gif, png) 파일만 선택해 주세요.',
							)
						)
							return false;
					}

					if (!isEmpty(f.imgM)) {
						if (
							!checkFileExt(
								f.imgM,
								'jpg,gif,png',
								'이미지(jpg, gif, png) 파일만 선택해 주세요.',
							)
						)
							return false;
					}
				}

				if (f.mode.value == 'REG') {
					if (isEmpty(f.imgB)) {
						alert('이미지를 선택해 주세요.');
						f.imgB.focus();
						return false;
					}
				}

				if (!isEmpty(f.imgB)) {
					if (
						!checkFileExt(
							f.imgB,
							'jpg,gif,png',
							'이미지(jpg, gif, png) 파일만 선택해 주세요.',
						)
					)
						return false;
				}

				if (typeof f.imgEtc.length == 'undefined') {
					if (!isEmpty(f.imgEtc)) {
						if (
							!checkFileExt(
								f.imgEtc,
								'jpg,gif,png',
								'이미지(jpg, gif, png) 파일만 선택해 주세요.',
							)
						)
							return false;
					}
				} else {
					for (var i = 0; i < f.imgEtc.length; i++) {
						if (!isEmpty(f.imgEtc[i])) {
							if (
								!checkFileExt(
									f.imgEtc[i],
									'jpg,gif,png',
									'이미지(jpg, gif, png) 파일만 선택해 주세요.',
								)
							)
								return false;
						}
					}
				}
				// 이미지 관련 : 끝

				if (
					!f.quantity.disabled &&
					f.quantity.value.toNumeric() >= '1000000'.toNumeric()
				) {
					alert('재고 수량은 1,000,000 미만으로 설정이 가능합니다.');
					f.quantity.focus();
					return false;
				}

				if (isEmpty(f.price)) {
					alert('판매가격을 입력해 주세요.');
					f.price.focus();
					return false;
				}

				if (f.margin.value.toNumeric() < 0) {
					alert('수수료율을 0 이상으로 설정해 주세요.');
					f.margin.focus();
					return false;
				}

				if (isEmpty(f.originalPrice)) {
					alert('공급가격을 입력해 주세요.');
					f.originalPrice.focus();
					return false;
				}

				/*if ($('.member_discount').length > 0) {
		var invalid = false;
		$('input[name^="memberLevelDiscountRate"]:not(:disabled)').each(function() {
			var $input = $(this).parent().next().children('input:text');

			var rate = this.value.toNumeric();
			var price = $input.val().toNumeric();

			if (rate < 0) {
				alert("회원등급별 할인율을 0 이상으로 입력해 주세요.");
				$input.val('0').focus();
				invalid = true;
				return false;
			}
			if (rate > 0 && rate < 100 && price == 0) {
				alert("회원등급별 할인 판매가를 입력해 주세요.");
				$input.focus();
				invalid = true;
				return false;
			}
		});
		if (invalid) return false;
	}*/

				if ($('input:radio[name="cmoneyPolicy"]').length > 0) {
					switch (getRadio(f.cmoneyPolicy)) {
						case '6':
							if (f.cmoneyPercent.value.toNumeric() <= 0) {
								alert('적립률을 입력해 주세요.');
								f.cmoneyPercent.focus();
								return false;
							}

							if (f.cmoneyPercent.value.toNumeric() > 100) {
								alert('100% 이하로 입력해 주세요.');
								f.cmoneyPercent.value = '100';
								f.cmoneyPercent.focus();
								return false;
							}

							if (
								!isEmpty(f.cmoneyPercent) &&
								!checkRound(f.cmoneyPercent.value, 2)
							) {
								alert('소수점 2자리수 이상은 불가능합니다.');
								f.cmoneyPercent.focus();
								return false;
							}
							break;
						case '8':
							if (f.cmoneyMoney.value.toNumeric() <= 0) {
								alert('적립금을 입력해 주세요.');
								f.cmoneyMoney.focus();
								return false;
							}
							break;
					}
				}

				var checker = 0;
				if (f.cbNotify) {
					if (typeof f.cbNotify.length == 'undefined') {
						if (!isEmpty(f.notifyName) && !isEmpty(f.notifyData)) ++checker;
					} else {
						for (var i = 0; i < f.cbNotify.length; i++) {
							if (!isEmpty(f.notifyName[i]) && !isEmpty(f.notifyData[i]))
								++checker;
						}
					}
				}
				if (checker == 0) {
					alert('상품정보고시를 입력해 주세요.');
					f.notify.focus();
					return false;
				}

				if (isEmpty(f.content)) {
					alert('상품의 상세정보를 입력해 주세요.');
					return false;
				}

				switch (getRadio(f.deliveryMethod)) {
					case '103':
						if (isEmpty(f.deliveryFeeCollect)) {
							alert('착불금액을 입력해 주세요.');
							f.deliveryFeeCollect.focus();
							return false;
						}
						break;
					case '102':
						if (isEmpty(f.deliveryFeePrepay)) {
							alert('선불금액을 적어주세요');
							f.deliveryFeePrepay.focus();
							return false;
						}
						break;
				}

				//옵션항목 데이터 파싱
				if (!validOption()) return false;

				if (confirm('등록하시겠습니까?')) {
					for (var i = 0; i < f.linkedRelate.length; i++) {
						f.linkedRelate[i].selected = true;
					}

					// 추가 구성 상품 Json Data 처리
					setFormGoodsAdditionJsonValue();

					f.target = 'frmProc';
					f.submit();
				}
			}

			function cancel() {
				//location.reload();
				history.back();
			}

			function setFormGoodsAdditionJsonValue() {
				// 전체 추가구성 목록을 담을 Array wrapper.
				var arrGoodsAddition = new GoodsAdditionArray();

				// DOM: 추가구성상품 목록.
				var $additionRows = $('.addition_container').find('.addition');
				$additionRows.each(function () {
					var addNo = $(this).find('input[name="addNo"]').val();
					var addIdx = $(this).find('input[name="addIdx"]').val();
					var addName = $(this).find('input[name="addName"]').val();
					//alert("addNo:"+addNo+" / addIdx:"+addIdx+" / addName:"+addName);

					// 추가구성 1건의 Object.
					var addition = new GoodsAddition();
					addition.idx(addIdx).name(addName);

					// DOM: 1개 추가구성상품 하위의 추가구성상품 항목 목록.
					var $itemRows = $(this).find('.addition_item');
					$itemRows.each(function (itemIndex) {
						var aiIdx = $(this)
							.find('input[name="addItemIdx' + addNo + '"]')
							.val();
						var aiName = $(this)
							.find('input[name="addItem' + addNo + '"]')
							.val();
						var aiPrice = $(this)
							.find('input[name="addPrice' + addNo + '"]')
							.val();
						var aiOriginalPrice = $(this)
							.find('input[name="addOriginalPrice' + addNo + '"]')
							.val();
						var aiSort = itemIndex + 1;
						var aiStockChecked = $(this)
							.find('input[name="cbAddStock"]')
							.is(':checked');
						var aiQuantity = $(this)
							.find('input[name="addQuantity' + addNo + '"]')
							.val();
						var aiSoldOutChecked = $(this)
							.find('input[name="cbAddSoldout"]')
							.is(':checked');
						var aiHiddenChecked = $(this)
							.find('input[name="cbAddHidden"]')
							.is(':checked');
						//alert("aiIdx:"+aiIdx+" / aiName:"+aiName+" / aiPrice:"+aiPrice+" / aiOriginalPrice:"+aiOriginalPrice+" / aiSort:"+aiSort);

						// 추가구성상품 항목 1건의 Object.
						var item = new GoodsAdditionItem();
						item
							.idx(aiIdx)
							.addIdx(addIdx)
							.name(aiName)
							.price(stripComma(aiPrice))
							.originalPrice(stripComma(aiOriginalPrice))
							.sort(aiSort);

						if (aiStockChecked) {
							item.stock(CONST_STOCK_QUANTITY).quantity(aiQuantity);
						} else {
							item.stock(CONST_STOCK_LIMITLESS);
						}

						if (aiSoldOutChecked) {
							item.soldOut('T');
						}

						if (aiHiddenChecked) {
							item.isDisplay('F');
						}

						addition.addItem(item);
					});

					arrGoodsAddition.addAddition(addition);
				});

				var f = document.Frm;
				f.goodsAddition.value = arrGoodsAddition.getStringifyValue();
			}

			function cateDefaultCms(obj) {
				var f = document.Frm;

				if (getRadio(f.cmsType) != 'GOS' && f.dealerCmsType.value != 'MIM') {
					var cateCms = $(obj).prev().attr('cms');

					f.margin.value = cateCms;

					calcPrice();
				}
			}

			/*$(function () {
	$('#member_level_all').bind('click', function() {
		$('input[name="memberLevel"]').prop('checked', this.checked);
		adjustMemberLevel();
	});
	$('input[name="memberLevelParent"]').bind('click', function() {
		$(this).parent().next().find('input[name="memberLevel"]').prop('checked', this.checked);
		adjustMemberLevel();
	});
	$('input[name="memberLevel"]').bind('click', function() {
		adjustMemberLevel();
	});

	adjustMemberLevel();
});*/

			/*$(function() {
	$('.member_discount input:text').bind('keyup', function() {
		return calcDiscount(this);
	});

	calcDiscountAll(true);
});*/

			$(function () {
				$('.laybox-image').laybox();
				$('.adjust_image_container').adjustImage();

				changeCate();
				setIcons();
				setPolicy();
				checkCmoneyPolicy();
				checkDeliveryMethod();
				checkOptionKind();
			});

			function togglecont(obj) {
				var box = $(obj).parent();

				if (box.hasClass('close')) {
					box.removeClass('close');
					$(obj).find('.openclose').html('CLOSE');
				} else {
					box.addClass('close');
					$(obj).find('.openclose').html('OPEN');
				}
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form
					name="Frm"
					method="post"
					action="goods_reg_act"
					enctype="multipart/form-data"
				>
					<input type="hidden" name="menu" value="" />
					<input type="hidden" name="mode" value="REG" />
					<input type="hidden" name="gno" value="0" />
					<input type="hidden" name="params" value="" />

					<input type="hidden" name="dealerNo" value="0" />
					<input type="hidden" name="dealerCmsType" value="CTG" />
					<!-- 입점업체 수수료 설정 -->
					<input type="hidden" name="dealerCmsRate" value="0.0" />
					<!-- 입점업체 수수료율(%) -->

					<input type="hidden" name="goodsAddition" value="" />

					<div class="group_box">
						<div class="section_head">
							<h4>기본 정보</h4>
						</div>
						<div class="goodsTablebox">
							<table
								width="100%"
								summary="상품 기본정보 등록 폼 입니다."
								class="t_form goods_reg"
							>
								<caption>
									상품기본정보 등록 폼
								</caption>
								<colgroup>
									<col width="160" />
									<col width="*" />
								</colgroup>
								<tbody>
									<tr>
										<th>상품공급업체 <span class="red">*</span></th>
										<td>
											<select name="goodsDealer" onchange="changeDealer(this)">
												<option value="0" cmstype="CTG" cmsrate="0" selected="">
													내친구네트웍스
												</option>
												<option value="148689" cmstype="CTG" cmsrate="0">
													(주)이노빌 (mallstore122)
												</option>
												<option value="148715" cmstype="MIM" cmsrate="10">
													12 (heartattack) [10%]
												</option>
												<option value="148649" cmstype="CTG" cmsrate="0">
													HMSTORE (hmstore)
												</option>
												<option value="148754" cmstype="CTG" cmsrate="0">
													balgre업체 (scmBalgre)
												</option>
												<option value="148626" cmstype="MIM" cmsrate="10">
													jhmim (jhmim) [10%]
												</option>
												<option value="148605" cmstype="CTG" cmsrate="0">
													ncgn (ooiiioom)
												</option>
												<option value="148682" cmstype="CTG" cmsrate="0">
													scmYJ (scmtest123)
												</option>
												<option value="148756" cmstype="CTG" cmsrate="0">
													test_bastsrd (bastsrd_123)
												</option>
												<option value="148646" cmstype="CTG" cmsrate="0">
													내업체 (scm_wenzie)
												</option>
												<option value="148797" cmstype="CTG" cmsrate="0">
													내친구 (test)
												</option>
												<option value="148740" cmstype="CTG" cmsrate="0">
													내친구ktk몰 (ktklily02)
												</option>
												<option value="148703" cmstype="CTG" cmsrate="0">
													내친구네트웍스 (lwhs203122)
												</option>
												<option value="148783" cmstype="CTG" cmsrate="0">
													미다지 (medaje)
												</option>
												<option value="148753" cmstype="CTG" cmsrate="0">
													백과장회사 (baek_seller)
												</option>
												<option value="148752" cmstype="MIM" cmsrate="7.5">
													싱글벙글 (nenemana) [7.5%]
												</option>
												<option value="148685" cmstype="CTG" cmsrate="0">
													업체ㅔㅔㅔㅔㅔ1111 (mallstore123)
												</option>
												<option value="148724" cmstype="CTG" cmsrate="0">
													업체명 (ncgn_kys2)
												</option>
												<option value="148794" cmstype="CTG" cmsrate="0">
													에이블리 (hanwha111)
												</option>
												<option value="148638" cmstype="CTG" cmsrate="0">
													이트너스 (etners)
												</option>
												<option value="148676" cmstype="CTG" cmsrate="0">
													주식회사 더메이 (mallstore33)
												</option>
												<option value="148663" cmstype="CTG" cmsrate="0">
													지태코퍼레이션 (eltmspt2)
												</option>
												<option value="148704" cmstype="CTG" cmsrate="0">
													지태하우스 (eltmspt5)
												</option>
												<option value="148634" cmstype="CTG" cmsrate="0">
													진씨네 (zincine)
												</option>
												<option value="148694" cmstype="CTG" cmsrate="0">
													테스트12 (whleedealer)
												</option>
											</select>
										</td>
									</tr>

									<tr>
										<th>상품명 <span class="red">*</span></th>
										<td>
											<input
												type="text"
												name="goodsName"
												class="text_input wide"
												value=""
												maxlength="100"
											/>
										</td>
									</tr>
									<tr>
										<th>간략한설명</th>
										<td>
											<input
												type="text"
												name="summary"
												class="text_input wide"
												value=""
												maxlength="100"
											/>
											<div class="noti_info">
												상품명 하단에 노출되는 상품의 간단한 설명글입니다.
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //group_box -->

					<div class="group_box">
						<div class="section_head">
							<h4>추가정보</h4>
						</div>
						<div class="goodsTablebox">
							<table
								width="100%"
								summary="상품 추가정보 등록 폼 입니다."
								class="t_form goods_reg"
							>
								<caption>
									상품 추가정보 등록 폼
								</caption>
								<colgroup>
									<col width="160" />
									<col width="*" />
								</colgroup>
								<tbody>
									<tr>
										<th>브랜드</th>
										<td>
											<select id="brandIdx" name="brandIdx">
												<option value="">선택</option>
												<option value="53">구찌</option>
												<option value="54">루이비통</option>
												<option value="38">발리</option>
												<option value="52">버버리</option>
												<option value="62">베르사체</option>
												<option value="59">보스 까르띠에</option>
												<option value="39">불가리</option>
												<option value="56">샤넬</option>
												<option value="63">서실장_브랜드등록 테스트</option>
												<option value="58">아르마니</option>
												<option value="44">에르메스</option>
												<option value="61">코치</option>
												<option value="9">크리스찬 디올</option>
												<option value="60">티파니</option>
												<option value="50">프라다</option>
											</select>
										</td>
									</tr>
									<tr>
										<th>PC 상품설명 <span class="red">*</span></th>
										<td class="editor">
											<textarea
												name="content"
												style="width: 100%; height: 300px; display: none"
												id="content-placeholder"
											></textarea
											><iframe
												id="__se2_frame_content-placeholder"
												name="__se2_frame_content-placeholder"
												frameborder="0"
												scrolling="no"
												style="width: 100%; height: 347px"
												src="http://javalocal.mallstore.co.kr/common/editor/se2/SmartEditor2Skin.html"
											></iframe>
											<!-- <script type="text/javascript">
												nhn.husky.EZCreator.createInIFrame({
													elPlaceHolder: 'content',
												});
												//]]>
											</script> -->
										</td>
									</tr>
									<tr>
										<th>모바일 상품설명</th>
										<td class="editor">
											<textarea
												name="mobileContent"
												style="width: 100%; height: 300px; display: none"
												id="mobileContent-placeholder"
											></textarea
											><iframe
												id="__se2_frame_mobileContent-placeholder"
												name="__se2_frame_mobileContent-placeholder"
												frameborder="0"
												scrolling="no"
												style="width: 100%; height: 347px"
												src="http://javalocal.mallstore.co.kr/common/editor/se2/SmartEditor2Skin.html"
											></iframe>
											<!-- <script type="text/javascript">
												nhn.husky.EZCreator.createInIFrame({
													elPlaceHolder: 'mobileContent',
												}); 
												//]]>
											</script>-->
										</td>
									</tr>
									<!-- 상품 옵션 -->

									<tr>
										<th>상품옵션 <span class="red">*</span></th>
										<td class="option_kind">
											<div class="label_wrap">
												<label for="option_kind_0"
													><input
														type="radio"
														name="optionKind"
														id="option_kind_0"
														value=""
														checked=""
														onclick="checkOptionKind()"
													/>옵션없음</label
												>
												<label for="option_kind_1"
													><input
														type="radio"
														name="optionKind"
														id="option_kind_1"
														value="100"
														onclick="checkOptionKind()"
													/>일반옵션</label
												>
												<label for="option_kind_2"
													><input
														type="radio"
														name="optionKind"
														id="option_kind_2"
														value="200"
														onclick="checkOptionKind()"
													/>재고/가격옵션</label
												>
											</div>
											<div class="topline noti_info">
												상품 등록 시 한가지 옵션만 선택할 수 있으며, 등록 후에는
												옵션종류를 수정할 수 없습니다.<br />
												(단, '옵션없음' 상태에서는 옵션종류 수정이 가능합니다)
											</div>
											<div
												class="widthDummy"
												style="visibility: hidden; width: 100%; height: 1px"
											></div>
										</td>
									</tr>

									<!-- ___________________________ 일반 옵션 ___________________________ -->
									<tr id="trOption100" style="display: none">
										<th>일반옵션</th>
										<td>
											<ul class="noti_info mgn">
												<li>
													옵션종류, 옵션가격은 설정할 수 있으나, 옵션의 재고는
													설정하실 수 없습니다.
												</li>
												<li>
													각 옵션항목은 " ; "(세미콜론)으로 구분하며, 옵션가격을
													설정하실 경우 " ^ "로 구분하여 입력합니다.
												</li>
												<li>옵션가격은 숫자로만 입력해 주시기 바랍니다.</li>

												<li>
													옵션이 품절일 경우 해당 옵션 항목의 마지막에 " ^ "표기
													후 '품절'을 입력해 주시기 바랍니다.
												</li>
												<li>
													옵션은 최대 10개, 옵션항목은 최대 2,000자까지 입력할
													수 있습니다.
												</li>
											</ul>

											<dl class="option_exam mgt10">
												<dt><strong>입력 예)</strong></dt>
												<dd>
													1. 기본입력 : 선택안함;옵션 A^1000;옵션
													B^-1000^품절;옵션 C^2000<br />
													2. 품절입력 ;' 옵션 A^품절;옵션 B^1500^품절;옵션
													C^1000<br />
													3. 추가구성 : 선택안함;A상품^10000;B상품^11000<br />
												</dd>
											</dl>

											<ul class="over_h mgt10">
												<li class="fl">
													<button
														class="btn_sec sm"
														type="button"
														onclick="mixRowsDel('generalOptTable');"
													>
														옵션 삭제
													</button>
												</li>
												<li class="fr">
													<button
														class="btn_sec sm"
														type="button"
														onclick="addRowOpt();"
													>
														옵션 추가
													</button>
												</li>
											</ul>
											<table
												id="generalOptTable"
												width="100%"
												summary="상품 일반옵션 폼 테이블 입니다."
												class="option_gnenral mgt5 t_list"
											>
												<caption>
													상품 일반옵션 폼 테이블
												</caption>
												<colgroup>
													<col width="40" />
													<col width="150" />
													<col width="*" />
													<col width="50" />
												</colgroup>
												<thead>
													<tr>
														<th>
															<label
																><input
																	type="checkbox"
																	name="cbOptAll"
																	onclick="checkCbAll(this.form.cbOpt, this.checked)"
																/>전체선택</label
															>
														</th>
														<th>옵션명</th>
														<th colspan="2">옵션항목</th>
													</tr>
												</thead>
												<tbody id="generalOptTbody-target"></tbody>
												<!-- <script
													id="generalOptTbody-template"
													type="text/x-handlebars-template"
												>
													<tr>
														<td><input
																type='hidden'
																name='optNo{{optKind}}'
																value='{{optionno}}'
															/><label><input
																	type='checkbox'
																	name='cbOpt'
																/>선택</label></td>
														<td><input
																type='text'
																name='optName{{optKind}}'
																class='text_input wide'
																maxlength='50'
																value='{{optionname}}'
															/></td>
														<td class='txt'><textarea
																rows='3'
																name='optItem{{optKind}}'
																class='text_input wide'
																onKeyUp='checkTextLen(this, 120)'
															>{{optionitems}}</textarea></td>
														<td class='size'><span
																class='itemLen'
															>{{itemLen}}</span><br />자</td>
													</tr>
												</script> -->
											</table>
										</td>
									</tr>
									<!-- ____________________________________________________________ -->

									<!-- _________________________ 재고가격 옵션 _________________________ -->
									<input type="hidden" name="stockOption" value="" />
									<tr id="trOption200" style="display: none">
										<th>재고/가격옵션</th>
										<td>
											<ul class="over_h">
												<li class="fl">
													<button
														class="btn_sec sm"
														type="button"
														onclick="mixSelectRemove()"
													>
														옵션 삭제
													</button>
												</li>
												<li class="fr">
													<button
														class="btn_sec sm"
														type="button"
														onclick="mixSelectAdd()"
													>
														옵션 추가
													</button>
													<button
														class="btn_sec sm"
														type="button"
														onclick="mixResult()"
													>
														옵션목록 적용
													</button>
												</li>
											</ul>

											<table
												id="mixSelectTable"
												class="o_c_table mgt5"
												summary="옵션 추가 / 삭제 표"
												style="width: 861px"
											>
												<caption>
													옵션 추가 / 삭제 표
												</caption>
												<colgroup>
													<col width="25%" />
													<col width="75%" />
												</colgroup>
												<thead>
													<tr>
														<th scope="col">옵션명</th>
														<th scope="col">옵션값</th>
													</tr>
												</thead>
												<tbody id="mixSelectTable-target">
													<!-- mixSelectTable-template -->
												</tbody>
												<!-- <script
													id="mixSelectTable-template"
													type="text/x-handlebars-template"
												>
													<tr>
														<td>
															<input
																type='text'
																class='text_input opt_input wide'
																value='{{optionname}}'
																placeholder='예) 색상'
															/>
														</td>
														<td>
															<input
																type='text'
																class='text_input wide'
																value='{{optionitems}}'
																placeholder='예) {{itemTxt}}'
															/>
														</td>
													</tr>
												</script> -->
											</table>

											<div class="mix_result_head">
												<div class="mgb5">
													<strong
														>옵션목록(총
														<span id="mixOptionNum">0</span>개)</strong
													>
													옵션은 최대 100개까지만 추가 가능합니다.
												</div>
												<ul class="over_h mgb5">
													<li class="fl">
														<button
															class="btn_sec sm"
															type="button"
															onclick="mixRowsDel('mixResultTableBody');"
														>
															선택삭제
														</button>
													</li>
													<li class="fr">
														<button
															class="btn_sec sm"
															type="button"
															onclick="mixRowAdd();"
														>
															목록추가
														</button>
													</li>
												</ul>
												<table
													id="mixResultTableHead"
													class="o_c_table t_list"
													summary="옵션목록 적용 결과 표"
													style="width: 861px"
												>
													<!-- mixResultTableHead-template -->
												</table>
												<!-- <script
													id="mixResultTableHead-template"
													type="text/x-handlebars-template"
												>
													<caption>옵션목록 적용 결과 표</caption>
													<colgroup>
														<col width='10%' />
														<col width='{{width}}%' />
														<col width='48%' />
														<col width='16%' />
														<col width='16%' />
														<col width='10%' />
													</colgroup>
													<thead>
														<tr>
															<th
																scope='col'
																rowspan='2'
																class='text_center'
															><label><input
																		type='checkbox'
																		onClick='checkCbAll(this.form.cbOptRow, this.checked)'
																	/>전체선택</label></th>
															<th scope='col' colspan='{{ml}}'>옵션명</th>
															<th scope='col' rowspan='2'>옵션가</th>
															<th scope='col' rowspan='2'>재고</th>
															<th scope='col' rowspan='2'>삭제</th>
														</tr>
														<tr>
															<th scope='col'>{{name}}</th>
														</tr>
													</thead>
												</script> -->
											</div>
											<div class="mix_result_body">
												<table
													id="mixResultTableBody"
													class="o_c_table"
													summary="옵션목록 적용 결과 표"
													style="width: 861px"
												>
													<!-- mixResultTableBody-template -->
												</table>
												<!-- <script
													id="mixResultTableBody-template"
													type="text/x-handlebars-template"
												>
													<caption>옵션목록 적용 결과 표</caption>
													<colgroup>
														<col width='10%' />
														<col width='{{width}}%' />
														<col width='48%' />
														<col width='16%' />
														<col width='16%' />
														<col width='10%' />
													</colgroup>
													<tbody id='mixResultTableBodyTbody'>
													</tbody>
												</script>
												<script
													id="mixResultTableBodyTbody-template"
													type="text/x-handlebars-template"
												>
													<tr>
														<td class='text_center'><label><input
																	type='checkbox'
																	name='cbOptRow'
																/>선택</label></td>
														<td><input
																type='text'
																class='text_input item_name'
																value='{{option1}}'
																style='width:100%'
															/></td>
														<td><input
																type='text'
																class='text_input item_name'
																value='{{option2}}'
																style='width:100%'
															/></td>
														<td><input
																type='text'
																class='text_input item_name'
																value='{{option3}}'
																style='width:100%'
															/></td>
														<td><input
																type='text'
																class='text_input item_price'
																value='{{price}}'
																style='width:100%'
															/></td>
														<td><input
																type='text'
																class='text_input item_quantity'
																value='{{quantity}}'
																style='width:100%'
															/></td>
														<td class='text_center'><button
																class='btn_sec sm'
																type='button'
																onclick='mixRowDel(this);'
															>삭제</button></td>
													</tr>
													<tr>
														<td class='none' colspan='5' id='mixNone'>데이터가
															존재하지 않습니다.</td>
													</tr>
												</script> -->
											</div>
											<ul class="fr mgt5">
												<li class="fl">
													<label for="mixOptionPrice">옵션가</label>
													<select id="mixOptionPrice" class="sm">
														<option>+</option>
														<option>-</option>
													</select>
													<input
														type="text"
														style="width: 80px"
														class="text_input"
														id="mixOptionPriceValue"
														onkeypress="blockNotNumber(event)"
														onkeyup="toCurrency(this)"
													/>
												</li>
												<li class="fl mgl10">
													<label for="mixOptionEa">재고수량</label>
													<input
														id="mixOptionEa"
														type="text"
														style="width: 80px"
														class="text_input"
														onkeypress="blockNotNumber(event)"
														onkeyup="toCurrency(this)"
													/>
												</li>
												<li class="fl mgl10">
													<button
														class="btn_sec sm"
														type="button"
														onclick="mixResultCheckedSet()"
													>
														선택목록 일괄수정
													</button>
												</li>
											</ul>
										</td>
									</tr>
									<!-- //____________________________________________________________ -->

									<!-- _______________ 서술형 옵션(추후 정책적으로 수정 및 삭제 필요) _______________ -->

									<!-- 		<th>서술형옵션</th> -->
									<!-- 		<td> -->
									<!-- 			<ul class="option_explain"> -->
									<!-- 				<li>일반옵션, 재고/가격옵션을 사용하시기 어려운 경우, 서술형 옵션을 선택하시면 아래 입력한 내용이 구매자에게 안내되고,<br />상품구매옵션을 서술형으로 입력할 수 있습니다.</li> -->
									<!-- 			</ul> -->

									<!-- 			<dl class="option_exam mgt10"> -->
									<!-- 				<dt><strong>입력 예)</strong></dt> -->
									<!-- 				<dd> -->
									<!-- 					넥타이타입은 A~J, 셔츠타입은 A~J, 사이즈는 95,100,105입니다. 원하는 색상 및 사이즈를 적어주세요. -->
									<!-- 				</dd> -->
									<!-- 			</dl> -->

									<!-- 			<div class="option_text"> -->

									<!-- 			</div> -->
									<!-- 		</td> -->
									<!-- 	</tr> -->
									<!-- //____________________________________________________________ -->

									<!-- <script>
										var CONST_OPTION_KINDS = new Array(
											'100', //일반 옵션
											'200', //재고가격 옵션
											'300', //서술형 옵션
										);

										var maxRowOpt = '10'.toNumeric();
										var optAry = '색상/사이즈/빅사이즈'.split('/');
										var itemAry = '빨강,주황,노랑/S,M,L/2XL,5XL'.split('/');
										$(function () {
											var model = {
												__jsp: '/nmanager/goods/goods_reg',
												arrList: [
													{
														NO: 148689,
														CMSRATE: 0,
														DEALERID: 'mallstore122',
														CMSTYPE: 'CTG',
														NAME: '(주)이노빌',
													},
													{
														NO: 148715,
														CMSRATE: 10,
														DEALERID: 'heartattack',
														CMSTYPE: 'MIM',
														NAME: '12',
													},
													{
														NO: 148649,
														CMSRATE: 0,
														DEALERID: 'hmstore',
														CMSTYPE: 'CTG',
														NAME: 'HMSTORE',
													},
													{
														NO: 148754,
														CMSRATE: 0,
														DEALERID: 'scmBalgre',
														CMSTYPE: 'CTG',
														NAME: 'balgre업체',
													},
													{
														NO: 148626,
														CMSRATE: 10,
														DEALERID: 'jhmim',
														CMSTYPE: 'MIM',
														NAME: 'jhmim',
													},
													{
														NO: 148605,
														CMSRATE: 0,
														DEALERID: 'ooiiioom',
														CMSTYPE: 'CTG',
														NAME: 'ncgn',
													},
													{
														NO: 148682,
														CMSRATE: 0,
														DEALERID: 'scmtest123',
														CMSTYPE: 'CTG',
														NAME: 'scmYJ',
													},
													{
														NO: 148756,
														CMSRATE: 0,
														DEALERID: 'bastsrd_123',
														CMSTYPE: 'CTG',
														NAME: 'test_bastsrd',
													},
													{
														NO: 148646,
														CMSRATE: 0,
														DEALERID: 'scm_wenzie',
														CMSTYPE: 'CTG',
														NAME: '내업체',
													},
													{
														NO: 148797,
														CMSRATE: 0,
														DEALERID: 'test',
														CMSTYPE: 'CTG',
														NAME: '내친구',
													},
													{
														NO: 148740,
														CMSRATE: 0,
														DEALERID: 'ktklily02',
														CMSTYPE: 'CTG',
														NAME: '내친구ktk몰',
													},
													{
														NO: 148703,
														CMSRATE: 0,
														DEALERID: 'lwhs203122',
														CMSTYPE: 'CTG',
														NAME: '내친구네트웍스',
													},
													{
														NO: 148783,
														CMSRATE: 0,
														DEALERID: 'medaje',
														CMSTYPE: 'CTG',
														NAME: '미다지',
													},
													{
														NO: 148753,
														CMSRATE: 0,
														DEALERID: 'baek_seller',
														CMSTYPE: 'CTG',
														NAME: '백과장회사',
													},
													{
														NO: 148752,
														CMSRATE: 7.5,
														DEALERID: 'nenemana',
														CMSTYPE: 'MIM',
														NAME: '싱글벙글',
													},
													{
														NO: 148685,
														CMSRATE: 0,
														DEALERID: 'mallstore123',
														CMSTYPE: 'CTG',
														NAME: '업체ㅔㅔㅔㅔㅔ1111',
													},
													{
														NO: 148724,
														CMSRATE: 0,
														DEALERID: 'ncgn_kys2',
														CMSTYPE: 'CTG',
														NAME: '업체명',
													},
													{
														NO: 148794,
														CMSRATE: 0,
														DEALERID: 'hanwha111',
														CMSTYPE: 'CTG',
														NAME: '에이블리',
													},
													{
														NO: 148638,
														CMSRATE: 0,
														DEALERID: 'etners',
														CMSTYPE: 'CTG',
														NAME: '이트너스',
													},
													{
														NO: 148676,
														CMSRATE: 0,
														DEALERID: 'mallstore33',
														CMSTYPE: 'CTG',
														NAME: '주식회사 더메이',
													},
													{
														NO: 148663,
														CMSRATE: 0,
														DEALERID: 'eltmspt2',
														CMSTYPE: 'CTG',
														NAME: '지태코퍼레이션',
													},
													{
														NO: 148704,
														CMSRATE: 0,
														DEALERID: 'eltmspt5',
														CMSTYPE: 'CTG',
														NAME: '지태하우스',
													},
													{
														NO: 148634,
														CMSRATE: 0,
														DEALERID: 'zincine',
														CMSTYPE: 'CTG',
														NAME: '진씨네',
													},
													{
														NO: 148694,
														CMSRATE: 0,
														DEALERID: 'whleedealer',
														CMSTYPE: 'CTG',
														NAME: '테스트12',
													},
												],
												var: {
													cmoneyPolicy: 256,
													imgMorg: '',
													deliveryLimit: '',
													HTML_PAY_SEL:
														"<select id='cmoneyPolicyPrice' name='cmoneyPolicyPrice'  disabled=\"disabled\"><option value='2'  >판매가</option><option value='4'  >결제가</option></select>",
													HTML_CATE_SEL:
														"<select id='cate_1' name='cate_1' depth='1' onChange=\"changeCate(this)\" ></select>&nbsp;<select id='cate_2' name='cate_2' depth='2' onChange=\"changeCate(this)\" ></select>&nbsp;<select id='cate_3' name='cate_3' depth='3' onChange=\"changeCate(this)\" ></select>&nbsp;",
													cfgPermDealerGoodsCms: 0,
													attachorg: '',
													mode: 'REG',
													deliveryPolicy: '',
													flagGoods: false,
													price: '',
													propRegPart: 1,
													isDealerGoods: true,
													dealerCmsRate: 0.0,
													state: '',
													stock: 0,
													imgBorg: '',
													goodsName: '',
													isSetGoodsCms: true,
													HTML_LINKED_SEL:
														"<select id='linkedRelate' name='linkedRelate' onDblClick='openGoods(this)' max='10' multiple size='7' style='width:100%; height:100px;'></select>",
													CMONEY_POLICY_PRICE: 6,
													margin: 0.0,
													cmsType: 'CTGMIM',
													dealerCmsType: 'CTG',
													isBlockOpt: false,
													isTaxFree: '',
													params: '',
													cfgCmoneySaveValue: 0,
													isDisplay: 'T',
													isUseAddition: '',
													permDealerCmoney: 136,
													authDealerNo: 0,
													authDealerType: 128,
													imgSorg: '',
													strDealer:
														'<select name="goodsDealer" onChange="changeDealer(this)"><option value="0" cmsType="CTG" cmsRate="0"  selected>내친구네트웍스</option><option value="148689" cmsType="CTG" cmsRate="0" >(주)이노빌 (mallstore122) </option><option value="148715" cmsType="MIM" cmsRate="10" >12 (heartattack)  [10%]</option><option value="148649" cmsType="CTG" cmsRate="0" >HMSTORE (hmstore) </option><option value="148754" cmsType="CTG" cmsRate="0" >balgre업체 (scmBalgre) </option><option value="148626" cmsType="MIM" cmsRate="10" >jhmim (jhmim)  [10%]</option><option value="148605" cmsType="CTG" cmsRate="0" >ncgn (ooiiioom) </option><option value="148682" cmsType="CTG" cmsRate="0" >scmYJ (scmtest123) </option><option value="148756" cmsType="CTG" cmsRate="0" >test_bastsrd (bastsrd_123) </option><option value="148646" cmsType="CTG" cmsRate="0" >내업체 (scm_wenzie) </option><option value="148797" cmsType="CTG" cmsRate="0" >내친구 (test) </option><option value="148740" cmsType="CTG" cmsRate="0" >내친구ktk몰 (ktklily02) </option><option value="148703" cmsType="CTG" cmsRate="0" >내친구네트웍스 (lwhs203122) </option><option value="148783" cmsType="CTG" cmsRate="0" >미다지 (medaje) </option><option value="148753" cmsType="CTG" cmsRate="0" >백과장회사 (baek_seller) </option><option value="148752" cmsType="MIM" cmsRate="7.5" >싱글벙글 (nenemana)  [7.5%]</option><option value="148685" cmsType="CTG" cmsRate="0" >업체ㅔㅔㅔㅔㅔ1111 (mallstore123) </option><option value="148724" cmsType="CTG" cmsRate="0" >업체명 (ncgn_kys2) </option><option value="148794" cmsType="CTG" cmsRate="0" >에이블리 (hanwha111) </option><option value="148638" cmsType="CTG" cmsRate="0" >이트너스 (etners) </option><option value="148676" cmsType="CTG" cmsRate="0" >주식회사 더메이 (mallstore33) </option><option value="148663" cmsType="CTG" cmsRate="0" >지태코퍼레이션 (eltmspt2) </option><option value="148704" cmsType="CTG" cmsRate="0" >지태하우스 (eltmspt5) </option><option value="148634" cmsType="CTG" cmsRate="0" >진씨네 (zincine) </option><option value="148694" cmsType="CTG" cmsRate="0" >테스트12 (whleedealer) </option></select>',
													imgAutoChk: 'T',
													deliveryFeeCollect: '',
													imgS: '',
													marketPrice: '',
													originalPrice: '',
													deliveryMethod: '990',
													origin: '',
													dealerNo: 0,
													orgGoodsNo: 0,
													brandIdx: '',
													content: '',
													priceSplit: '100',
													isDelAttach: '',
													HTML_NOTIFY_SEL:
														"<select id='notify' name='notify' onChange='getNotify(this)' ><option value=''>등록하실 상품의 상품군을 선택하세요</option><option value='1'  >의류</option><option value='3'  >의약품</option><option value='4'  >전자제품</option><option value='14'  >건강식품</option><option value='15'  >구두/신발</option></select>",
													mobileContent: '',
													cfgPermDealerCmoney: 136,
													imgM: '',
													attach: '',
													goodsNo: 0,
													summary: '',
													HTML_ICON:
														"<ul class='label_icon'><li><label for=\"cb_icon_1\"><input type='checkbox' id='cb_icon_1' name='icon' value='1' /><img id='icon_1' src='/images/blank.gif' /></label></li><li><label for=\"cb_icon_2\"><input type='checkbox' id='cb_icon_2' name='icon' value='2' /><img id='icon_2' src='/images/blank.gif' /></label></li><li><label for=\"cb_icon_4\"><input type='checkbox' id='cb_icon_4' name='icon' value='4' /><img id='icon_4' src='/images/blank.gif' /></label></li><li><label for=\"cb_icon_8\"><input type='checkbox' id='cb_icon_8' name='icon' value='8' /><img id='icon_8' src='/images/blank.gif' /></label></li><li><label for=\"cb_icon_16\"><input type='checkbox' id='cb_icon_16' name='icon' value='16' /><img id='icon_16' src='/images/blank.gif' /></label></li><li><label for=\"cb_icon_32\"><input type='checkbox' id='cb_icon_32' name='icon' value='32' /><img id='icon_32' src='/images/blank.gif' /></label></li><li><label for=\"cb_icon_64\"><input type='checkbox' id='cb_icon_64' name='icon' value='64' /><img id='icon_64' src='/images/blank.gif' /></label></li><li><label for=\"cb_icon_128\"><input type='checkbox' id='cb_icon_128' name='icon' value='128' /><img id='icon_128' src='/images/blank.gif' /></label></li><li><label for=\"cb_icon_256\"><input type='checkbox' id='cb_icon_256' name='icon' value='256' /><img id='icon_256' src='/images/blank.gif' /></label></li><li><label for=\"cb_icon_512\"><input type='checkbox' id='cb_icon_512' name='icon' value='512' /><img id='icon_512' src='/images/blank.gif' /></label></li><li><label for=\"cb_icon_1024\"><input type='checkbox' id='cb_icon_1024' name='icon' value='1024' /><img id='icon_1024' src='/images/blank.gif' /></label></li><li><label for=\"cb_icon_2048\"><input type='checkbox' id='cb_icon_2048' name='icon' value='2048' /><img id='icon_2048' src='/images/blank.gif' /></label></li><li><label for=\"cb_icon_4096\"><input type='checkbox' id='cb_icon_4096' name='icon' value='4096' /><img id='icon_4096' src='/images/blank.gif' /></label></li><li><label for=\"cb_icon_8192\"><input type='checkbox' id='cb_icon_8192' name='icon' value='8192' /><img id='icon_8192' src='/images/blank.gif' /></label></li></ul>",
													deliveryFeePrepay: '',
													product: '',
													deliveryLimitCollect: '',
													quantity: 0,
													cmoneyMoney: 0,
													cmoneyValue: 0.0,
													menu: '',
													icons: '',
													imgB: '',
													deliveryContent: '',
													deliveryLimitPrepay: '',
													deliveryFee: '',
													optionKind: '',
													propRegAction: 'goods_reg_act',
													flagDealer: false,
													cfgCmoneySavePolicy: 2,
													HTML_BRAND_SEL:
														"<select id='brandIdx' name='brandIdx'  ><option value=''>선택</option><option value='53'  >구찌</option><option value='54'  >루이비통</option><option value='38'  >발리</option><option value='52'  >버버리</option><option value='62'  >베르사체</option><option value='59'  >보스 까르띠에</option><option value='39'  >불가리</option><option value='56'  >샤넬</option><option value='63'  >서실장_브랜드등록 테스트</option><option value='58'  >아르마니</option><option value='44'  >에르메스</option><option value='61'  >코치</option><option value='9'  >크리스찬 디올</option><option value='60'  >티파니</option><option value='50'  >프라다</option></select>",
													cmoneyPercent: 0.0,
												},
												arrNotifyTpl: [
													{
														idx: 1,
														title: '의류',
														isuse: 'T',
														regdate: '2016-06-16 11:19:14',
													},
													{
														idx: 3,
														title: '의약품',
														isuse: 'T',
														regdate: '2016-08-24 13:35:45',
													},
													{
														idx: 4,
														title: '전자제품',
														isuse: 'T',
														regdate: '2017-08-16 10:23:16',
													},
													{
														idx: 14,
														title: '건강식품',
														isuse: 'T',
														regdate: '2021-06-28 14:30:32',
													},
													{
														idx: 15,
														title: '구두/신발',
														isuse: 'T',
														regdate: '2023-08-08 17:39:18',
													},
												],
												arrBrand: [
													{ idx: 53, name: '구찌' },
													{ idx: 54, name: '루이비통' },
													{ idx: 38, name: '발리' },
													{ idx: 52, name: '버버리' },
													{ idx: 62, name: '베르사체' },
													{ idx: 59, name: '보스 까르띠에' },
													{ idx: 39, name: '불가리' },
													{ idx: 56, name: '샤넬' },
													{ idx: 63, name: '서실장_브랜드등록 테스트' },
													{ idx: 58, name: '아르마니' },
													{ idx: 44, name: '에르메스' },
													{ idx: 61, name: '코치' },
													{ idx: 9, name: '크리스찬 디올' },
													{ idx: 60, name: '티파니' },
													{ idx: 50, name: '프라다' },
												],
												goodsAdditionList: [],
											};
											//일반 옵션
											if (
												model.var.optionKind == CONST_OPTION_KINDS[0] &&
												model.options != null
											) {
												for (var i = 0; i < model.options.length; i++) {
													var data = {};
													data = model.options[i];
													data.itemLen = model.options[i].optionitems.length;
													data.optKind = CONST_OPTION_KINDS[0];
													fnSetTemplate(
														'#generalOptTbody-template',
														data,
														$('#generalOptTbody-target'),
													);
												}

												optCheckInput();
											}

											//재고가격 옵션
											if (
												model.var.optionKind == CONST_OPTION_KINDS[1] &&
												model.options != null
											) {
												var dataSet = {
													group: [],
													items: [],
												};

												var data = {};
												data.optTxt = optAry[0];
												data.itemTxt = itemAry[0];

												fnSetTemplate(
													'#mixSelectTable-template',
													data,
													$('#mixSelectTable-target'),
												);
												//옵션 테이블
												if (model.options != null) {
													$('#mixSelectTable-target').html('');

													//coll width설정
													var optCnt = model.options.length;
													var width = 48 / optCnt;

													for (var i = 0; i < model.options.length; i++) {
														var data = {};
														data = model.options[i];
														data.optTxt = optAry[i];
														data.itemTxt = itemAry[i];

														dataSet.group.push({
															name: model.options[i].optionname,
															width: width,
														});
														fnSetTemplate(
															'#mixSelectTable-template',
															data,
															$('#mixSelectTable-target'),
														);
													}
												}

												//초기 옵션 stock 데이터 파싱
												for (var i = 0; i < model.optionStocks.length; i++) {
													var item = {};
													item = model.optionStocks[i];

													var itemDesc = model.optionStocks[i].itemDesc;

													var itemArr = itemDesc.split(',');
													for (var j = 1; j <= itemArr.length; j++) {
														item['option' + j] = itemArr[j - 1];
													}
													dataSet.items.push(item);
												}
												mixRowReDraw(dataSet);
											}
										});

										//옵션 종류 선택
										function checkOptionKind() {
											var f = document.Frm;
											var value = getRadio(f.optionKind);
											for (var i = 0; i < CONST_OPTION_KINDS.length; i++) {
												if (CONST_OPTION_KINDS[i] == value) {
													$('#trOption' + CONST_OPTION_KINDS[i]).show();
												} else {
													$('#trOption' + CONST_OPTION_KINDS[i]).hide();
												}
											}
											//재고가격 옵션
											if (value == '200') {
												setRadio(f.stock, '1');
												setRadioDisabled(f.stock, '0', true);
												$('#mixSelectTable-target').html('');
												mixSelectAdd();
												mixRowReDraw();
											} else {
												setRadioDisabled(f.stock, '0', false);
											}

											//추가상품
											if (value == 400) {
												$('#trOption400').show();
												mixTableSize();
											} else {
												$('#trOption400').hide();
											}

											checkStock();
										}

										//일반 옵션 추가
										function addRowOpt() {
											var data = {};
											var mb = $('#generalOptTable tbody');
											var ml = mb.find('tr').length;
											if (maxRowOpt <= ml) {
												alert(
													'최대 ' + maxRowOpt + '개까지 추가할 수 있습니다.',
												);
												return;
											}
											data.itemLen = 0;
											data.optKind = CONST_OPTION_KINDS[0];
											fnSetTemplate(
												'#generalOptTbody-template',
												data,
												$('#generalOptTbody-target'),
											);
											optCheckInput();
										}

										//일반옵션 이벤트 할당 input
										function optCheckInput() {
											$('#generalOptTbody-target textarea')
												.unbind()
												.bind('keydown', function (e) {
													if (e.which == 13) {
														e.preventDefault();
													}
												});
											$('#generalOptTbody-target textarea')
												.unbind()
												.bind('keyup', function (e) {
													$(this)
														.closest('tr')
														.find('.itemLen')
														.text($(this).val().length);
												});
										}

										//재고가격 옵션 항목 > 선택목록 일괄수정
										function mixResultCheckedSet() {
											var sign = $('#mixOptionPrice').val();
											var price = $('#mixOptionPriceValue').val();
											var quantity = $('#mixOptionEa').val();

											if (price == '0') {
												sign = '';
											}

											var mrb = $('#mixResultTableBody');
											var mrbt = mrb.find('tbody');

											var $cb = mrbt.find('input:checkbox');
											$cb.each(function () {
												if (this.checked) {
													var $tr = $(this).closest('tr');
													if (price != '') {
														$tr.find('.item_price').val(sign + price);
													}
													if (quantity != '') {
														$tr.find('.item_quantity').val(quantity);
													}
												}
											});
										}

										//재고가격 믹스 옵션 테이블 valid
										function mixRowValidCheck() {
											var items = [];
											var totQty = 0; //재고 카운트
											var goodsPrice = document.Frm.price.value.toNumeric(); //상품 가격
											var isRow = true;

											_.each(
												$('#mixResultTableBody tbody').find('tr'),
												function (el) {
													var item = {};
													if (!$(el).find('.item_quantity').val()) {
														alert(
															'"옵션목록 적용" 버튼을 클릭하여 옵션가와 재고를 설정해 주세요.',
														);
														return false;
													}
													var quantity = $(el)
														.find('.item_quantity')
														.val()
														.toNumeric(); //재고
													var price = $(el)
														.find('.item_price')
														.val()
														.toNumeric(); //옵션가
													if (goodsPrice + price <= 0) {
														alert(
															'상품가격과 옵션가격의 합이 0원보다 작거나 같습니다.',
														);
														isRow = false;
														return false;
													}

													//옵션 갯수만큼 생성
													var cnt = $(el).find('.item_name').length;
													for (var i = 0; i < cnt; i++) {
														var option = $(el)
															.find('.item_name:eq("' + i + '")')
															.val()
															.trim();
														if (!isOptVal(option)) {
															isRow = false;
															return false;
														}
														item['option' + (i + 1)] = option;
													}
													item.price = price;
													item.quantity = quantity;

													items.push(item);
													totQty += quantity;
												},
											);

											if (!isRow) {
												return false;
											}
											if (items.length == 0) {
												alert('옵션값이 하나도 등록되지 않았습니다.');
												return false;
											}
											if (mixRowNum() >= 100) {
												alert('옵션은 100개 이상 등록할 수 없습니다.');
												return;
											}
											if (totQty == 0) {
												var f = confirm(
													'재고가 하나도 없습니다. \n이대로 진행하시겠습니까?',
												);
												if (!f) return false;
											}

											//믹스 테이블 옵션명 그룹 check
											var $optValGrp = $('#mixSelectTable tbody').find(
												'.opt_input',
											);
											var $optTxtGrp = $('#mixResultTableHead thead')
												.find('tr')
												.eq(1)
												.find('th');

											for (var i = 0; i < $optValGrp.length; i++) {
												var optVal = $optValGrp.eq(i).val();
												var optTxt = $optTxtGrp.eq(i).text();

												if (optVal != optTxt) {
													var f = confirm(
														"옵션목록 적용 후, 옵션명이 변경되었습니다.\n 기존 옵션명 '" +
															optTxt +
															"'을 '" +
															optVal +
															"'로 변경하시겠습니까?",
													);
													if (f) {
														$optTxtGrp.eq(i).text(optVal);
													} else {
														return false;
													}
												}
											}

											var groups = [];
											for (var i = 0; i < $optTxtGrp.length; i++) {
												groups.push($optTxtGrp.eq(i).text());
											}

											goodsStockPriceOption.set(groups, items);
											document.Frm.stockOption.value =
												goodsStockPriceOption.stringify();

											return true;
										}

										//재고가격 옵션 추가
										function mixSelectAdd() {
											var mb = $('#mixSelectTable tbody');
											var ml = mb.find('tr').length;
											if (ml >= 3) {
												alert('옵션은 3개 까지만 가능합니다.');
												return false;
											}
											var data = {};
											data.optTxt = optAry[ml];
											data.itemTxt = itemAry[ml];
											fnSetTemplate(
												'#mixSelectTable-template',
												data,
												$('#mixSelectTable-target'),
											);
										}

										//재고가격 옵션 삭제
										function mixSelectRemove() {
											var mb = $('#mixSelectTable tbody');
											var mbtrs = mb.find('tr');
											var ml = mbtrs.length;

											if (ml == 1) {
												alert('옵션을 1개 이상 설정해야합니다.');
												return false;
											}

											mbtrs.last().remove();
										}

										//재고가격 옵션 삭제
										function mixRowsDel(id) {
											var t = $('#' + id);
											var tb = t.find('tbody');

											var $cb = tb.find('input:checkbox');
											$cb.each(function () {
												if (this.checked) {
													mixRowDel(this);
												}
											});
										}

										//옵션 Row 삭제
										function mixRowDel(obj) {
											$(obj).closest('tr').remove();
										}

										//재고가격 옵션 set Row
										function setMixRow() {
											//이벤트 할당 input
											mixCheckInput();
											//total cnt
											$('#mixOptionNum').html(formatComma(mixRowNum()));
										}

										//재고가격 이벤트 할당 input
										function mixCheckInput() {
											$('#mixResultTableBody .item_name')
												.unbind()
												.bind('blur', function (e) {
													var val = $(this).val();
													val = val.replace(/,|:/g, '');
													$(this).val(val);
												});
											$('#mixResultTableBody .item_price')
												.unbind()
												.bind('blur', function (e) {
													var val = $(this).val();
													$(this).val(formatComma(val));
												});
										}

										//재고가격 옵션 row total cnt
										function mixRowNum() {
											var tot = $('#mixResultTableBody tbody').find(
												'tr',
											).length;
											return tot;
										}

										//재고가격 옵션 항목 > 목록추가
										function mixRowAdd(item) {
											var mb = $('#mixSelectTable tbody');
											var mbtrs = mb.find('tr');
											var ml = mbtrs.length;
											if ($('#mixNone').is(':visible')) {
												alert(
													'옵션목록을 작성 후, 적용버튼을 눌러서 기본 옵션항목을 먼저 만드셔야 합니다.',
												);
												return;
											}
											if (mixRowNum() >= 100) {
												alert('옵션은 100개 이상 등록할 수 없습니다.');
												return;
											}

											var obj = {};
											obj.group = 'Y';
											obj.ml = ml;
											obj.price = 0;
											obj.quantity = 0; //default 값
											fnSetTemplate(
												'#mixResultTableBodyTbody-template',
												obj,
												$('#mixResultTableBodyTbody'),
											);

											setMixRow();
										}

										//재고가격 옵션 목록 row 생성
										function mixRowReDraw(data) {
											$('#mixResultTableHead').empty();
											$('#mixResultTableBody').empty();

											var obj = {};
											if (data != null && typeof data != 'undefined') {
												var ml = data.group.length;
												obj.ml = ml;
												obj.group = data.group;
											}

											//템플릿 생성
											fnSetTemplate(
												'#mixResultTableHead-template',
												obj,
												$('#mixResultTableHead'),
											);
											fnSetTemplate(
												'#mixResultTableBody-template',
												obj,
												$('#mixResultTableBody'),
											);
											fnSetTemplate(
												'#mixResultTableBodyTbody-template',
												obj,
												$('#mixResultTableBodyTbody'),
											);

											if (data != null && typeof data != 'undefined') {
												$('#mixResultTableBodyTbody').empty();
												for (var i = 0; i < data.items.length; i++) {
													var item = data.items[i];

													//옵션 갯수만큼
													var k = 1;
													for (var j = 1; j <= ml; j++) {
														// 수정 시 || 등록 시
														var opt;
														opt = item['option' + j] || item.options[k];
														k += 2;
														if (opt != null && typeof opt != 'undefined') {
															obj['option' + j] = opt;
														}
													}
													obj.price = formatComma(
														item.price.toString().toNumeric(),
													);
													obj.quantity = formatComma(
														item.quantity.toString().toNumeric(),
													);
													//데이터 바인딩
													fnSetTemplate(
														'#mixResultTableBodyTbody-template',
														obj,
														$('#mixResultTableBodyTbody'),
													);
												}
											}

											setMixRow();
										}

										//재고가격 옵션 목록 적용
										function mixResult() {
											//옵션 설정 테이블
											var mb = $('#mixSelectTable tbody');
											var mbtrs = mb.find('tr');
											var ml = mbtrs.length;
											var mwidth = 48 / ml;

											//____데이터  파싱 _____
											var importOptions = [];
											for (var i = 0; i < ml; i++) {
												var obj = {};
												var tr = mbtrs[i];
												var inputs = $(tr).find('.text_input');
												obj.groupName = inputs[0].value;
												obj.groupValue = inputs[1].value;
												obj.groupWidth = mwidth;

												if (!isOptVal(obj.groupName)) {
													return false;
												}
												if (!isOptVal(obj.groupValue)) {
													return false;
												}

												importOptions.push(obj);
											}

											try {
												// mixRowReDraw 호출
												goodsStockPriceOption.import(
													importOptions,
													mixRowReDraw,
												);
											} catch (e) {
												if (_.isString(e)) {
													alert(e);
												} else if (_.isObject(e)) {
													alert(e.reason);
												}
											}
										}

										//재고가격 옵션 validation
										function isOptVal(value, isAlert) {
											var reg = ':';
											if (value.indexOf(reg) > -1) {
												alert(
													'"' +
														reg +
														'" 문자는 옵션명, 옵션값에 사용할 수 없습니다.',
												);
												return false;
											}
											return true;
										}

										//옵션 등록 시 validation
										function validOption() {
											var f = document.Frm;
											var objOptItem;
											var arrValue, arrItem;
											var objOptName = (objOptItem = null);

											var optionDelimiter = ':';

											var optionKind = getRadio(f.optionKind);

											if (optionKind == '100') {
												objOptItem = f['optItem' + CONST_OPTION_KINDS[0]];
												if (typeof objOptItem == 'undefined') {
													alert('옵션항목을 입력해 주세요.');
													return false;
												}

												if (typeof objOptItem.length == 'undefined') {
													if (isEmpty(objOptItem)) {
														alert('옵션항목을 입력해 주세요.');
														objOptItem.focus();
														return false;
													}

													if (objOptItem.value.indexOf(optionDelimiter) >= 0) {
														alert(
															'"' +
																optionDelimiter +
																'" 문자는 옵션항목에 사용할 수 없습니다.',
														);
														objOptItem.focus();
														return false;
													}

													arrValue = objOptItem.value.split(';');

													for (var m = 0; m < arrValue.length; m++) {
														arrItem = arrValue[m].split('\^');

														if (arrItem.length > 3) {
															alert(
																'옵션항목을 정확히 입력해 주세요.\n\n예) 옵션항목,옵션항목\^옵션가격,옵션항목\^옵션가격\^품절',
															);
															objOptItem.focus();
															return false;
														}

														switch (arrItem.length) {
															case 3:
																if (arrItem[2] != '품절') {
																	alert(
																		'각 옵션항목의 마지막자리에는 "품절" 정보만 입력할 수 있습니다.',
																	);
																	objOptItem.focus();
																	return false;
																}
															case 2:
																if (
																	arrItem[1] != '품절' &&
																	!isNumeric(arrItem[1])
																) {
																	alert('옵션가격은 숫자만 입력이 가능합니다.');
																	objOptItem.focus();
																	return false;
																}
															case 1:
														}

														if (
															m == 0 &&
															arrItem.length > 1 &&
															arrItem[1].toNumeric() != 0
														) {
															alert(
																'첫번째 옵션항목은 옵션가격을 입력하지 않거나 "0" 이어야 합니다. (기본값)',
															);
															objOptItem.focus();
															return false;
														}

														if (arrItem[0].length > 100) {
															alert(
																'옵션항목은 항목당 최대 100자까지 입력할 수 있습니다.(품절 문자 포함)',
															);
															objOptItem.focus();
															return false;
														}
													}
												} else {
													for (var i = 0; i < objOptItem.length; i++) {
														if (isEmpty(objOptItem[i])) {
															alert('옵션항목을 입력해 주세요.');
															objOptItem[i].focus();
															return false;
														}

														if (
															objOptItem[i].value.indexOf(optionDelimiter) >= 0
														) {
															alert(
																'"' +
																	optionDelimiter +
																	'" 문자는 옵션항목에 사용할 수 없습니다.',
															);
															objOptItem[i].focus();
															return false;
														}

														arrValue = objOptItem[i].value.split(';');

														for (var m = 0; m < arrValue.length; m++) {
															arrItem = arrValue[m].split('\^');

															if (arrItem.length > 3) {
																alert(
																	'옵션항목을 정확히 입력해 주세요.\n\n예) 옵션항목,옵션항목\^옵션가격,옵션항목\^옵션가격\^품절',
																);
																objOptItem[i].focus();
																return false;
															}

															switch (arrItem.length) {
																case 3:
																	if (arrItem[2] != '품절') {
																		alert(
																			'각 옵션항목의 마지막자리에는 "품절" 정보만 입력할 수 있습니다.',
																		);
																		objOptItem[i].focus();
																		return false;
																	}
																case 2:
																	if (
																		arrItem[1] != '품절' &&
																		!isNumeric(arrItem[1])
																	) {
																		alert(
																			'옵션가격은 숫자만 입력이 가능합니다.',
																		);
																		objOptItem[i].focus();
																		return false;
																	}
																case 1:
															}

															if (
																m == 0 &&
																arrItem.length > 1 &&
																arrItem[1].toNumeric() != 0
															) {
																alert(
																	'첫번째 옵션항목은 옵션가격을 입력하지 않거나 "0" 이어야 합니다. (기본값)',
																);
																objOptItem[i].focus();
																return false;
															}

															if (arrItem[0].length > 100) {
																alert(
																	'옵션항목은 항목당 최대 100자까지 입력할 수 있습니다.',
																);
																objOptItem[i].focus();
																return false;
															}
														}
													}
												}
											}
											// ' 재고가격 옵션
											else if (optionKind == '200') {
												if (!mixRowValidCheck()) {
													return false;
												}
											}
											// ' 서술형 옵션(현재 사용 안함)
											else if (optionKind == '300') {
												objOptName = f['optName300'];

												if (isEmpty(objOptName)) {
													alert('옵션내용을 입력해 주세요.');
													objOptName.focus();
													return false;
												}
											}

											return true;
										}

										function mixTableSize() {
											var t = $('.widthDummy').width();
											$('.o_c_table').css({ width: t });
										}
										$(function () {
											mixTableSize();
										});
										$(window).on('load', function () {
											mixTableSize();
										});
										$(window).on('resize', function () {
											mixTableSize();
										});
									</script> -->
								</tbody>
							</table>
						</div>
					</div>
					<!-- //group_box -->

					<div class="group_box">
						<div class="section_head">
							<h4>가격 정보</h4>
						</div>
						<div class="goodsTablebox">
							<table
								width="100%"
								summary="상품 가격정보 등록 폼 입니다."
								class="t_form goods_reg"
							>
								<caption>
									상품 가격정보 등록 폼
								</caption>
								<colgroup>
									<col width="160" />
									<col width="*" />
								</colgroup>
								<tbody>
									<tr>
										<th>부가가치세 설정</th>
										<td>
											<div class="label_wrap">
												<label for="tax_free_F"
													><input
														type="radio"
														id="tax_free_F"
														name="isTaxFree"
														value="F"
														checked=""
													/>과세상품</label
												>
												<label for="tax_free_T"
													><input
														type="radio"
														id="tax_free_T"
														name="isTaxFree"
														value="T"
													/>면세상품</label
												>
											</div>
										</td>
									</tr>

									<tr>
										<th>수수료 설정 <span class="red">*</span></th>
										<td>
											<div class="label_wrap">
												<label for="cms_type_ctg" class="pad_right10"
													><input
														type="radio"
														id="cms_type_ctg"
														name="cmsType"
														value="CTGMIM"
														checked=""
														onclick="checkCmsType()"
													/>기본 수수료설정 (입점업체 또는 카테고리)</label
												>
												<label for="cms_type_gos"
													><input
														type="radio"
														id="cms_type_gos"
														name="cmsType"
														value="GOS"
														onclick="checkCmsType()"
													/>개별 수수료 설정 (상품별)</label
												>
											</div>
										</td>
									</tr>

									<tr>
										<th>정상가격</th>
										<td>
											<input
												type="text"
												name="marketPrice"
												value=""
												class="text_input tr"
												onkeyup="toCurrency(this)"
											/>
											원
										</td>
									</tr>

									<tr>
										<th>판매가 <span class="red">*</span></th>
										<td class="price">
											<div class="label_wrap">
												<label for="price_split_supply"
													><input
														type="radio"
														id="price_split_supply"
														name="priceSplit"
														value="100"
														checked=""
														onclick="checkPriceSplit(this.value)"
													/>공급가기준<span>(수수료 자동입력)</span></label
												>
												<label for="price_split_margin"
													><input
														type="radio"
														id="price_split_margin"
														name="priceSplit"
														value="200"
														onclick="checkPriceSplit(this.value)"
													/>수수료기준<span>(공급가 자동입력)</span></label
												>
											</div>
											<div class="topline priceinput">
												<dl>
													<dt>판매가</dt>
													<dd>
														<input
															type="text"
															name="price"
															value=""
															class="text_input tr"
															style="width: 130px"
															onkeyup="toCurrency(this); calcPrice(this);"
															onblur="checkPriceRound(this)"
															autocomplete="off"
														/>
														원
													</dd>
												</dl>
												<dl>
													<dt>수수료율</dt>
													<dd>
														<input
															type="text"
															name="margin"
															value="0"
															maxlength="5"
															class="text_input"
															style="width: 80px; background-color: #e0e0e0"
															onkeyup="onlyFloat(this); calcPrice(this);"
															readonly=""
															autocomplete="off"
														/>
														%
													</dd>
												</dl>
												<dl>
													<dt>공급가</dt>
													<dd>
														<input
															type="text"
															name="originalPrice"
															value=""
															class="text_input tr"
															style="width: 130px"
															onkeyup="toCurrency(this); calcPrice(this);"
															onblur="checkPriceRound(this)"
															autocomplete="off"
														/>
														원
													</dd>
												</dl>
											</div>
										</td>
									</tr>

									<tr>
										<th>적립금</th>
										<td class="cmoney">
											<ul class="checkoptionrow">
												<li>
													<label for="cmoney_policy_dealer"
														><input
															type="radio"
															id="cmoney_policy_dealer"
															name="cmoneyPolicy"
															value="128"
															onclick="checkCmoneyPolicy()"
															disabled=""
														/>입점업체 정책</label
													>
												</li>

												<li>
													<label for="cmoney_policy_default"
														><input
															type="radio"
															id="cmoney_policy_default"
															name="cmoneyPolicy"
															value="256"
															checked=""
															onclick="checkCmoneyPolicy()"
														/>기본 정책</label
													>
												</li>
												<li>
													<label for="cmoney_policy_none"
														><input
															type="radio"
															id="cmoney_policy_none"
															name="cmoneyPolicy"
															value="0"
															onclick="checkCmoneyPolicy()"
														/>적립금 지급 안함</label
													>
												</li>
												<li class="inform">
													<label for="cmoney_policy_price"
														><input
															type="radio"
															id="cmoney_policy_price"
															name="cmoneyPolicy"
															value="6"
															onclick="checkCmoneyPolicy()"
														/>
														<select
															id="cmoneyPolicyPrice"
															name="cmoneyPolicyPrice"
															disabled=""
														>
															<option value="2">판매가</option>
															<option value="4">결제가</option>
														</select>
														의
														<input
															type="text"
															name="cmoneyPercent"
															value=""
															maxlength="5"
															class="text_input tr"
															style="width: 70px"
															onkeyup="onlyFloat(this)"
															disabled=""
														/>
														% 지급</label
													>
												</li>
												<li>
													<label for="cmoney_policy_amount"
														><input
															type="radio"
															id="cmoney_policy_amount"
															name="cmoneyPolicy"
															value="8"
															onclick="checkCmoneyPolicy()"
														/>
														구매 상품(개수) 당<input
															type="text"
															name="cmoneyMoney"
															value=""
															class="text_input tr"
															style="width: 70px"
															onkeyup="toCurrency(this)"
															disabled=""
														/>
														원 지급</label
													>
												</li>
											</ul>

											<div class="topline noti_info">
												"기본정책" 이외 다른 적립금 항목을 설정 시 적립금은
												입점업체에게 부담됩니다.
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //group_box -->

					<div class="group_box">
						<div class="section_head">
							<h4>상품필수정보</h4>
						</div>
						<div class="goodsTablebox">
							<table
								width="100%"
								summary="상품 필수정보 등록 폼 입니다."
								class="t_form goods_reg mgt10"
							>
								<caption>
									상품 필수정보 등록 폼
								</caption>
								<colgroup>
									<col width="160" />
									<col width="*" />
									<col width="160" />
									<col width="*" />
								</colgroup>
								<tbody>
									<tr>
										<th>제조사</th>
										<td>
											<input
												type="text"
												name="product"
												value=""
												class="text_input"
												maxlength="50"
											/>
										</td>
										<th>원산지</th>
										<td>
											<input
												type="text"
												name="origin"
												value=""
												class="text_input"
												maxlength="50"
											/>
										</td>
									</tr>
									<tr>
										<th rowspan="2">상품정보고시 <span class="red">*</span></th>
										<td colspan="3">
											<ul class="noti_info mgn">
												<li>
													공정거래위원회에서 공고한 전자상거래법 상품정보제공
													고시에 관한 내용을 필독해 주세요.
												</li>
												<li>
													전자상거래법에 의거하여 판매상품의 필수(상세)정보
													등록이 필요합니다.
												</li>
												<li>
													등록된 정보는 쇼핑몰 상품상세페이지에 상품기본정보
													아래에 표형태로 출력되어 보여집니다.
												</li>
											</ul>
											<div class="mgt10">
												<a
													class="btn_sec sm"
													href="http://www.ftc.go.kr/policy/legi/legiView.jsp?lgslt_noti_no=112"
													target="blank"
													>전자상거래법 상품정보제공 고시에 관한 내용</a
												>
												<a
													class="btn_sec sm"
													href="http://javalocal.mallstore.co.kr/data/base/Download/information/commodity_guide.zip"
													download=""
													>품목별 상품고시</a
												>
											</div>
										</td>
									</tr>
									<tr>
										<td colspan="3" class="notify">
											<select
												id="notify"
												name="notify"
												onchange="getNotify(this)"
											>
												<option value="">
													등록하실 상품의 상품군을 선택하세요
												</option>
												<option value="1">의류</option>
												<option value="3">의약품</option>
												<option value="4">전자제품</option>
												<option value="14">건강식품</option>
												<option value="15">구두/신발</option>
											</select>
											<ul class="over_h mgb5 topline">
												<li class="fl">
													<button
														class="btn_sec sm"
														type="button"
														onclick="delRowList('tb_notify');"
													>
														삭제
													</button>
												</li>
												<li class="fr">
													<button
														class="btn_sec sm"
														type="button"
														onclick="addRow('tb_notify');"
													>
														추가
													</button>
												</li>
											</ul>
											<table
												width="100%"
												summary="상품정보고시 표 제목 입니다."
												class="t_list"
											>
												<caption>
													상품정보고시 표 제목
												</caption>
												<colgroup>
													<col width="30" />
													<col width="40" />
													<col width="200" />
													<col width="*" />
												</colgroup>
												<thead>
													<tr>
														<th></th>
														<th>
															<label
																><input
																	type="checkbox"
																	name="cbNotifyAll"
																	onclick="checkCbAll(this.form.cbNotify, this.checked)"
																/>전체선택</label
															>
														</th>
														<th>항목</th>
														<th class="last">내용</th>
													</tr>
												</thead>
											</table>
											<table
												id="tb_notify"
												width="100%"
												summary="상품정보고시 목록 입니다."
												noblank="1"
												class="t_list"
											>
												<caption>
													상품정보고시 목록
												</caption>
												<colgroup>
													<col width="30" />
													<col width="40" />
													<col width="200" />
													<col width="*" />
												</colgroup>
												<tbody>
													<tr>
														<td><span class="numbering">1</span></td>
														<td>
															<input
																type="hidden"
																name="notifyNo"
																value="1"
															/><label
																><input
																	type="checkbox"
																	name="cbNotify"
																/>선택</label
															>
														</td>
														<td>
															<input
																type="text"
																name="notifyName"
																class="text_input"
																maxlength="100"
															/>
														</td>
														<td class="last">
															<textarea
																name="notifyData"
																rows="2"
																class="text_input"
																onkeyup="checkTextLen(this, 2000)"
															></textarea>
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //group_box -->

					<div class="group_box">
						<div class="section_head">
							<h4>이미지 정보</h4>
						</div>
						<div class="goodsTablebox">
							<table
								width="100%"
								summary="상품 이미지 관련 등록 폼 입니다."
								class="t_form goods_reg"
							>
								<caption>
									상품 이미지 등록 폼
								</caption>
								<colgroup>
									<col width="160" />
									<col width="*" />
								</colgroup>
								<tbody>
									<!-- 상품 이미지 : 시작 -->
									<tr>
										<th>큰이미지 <span class="red">*</span></th>
										<td>
											<div>
												<label for="img_auto"
													><input
														type="checkbox"
														id="img_auto"
														name="isImgAuto"
														value="T"
														onclick="changeImgRegAuto(this)"
														checked=""
													/>자동등록</label
												>
												<div>
													<dl class="noti_info">
														<dt>자동등록이란?</dt>
														<dd>
															큰이미지만 올리시면 사이트 정보에서 지정해 놓은
															사이즈로 중간이미지, 작은이미지가 자동 생성되어
															저장됩니다.
														</dd>
														<dd>
															각각 올리기를 원하실 경우 자동등록의 체크를
															해제하시면 됩니다.
														</dd>
													</dl>
												</div>
											</div>
											<div class="topline">
												<input
													type="file"
													name="imgB"
													style="width: 300px"
													onkeypress="blockKey(event)"
													onkeydown="blockKey(event)"
												/>
												<input type="hidden" name="orgimgB" value="" />
												<span class="noti_info">(500px * 500px)</span>
											</div>
										</td>
									</tr>

									<tr class="imgManuals" style="display: none">
										<th>중간이미지 <span class="red">*</span></th>
										<td>
											<input
												type="file"
												name="imgM"
												style="width: 300px"
												onkeypress="blockKey(event)"
												onkeydown="blockKey(event)"
											/>
											<input type="hidden" name="orgimgM" value="" />
											<span class="noti_info">(450px * 450px)</span>
										</td>
									</tr>
									<tr class="imgManuals" style="display: none">
										<th>작은이미지 <span class="red">*</span></th>
										<td>
											<input
												type="file"
												name="imgS"
												style="width: 300px"
												onkeypress="blockKey(event)"
												onkeydown="blockKey(event)"
											/>
											<input type="hidden" name="orgimgS" value="" />
											<span class="noti_info">(600px * 600px)</span>
										</td>
									</tr>
									<tr>
										<th>다른이미지</th>
										<td class="img_etc">
											<div class="botline">
												<ul class="over_h">
													<li class="fl">
														<button
															class="btn_sec sm"
															type="button"
															onclick="delRowList('tb_img_etc');"
														>
															선택 삭제
														</button>
													</li>
													<li class="fr">
														<button
															class="btn_sec sm"
															type="button"
															onclick="addRow('tb_img_etc');"
														>
															이미지 추가
														</button>
													</li>
												</ul>
											</div>
											<table
												id="tb_img_etc"
												class="t_list bdt"
												width="100%"
												summary="다른 이미지 목록입니다."
												max="10"
												noblank="1"
											>
												<caption>
													다른 이미지 목록
												</caption>
												<colgroup>
													<col width="25" />
													<col width="40" />
													<col width="240" />
													<col width="*" />
												</colgroup>
												<tbody>
													<tr>
														<td><span class="numbering">1</span>.</td>
														<td>
															<label class="text_none"
																><input type="checkbox" name="cbImgEtc" /><input
																	type="hidden"
																	name="imgIdx"
																	value=""
																/>선택</label
															>
														</td>
														<td>
															<input
																type="file"
																name="imgEtc"
																onkeypress="blockKey(event)"
																onkeydown="blockKey(event)"
															/>
															<input
																type="hidden"
																name="originHiddenImgFileName"
																value=""
															/>
														</td>
														<td></td>
													</tr>

													<tr>
														<td><span class="numbering">2</span>.</td>
														<td>
															<label class="text_none"
																><input type="checkbox" name="cbImgEtc" /><input
																	type="hidden"
																	name="imgIdx"
																	value=""
																/>선택</label
															>
														</td>
														<td>
															<input
																type="file"
																name="imgEtc"
																onkeypress="blockKey(event)"
																onkeydown="blockKey(event)"
															/>
															<input
																type="hidden"
																name="originHiddenImgFileName"
																value=""
															/>
														</td>
														<td></td>
													</tr>

													<tr>
														<td><span class="numbering">3</span>.</td>
														<td>
															<label class="text_none"
																><input type="checkbox" name="cbImgEtc" /><input
																	type="hidden"
																	name="imgIdx"
																	value=""
																/>선택</label
															>
														</td>
														<td>
															<input
																type="file"
																name="imgEtc"
																onkeypress="blockKey(event)"
																onkeydown="blockKey(event)"
															/>
															<input
																type="hidden"
																name="originHiddenImgFileName"
																value=""
															/>
														</td>
														<td></td>
													</tr>

													<tr>
														<td><span class="numbering">4</span>.</td>
														<td>
															<label class="text_none"
																><input type="checkbox" name="cbImgEtc" /><input
																	type="hidden"
																	name="imgIdx"
																	value=""
																/>선택</label
															>
														</td>
														<td>
															<input
																type="file"
																name="imgEtc"
																onkeypress="blockKey(event)"
																onkeydown="blockKey(event)"
															/>
															<input
																type="hidden"
																name="originHiddenImgFileName"
																value=""
															/>
														</td>
														<td></td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
									<!-- 상품 이미지 : 끝 -->
								</tbody>
							</table>
						</div>
					</div>
					<!-- //group_box -->

					<div class="group_box">
						<div class="section_head">
							<h4>진열정보</h4>
						</div>
						<div class="goodsTablebox">
							<table
								width="100%"
								summary="상품 진열정보 등록 폼 입니다."
								class="t_form goods_reg"
							>
								<caption>
									상품 진열정보 등록 폼
								</caption>
								<colgroup>
									<col width="160" />
									<col width="*" />
								</colgroup>
								<tbody>
									<tr>
										<th rowspan="2">분류</th>
										<td>
											<select
												id="cate_1"
												name="cate_1"
												depth="1"
												onchange="changeCate(this)"
											>
												<option value="">선택</option>
												<option value="1742" name="패션의류" cms="0" child="1">
													패션의류 [0%]
												</option>
												<option value="1831" name="테마별" cms="0" child="1">
													테마별 [0%]
												</option>
												<option value="1837" name="시즌별" cms="0" child="1">
													시즌별 [0%]
												</option>
												<option value="1704" name="화장품" cms="10" child="1">
													화장품 [10%]
												</option>
												<option value="1836" name="뷰티" cms="0" child="1">
													뷰티 [0%]
												</option>
												<option value="1710" name="잡화" cms="5" child="1">
													잡화 [5%]
												</option></select
											>&nbsp;<select
												id="cate_2"
												name="cate_2"
												depth="2"
												onchange="changeCate(this)"
											>
												<option value="">선택</option></select
											>&nbsp;<select
												id="cate_3"
												name="cate_3"
												depth="3"
												onchange="changeCate(this)"
											>
												<option value="">선택</option></select
											>&nbsp;
											<button
												class="btn_sec sm"
												type="button"
												onclick="addCate()"
											>
												추가
											</button>
										</td>
									</tr>
									<tr>
										<td class="category">
											<table
												id="tb_category"
												class="t_list"
												width="100%"
												summary="상품 분류 목록 입니다."
												head="1"
											>
												<caption>
													상품 분류 목록
												</caption>
												<colgroup>
													<col width="50" />
													<col width="*" />
													<col width="80" />
												</colgroup>
												<tbody>
													<tr>
														<th>기본</th>
														<th>분류</th>
														<th>삭제</th>
													</tr>
												</tbody>
											</table>
											<div>
												<dl class="noti_info">
													<dt>다중 분류로 선택할 경우</dt>
													<dd>
														기본으로 선택한 분류가 상품의 대표로 지정되며, 상품
														검색 시 기본분류가 선택되어 노출됩니다.
													</dd>
													<dd>
														카테고리 별 수수료가 다를 경우 기본으로 선택한
														카테고리의 수수료율이 적용됩니다.
													</dd>
													<dd>
														다중 분류로 선택할 경우 선택한 모든 카테고리에
														상품이 전부 노출됩니다.
													</dd>
												</dl>
											</div>
										</td>
									</tr>
									<tr>
										<th>상품아이콘</th>
										<td class="icons">
											<div class="iconsetting botline over_h">
												<button
													class="btn_sec sm fl"
													type="button"
													onclick="openIcon()"
												>
													아이콘 관리
												</button>
											</div>

											<ul class="label_icon">
												<li>
													<label for="cb_icon_1"
														><input
															type="checkbox"
															id="cb_icon_1"
															name="icon"
															value="1" /><img
															id="icon_1"
															src="//bootdev.mallstore.co.kr/data/base/icon/ico_pro_sale.gif"
													/></label>
												</li>
												<li>
													<label for="cb_icon_2"
														><input
															type="checkbox"
															id="cb_icon_2"
															name="icon"
															value="2" /><img
															id="icon_2"
															src="//bootdev.mallstore.co.kr/data/base/icon/ico_pro_best.gif"
													/></label>
												</li>
												<li>
													<label for="cb_icon_4"
														><input
															type="checkbox"
															id="cb_icon_4"
															name="icon"
															value="4" /><img
															id="icon_4"
															src="//bootdev.mallstore.co.kr/data/base/icon/ico_pro_good.gif"
													/></label>
												</li>
												<li>
													<label for="cb_icon_8"
														><input
															type="checkbox"
															id="cb_icon_8"
															name="icon"
															value="8" /><img
															id="icon_8"
															src="//bootdev.mallstore.co.kr/data/base/icon/ico_pro_free.gif"
													/></label>
												</li>
												<li>
													<label for="cb_icon_16"
														><input
															type="checkbox"
															id="cb_icon_16"
															name="icon"
															value="16" /><img
															id="icon_16"
															src="//bootdev.mallstore.co.kr/data/base/icon/freedel.gif"
													/></label>
												</li>
												<li>
													<label for="cb_icon_32"
														><input
															type="checkbox"
															id="cb_icon_32"
															name="icon"
															value="32" /><img
															id="icon_32"
															src="//bootdev.mallstore.co.kr/data/base/icon/icon_cybermoney.gif"
													/></label>
												</li>
												<li>
													<label for="cb_icon_64"
														><input
															type="checkbox"
															id="cb_icon_64"
															name="icon"
															value="64" /><img
															id="icon_64"
															src="//bootdev.mallstore.co.kr/data/base/icon/891c37c0803b43c492c986e01b31dc90.png"
													/></label>
												</li>
												<li>
													<label for="cb_icon_128"
														><input
															type="checkbox"
															id="cb_icon_128"
															name="icon"
															value="128" /><img
															id="icon_128"
															src="//bootdev.mallstore.co.kr/data/base/icon/4f66d7c86c454a1188b95b0942941fda.jpg"
													/></label>
												</li>
												<li></li>
												<li></li>
												<li></li>
												<li></li>
												<li></li>
												<li></li>
											</ul>
										</td>
									</tr>
									<tr>
										<th>재고설정</th>
										<td>
											<div class="label_wrap">
												<label for="stock_limitless"
													><input
														type="radio"
														id="stock_limitless"
														name="stock"
														value="0"
														onclick="checkStock()"
														checked=""
													/>무제한</label
												>
												<label for="stock_quantity"
													><input
														type="radio"
														id="stock_quantity"
														name="stock"
														value="1"
														onclick="checkStock()"
													/>수량</label
												>
												<input
													type="text"
													name="quantity"
													value=""
													maxlength="7"
													class="text_input"
													style="
														width: 60px;
														background-color: rgb(224, 224, 224);
													"
													onkeypress="blockNotNumber(event)"
													onkeyup="toCurrency(this)"
													disabled=""
												/>
												<label for="soldout" class="red"
													><input
														type="checkbox"
														id="soldout"
														name="soldout"
														value="2"
													/>일시품절</label
												>
											</div>
										</td>
									</tr>

									<!-- 	<tr> -->
									<!-- 		<th>회원등급<br />노출설정</th> -->
									<!-- 		<td colspan="3" class="member_level"> -->
									<!-- 			<table width="100%"> -->

									<!-- 			<tr> -->
									<!-- 				<td> -->
									<!-- 					<dl> -->
									<!-- 						<dt><input type="checkbox" id="member_level_all" /><label for="member_level_all"><strong>전체</strong></label></dt> -->
									<!-- 					</dl>						 -->
									<!-- 				</td> -->

									<!-- 					<dl> -->

									<!-- 						<dd> -->

									<!-- 						</dd> -->
									<!-- 					</dl> -->
									<!-- 				</td> -->

									<!-- 			</tr> -->
									<!-- 			</table> -->
									<!-- 		</td> -->
									<!-- 	</tr> -->

									<tr>
										<th>진열설정</th>
										<td>
											<div class="label_wrap">
												<label for="display_T"
													><input
														type="radio"
														id="display_T"
														name="isDisplay"
														value="T"
														checked=""
													/>진열</label
												>
												<label for="display_F"
													><input
														type="radio"
														id="display_F"
														name="isDisplay"
														value="F"
													/>미진열</label
												>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="group_box">
						<div class="section_head">
							<h4>기타정보</h4>
						</div>
						<div class="goodsTablebox">
							<table
								width="100%"
								summary="상품 기타정보 등록 폼 입니다."
								class="t_form goods_reg"
							>
								<caption>
									상품 기타정보 등록 폼
								</caption>
								<colgroup>
									<col width="160" />
									<col width="*" />
								</colgroup>
								<tbody>
									<tr>
										<th>배송비옵션</th>
										<td>
											<dl class="delivery_method">
												<dt>
													<label for="delivery_default_free"
														><input
															type="radio"
															id="delivery_default_free"
															name="deliveryMethod"
															value="100"
															onclick="checkDeliveryMethod()"
														/>기본무료배송</label
													>
												</dt>
												<dd>해당상품이 포함되었을 경우 무료 배송합니다.</dd>

												<dt>
													<label for="delivery_free"
														><input
															type="radio"
															id="delivery_free"
															name="deliveryMethod"
															value="101"
															onclick="checkDeliveryMethod()"
														/>상품별 무료배송</label
													>
												</dt>
												<dd>해당상품을 무료배송합니다.</dd>

												<dt>
													<label for="delivery_collect"
														><input
															type="radio"
															id="delivery_collect"
															name="deliveryMethod"
															value="103"
															onclick="checkDeliveryMethod()"
														/>착불</label
													>
												</dt>
												<dd>
													<input
														type="text"
														name="deliveryFeeCollect"
														class="text_input"
														style="
															width: 70px;
															background-color: rgb(224, 224, 224);
														"
														maxlength="10"
														value=""
														onkeyup="toCurrency(this)"
														disabled=""
													/>
													원 (무료배송 :
													<input
														type="text"
														name="deliveryLimitCollect"
														class="text_input"
														style="
															width: 70px;
															background-color: rgb(224, 224, 224);
														"
														maxlength="10"
														value=""
														onkeyup="toCurrency(this)"
														disabled=""
													/>
													원 이상 주문시 무료)
												</dd>

												<dt>
													<label for="delivery_prepay"
														><input
															type="radio"
															id="delivery_prepay"
															name="deliveryMethod"
															value="102"
															onclick="checkDeliveryMethod()"
														/>선불</label
													>
												</dt>
												<dd>
													<input
														type="text"
														name="deliveryFeePrepay"
														class="text_input"
														style="
															width: 70px;
															background-color: rgb(224, 224, 224);
														"
														maxlength="10"
														value=""
														onkeyup="toCurrency(this)"
														disabled=""
													/>
													원 (무료배송 :
													<input
														type="text"
														name="deliveryLimitPrepay"
														class="text_input"
														style="
															width: 70px;
															background-color: rgb(224, 224, 224);
														"
														maxlength="10"
														value=""
														onkeyup="toCurrency(this)"
														disabled=""
													/>
													원 이상 주문시 무료)
												</dd>

												<dt>
													<label for="delivery_dealer"
														><input
															type="radio"
															id="delivery_dealer"
															name="deliveryMethod"
															value="920"
															onclick="checkDeliveryMethod()"
															disabled=""
														/>입점업체정책</label
													>
												</dt>
												<dd>입점업체의 기본정책을 따릅니다.</dd>

												<dt>
													<label for="delivery_default"
														><input
															type="radio"
															id="delivery_default"
															name="deliveryMethod"
															value="990"
															checked=""
															onclick="checkDeliveryMethod()"
														/>기본정책</label
													>
												</dt>
												<dd>쇼핑몰 마스터의 기본정책을 따릅니다.</dd>
											</dl>

											<dl class="topline noti_info">
												<dt>착불, 선불 배송비</dt>
												<dd>
													무료배송 기준금액을 "공백" 또는 "0"으로 입력할 경우
													주문금액과 관계없이 무조건 배송비를 부과합니다.
												</dd>
											</dl>
										</td>
									</tr>
									<tr>
										<th>배송정책</th>
										<td class="editor">
											<textarea
												name="deliveryContent"
												style="width: 100%; height: 200px; display: none"
												id="deliveryContent-placeholder"
											></textarea
											><iframe
												id="__se2_frame_deliveryContent-placeholder"
												name="__se2_frame_deliveryContent-placeholder"
												frameborder="0"
												scrolling="no"
												style="width: 100%; height: 252px"
												src="http://javalocal.mallstore.co.kr/common/editor/se2/SmartEditor2Skin.html"
											></iframe>
											<!-- <script type="text/javascript">
												nhn.husky.EZCreator.createInIFrame({
													elPlaceHolder: 'deliveryContent',
												});
												//]]>
											</script> -->
										</td>
									</tr>
									<tr>
										<th>관련추천상품</th>
										<td>
											<ul class="over_h mgb5">
												<li class="fl">
													<button
														type="button"
														class="btn_sec sm"
														onclick="delGoods('linkedRelate');"
													>
														상품 삭제
													</button>
												</li>
												<li class="fr">
													<button
														type="button"
														class="btn_sec sm"
														onclick="addGoods('linkedRelate', 'UP')"
													>
														상품 추가
													</button>
												</li>
											</ul>

											<select
												id="linkedRelate"
												name="linkedRelate"
												ondblclick="openGoods(this)"
												max="10"
												multiple=""
												size="7"
												style="width: 100%; height: 100px"
											></select>

											<div class="tr mgt5">
												<button
													type="button"
													class="btn_sec sm"
													onclick="moveGoods('linkedRelate', 'UP')"
												>
													▲
												</button>
												<button
													type="button"
													class="btn_sec sm"
													onclick="moveGoods('linkedRelate', 'DOWN')"
												>
													▼
												</button>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //group_box -->

					<div class="btn">
						<button type="button" class="btn_pri" onclick="validSubmit()">
							확인
						</button>
						<button type="button" class="btn_sec" onclick="cancel()">
							취소
						</button>
					</div>
				</form>
			</section>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style>
.t_form td label {
	cursor: pointer;
}
.t_form td .explain dt {
	margin-bottom: 3px;
}
.t_form td .explain dd {
	font-size: 11px;
	line-height: 15px;
	background: url(../imgs/icon/icon_squar_gray2px.gif) 6px 5px no-repeat;
	padding: 0 0 0 13px;
}
.t_form td .explain dd.bgn {
	background: none;
}

.t_form td.category {
	padding: 0;
}
.t_form td.category table {
	margin-bottom: 5px;
	table-layout: fixed;
}
.t_form td.category th {
	padding: 3px 0;
	border: none;
	text-align: center;
	font-size: 11px;
	background-color: #f5f5f5;
}
.t_form td.category td {
	padding: 3px 0 0;
	border: none;
	text-align: center;
	vertical-align: bottom;
}
.t_form td.category td.txt {
	text-align: left;
}
.t_form td.category .explain {
	border-top: 1px solid #ddd;
	padding: 5px;
}

.t_form td.icons li {
	float: left;
	width: 130px;
	margin-bottom: 2px;
}
.t_form td.icons li input {
	display: block;
	float: left;
	padding: 3px;
}
.t_form td.icons li div {
	float: left;
	width: 110px;
	height: 17px;
	padding: 3px 0 0;
	overflow: hidden;
}

.t_form td.img_etc table {
	table-layout: fixed;
}
.t_form td.img_etc td {
	padding: 3px;
	text-align: left;
	border: 0 none;
}

.t_form td.price div,
.t_form td.price ul {
	float: left;
}
.t_form td.price div {
	line-height: 19px;
}
.t_form td.price div span {
	font-size: 11px;
}
.t_form td.price ul {
	margin-left: 10px;
}
.t_form td.price ul li {
	float: left;
	margin-left: 15px;
}
.t_form td.price ul li input {
	font-size: 17px;
	font-family: Tahoma;
	font-weight: bold;
	text-align: right;
	padding: 1px 3px;
}

.t_form td.member_level {
	padding: 0 !important;
}
.t_form td.member_level table {
	border: 0 none;
}
.t_form td.member_level td {
	padding: 0;
	border-bottom: none;
	vertical-align: top;
}
.t_form td.member_level td.last {
	border-right: none;
}
.t_form td.member_level td dt {
	padding: 5px;
	border-bottom: 1px solid #ddd;
	background-color: #f9f9f9;
}
.t_form td.member_level td dd {
	padding: 5px;
}

.t_form td.member_discount {
	padding: 0 !important;
}
.t_form td.member_discount td {
	padding: 0;
	border-bottom: none;
	vertical-align: top;
}
.t_form td.member_discount td.last {
	border-right: none;
}
.t_form td.member_discount td strong {
	display: block;
	padding: 5px 3px;
	font-size: 11px;
	text-align: center;
	border-top: 1px solid #ddd;
	background-color: #f9f9f9;
}
.t_form td.member_discount td dl {
	overflow: hidden;
}
.t_form td.member_discount td dt,
.t_form td.member_discount td dd {
	font-size: 11px;
}
.t_form td.member_discount td dt {
	padding: 3px 5px;
	border-top: 1px solid #ddd;
	background-color: #f9f9f9;
}
.t_form td.member_discount td dd {
	overflow: hidden;
	padding: 5px 3px;
}
.t_form td.member_discount td dd div {
	float: left;
	width: 60%;
	text-align: center;
}
.t_form td.member_discount td dd div.rate {
	width: 40%;
}

.t_form td.cmoney .goods {
	width: 50%;
}
.t_form td.cmoney .goods li {
	margin-bottom: 3px;
}

.t_form td.notify table {
	table-layout: fixed;
	clear: both;
	border-bottom: 0;
}

.t_form td.editor {
	padding: 0;
}

.t_form td .delivery_method {
	overflow: hidden;
}
.t_form td .delivery_method dt,
.t_form td .delivery_method dd {
	float: left;
	line-height: 32px;
	margin-bottom: 3px;
}
.t_form td .delivery_method dt {
	width: 17%;
}
.t_form td .delivery_method dd {
	width: 83%;
}
</style>
