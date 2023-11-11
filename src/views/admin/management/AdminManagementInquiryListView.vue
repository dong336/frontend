<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				1:1문의관리<button
					id="addBmark"
					onclick="addBookmark('1:1문의관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>운영관리</li>
				<li>고객운영관리</li>
				<li>1:1문의관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>1:1문의를 관리하실 수 있습니다.</li>
		</ul>

		<!-- <script type="text/javascript" src="/jscript/calendar/class.js"></script>
		<script type="text/javascript">
			function change() {
				var f = document.sFrm;
				f.submit();
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
				<form
					name="sFrm"
					method="post"
					action="inquiry_list"
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
							검색 영역
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>등록일자</th>
								<td>
									<div class="label_wrap">
										<div class="period_inp">
											<input
												type="text"
												id="sregdts"
												name="sregdts"
												value=""
												maxlength="10"
												class="text_input"
												readonly=""
											/><!-- 
						//--><img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'sregdts', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
										~
										<div class="period_inp">
											<input
												type="text"
												id="sregdte"
												name="sregdte"
												value=""
												maxlength="10"
												class="text_input"
												readonly=""
											/><!-- 
						//--><img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'sregdte', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<th>구분</th>
								<td>
									<div class="label_wrap">
										<label
											><input
												type="radio"
												name="sgbn"
												value=""
												checked=""
											/>전체</label
										>
										<label
											><input
												type="radio"
												name="sgbn"
												value="false"
											/>미답변</label
										>
										<label
											><input
												type="radio"
												name="sgbn"
												value="true"
											/>답변</label
										>
									</div>
								</td>
							</tr>
							<tr>
								<th>직접검색</th>
								<td>
									<div class="direct_search">
										<select id="skey" name="skey">
											<option value="subject">제목</option>
											<option value="content">내용</option>
											<option value="id">아이디</option>
										</select>
										<input
											type="text"
											name="sword"
											value=""
											maxlength="50"
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
					<h4>
						<select id="sconsult" name="sconsult" onchange="change()">
							<option value="">전체</option>
							<option value="01">아이디/비밀번호찾기</option>
							<option value="02">회원정보</option>
							<option value="03">배송관련</option>
							<option value="04">상품문의</option>
							<option value="05">반품/교환/취소/환불</option>
							<option value="06">주문결제</option>
							<option value="07">적립금/쿠폰</option>
							<option value="0">기타</option>
						</select>
					</h4>
				</div>

				<table
					border="0"
					cellspacing="0"
					cellpadding="0"
					width="100%"
					class="t_list"
				>
					<caption>
						등록된 질문 리스트
					</caption>
					<colgroup>
						<col width="50" />
						<col width="150" />
						<col width="*" />
						<col width="100" />
						<col width="80" />
						<col width="80" />
					</colgroup>
					<thead>
						<tr>
							<th>No</th>
							<th>분류</th>
							<th>제목</th>
							<th>글쓴이</th>
							<th>등록일</th>
							<th>답변여부</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>배송관련</td>
							<td class="left">
								<a
									href="inquiry_detail?idx=125&amp;73636F6E73756C743D5E73776F72643D5E736B65793D5E737265676474733D5E737265676474653D5E7367626E3D5E706167653D31"
									>서실장_테스트</a
								>
							</td>
							<td>seobo28</td>
							<td>2023-09-05</td>
							<td>
								<span style="color: red">미답변</span>
							</td>
						</tr>
					</tbody>
				</table>

				<!-- paging -->
				<div class="paging" style="margin-top: 20px">
					<span
						><a
							href="/nmanager/management/inquiry_list?page=1&amp;sconsult=&amp;sword=&amp;skey=&amp;sregdts=&amp;sregdte=&amp;sgbn="
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

<style lang="scss" scoped></style>
