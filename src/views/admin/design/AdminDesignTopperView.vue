<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				상단부분관리<button
					id="addBmark"
					onclick="addBookmark('상단부분관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>전시관리</li>
				<li>전체디자인</li>
				<li>상단부분관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				상단 부분의 디자인 변경 및 아이콘, 로고 변경등을 하실 수 있습니다.
			</li>
		</ul>

		<!-- 에디터 Script -->
		<!-- <script
			type="text/javascript"
			src="/common/editor/se2/js/HuskyEZCreator.js"
		></script>
		<script type="text/javascript">
			//<![CDATA[
			function checkEditMethod(obj) {
				var f = document.Frm;
				var method;

				if (typeof obj == 'undefined') {
					method = f.method.value;
				} else {
					method = obj.getAttribute('method');
					f.method.value = method;
				}

				if (typeof obj != 'undefined') {
					$(obj).parent().siblings().removeClass('on');
					$(obj).parent().addClass('on');
				}

				$('#tb_html').css('display', 'none');
				$('#tb_prog').css('display', 'none');
				$('#tb_' + method).css('display', 'block');
			}

			function saveMethod() {
				var f = document.Frm;

				if (
					confirm(
						(f.method.value == 'prog' ? '프로그램' : 'HTML') +
							' 설정으로 저장하시겠습니까?',
					)
				) {
					f.mode.value = 'METHOD';
					f.action = 'topper_act';
					f.submit();
				}
			}

			//]]>
		</script> -->

		<div class="main_content">
			<div class="cont_wrap">
				<form name="Frm" method="post">
					<input type="hidden" name="mode" value="" />
					<input type="hidden" name="method" value="prog" />

					<!-- # 프로그램 : 시작 ###################################################################### -->
					<div id="tb_prog">
						<!-- <script
							type="text/javascript"
							src="/jscript/jquery/jquery-ui-1.10.3.min.js"
						></script>
						<script type="text/javascript"> 
							var tmpId = '';

							function cbBannerAll(obj) {
								$(obj)
									.parents('div')
									.first()
									.next()
									.find('input:checkbox[name="cbBanner"]')
									.each(function () {
										this.checked = obj.checked;
									});
							}

							function addBanner(obj) {
								var $ul = $(obj).parents('div').first().next();
								var area = $ul.attr('area');
								var main = $ul.attr('main').toNumeric();
								var child = $ul.attr('child').toNumeric();
								var max = $ul.attr('max').toNumeric();

								if (max > 0 && max <= $ul.children().length) {
									alert(
										'더 이상 추가할 수 없습니다.\n\n최대 ' +
											max +
											'개까지 추가할 수 있습니다.',
									);
									return false;
								}

								$.laybox({
									type: 'iframe',
									source:
										'../design/banner_reg_ifrm?akind=TOP&area=' +
										area +
										(main ? '&main=' + main : '') +
										(child ? '&child=' + child : '') +
										(tmpId ? '&tmpId=' + tmpId : ''),
								});
							}

							function editBanner(idx) {
								$.laybox({
									type: 'iframe',
									source:
										'../design/banner_reg_ifrm?akind=TOP&idx=' +
										idx +
										(tmpId ? '&tmpId=' + tmpId : ''),
								});
							}

							function removeBanner(obj) {
								$(obj)
									.parents('div')
									.first()
									.next()
									.find('input:checkbox[name="cbBanner"]:checked')
									.each(function () {
										$(this).closest('li').remove();
									});
							}

							function getBannerItem(idx, area, main, child, tmp) {
								var $ul = $(
									'ul[area="' +
										area +
										'"][main="' +
										main +
										'"][child="' +
										child +
										'"]',
								);
								if ($ul.length) {
									$.ajax({
										type: 'POST',
										url: '../design/banner_item_ajax',
										data: {
											idx: idx,
											tmpId: tmp,
										},
										error: function (request, status, error) {
											alert(request.responseText);
										},
										success: function (data) {
											var $input = $(
												'input:checkbox[name="cbBanner"][value="' + idx + '"]',
											);
											var $li = $input.length
												? $input.closest('li')
												: $('<li />').appendTo($ul);
											$li.empty();
											$li.html(data);

											$('.banner', $li).adjustImage({
												type: 'both-min',
												parent: '.banner',
											});
											$('.original', $li).laybox();

											$.laybox.close();
										},
									});
								}
							}

							function saveBanner(obj) {
								var $ul = $(obj).parents('div').first().next();
								var banner = '0';

								$ul.find('input:checkbox[name="cbBanner"]').each(function () {
									banner += ',' + this.value;
								});

								if (confirm('설정 내역으로 저장하시겠습니까?')) {
									var params = {
										mode: 'SAVE',
										akind: 'TOP',
										area: $ul.attr('area'),
										main: $ul.attr('main'),
										child: $ul.attr('child'),
										idx: banner,
										tmpId: tmpId,
									};

									$('#FrmBanner').remove();

									var $form = $('<form id="FrmBanner" />')
										.attr({
											method: 'post',
											action: '../design/banner_act',
											target: 'frmProc',
											enctype: 'multipart/form-data',
										})
										.appendTo('body');

									$.each(params, function (key) {
										$('<input type="hidden" name="' + key + '" />')
											.val(this)
											.appendTo($form);
									});
									$form.submit();
								}
							}

							function previewMain() {
								window.open(
									'http://javalocal.mallstore.co.kr/main/index?areaCode=T03&preview=',
									'',
									'',
								);
							}

							function realSaveBanner() {
								if (confirm('설정 내역으로 저장하시겠습니까?')) {
									var params = {
										mode: 'REALSAVE',
										akind: 'TOP',
										area: 'T03',
										main: '0',
										tmpId: tmpId,
									};

									$('#FrmBanner').remove();

									var $form = $('<form id="FrmBanner" />')
										.attr({
											method: 'post',
											action: '../design/banner_act',
											target: 'frmProc',
											enctype: 'multipart/form-data',
										})
										.appendTo('body');

									$.each(params, function (key) {
										$('<input type="hidden" name="' + key + '" />')
											.val(this)
											.appendTo($form);
									});
									$form.submit();
								}
							}

							function cancelBanner() {
								var params = {
									mode: 'CANCEL',
									akind: 'TOP',
									area: 'T03',
									main: '0',
									tmpId: tmpId,
								};

								$('#FrmBanner').remove();

								var $form = $('<form id="FrmBanner" />')
									.attr({
										method: 'post',
										action: '../design/banner_act',
										target: 'frmProc',
										enctype: 'multipart/form-data',
									})
									.appendTo('body');

								$.each(params, function (key) {
									$('<input type="hidden" name="' + key + '" />')
										.val(this)
										.appendTo($form);
								});
								$form.submit();
							}

							$(function () {
								$('.sortable_banner')
									.sortable({
										handle: '.mover',
										opacity: 0.7,
									})
									.disableSelection();
								$('.banner', '.sortable').adjustImage({
									type: 'both-min',
									parent: '.banner',
								});
								$('.original', '.sortable').laybox();
							});
							//]]>
						</script>-->

						<div class="sortable_title">
							<h4>상단 로고<span>(최대 1개)</span></h4>
							<p>
								<span class="mgr5"
									><label
										><input
											type="checkbox"
											name="cbListAll"
											onclick="cbBannerAll(this)"
										/>전체선택</label
									></span
								>
								<button
									type="button"
									class="btn_sec sm"
									onclick="addBanner(this)"
								>
									배너추가
								</button>
								<button
									type="button"
									class="btn_sec sm"
									onclick="removeBanner(this)"
								>
									배너삭제
								</button>
								<button
									type="button"
									class="btn_pri sm"
									onclick="saveBanner(this)"
								>
									저장
								</button>
							</p>
						</div>
						<ul
							class="sortable sortable_banner ui-sortable"
							area="T01"
							main="0"
							child="0"
							max="1"
						>
							<li>
								<label
									><input
										type="checkbox"
										name="cbBanner"
										value="1354"
										class="cb"
								/></label>
								<div class="mover">
									<div><strong>MOVE</strong></div>
								</div>

								<div class="banner">
									<img
										src="//bootdev.mallstore.co.kr/data/base/banner/1c9a9d2e785647ee912e85cf27218e49.png"
										hover="//bootdev.mallstore.co.kr/data/base/banner/e20af28f11b540b6b02825b8b6842a43.png"
										style="margin-left: 36px; margin-top: 46px"
										alt="NCGN"
										ow="126"
										oh="46"
									/>
								</div>

								<div class="caption">
									<p class="ellipsis">
										<a href="" target="_self" class="ellipsis">NCGN</a>
									</p>
									<div>
										<button
											type="button"
											class="btn_sec sm"
											onclick="editBanner(1354)"
										>
											수정
										</button>
									</div>
								</div>
							</li>
						</ul>

						<div class="sortable_title">
							<h4>TOP 배너<span>(최대 1개)</span></h4>
							<p>
								<span class="mgr5"
									><label
										><input
											type="checkbox"
											name="cbListAll"
											onclick="cbBannerAll(this)"
										/>전체선택</label
									></span
								>
								<button
									type="button"
									class="btn_sec sm"
									onclick="addBanner(this)"
								>
									배너추가
								</button>
								<button
									type="button"
									class="btn_sec sm"
									onclick="removeBanner(this)"
								>
									배너삭제
								</button>
								<button
									type="button"
									class="btn_pri sm"
									onclick="saveBanner(this)"
								>
									저장
								</button>
							</p>
						</div>
						<ul
							class="sortable sortable_banner ui-sortable"
							area="T02"
							main="0"
							child="0"
							max="1"
						>
							<li>
								<label
									><input
										type="checkbox"
										name="cbBanner"
										value="1495"
										class="cb"
								/></label>
								<div class="mover">
									<div><strong>MOVE</strong></div>
								</div>

								<div class="banner">
									<a
										href="http://javalocal.mallstore.co.kr/member/join_agree"
										target=""
										><img
											src="//bootdev.mallstore.co.kr/data/base/banner/e88c9965fa364ff29e955c408746405f.png"
											style="margin-left: -851px; margin-top: 29px"
											alt="top banner01"
											ow="1900"
											oh="80"
									/></a>
								</div>

								<div class="caption">
									<p class="ellipsis">
										<a href="/member/join_agree" target="_self" class="ellipsis"
											>top banner01</a
										>
									</p>
									<div>
										<button
											type="button"
											class="btn_sec sm"
											onclick="editBanner(1495)"
										>
											수정
										</button>
									</div>
								</div>
							</li>
						</ul>

						<div class="sortable_title">
							<h4>상단 메뉴</h4>
							<p>
								<span class="mgr5"
									><label
										><input
											type="checkbox"
											name="cbListAll"
											onclick="cbBannerAll(this)"
										/>전체선택</label
									></span
								>
								<button
									type="button"
									class="btn_sec sm"
									onclick="addBanner(this)"
								>
									배너추가
								</button>
								<button
									type="button"
									class="btn_sec sm"
									onclick="removeBanner(this)"
								>
									배너삭제
								</button>
								<button
									type="button"
									class="btn_pri sm"
									onclick="saveBanner(this)"
								>
									저장
								</button>
							</p>
						</div>
						<ul
							class="sortable sortable_banner ui-sortable"
							area="T03"
							main="0"
							child="0"
							max="-1"
						>
							<li>
								<label
									><input
										type="checkbox"
										name="cbBanner"
										value="1253"
										class="cb"
								/></label>
								<div class="mover">
									<div><strong>MOVE</strong></div>
								</div>

								<div class="banner">
									<a
										href="http://javalocal.mallstore.co.kr/goods/best"
										target=""
										><img
											src="//bootdev.mallstore.co.kr/data/base/banner/b68719781bd442e8871400a27a71fdd6.jpg"
											style="margin-left: 75px; margin-top: 55.5px"
											alt="베스트"
											ow="48"
											oh="27"
									/></a>
								</div>

								<div class="caption">
									<p class="ellipsis">
										<a href="/goods/best" target="_self" class="ellipsis"
											>베스트</a
										>
									</p>
									<div>
										<button
											type="button"
											class="btn_sec sm"
											onclick="editBanner(1253)"
										>
											수정
										</button>
									</div>
								</div>
							</li>

							<li>
								<label
									><input
										type="checkbox"
										name="cbBanner"
										value="1266"
										class="cb"
								/></label>
								<div class="mover">
									<div><strong>MOVE</strong></div>
								</div>

								<div class="banner">
									<a href="http://javalocal.mallstore.co.kr/goods/new" target=""
										><img
											src="//bootdev.mallstore.co.kr/data/base/banner/257c4f906ee449e98d81e4935c90cc13.jpg"
											style="margin-left: 74.5px; margin-top: 55.5px"
											alt="신상품"
											ow="49"
											oh="27"
									/></a>
								</div>

								<div class="caption">
									<p class="ellipsis">
										<a href="/goods/new" target="_self" class="ellipsis"
											>신상품</a
										>
									</p>
									<div>
										<button
											type="button"
											class="btn_sec sm"
											onclick="editBanner(1266)"
										>
											수정
										</button>
									</div>
								</div>
							</li>

							<li>
								<label
									><input
										type="checkbox"
										name="cbBanner"
										value="1252"
										class="cb"
								/></label>
								<div class="mover">
									<div><strong>MOVE</strong></div>
								</div>

								<div class="banner">
									<a
										href="http://javalocal.mallstore.co.kr/goods/recommend"
										target=""
										><img
											src="//bootdev.mallstore.co.kr/data/base/banner/21e843aa6524496f900af51deab0a246.jpg"
											style="margin-left: 66.5px; margin-top: 55.5px"
											alt="추천상품"
											ow="65"
											oh="27"
									/></a>
								</div>

								<div class="caption">
									<p class="ellipsis">
										<a href="/goods/recommend" target="_self" class="ellipsis"
											>추천상품</a
										>
									</p>
									<div>
										<button
											type="button"
											class="btn_sec sm"
											onclick="editBanner(1252)"
										>
											수정
										</button>
									</div>
								</div>
							</li>

							<li>
								<label
									><input type="checkbox" name="cbBanner" value="12" class="cb"
								/></label>
								<div class="mover">
									<div><strong>MOVE</strong></div>
								</div>

								<div class="banner">
									<a
										href="http://javalocal.mallstore.co.kr/goods/event_list"
										target=""
										><img
											src="//bootdev.mallstore.co.kr/data/base/banner/dd9f31184150495a9b4322b6d13b4fc9.jpg"
											style="margin-left: 75px; margin-top: 55.5px"
											alt="이벤트"
											ow="48"
											oh="27"
									/></a>
								</div>

								<div class="caption">
									<p class="ellipsis">
										<a href="/goods/event_list" target="_self" class="ellipsis"
											>이벤트</a
										>
									</p>
									<div>
										<button
											type="button"
											class="btn_sec sm"
											onclick="editBanner(12)"
										>
											수정
										</button>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<!-- # 프로그램 : 끝 ###################################################################### -->
				</form>
			</div>
		</div>

		<form
			name="FrmPreview"
			method="post"
			target="_blank"
			action="http://javalocal.mallstore.co.kr/main/index/main_prog"
		>
			<input type="hidden" name="x_preview_topper" />
		</form>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style></style>
