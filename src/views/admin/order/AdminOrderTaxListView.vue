<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				세금계산서신청관리<button
					id="addBmark"
					onclick="addBookmark('세금계산서신청관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>주문/매출관리</li>
				<li>거래증빙서류관리</li>
				<li>세금계산서신청관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>세금계산서 신청 내역을 관리합니다.</li>
		</ul>

		<!-- <script type="text/javascript" src="/jscript/calendar/class.js"></script>
		<script type="text/javascript" src="/jscript/inperiod/class.js"></script>
		<script type="text/javascript">
			//<![  [
			function openOrderDetail(idx) {
				// 주문정보 상세보기
				openPopup(
					'order_detail_new_pop?idx=' + idx,
					'Detail',
					1080,
					800,
					'scrollbars=1',
				);
			}

			function openDealProof(idx) {
				openPopup(
					'../../common/dealproof/tax_print_pop?idx=' + idx,
					'DealProof',
					660,
					530,
					'scrollbars=yes',
				);
			}

			function openReqConts(idx) {
				openPopup('tax_reqconts_pop?idx=' + idx, 'ReqConts', 660, 570);
			}

			function downExcel() {
				frmProc.location.replace(
					'tax_list_excel?sissue=&sdts=&sdte=&skey=&sword=',
				);
			}

			function sendTax(idx) {
				var f = document.Frm;

				if (confirm('입력된 고객메일로 세금계산서를 발송 하시겠습니까?')) {
					//$('.wrap-loading').show();
					f.idx.value = idx;
					f.target = 'frmProc';
					f.action = '../../common/dealproof/tax_sendmail';
					f.submit();
				}
			}

			function setStateList() {
				var f = document.Frm;
				var items = '';

				var stateText = f.batchState.options[f.batchState.selectedIndex].text;
				var stateValue = f.batchState.options[f.batchState.selectedIndex].value;

				if (!f.cbList) return false;

				if (stateValue == '') {
					alert('수정할 상태를 선택해 주세요.');
					f.batchState.focus();
					return false;
				}

				var check = false;
				$(f.cbList).each(function () {
					if (this.checked) {
						items += (items ? ',' : '') + this.value;
						if ($('#check_' + this.value).text() && !check) {
							check = true;
						}
					}
				});

				if (check) {
					alert(
						'선택된 신청중에 입금전인 항목이 있습니다.\n입금전인 상태는 수정할수 없습니다.',
					);
					return;
				}

				if (items == '') {
					alert(stateText + '로(으로) 수정하실 항목을 선택해 주세요.');
					return false;
				}

				if (
					confirm('선택한 항목을 ' + stateText + '로(으로) 수정하시겠습니까?')
				) {
					$('.wrap-loading').show();
					f.idx.value = items;
					f.action = 'tax_act';
					f.submit();
				}
			}

			function validSearch(f) {
				if (!isDate(f.sregdts.value)) f.sregdts.value = '';
				if (!isDate(f.sregdte.value)) f.sregdte.value = '';

				if (
					$('#sregdts').val().stripspace() != '' &&
					$('#sregdte').val().stripspace() != ''
				) {
					if (
						fn_betweenDate($('#sregdts').val(), $('#sregdte').val(), 'd') < 0
					) {
						alert('시작일자가 종료일 보다 늦습니다.\n다시 입력해 주세요.');
						$('#sregdte').focus();
						return false;
					}
				}
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form name="sFrm" method="get" onsubmit="return validSearch(this)">
					<table
						cellspacing="0"
						cellpadding="0"
						border="0"
						width="100%"
						class="t_form"
					>
						<caption>
							세금계산서 검색
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>발급상태</th>
								<td>
									<select id="sissue" name="sissue">
										<option value="">선택</option>
										<option value="100">발급신청</option>
										<option value="900">발급완료</option>
									</select>
								</td>
							</tr>
							<tr>
								<th>기간</th>
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
								<th>직접검색</th>
								<td>
									<div class="direct_search">
										<select id="skey" name="skey">
											<option value="">전체</option>
											<option value="ordno">주문번호</option>
											<option value="ordname">주문자명</option>
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
						<button class="btn_pri" type="submit">검색</button>
					</div>
				</form>
			</section>
			<section class="cont_wrap">
				<div class="section_head">
					<h4 class="totla">총 <strong>0</strong>건이 조회 되었습니다.</h4>
				</div>

				<form name="Frm" method="post">
					<input type="hidden" name="idx" />
					<input
						type="hidden"
						name="params"
						value="7369737375653D5E736474733D5E736474653D5E736B65793D5E73776F72643D5E706167653D31"
					/>

					<table
						cellspacing="0"
						cellpadding="0"
						border="0"
						width="100%"
						class="t_list"
					>
						<caption>
							세금계산서 신청 내역
						</caption>
						<colgroup>
							<col width="40" />
							<col width="6%" />
							<col width="12%" />
							<col width="*" />
							<col width="6%" />
							<col width="8%" />
							<col width="8%" />
							<col width="7%" />
							<col width="10%" />
							<col width="70" />
							<col width="70" />
							<col width="120" />
						</colgroup>
						<thead>
							<tr>
								<th rowspan="2">
									<label
										><input
											type="checkbox"
											name="cbListAll"
											onclick="checkCbAll(this.form.cbList, this.checked)"
										/>전체선택</label
									>
								</th>
								<th rowspan="2">No</th>
								<th rowspan="2">주문번호<br />(주문자)</th>
								<th colspan="3">상품정보</th>
								<th rowspan="2">공급가</th>
								<th rowspan="2">부가세</th>
								<th rowspan="2">합계</th>
								<th rowspan="2">신청일자</th>
								<th rowspan="2">발급상태</th>
								<th rowspan="2">관리</th>
							</tr>
							<tr>
								<th>상품명</th>
								<th>수량</th>
								<th>단가</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td height="50" colspan="12">조회된 정보가 없습니다.</td>
							</tr>
						</tbody>
					</table>

					<div class="paging" style="margin-top: 20px">
						<span></span>
					</div>

					<ul class="order_list_btn mgt10">
						<li class="title">상태수정 :</li>
						<li>
							선택한 항목을
							<select id="batchState" name="batchState">
								<option value="">선택</option>
								<option value="100">발급신청</option>
								<option value="900">발급완료</option>
							</select>
							로(으로)
							<button type="button" onclick="setStateList()" class="btn_sec md">
								수정하기
							</button>
						</li>
						<li class="title">엑셀다운 :</li>
						<li>
							<button type="button" onclick="downExcel()" class="btn_sec md">
								엑셀로 받기
							</button>
						</li>
					</ul>
				</form>
			</section>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
