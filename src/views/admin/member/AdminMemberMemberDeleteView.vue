<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				탈퇴회원목록<button
					id="addBmark"
					onclick="addBookmark('탈퇴회원목록')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>회원관리</li>
				<li>회원관리</li>
				<li>탈퇴회원목록</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				회원탈퇴처리가 될 경우 해당회원의 아이디와 성명을 남기고 그외 기타
				적립금 및 Wishlist 등 삭제됩니다.
			</li>
		</ul>

		<!-- <script type="text/javascript">
			function changeOption(item) {
				location.href =
					'member_delete?code=' + item.options[item.selectedIndex].value;
			}

			function secession(no) {
				// 탈퇴
				var f = document.Frm;

				if (confirm('선택하신 항목을 탈퇴 처리하시겠습니까?')) {
					f.mode.value = 'SECESSION';
					f.no.value = no;
					f.action = 'member_delete_act';
					f.submit();
				}
			}

			function del(no) {
				// 탈퇴요청 삭제
				var f = document.Frm;

				if (
					confirm('선택하신 항목을 탈퇴 처리하지 않고 바로 삭제하시겠습니까?')
				) {
					f.mode.value = 'DEL';
					f.no.value = no;
					f.action = 'member_delete_act';
					f.submit();
				}
			}

			function erase(no) {
				// 탈퇴완료 항목 삭제
				var f = document.Frm;

				if (confirm('선택하신 항목을 완전 삭제하시겠습니까?')) {
					f.mode.value = 'ERASE';
					f.no.value = no;
					f.action = 'member_delete_act';
					f.submit();
				}
			}
			//]]>
		</script> -->

		<form name="Frm" method="post" action="member_delete">
			<input type="hidden" name="mode" />
			<input type="hidden" name="no" />
			<input type="hidden" name="params" value="636F64653D" />

			<div class="main_content">
				<section class="cont_wrap">
					<div class="section_head">
						<h4>
							전체 정보<span class="total"
								>- 총 <strong>0</strong>개의 정보가 등록되어있습니다.</span
							>
						</h4>
						<div>
							<select id="code" name="code" onchange="changeOption(this);">
								<option value="">전체</option>
								<option value="no">미확인 내역</option>
								<option value="ok">처리된 내역</option>
								<option value="3m">3개월 지난 내역</option>
							</select>
						</div>
					</div>

					<table
						cellpadding="0"
						cellspacing="0"
						border="0"
						width="100%"
						class="t_list"
					>
						<caption>
							탈퇴 회원목록
						</caption>
						<colgroup>
							<col width="70" />
							<col width="130" />
							<col width="*" />
							<col width="80" />
							<col width="80" />
							<col width="120" />
						</colgroup>
						<thead>
							<tr>
								<th>No</th>
								<th>아이디</th>
								<th>불편사항</th>
								<th>등록일</th>
								<th>진행</th>
								<th>관리</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td colspan="6" height="50">등록된 정보가 없습니다.</td>
							</tr>
						</tbody>
					</table>

					<div class="fclear" style="margin-top: 10px">
						<div style="float: right">
							<div
								style="
									float: left;
									width: 15px;
									height: 15px;
									border: 1px solid #ccc;
									background-color: #fff0f8;
								"
							></div>
							<div style="float: left; margin-left: 5px">미확인 내역</div>
							<div
								style="
									float: left;
									width: 15px;
									height: 15px;
									border: 1px solid #ccc;
									background-color: #fff;
									margin-left: 20px;
								"
							></div>
							<div style="float: left; margin-left: 5px">처리된 내역</div>
						</div>
					</div>
					<div class="paging">
						<span></span>
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
