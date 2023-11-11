<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				상품목록<button
					id="addBmark"
					onclick="addBookmark('상품목록')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>상품관리</li>
				<li>상품관리</li>
				<li>상품목록</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>등록하신 상품들을 수정/관리 하실 수 있습니다.</li>
			<li>[상품영역]을 클릭하시면 영역별로 상품들을 보실 수 있습니다.</li>
			<li>
				서브메인 영역에 상품을 올릴시려면 상품관리에서 제일 마지막
				카테고리분류(소분류)를 클릭하시면 됩니다.
			</li>
			<li>
				[상품진열]버튼을 클릭하시면 상품을 숨길수 있으며 [진열안함]버튼을
				클릭하시면 상품을 전시하실수 있습니다.
			</li>
			<li>
				[상품영역]중 서브메인과 중간영역은 카테고리 지정시에만 가능합니다.
			</li>
		</ul>

		<!-- <script type="text/javascript" src="/jscript/SelectCategory.js"></script>
<script type="text/javascript" src="/jscript/calendar/class.js"></script>
<script type="text/javascript" src="/jscript/inperiod/class.js"></script>
<script type="text/javascript">
function validSearch(f) {
	for (var i=1; i<=CATEGORY_DEPTH; i++) {
		f['scate_'+i].disabled = true;
	}

	var saream = '';
	$(f.caream).each(function() {
		if ($(this).is(':checked')) {
			saream += (saream?',':'')+this.value;
		}
		this.disabled = true;
	});
	f.saream.value = saream;

	var sareas = '';
	$(f.careas).each(function() {
		if ($(this).is(':checked')) {
			sareas += (sareas?',':'')+this.value;
		}
		this.disabled = true;
	});
	f.sareas.value = sareas;

	if (!isDate(f.sdts.value)) f.sdts.value = "";
	if (!isDate(f.sdte.value)) f.sdte.value = "";
	
	if($("#sdts").val().stripspace() != '' && $("#sdte").val().stripspace() != ''){
		if (fn_betweenDate($("#sdts").val(), $("#sdte").val(),'d') < 0){
			alert('시작일자가 종료일 보다 늦습니다.\n다시 입력해 주세요.');
			$("#sdte").focus();
			return false;
		} 
	}
	
}
//]]>
</script> -->

		<!-- 검색 폼 : 시작 ###################################################################### -->

		<div class="main_content">
			<section class="cont_wrap">
				<form name="sFrm" method="get" onsubmit="return validSearch(this)">
					<input type="hidden" name="saream" value="" />
					<input type="hidden" name="sareas" value="" />

					<input type="hidden" name="psort" value="sort_desc" />
					<input type="hidden" name="psize" value="10" />

					<table cellspacing="0" cellpadding="0" width="100%" class="t_form">
						<caption>
							상품 검색 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>상품분류</th>
								<td>
									<input type="hidden" name="scate" value="" />
									<div style="float: left; margin-right: 5px">
										<select
											id="scate_1"
											name="scate_1"
											head="선택"
											depth="1"
											onchange="sc.get(this)"
										>
											<option value="">선택</option>
											<option value="1742">패션의류</option>
											<option value="1831">테마별</option>
											<option value="1837">시즌별</option>
											<option value="1704">화장품</option>
											<option value="1836">뷰티</option>
											<option value="1710">잡화</option>
											<option value="1846">대카테고리 테스트</option>
										</select>
									</div>
									<div style="float: left; margin-right: 5px">
										<select
											id="scate_2"
											name="scate_2"
											head="선택"
											depth="2"
											onchange="sc.get(this)"
										>
											<option value="">선택</option>
										</select>
									</div>
									<div style="float: left; margin-right: 5px">
										<select
											id="scate_3"
											name="scate_3"
											head="선택"
											depth="3"
											onchange="sc.get(this)"
										>
											<option value="">선택</option>
										</select>
									</div>

									<!-- <script type="text/javascript">
var sc = new SelectCategory();
sc.init(document.sFrm.scate);
//]]>
</script> -->
								</td>
							</tr>
							<tr>
								<th>상품영역</th>
								<td style="padding: 0">
									<table
										cellspacing="0"
										cellpadding="0"
										width="100%"
										class="t_form"
										style="border: none 0"
									>
										<colgroup>
											<col width="70" />
											<col width="*" />
										</colgroup>
										<tbody>
											<tr>
												<th>메인</th>
												<td style="font-size: 11px">
													<div class="label_wrap">
														<label
															><input
																type="checkbox"
																name="caream"
																value="32"
															/>추천상품</label
														>
														<label
															><input
																type="checkbox"
																name="caream"
																value="33"
															/>베스트</label
														>
														<label
															><input
																type="checkbox"
																name="caream"
																value="69"
															/>신상품</label
														>
													</div>
												</td>
											</tr>
											<tr>
												<th
													style="border: 0 none; border-right: solid 1px #ddd"
												>
													서브
												</th>
												<td style="font-size: 11px; border: 0 none">
													<div class="label_wrap">
														<label
															><input
																type="checkbox"
																name="careas"
																value="CMA"
															/>대분류 BEST SELLER</label
														>
														<label
															><input
																type="checkbox"
																name="careas"
																value="CMB"
															/>대분류 NEW ITEM</label
														>
														<label
															><input
																type="checkbox"
																name="careas"
																value="CMC01"
															/>대분류 MD CHOICE 01</label
														>
														<label
															><input
																type="checkbox"
																name="careas"
																value="CMC02"
															/>대분류 MD CHOICE 02</label
														>
														<label
															><input
																type="checkbox"
																name="careas"
																value="CMC03"
															/>대분류 MD CHOICE 03</label
														>
														<label
															><input
																type="checkbox"
																name="careas"
																value="CMC04"
															/>대분류 MD CHOICE 04</label
														>
														<label
															><input
																type="checkbox"
																name="careas"
																value="CMC05"
															/>대분류 MD CHOICE 05</label
														>
														<label
															><input
																type="checkbox"
																name="careas"
																value="CMC06"
															/>대분류 MD CHOICE 06</label
														>
														<label
															><input
																type="checkbox"
																name="careas"
																value="CMC07"
															/>대분류 MD CHOICE 07</label
														>
														<label
															><input
																type="checkbox"
																name="careas"
																value="CMC08"
															/>대분류 MD CHOICE 08</label
														>
														<label
															><input
																type="checkbox"
																name="careas"
																value="CMC09"
															/>대분류 MD CHOICE 09</label
														>
														<label
															><input
																type="checkbox"
																name="careas"
																value="CMC10"
															/>대분류 MD CHOICE 10</label
														>
														<label
															><input
																type="checkbox"
																name="careas"
																value="CSA"
															/>중분류 TOP BEST</label
														>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
							<tr>
								<th>그룹별</th>
								<td>
									<select id="sbrand" name="sbrand" onchange="change();">
										<option value="">브랜드</option>
										<option value="53">구찌</option>
										<option value="54">루이비통</option>
										<option value="38">발리</option>
										<option value="52">버버리</option>
										<option value="62">베르사체</option>
										<option value="59">보스 까르띠에</option>
										<option value="39">불가리</option>
										<option value="56">샤넬</option>
										<option value="58">아르마니</option>
										<option value="44">에르메스</option>
										<option value="64">입점사[브랜드]테스트</option>
										<option value="61">코치</option>
										<option value="9">크리스찬 디올</option>
										<option value="60">티파니</option>
										<option value="50">프라다</option>
									</select>
								</td>
							</tr>
							<tr>
								<th>상품등록일</th>
								<td>
									<div class="label_wrap">
										<div class="period_inp">
											<input
												type="text"
												id="sdts"
												name="sdts"
												value=""
												maxlength="10"
												class="text_input"
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'sdts', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
										~
										<div class="period_inp">
											<input
												type="text"
												id="sdte"
												name="sdte"
												value=""
												maxlength="10"
												class="text_input"
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'sdte', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
										<div class="period_btn">
											<button
												type="button"
												class="btn_sec sm active"
												onclick="inperiod.input('sdts', 'sdte')"
											>
												전체
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sdts', 'sdte', 't')"
											>
												오늘
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sdts', 'sdte', 't', -1)"
											>
												어제
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sdts', 'sdte', 'd', -3)"
											>
												3일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sdts', 'sdte', 'd', -7)"
											>
												7일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sdts', 'sdte', 'd', -10)"
											>
												10일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sdts', 'sdte', 'd', -20)"
											>
												20일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sdts', 'sdte', 'd', -30)"
											>
												30일간
											</button>
										</div>
										<span class="noti_info"
											>직접 입력시에는 “2023-01-01” 형식으로 입력해주세요.</span
										>
									</div>
								</td>
							</tr>

							<tr>
								<th>상품입점업체</th>
								<td>
									<select id="sdealer" name="sdealer">
										<option value="">선택하세요</option>
										<option value="-1">내친구네트웍스</option>
										<option value="148605">ncgn [mallstoremim]</option>
									</select>
								</td>
							</tr>

							<tr>
								<th>재고여부</th>
								<td>
									<div class="label_wrap">
										<label for="sstock_0"
											><input
												type="radio"
												id="sstock_0"
												name="sstock"
												value="0"
												checked=""
											/>전체상품</label
										>
										<label for="sstock_1"
											><input
												type="radio"
												id="sstock_1"
												name="sstock"
												value="1"
											/>재고 무제한</label
										>
										<label for="sstock_2"
											><input
												type="radio"
												id="sstock_2"
												name="sstock"
												value="2"
											/>재고있는 상품(무제한 제외)</label
										>
										<label for="sstock_3"
											><input
												type="radio"
												id="sstock_3"
												name="sstock"
												value="3"
											/>재고가 실제 0인 상품</label
										>
										<label for="sstock_4"
											><input
												type="radio"
												id="sstock_4"
												name="sstock"
												value="4"
											/>품절로 선택된 상품</label
										>
									</div>
								</td>
							</tr>
							<tr>
								<th>진열여부</th>
								<td>
									<div class="label_wrap">
										<label for="sdisplay_0"
											><input
												type="radio"
												id="sdisplay_0"
												name="sdisplay"
												value="0"
												checked=""
											/>전체상품</label
										>
										<label for="sdisplay_1"
											><input
												type="radio"
												id="sdisplay_1"
												name="sdisplay"
												value="1"
											/>진열되어 있는 상품</label
										>
										<label for="sdisplay_2"
											><input
												type="radio"
												id="sdisplay_2"
												name="sdisplay"
												value="2"
											/>진열 안되어있는 상품</label
										>
									</div>
								</td>
							</tr>
							<tr>
								<th>상품가격</th>
								<td>
									<input
										type="text"
										name="ssprice"
										value=""
										class="text_input"
										onkeyup="toCurrency(this)"
										onblur="toCurrency(this)"
									/>
									원 ~
									<input
										type="text"
										name="seprice"
										value=""
										class="text_input"
										onkeyup="toCurrency(this)"
										onblur="toCurrency(this)"
									/>
									원
								</td>
							</tr>
							<tr>
								<th>직접검색</th>
								<td>
									<div class="direct_search">
										<select id="skey" name="skey">
											<option value="name">상품명</option>
											<option value="code">상품코드</option>
										</select>
										<input
											type="text"
											name="sword"
											value=""
											class="text_input"
										/>
									</div>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="btn_wrap">
						<button type="submit" class="btn_pri">검색</button>
					</div>
				</form>
			</section>
			<!-- 검색 폼 : 끝 ###################################################################### -->
			<!-- <script type="text/javascript">
function changeList() {
	var f = document.Frm;
	var sf = document.sFrm;

	sf.psort.value = f.psort.options[f.psort.selectedIndex].value;
	sf.psize.value = f.psize.options[f.psize.selectedIndex].value;

	sf.target = "_self";
	sf.submit();
}

function edit(gno) {
	location.href = "goods_reg?gno="+gno+"&params=73636174653D305E73617265616D3D5E7361726561733D5E736272616E643D305E736474733D5E736474653D5E736465616C65723D305E7373746F636B3D305E73646973706C61793D305E737370726963653D5E736570726963653D5E736B65793D5E73776F72643D5E70736F72743D736F72745F646573635E7073697A653D31305E706167653D31";
}

function copy(gno) {
	location.href = "goods_reg?mode=COPY&gno="+gno+"&params=73636174653D305E73617265616D3D5E7361726561733D5E736272616E643D305E736474733D5E736474653D5E736465616C65723D305E7373746F636B3D305E73646973706C61793D305E737370726963653D5E736570726963653D5E736B65793D5E73776F72643D5E70736F72743D736F72745F646573635E7073697A653D31305E706167653D31";
}

function delList() {
	var f = document.Frm;
	var items = "";

	if (!f.cbList) return false;

	if (typeof(f.cbList.length) == "undefined") {
		if (f.cbList.checked) items = f.cbList.value;
	}
	else {
		for (var i=0; i<f.cbList.length; i++) {
			if (f.cbList[i].checked) {
				items += (items ? ',' : '')+f.cbList[i].value;
			}
		}
	}

	if (items == "") {
		alert("휴지통에 버리실 항목을 선택해 주세요.");
		return false;
	}

	var msg = "선택하신 상품은 고객이 주문한 상품일 경우 삭제 시\n"+
		"사용자 이용에 제한됩니다.\n"+
		"확인 후 삭제 바랍니다.\n\n"+
		"선택하신 상품을 휴지통으로 이동하시겠습니까?";
	if (confirm(msg)) {
		$('.wrap-loading').show();
		f.gno.value = items;
		f.action = "goods_trash_act";
		f.submit();
	}
}

function del(gno) {
	var f = document.Frm;

	if (confirm("선택하신 상품을 휴지통에 버리시겠습니까?")) {
		$('.wrap-loading').show();
		f.gno.value = gno;
		f.action = "goods_trash_act";
		f.submit();
	}
}

function changeDisplay(gno) {
	var f = document.Frm;
	f.mode.value = "CHANGEDISPLAY";
	f.gno.value = gno;

	$('.wrap-loading').show();
	f.action = "goods_list_act";
	f.submit();
}

function changeSoldOut(gno) {
	var f = document.Frm;
	f.mode.value = "CHANGESOLDOUT";
	f.gno.value = gno;

	$('.wrap-loading').show();
	f.action = "goods_list_act";
	f.submit();
}

function openGoodsHistory(gno) {
	$.laybox({
		type: 'iframe',
		source: 'goods_history_list_ifrm?gno='+gno
	});
}

function openDealerInfo(dealerNo) {
	openPopup("/nmanager/mim/dealer_detail_pop?no="+dealerNo, "DealerInfo", 800, 600, "scrollbars=yes");
}

function downExcel(isSelect) {
	var f = document.Frm;
	var fe = document.FrmExcel;
	var items = '';

	if (!isSelect) isSelect = false;

	if (!f.cbList) return false;

	if (isSelect) {
		$(f.cbList).each(function() {
			if (this.checked) items += (items ? ',' : '')+this.value;
		});

		if (items == '') {
			alert("상품을 선택해 주세요.");
			return false;
		}
	} else {
		$(f.cbList).each(function() {
			items += (items ? ',' : '')+this.value;
		});
	}
	fe.idx.value = items;
	fe.action = "goods_list_excel";
	fe.target = "frmProc";
	fe.submit();
}
//]]>
</script> -->

			<!-- <script type="text/javascript">
// 가격 계산시 절사단위
var priceRoundUnit =  '-1'.toNumeric();

function checkPriceRound(item, gno, caller) {
	var value = item.value.toNumeric();
	if (value != setRound(value, priceRoundUnit)) {
		item.value = formatComma(setRound(value, priceRoundUnit));
		calcPrice(gno, caller);
	}
}

// 가격입력 : 계산
function calcPrice(gno, caller) {
	var f = document.Frm;

	if (typeof caller == "undefined") caller = '';

	var $priceSplit = $('input[name="priceSplit_'+gno+'"]');
	var $cmsType = $('input[name="cmsType_'+gno+'"]');
	var $margin = $('input[name="margin_'+gno+'"]');
	var $price = $('input[name="price_'+gno+'"]');
	var $originalPrice = $('input[name="originalPrice_'+gno+'"]');

	var price = $price.val().toNumeric();
	var margin = $margin.val().toNumeric();
	var originalPrice = $originalPrice.val().toNumeric();

	if ($priceSplit.val() == '100') { // 공급가 기준 경우
		if ($cmsType.val() != 'GOS') { // 카테고리 또는 입점업체 수수료 설정
			// 판매가를 입력한 경우
			if (caller == 'price') {
				originalPrice = setRound(price - (price * margin / 100), priceRoundUnit);
				$originalPrice.val(formatComma(originalPrice));
			}
			// 공급가를 적었다면
			else if (margin == 100) {
				$price.val(0);
				$originalPrice.val(0);
			}
			else {
				price = setRound(originalPrice / (100 - margin) * 100, priceRoundUnit);
				$price.val(formatComma(price));
			}
		}
		else { // 상품별 수수료 설정
			margin = (price==0 ? 0 : 100 - (originalPrice / price * 100));
			$margin.val(setRound(margin, 2));
		}
	}
	else { // 수수료 기준 경우
		originalPrice = setRound(price * (100 - margin) / 100, priceRoundUnit);
		$originalPrice.val(formatComma(originalPrice));
	}
}

function validSave(gno) {
	var f = document.Frm;

	var $quantity = $('input[name="quantity_'+gno+'"]');
	
	var price = $('input[name="price_'+gno+'"]').val();
	var margin = $('input[name="margin_'+gno+'"]').val();
	var originalPrice = $('input[name="originalPrice_'+gno+'"]').val();
	var marketPrice = $('input[name="marketPrice_'+gno+'"]').val();
	var quantity = ($quantity.length>0 ? $quantity.val() : 0);

	if (quantity >= '1000000'.toNumeric()) {
		alert("재고 수량은 1,000,000 미만으로 설정이 가능합니다.");
		$quantity.focus();
		return false;
	}

	if (confirm("현재의 설정으로 저장하시겠습니까?")) {
		f.mode.value = "LISTSAVE";
		f.gno.value = gno;
		f.price.value = price;
		f.margin.value = margin;
		f.originalPrice.value = originalPrice;
		f.marketPrice.value = marketPrice;
		f.quantity.value = quantity;
		f.action = "goods_list_act";
		f.submit();
	}
}
//]]>
</script> -->

			<form name="FrmExcel" method="post">
				<input type="hidden" name="" value="" />

				<input type="hidden" name="idx" />
			</form>

			<form name="Frm" method="post">
				<input type="hidden" name="mode" />
				<input type="hidden" name="gno" />
				<input type="hidden" name="cate" value="0" />

				<input type="hidden" name="price" />
				<input type="hidden" name="margin" />
				<input type="hidden" name="originalPrice" />
				<input type="hidden" name="marketPrice" />
				<input type="hidden" name="quantity" />

				<input
					type="hidden"
					name="params"
					value="73636174653D305E73617265616D3D5E7361726561733D5E736272616E643D305E736474733D5E736474653D5E736465616C65723D305E7373746F636B3D305E73646973706C61793D305E737370726963653D5E736570726963653D5E736B65793D5E73776F72643D5E70736F72743D736F72745F646573635E7073697A653D31305E706167653D31"
				/>

				<section class="cont_wrap mgt40">
					<div class="section_head">
						<h4 class="total">
							총 <strong>23</strong>개의 상품이 검색되었습니다.
						</h4>
						<div>
							<span
								><select id="psize" name="psize" onchange="changeList()">
									<option value="10" selected="">10줄씩보기</option>
									<option value="20">20줄씩보기</option>
									<option value="30">30줄씩보기</option>
									<option value="50">50줄씩보기</option>
									<option value="100">100줄씩보기</option>
									<option value="500">500줄씩보기</option>
								</select></span
							>
							<span class="mgl5"
								><select id="psort" name="psort" onchange="changeList();">
									<option value="sort_desc" selected="">기본정렬</option>
									<option value="name_asc">상품명순</option>
									<option value="no_desc">신상품순</option>
									<option value="hits_desc">인기도순</option>
									<option value="price_desc">고가격순</option>
									<option value="price_asc">저가격순</option>
								</select></span
							>
						</div>
					</div>

					<table cellpadding="0" cellspacing="0" width="100%" class="t_list">
						<caption>
							상품 리스트
						</caption>
						<colgroup>
							<col width="40" />
							<col width="120" />
							<col width="120" />
							<col width="*" />
							<col width="100" />
							<col width="100" />
							<col width="200" />
							<col width="140" />
							<col width="70" />
						</colgroup>
						<thead>
							<tr>
								<th>
									<label
										><input
											type="checkbox"
											name="cbListAll"
											onclick="checkCbAll(this.form.cbList, this.checked)"
										/>전체선택</label
									>
								</th>
								<th>고유번호</th>
								<th>상품코드</th>
								<th>상품정보</th>
								<th>전시상태</th>
								<th>판매상태</th>
								<th>가격설정</th>
								<th>기타</th>
								<th>관리</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="10845"
										/>선택</label
									>
								</td>
								<td>
									<div><strong>10845</strong></div>
									<div class="mgt5"></div>
									<div class="mgt5"></div>
								</td>
								<td>G0000010845</td>
								<td>
									<div class="gbox tl">
										<img
											src="//bootdev.mallstore.co.kr/data/base/goods/small/20230808/553ce0d88ecf4392ac6aa25b05e66397.jpg"
											onerror="this.src='//bootdev.mallstore.co.kr/imgs/goods/no.gif'"
											class="photo"
										/>
										<div class="mgt3">
											<a href="../../goods/detail?gno=10845" target="_blank"
												><strong>모던 스타일_sample 001</strong></a
											>
										</div>
										<div class="category mgt10"></div>

										내친구네트웍스
									</div>

									<dl class="recom">
										<dt>메인</dt>
										<dd>신상품</dd>
									</dl>

									<div class="icons">
										<img
											src="//bootdev.mallstore.co.kr/data/base/icon/ico_pro_best.gif"
											alt=""
										/>
									</div>
								</td>
								<td>
									<span
										><strong>진열중</strong
										><button
											type="button"
											onclick="changeDisplay(10845)"
											class="btn_sec sm mgt5"
										>
											상태변경
										</button></span
									>
								</td>
								<td>
									<span
										><strong>판매중</strong
										><button
											type="button"
											onclick="changeSoldOut(10845)"
											class="btn_sec sm mgt5"
										>
											상태변경
										</button></span
									>
								</td>
								<td>
									<input type="hidden" name="priceSplit_10845" value="100" />
									<input type="hidden" name="cmsType_10845" value="CTG" />
									<input type="hidden" name="margin_10845" value="10.0" />
									<div class="goodsInfo">
										<dl>
											<dt>판매가</dt>
											<dd>
												<input
													type="text"
													name="price_10845"
													value="200,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this); calcPrice(10845, 'price');"
													onblur="checkPriceRound(this, 10845, 'price')"
												/>
												원
											</dd>
										</dl>
										<dl>
											<dt>시중가</dt>
											<dd>
												<input
													type="text"
													name="marketPrice_10845"
													value="250,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this)"
												/>
												원
											</dd>
										</dl>
										<dl>
											<dt>공급가</dt>
											<dd>
												<input
													type="text"
													name="originalPrice_10845"
													value="180,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this); calcPrice(10845, this);"
													onblur="checkPriceRound(this, 10845)"
												/>
												원
											</dd>
										</dl>
									</div>
									<button
										type="button"
										class="btn_sec sm mgt5"
										style="width: 100%; height: 32px"
										onclick="validSave(10845)"
									>
										저장
									</button>
								</td>
								<td>
									<div class="goodsInfo">
										<dl>
											<dt>조회수</dt>
											<dd>15 회</dd>
										</dl>
										<dl>
											<dt>판매수량</dt>
											<dd>0 개</dd>
										</dl>
										<dl>
											<dt>재고</dt>
											<dd>무제한</dd>
										</dl>
									</div>
								</td>
								<td>
									<button
										type="button"
										class="btn_sec sm"
										onclick="openGoodsHistory(10845)"
									>
										이력
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="copy(10845)"
									>
										복사
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="edit(10845)"
									>
										수정
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="del(10845)"
									>
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="10867"
										/>선택</label
									>
								</td>
								<td>
									<div><strong>10867</strong></div>
									<div class="mgt5"></div>
									<div class="mgt5"></div>
								</td>
								<td>G0000010867</td>
								<td>
									<div class="gbox tl">
										<img
											src="//bootdev.mallstore.co.kr/data/base/goods/small/20230905/35e28602abba4e85b1236d9c353fbc5e.jpg"
											onerror="this.src='//bootdev.mallstore.co.kr/imgs/goods/no.gif'"
											class="photo"
										/>
										<div class="mgt3">
											<a href="../../goods/detail?gno=10867" target="_blank"
												><strong>입점업체 상품 테스트_수수료적용 02</strong></a
											>
										</div>
										<div class="category mgt10"></div>

										<div class="dealer">
											<div class="dealer">
												<a
													href="javascript:;"
													onclick="openDealerInfo(148605); return false;"
													><strong>ncgn</strong>(010-5458-2158)</a
												>
											</div>
										</div>

										<div class="icons">
											<img
												src="//bootdev.mallstore.co.kr/data/base/icon/ico_pro_sale.gif"
												alt=""
											/>
										</div>
									</div>
								</td>
								<td>
									<span
										><strong>진열중</strong
										><button
											type="button"
											onclick="changeDisplay(10867)"
											class="btn_sec sm mgt5"
										>
											상태변경
										</button></span
									>
								</td>
								<td>
									<span
										><strong>판매중</strong
										><button
											type="button"
											onclick="changeSoldOut(10867)"
											class="btn_sec sm mgt5"
										>
											상태변경
										</button></span
									>
								</td>
								<td>
									<input type="hidden" name="priceSplit_10867" value="200" />
									<input type="hidden" name="cmsType_10867" value="GOS" />
									<input type="hidden" name="margin_10867" value="30.0" />
									<div class="goodsInfo">
										<dl>
											<dt>판매가</dt>
											<dd>
												<input
													type="text"
													name="price_10867"
													value="350,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this); calcPrice(10867, 'price');"
													onblur="checkPriceRound(this, 10867, 'price')"
												/>
												원
											</dd>
										</dl>
										<dl>
											<dt>시중가</dt>
											<dd>
												<input
													type="text"
													name="marketPrice_10867"
													value="500,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this)"
												/>
												원
											</dd>
										</dl>
										<dl>
											<dt>공급가</dt>
											<dd>
												<input
													type="text"
													name="originalPrice_10867"
													value="245,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this); calcPrice(10867, this);"
													onblur="checkPriceRound(this, 10867)"
													disabled=""
												/>
												원
											</dd>
										</dl>
									</div>
									<button
										type="button"
										class="btn_sec sm mgt5"
										style="width: 100%; height: 32px"
										onclick="validSave(10867)"
									>
										저장
									</button>
								</td>
								<td>
									<div class="goodsInfo">
										<dl>
											<dt>조회수</dt>
											<dd>3 회</dd>
										</dl>
										<dl>
											<dt>판매수량</dt>
											<dd>0 개</dd>
										</dl>
										<dl>
											<dt>재고</dt>
											<dd>무제한</dd>
										</dl>
									</div>
								</td>
								<td>
									<button
										type="button"
										class="btn_sec sm"
										onclick="openGoodsHistory(10867)"
									>
										이력
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="copy(10867)"
									>
										복사
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="edit(10867)"
									>
										수정
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="del(10867)"
									>
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="10866"
										/>선택</label
									>
								</td>
								<td>
									<div><strong>10866</strong></div>
									<div class="mgt5"></div>
									<div class="mgt5"></div>
								</td>
								<td>G0000010866</td>
								<td>
									<div class="gbox tl">
										<img
											src="//bootdev.mallstore.co.kr/data/base/goods/small/20230905/36b045f70026438a8fdacf8727e66d14.jpg"
											onerror="this.src='//bootdev.mallstore.co.kr/imgs/goods/no.gif'"
											class="photo"
										/>
										<div class="mgt3">
											<a href="../../goods/detail?gno=10866" target="_blank"
												><strong>입점업체 상품 테스트_수수료적용 01</strong></a
											>
										</div>
										<div class="category mgt10"></div>

										<div class="dealer">
											<div class="dealer">
												<a
													href="javascript:;"
													onclick="openDealerInfo(148605); return false;"
													><strong>ncgn</strong>(010-5458-2158)</a
												>
											</div>
										</div>
									</div>
								</td>
								<td>
									<span
										><strong>진열중</strong
										><button
											type="button"
											onclick="changeDisplay(10866)"
											class="btn_sec sm mgt5"
										>
											상태변경
										</button></span
									>
								</td>
								<td>
									<span
										><strong>판매중</strong
										><button
											type="button"
											onclick="changeSoldOut(10866)"
											class="btn_sec sm mgt5"
										>
											상태변경
										</button></span
									>
								</td>
								<td>
									<input type="hidden" name="priceSplit_10866" value="200" />
									<input type="hidden" name="cmsType_10866" value="GOS" />
									<input type="hidden" name="margin_10866" value="10.0" />
									<div class="goodsInfo">
										<dl>
											<dt>판매가</dt>
											<dd>
												<input
													type="text"
													name="price_10866"
													value="400,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this); calcPrice(10866, 'price');"
													onblur="checkPriceRound(this, 10866, 'price')"
												/>
												원
											</dd>
										</dl>
										<dl>
											<dt>시중가</dt>
											<dd>
												<input
													type="text"
													name="marketPrice_10866"
													value="500,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this)"
												/>
												원
											</dd>
										</dl>
										<dl>
											<dt>공급가</dt>
											<dd>
												<input
													type="text"
													name="originalPrice_10866"
													value="360,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this); calcPrice(10866, this);"
													onblur="checkPriceRound(this, 10866)"
													disabled=""
												/>
												원
											</dd>
										</dl>
									</div>
									<button
										type="button"
										class="btn_sec sm mgt5"
										style="width: 100%; height: 32px"
										onclick="validSave(10866)"
									>
										저장
									</button>
								</td>
								<td>
									<div class="goodsInfo">
										<dl>
											<dt>조회수</dt>
											<dd>6 회</dd>
										</dl>
										<dl>
											<dt>판매수량</dt>
											<dd>0 개</dd>
										</dl>
										<dl>
											<dt>재고</dt>
											<dd>무제한</dd>
										</dl>
									</div>
								</td>
								<td>
									<button
										type="button"
										class="btn_sec sm"
										onclick="openGoodsHistory(10866)"
									>
										이력
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="copy(10866)"
									>
										복사
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="edit(10866)"
									>
										수정
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="del(10866)"
									>
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="10864"
										/>선택</label
									>
								</td>
								<td>
									<div><strong>10864</strong></div>
									<div class="mgt5"></div>
									<div class="mgt5"></div>
								</td>
								<td>G0000010864</td>
								<td>
									<div class="gbox tl">
										<img
											src="//bootdev.mallstore.co.kr/data/base/goods/small/20230809/10d64f880d5d47caa1422a85637b0996.jpg"
											onerror="this.src='//bootdev.mallstore.co.kr/imgs/goods/no.gif'"
											class="photo"
										/>
										<div class="mgt3">
											<a href="../../goods/detail?gno=10864" target="_blank"
												><strong>모던 스타일_sample 019</strong></a
											>
										</div>
										<div class="category mgt10"></div>

										내친구네트웍스
									</div>

									<div class="icons">
										<img
											src="//bootdev.mallstore.co.kr/data/base/icon/ico_pro_sale.gif"
											alt=""
										/>
										<img
											src="//bootdev.mallstore.co.kr/data/base/icon/ico_pro_best.gif"
											alt=""
										/>
									</div>
								</td>
								<td>
									<span
										><strong>진열중</strong
										><button
											type="button"
											onclick="changeDisplay(10864)"
											class="btn_sec sm mgt5"
										>
											상태변경
										</button></span
									>
								</td>
								<td>
									<span
										><strong>판매중</strong
										><button
											type="button"
											onclick="changeSoldOut(10864)"
											class="btn_sec sm mgt5"
										>
											상태변경
										</button></span
									>
								</td>
								<td>
									<input type="hidden" name="priceSplit_10864" value="100" />
									<input type="hidden" name="cmsType_10864" value="CTG" />
									<input type="hidden" name="margin_10864" value="5.0" />
									<div class="goodsInfo">
										<dl>
											<dt>판매가</dt>
											<dd>
												<input
													type="text"
													name="price_10864"
													value="150,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this); calcPrice(10864, 'price');"
													onblur="checkPriceRound(this, 10864, 'price')"
												/>
												원
											</dd>
										</dl>
										<dl>
											<dt>시중가</dt>
											<dd>
												<input
													type="text"
													name="marketPrice_10864"
													value="200,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this)"
												/>
												원
											</dd>
										</dl>
										<dl>
											<dt>공급가</dt>
											<dd>
												<input
													type="text"
													name="originalPrice_10864"
													value="142,500"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this); calcPrice(10864, this);"
													onblur="checkPriceRound(this, 10864)"
												/>
												원
											</dd>
										</dl>
									</div>
									<button
										type="button"
										class="btn_sec sm mgt5"
										style="width: 100%; height: 32px"
										onclick="validSave(10864)"
									>
										저장
									</button>
								</td>
								<td>
									<div class="goodsInfo">
										<dl>
											<dt>조회수</dt>
											<dd>9 회</dd>
										</dl>
										<dl>
											<dt>판매수량</dt>
											<dd>0 개</dd>
										</dl>
										<dl>
											<dt>재고</dt>
											<dd>
												<input
													type="text"
													name="quantity_10864"
													value="99"
													maxlength="7"
													class="text_input"
													style="width: 70%"
													onkeyup="toCurrency(this)"
												/>
												개
											</dd>
										</dl>
									</div>
								</td>
								<td>
									<button
										type="button"
										class="btn_sec sm"
										onclick="openGoodsHistory(10864)"
									>
										이력
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="copy(10864)"
									>
										복사
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="edit(10864)"
									>
										수정
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="del(10864)"
									>
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="10863"
										/>선택</label
									>
								</td>
								<td>
									<div><strong>10863</strong></div>
									<div class="mgt5"></div>
									<div class="mgt5"></div>
								</td>
								<td>G0000010863</td>
								<td>
									<div class="gbox tl">
										<img
											src="//bootdev.mallstore.co.kr/data/base/goods/small/20230808/1d603c925aba4d04bca4d05533e0798c.jpg"
											onerror="this.src='//bootdev.mallstore.co.kr/imgs/goods/no.gif'"
											class="photo"
										/>
										<div class="mgt3">
											<a href="../../goods/detail?gno=10863" target="_blank"
												><strong>모던 스타일_sample 019</strong></a
											>
										</div>
										<div class="category mgt10"></div>

										내친구네트웍스
									</div>

									<div class="icons">
										<img
											src="//bootdev.mallstore.co.kr/data/base/icon/ico_pro_sale.gif"
											alt=""
										/>
										<img
											src="//bootdev.mallstore.co.kr/data/base/icon/ico_pro_best.gif"
											alt=""
										/>
									</div>
								</td>
								<td>
									<span
										><strong>진열중</strong
										><button
											type="button"
											onclick="changeDisplay(10863)"
											class="btn_sec sm mgt5"
										>
											상태변경
										</button></span
									>
								</td>
								<td>
									<span
										><strong>판매중</strong
										><button
											type="button"
											onclick="changeSoldOut(10863)"
											class="btn_sec sm mgt5"
										>
											상태변경
										</button></span
									>
								</td>
								<td>
									<input type="hidden" name="priceSplit_10863" value="100" />
									<input type="hidden" name="cmsType_10863" value="CTG" />
									<input type="hidden" name="margin_10863" value="5.0" />
									<div class="goodsInfo">
										<dl>
											<dt>판매가</dt>
											<dd>
												<input
													type="text"
													name="price_10863"
													value="150,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this); calcPrice(10863, 'price');"
													onblur="checkPriceRound(this, 10863, 'price')"
												/>
												원
											</dd>
										</dl>
										<dl>
											<dt>시중가</dt>
											<dd>
												<input
													type="text"
													name="marketPrice_10863"
													value="200,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this)"
												/>
												원
											</dd>
										</dl>
										<dl>
											<dt>공급가</dt>
											<dd>
												<input
													type="text"
													name="originalPrice_10863"
													value="142,500"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this); calcPrice(10863, this);"
													onblur="checkPriceRound(this, 10863)"
												/>
												원
											</dd>
										</dl>
									</div>
									<button
										type="button"
										class="btn_sec sm mgt5"
										style="width: 100%; height: 32px"
										onclick="validSave(10863)"
									>
										저장
									</button>
								</td>
								<td>
									<div class="goodsInfo">
										<dl>
											<dt>조회수</dt>
											<dd>5 회</dd>
										</dl>
										<dl>
											<dt>판매수량</dt>
											<dd>0 개</dd>
										</dl>
										<dl>
											<dt>재고</dt>
											<dd>
												<input
													type="text"
													name="quantity_10863"
													value="100"
													maxlength="7"
													class="text_input"
													style="width: 70%"
													onkeyup="toCurrency(this)"
												/>
												개
											</dd>
										</dl>
									</div>
								</td>
								<td>
									<button
										type="button"
										class="btn_sec sm"
										onclick="openGoodsHistory(10863)"
									>
										이력
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="copy(10863)"
									>
										복사
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="edit(10863)"
									>
										수정
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="del(10863)"
									>
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="10862"
										/>선택</label
									>
								</td>
								<td>
									<div><strong>10862</strong></div>
									<div class="mgt5"></div>
									<div class="mgt5"></div>
								</td>
								<td>G0000010862</td>
								<td>
									<div class="gbox tl">
										<img
											src="//bootdev.mallstore.co.kr/data/base/goods/small/20230808/a7e635bdf9714b03924360d6e7fa9662.jpg"
											onerror="this.src='//bootdev.mallstore.co.kr/imgs/goods/no.gif'"
											class="photo"
										/>
										<div class="mgt3">
											<a href="../../goods/detail?gno=10862" target="_blank"
												><strong>모던 스타일_sample 018</strong></a
											>
										</div>
										<div class="category mgt10"></div>

										내친구네트웍스
									</div>

									<div class="icons">
										<img
											src="//bootdev.mallstore.co.kr/data/base/icon/ico_pro_sale.gif"
											alt=""
										/>
										<img
											src="//bootdev.mallstore.co.kr/data/base/icon/ico_pro_best.gif"
											alt=""
										/>
									</div>
								</td>
								<td>
									<span
										><strong>진열중</strong
										><button
											type="button"
											onclick="changeDisplay(10862)"
											class="btn_sec sm mgt5"
										>
											상태변경
										</button></span
									>
								</td>
								<td>
									<span
										><strong>판매중</strong
										><button
											type="button"
											onclick="changeSoldOut(10862)"
											class="btn_sec sm mgt5"
										>
											상태변경
										</button></span
									>
								</td>
								<td>
									<input type="hidden" name="priceSplit_10862" value="100" />
									<input type="hidden" name="cmsType_10862" value="CTG" />
									<input type="hidden" name="margin_10862" value="5.0" />
									<div class="goodsInfo">
										<dl>
											<dt>판매가</dt>
											<dd>
												<input
													type="text"
													name="price_10862"
													value="150,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this); calcPrice(10862, 'price');"
													onblur="checkPriceRound(this, 10862, 'price')"
												/>
												원
											</dd>
										</dl>
										<dl>
											<dt>시중가</dt>
											<dd>
												<input
													type="text"
													name="marketPrice_10862"
													value="200,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this)"
												/>
												원
											</dd>
										</dl>
										<dl>
											<dt>공급가</dt>
											<dd>
												<input
													type="text"
													name="originalPrice_10862"
													value="142,500"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this); calcPrice(10862, this);"
													onblur="checkPriceRound(this, 10862)"
												/>
												원
											</dd>
										</dl>
									</div>
									<button
										type="button"
										class="btn_sec sm mgt5"
										style="width: 100%; height: 32px"
										onclick="validSave(10862)"
									>
										저장
									</button>
								</td>
								<td>
									<div class="goodsInfo">
										<dl>
											<dt>조회수</dt>
											<dd>4 회</dd>
										</dl>
										<dl>
											<dt>판매수량</dt>
											<dd>5 개</dd>
										</dl>
										<dl>
											<dt>재고</dt>
											<dd>
												<input
													type="text"
													name="quantity_10862"
													value="99"
													maxlength="7"
													class="text_input"
													style="width: 70%"
													onkeyup="toCurrency(this)"
												/>
												개
											</dd>
										</dl>
									</div>
								</td>
								<td>
									<button
										type="button"
										class="btn_sec sm"
										onclick="openGoodsHistory(10862)"
									>
										이력
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="copy(10862)"
									>
										복사
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="edit(10862)"
									>
										수정
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="del(10862)"
									>
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="10861"
										/>선택</label
									>
								</td>
								<td>
									<div><strong>10861</strong></div>
									<div class="mgt5"></div>
									<div class="mgt5"></div>
								</td>
								<td>G0000010861</td>
								<td>
									<div class="gbox tl">
										<img
											src="//bootdev.mallstore.co.kr/data/base/goods/small/20230808/a5e52528fef14d438c3863e74ce93ef3.jpg"
											onerror="this.src='//bootdev.mallstore.co.kr/imgs/goods/no.gif'"
											class="photo"
										/>
										<div class="mgt3">
											<a href="../../goods/detail?gno=10861" target="_blank"
												><strong>모던 스타일_sample 017</strong></a
											>
										</div>
										<div class="category mgt10"></div>

										내친구네트웍스
									</div>

									<div class="icons">
										<img
											src="//bootdev.mallstore.co.kr/data/base/icon/ico_pro_sale.gif"
											alt=""
										/>
										<img
											src="//bootdev.mallstore.co.kr/data/base/icon/ico_pro_best.gif"
											alt=""
										/>
									</div>
								</td>
								<td>
									<span
										><strong>진열중</strong
										><button
											type="button"
											onclick="changeDisplay(10861)"
											class="btn_sec sm mgt5"
										>
											상태변경
										</button></span
									>
								</td>
								<td>
									<span
										><strong>판매중</strong
										><button
											type="button"
											onclick="changeSoldOut(10861)"
											class="btn_sec sm mgt5"
										>
											상태변경
										</button></span
									>
								</td>
								<td>
									<input type="hidden" name="priceSplit_10861" value="100" />
									<input type="hidden" name="cmsType_10861" value="CTG" />
									<input type="hidden" name="margin_10861" value="5.0" />
									<div class="goodsInfo">
										<dl>
											<dt>판매가</dt>
											<dd>
												<input
													type="text"
													name="price_10861"
													value="150,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this); calcPrice(10861, 'price');"
													onblur="checkPriceRound(this, 10861, 'price')"
												/>
												원
											</dd>
										</dl>
										<dl>
											<dt>시중가</dt>
											<dd>
												<input
													type="text"
													name="marketPrice_10861"
													value="200,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this)"
												/>
												원
											</dd>
										</dl>
										<dl>
											<dt>공급가</dt>
											<dd>
												<input
													type="text"
													name="originalPrice_10861"
													value="142,500"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this); calcPrice(10861, this);"
													onblur="checkPriceRound(this, 10861)"
												/>
												원
											</dd>
										</dl>
									</div>
									<button
										type="button"
										class="btn_sec sm mgt5"
										style="width: 100%; height: 32px"
										onclick="validSave(10861)"
									>
										저장
									</button>
								</td>
								<td>
									<div class="goodsInfo">
										<dl>
											<dt>조회수</dt>
											<dd>3 회</dd>
										</dl>
										<dl>
											<dt>판매수량</dt>
											<dd>0 개</dd>
										</dl>
										<dl>
											<dt>재고</dt>
											<dd>
												<input
													type="text"
													name="quantity_10861"
													value="100"
													maxlength="7"
													class="text_input"
													style="width: 70%"
													onkeyup="toCurrency(this)"
												/>
												개
											</dd>
										</dl>
									</div>
								</td>
								<td>
									<button
										type="button"
										class="btn_sec sm"
										onclick="openGoodsHistory(10861)"
									>
										이력
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="copy(10861)"
									>
										복사
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="edit(10861)"
									>
										수정
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="del(10861)"
									>
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="10860"
										/>선택</label
									>
								</td>
								<td>
									<div><strong>10860</strong></div>
									<div class="mgt5"></div>
									<div class="mgt5"></div>
								</td>
								<td>G0000010860</td>
								<td>
									<div class="gbox tl">
										<img
											src="//bootdev.mallstore.co.kr/data/base/goods/small/20230808/9f53a5d61dc34db49e76af27fc0389dc.jpg"
											onerror="this.src='//bootdev.mallstore.co.kr/imgs/goods/no.gif'"
											class="photo"
										/>
										<div class="mgt3">
											<a href="../../goods/detail?gno=10860" target="_blank"
												><strong>모던 스타일_sample 016</strong></a
											>
										</div>
										<div class="category mgt10"></div>

										내친구네트웍스
									</div>

									<div class="icons">
										<img
											src="//bootdev.mallstore.co.kr/data/base/icon/ico_pro_sale.gif"
											alt=""
										/>
										<img
											src="//bootdev.mallstore.co.kr/data/base/icon/ico_pro_best.gif"
											alt=""
										/>
									</div>
								</td>
								<td>
									<span
										><strong>진열중</strong
										><button
											type="button"
											onclick="changeDisplay(10860)"
											class="btn_sec sm mgt5"
										>
											상태변경
										</button></span
									>
								</td>
								<td>
									<span
										><strong>판매중</strong
										><button
											type="button"
											onclick="changeSoldOut(10860)"
											class="btn_sec sm mgt5"
										>
											상태변경
										</button></span
									>
								</td>
								<td>
									<input type="hidden" name="priceSplit_10860" value="100" />
									<input type="hidden" name="cmsType_10860" value="CTG" />
									<input type="hidden" name="margin_10860" value="0.0" />
									<div class="goodsInfo">
										<dl>
											<dt>판매가</dt>
											<dd>
												<input
													type="text"
													name="price_10860"
													value="150,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this); calcPrice(10860, 'price');"
													onblur="checkPriceRound(this, 10860, 'price')"
												/>
												원
											</dd>
										</dl>
										<dl>
											<dt>시중가</dt>
											<dd>
												<input
													type="text"
													name="marketPrice_10860"
													value="200,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this)"
												/>
												원
											</dd>
										</dl>
										<dl>
											<dt>공급가</dt>
											<dd>
												<input
													type="text"
													name="originalPrice_10860"
													value="150,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this); calcPrice(10860, this);"
													onblur="checkPriceRound(this, 10860)"
												/>
												원
											</dd>
										</dl>
									</div>
									<button
										type="button"
										class="btn_sec sm mgt5"
										style="width: 100%; height: 32px"
										onclick="validSave(10860)"
									>
										저장
									</button>
								</td>
								<td>
									<div class="goodsInfo">
										<dl>
											<dt>조회수</dt>
											<dd>6 회</dd>
										</dl>
										<dl>
											<dt>판매수량</dt>
											<dd>0 개</dd>
										</dl>
										<dl>
											<dt>재고</dt>
											<dd>
												<input
													type="text"
													name="quantity_10860"
													value="99"
													maxlength="7"
													class="text_input"
													style="width: 70%"
													onkeyup="toCurrency(this)"
												/>
												개
											</dd>
										</dl>
									</div>
								</td>
								<td>
									<button
										type="button"
										class="btn_sec sm"
										onclick="openGoodsHistory(10860)"
									>
										이력
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="copy(10860)"
									>
										복사
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="edit(10860)"
									>
										수정
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="del(10860)"
									>
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="10859"
										/>선택</label
									>
								</td>
								<td>
									<div><strong>10859</strong></div>
									<div class="mgt5"></div>
									<div class="mgt5"></div>
								</td>
								<td>G0000010859</td>
								<td>
									<div class="gbox tl">
										<img
											src="//bootdev.mallstore.co.kr/data/base/goods/small/20230808/ad78e04413304ff99ec0e249545054d8.jpg"
											onerror="this.src='//bootdev.mallstore.co.kr/imgs/goods/no.gif'"
											class="photo"
										/>
										<div class="mgt3">
											<a href="../../goods/detail?gno=10859" target="_blank"
												><strong>모던 스타일_sample 015</strong></a
											>
										</div>
										<div class="category mgt10"></div>

										내친구네트웍스
									</div>
								</td>
								<td>
									<span
										><strong>진열중</strong
										><button
											type="button"
											onclick="changeDisplay(10859)"
											class="btn_sec sm mgt5"
										>
											상태변경
										</button></span
									>
								</td>
								<td>
									<span
										><strong>판매중</strong
										><button
											type="button"
											onclick="changeSoldOut(10859)"
											class="btn_sec sm mgt5"
										>
											상태변경
										</button></span
									>
								</td>
								<td>
									<input type="hidden" name="priceSplit_10859" value="100" />
									<input type="hidden" name="cmsType_10859" value="CTG" />
									<input type="hidden" name="margin_10859" value="0.0" />
									<div class="goodsInfo">
										<dl>
											<dt>판매가</dt>
											<dd>
												<input
													type="text"
													name="price_10859"
													value="270,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this); calcPrice(10859, 'price');"
													onblur="checkPriceRound(this, 10859, 'price')"
												/>
												원
											</dd>
										</dl>
										<dl>
											<dt>시중가</dt>
											<dd>
												<input
													type="text"
													name="marketPrice_10859"
													value="300,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this)"
												/>
												원
											</dd>
										</dl>
										<dl>
											<dt>공급가</dt>
											<dd>
												<input
													type="text"
													name="originalPrice_10859"
													value="270,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this); calcPrice(10859, this);"
													onblur="checkPriceRound(this, 10859)"
												/>
												원
											</dd>
										</dl>
									</div>
									<button
										type="button"
										class="btn_sec sm mgt5"
										style="width: 100%; height: 32px"
										onclick="validSave(10859)"
									>
										저장
									</button>
								</td>
								<td>
									<div class="goodsInfo">
										<dl>
											<dt>조회수</dt>
											<dd>12 회</dd>
										</dl>
										<dl>
											<dt>판매수량</dt>
											<dd>0 개</dd>
										</dl>
										<dl>
											<dt>재고</dt>
											<dd>무제한</dd>
										</dl>
									</div>
								</td>
								<td>
									<button
										type="button"
										class="btn_sec sm"
										onclick="openGoodsHistory(10859)"
									>
										이력
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="copy(10859)"
									>
										복사
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="edit(10859)"
									>
										수정
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="del(10859)"
									>
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="10858"
										/>선택</label
									>
								</td>
								<td>
									<div><strong>10858</strong></div>
									<div class="mgt5"></div>
									<div class="mgt5"></div>
								</td>
								<td>G0000010858</td>
								<td>
									<div class="gbox tl">
										<img
											src="//bootdev.mallstore.co.kr/data/base/goods/small/20230808/5eac44b93b2f4a4d8a29f6f75993f11e.jpg"
											onerror="this.src='//bootdev.mallstore.co.kr/imgs/goods/no.gif'"
											class="photo"
										/>
										<div class="mgt3">
											<a href="../../goods/detail?gno=10858" target="_blank"
												><strong>모던 스타일_sample 014</strong></a
											>
										</div>
										<div class="category mgt10"></div>

										내친구네트웍스
									</div>
								</td>
								<td>
									<span
										><strong>진열중</strong
										><button
											type="button"
											onclick="changeDisplay(10858)"
											class="btn_sec sm mgt5"
										>
											상태변경
										</button></span
									>
								</td>
								<td>
									<span
										><strong>판매중</strong
										><button
											type="button"
											onclick="changeSoldOut(10858)"
											class="btn_sec sm mgt5"
										>
											상태변경
										</button></span
									>
								</td>
								<td>
									<input type="hidden" name="priceSplit_10858" value="100" />
									<input type="hidden" name="cmsType_10858" value="CTG" />
									<input type="hidden" name="margin_10858" value="0.0" />
									<div class="goodsInfo">
										<dl>
											<dt>판매가</dt>
											<dd>
												<input
													type="text"
													name="price_10858"
													value="270,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this); calcPrice(10858, 'price');"
													onblur="checkPriceRound(this, 10858, 'price')"
												/>
												원
											</dd>
										</dl>
										<dl>
											<dt>시중가</dt>
											<dd>
												<input
													type="text"
													name="marketPrice_10858"
													value="300,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this)"
												/>
												원
											</dd>
										</dl>
										<dl>
											<dt>공급가</dt>
											<dd>
												<input
													type="text"
													name="originalPrice_10858"
													value="270,000"
													maxlength="10"
													class="text_input"
													style="width: 50%"
													onkeyup="toCurrency(this); calcPrice(10858, this);"
													onblur="checkPriceRound(this, 10858)"
												/>
												원
											</dd>
										</dl>
									</div>
									<button
										type="button"
										class="btn_sec sm mgt5"
										style="width: 100%; height: 32px"
										onclick="validSave(10858)"
									>
										저장
									</button>
								</td>
								<td>
									<div class="goodsInfo">
										<dl>
											<dt>조회수</dt>
											<dd>4 회</dd>
										</dl>
										<dl>
											<dt>판매수량</dt>
											<dd>0 개</dd>
										</dl>
										<dl>
											<dt>재고</dt>
											<dd>무제한</dd>
										</dl>
									</div>
								</td>
								<td>
									<button
										type="button"
										class="btn_sec sm"
										onclick="openGoodsHistory(10858)"
									>
										이력
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="copy(10858)"
									>
										복사
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="edit(10858)"
									>
										수정
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="del(10858)"
									>
										삭제
									</button>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="paging" style="margin-top: 20px">
						<span
							><a
								href="/nmanager/goods/goods_list?page=1&amp;scate=0&amp;saream=&amp;sareas=&amp;sbrand=0&amp;sdts=&amp;sdte=&amp;sdealer=0&amp;sstock=0&amp;sdisplay=0&amp;ssprice=&amp;seprice=&amp;skey=&amp;sword=&amp;psort=sort_desc&amp;psize=10"
								><strong class="active">1</strong></a
							><a
								href="/nmanager/goods/goods_list?page=2&amp;scate=0&amp;saream=&amp;sareas=&amp;sbrand=0&amp;sdts=&amp;sdte=&amp;sdealer=0&amp;sstock=0&amp;sdisplay=0&amp;ssprice=&amp;seprice=&amp;skey=&amp;sword=&amp;psort=sort_desc&amp;psize=10"
								><span class="num">2</span></a
							><a
								href="/nmanager/goods/goods_list?page=3&amp;scate=0&amp;saream=&amp;sareas=&amp;sbrand=0&amp;sdts=&amp;sdte=&amp;sdealer=0&amp;sstock=0&amp;sdisplay=0&amp;ssprice=&amp;seprice=&amp;skey=&amp;sword=&amp;psort=sort_desc&amp;psize=10"
								><span class="num">3</span></a
							></span
						>
					</div>

					<div class="order_list_btn2">
						<dl>
							<dt>일괄삭제 :</dt>
							<dd>
								선택한 상품정보를
								<button type="button" onclick="delList()" class="btn_sec md">
									선택삭제
								</button>
							</dd>
						</dl>
						<dl>
							<dt>엑셀다운 :</dt>
							<dd>
								선택한 상품정보를
								<button
									type="button"
									onclick="downExcel(true)"
									class="btn_sec md"
								>
									엑셀로받기
								</button>
								현재 페이지의 모든 상품정보를
								<button type="button" onclick="downExcel()" class="btn_sec md">
									엑셀로받기
								</button>
							</dd>
						</dl>
					</div>
				</section>
			</form>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style></style>
