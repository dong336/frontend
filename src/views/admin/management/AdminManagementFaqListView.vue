<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				FAQ관리<button
					id="addBmark"
					onclick="addBookmark('FAQ관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>운영관리</li>
				<li>고객운영관리</li>
				<li>FAQ관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>FAQ를 관리하실 수 있습니다.</li>
		</ul>

		<!-- <script type="text/javascript">
			function change() {
				var f = document.Frm;
				f.method = 'post';
				f.action = 'faq_list';
				f.submit();
			}
			//]]>
		</script>

		<script type="text/javascript">
			function reg() {
				location.href = 'faq_reg';
			}

			function del(idx) {
				var f = document.Frm;

				if (confirm('삭제하시겠습니까?')) {
					f.mode.value = 'DEL';
					f.idx.value = idx;
					f.method = 'post';
					f.action = 'faq_act';
					f.submit();
				}
			}

			function setTop10(idx) {
				var f = document.Frm;

				f.mode.value = 'TOP10';
				f.idx.value = idx;
				f.params.value =
					'73636F6E73756C743D5E73776F72643D5E736B65793D5E706167653D31';
				f.method = 'post';
				f.action = 'faq_act';
				f.submit();
			}
			//]]>
		</script> -->

		<form name="Frm" method="post" action="faq_list">
			<input type="hidden" name="mode" />
			<input type="hidden" name="idx" />
			<input
				type="hidden"
				name="params"
				value="73636F6E73756C743D5E73776F72643D5E736B65793D5E706167653D31"
			/>

			<div class="main_content">
				<section class="cont_wrap">
					<table
						border="0"
						cellspacing="0"
						cellpadding="0"
						width="100%"
						class="t_form"
					>
						<caption>
							FAQ 리스트
						</caption>
						<colgroup>
							<col width="160" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>직접검색</th>
								<td>
									<select id="skey" name="skey" style="width: 100px">
										<option value="subject">제목</option>
										<option value="content">내용</option>
									</select>
									<input
										type="text"
										name="sword"
										value=""
										maxlength="50"
										class="text_input w300px mgl5"
									/>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="btn_wrap">
						<button type="submit" class="btn_pri">검색</button>
					</div>
				</section>
				<section class="cont_wrap">
					<table
						border="0"
						cellspacing="0"
						cellpadding="0"
						width="100%"
						class="t_list"
					>
						<caption>
							FAQ 리스트
						</caption>
						<colgroup>
							<col width="50" />
							<col width="150" />
							<col width="*" />
							<col width="80" />
							<col width="60" />
							<col width="60" />
						</colgroup>
						<thead>
							<tr>
								<th>No</th>
								<th>분류</th>
								<th>제목</th>
								<th>등록일</th>
								<th>조회수</th>
								<th>관리</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>9</td>
								<td>아이디/비밀번호찾기</td>
								<td class="left">
									<a
										href="faq_reg?idx=1&amp;73636F6E73756C743D5E73776F72643D5E736B65793D5E706167653D31"
										>아이디 비번은 못찾아요</a
									>
								</td>
								<td>2016-07-06</td>
								<td>58</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(1)">
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>8</td>
								<td>적립금/쿠폰</td>
								<td class="left">
									<a
										href="faq_reg?idx=2&amp;73636F6E73756C743D5E73776F72643D5E736B65793D5E706167653D31"
										>할인쿠폰은 어디서 받을수 있나요?
									</a>
								</td>
								<td>2018-03-09</td>
								<td>40</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(2)">
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>7</td>
								<td>주문결제</td>
								<td class="left">
									<a
										href="faq_reg?idx=3&amp;73636F6E73756C743D5E73776F72643D5E736B65793D5E706167653D31"
										>결제방법을 변경할 수 있나요?</a
									>
								</td>
								<td>2018-03-09</td>
								<td>22</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(3)">
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>6</td>
								<td>회원정보</td>
								<td class="left">
									<a
										href="faq_reg?idx=4&amp;73636F6E73756C743D5E73776F72643D5E736B65793D5E706167653D31"
										>test</a
									>
								</td>
								<td>2018-05-31</td>
								<td>20</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(4)">
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>5</td>
								<td>반품/교환/취소/환불</td>
								<td class="left">
									<a
										href="faq_reg?idx=5&amp;73636F6E73756C743D5E73776F72643D5E736B65793D5E706167653D31"
										>상품 환불 및 배송은 어떻게 진행되나요?</a
									>
								</td>
								<td>2018-12-04</td>
								<td>15</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(5)">
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>4</td>
								<td>회원정보</td>
								<td class="left">
									<a
										href="faq_reg?idx=6&amp;73636F6E73756C743D5E73776F72643D5E736B65793D5E706167653D31"
										>등록 테스트</a
									>
								</td>
								<td>2019-06-24</td>
								<td>6</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(6)">
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>3</td>
								<td>아이디/비밀번호찾기</td>
								<td class="left">
									<a
										href="faq_reg?idx=7&amp;73636F6E73756C743D5E73776F72643D5E736B65793D5E706167653D31"
										>test</a
									>
								</td>
								<td>2019-07-09</td>
								<td>5</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(7)">
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>2</td>
								<td>배송관련</td>
								<td class="left">
									<a
										href="faq_reg?idx=10&amp;73636F6E73756C743D5E73776F72643D5E736B65793D5E706167653D31"
										>서실장_테스트</a
									>
								</td>
								<td>2023-04-19</td>
								<td>4</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(10)">
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>1</td>
								<td>상품문의</td>
								<td class="left">
									<a
										href="faq_reg?idx=8&amp;73636F6E73756C743D5E73776F72643D5E736B65793D5E706167653D31"
										>상품문의 테스트입니다.</a
									>
								</td>
								<td>2020-10-07</td>
								<td>4</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(8)">
										삭제
									</button>
								</td>
							</tr>
						</tbody>
					</table>

					<!-- paging -->
					<div class="paging" style="margin-top: 20px">
						<span
							><a
								href="/nmanager/management/faq_list?page=1&amp;sconsult=&amp;sword=&amp;skey="
								><strong class="active">1</strong></a
							></span
						>
					</div>
					<!-- //paging -->

					<div class="btn_wrap">
						<button type="button" class="btn_pri" onclick="reg()">등록</button>
						<button type="button" class="btn_sec" onclick="cancle()">
							취소
						</button>
					</div>
				</section>
			</div>
		</form>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
