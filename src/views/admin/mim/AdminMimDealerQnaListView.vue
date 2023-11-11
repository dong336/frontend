<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				입점업체 문의하기<button
					id="addBmark"
					onclick="addBookmark('입점업체 문의하기')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>입점업체관리</li>
				<li>입점업체관리</li>
				<li>입점업체 문의하기</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>입점업체에게 궁금한 사항을 질문합니다.</li>
		</ul>

		<!-- <script type="text/javascript">
			function reg() {
				location.href = 'dealer_qna_reg';
			}

			function detail(idx) {
				location.href = 'dealer_qna_reg?idx=' + idx + '&params=706167653D31';
			}

			function delList() {
				var f = document.Frm;
				var items = '';

				if (!f.cbList) return false;

				if (typeof f.cbList.length == 'undefined') {
					if (f.cbList.checked) items = f.cbList.value;
				} else {
					for (var i = 0; i < f.cbList.length; i++) {
						if (f.cbList[i].checked) {
							items += (items ? ',' : '') + f.cbList[i].value;
						}
					}
				}

				if (items == '') {
					alert('삭제할 문의를 선택해 주세요.');
					return false;
				}

				if (confirm('선택하신 입점업체 문의를 삭제하시겠습니까?')) {
					f.mode.value = 'DEL';
					f.idx.value = items;
					f.action = 'dealer_qna_act';
					f.submit();
				}
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form name="Frm" method="post">
					<input type="hidden" name="mode" />
					<input type="hidden" name="idx" />

					<div class="btn_right mgb16">
						<button type="button" class="btn_sec sm" onclick="reg()">
							추가하기
						</button>
						<button type="button" class="btn_sec sm mgl5" onclick="delList()">
							선택삭제
						</button>
					</div>
					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_list"
					>
						<caption>
							입점업체 문의 목록
						</caption>
						<colgroup>
							<col width="50" />
							<col width="60" />
							<col width="150" />
							<col width="*" />
							<col width="120" />
							<col width="100" />
						</colgroup>
						<thead>
							<tr>
								<th>
									<label
										><input
											type="checkbox"
											name="cbListAll"
											onclick="checkCbAll(this.form.cbList, this.checked)"
										/>전체선택</label
									>
								</th>
								<th>No</th>
								<th>업체</th>
								<th>질문내용</th>
								<th>등록일</th>
								<th>답변</th>
							</tr>
						</thead>
						<tbody>
							<tr
								onmouseover="this.style.backgroundColor='#FDFAE8'"
								onmouseout="this.style.backgroundColor='#FFFFFF'"
								bgcolor="#f9f9f9"
							>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="1"
										/>선택</label
									>
								</td>
								<td>1</td>
								<td onclick="detail(1);" style="cursor: pointer">
									mallstoremim
								</td>
								<td class="left" onclick="detail(1);" style="cursor: pointer">
									테스트
								</td>
								<td onclick="detail(1);" style="cursor: pointer">2016-07-11</td>
								<td onclick="detail(1);" style="cursor: pointer">미답변</td>
							</tr>
						</tbody>
					</table>

					<!-- paging -->
					<div class="paging" style="margin-top: 20px">
						<span
							><a href="/nmanager/mim/dealer_qna_list?page=1"
								><strong class="active">1</strong></a
							></span
						>
					</div>
					<!-- //paging -->
				</form>
			</section>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style></style>
