<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				이벤트등록<button
					id="addBmark"
					onclick="addBookmark('이벤트등록')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>프로모션</li>
				<li>이벤트관리</li>
				<li>이벤트등록</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>이벤트를 생성하고 관리하는 페이지입니다.</li>
			<li>
				분류이벤트 경우, 먼저 이벤트의 기본정보를 입력후 수정에서 지정된
				분류별로 상품이 등록가능합니다.
			</li>
		</ul>

		<!-- <style type="text/css">
			.tb_goods {
				margin-top: 5px;
				border-top: 1px solid #ddd;
				border-left: 1px solid #ddd;
			}
			.tb_goods thead th {
				padding: 5px 0;
				text-align: center;
				border: none;
				border-bottom: 1px solid #ddd;
				border-right: 1px solid #ddd;
			}
			.tb_goods tbody td {
				padding: 5px;
				text-align: center;
				border: none;
				border-bottom: 1px solid #ddd;
				border-right: 1px solid #ddd;
			}
			.t_form td select {
				width: 23%;
				margin-right: 5px;
			}
			.sortable_wrap {
				position: relative;
			}
			.sortable_wrap .none {
				text-align: center;
				margin: 20px 0;
			}
			.sortable_wrap .none strong {
				color: #cc0000;
			}
			.sortable_container li {
				margin-bottom: 2px;
				border: 1px solid #e6e6e6;
				overflow: hidden;
			}
			.sortable_container li table {
				border-collapse: collapse;
				width: 100%;
				table-layout: fixed;
			}
			.sortable_container li td {
				padding: 3px 5px;
				text-align: center;
			}
			.sortable_container li td.no {
				background-color: #f5f5f5;
			}
			.sortable_container li td.title {
				text-align: left;
				padding-left: 0;
			}
			.sortable_container li td.title img {
				display: block;
				float: left;
			}
			.sortable_container li td.title p {
				float: left;
				margin-left: 10px;
				width: 80%;
			}
			.sortable_container li td.title p span {
				font-size: 11px;
				color: #cc0000;
			}
			.sortable_container li td.price {
				padding-left: 10px;
				padding-right: 10px;
			}
			.sortable_container li td.mover {
				padding: 0;
				border-right: none;
				cursor: n-resize;
				background: url(../imgs/icon/icon_move.gif) center no-repeat;
			}
			.sortable_container li.current {
				border: 1px solid #336699;
				background-color: #dfdfff;
			}
		</style> -->

		<!-- 에디터 Script -->
		<!-- <script
			type="text/javascript"
			src="/common/editor/se2/js/HuskyEZCreator.js"
		></script>
		<script
			type="text/javascript"
			src="/jscript/jquery/jquery-ui-1.10.3.min.js"
		></script>
		<script type="text/javascript" src="/jscript/calendar/class.js"></script>
		<script type="text/javascript">
			function cgoods(code, name) {
				this.code = code;
				this.name = name;
			}

			var cateGoods = new Array();

			//]]>
		</script> -->

		<!-- <script type="text/javascript">
			function checkMethod() {
				var f = document.Frm;
				var method = getRadio(f.method);

				_es('bodyNormal').display = 'none';
				_es('bodyCategory').display = 'none';
				_es('bodyCoupon').display = 'none';
				_es('bodyDiscount').display = 'none';

				switch (method) {
					case '100':
						_es('bodyNormal').display = '';
						break;
					case '200':
						_es('bodyCategory').display = '';
						break;
					case '300':
						_es('bodyCoupon').display = '';
						break;
					case '400':
						_es('bodyDiscount').display = '';
						break;
				}
			}

			function toNumericDiscountBatch(item) {
				var f = document.Frm;
				if (f.discountBatchUnit.value == 'rate') {
					onlyFloat(item);
				} else {
					toCurrency(item);
				}
			}

			function checkDiscountBatch() {
				var f = document.Frm;
				_e('txtDiscountBatchUnit').innerHTML =
					f.discountBatchUnit.value == 'rate' ? '%' : '원';
			}

			function setDiscountBatch() {
				var f = document.Frm;
				var discountBatchUnit = f.discountBatchUnit.value;
				var objDiscount =
					discountBatchUnit == 'rate' ? f.discountRate : f.discountPrice;

				if (f.discountBatch.value.toNumeric() < 1) {
					alert(
						(discountBatchUnit == 'rate' ? '할인율' : '할인액') +
							'을 1 이상으로 입력해 주세요.',
					);
					f.discountBatch.value = '';
					f.discountBatch.focus();
					return false;
				}

				if (!objDiscount) {
					alert('상품을 선택해 주세요.');
					return false;
				}

				if (
					discountBatchUnit == 'rate' &&
					f.discountBatch.value.toNumeric() > 100
				) {
					alert('할인율은 100% 이하로 설정되어야 합니다.');
					f.discountBatch.value = '';
					f.discountBatch.focus();
					return false;
				}

				if (typeof objDiscount.length == 'undefined') {
					objDiscount.value = f.discountBatch.value;
					if (!calcDiscount(objDiscount, 1)) return false;
				} else {
					for (var i = 0; i < objDiscount.length; i++) {
						objDiscount[i].value = f.discountBatch.value;
						if (!calcDiscount(objDiscount[i], 1)) return false;
					}
				}
			}

			function calcDiscount(obj, blur) {
				var f = document.Frm;

				// 가격 계산시 절사단위
				var priceRoundUnit = '-1'.toNumeric();
				if (!blur) blur = 0;

				var parentTr = _pe(obj, 'tr');

				var $price = $(parentTr).find('input[name="price"]');
				var $discountRate = $(parentTr).find('input[name="discountRate"]');
				var $discountPrice = $(parentTr).find('input[name="discountPrice"]');
				var price = $price.val();
				var discountRate = $discountRate.val();
				var discountPrice = $discountPrice.val();

				if (price == 0) {
					$discountRate.val('0');
					$discountPrice.val('0');
				} else {
					if (obj.name == 'discountRate') {
						if (discountRate > 100) {
							alert('할인율은 100% 이하로 설정되어야 합니다.');
							$discountRate.val('');
							$discountPrice.val('');
							$discountRate.focus();
							return false;
						}

						discountPrice = setRound(
							price * (discountRate / 100),
							priceRoundUnit,
						);
						$discountPrice.val(formatComma(discountPrice));

						if (blur) {
							// 절사로 인하여 할인율이 달라질수 있으므로 계산된 할인액으로 할인율 재계산
							$discountRate.val(setRound((discountPrice / price) * 100, 2));
						}
					} else {
						discountRate =
							discountPrice == 0 ? 0 : (discountPrice / price) * 100;
						if (discountRate > 100) {
							alert('할인율은 100% 이하로 설정되어야 합니다.');
							$discountRate.val('');
							$discountPrice.val('');
							$discountRate.focus();
							return false;
						}
						$discountRate.val(setRound(discountRate, 2));
					}
				}

				return true;
			}

			function changeDisplayCols(obj) {
				var f = document.Frm;
				var size;
				switch (obj.value.toNumeric()) {
					case 2:
						size = 250;
						break;
					case 3:
						size = 200;
						break;
					case 4:
						size = 150;
						break;
					case 5:
						size = 120;
						break;
				}
				/* f.imgWidth.value = size;
	f.imgHeight.value = size; */
			}
			//]]>
		</script> -->

		<!-- 이벤트 상품 목록 템플릿 -->
		<!-- <script id="tbGoodsSort-template" type="text/x-handlebars-template">
			<li>
				<table class='t_list'>
					<colgroup>
						<col width='30' /><col width='30' /><col width='*' /><col
							width='14%'
						/><col width='14%' /><col style='display:{{css}}' width='100' /><col
							style='display:{{css}}'
							width='100'
						/><col width='25' />
					</colgroup>
					<tr>
						<td class='no'>0</td>
						<td><label><input type='checkbox' name='cbList' />선택</label></td>
						<td class='left tl'>
							<input type='hidden' name='gno' value='{{no}}' />
							<input type='hidden' name='cateIdx' value='{{cate}}' />
							<a
								href='../../goods/detail?gno={{no}}'
								target='_blank'
							>{{name}}</a>
						</td>
						<td><input
								type='hidden'
								name='price'
								value='{{price}}'
							/>{{priceComma}}
							원</td>
						<td><input
								type='hidden'
								name='originalPrice'
								value='{{originalPrice}}'
							/>{{originalPriceComma}}
							원</td>
						<td style='display:{{css}}'><input
								type='text'
								name='discountRate'
								maxlength='5'
								class='text_input sm'
								onFocus='this.select()'
								onKeyUp='onlyFloat(this); calcDiscount(this);'
								onBlur='calcDiscount(this, 1);'
							/>
							%</td>
						<td style='display:{{css}}'><input
								type='text'
								name='discountPrice'
								maxlength='10'
								class='text_input'
								style='width:55px; text-align:right;'
								onKeyUp='toCurrency(this); calcDiscount(this);'
								readOnly
							/>
							원</td>
						<td class='mover'></td>
					</tr>
				</table>
			</li>
		</script>

		<script type="text/javascript">
			var popSelectGoods;
			// 상품선택 오픈
			function openSelectGoods(target) {
				if (target == 'sCategoryGoods') {
					if (_e('sCategory').selectedIndex == -1) {
						alert('상품을 등록할 분류를 지정해 주세요.');
						return false;
					}
				}

				popSelectGoods = openPopup(
					'../../common/select/select_goods_pop?target=' + target,
					'SelectGoods',
					1100,
					800,
					'scrollbars=yes',
				);
			}

			// 상품선택 처리
			function takeSelectGoods(target, goods) {
				var f = document.Frm;
				var isExist = false;

				if (target == 'sDiscountGoods' || target == 'sGoods') {
					if (f.gno) {
						if (typeof f.gno.length == 'undefined') {
							if (f.gno.value == goods.no.toString()) isExist = true;
						} else {
							for (var i = 0; i < f.gno.length; i++) {
								if (f.gno[i].value == goods.no.toString()) isExist = true;
							}
						}
					}

					if (isExist) {
						popSelectGoods.alert('이미 추가된 상품입니다.');
						return false;
					} else {
						goods.priceComma = formatComma(goods.price);
						goods.originalPriceComma = formatComma(goods.originalPrice);

						if (target == 'sGoods') {
							goods.css = 'none';
							fnSetTemplate(
								'#tbGoodsSort-template',
								goods,
								$('#tbGoodsSort-target'),
							);
						} else {
							fnSetTemplate(
								'#tbGoodsSort-template',
								goods,
								$('#tbDiscountGoodsSort-target'),
							);
						}
						numbering();
						return true;
					}
				} else {
					var objSelect = _e(target);

					var text = goods.name;
					var value = goods.no + '-' + goods.cate;

					for (var i = 0; i < objSelect.length; i++) {
						if (objSelect.options[i].value == value) isExist = trucgoodse;
					}

					if (isExist) {
						popSelectGoods.alert('이미 추가된 상품입니다.');
						return false;
					} else {
						addSelectOption(objSelect, text, value);

						if (target == 'sCategoryGoods') {
							var currIdx = _e('sCategory').selectedIndex;

							if (currIdx < 0) return false;

							cateGoods[currIdx][cateGoods[currIdx].length] = new cgoods(
								value,
								text,
							);
						}

						return true;
					}
				}
			}

			// 쿠폰선택 오픈
			function openSelectCoupon(target) {
				openPopup(
					'../../common/select/select_coupon_pop?target=' + target,
					'SelectCoupon',
					600,
					600,
					'scrollbars=yes',
				);
			}

			// 쿠폰선택 처리
			function takeSelectCoupon(target, idx, title) {
				var objSelect = _e(target);
				var text = title;
				var value = idx;

				var isExist = false;
				for (var i = 0; i < objSelect.length; i++) {
					if (objSelect.options[i].value == value) isExist = true;
				}

				if (isExist) alert('이미 추가된 쿠폰입니다.');
				else {
					addSelectOption(objSelect, text, value);
					return true;
				}
			}

			// SelectBox 항목 삭제
			function delItem(target) {
				var f = document.Frm;

				var objSelect = _e(target);
				var currIdx = objSelect.selectedIndex;

				if (currIdx == -1) return false;

				var deleteList = new Map();

				$('#' + target + ' option:selected').each(function () {
					var optionIdx = $('#' + target + ' option').index(this);
					deleteList.set(optionIdx, optionIdx);
				});

				var deleteCount = 0;

				deleteList.forEach(function (item, key, mapObj) {
					removeSelectOption(objSelect, item - deleteCount++);
				});

				if (target == 'sCategory') {
					resetCateInput();

					for (var i = currIdx; i < cateGoods.length - 1; i++) {
						cateGoods[i] = cateGoods[i + 1];
					}
					cateGoods.length -= 1;

					_e('sCategoryGoods').length = 0;
				} else if (target == 'sCategoryGoods') {
					var currIdxCate = _e('sCategory').selectedIndex;

					if (currIdxCate == -1) return false;

					var count = 0;

					for (var i = 0; i < cateGoods[currIdxCate].length - 1; i++) {
						if (deleteList.get(i) == undefined) {
							//삭제 대상이 아닌경우
							cateGoods[currIdxCate][count++] = cateGoods[currIdxCate][i];
						}
					}

					cateGoods[currIdxCate].length = count;
				}
			}

			// SelectBox 항목 이동
			function moveItem(direction, target) {
				var f = document.Frm;

				var objSelect = _e(target);
				var currIdx = objSelect.selectedIndex;

				if (currIdx == -1) return false;

				if ($('#' + target + ' option:selected').length > 1) {
					alert('하나만 선택해주세요.');
					return false;
				}

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
					objSelect.options[currIdx].selected = false;
					objSelect.options[currIdx - 1].text = currText;
					objSelect.options[currIdx - 1].value = currValue;

					switch (target) {
						case 'sCategory':
							var currItem = cateGoods[currIdx];
							cateGoods[currIdx] = cateGoods[currIdx - 1];
							cateGoods[currIdx - 1] = currItem;
							break;
						case 'sCategoryGoods':
							var currIdxCate = _e('sCategory').selectedIndex;
							var currItem = cateGoods[currIdxCate][currIdx];
							cateGoods[currIdxCate][currIdx] =
								cateGoods[currIdxCate][currIdx - 1];
							cateGoods[currIdxCate][currIdx - 1] = currItem;
							break;
					}

					currIdx = currIdx - 1;
				} else if (direction == 'DOWN') {
					objSelect.options[currIdx].text = objSelect.options[currIdx + 1].text;
					objSelect.options[currIdx].value =
						objSelect.options[currIdx + 1].value;
					objSelect.options[currIdx].selected = false;
					objSelect.options[currIdx + 1].text = currText;
					objSelect.options[currIdx + 1].value = currValue;

					switch (target) {
						case 'sCategory':
							var currItem = cateGoods[currIdx];
							cateGoods[currIdx] = cateGoods[currIdx + 1];
							cateGoods[currIdx + 1] = currItem;
							break;
						case 'sCategoryGoods':
							var currIdxCate = _e('sCategory').selectedIndex;
							var currItem = cateGoods[currIdxCate][currIdx];
							cateGoods[currIdxCate][currIdx] =
								cateGoods[currIdxCate][currIdx + 1];
							cateGoods[currIdxCate][currIdx + 1] = currItem;
							break;
					}

					currIdx = currIdx + 1;
				}

				objSelect[currIdx].selected = true;
			}

			// 분류 항목 선택처리
			function checkCate() {
				var f = document.Frm;
				var objSelect = _e('sCategory');
				var objBtn = _e('btnCateInput');

				var currIdx = objSelect.selectedIndex;

				if (currIdx < 0) return false;

				objBtn.innerHTML = '수정';
				objBtn.setAttribute('mode', 'edit');
				f.cateInput.value = objSelect[currIdx].text;

				setCateGoods(currIdx);
			}

			// 분류 상품 SelectBox 설정 처리
			function setCateGoods(index) {
				var objSelect = _e('sCategoryGoods');

				if (index < 0) return false;

				objSelect.length = 0;

				for (var i = 0; i < cateGoods[index].length; i++) {
					addSelectOption(
						objSelect,
						cateGoods[index][i].name,
						cateGoods[index][i].code,
					);
				}
			}

			function resetCateInput() {
				var f = document.Frm;
				var objBtn = _e('btnCateInput');

				objBtn.innerHTML = '추가';
				objBtn.setAttribute('mode', 'add');
				f.cateInput.value = '';
			}

			// 분류 등록/수정
			function regCate() {
				var f = document.Frm;
				var objSelect = _e('sCategory');
				var mode = _e('btnCateInput').getAttribute('mode');

				if (isEmpty(f.cateInput)) {
					alert('분류명을 입력해 주세요.');
					f.cateInput.focus();
					return false;
				}

				var category = f.cateInput.value.trim();

				if (mode == 'add') {
					for (var i = 0; i < objSelect.length; i++) {
						if (objSelect[i].text == category) {
							alert('동일한 분류명이 존재합니다.');
							f.cateInput.focus();
							return false;
						}
					}

					addSelectOption(f.sCategory, category, '');
					cateGoods[cateGoods.length] = new Array();
				} else {
					var currIdx = objSelect.selectedIndex;

					for (var i = 0; i < objSelect.length; i++) {
						if (i != currIdx && objSelect[i].text == category) {
							alert('동일한 분류명이 존재합니다.');
							f.cateInput.focus();
							return false;
						}
					}

					objSelect[currIdx].text = category;
				}

				resetCateInput();
			}
			//]]>
		</script>

		<script type="text/javascript">
			function validSubmit() {
				var f = document.Frm;

				if (isEmpty(f.subject)) {
					alert('제목을 입력해 주세요.');
					f.subject.focus();
					return false;
				}

				var imgpccheck = false;

				if (!isEmpty(f.imgpc)) {
					imgpccheck = false;
				} else if (
					$('#isDelPc').length > 0 &&
					$('#isDelPc:checked').length == 0
				) {
					imgpccheck = false;
				} else if (isEmpty(f.imgpc)) {
					imgpccheck = true;
				} else if (
					$('#isDelPc').length > 0 &&
					$('#isDelPc:checked').length > 0
				) {
					imgpccheck = true;
				}

				if (imgpccheck) {
					alert('리스트 이미지 PC를 선택해 주세요.');
					f.subject.focus();
					return false;
				}

				switch (getRadio(f.method)) {
					case '100':
						if (isEmpty(f.startDate)) {
							alert('이벤트 시작일을 선택해 주세요.');
							f.startDate.focus();
							return false;
						}

						if (isEmpty(f.endDate)) {
							alert('이벤트 종료일을 선택해 주세요.');
							f.endDate.focus();
							return false;
						}

						if (f.startDate.value > f.endDate.value) {
							//alert("이벤트 종료일은 시작일 다음날 부터 설정이 가능합니다.");
							alert('이벤트 시작일을 이벤트 종료일이후로 설정할 수 없습니다.');
							f.startDate.focus();
							return false;
						}

						if (typeof f.gno == 'undefined') {
							alert('진열할 상품을 선택해 주세요.');
							return false;
						}

						break;
					case '200':
						if (isEmpty(f.startDate)) {
							alert('이벤트 시작일을 선택해 주세요.');
							f.startDate.focus();
							return false;
						}

						if (isEmpty(f.endDate)) {
							alert('이벤트 종료일을 선택해 주세요.');
							f.endDate.focus();
							return false;
						}

						if (f.startDate.value > f.endDate.value) {
							alert('이벤트 시작일을 이벤트 종료일이후로 설정할 수 없습니다.');
							f.startDate.focus();
							return false;
						}
						if (f.sCategory.length == 0) {
							alert('분류를 지정해 주세요.');
							return false;
						}

						for (var i = 0; i < f.sCategory.length; i++) {
							if (cateGoods[i].length == 0) {
								alert(
									f.sCategory.options[i].text + ' 분류의 상품을 선택해 주세요.',
								);
								return false;
							}
						}
						break;
					case '300':
						if (isEmpty(f.startDate)) {
							alert('이벤트 시작일을 선택해 주세요.');
							f.startDate.focus();
							return false;
						}

						if (isEmpty(f.endDate)) {
							alert('이벤트 종료일을 선택해 주세요.');
							f.endDate.focus();
							return false;
						}

						if (f.startDate.value > f.endDate.value) {
							alert('이벤트 시작일을 이벤트 종료일이후로 설정할 수 없습니다.');
							f.startDate.focus();
							return false;
						}
						if (f.sCoupon.length == 0) {
							alert('진열할 쿠폰을 선택해 주세요.');
							return false;
						}
						break;
					case '400':
						if (isEmpty(f.startDate)) {
							alert('이벤트 시작일을 선택해 주세요.');
							f.startDate.focus();
							return false;
						}

						if (isEmpty(f.endDate)) {
							alert('이벤트 종료일을 선택해 주세요.');
							f.endDate.focus();
							return false;
						}

						if (f.startDate.value > f.endDate.value) {
							alert('이벤트 시작일을 이벤트 종료일이후로 설정할 수 없습니다.');
							f.startDate.focus();
							return false;
						}

						if (typeof f.gno == 'undefined') {
							alert('진열할 상품을 선택해 주세요.');
							return false;
						}

						if (typeof f.gno.length == 'undefined') {
							if (f.discountPrice.value.toNumeric() < 1) {
								alert('할인율 또는 할인액을 1 이상으로 입력해 주세요.');
								f.discountPrice.focus();
								return false;
							}
						} else {
							for (var i = 0; i < f.gno.length; i++) {
								if (f.discountPrice[i].value.toNumeric() < 1) {
									alert('할인율 또는 할인액을 1 이상으로 입력해 주세요.');
									f.discountPrice[i].focus();
									return false;
								}
							}
						}
						break;
				}

				/* if (f.imgWidth.value.toNumeric() < 1) {
		alert("이미지사이즈 가로를 입력해 주세요.");
		f.imgWidth.focus();
		return false;
	}

	if (f.imgHeight.value.toNumeric() < 1) {
		alert("이미지사이즈 세로를 입력해 주세요.");
		f.imgHeight.focus();
		return false;
	} */

				if (confirm('등록하시겠습니까?')) {
					switch (getRadio(f.method)) {
						case '200':
							for (var i = 0; i < f.sCategory.length; i++) {
								addInput(f, 'hidden', 'category', f.sCategory.options[i].text);

								for (var m = 0; m < cateGoods[i].length; m++) {
									addInput(
										f,
										'hidden',
										'goods' + (i + 1),
										cateGoods[i][m].code,
									);
								}
							}
							break;
						case '300':
							for (var i = 0; i < f.sCoupon.length; i++) {
								addInput(f, 'hidden', 'coupon', f.sCoupon.options[i].value);
							}
							break;
					}

					// 할인 이벤트의 경우 상품 중복 확인
					if (getRadio(f.method) == '400') {
						$.ajax({
							type: 'POST',
							dataType: 'json',
							url: 'chk_event_goods_duplication_ajax',
							data: $("form[name='Frm']").serialize(),
							error: function (request, status, error) {
								alert(request.responseText);
							},
							success: function (data) {
								//		 			console.log(data);
								if (data.result == 0) {
									$('#trDuplicationGoodsList').remove();

									f.target = 'frmProc';
									f.submit();
								} else if (data.result > 0) {
									$('#trDuplicationGoodsList').remove();

									var strGoodsList;

									strGoodsList += "<tr id='trDuplicationGoodsList'>";
									strGoodsList += '<th>중복상품목록</th>';
									strGoodsList += '<td>';

									for (i = 0; i < data.eventGoodsList.length; i++) {
										strGoodsList +=
											data.eventGoodsList[i].GOODSNAME +
											' 상품은 다른 할인 이벤트(' +
											data.eventGoodsList[i].SUBJECT +
											')에 등록된 상품입니다.<br/>';
									}

									strGoodsList += '</td>';
									strGoodsList += '</tr>';

									$('#bodyDiscount').append(strGoodsList);

									alert(
										'다른 할인 이벤트에 등록된 상품이 있습니다. 중복상품목록을 확인하여 주십시오.',
									);
								}
							},
						});
					}
					// 할인 이벤트 이외의 이벤트는 바로 등록
					else {
						f.target = 'frmProc';
						f.submit();
					}
				}
			}

			function cancel() {
				location.href = 'event_list?method=100';
			}

			function delRow(tableId) {
				$('#' + tableId)
					.find('input[name="cbList"]:checked')
					.each(function () {
						$(this).closest('li').remove();
					});
				numbering();
			}

			function sorting() {
				$('.sortable_container')
					.sortable({
						handle: '.mover',
						axis: 'y',
						opacity: 0.7,
						start: function (e, ui) {
							ui.item.addClass('current');
						},
						stop: function (e, ui) {
							ui.item.removeClass('current');
							numbering();
						},
					})
					.disableSelection();
			}

			function numbering() {
				$('.no', '.sortable_container').each(function (index) {
					$(this).text(index + 1);
				});
			}

			$(function () {
				sorting();
			});
			//]]>
		</script> -->

		<form
			name="Frm"
			method="post"
			action="event_act"
			enctype="multipart/form-data"
		>
			<input type="hidden" name="mode" value="REG" />
			<input type="hidden" name="idx" value="0" />
			<input type="hidden" name="params" value="" />

			<div class="main_content">
				<section class="cont_wrap">
					<div class="section_head">
						<h4>이벤트 등록하기</h4>
					</div>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_form"
					>
						<caption>
							이벤트 등록 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>

						<tbody>
							<tr>
								<th>이벤트구분</th>
								<td>
									<div class="label_wrap">
										<label
											><input
												type="radio"
												name="method"
												value="100"
												onclick="checkMethod()"
												checked=""
											/>일반이벤트</label
										>
										<label
											><input
												type="radio"
												name="method"
												value="200"
												onclick="checkMethod()"
											/>분류이벤트</label
										>
										<label
											><input
												type="radio"
												name="method"
												value="300"
												onclick="checkMethod()"
											/>쿠폰이벤트</label
										>
										<label
											><input
												type="radio"
												name="method"
												value="400"
												onclick="checkMethod()"
											/>할인이벤트</label
										>
									</div>
								</td>
							</tr>
							<tr>
								<th>제목</th>
								<td>
									<input
										type="text"
										name="subject"
										class="text_input wide"
										maxlength="100"
										value=""
									/>
								</td>
							</tr>

							<tr>
								<th>행사기간</th>
								<td>
									<div class="label_wrap">
										<div class="period_inp">
											<input
												type="text"
												id="startDate"
												name="startDate"
												value=""
												class="text_input"
												maxlength="10"
												onclick="calendar.open(event, this, 'YYYY-MM-DD')"
												readonly=""
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												alt="달력"
												onclick="calendar.open(event, 'startDate', 'YYYY-MM-DD')"
												style="cursor: pointer; vertical-align: middle"
											/>
										</div>
										~
										<div class="period_inp">
											<input
												type="text"
												id="endDate"
												name="endDate"
												value=""
												class="text_input"
												maxlength="10"
												onclick="calendar.open(event, this, 'YYYY-MM-DD')"
												readonly=""
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												alt="달력"
												onclick="calendar.open(event, 'endDate', 'YYYY-MM-DD')"
												style="cursor: pointer; vertical-align: middle"
											/>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<th>리스트 이미지 PC</th>
								<td>
									<div style="float: left">
										<input type="file" name="imgpc" />
									</div>
								</td>
							</tr>
							<tr>
								<th>리스트 이미지 모바일</th>
								<td>
									<div style="float: left">
										<input type="file" name="imgmobile" />
									</div>
								</td>
							</tr>

							<!-- 일반이벤트 상품관리 : 시작 -->
						</tbody>
						<tbody id="bodyNormal" style="">
							<tr>
								<th>상품</th>
								<td>
									<div class="tr">
										<button
											type="button"
											class="btn_sec sm"
											onclick="openSelectGoods('sGoods');"
										>
											상품 추가
										</button>
										<button
											type="button"
											class="btn_sec sm mgl5"
											onclick="delRow('tbGoodsSort-target');"
										>
											상품 삭제
										</button>
									</div>

									<div class="sortable_wrap">
										<table
											id="tb_nomal_goods"
											width="100%"
											class="t_list mgb5 tb_goods"
											summary="할인 상품 목록입니다."
										>
											<colgroup>
												<col width="30" />
												<col width="30" />
												<col width="*" />
												<col width="14%" />
												<col width="14%" />
												<col width="25" />
											</colgroup>
											<thead>
												<tr>
													<th>번호</th>
													<th>
														<label
															><input
																type="checkbox"
																name="cbListAll"
																onclick="checkCbAll(this.form.cbList, this.checked)"
															/>전체선택</label
														>
													</th>
													<th>상품명</th>
													<th>판매가</th>
													<th>공급가</th>
													<th></th>
												</tr>
											</thead>
										</table>

										<ul
											id="tbGoodsSort-target"
											class="sortable_container ui-sortable"
										></ul>
									</div>
									<!-- //sortable_wrap -->
								</td>
							</tr>
						</tbody>
						<!-- 일반이벤트 상품관리 : 끝 -->

						<!-- 분류이벤트 분류/상품관리 : 시작 -->
						<tbody id="bodyCategory" style="display: none">
							<tr>
								<th>분류/상품</th>
								<td style="padding: 0">
									<table
										border="0"
										cellpadding="0"
										cellspacing="0"
										width="100%"
									>
										<colgroup>
											<col width="300" />
											<col width="*" />
										</colgroup>
										<tbody>
											<tr>
												<th>분류</th>
												<th class="bdr">상품</th>
											</tr>
											<tr>
												<td style="border-bottom: none">
													<div>
														<input
															type="text"
															name="cateInput"
															class="text_input"
															style="width: 216px"
															maxlength="50"
															onkeyup="if (event.keyCode==13) regCate();"
														/>
														<button
															id="btnCateInput"
															type="button"
															class="btn_sec sm"
															mode="add"
															onclick="regCate();"
														>
															추가
														</button>
													</div>

													<div class="mgt5">
														<select
															id="sCategory"
															name="sCategory"
															size="10"
															style="width: 100%; height: 150px"
															onclick="checkCate();"
															multiple="multiple"
														></select>
													</div>

													<div class="over_h mgt5">
														<div class="fl">
															<button
																type="button"
																class="btn_sec sm"
																onclick="delItem('sCategory');"
															>
																삭제
															</button>
														</div>
														<div class="fr">
															<button
																type="button"
																class="btn_sec sm"
																onclick="moveItem('UP', 'sCategory');"
															>
																▲
															</button>
															<button
																type="button"
																class="btn_sec sm"
																onclick="moveItem('DOWN', 'sCategory');"
															>
																▼
															</button>
														</div>
													</div>
												</td>
												<td style="border-bottom: none; vertical-align: top">
													<div class="over_h">
														<div class="fl">
															<button
																type="button"
																class="btn_sec sm"
																onclick="delItem('sCategoryGoods');"
															>
																상품삭제
															</button>
														</div>
														<div class="fr">
															<button
																type="button"
																class="btn_sec sm"
																onclick="openSelectGoods('sCategoryGoods');"
															>
																상품선택
															</button>
														</div>
													</div>

													<div class="mgt5">
														<select
															id="sCategoryGoods"
															name="sCategoryGoods"
															size="10"
															style="width: 100%; height: 150px"
															multiple="multiple"
														></select>
													</div>

													<div class="over_h mgt5">
														<div class="fr">
															<button
																type="button"
																class="btn_sec sm"
																onclick="moveItem('UP', 'sCategoryGoods');"
															>
																▲
															</button>
															<button
																type="button"
																class="btn_sec sm"
																onclick="moveItem('DOWN', 'sCategoryGoods');"
															>
																▼
															</button>
														</div>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
									<div
										class="noti_info topline"
										style="margin: 10px; margin-top: 0"
									>
										분류항목을 먼저 입력하신 후 항목에 맞는 상품을 추가해서
										등록하시기 바랍니다.
									</div>
								</td>
							</tr>
						</tbody>
						<!-- 분류이벤트 분류/상품관리 : 끝 -->

						<!-- 쿠폰이벤트 쿠폰관리 : 시작 -->
						<tbody id="bodyCoupon" style="display: none">
							<tr>
								<th>쿠폰</th>
								<td>
									<select
										id="sCoupon"
										name="sCoupon"
										size="10"
										style="width: 100%; height: 150px"
										multiple="multiple"
									></select>

									<div class="over_h mgt3">
										<div class="fl">
											<button
												type="button"
												class="btn_sec sm"
												onclick="delItem('sCoupon');"
											>
												삭제
											</button>
										</div>
										<div class="fr">
											<button
												type="button"
												class="btn_sec sm"
												onclick="openSelectCoupon('sCoupon');"
											>
												쿠폰선택
											</button>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
						<!-- 쿠폰이벤트 쿠폰관리 : 끝 -->

						<!-- 할인이벤트 상품관리 : 시작 -->
						<tbody id="bodyDiscount" style="display: none">
							<tr>
								<th rowspan="2">상품</th>
								<td>
									선택된 할인이벤트 상품의 할인율을&nbsp;
									<input type="hidden" name="discountBatchUnit" value="rate" />
									<input
										type="text"
										name="discountBatch"
										maxlength="20"
										class="text_input"
										style="width: 70px"
										onkeyup="toNumericDiscountBatch(this)"
										onblur="toNumericDiscountBatch(this)"
									/>
									<span id="txtDiscountBatchUnit">%</span>로&nbsp;
									<button
										type="button"
										class="btn_sec sm"
										onclick="setDiscountBatch()"
									>
										일괄적용
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<div class="tr">
										<button
											type="button"
											class="btn_sec sm"
											onclick="openSelectGoods('sDiscountGoods');"
										>
											상품 추가
										</button>
										<button
											type="button"
											class="btn_sec sm mgl5"
											onclick="delRow('tbDiscountGoodsSort-target');"
										>
											상품 삭제
										</button>
									</div>

									<div class="sortable_wrap">
										<table
											id="tb_discount_goods"
											width="100%"
											class="t_list mgb5 tb_goods"
											summary="할인 상품 목록입니다."
										>
											<colgroup>
												<col width="30" />
												<col width="30" />
												<col width="*" />
												<col width="14%" />
												<col width="14%" />
												<col width="100" />
												<col width="100" />
												<col width="25" />
											</colgroup>
											<thead>
												<tr>
													<th>번호</th>
													<th>
														<label
															><input
																type="checkbox"
																name="cbListAll"
																onclick="checkCbAll(this.form.cbList, this.checked)"
															/>전체선택</label
														>
													</th>
													<th>상품명</th>
													<th>판매가</th>
													<th>공급가</th>
													<th>할인율</th>
													<th>할인액</th>
													<th></th>
												</tr>
											</thead>
										</table>

										<ul
											id="tbDiscountGoodsSort-target"
											class="sortable_container ui-sortable"
										></ul>
									</div>
									<!-- //sortable_wrap -->
								</td>
							</tr>
						</tbody>
						<!-- 할인이벤트 상품관리 : 끝 -->

						<tbody>
							<tr>
								<th>진열수</th>
								<td>
									<div class="label_wrap">
										<label
											><input
												type="radio"
												name="displayCols"
												value="2"
												onclick="changeDisplayCols(this)"
											/>2열</label
										>
										<label
											><input
												type="radio"
												name="displayCols"
												value="3"
												checked=""
												onclick="changeDisplayCols(this)"
											/>3열</label
										>
										<label
											><input
												type="radio"
												name="displayCols"
												value="4"
												onclick="changeDisplayCols(this)"
											/>4열</label
										>
										<label
											><input
												type="radio"
												name="displayCols"
												value="5"
												onclick="changeDisplayCols(this)"
											/>5열</label
										>
									</div>
								</td>
							</tr>

							<tr>
								<th>웹 내용</th>
								<td style="padding: 0">
									<div>
										<textarea
											name="content"
											style="width: 100%; height: 250px; display: none"
											id="content-placeholder"
										></textarea
										><iframe
											id="__se2_frame_content-placeholder"
											name="__se2_frame_content-placeholder"
											frameborder="0"
											scrolling="no"
											style="width: 100%; height: 297px"
											src="http://javalocal.mallstore.co.kr/common/editor/se2/SmartEditor2Skin.html"
										></iframe>
									</div>
									<div class="noti_info" style="margin: 10px">
										내용은 필요하실 경우에만 작성하셔서 사용하시면 됩니다.
									</div>
									<!-- <script type="text/javascript">
										nhn.husky.EZCreator.createInIFrame({
											elPlaceHolder: 'content',
										});
										//]]>
									</script> -->
								</td>
							</tr>
							<tr>
								<th>모바일 내용</th>
								<td style="padding: 0">
									<div>
										<textarea
											name="contentweb"
											style="width: 100%; height: 250px; display: none"
											id="contentweb-placeholder"
										></textarea
										><iframe
											id="__se2_frame_contentweb-placeholder"
											name="__se2_frame_contentweb-placeholder"
											frameborder="0"
											scrolling="no"
											style="width: 100%; height: 297px"
											src="http://javalocal.mallstore.co.kr/common/editor/se2/SmartEditor2Skin.html"
										></iframe>
									</div>
									<div class="noti_info" style="margin: 10px">
										내용은 필요하실 경우에만 작성하셔서 사용하시면 됩니다.
									</div>
									<!-- <script type="text/javascript">
										nhn.husky.EZCreator.createInIFrame({
											elPlaceHolder: 'contentweb',
										});
										//]]>
									</script> -->
								</td>
							</tr>
						</tbody>
					</table>

					<div class="btn_wrap">
						<button type="button" class="btn_pri" onclick="validSubmit()">
							확인
						</button>
						<button type="button" class="btn_sec" onclick="cancel()">
							취소
						</button>
					</div>
				</section>
			</div>
		</form>

		<!-- <script type="text/javascript">
			checkMethod();
			//]]>
		</script> -->

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style></style>
