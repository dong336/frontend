<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				주문상담<button
					id="addBmark"
					onclick="addBookmark('주문상담')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>주문/매출관리</li>
				<li>주문관리</li>
				<li>주문상담</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>주문상담 관리 페이지입니다.</li>
		</ul>

		<!-- <script type="text/javascript">
			//<![   [
			function validSearch(f) {
				if (isEmpty(f.skey)) {
					alert('검색 영역을 선택해 주세요.');
					f.skey.focus();
					return false;
				}

				if (isEmpty(f.sword)) {
					alert('검색어를 입력해 주세요.');
					f.sword.focus();
					return false;
				}
			}

			function detail(userNo, orderIdx) {
				location.href =
					'consult_detail?userNo=' +
					userNo +
					'&orderIdx=' +
					orderIdx +
					'&params=';
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form
					name="sFrm"
					method="get"
					action="consult_list"
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
							상품 검색 폼
						</caption>
						<colgroup>
							<col width="160" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>검색</th>
								<td>
									<div class="direct_search">
										<select id="skey" name="skey">
											<option value="">선택</option>
											<option value="ordno">주문번호</option>
											<option value="id">아이디</option>
											<option value="name">주문자명</option>
											<option value="tel">주문자 전화번호</option>
											<option value="mobile">주문자 휴대폰번호</option>
											<option value="email">주문자 이메일</option>
											<option value="goods">상품명</option>
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
			<section class="cont_wrap">
				<div class="section_head">
					<h4 class="total">총 <strong>8</strong>건이 조회 되었습니다.</h4>
				</div>
				<table
					border="0"
					cellpadding="0"
					cellspacing="0"
					width="100%"
					class="t_list"
				>
					<caption>
						주문상담 리스트
					</caption>
					<colgroup>
						<col width="120" />
						<col width="80" />
						<col width="80" />
						<col width="120" />
						<col width="*" />
						<col width="20%" />
						<col width="130" />
					</colgroup>
					<thead>
						<tr>
							<th>아이디</th>
							<th>등급</th>
							<th>이름</th>
							<th>휴대폰번호</th>
							<th>주소</th>
							<th>최근주문상품</th>
							<th>주문일자</th>
						</tr>
					</thead>
					<tbody>
						<tr onclick="detail(148876, 0)" style="cursor: pointer">
							<td>seobo29</td>
							<td>일반회원</td>
							<td>서승보</td>
							<td>010-3136-3730</td>
							<td class="left">&nbsp;</td>
							<td class="left">-</td>
							<td>-</td>
						</tr>

						<tr onclick="detail(148875, 0)" style="cursor: pointer">
							<td>zinys</td>
							<td>일반회원</td>
							<td>박진원</td>
							<td>-</td>
							<td class="left">&nbsp;</td>
							<td class="left">입점업체 상품 테스트_수수료적용 02</td>
							<td>2023-09-05 16:40:56</td>
						</tr>

						<tr onclick="detail(148874, 0)" style="cursor: pointer">
							<td>seobo30</td>
							<td>일반회원</td>
							<td>서승보</td>
							<td>010-3136-3730</td>
							<td class="left">&nbsp;</td>
							<td class="left">입점업체 상품 테스트_수수료적용 02</td>
							<td>2023-09-05 16:12:41</td>
						</tr>

						<tr onclick="detail(148868, 0)" style="cursor: pointer">
							<td>seobo28</td>
							<td>일반회원</td>
							<td>서승보</td>
							<td>010-3136-3730</td>
							<td class="left">서울 중구 수표로2길 28 (필동1가)&nbsp;44</td>
							<td class="left">모던 스타일_sample 018</td>
							<td>2023-09-04 17:51:36</td>
						</tr>

						<tr onclick="detail(148841, 0)" style="cursor: pointer">
							<td>ejji</td>
							<td>일반회원</td>
							<td>신준호</td>
							<td>010-4242-1215</td>
							<td class="left">
								서울 성동구 아차산로17길 48 (성수동2가, 성수 SK V1 CENTER
								I)&nbsp;
							</td>
							<td class="left">-</td>
							<td>-</td>
						</tr>

						<tr onclick="detail(148809, 0)" style="cursor: pointer">
							<td>ncgntest</td>
							<td>일반회원</td>
							<td>박혜선</td>
							<td>-</td>
							<td class="left">&nbsp;</td>
							<td class="left">-</td>
							<td>-</td>
						</tr>

						<tr onclick="detail(148806, 0)" style="cursor: pointer">
							<td>hspark</td>
							<td>일반회원</td>
							<td>박혜선</td>
							<td>-</td>
							<td class="left">&nbsp;</td>
							<td class="left">-</td>
							<td>-</td>
						</tr>

						<tr onclick="detail(148609, 0)" style="cursor: pointer">
							<td>ncgn_kys</td>
							<td>일반회원</td>
							<td>김용세</td>
							<td>-</td>
							<td class="left">&nbsp;</td>
							<td class="left">모던 스타일_sample 003</td>
							<td>2023-06-20 19:23:16</td>
						</tr>
					</tbody>
				</table>

				<!-- paging -->
				<div class="paging" style="margin-top: 20px">
					<span
						><a href="/nmanager/order/consult_list?page=1&amp;sword=&amp;skey="
							><strong class="active">1</strong></a
						></span
					>
				</div>
				<!-- //paging -->
			</section>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style></style>
