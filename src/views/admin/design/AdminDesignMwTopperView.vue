<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				모바일상단관리<button
					id="addBmark"
					onclick="addBookmark('모바일상단관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>모바일관리</li>
				<li>디자인관리</li>
				<li>모바일상단관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>모바일 상단 부분의 디자인을 설정합니다.</li>
		</ul>

		<div class="main_content">
			<section class="cont_wrap">
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
								'../design/banner_reg_ifrm?akind=MW_TOP&area=' +
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
								'../design/banner_reg_ifrm?akind=MW_TOP&idx=' +
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
								akind: 'MW_TOP',
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
							'http://javalocal.mallstore.co.kr/main/index?areaCode=MWT03&preview=',
							'',
							'',
						);
					}

					function realSaveBanner() {
						if (confirm('설정 내역으로 저장하시겠습니까?')) {
							var params = {
								mode: 'REALSAVE',
								akind: 'MW_TOP',
								area: 'MWT03',
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
							akind: 'MW_TOP',
							area: 'MWT03',
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
				</script> -->

				<div class="sortable_title">
					<h4>모바일 로고<span>(최대 1개)</span></h4>
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
						<button type="button" class="btn_sec sm" onclick="addBanner(this)">
							배너추가
						</button>
						<button
							type="button"
							class="btn_sec sm"
							onclick="removeBanner(this)"
						>
							배너삭제
						</button>
						<button type="button" class="btn_pri sm" onclick="saveBanner(this)">
							저장
						</button>
					</p>
				</div>
				<ul
					class="sortable sortable_banner ui-sortable"
					area="MWT01"
					main="0"
					child="0"
					max="1"
				>
					<li>
						<label
							><input type="checkbox" name="cbBanner" value="1249" class="cb"
						/></label>
						<div class="mover">
							<div><strong>MOVE</strong></div>
						</div>

						<div class="banner">
							<img
								src="//bootdev.mallstore.co.kr/data/base/banner/f5a074b3f63946fd896529c5881913bb.png"
								hover="//bootdev.mallstore.co.kr/data/base/banner/3b4609a708094c9d92e7a54856816c54.png"
								style="margin-left: 36px; margin-top: 46px"
								alt="모바일로고"
								ow="126"
								oh="46"
							/>
						</div>

						<div class="caption">
							<p class="ellipsis">
								<a href="" target="_self" class="ellipsis">모바일로고</a>
							</p>
							<div>
								<button
									type="button"
									class="btn_sec sm"
									onclick="editBanner(1249)"
								>
									수정
								</button>
							</div>
						</div>
					</li>
				</ul>

				<div class="sortable_title">
					<h4>모바일 상단 광고<span>(최대 1개)</span></h4>
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
						<button type="button" class="btn_sec sm" onclick="addBanner(this)">
							배너추가
						</button>
						<button
							type="button"
							class="btn_sec sm"
							onclick="removeBanner(this)"
						>
							배너삭제
						</button>
						<button type="button" class="btn_pri sm" onclick="saveBanner(this)">
							저장
						</button>
					</p>
				</div>
				<ul
					class="sortable sortable_banner ui-sortable"
					area="MWT02"
					main="0"
					child="0"
					max="1"
				>
					<li>
						<label
							><input type="checkbox" name="cbBanner" value="1373" class="cb"
						/></label>
						<div class="mover">
							<div><strong>MOVE</strong></div>
						</div>

						<div class="banner">
							<a
								href="http://javalocal.mallstore.co.kr/mw/board/list?board=eqwe12213"
								target=""
								><img
									src="//bootdev.mallstore.co.kr/data/base/banner/1459db5c832e4692b130ecdef254352c.png"
									hover="//bootdev.mallstore.co.kr/data/base/banner/338ba6a96d224fb99c1ca0e3ad6fce7e.jpg"
									style="margin-left: -851px; margin-top: 29px"
									alt="배너테스트"
									ow="1900"
									oh="80"
							/></a>
						</div>

						<div class="caption">
							<p class="ellipsis">
								<a
									href="/mw/board/list?board=eqwe12213"
									target="_self"
									class="ellipsis"
									>배너테스트</a
								>
							</p>
							<div>
								<button
									type="button"
									class="btn_sec sm"
									onclick="editBanner(1373)"
								>
									수정
								</button>
							</div>
						</div>
					</li>
				</ul>

				<div class="sortable_title">
					<h4>모바일 상단 메뉴<span>(최대 6개)</span></h4>
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
						<button type="button" class="btn_sec sm" onclick="addBanner(this)">
							배너추가
						</button>
						<button
							type="button"
							class="btn_sec sm"
							onclick="removeBanner(this)"
						>
							배너삭제
						</button>
						<button type="button" class="btn_pri sm" onclick="saveBanner(this)">
							저장
						</button>
					</p>
				</div>
				<ul
					class="sortable sortable_banner ui-sortable"
					area="MWT03"
					main="0"
					child="0"
					max="6"
				>
					<li>
						<label
							><input type="checkbox" name="cbBanner" value="1460" class="cb"
						/></label>
						<div class="mover">
							<div><strong>MOVE</strong></div>
						</div>

						<div class="banner">
							<a href="http://javalocal.mallstore.co.kr/mw/goods/best" target=""
								><img
									src="//bootdev.mallstore.co.kr/data/base/banner/c096887ed3ab40be875ad3a7a6428869.png"
									style="margin-left: 80px; margin-top: 62px"
									alt="베스트"
									ow="38"
									oh="14"
							/></a>
						</div>

						<div class="caption">
							<p class="ellipsis">
								<a href="/mw/goods/best" target="_self" class="ellipsis"
									>베스트</a
								>
							</p>
							<div>
								<button
									type="button"
									class="btn_sec sm"
									onclick="editBanner(1460)"
								>
									수정
								</button>
							</div>
						</div>
					</li>

					<li>
						<label
							><input type="checkbox" name="cbBanner" value="1461" class="cb"
						/></label>
						<div class="mover">
							<div><strong>MOVE</strong></div>
						</div>

						<div class="banner">
							<a href="http://javalocal.mallstore.co.kr/mw/goods/new" target=""
								><img
									src="//bootdev.mallstore.co.kr/data/base/banner/933091a326d5431fa23b98d6189168df.png"
									style="margin-left: 80px; margin-top: 62px"
									alt="신상품"
									ow="38"
									oh="14"
							/></a>
						</div>

						<div class="caption">
							<p class="ellipsis">
								<a href="/mw/goods/new" target="_self" class="ellipsis"
									>신상품</a
								>
							</p>
							<div>
								<button
									type="button"
									class="btn_sec sm"
									onclick="editBanner(1461)"
								>
									수정
								</button>
							</div>
						</div>
					</li>

					<li>
						<label
							><input type="checkbox" name="cbBanner" value="1459" class="cb"
						/></label>
						<div class="mover">
							<div><strong>MOVE</strong></div>
						</div>

						<div class="banner">
							<a
								href="http://javalocal.mallstore.co.kr/mw/goods/recommend"
								target=""
								><img
									src="//bootdev.mallstore.co.kr/data/base/banner/9475a3db2f8e4a4db5b09dfda2d78f0e.png"
									style="margin-left: 73px; margin-top: 62px"
									alt="추천상품"
									ow="52"
									oh="14"
							/></a>
						</div>

						<div class="caption">
							<p class="ellipsis">
								<a href="/mw/goods/recommend" target="_self" class="ellipsis"
									>추천상품</a
								>
							</p>
							<div>
								<button
									type="button"
									class="btn_sec sm"
									onclick="editBanner(1459)"
								>
									수정
								</button>
							</div>
						</div>
					</li>

					<li>
						<label
							><input type="checkbox" name="cbBanner" value="1456" class="cb"
						/></label>
						<div class="mover">
							<div><strong>MOVE</strong></div>
						</div>

						<div class="banner">
							<a
								href="http://javalocal.mallstore.co.kr/mw/goods/event_list"
								target=""
								><img
									src="//bootdev.mallstore.co.kr/data/base/banner/a060664498b845e68977d3221b9c0287.png"
									style="margin-left: 80px; margin-top: 62px"
									alt="이벤트"
									ow="38"
									oh="14"
							/></a>
						</div>

						<div class="caption">
							<p class="ellipsis">
								<a href="/mw/goods/event_list" target="_self" class="ellipsis"
									>이벤트</a
								>
							</p>
							<div>
								<button
									type="button"
									class="btn_sec sm"
									onclick="editBanner(1456)"
								>
									수정
								</button>
							</div>
						</div>
					</li>
				</ul>

				<!-- <style type="text/css">
					#sortable_container li {
						margin-bottom: 2px;
						border: 1px solid #e6e6e6;
						overflow: hidden;
					}
					#sortable_container li table {
						border-collapse: collapse;
						width: 100%;
						table-layout: fixed;
					}
					#sortable_container li td {
						padding: 10px 5px;
						text-align: center;
					}
					#sortable_container li td.no {
						background-color: #f5f5f5;
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

				<!-- <script
					type="text/javascript"
					src="/jscript/jquery/jquery-ui-1.10.3.min.js"
				></script>
				<script type="text/javascript">
					function addGnb() {
						$('#htmlGnb').children().clone().appendTo('#sortable_container');

						numbering();
					}

					function removeGnb() {
						var $cb = $('input[name="cbGnb"]:checked');

						if ($cb.length == 0) {
							return false;
						}

						$cb.each(function () {
							$(this).closest('li').remove();
						});

						numbering();
					}

					function numbering() {
						$('.no', '#sortable_container').each(function (index) {
							$(this).text(index + 1);
						});
					}

					function saveGnb() {
						var f = document.FrmGnb;

						var invalid = false;
						$('input[name="title"]', f).each(function () {
							if (isEmpty(this)) {
								alert('명칭을 입력해 주세요.');
								invalid = true;
								return false;
							}
						});
						if (invalid) return false;

						if (confirm('설정하신 GNB를 저장하시겠습니까?')) {
							f.target = 'frmProc';
							f.submit();
						}
					}

					$(function () {
						$('#sortable_container').sortable({
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
						});
					});
					//]]>
				</script> -->

				<ul id="htmlGnb" style="display: none">
					<li>
						<table>
							<colgroup>
								<col width="50" />
								<col width="30" />
								<col width="30%" />
								<col width="*" />
								<col width="40" />
							</colgroup>
							<tbody>
								<tr>
									<td class="no"></td>
									<th>
										<input type="checkbox" name="cbGnb" /><input
											type="hidden"
											name="idx"
											value=""
										/>
									</th>
									<td>
										<input
											type="text"
											name="title"
											value=""
											class="text_input"
											style="width: 95%"
											maxlength="50"
										/>
									</td>
									<td>
										<input
											type="text"
											name="url"
											value=""
											class="text_input"
											style="width: 95%"
											maxlength="150"
										/>
									</td>
									<td class="mover"></td>
								</tr>
							</tbody>
						</table>
					</li>
				</ul>
			</section>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style></style>
