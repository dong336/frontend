<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				팝업관리<button
					id="addBmark"
					onclick="addBookmark('팝업관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>모바일관리</li>
				<li>기타</li>
				<li>팝업관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				쇼핑몰의 공지 및 이벤트에서 활용할 수 있는 팝업창을 간단하게 제작하는
				툴입니다.
			</li>
		</ul>

		<!-- <script type="text/javascript">
			function reg() {
				location.href = 'mw_popup_reg';
			}

			function edit(idx) {
				location.href = 'mw_popup_reg?idx=' + idx;
			}

			function del(idx) {
				var f = document.Frm;

				if (confirm('선택한 팝업을 삭제하시겠습니까?')) {
					f.mode.value = 'DEL';
					f.idx.value = idx;
					f.encoding = 'multipart/form-data';
					f.action = 'mw_popup_act';
					f.submit();
				}
			}

			function openPreview(idx, width, height, x, y) {
				width = width.toNumeric();
				height = height.toNumeric();
				x = x.toNumeric();
				y = y.toNumeric();

				openPopup(
					'../../common/popup?idx=' + idx,
					'Preview' + idx,
					width,
					height,
					'left=' + x + ', top=' + y,
				);
			}
			//]]>
		</script> -->

		<form name="Frm" method="post">
			<input type="hidden" name="mode" />
			<input type="hidden" name="idx" />

			<div class="main_content">
				<section class="cont_wrap">
					<div class="section_head">
						<h4>
							총 <span><strong>1</strong></span
							>개의 정보가 등록되어있습니다.
						</h4>
					</div>

					<table
						cellspacing="0"
						cellpadding="0"
						border="0"
						width="100%"
						class="t_list"
					>
						<caption>
							등록된 팝업 리스트
						</caption>
						<colgroup>
							<col width="40" />
							<col width="*" />
							<col width="90" />
							<col width="80" />
							<col width="70" />
							<col width="70" />
							<col width="120" />
							<col width="100" />
							<col width="60" />
						</colgroup>
						<thead>
							<tr>
								<th>번호</th>
								<th>제목</th>
								<th>기간</th>
								<th>종류</th>
								<th>입력방법</th>
								<th>진행</th>
								<th>크기 및 위치</th>
								<th>팝업보기</th>
								<th>관리</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>11</td>
								<td>test1</td>
								<td style="line-height: 10px">
									2023-07-19<br />~<br />2023-08-18
								</td>
								<td>고정레이어</td>
								<td>HTML</td>
								<td>종료</td>
								<td>300 × 500<br />좌: 50 , 위: 50</td>
								<td>
									<button
										type="button"
										class="btn_sec sm"
										onclick="openPreview(11, '300', '500', '50', '50')"
									>
										미리보기
									</button>
								</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="edit(11)">
										수정
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="del(11)"
									>
										삭제
									</button>
								</td>
							</tr>
						</tbody>
						<tbody></tbody>
					</table>

					<div class="btn">
						<button type="button" onclick="reg()" class="btn_pri">등록</button>
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
