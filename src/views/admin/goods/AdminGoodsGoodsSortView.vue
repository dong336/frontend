<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				상품진열설정<button
					id="addBmark"
					onclick="addBookmark('상품진열설정')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>상품관리</li>
				<li>상품관리</li>
				<li>상품진열설정</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>상품 진열순서를 설정하실 수 있습니다.</li>
			<li>
				순서를 변경하신 후에는 반드시 "<strong class="red">저장</strong>"버튼을
				누르셔야만 설정하신 순서가 실제 반영됩니다.
			</li>
		</ul>

		<!-- <style type="text/css">
			.t_form td select {
				width: 23%;
				height: 100px;
				margin-right: 5px;
			}
			.sortable_wrap {
				position: relative;
				min-height: 300px;
				padding-right: 300px;
				margin-top: 40px;
			}
			.sortable_wrap .none {
				text-align: center;
				margin: 20px 0;
				line-height: 300px;
			}
			.sortable_wrap .none strong {
				color: #cc0000;
			}
			#sortable_container li {
				margin-top: -1px;
				overflow: hidden;
				border-right: solid 1px #ddd;
			}
			#sortable_container li td.mover {
				padding: 0;
				border-right: none;
				cursor: n-resize;
				background: url(../imgs/icon/icon_move.gif) center no-repeat;
			}
			#sortable_container li.current {
				border: 1px solid #336699;
				background-color: #dfdfff;
			}
		</style> -->

		<!-- <script type="text/javascript" src="/jscript/SelectCategory.js"></script>
		<script
			type="text/javascript"
			src="/jscript/jquery/jquery-ui-1.10.3.min.js"
		></script>
		<script type="text/javascript" src="/jscript/Floating.js"></script>
		<script type="text/javascript">
			function validSearch(f) {
				if (isEmpty(f.cate)) {
					alert('카테고리를 선택해 주세요.');
					return false;
				}

				for (var i = 1; i <= CATEGORY_DEPTH; i++) {
					f['cate_' + i].disabled = true;
				}
			}

			function change() {
				location.reload();
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form
					name="sFrm"
					method="get"
					action="goods_sort"
					onsubmit="return validSearch(this)"
				>
					<!-- 검색 폼 : 시작 ###################################################################### -->
					<table width="100%" class="t_form">
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<caption>
							검색 폼
						</caption>
						<tbody>
							<tr>
								<th>상품분류</th>
								<td>
									<input type="hidden" name="cate" value="" />
									<select
										id="cate_1"
										name="cate_1"
										size="4"
										head=":: 1차 분류 ::"
										depth="1"
										onchange="sc.get(this)"
									>
										<option value="">:: 1차 분류 ::</option>
										<option value="1742">패션의류</option>
										<option value="1831">테마별</option>
										<option value="1837">시즌별</option>
										<option value="1704">화장품</option>
										<option value="1836">뷰티</option>
										<option value="1710">잡화</option>
										<option value="1846">대카테고리 테스트</option></select
									><select
										id="cate_2"
										name="cate_2"
										size="4"
										head=":: 2차 분류 ::"
										depth="2"
										onchange="sc.get(this)"
									>
										<option value="">:: 2차 분류 ::</option></select
									><select
										id="cate_3"
										name="cate_3"
										size="4"
										head=":: 3차 분류 ::"
										depth="3"
										onchange="sc.get(this)"
									>
										<option value="">:: 3차 분류 ::</option>
									</select>
									<!-- <script type="text/javascript">
										var sc = new SelectCategory();
										sc.init(document.sFrm.cate);
										//]]>
									</script> -->
								</td>
							</tr>
							<tr>
								<th>제외필터</th>
								<td>
									<div class="label_wrap">
										<label for="filter_no_display"
											><input
												type="checkbox"
												id="filter_no_display"
												name="filterNoDisplay"
												value="1"
											/>미진열 상품 제외</label
										>
										<label for="filter_soldout"
											><input
												type="checkbox"
												id="filter_soldout"
												name="filterSoldOut"
												value="1"
											/>품절 상품 제외</label
										>
									</div>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="btn_wrap">
						<button type="submit" class="btn_pri">검색</button>
					</div>
					<!-- 검색 폼 : 끝 ###################################################################### -->
				</form>
			</section>

			<!-- <script type="text/javascript">
				function moveRow() {
					var f = document.Frm;

					var $row = $('#sortable_container').children();
					var $cb = $('input[name="cbList"]:checked', '#sortable_container');

					if ($cb.length == 0) {
						alert('상품을 선택해 주세요.');
						return false;
					}

					var maxNo = $row.length;
					var batchNo = f.batchNo.value.toNumeric();
					var batchDirection = f.batchDirection.value.toNumeric();

					if (batchNo <= 0) {
						alert('이동 위치 번호를 입력해 주세요.');
						f.batchNo.focus();
						return false;
					}

					if (maxNo < batchNo) {
						alert(
							'이동 위치 번호는 최대 ' + maxNo + ' 까지 설정할 수 있습니다.',
						);
						f.batchNo.focus();
						return false;
					}

					var invalid = false;
					$row.each(function (index) {
						if ($(this).find('input:checkbox').is(':checked')) {
							if (index + 1 == batchNo) {
								alert('선택된 색상으로 이동 위치 번호를 설정할 수 없습니다.');
								invalid = true;
								return false;
							}
						}
					});
					if (invalid) return false;

					var $target = $row.eq(batchNo - 1);
					$cb.each(function (index) {
						var $obj = $(this).closest('li');
						if (batchDirection > 0 || index > 0) {
							$obj.insertAfter($target);
						} else {
							$obj.insertBefore($target);
						}
						$target = $obj;
					});

					numbering();
				}

				function sorting() {
					$('#sortable_container')
						.sortable({
							handle: '.mover',
							axis: 'y',
							opacity: 0.7,
							start: function (e, ui) {
								ui.item.addClass('current');
							},
							stop: function (e, ui) {
								ui.item.removeClass('current');
								numbering();
							},
						})
						.disableSelection();
				}

				function numbering() {
					$('.no', '#sortable_container').each(function (index) {
						$(this).text(index + 1);
					});
				}

				function validSubmit() {
					var f = document.Frm;

					if (confirm('설정하신 진열순서를 저장하시겠습니까?')) {
						$('.wrap-loading').show();
						f.action = 'goods_sort_act';
						f.submit();
					}
				}

				function cancel() {
					location.reload();
				}

				$(function () {
					sorting();

					$('.sortable_control .go button.top').bind('click', function () {
						$('html, body').animate({ scrollTop: 0 }, 150);
					});

					$('.sortable_control .go button.bottom').bind('click', function () {
						$('html, body').animate({ scrollTop: $(document).height() }, 150);
					});

					/* 	var objQuickBar = new Floating();
	objQuickBar.item = $('.sortable_control')[0];
	objQuickBar.time = 15;
	objQuickBar.initTop = 0;
	objQuickBar.fixTop = 0;
	objQuickBar.marginSide = 10;
	objQuickBar.init();
	objQuickBar.run(); */
				});
				//]]>
			</script> -->

			<section class="cont_wrap mgt40">
				<form name="Frm" method="post">
					<input
						type="hidden"
						name="params"
						value="636174653D305E66696C7465724E6F446973706C61793D305E66696C746572536F6C644F75743D30"
					/>

					<div class="sortable_wrap">
						<div class="none">
							<strong>상단의 상품분류를 선택해 주세요.</strong>
						</div>
					</div>
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
