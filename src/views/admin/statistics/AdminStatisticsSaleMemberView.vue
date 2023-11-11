<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				회원별매출 통계<button
					id="addBmark"
					onclick="addBookmark('회원별매출 통계')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>통계/분석</li>
				<li>회원 통계</li>
				<li>회원별매출 통계</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				아래의 매출 통계는 <span class="red">배송완료</span>기준의 매출 통계
				입니다.
			</li>
			<li>
				매출건은 배송완료된 주문의 주문건수로써
				<span class="red">배송완료일자</span> 기준의 합계 건수입니다.
			</li>
			<li>
				수량은 배송완료된 주문의 주문수량으로써
				<span class="red">배송완료일자</span> 기준의 합계 수량입니다.
			</li>
			<li>
				매출금액은 배송완료된 주문의 주문금액[(판매가+옵션가)×수량]으로써
				<span class="red">배송완료일자</span> 기준의 합계 금액입니다.
			</li>
		</ul>

		<!-- <script type="text/javascript" src="/jscript/calendar/class.js"></script>
		<script type="text/javascript" src="/jscript/inperiod/class.js"></script>
		<script type="text/javascript">
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
					method="get"
					action="sale_member"
					onsubmit="return validSearch(this)"
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
						<a
							href="sale_member_excel?sdate=2023-09-01&amp;edate=2023-09-07"
							class="btn_sec md"
							>엑셀로 받기</a
						>
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
						회원별 매출통계 내역
					</caption>
					<thead>
						<tr>
							<th>구매순위</th>
							<th>주문자명(아이디)</th>
							<th>매출건</th>
							<th>수량</th>
							<th>매출금액</th>
							<th>적립금</th>
							<th>환불금액</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>서승보(seobo28)</td>
							<td>5</td>
							<td>5</td>
							<td>1,460,000</td>
							<td>36,800</td>
							<td>0</td>
						</tr>

						<tr>
							<td>2</td>
							<td>박진원(zinys)</td>
							<td>1</td>
							<td>1</td>
							<td>350,000</td>
							<td>10,500</td>
							<td>0</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td>합계</td>
							<td></td>
							<td>6</td>
							<td>6</td>
							<td>1,810,000</td>
							<td>47,300</td>
							<td>0</td>
						</tr>
					</tfoot>
					<tfoot></tfoot>
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
