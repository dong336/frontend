<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				회원등급관리<button
					id="addBmark"
					onclick="addBookmark('회원등급관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>전체운영설정</li>
				<li>회원등급관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>회원별 권한을 설정할수 있는 메뉴 입니다.</li>
			<li>기본등급은 삭제가 되지 않습니다.</li>
		</ul>

		<!-- <script type="text/javascript">
			function regist() {
				location.href = 'member_level_reg';
			}

			function edit(idx) {
				location.href = 'member_level_reg?idx=' + idx;
			}

			function delList() {
				var f = document.Frm;
				var items = '';

				if (!f.cbList) return;

				if (typeof f.cbList.length == 'undefined') {
					if (f.cbList.checked) items = f.cbList.value;
				} else {
					for (var i = 0; i < f.cbList.length; i++) {
						if (f.cbList[i].checked)
							items += (items ? ',' : '') + f.cbList[i].value;
					}
				}

				if (items == '') {
					alert('삭제하려는 데이터를 선택해주세요.');
					return;
				}

				if (
					confirm(
						'선택된 데이터를 삭제하시겠습니까?\n(현재 사용되는 회원등급은 삭제되지 않습니다.)',
					)
				) {
					f.mode.value = 'DEL';
					f.idx.value = items;
					f.encoding = 'multipart/form-data';
					f.action = 'member_level_act';
					f.submit();
				}
			}

			$(function () {
				$('.adjust_image_container').adjustImage({
					realtime: true,
				});
			});
			//]]>
		</script> -->

		<form name="Frm" method="post">
			<input type="hidden" name="mode" />
			<input type="hidden" name="idx" />

			<div class="main_content">
				<section class="cont_wrap">
					<div class="section_head">
						<h4>회원등급관리</h4>
					</div>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_list"
					>
						<caption>
							회원등급 리스트
						</caption>
						<colgroup>
							<col width="40" />
							<col width="8%" />
							<col width="13%" />
							<col width="*" />
							<col width="15%" />
							<col width="20%" />
							<col width="10%" />
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
								<th>등급</th>
								<th>등급명</th>
								<th>이미지</th>
								<th>할인율</th>
								<th>적립률</th>
								<th>관리</th>
							</tr>
						</thead>
						<tbody>
							<tr
								onmouseover="this.style.backgroundColor='#F8F8F8'"
								onmouseout="this.style.backgroundColor='#FFFFFF'"
								style="background-color: rgb(255, 255, 255)"
							>
								<td>
									<label>
										<input
											type="checkbox"
											name="cbList"
											value="11"
											disabled=""
										/>선택
									</label>
								</td>
								<td>1등급</td>
								<td>일반회원</td>
								<td>
									<div class="adjust_image_container">
										<img
											src="//bootdev.mallstore.co.kr/data/base/icon/b5fd58ef98474c70b018b0efc194374f.png"
										/>
									</div>
								</td>
								<td align="right">0 %</td>
								<td align="right">미지급</td>
								<td>
									<div class="btn_wrap">
										<button type="button" class="btn_sec sm" onclick="edit(11)">
											상세정보
										</button>
									</div>
								</td>
							</tr>

							<tr
								onmouseover="this.style.backgroundColor='#F8F8F8'"
								onmouseout="this.style.backgroundColor='#FFFFFF'"
								style="background-color: rgb(255, 255, 255)"
							>
								<td>
									<label>
										<input type="checkbox" name="cbList" value="13" />선택
									</label>
								</td>
								<td>2등급</td>
								<td>임직원회원</td>
								<td>
									<div class="adjust_image_container">
										<img
											src="//bootdev.mallstore.co.kr/data/base/icon/66fbeb8a056f4746bffb7f664ab8f611.png"
											ow="95"
											oh="48"
										/>
									</div>
								</td>
								<td align="right">5 %</td>
								<td align="right">판매가의 5 %</td>
								<td>
									<div class="btn_wrap">
										<button type="button" class="btn_sec sm" onclick="edit(13)">
											상세정보
										</button>
									</div>
								</td>
							</tr>

							<tr
								onmouseover="this.style.backgroundColor='#F8F8F8'"
								onmouseout="this.style.backgroundColor='#FFFFFF'"
								style="background-color: rgb(255, 255, 255)"
							>
								<td>
									<label>
										<input type="checkbox" name="cbList" value="120" />선택
									</label>
								</td>
								<td>3등급</td>
								<td>에이전시회원</td>
								<td>
									<div class="adjust_image_container">
										<img
											src="//bootdev.mallstore.co.kr/data/base/icon/4221a950aa3144a9b88eec07a9a8ef22.png"
											ow="1494"
											oh="1020"
											style="width: 282px; height: auto"
										/>
									</div>
								</td>
								<td align="right">10 %</td>
								<td align="right">결제가의 10 %</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_sec sm"
											onclick="edit(120)"
										>
											상세정보
										</button>
									</div>
								</td>
							</tr>

							<tr
								onmouseover="this.style.backgroundColor='#F8F8F8'"
								onmouseout="this.style.backgroundColor='#FFFFFF'"
							>
								<td>
									<label>
										<input type="checkbox" name="cbList" value="121" />선택
									</label>
								</td>
								<td>4등급</td>
								<td>VIP회원</td>
								<td><div class="adjust_image_container"></div></td>
								<td align="right">15 %</td>
								<td align="right">판매가의 15 %</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_sec sm"
											onclick="edit(121)"
										>
											상세정보
										</button>
									</div>
								</td>
							</tr>

							<tr
								onmouseover="this.style.backgroundColor='#F8F8F8'"
								onmouseout="this.style.backgroundColor='#FFFFFF'"
							>
								<td>
									<label>
										<input type="checkbox" name="cbList" value="123" />선택
									</label>
								</td>
								<td>10등급</td>
								<td>임직원회원</td>
								<td><div class="adjust_image_container"></div></td>
								<td align="right">2 %</td>
								<td align="right">미지급</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_sec sm"
											onclick="edit(123)"
										>
											상세정보
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="btn_wrap">
						<button type="button" class="btn_pri" onclick="regist()">
							등록
						</button>
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
