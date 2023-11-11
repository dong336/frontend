<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				게시판통합관리<button
					id="addBmark"
					onclick="addBookmark('게시판통합관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>운영관리</li>
				<li>상점운영관리</li>
				<li>게시판통합관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				공지사항 같은 경우는 관리자로그인을 하신 뒤에 일반게시판처럼 글쓰기를
				하시면 됩니다.
			</li>
			<li>
				관리자 로그인을 하시면 모든 게시물의 비밀번호가 자동으로 보여집니다.
				불필요한 게시물은 바로바로 삭제하세요~ ^^
			</li>
		</ul>

		<!-- <script type="text/javascript">
			function reg() {
				location.href = 'board_manage_reg';
			}

			function edit(idx) {
				location.href = 'board_manage_reg?idx=' + idx;
			}

			function del(idx) {
				var f = document.Frm;

				if (confirm('선택한 게시판을 삭제하시겠습니까?')) {
					f.mode.value = 'DEL';
					f.idx.value = idx;
					f.action = 'board_manage_act';
					f.submit();
				}
			}
			//]]>
		</script> -->

		<form name="Frm" method="post">
			<input type="hidden" name="mode" />
			<input type="hidden" name="idx" />

			<div class="main_content">
				<section class="cont_wrap">
					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_list"
					>
						<caption>
							등록된 게시판 리스트
						</caption>
						<colgroup>
							<col width="18%" />
							<col width="23%" />
							<col width="11%" />
							<col width="11%" />
							<col width="*" />
							<col width="70" />
						</colgroup>
						<thead>
							<tr>
								<th>ID</th>
								<th>게시판명</th>
								<th>유형</th>
								<th>게시물수</th>
								<th>링크</th>
								<th>관리</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>notice</td>
								<td>
									<div>공지사항</div>

									<div style="font-size: 11px; color: #ff6666; margin-top: 1px">
										(기본게시판)
									</div>
								</td>
								<td>기본형</td>
								<td>10</td>
								<td class="left">
									<a
										href="/board/list?board=notice"
										target="_blank"
										class="font11"
										>/board/list?board=notice</a
									>
									<br />
								</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="edit(1)">
										수정
									</button>

									<a
										href="/board/list?board=notice"
										class="btn_sec sm mgt5"
										target="_blank"
										>관리</a
									>
								</td>
							</tr>

							<tr>
								<td>mim_notice</td>
								<td>
									<div>입점업체 공지사항</div>

									<div style="font-size: 11px; color: #ff6666; margin-top: 1px">
										(기본게시판)
									</div>
								</td>
								<td>기본형</td>
								<td>25</td>
								<td class="left">
									<a
										href="/board/list?board=mim_notice"
										target="_blank"
										class="font11"
										>/board/list?board=mim_notice</a
									>
									<br />
								</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="edit(2)">
										수정
									</button>

									<a
										href="/board/list?board=mim_notice"
										class="btn_sec sm mgt5"
										target="_blank"
										>관리</a
									>
								</td>
							</tr>

							<tr>
								<td>mim_qna</td>
								<td>
									<div>입점업체 게시판</div>

									<div style="font-size: 11px; color: #ff6666; margin-top: 1px">
										(기본게시판)
									</div>
								</td>
								<td>기본형</td>
								<td>26</td>
								<td class="left">
									<a
										href="/board/list?board=mim_qna"
										target="_blank"
										class="font11"
										>/board/list?board=mim_qna</a
									>
									<br />
								</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="edit(3)">
										수정
									</button>

									<a
										href="/board/list?board=mim_qna"
										class="btn_sec sm mgt5"
										target="_blank"
										>관리</a
									>
								</td>
							</tr>

							<tr>
								<td>mim_pds</td>
								<td>
									<div>입점업체 자료실</div>

									<div style="font-size: 11px; color: #ff6666; margin-top: 1px">
										(기본게시판)
									</div>
								</td>
								<td>자료실형</td>
								<td>6</td>
								<td class="left">
									<a
										href="/board/list?board=mim_pds"
										target="_blank"
										class="font11"
										>/board/list?board=mim_pds</a
									>
									<br />
								</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="edit(4)">
										수정
									</button>

									<a
										href="/board/list?board=mim_pds"
										class="btn_sec sm mgt5"
										target="_blank"
										>관리</a
									>
								</td>
							</tr>

							<tr>
								<td>album</td>
								<td>
									<div>앨범형게시판</div>
								</td>
								<td>앨범형</td>
								<td>10</td>
								<td class="left">
									<a
										href="/board/list?board=album"
										target="_blank"
										class="font11"
										>/board/list?board=album</a
									>
									<br />
								</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="edit(25)">
										수정
									</button>

									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="del(25)"
									>
										삭제
									</button>

									<a
										href="/board/list?board=album"
										class="btn_sec sm mgt5"
										target="_blank"
										>관리</a
									>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="btn_wrap">
						<button type="button" class="btn_pri" onclick="reg()">
							게시판추가
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
