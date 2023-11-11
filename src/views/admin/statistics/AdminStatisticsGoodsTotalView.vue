<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				상품별 통계<button
					id="addBmark"
					onclick="addBookmark('상품별 통계')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>통계/분석</li>
				<li>상품 통계</li>
				<li>상품별 통계</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				주문건수는 <span class="red">주문일자</span> 기준으로 모든 주문의 합계
				건수입니다.
			</li>
			<li>
				판매수는 배송완료된 주문의 주문수량으로써
				<span class="red">배송완료일자</span> 기준의 합계 수량입니다.
			</li>
			<li>
				매출은 배송완료된 주문의 주문금액[(판매가+옵션가)×수량]으로써
				<span class="red">배송완료일자</span> 기준의 총합계 금액입니다.
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
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form
					name="sFrm"
					method="get"
					action="goods_total"
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
							<tr>
								<th>직접 검색</th>
								<td>
									<div>
										<select name="skey">
											<option value="">++ 검색영역선택 ++</option>
											<option value="name">상품명</option>
											<option value="code">상품코드</option></select
										>&nbsp;<input
											type="text"
											name="sword"
											value=""
											class="text_input"
											style="width: 300px"
										/>
									</div>
									<div class="noti_info">
										검색영역을 설정하시는 경우, 정확히 일치하는 항목에 대한
										결과만 표시됩니다. (Equals 검색.)
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
							href="goods_total_excel?sdate=2023-09-01&amp;edate=2023-09-07&amp;skey=&amp;sword="
							class="btn_sec md"
							>엑셀로받기</a
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
						상품별 통계 내역
					</caption>
					<colgroup>
						<col width="15%" />
						<col width="17%" />
						<col width="17%" />
						<col width="17%" />
						<col width="17%" />
						<col width="17%" />
					</colgroup>
					<thead>
						<tr>
							<th>날짜</th>
							<th>상세보기 수</th>
							<th>위시리스트 등록수</th>
							<th>주문건수</th>
							<th>판매수</th>
							<th>매출</th>
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
						</tr>

						<tr>
							<td>2023-09-02</td>
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
						</tr>

						<tr>
							<td>2023-09-04</td>
							<td>8</td>
							<td><font color="#C0C0C0">0</font></td>
							<td>1</td>
							<td>1</td>
							<td>150,000</td>
						</tr>

						<tr>
							<td>2023-09-05</td>
							<td>18</td>
							<td><font color="#C0C0C0">0</font></td>
							<td>10</td>
							<td>5</td>
							<td>1,630,000</td>
						</tr>

						<tr>
							<td>2023-09-06</td>
							<td>26</td>
							<td><font color="#C0C0C0">0</font></td>
							<td>2</td>
							<td>1</td>
							<td>380,000</td>
						</tr>

						<tr>
							<td>2023-09-07</td>
							<td>1</td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
							<td><font color="#C0C0C0">0</font></td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td>합계</td>
							<td>53</td>
							<td><font color="#C0C0C0">0</font></td>
							<td>13</td>
							<td>7</td>
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
