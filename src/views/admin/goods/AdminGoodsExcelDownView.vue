<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				상품정보다운로드<button
					id="addBmark"
					onclick="addBookmark('상품정보다운로드')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>상품관리</li>
				<li>상품정보엑셀작업</li>
				<li>상품정보다운로드</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>업로드 하신 상품 DB를 다운 받으실 수 있습니다.</li>
			<li>
				다운받기를 원하시는 출력항목을 선택하시여 [다운받기]버튼을 클릭해
				주세요.
			</li>
		</ul>

		<!-- <style type="text/css">
			.t_form td .fields {
				border: 0 none;
			}
			.t_form td .fields li {
				float: left;
				width: 20%;
			}
			.t_form td .fields li.nl {
				width: 100%;
				font-size: 0;
				line-height: 0;
			}
		</style> -->

		<!-- <script type="text/javascript" src="/jscript/SelectCategory.js"></script>
		<script type="text/javascript">
			function mouseOver(item) {
				item.style.textDecoration = 'underline';
			}

			function mouseOut(item) {
				item.style.textDecoration = 'none';
			}

			function checkCbListAll() {
				var f = document.Frm;

				if (f.isCheckCbListAll.value != 'T') {
					checkCbAll(f.cbList, true);
					f.isCheckCbListAll.value = 'T';
				} else {
					checkCbAll(f.cbList, false);
					f.isCheckCbListAll.value = 'F';
				}
			}
			//]]>
		</script> -->

		<!-- <script type="text/javascript">
			function validSubmit(mode) {
				var f = document.Frm;

				if (isEmpty(f.scate)) {
					alert('상품분류를 선택해 주세요.');
					return false;
				}

				if (mode == 'preview') {
					f.target = 'ifrmPreview';
					f.action = 'excel_down_preview_ifrm';
				} else {
					f.target = 'frmProc';
					f.action = 'excel_down_excel';
				}
				$('.downloadBtn').html(
					"<strong class='red'>상품정보를 내려 받는 중 입니다.<br />잠시만 기다려주세요.</strong>",
				);
				setTimeout(checkFileDownLoad, 500);
				f.submit();
			}

			function checkFileDownLoad() {
				var value = getCookie('excelDownload');

				if (value != undefined && value == 'complete') {
					setCookie('excelDownload', '', -1);

					$('.downloadBtn').html(
						'<button type="button" class="btn_pri wide" onclick="validSubmit(\'down\')">해당 카테고리 엑셀로 다운받기</button>',
					);
				} else {
					setTimeout(checkFileDownLoad, 1000);
				}
			}
			//]]>
		</script> -->

		<form name="Frm" method="post" target="frmProc" action="excel_down_excel">
			<input type="hidden" name="fields" />
			<input type="hidden" name="isCheckCbListAll" value="F" />

			<div class="main_content">
				<section class="cont_wrap">
					<div class="section_head">
						<h4>출력항목설정</h4>
					</div>

					<table
						cellspacing="0"
						cellpadding="0"
						border="0"
						width="100%"
						class="t_form"
					>
						<caption>
							출력항목 선택 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>상품분류</th>
								<td>
									<input type="hidden" name="scate" value="" />
									<div style="float: left; margin-right: 5px">
										<select
											id="scate_1"
											name="scate_1"
											head="선택"
											depth="1"
											onchange="sc.get(this)"
										>
											<option value="">선택</option>
											<option value="1742">패션의류</option>
											<option value="1831">테마별</option>
											<option value="1837">시즌별</option>
											<option value="1704">화장품</option>
											<option value="1836">뷰티</option>
											<option value="1710">잡화</option>
											<option value="1846">대카테고리 테스트</option>
										</select>
									</div>
									<div style="float: left; margin-right: 5px">
										<select
											id="scate_2"
											name="scate_2"
											head="선택"
											depth="2"
											onchange="sc.get(this)"
										>
											<option value="">선택</option>
										</select>
									</div>
									<div style="float: left; margin-right: 5px">
										<select
											id="scate_3"
											name="scate_3"
											head="선택"
											depth="3"
											onchange="sc.get(this)"
										>
											<option value="">선택</option>
										</select>
									</div>
									<!-- <script type="text/javascript">
										var sc = new SelectCategory();
										sc.init(document.Frm.scate);
										//]]>
									</script> -->
								</td>
							</tr>
						</tbody>
					</table>

					<div class="btn_wrap downloadBtn">
						<button
							type="button"
							class="btn_pri wide"
							onclick="validSubmit('down')"
						>
							해당 카테고리 엑셀로 다운받기
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
