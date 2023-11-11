<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				입점업체정산<button
					id="addBmark"
					onclick="addBookmark('입점업체정산')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>정산관리</li>
				<li>결제/정산내역</li>
				<li>입점업체정산</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>입점업체정산 목록 입니다.</li>
			<li>
				결제수수료 입점업체 부담 /적립금 지급 입점업체 부담 /회원 할인금
				입점업체 부담 /이벤트 할인금 입점업체 부담<br />(적립금 "기본 정책"이외
				설정으로 적립금 지급시 입점업체 부담, 입점업체 신청 이벤트 경우 입점업체
				부담)
			</li>
			<li>
				선배송비는 그 업체의 해당주문번호 마지막 구매확정상품에 일괄 표시됩니다.
			</li>
			<li>정산시작일, 정산마감일을 선택하셔서 검색하시면 됩니다.</li>
		</ul>
		<!-- ' ###################################################################### -->
		<!-- '	정산계산원칙 -->
		<!-- '	1) 모든 정산은 배송일자를 기준으로 계산합니다.  단 결제수수료는 주문일자별이며 취소,반품을 모두 포함합니다. -->
		<!-- '	2) 카드수수료의 결과에서 소숫점절산은 10원단위로 끊어줍니다. -->
		<!-- ' ###################################################################### -->

		<!-- <script type="text/javascript" src="/jscript/SelectCategory.js"></script>
		<script type="text/javascript" src="/jscript/calendar/class.js"></script>
		<script type="text/javascript" src="/jscript/inperiod/class.js"></script>
		<script type="text/javascript">
			function clearDealerID() {
				var f = document.sFrm;
				f.sid.value = '';
			}

			function validSearch(f) {
				if (f.sdts.value || f.sdte.value) {
					if (!f.sdts.value) {
						alert('시작일을 입력해 주세요.');
						f.sdts.focus();
						return false;
					}
					if (!isDate(f.sdts.value)) {
						alert('유효한 날짜가 아닙니다.');
						f.sdts.value = '';
						f.sdts.focus();
						return false;
					}

					if (!f.sdte.value) {
						alert('종료일을 입력해 주세요.');
						f.sdte.focus();
						return false;
					}
					if (!isDate(f.sdte.value)) {
						alert('유효한 날짜가 아닙니다.');
						f.sdte.value = '';
						f.sdte.focus();
						return false;
					}

					if (
						$('#sdts').val().stripspace() != '' &&
						$('#sdte').val().stripspace() != ''
					) {
						if (fn_betweenDate($('#sdts').val(), $('#sdte').val(), 'd') < 0) {
							alert('시작일자가 종료일 보다 늦습니다.');
							$('#sdte').focus();
							return false;
						}
					}

					var btDay = fn_betweenDate(f.sdts.value, f.sdte.value, 'd');
					if (btDay == -999) {
						alert('유효한 날짜가 아닙니다.');
						f.sdts.focus();
						return false;
					}

					if (btDay > 1000000) {
						alert('최대 180일까지 검색 가능 합니다.');
						f.sdte.focus();
						return false;
					}
				}

				for (var i = 1; i <= CATEGORY_DEPTH; i++) {
					f['scate_' + i].disabled = true;
				}
			}

			function dearlist(obj) {
				var f = document.sFrm;
				var dealercate = obj ? obj.value : 0;

				$.ajax({
					type: 'GET',
					dataType: 'json',
					url: '/common/ajax/dealerList_ajax',
					data: { dealercate: dealercate },
					error: function (request, status, error) {
						alert(request.responseText);
					},
					success: function (data) {
						var objSelect = f['sdealer'];
						removeSelectOptionAll(f['sdealer']);
						if (data.list.length > 0) {
							var objOption = document.createElement('option');
							objOption.text = '전체';
							objOption.value = '';
							objSelect.options.add(objOption);
							for (var i = 0; i < data.list.length; i++) {
								var objOption = document.createElement('option');
								with (objOption) {
									text = data.list[i].name + '[' + data.list[i].id + ']';
									value = data.list[i].no;
								}
								objSelect.options.add(objOption);
							}
						} else {
							var objOption = document.createElement('option');
							objOption.text = '선택하세요';
							objOption.value = '';
							objSelect.options.add(objOption);
						}
					},
				});
			}

			$(function () {
				$('#tb_account tbody td').bind('click', function () {
					var $row = $(this).parent();
					var dealer = $row.attr('dealer');
					var sexpire = $row.attr('sexpire');
					var eexpire = $row.attr('eexpire');
					var avat = $row.attr('avat');

					location.href =
						'dealer_account_detail?sdealer=0&sid=&sstate=&scate=0&sterm=&sdts=&sdte=&dealer=' +
						dealer +
						'&sexpire=' +
						sexpire +
						'&eexpire=' +
						eexpire +
						'&avat=' +
						avat;
					return false;
				});
			});
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form name="sFrm" method="get" onsubmit="return validSearch(this);">
					<table
						border="0"
						cellspacing="0"
						cellpadding="0"
						width="100%"
						class="t_form"
					>
						<caption>
							검색 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>입점업체</th>
								<td>
									&nbsp;<select
										id="sdealer"
										name="sdealer"
										onchange="clearDealerID();"
										style="width: 280px"
									>
										<option value="">전체</option>
										<option value="148605">ncgn[mallstoremim]</option>
									</select>
								</td>
								<th>입점업체ID</th>
								<td>
									<input
										type="text"
										name="sid"
										class="text_input"
										style="width: 95%"
										value=""
									/>
								</td>
							</tr>
							<tr>
								<th>정산상태</th>
								<td colspan="3">
									<select id="sstate" name="sstate">
										<option value="">전체</option>
										<option value="1">미확인</option>
										<option value="2">대기</option>
										<option value="3">관리자확인</option>
										<option value="4">정산요청</option>
										<option value="5">정산보류</option>
										<option value="6">정산완료</option>
									</select>
								</td>
							</tr>
							<tr>
								<th>카테고리별</th>
								<td colspan="3">
									<input type="hidden" name="scate" value="" />
									<span style="margin-right: 5px"
										><select
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
										</select></span
									><span style="margin-right: 5px"
										><select
											id="scate_2"
											name="scate_2"
											head="선택"
											depth="2"
											onchange="sc.get(this)"
										>
											<option value="">선택</option>
										</select></span
									><span style="margin-right: 5px"
										><select
											id="scate_3"
											name="scate_3"
											head="선택"
											depth="3"
											onchange="sc.get(this)"
										>
											<option value="">선택</option>
										</select></span
									>

									<!-- <script type="text/javascript">
										var sc = new SelectCategory();
										sc.init(document.sFrm.scate);
										//]]>
									</script> -->
								</td>
							</tr>
							<tr>
								<th>기간별</th>
								<td colspan="3">
									<div class="label_wrap">
										<select id="sterm" name="sterm">
											<option value="start">정산시작일</option>
											<option value="end">정산종료일</option>
											<option value="account">결산일</option>
										</select>
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
						</tbody>
					</table>

					<div class="btn_wrap">
						<button type="submit" class="btn_pri">검색</button>
					</div>
				</form>
			</section>
			<section class="cont_wrap">
				<div class="section_head">
					<h4 class="total">
						2023년 09월 결산정보 (다음은 결산(예정)일이
						<u>2023-09-01</u>~<u>2023-09-30</u>인 업체의 목록만 출력됩니다. 이외
						결산정보는 위의 정산일자로 검색해 주세요.)
					</h4>
					<a
						href="dealer_account_excel?sdealer=0&amp;sid=&amp;sstate=&amp;scate=0&amp;sterm=&amp;sdts=&amp;sdte="
						class="btn_sec md"
						>출력/엑셀다운</a
					>
				</div>

				<div style="overflow: hidden; overflow-x: scroll">
					<table
						id="tb_account"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_list"
						style="min-width: 2000px"
					>
						<caption>
							입점업체 정산 내역
						</caption>
						<colgroup>
							<col width="130" />
							<col width="70" />
							<col width="70" />
							<col width="45" />
							<col width="45" />
							<col width="" />
							<col width="" />
							<col width="" />
							<col width="" />
							<col width="" />
							<col width="" />
							<col width="" />
							<col width="" />
							<col width="" />
							<col width="" />
							<col width="" />
							<col width="" />
							<col width="" />
							<col width="" />
							<col width="70" />
						</colgroup>
						<thead>
							<tr>
								<th>업체</th>
								<th>정산시작일</th>
								<th>정산마감일</th>
								<th>정산<br />주기</th>
								<th>과세<br />구분</th>
								<th>공급가합</th>
								<th>판매가합</th>
								<th>선배송비</th>
								<th>적립금</th>
								<th>할인금액</th>
								<th>쿠폰<br />사용금</th>
								<th>사용<br />자체<br />적립금</th>
								<th>정산금액<br />합계</th>
								<th>수기정산<br />합계</th>
								<th>최종정산<br />금액합계</th>
								<th>공급가</th>
								<th>세액</th>
								<th>정산현황</th>
							</tr>
						</thead>
						<tbody>
							<!-- 		' 전체 합계			 -->

							<!-- 		' 월별 합계 -->

							<tr
								dealer="148605"
								sexpire="2023-09-05"
								eexpire="2023-09-05"
								avat="1"
							>
								<td>ncgn</td>
								<!-- 업체 -->
								<td>2023-09-05</td>
								<!-- 정산시작일 -->
								<td>2023-09-05</td>
								<!-- 정산마감일 -->
								<td>일</td>
								<!-- 정산주기 -->
								<td>과세</td>
								<!-- 과세구분 -->
								<td>1,030,000</td>
								<!-- 공급가합 -->
								<td>1,280,000</td>
								<!-- 판매가합 -->
								<td>0</td>
								<!-- 선배송비 -->
								<td>31,400</td>
								<!-- 적립금 -->
								<td>0</td>
								<!-- 할인금액 -->
								<td>5,000</td>
								<!-- 쿠폰사용금 -->
								<td>0</td>
								<!-- 사용 자체적립금 -->
								<td>998,600</td>
								<!-- 정산금액합계 -->
								<td>0</td>
								<!-- 수기정산합계 -->
								<td>998,600</td>
								<!-- 최종정산 금액합계 -->
								<td>907,818</td>
								<!-- 공급가 -->
								<td>90,782</td>
								<!-- 세액 -->
								<td>미확인</td>
								<!-- 정산현황 -->
							</tr>

							<!-- 		' 전체 합계			 -->

							<!-- 		' 월별 합계 -->

							<!-- 		' 전체 합계			 -->

							<!-- 		' 월별 합계 -->

							<tr>
								<th colspan="5">2023년 09월 합계</th>
								<th>1,030,000</th>
								<th>1,280,000</th>
								<th>0</th>
								<th>31,400</th>
								<th>0</th>
								<th>5,000</th>
								<th>0</th>
								<th>998,600</th>
								<th>0</th>
								<th>998,600</th>
								<th>907,818</th>
								<th>90,782</th>
								<th></th>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<th colspan="5">전체 합계</th>
								<th>1,030,000</th>
								<th>1,280,000</th>
								<th>0</th>
								<th>31,400</th>
								<th>0</th>
								<th>5,000</th>
								<th>0</th>
								<th>998,600</th>
								<th>0</th>
								<th>998,600</th>
								<th>907,818</th>
								<th>90,782</th>
								<th></th>
							</tr>
						</tfoot>
					</table>
				</div>
			</section>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style scoped>
.t_list tbody th {
	padding: 8px 0;
	font-size: 11px;
	color: #666;
	font-weight: bold;
	text-align: center;
	border-bottom: solid 1px #ddd;
	background-color: #f5f5f5;
}
.t_list thead th,
.t_list tbody th,
.t_list tbody td,
.t_list tfoot th {
	font-size: 11px;
}
.t_list tbody td {
	cursor: pointer;
}
.t_list tbody tr:hover {
	background-color: #ffffe3;
}
</style>
