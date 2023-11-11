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
				<li>전시관리</li>
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
				location.href = 'popup_reg';
			}

			function edit(idx) {
				location.href = 'popup_reg?idx=' + idx;
			}

			function del(idx) {
				var f = document.Frm;

				if (confirm('선택한 팝업을 삭제하시겠습니까?')) {
					f.mode.value = 'DEL';
					f.idx.value = idx;
					f.encoding = 'multipart/form-data';
					f.action = 'popup_act';
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
						<h4 class="total">
							총 <strong>5</strong>개의 정보가 등록되어있습니다.
						</h4>
					</div>

					<table
						cellspacing="0"
						cellpadding="0"
						border="0"
						width="100%"
						class="table_col"
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
								<th>No</th>
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
								<td>5</td>
								<td class="txt_left">JH팝업테스트(이동)</td>
								<td style="line-height: 10px">
									2017-08-01<br />~<br />2019-08-31
								</td>
								<td>이동레이어</td>
								<td>이미지</td>
								<td>종료</td>
								<td>400 × 500<br />좌: 0 , 위: 0</td>
								<td>
									<button
										type="button"
										class="btn_sec sm"
										onclick="openPreview(7, '400', '500', '0', '0')"
									>
										미리보기
									</button>
								</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="edit(7)">
										수정
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="del(7)"
									>
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>4</td>
								<td class="txt_left">JH팝업테스트</td>
								<td style="line-height: 10px">
									2017-08-01<br />~<br />2017-08-31
								</td>
								<td>윈도우창</td>
								<td>이미지</td>
								<td>종료</td>
								<td>350 × 600<br />좌: 0 , 위: 0</td>
								<td>
									<button
										type="button"
										class="btn_sec sm"
										onclick="openPreview(6, '350', '600', '0', '0')"
									>
										미리보기
									</button>
								</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="edit(6)">
										수정
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="del(6)"
									>
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>3</td>
								<td class="txt_left">이동팝업1</td>
								<td style="line-height: 10px">
									2016-07-28<br />~<br />2020-12-24
								</td>
								<td>이동레이어</td>
								<td>이미지</td>
								<td>종료</td>
								<td>650 × 340<br />좌: 100 , 위: 100</td>
								<td>
									<button
										type="button"
										class="btn_sec sm"
										onclick="openPreview(5, '650', '340', '100', '100')"
									>
										미리보기
									</button>
								</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="edit(5)">
										수정
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="del(5)"
									>
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>2</td>
								<td class="txt_left">고정팝업1</td>
								<td style="line-height: 10px">
									2016-07-28<br />~<br />2016-08-31
								</td>
								<td>고정레이어</td>
								<td>이미지</td>
								<td>종료</td>
								<td>225 × 358<br />좌: 0 , 위: 0</td>
								<td>
									<button
										type="button"
										class="btn_sec sm"
										onclick="openPreview(4, '225', '358', '0', '0')"
									>
										미리보기
									</button>
								</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="edit(4)">
										수정
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="del(4)"
									>
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>1</td>
								<td class="txt_left">팝업테스트2(김예리)</td>
								<td style="line-height: 10px">
									2017-11-13<br />~<br />2017-11-13
								</td>
								<td>윈도우창</td>
								<td>HTML</td>
								<td>종료</td>
								<td>400 × 320<br />좌: 0 , 위: 0</td>
								<td>
									<button
										type="button"
										class="btn_sec sm"
										onclick="openPreview(1, '400', '320', '0', '0')"
									>
										미리보기
									</button>
								</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="edit(1)">
										수정
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="del(1)"
									>
										삭제
									</button>
								</td>
							</tr>
						</tbody>
						<tbody></tbody>
					</table>

					<div class="btn_wrap">
						<button type="button" class="btn_pri" onclick="reg()">등록</button>
						<button type="button" onclick="cancel()" class="btn_sec">
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

<style></style>
