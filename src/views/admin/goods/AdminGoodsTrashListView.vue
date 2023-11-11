<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				상품휴지통<button
					id="addBmark"
					onclick="addBookmark('상품휴지통')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>상품관리</li>
				<li>상품관리</li>
				<li>상품휴지통</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>전체 상품리스트에서 삭제된 상품의 리스트입니다.</li>
			<li>
				이곳에서 삭제하시면 영구 삭제되며 복원을 하시면 다시 해당카테고리로
				복원됩니다.
			</li>
		</ul>

		<!-- <script type="text/javascript" src="/jscript/SelectCategory.js"></script>
		<script type="text/javascript" src="/jscript/calendar/class.js"></script>
		<script type="text/javascript" src="/jscript/inperiod/class.js"></script>
		<script type="text/javascript">
			function change() {
				var f = document.sFrm;

				for (var i = 1; i <= CATEGORY_DEPTH; i++) {
					f['scate_' + i].disabled = true;
				}

				if (!isDate(f.sdts.value)) f.sdts.value = '';
				if (!isDate(f.sdte.value)) f.sdte.value = '';

				f.target = '_self';
				f.submit();
			}

			function validSearch() {
				if (!isDate(f.sdts.value)) f.sdts.value = '';
				if (!isDate(f.sdte.value)) f.sdte.value = '';

				if (
					$('#sdts').val().stripspace() != '' &&
					$('#sdte').val().stripspace() != ''
				) {
					if (fn_betweenDate($('#sdts').val(), $('#sdte').val(), 'd') < 0) {
						alert('시작일자가 종료일 보다 늦습니다.\n다시 입력해 주세요.');
						$('#sdte').focus();
						return false;
					}
				}
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<!-- 검색 폼 : 시작 ###################################################################### -->
				<form
					name="sFrm"
					method="get"
					action="trash_list"
					onsubmit="return validSearch(this)"
				>
					<input type="hidden" name="srecom" value="" />

					<input type="hidden" name="psize" value="" />

					<table
						cellspacing="0"
						cellpadding="0"
						border="0"
						width="100%"
						class="t_form"
					>
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
							<!-- tr>
			<th>브랜드</th>
			<td>
<select id='sbrand' name='sbrand'  onChange='change();' ><option value=''>선택하세요</option><option value='53'  >구찌</option><option value='54'  >루이비통</option><option value='38'  >발리</option><option value='52'  >버버리</option><option value='62'  >베르사체</option><option value='59'  >보스 까르띠에</option><option value='39'  >불가리</option><option value='56'  >샤넬</option><option value='58'  >아르마니</option><option value='44'  >에르메스</option><option value='64'  >입점사[브랜드]테스트</option><option value='61'  >코치</option><option value='9'  >크리스찬 디올</option><option value='60'  >티파니</option><option value='50'  >프라다</option></select>
			</td>
		</tr-->
							<tr>
								<th>상품삭제일</th>
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
				<!-- 검색 폼 : 끝 ###################################################################### -->
			</section>

			<!-- <script type="text/javascript">
				function changeList() {
					var f = document.Frm;
					var sf = document.sFrm;

					sf.psize.value = f.psize.options[f.psize.selectedIndex].value;

					sf.target = '_self';
					sf.submit();
				}

				function checkCbListAll() {
					var f = document.Frm;

					if (f.isCheckCbListAll.value != 'T') {
						checkCbAll(f.cbList, true);
						f.cbListAll.checked = true;
						f.isCheckCbListAll.value = 'T';
					} else {
						checkCbAll(f.cbList, false);
						f.cbListAll.checked = false;
						f.isCheckCbListAll.value = 'F';
					}
				}

				function delList() {
					var f = document.Frm;
					var items = '';

					if (!f.cbList) return false;

					if (typeof f.cbList.length == 'undefined') {
						if (f.cbList.checked) items = f.cbList.value;
					} else {
						for (var i = 0; i < f.cbList.length; i++) {
							if (f.cbList[i].checked) {
								items += (items ? ',' : '') + f.cbList[i].value;
							}
						}
					}

					if (items == '') {
						alert('삭제할 항목을 선택해 주세요.');
						return false;
					}

					var msg =
						'고객이 주문한 상품일 경우 삭제 시 사용자 이용에 제한됩니다.\n' +
						'삭제된 상품은 복원되지 않습니다.\n\n' +
						'영구 삭제하시겠습니까?';

					if (confirm(msg)) {
						$('.wrap-loading').show();
						f.gno.value = items;
						f.action = 'trash_del_act';
						f.submit();
					}
				}

				function del(gno) {
					var f = document.Frm;

					var msg =
						'선택하신 상품을 삭제하시겠습니까?\n\n' +
						'삭제를 하시면 영구적으로 지워지게 됩니다.\n' +
						'고객이 주문한 물류일경우 삭제하게 되면 오류가 발생하게 됩니다.\n' +
						'자세하게 확인하신후 삭제하시기 바랍니다.';

					if (confirm(msg)) {
						$('.wrap-loading').show();
						f.gno.value = gno;
						f.action = 'trash_del_act';
						f.submit();
					}
				}

				function restore(gno) {
					location.href = 'goods_reg?mode=RESTORE&gno=' + gno;
				}

				function openGoodsHistory(gno) {
					$.laybox({
						type: 'iframe',
						source: 'goods_history_list_ifrm?gno=' + gno,
					});
				}

				function downExcel() {
					frmProc.location.replace(
						'trash_list_excel?scate=0&sbrand=0&sdts=&sdte=&sdealer=0&ssprice=&seprice=&skey=&sword=&psize=10',
					);
				}
				//]]>
			</script> -->

			<section class="cont_wrap mgt40">
				<form name="Frm" method="post">
					<input type="hidden" name="gno" />
					<input
						type="hidden"
						name="params"
						value="73636174653D305E736272616E643D305E736474733D5E736474653D5E736465616C65723D305E737370726963653D5E736570726963653D5E736B65793D5E73776F72643D5E7073697A653D31305E706167653D31"
					/>

					<input type="hidden" name="isCheckCbListAll" value="F" />

					<div class="section_head">
						<h4 class="total">
							총 <strong>0</strong>개의 상품이 휴지통에 존재합니다.
						</h4>
						<div>
							<select id="psize" name="psize" onchange="changeList();">
								<option value="10" selected="">10줄씩보기</option>
								<option value="20">20줄씩보기</option>
								<option value="30">30줄씩보기</option>
								<option value="50">50줄씩보기</option>
								<option value="100">100줄씩보기</option>
								<option value="500">500줄씩보기</option>
							</select>

							<div class="mgl5">
								<button
									type="button"
									class="btn_sec sm"
									onclick="checkCbListAll()"
								>
									전체선택
								</button>
								<button type="button" class="btn_sec sm" onclick="delList()">
									일괄삭제
								</button>
								<button type="button" class="btn_sec sm" onclick="downExcel()">
									엑셀로받기
								</button>
							</div>
						</div>
					</div>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_list"
					>
						<caption>
							상품 휴지통 리스트
						</caption>
						<colgroup>
							<col width="40" />

							<col width="100" />

							<col width="100" />
							<col width="100" />
							<col width="*" />
							<col width="50" />
							<col width="250" />
							<col width="60" />
						</colgroup>
						<thead>
							<tr>
								<th>
									<label
										><input
											type="checkbox"
											name="cbListAll"
											onclick="checkCbListAll()"
										/>전체선택</label
									>
								</th>
								<th>고유번호</th>

								<th>업체명</th>

								<th colspan="2">상품</th>
								<th>재고</th>
								<th>카테고리</th>
								<th>관리</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td colspan="8" align="center">해당 상품이 없습니다.</td>
							</tr>
						</tbody>
					</table>

					<div class="paging" style="margin-top: 20px">
						<span></span>
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

<style></style>
