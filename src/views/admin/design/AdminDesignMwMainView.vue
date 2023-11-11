<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				메인페이지관리<button
					id="addBmark"
					onclick="addBookmark('메인페이지관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>전시관리</li>
				<li>메인페이지관리</li>
				<li>메인페이지관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				메인페이지 및 서브메인페이지의 각종 배너 및 상품소개 단을 조정하셔서
				소호몰메인부터 대형몰메인까지 제작하실 수 있습니다.
			</li>
		</ul>

		<!-- <style type="text/css">
			.list_main {
				width: 100%;
				margin: 0 auto;
			}
			.list_main li {
				margin-bottom: 3px;
				border: 1px solid #e6e6e6;
				background-color: #fff;
				overflow: hidden;
			}
			.list_main li table {
				border-collapse: collapse;
				width: 100%;
				table-layout: fixed;
			}
			.list_main li td {
				position: relative;
				padding: 20px 20px 20px 5px;
				text-align: center;
				word-wrap: break-word;
				border-right: 1px solid #e6e6e6;
			}
			.list_main li td .button {
				float: right;
			}
			.list_main li td .namebox {
				position: relative;
				line-height: 32px;
			}
			.list_main li td .namebox label {
				position: absolute;
				left: 5px;
				top: 50%;
				transform: translateY(-50%);
				font-size: 0;
				line-height: 18px;
			}
			.list_main li td.fixed {
				background-color: #f8f8f8;
			}
			#sortable_main.list_main li td.mover {
				cursor: move;
			}
			#sortable_main.list_main li td.mover:hover {
				background-color: #ada9a6;
				color: #fffaf5;
			}
			#sortable_main.list_main li.current {
				border: 1px solid #336699;
				background-color: #fff;
			}
		</style> -->

		<!-- <script
			type="text/javascript"
			src="/jscript/jquery/jquery-ui-1.10.3.min.js"
		></script>
		<script type="text/javascript">

			function goToDetail(areaKind, idx) {
				location.href =
					'mw_main_page_detail?idx=' +
					idx +
					'&areaKind=' +
					areaKind +
					'&mainType=';
			}

			function add() {
				$.laybox({
					type: 'iframe',
					source: 'mw_main_reg_ifrm',
				});
			}

			function edit(idx) {
				$.laybox({
					type: 'iframe',
					source: 'mw_main_reg_ifrm?idx=' + idx,
				});
			}
			//
			// function changeDisplay(obj) {
			// 	var f = document.Frm;
			// 	var $row = $(obj).closest('li');
			//
			// 	var idx = $row.find('input[name="idxList"]').val();
			// 	var orgVal = $('input[name="orgIsDisplay'+idx+'"]').val();
			//
			// 	if (obj.value == orgVal) {
			// 		return false;
			// 	}
			//
			// 	if (confirm("노출상태를 변경하시겠습니까?")) {
			// 		f.mode.value = "DISPLAY";
			// 		f.idx.value = idx;
			// 		f.isDisplay.value = obj.value;
			// 		f.target = "frmProc";
			// 		f.submit();
			// 	}
			// 	else {
			// 		$('input[name="isDisplay'+idx+'"][value="'+orgVal+'"]').prop('checked', true);
			// 	}
			// }

			function openTab(idx) {
				openPopup(
					'mw_main_tab_pop?main=' + idx,
					'MainTab',
					750,
					650,
					'scrollbars=1',
				);
			}

			function openMovie(idx) {
				$.laybox({
					type: 'iframe',
					source: 'mw_main_movie_ifrm?idx=' + idx,
				});
			}

			function manageGoods(idx) {
				location.href = 'mw_main_goods?main=' + idx;
			}

			function manageBanner(idx) {
				location.href = 'mw_main_banner?main=' + idx;
			}

			function save() {
				var f = document.Frm;
				var items = '';

				if (confirm('설정 내역으로 적용하시겠습니까?')) {
					//노출상태 설정
					var topDisplay = {};
					var mainDisplay = {};
					var mainAreaName = {};
					var items = '';

					$(f.displayChk).each(function () {
						var areaKind = $(this).attr('areaKind');

						if (areaKind === 'MW_MAIN') {
							mainDisplay[$(this).attr('idx')] = $(this).is(':checked')
								? 'T'
								: 'F';
						}
					});

					//타이틀 변경
					$(f.displayChk).each(function () {
						var areaKind = $(this).attr('areaKind');
						if (areaKind === 'MW_MAIN') {
							mainAreaName[$(this).attr('idx')] = $(this)
								.closest('td')
								.find("input[name='areaName']")
								.val();
						}
					});

					$(f.idxList).each(function () {
						items += (items ? ',' : '') + $(this).val();
					});
					console.log(items);
					f.idxs.value = items;

					f.topDisplay.value = JSON.stringify(topDisplay);
					f.mainDisplay.value = JSON.stringify(mainDisplay);
					f.mainAreaName.value = JSON.stringify(mainAreaName);

					f.mode.value = 'MAINMODIFY';
					f.target = 'frmProc';
					f.submit();
				}
			}

			$(function () {
				$('.adjust_image_container').adjustImage();
				$('#sortable_main')
					.sortable({
						handle: '.mover',
						axis: 'y',
						opacity: 0.7,
						start: function (e, ui) {
							ui.item.addClass('current');
						},
						stop: function (e, ui) {
							ui.item.removeClass('current');
						},
					})
					.disableSelection();
			});
			//]]>
		</script> -->

		<!-- <div class="btn" style="margin:0 0 10px"> -->
		<!-- 	<span class="button large black"><button type="button" onClick="save()">저장하기</button></span> -->
		<!-- </div> -->

		<form
			name="Frm"
			method="post"
			action="mw_main_act"
			enctype="multipart/form-data"
		>
			<input type="hidden" name="mode" />
			<input type="hidden" name="idx" />
			<input type="hidden" name="idxs" />
			<input type="hidden" name="isDisplay" />
			<input type="hidden" name="topDisplay" />
			<input type="hidden" name="mainDisplay" />
			<input type="hidden" name="mainAreaName" />

			<div class="main_content">
				<section class="cont_wrap">
					<ul class="list_main">
						<li>
							<table>
								<colgroup>
									<col width="*" />
									<col width="*" />
								</colgroup>
								<tbody>
									<tr>
										<td class="fixed">로고/브랜드/카테고리/GNB</td>
										<td class="fixed">검색</td>
									</tr>
								</tbody>
							</table>
						</li>
					</ul>

					<ul id="sortable_main" class="list_main ui-sortable">
						<li class="">
							<table>
								<colgroup>
									<col width="*" />
								</colgroup>
								<tbody>
									<tr class="movable">
										<td class="mover">
											<div class="namebox">
												<input type="hidden" name="idxList" value="63" />
												<label
													><input
														type="checkbox"
														name="displayChk"
														areakind="MW_MAIN"
														idx="63"
														checked=""
													/>선택</label
												>
												<input type="text" name="areaName" value="비쥬얼" />
												<button
													type="button"
													class="btn_sec md button"
													onclick="goToDetail('MW_MAIN','63')"
												>
													수정
												</button>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</li>

						<li class="">
							<table>
								<colgroup>
									<col width="*" />
								</colgroup>
								<tbody>
									<tr class="movable">
										<td class="mover">
											<div class="namebox">
												<input type="hidden" name="idxList" value="61" />
												<label
													><input
														type="checkbox"
														name="displayChk"
														areakind="MW_MAIN"
														idx="61"
														checked=""
													/>선택</label
												>
												<input type="text" name="areaName" value="브랜드배너" />
												<button
													type="button"
													class="btn_sec md button"
													onclick="goToDetail('MW_MAIN','61')"
												>
													수정
												</button>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</li>

						<li class="">
							<table>
								<colgroup>
									<col width="*" />
								</colgroup>
								<tbody>
									<tr class="movable">
										<td class="mover">
											<div class="namebox">
												<input type="hidden" name="idxList" value="45" />
												<label
													><input
														type="checkbox"
														name="displayChk"
														areakind="MW_MAIN"
														idx="45"
														checked=""
													/>선택</label
												>
												<input type="text" name="areaName" value="베스트상품" />
												<button
													type="button"
													class="btn_sec md button"
													onclick="goToDetail('MW_MAIN','45')"
												>
													수정
												</button>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</li>

						<li class="">
							<table>
								<colgroup>
									<col width="*" />
								</colgroup>
								<tbody>
									<tr class="movable">
										<td class="mover">
											<div class="namebox">
												<input type="hidden" name="idxList" value="66" />
												<label
													><input
														type="checkbox"
														name="displayChk"
														areakind="MW_MAIN"
														idx="66"
														checked=""
													/>선택</label
												>
												<input type="text" name="areaName" value="신제품" />
												<button
													type="button"
													class="btn_sec md button"
													onclick="goToDetail('MW_MAIN','66')"
												>
													수정
												</button>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</li>

						<li class="">
							<table>
								<colgroup>
									<col width="*" />
								</colgroup>
								<tbody>
									<tr class="movable">
										<td class="mover">
											<div class="namebox">
												<input type="hidden" name="idxList" value="44" />
												<label
													><input
														type="checkbox"
														name="displayChk"
														areakind="MW_MAIN"
														idx="44"
														checked=""
													/>선택</label
												>
												<input type="text" name="areaName" value="추천상품" />
												<button
													type="button"
													class="btn_sec md button"
													onclick="goToDetail('MW_MAIN','44')"
												>
													수정
												</button>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</li>

						<li class="">
							<table>
								<colgroup>
									<col width="*" />
								</colgroup>
								<tbody>
									<tr class="movable">
										<td class="mover">
											<div class="namebox">
												<input type="hidden" name="idxList" value="47" />
												<label
													><input
														type="checkbox"
														name="displayChk"
														areakind="MW_MAIN"
														idx="47"
														checked=""
													/>선택</label
												>
												<input type="text" name="areaName" value="배너 1" />
												<button
													type="button"
													class="btn_sec md button"
													onclick="goToDetail('MW_MAIN','47')"
												>
													수정
												</button>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</li>

						<li class="">
							<table>
								<colgroup>
									<col width="*" />
								</colgroup>
								<tbody>
									<tr class="movable">
										<td class="mover">
											<div class="namebox">
												<input type="hidden" name="idxList" value="60" />
												<label
													><input
														type="checkbox"
														name="displayChk"
														areakind="MW_MAIN"
														idx="60"
														checked=""
													/>선택</label
												>
												<input
													type="text"
													name="areaName"
													value="영상으로 보는 트랜드"
												/>
												<button
													type="button"
													class="btn_sec md button"
													onclick="goToDetail('MW_MAIN','60')"
												>
													수정
												</button>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</li>
					</ul>

					<ul class="list_main">
						<li>
							<table>
								<colgroup>
									<col width="*" />
								</colgroup>
								<tbody>
									<tr>
										<td class="fixed">푸터</td>
									</tr>
								</tbody>
							</table>
						</li>
					</ul>
					<div class="btn_wrap">
						<button type="button" onclick="save()" class="btn_pri">
							저장하기
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
