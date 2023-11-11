<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				부운영자관리<button
					id="addBmark"
					onclick="addBookmark('부운영자관리')"
					class="add_bmark active"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>관리자설정</li>
				<li>부운영자관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				부운영자의 아이디를 생성하고, 각각 별도의 권한을 부여할수 있는
				기능입니다.
			</li>
			<li>
				아이디를 클릭하시면 상세페이지를 보실 수 있으며 수정도 가능합니다.
			</li>
		</ul>

		<!-- <script type="text/javascript">
			function reg() {
				location.href = 'manager_reg';
			}

			function edit(no) {
				location.href = 'manager_reg?no=' + no + '&params=5E706167653D31';
			}

			function delList() {
				var f = document.Frm;
				var items = '';

				if (!f.cbList) return false;

				if (typeof f.cbList.length == 'undefined') {
					if (f.cbList.checked) items = f.cbList.value;
				} else {
					for (var i = 0; i < f.cbList.length; i++) {
						if (f.cbList[i].checked)
							items += (items ? ',' : '') + f.cbList[i].value;
					}
				}

				if (items == '') {
					alert('부운영자를 선택해 주세요.');
					return false;
				}

				if (confirm('선택한 부운영자를 삭제하시겠습니까?')) {
					f.mode.value = 'DEL';
					f.no.value = items;
					f.action = 'manager_reg_act';
					f.submit();
				}
			}
			//]]>
		</script> -->

		<form name="Frm" method="post">
			<input type="hidden" name="mode" />
			<input type="hidden" name="no" />
			<input type="hidden" name="params" value="5E706167653D31" />
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
							부운영자 리스트
						</caption>
						<colgroup>
							<col width="40" />
							<col width="*" />
							<col width="10%" />
							<col width="12%" />
							<col width="12%" />
							<col width="11%" />
							<col width="11%" />
							<col width="11%" />
							<col width="11%" />
						</colgroup>
						<thead>
							<tr>
								<th>
									<label>
										<input
											type="checkbox"
											name="cbListAll"
											onclick="checkCbAll(this.form.cbList, this.checked)"
										/>전체선택
									</label>
								</th>
								<th>아이디</th>
								<th>이름</th>
								<th>전화번호</th>
								<th>휴대폰번호</th>
								<th>접속수</th>
								<th>최근접속일</th>
								<th>등록일자</th>
								<th>관리</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<label>
										<input type="checkbox" name="cbList" value="148808" />선택
									</label>
								</td>
								<td>ncgn_test_seo</td>
								<td>서승보</td>
								<td></td>
								<td></td>
								<td>2</td>
								<td>2023-04-10 14:12:02</td>
								<td>2023-04-10 14:09:49</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											onclick="edit(148808)"
											class="btn_sec sm"
										>
											수정
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="paging">
						<span
							><a href="/nmanager/setup/manager_list?page=1"
								><strong class="active">1</strong></a
							></span
						>
					</div>

					<div class="btn_wrap">
						<button type="button" class="btn_pri" onclick="reg()">추가</button>
						<button type="button" onclick="delList()" class="btn_sec">
							선택삭제
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

<style></style>
