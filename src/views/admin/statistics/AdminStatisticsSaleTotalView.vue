<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				전체매출 통계<button
					id="addBmark"
					onclick="addBookmark('전체매출 통계')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>통계/분석</li>
				<li>매출 통계</li>
				<li>전체매출 통계</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				주문건수는 <span class="red">주문일자</span> 기준으로 모든 주문의 합계
				건수입니다.
			</li>
			<li>
				결제건수는 소비자가 입금(카드결제, 온라인입금확인)한 주문으로
				<span class="red">입금일자</span> 기준의 합계 건수입니다.
			</li>
			<li>
				취소건수는 소비자 및 관리자가 주문취소한 주문으로
				<span class="red">취소일자(관리자 주문취소완료일자)</span> 기준의 합계
				건수입니다.
			</li>
			<li>
				온라인결제는 배송완료된 주문의
				결제금액[((판매가+옵션가)×수량)-회원할인금-사용적립금-쿠폰사용금+선배송비]으로써
				<span class="red">배송완료일자</span> 기준의 합계 금액입니다.
			</li>
			<li>
				카드결제는 배송완료된 주문의
				결제금액[((판매가+옵션가)×수량)-회원할인금-사용적립금-쿠폰사용금+선배송비]으로써
				<span class="red">배송완료일자</span> 기준의 합계 금액입니다.
			</li>
			<li>
				총매출은 배송완료된 주문의 주문금액[(판매가+옵션가)×수량]으로써
				<span class="red">배송완료일자</span> 기준의 총합계 금액입니다.
			</li>
			<li>
				사용적립금은 소비자가 주문시 사용한 적립금으로써
				<span class="red">배송완료일자</span> 기준의 총합계 금액입니다.
			</li>
		</ul>

		<!-- <script type="text/javascript" src="/jscript/calendar/class.js"></script>
		<script type="text/javascript" src="/jscript/inperiod/class.js"></script>
		<script type="text/javascript">
			function showGraph() {
				var f = document.sFrm;
				var value = f.mode.options[f.mode.selectedIndex].value;

				if (value == '') {
					alert('항목을 선택하세요.');
					f.mode.focus();
					return false;
				}

				f.action = 'sale_total_graph';
				f.target = '_self';
				f.submit();
			}

			function validSearch(f) {
				if (!isDate(f.sdate.value)) f.sdate.value = '';
				if (!isDate(f.edate.value)) f.edate.value = '';

				if (
					$('#sdate').val().stripspace() != '' &&
					$('#edate').val().stripspace() != ''
				) {
					if (fn_betweenDate($('#sdate').val(), $('#edate').val(), 'd') < 0) {
						alert('시작일자가 종료일 보다 늦습니다.\n다시 입력해 주세요.');
						$('#edate').focus();
						return false;
					}
				}
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form
					name="sFrm"
					method="post"
					action="sale_total"
					onsubmit="return validSearch(this);"
				>
					<table
						cellspacing="0"
						cellpadding="0"
						border="0"
						width="100%"
						class="t_form"
					>
						<caption>
							검색 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>기간 검색</th>
								<td>
									<div class="label_wrap">
										<div class="period_inp">
											<input
												type="text"
												id="sdate"
												name="sdate"
												value="2023-09-01"
												maxlength="10"
												class="text_input"
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'sdate', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
										~
										<div class="period_inp">
											<input
												type="text"
												id="edate"
												name="edate"
												value="2023-09-07"
												maxlength="10"
												class="text_input"
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'edate', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
										<div class="period_btn">
											<button
												type="button"
												class="btn_sec sm active"
												onclick="inperiod.input('sdate', 'edate', 'tm')"
											>
												이번달
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sdate', 'edate', 't')"
											>
												오늘
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sdate', 'edate', 't', -1)"
											>
												어제
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sdate', 'edate', 'd', -3)"
											>
												3일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sdate', 'edate', 'd', -7)"
											>
												7일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sdate', 'edate', 'd', -10)"
											>
												10일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sdate', 'edate', 'd', -20)"
											>
												20일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sdate', 'edate', 'd', -30)"
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
						<strong>2023년 09월 01일부터 2023년 09월 07일까지</strong>의
						검색결과 입니다.
					</h4>
					<div>
						<select id="mode" name="mode">
							<option value="">선택</option>
							<option value="order">주문건수</option>
							<option value="payment">결제건수</option>
							<option value="cancel">취소건수</option>
							<option value="usecmoney">사용적립금</option>
							<option value="coupon">쿠폰할인금</option>
							<option value="memberdc">회원할인금</option>
							<option value="delivery">배송료</option>
							<option value="pay_online">온라인결제</option>
							<option value="pay_card">카드결제</option>
							<option value="sale_total">총매출</option></select
						>&nbsp;
						<button type="button" onclick="showGraph()" class="btn_sec sm">
							이미지로 보기
						</button>
					</div>
				</div>

				<table
					cellspacing="0"
					cellpadding="0"
					border="0"
					width="100%"
					class="t_list"
				>
					<caption>
						전체 매출통계 내역
					</caption>
					<thead>
						<tr>
							<th>일자</th>
							<th>주문건수</th>
							<th>결제건수</th>
							<th>취소건수</th>
							<th>사용적립금</th>
							<th>쿠폰할인금</th>
							<th>회원할인금</th>
							<th>배송료</th>
							<th>온라인결제</th>
							<th>카드결제</th>
							<th>총매출</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>2023-09-01</td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
						</tr>

						<tr>
							<td>2023-09-02</td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
						</tr>

						<tr>
							<td>2023-09-03</td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
						</tr>

						<tr>
							<td>2023-09-04</td>
							<td>1</td>
							<td>1</td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td>5,000</td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td>145,000</td>
							<td><font color="#C0C0C0">0</font></td>
							<td>150,000</td>
						</tr>

						<tr>
							<td>2023-09-05</td>
							<td>10</td>
							<td>7</td>
							<td>1</td>
							<td><font color="#C0C0C0">0</font></td>
							<td>5,000</td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td>1,625,000</td>
							<td><font color="#C0C0C0">0</font></td>
							<td>1,630,000</td>
						</tr>

						<tr>
							<td>2023-09-06</td>
							<td>2</td>
							<td>1</td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td>380,000</td>
							<td><font color="#C0C0C0">0</font></td>
							<td>380,000</td>
						</tr>

						<tr>
							<td>2023-09-07</td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td>합계</td>
							<td>13</td>
							<td>9</td>
							<td>1</td>
							<td><font color="#C0C0C0">0</font></td>
							<td>10,000</td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td>2,150,000</td>
							<td><font color="#C0C0C0">0</font></td>
							<td>2,160,000</td>
						</tr>
					</tfoot>
				</table>
			</section>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
