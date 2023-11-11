<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				상품정보고시관리<button
					id="addBmark"
					onclick="addBookmark('상품정보고시관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>전체운영설정</li>
				<li>상품정보고시관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				공정거래위원회에서 공시한 상품별 정보고시 항목 및 내용을 설정합니다.
			</li>
			<li>
				등록한 상품정보고시는 상품 등록/수정시 호출하여 사용할 수 있습니다.
			</li>
		</ul>

		<!-- <script type="text/javascript">
			function reg(idx) {
				location.href = "notify_tpl_reg"+(typeof (idx)!='undefined' ? '?idx='+idx : '');
			}

			function changeUse(obj) {
				var f = document.Frm;

				if (confirm("사용여부를 변경하시겠습니까?")) {
					f.mode.value = "USE";
					f.idx.value = obj.value;
					f.action = "notify_tpl_act";
					f.submit();
				}
				else obj.checked = !obj.checked;
			}

			function delList() {
				var f = document.Frm;
				var items = "";

				if (!f.cbList) return;

				if (typeof(f.cbList.length) == "undefined") {
					if (f.cbList.checked) items = f.cbList.value;
				}
				else {
					for (var i=0; i<f.cbList.length; i++) {
						if (f.cbList[i].checked) items += (items ? "," : "")+f.cbList[i].value;
					}
				}

				if (items == "") {
					alert("삭제하려는 데이터를 선택해주세요.");
					return;
				}

				if (confirm("선택된 데이터를 삭제하시겠습니까?")) {
					f.mode.value = "DEL";
					f.idx.value = items;
					f.action = "notify_tpl_act";
					f.submit();
				}
			}
		</script> -->

		<form name="Frm" method="post">
			<input type="hidden" name="mode" />
			<input type="hidden" name="idx" />
			<div class="main_content">
				<section class="cont_wrap">
					<div class="section_head">
						<h4>상품정보고시관리</h4>
					</div>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_list"
					>
						<caption>
							상품정보고 리스트
						</caption>
						<colgroup>
							<col width="40" />
							<col width="70" />
							<col width="*" />
							<col width="70" />
							<col width="100" />
							<col width="70" />
						</colgroup>
						<thead>
							<tr>
								<th>
									<label>
										<input
											type="checkbox"
											name="cbAll"
											onclick="checkCbAll(this.form.cbList, this.checked)"
										/>전체선택
									</label>
								</th>
								<th>No</th>
								<th>정보고시명</th>
								<th>사용여부</th>
								<th>등록일자</th>
								<th>관리</th>
							</tr>
						</thead>
						<tbody>
							<tr align="center" bgcolor="#FFFFFF">
								<td>
									<label>
										<input type="checkbox" name="cbList" value="1" />선택
									</label>
								</td>
								<td>1</td>
								<td class="left">의류</td>
								<td>
									<label>
										<input
											type="checkbox"
											name="isUse"
											value="1"
											onclick="changeUse(this)"
											checked=""
										/>사용여부
									</label>
								</td>
								<td>2016-06-16</td>
								<td>
									<div class="btn_wrap">
										<button type="button" class="btn_sec sm" onclick="reg(1)">
											수정
										</button>
									</div>
								</td>
							</tr>

							<tr align="center" bgcolor="#FFFFFF">
								<td>
									<label>
										<input type="checkbox" name="cbList" value="3" />선택
									</label>
								</td>
								<td>2</td>
								<td class="left">의약품</td>
								<td>
									<label>
										<input
											type="checkbox"
											name="isUse"
											value="3"
											onclick="changeUse(this)"
											checked=""
										/>사용여부
									</label>
								</td>
								<td>2016-08-24</td>
								<td>
									<div class="btn_wrap">
										<button type="button" class="btn_sec sm" onclick="reg(3)">
											수정
										</button>
									</div>
								</td>
							</tr>

							<tr align="center" bgcolor="#FFFFFF">
								<td>
									<label>
										<input type="checkbox" name="cbList" value="4" />선택
									</label>
								</td>
								<td>3</td>
								<td class="left">전자제품</td>
								<td>
									<label>
										<input
											type="checkbox"
											name="isUse"
											value="4"
											onclick="changeUse(this)"
											checked=""
										/>사용여부
									</label>
								</td>
								<td>2017-08-16</td>
								<td>
									<div class="btn_wrap">
										<button type="button" class="btn_sec sm" onclick="reg(4)">
											수정
										</button>
									</div>
								</td>
							</tr>

							<tr align="center" bgcolor="#FFFFFF">
								<td>
									<label>
										<input type="checkbox" name="cbList" value="14" />선택
									</label>
								</td>
								<td>4</td>
								<td class="left">건강식품</td>
								<td>
									<label>
										<input
											type="checkbox"
											name="isUse"
											value="14"
											onclick="changeUse(this)"
											checked=""
										/>사용여부
									</label>
								</td>
								<td>2021-06-28</td>
								<td>
									<div class="btn_wrap">
										<button type="button" class="btn_sec sm" onclick="reg(14)">
											수정
										</button>
									</div>
								</td>
							</tr>

							<tr align="center" bgcolor="#FFFFFF">
								<td>
									<label>
										<input type="checkbox" name="cbList" value="15" />선택
									</label>
								</td>
								<td>5</td>
								<td class="left">구두/신발</td>
								<td>
									<label>
										<input
											type="checkbox"
											name="isUse"
											value="15"
											onclick="changeUse(this)"
											checked=""
										/>사용여부
									</label>
								</td>
								<td>2023-08-08</td>
								<td>
									<div class="btn_wrap">
										<button type="button" class="btn_sec sm" onclick="reg(15)">
											수정
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>

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
