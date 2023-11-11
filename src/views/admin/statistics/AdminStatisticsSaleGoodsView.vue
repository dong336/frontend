<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				상품별매출 통계<button
					id="addBmark"
					onclick="addBookmark('상품별매출 통계')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>통계/분석</li>
				<li>매출 통계</li>
				<li>상품별매출 통계</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				아래의 매출 통계는 <span class="red">배송완료</span>기준의 매출 통계
				입니다.
			</li>
			<li>판매가는 옵션 항목을 뺀 금액입니다.</li>
			<li>
				총매출은 배송완료된 주문의 주문금액[(판매가+옵션가)×수량]으로써
				<span class="red">배송완료일자</span> 기준의 합계 금액입니다.
			</li>
			<li>
				판매수는 배송완료된 주문의 주문수량으로써
				<span class="red">배송완료일자</span> 기준의 합계 수량입니다.
			</li>
		</ul>

		<!-- <script type="text/javascript" src="/jscript/SelectCategory.js"></script>
		<script type="text/javascript" src="/jscript/calendar/class.js"></script>
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
					action="sale_goods"
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
									<div class="label_wrap">
										<input type="hidden" name="cate" value="" />
										<select
											id="cate_1"
											name="cate_1"
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
											<option value="1846">대카테고리 테스트</option></select
										><select
											id="cate_2"
											name="cate_2"
											head="선택"
											depth="2"
											onchange="sc.get(this)"
										>
											<option value="">선택</option></select
										><select
											id="cate_3"
											name="cate_3"
											head="선택"
											depth="3"
											onchange="sc.get(this)"
										>
											<option value="">선택</option>
										</select>

										<!-- <script type="text/javascript">
											var sc = new SelectCategory();
											sc.init(document.sFrm.cate);
											//]]>
										</script> -->
									</div>
									<div class="label_wrap">
										<select id="skey" name="skey">
											<option value="">++ 검색영역선택 ++</option>
											<option value="name">상품명</option>
											<option value="code">상품코드</option>
										</select>
										<input
											type="text"
											name="sword"
											value=""
											class="text_input"
											style="width: 300px"
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
			<section class="cont_wrap">
				<div class="section_head">
					<h4 class="total">
						<strong>2023년 09월 01일부터 2023년 09월 07일까지</strong>의
						검색결과 입니다.
					</h4>
					<div>
						<a
							href="sale_goods_excel?cate=0&amp;sdate=2023-09-01&amp;edate=2023-09-07&amp;skey=&amp;sword="
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
						상품별 매출 통계 내역
					</caption>
					<thead>
						<tr>
							<th>상품명</th>
							<th>공급가</th>
							<th>판매가</th>
							<th>총매출/판매수</th>
							<th>전체판매상위%</th>
							<th>상품판매개시일</th>
							<th>판매순위</th>
							<th>구매고객</th>
							<th>이미지로 보기</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<a
									href="/goods/detail?gno=10867"
									target="_blank"
									class="ellipsis"
									title="입점업체 상품 테스트_수수료적용 02"
									>입점업체 상품 테스트_수수료적용 02</a
								>
							</td>
							<td>245,000</td>
							<td>350,000</td>
							<td>1,050,000/3</td>
							<td>42%</td>
							<td>2023-09-05</td>
							<td>1위</td>
							<td><br /></td>
							<td>
								<span class="button small"
									><a
										href="sale_goods_graph?gno=10867&amp;cate=0&amp;sdate=2023-09-01&amp;edate=2023-09-07&amp;skey=&amp;sword="
										>이미지로보기</a
									></span
								>
							</td>
						</tr>

						<tr>
							<td>
								<a
									href="/goods/detail?gno=10866"
									target="_blank"
									class="ellipsis"
									title="입점업체 상품 테스트_수수료적용 01"
									>입점업체 상품 테스트_수수료적용 01</a
								>
							</td>
							<td>360,000</td>
							<td>400,000</td>
							<td>400,000/1</td>
							<td>14%</td>
							<td>2023-09-05</td>
							<td>2위</td>
							<td><br /></td>
							<td>
								<span class="button small"
									><a
										href="sale_goods_graph?gno=10866&amp;cate=0&amp;sdate=2023-09-01&amp;edate=2023-09-07&amp;skey=&amp;sword="
										>이미지로보기</a
									></span
								>
							</td>
						</tr>

						<tr>
							<td>
								<a
									href="/goods/detail?gno=10850"
									target="_blank"
									class="ellipsis"
									title="모던 스타일_sample 006"
									>모던 스타일_sample 006</a
								>
							</td>
							<td>342,000</td>
							<td>380,000</td>
							<td>380,000/1</td>
							<td>14%</td>
							<td>2023-09-06</td>
							<td>3위</td>
							<td><br /></td>
							<td>
								<span class="button small"
									><a
										href="sale_goods_graph?gno=10850&amp;cate=0&amp;sdate=2023-09-01&amp;edate=2023-09-07&amp;skey=&amp;sword="
										>이미지로보기</a
									></span
								>
							</td>
						</tr>

						<tr>
							<td>
								<a
									href="/goods/detail?gno=10865"
									target="_blank"
									class="ellipsis"
									title="입점업체 상품 테스트_01"
									>입점업체 상품 테스트_01</a
								>
							</td>
							<td>180,000</td>
							<td>180,000</td>
							<td>180,000/1</td>
							<td>14%</td>
							<td>2023-09-05</td>
							<td>4위</td>
							<td><br /></td>
							<td>
								<span class="button small"
									><a
										href="sale_goods_graph?gno=10865&amp;cate=0&amp;sdate=2023-09-01&amp;edate=2023-09-07&amp;skey=&amp;sword="
										>이미지로보기</a
									></span
								>
							</td>
						</tr>

						<tr>
							<td>
								<a
									href="/goods/detail?gno=10862"
									target="_blank"
									class="ellipsis"
									title="모던 스타일_sample 018"
									>모던 스타일_sample 018</a
								>
							</td>
							<td>142,500</td>
							<td>150,000</td>
							<td>150,000/1</td>
							<td>14%</td>
							<td>2023-09-04</td>
							<td>5위</td>
							<td><br /></td>
							<td>
								<span class="button small"
									><a
										href="sale_goods_graph?gno=10862&amp;cate=0&amp;sdate=2023-09-01&amp;edate=2023-09-07&amp;skey=&amp;sword="
										>이미지로보기</a
									></span
								>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td>합계</td>
							<td>1,269,500</td>
							<td>1,460,000</td>
							<td>2,160,000/7</td>
							<td>98.0%</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
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
