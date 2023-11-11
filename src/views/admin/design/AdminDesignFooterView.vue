<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				하단부분관리<button
					id="addBmark"
					onclick="addBookmark('하단부분관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>전시관리</li>
				<li>전체디자인</li>
				<li>하단부분관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				하단 부분의 텍스트 및 각 링크, 배경이미지를 설정할 수 있는 곳입니다.
			</li>
		</ul>

		<!-- 에디터 Script -->
		<!-- <script
			type="text/javascript"
			src="/common/editor/se2/js/HuskyEZCreator.js"
		></script>
		<script type="text/javascript">
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
					f.action = 'footer_act';
					f.submit();
				}
			}

			function reg(idx) {
				location.href =
					'footer_reg' + (typeof idx != 'undefined' ? '?idx=' + idx : '');
			}

			function del(idx) {
				var f = document.Frm;

				if (confirm('삭제시겠습니까?')) {
					f.mode.value = 'DEL';
					f.idx.value = idx;
					f.action = 'footer_act';
					f.submit();
				}
			}

			function changeDisplay(obj) {
				var f = document.Frm;

				f.mode.value = 'CHANGEDISPLAY';
				f.idx.value = obj.value;
				f.action = 'footer_act';
				f.submit();
			}

			function move(direction, idx) {
				var f = document.Frm;
				var mode;

				if (direction == 'UP') mode = 'MOVEUP';
				else mode = 'MOVEDOWN';

				f.mode.value = mode;
				f.idx.value = idx;
				f.action = 'footer_act';
				f.submit();
			}

			function direct(title, linkUrl, linkTarget) {
				var f = document.Frm;

				f.title.value = title;
				f.linkUrl.value = linkUrl;
				f.linkTarget.value = linkTarget;

				f.mode.value = 'REG';
				f.action = 'footer_act';
				f.submit();
			}
			//]]>
		</script> -->

		<div class="main_content">
			<div class="cont_wrap">
				<form name="Frm" method="post" enctype="multipart/form-data">
					<input type="hidden" name="mode" />
					<input type="hidden" name="idx" />

					<input type="hidden" name="method" value="prog" />

					<input type="hidden" name="title" />
					<input type="hidden" name="linkUrl" />
					<input type="hidden" name="linkTarget" />

					<input
						type="hidden"
						name="redirect"
						value="http://javalocal.mallstore.co.kr/WEB-INF/jsp//nmanager/design/footer.jsp"
					/>

					<!-- # HTML : 시작 ###################################################################### -->
					<div id="tb_html"></div>
					<!-- # HTML : 끝 ###################################################################### -->

					<!-- # 프로그램 : 시작 ###################################################################### -->
					<div id="tb_prog">
						<div class="section_head">
							<h4>하단 메뉴</h4>
						</div>

						<table
							border="0"
							cellpadding="0"
							cellspacing="0"
							width="100%"
							class="t_list"
						>
							<caption>
								하단 메뉴 리스트
							</caption>
							<colgroup>
								<col width="30" />
								<col width="50" />
								<col width="150" />
								<col width="150" />
								<col width="*" />
								<col width="60" />
								<col width="130" />
							</colgroup>
							<thead>
								<tr>
									<th>No</th>
									<th>정렬</th>
									<th>제목</th>
									<th>이미지</th>
									<th>경로</th>
									<th>출력</th>
									<th>관리</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>
										<img
											src=""
											onclick="move('DOWN', '4')"
											style="cursor: pointer"
										/><br />
									</td>
									<td>개인정보처리방침</td>
									<td><div class="adjust_image_container">&nbsp;</div></td>
									<td class="left">
										<a href="/etc/privacy" target="_blank">/etc/privacy</a>
									</td>
									<td>
										<label
											><input
												type="checkbox"
												name="display"
												value="4"
												onclick="changeDisplay(this)"
												checked=""
											/>출력</label
										>
									</td>
									<td>
										<div class="btn_wrap">
											<button type="button" class="btn_sec sm" onclick="reg(4)">
												수정
											</button>
											<button type="button" class="btn_sec sm" onclick="del(4)">
												삭제
											</button>
										</div>
									</td>
								</tr>

								<tr>
									<td>2</td>
									<td>
										<img
											src=""
											onclick="move('UP', '1')"
											style="cursor: pointer"
										/><br /><img
											src=""
											onclick="move('DOWN', '1')"
											style="cursor: pointer"
										/><br />
									</td>
									<td>이용안내</td>
									<td><div class="adjust_image_container">&nbsp;</div></td>
									<td class="left">
										<a href="/etc/guide" target="_blank">/etc/guide</a>
									</td>
									<td>
										<label
											><input
												type="checkbox"
												name="display"
												value="1"
												onclick="changeDisplay(this)"
												checked=""
											/>출력</label
										>
									</td>
									<td>
										<div class="btn_wrap">
											<button type="button" class="btn_sec sm" onclick="reg(1)">
												수정
											</button>
											<button type="button" class="btn_sec sm" onclick="del(1)">
												삭제
											</button>
										</div>
									</td>
								</tr>

								<tr>
									<td>3</td>
									<td>
										<img
											src=""
											onclick="move('UP', '9')"
											style="cursor: pointer"
										/><br /><img
											src=""
											onclick="move('DOWN', '9')"
											style="cursor: pointer"
										/><br />
									</td>
									<td>회사소개</td>
									<td><div class="adjust_image_container">&nbsp;</div></td>
									<td class="left">
										<a href="/etc/page?idx=27" target="_blank"
											>/etc/page?idx=27</a
										>
									</td>
									<td>
										<label
											><input
												type="checkbox"
												name="display"
												value="9"
												onclick="changeDisplay(this)"
												checked=""
											/>출력</label
										>
									</td>
									<td>
										<div class="btn_wrap">
											<button type="button" class="btn_sec sm" onclick="reg(9)">
												수정
											</button>
											<button type="button" class="btn_sec sm" onclick="del(9)">
												삭제
											</button>
										</div>
									</td>
								</tr>

								<tr>
									<td>4</td>
									<td>
										<img
											src=""
											onclick="move('UP', '13')"
											style="cursor: pointer"
										/><br /><img
											src=""
											onclick="move('DOWN', '13')"
											style="cursor: pointer"
										/><br />
									</td>
									<td>이용약관</td>
									<td><div class="adjust_image_container">&nbsp;</div></td>
									<td class="left">
										<a href="/etc/licensing" target="_blank">/etc/licensing</a>
									</td>
									<td>
										<label
											><input
												type="checkbox"
												name="display"
												value="13"
												onclick="changeDisplay(this)"
												checked=""
											/>출력</label
										>
									</td>
									<td>
										<div class="btn_wrap">
											<button
												type="button"
												class="btn_sec sm"
												onclick="reg(13)"
											>
												수정
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="del(13)"
											>
												삭제
											</button>
										</div>
									</td>
								</tr>

								<tr>
									<td>5</td>
									<td>
										<img
											src=""
											onclick="move('UP', '2')"
											style="cursor: pointer"
										/><br /><img
											src=""
											onclick="move('DOWN', '2')"
											style="cursor: pointer"
										/><br />
									</td>
									<td>배송/결제안내</td>
									<td><div class="adjust_image_container">&nbsp;</div></td>
									<td class="left">
										<a href="/etc/delivery" target="_blank">/etc/delivery</a>
									</td>
									<td>
										<label
											><input
												type="checkbox"
												name="display"
												value="2"
												onclick="changeDisplay(this)"
												checked=""
											/>출력</label
										>
									</td>
									<td>
										<div class="btn_wrap">
											<button type="button" class="btn_sec sm" onclick="reg(2)">
												수정
											</button>
											<button type="button" class="btn_sec sm" onclick="del(2)">
												삭제
											</button>
										</div>
									</td>
								</tr>

								<tr>
									<td>6</td>
									<td>
										<img
											src=""
											onclick="move('UP', '5')"
											style="cursor: pointer"
										/><br /><img
											src=""
											onclick="move('DOWN', '5')"
											style="cursor: pointer"
										/><br />
									</td>
									<td>입점신청</td>
									<td><div class="adjust_image_container">&nbsp;</div></td>
									<td class="left">
										<a href="/mim/guide" target="_blank">/mim/guide</a>
									</td>
									<td>
										<label
											><input
												type="checkbox"
												name="display"
												value="5"
												onclick="changeDisplay(this)"
												checked=""
											/>출력</label
										>
									</td>
									<td>
										<div class="btn_wrap">
											<button type="button" class="btn_sec sm" onclick="reg(5)">
												수정
											</button>
											<button type="button" class="btn_sec sm" onclick="del(5)">
												삭제
											</button>
										</div>
									</td>
								</tr>

								<tr>
									<td>7</td>
									<td>
										<img
											src=""
											onclick="move('UP', '6')"
											style="cursor: pointer"
										/><br /><img
											src=""
											onclick="move('DOWN', '6')"
											style="cursor: pointer"
										/><br />
									</td>
									<td>제휴문의</td>
									<td><div class="adjust_image_container">&nbsp;</div></td>
									<td class="left">
										<a href="/etc/cooperation" target="_blank"
											>/etc/cooperation</a
										>
									</td>
									<td>
										<label
											><input
												type="checkbox"
												name="display"
												value="6"
												onclick="changeDisplay(this)"
											/>출력</label
										>
									</td>
									<td>
										<div class="btn_wrap">
											<button type="button" class="btn_sec sm" onclick="reg(6)">
												수정
											</button>
											<button type="button" class="btn_sec sm" onclick="del(6)">
												삭제
											</button>
										</div>
									</td>
								</tr>

								<tr>
									<td>8</td>
									<td>
										<img
											src=""
											onclick="move('UP', '7')"
											style="cursor: pointer"
										/><br /><img
											src=""
											onclick="move('DOWN', '7')"
											style="cursor: pointer"
										/><br />
									</td>
									<td>고객센터</td>
									<td><div class="adjust_image_container">&nbsp;</div></td>
									<td class="left">
										<a href="/cscenter" target="_blank">/cscenter</a>
									</td>
									<td>
										<label
											><input
												type="checkbox"
												name="display"
												value="7"
												onclick="changeDisplay(this)"
											/>출력</label
										>
									</td>
									<td>
										<div class="btn_wrap">
											<button type="button" class="btn_sec sm" onclick="reg(7)">
												수정
											</button>
											<button type="button" class="btn_sec sm" onclick="del(7)">
												삭제
											</button>
										</div>
									</td>
								</tr>

								<tr>
									<td>9</td>
									<td>
										<img
											src=""
											onclick="move('UP', '8')"
											style="cursor: pointer"
										/><br /><img
											src=""
											onclick="move('DOWN', '8')"
											style="cursor: pointer"
										/><br />
									</td>
									<td>1:1친절상담</td>
									<td><div class="adjust_image_container">&nbsp;</div></td>
									<td class="left">
										<a href="/cscenter/inquiry" target="_blank"
											>/cscenter/inquiry</a
										>
									</td>
									<td>
										<label
											><input
												type="checkbox"
												name="display"
												value="8"
												onclick="changeDisplay(this)"
											/>출력</label
										>
									</td>
									<td>
										<div class="btn_wrap">
											<button type="button" class="btn_sec sm" onclick="reg(8)">
												수정
											</button>
											<button type="button" class="btn_sec sm" onclick="del(8)">
												삭제
											</button>
										</div>
									</td>
								</tr>

								<tr>
									<td>10</td>
									<td>
										<img
											src=""
											onclick="move('UP', '11')"
											style="cursor: pointer"
										/><br /><img
											src=""
											onclick="move('DOWN', '11')"
											style="cursor: pointer"
										/><br />
									</td>
									<td>입점신청</td>
									<td><div class="adjust_image_container">&nbsp;</div></td>
									<td class="left">
										<a href="/mim/guide" target="_blank">/mim/guide</a>
									</td>
									<td>
										<label
											><input
												type="checkbox"
												name="display"
												value="11"
												onclick="changeDisplay(this)"
											/>출력</label
										>
									</td>
									<td>
										<div class="btn_wrap">
											<button
												type="button"
												class="btn_sec sm"
												onclick="reg(11)"
											>
												수정
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="del(11)"
											>
												삭제
											</button>
										</div>
									</td>
								</tr>

								<tr>
									<td>11</td>
									<td>
										<img
											src=""
											onclick="move('UP', '12')"
											style="cursor: pointer"
										/><br /><img
											src=""
											onclick="move('DOWN', '12')"
											style="cursor: pointer"
										/><br />
									</td>
									<td>입점신청</td>
									<td><div class="adjust_image_container">&nbsp;</div></td>
									<td class="left">
										<a href="/mim/guide" target="_blank">/mim/guide</a>
									</td>
									<td>
										<label
											><input
												type="checkbox"
												name="display"
												value="12"
												onclick="changeDisplay(this)"
											/>출력</label
										>
									</td>
									<td>
										<div class="btn_wrap">
											<button
												type="button"
												class="btn_sec sm"
												onclick="reg(12)"
											>
												수정
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="del(12)"
											>
												삭제
											</button>
										</div>
									</td>
								</tr>

								<tr>
									<td>12</td>
									<td>
										<img
											src=""
											onclick="move('UP', '14')"
											style="cursor: pointer"
										/><br /><img
											src=""
											onclick="move('DOWN', '14')"
											style="cursor: pointer"
										/><br />
									</td>
									<td>마케팅 수집 및 이용동의</td>
									<td><div class="adjust_image_container">&nbsp;</div></td>
									<td class="left">
										<a href="/etc/terms_of_use?code=401" target="_blank"
											>/etc/terms_of_use?code=401</a
										>
									</td>
									<td>
										<label
											><input
												type="checkbox"
												name="display"
												value="14"
												onclick="changeDisplay(this)"
											/>출력</label
										>
									</td>
									<td>
										<div class="btn_wrap">
											<button
												type="button"
												class="btn_sec sm"
												onclick="reg(14)"
											>
												수정
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="del(14)"
											>
												삭제
											</button>
										</div>
									</td>
								</tr>

								<tr>
									<td>13</td>
									<td>
										<img
											src=""
											onclick="move('UP', '19')"
											style="cursor: pointer"
										/><br /><img
											src=""
											onclick="move('DOWN', '19')"
											style="cursor: pointer"
										/><br />
									</td>
									<td>개인정보취급방침</td>
									<td><div class="adjust_image_container">&nbsp;</div></td>
									<td class="left">
										<a href="/etc/privacy" target="_blank">/etc/privacy</a>
									</td>
									<td>
										<label
											><input
												type="checkbox"
												name="display"
												value="19"
												onclick="changeDisplay(this)"
											/>출력</label
										>
									</td>
									<td>
										<div class="btn_wrap">
											<button
												type="button"
												class="btn_sec sm"
												onclick="reg(19)"
											>
												수정
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="del(19)"
											>
												삭제
											</button>
										</div>
									</td>
								</tr>

								<tr>
									<td>14</td>
									<td>
										<img
											src=""
											onclick="move('UP', '20')"
											style="cursor: pointer"
										/><br /><img
											src=""
											onclick="move('DOWN', '20')"
											style="cursor: pointer"
										/><br />
									</td>
									<td>이용안내</td>
									<td><div class="adjust_image_container">&nbsp;</div></td>
									<td class="left">
										<a href="/etc/guide" target="_blank">/etc/guide</a>
									</td>
									<td>
										<label
											><input
												type="checkbox"
												name="display"
												value="20"
												onclick="changeDisplay(this)"
											/>출력</label
										>
									</td>
									<td>
										<div class="btn_wrap">
											<button
												type="button"
												class="btn_sec sm"
												onclick="reg(20)"
											>
												수정
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="del(20)"
											>
												삭제
											</button>
										</div>
									</td>
								</tr>

								<tr>
									<td>15</td>
									<td>
										<img
											src=""
											onclick="move('UP', '21')"
											style="cursor: pointer"
										/><br />
									</td>
									<td>test</td>
									<td><div class="adjust_image_container">&nbsp;</div></td>
									<td class="left">
										<a href="/goods/best" target="_blank">/goods/best</a>
									</td>
									<td>
										<label
											><input
												type="checkbox"
												name="display"
												value="21"
												onclick="changeDisplay(this)"
											/>출력</label
										>
									</td>
									<td>
										<div class="btn_wrap">
											<button
												type="button"
												class="btn_sec sm"
												onclick="reg(21)"
											>
												수정
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="del(21)"
											>
												삭제
											</button>
										</div>
									</td>
								</tr>
							</tbody>
						</table>

						<div class="btn">
							<button type="button" class="btn_pri" onclick="reg()">
								추가하기
							</button>
						</div>

						<div class="mgt20">
							<img src="" alt="TIP" />
						</div>
						<div class="defaultFunc mgb30">
							<strong>기본제공기능 바로넣기</strong>
							<table
								border="0"
								cellpadding="0"
								cellspacing="0"
								width="100%"
								class="t_s_form mgt10"
							>
								<caption>
									기본제공기능 리스트
								</caption>
								<colgroup>
									<col width="200" />
									<col width="*" />
									<col width="130" />
								</colgroup>
								<tbody>
									<tr>
										<th>이용안내</th>
										<td class="url">
											<a href="/etc/guide" target="_blank">/etc/guide</a>
										</td>
										<td>
											<button
												type="button"
												class="btn_sec sm"
												onclick="direct('이용안내', '/etc/guide', '_self')"
											>
												바로등록
											</button>
										</td>
									</tr>
									<tr>
										<th>배송/결제안내</th>
										<td class="url">
											<a href="/etc/delivery" target="_blank">/etc/delivery</a>
										</td>
										<td>
											<button
												type="button"
												class="btn_sec sm"
												onclick="direct('배송/결제안내', '/etc/delivery', '_self')"
											>
												바로등록
											</button>
										</td>
									</tr>
									<tr>
										<th>제휴문의</th>
										<td class="url">
											<a href="/etc/cooperation" target="_blank"
												>/etc/cooperation</a
											>
										</td>
										<td>
											<button
												type="button"
												class="btn_sec sm"
												onclick="direct('제휴문의', '/etc/cooperation', '_self')"
											>
												바로등록
											</button>
										</td>
									</tr>
									<tr>
										<th>이용약관</th>
										<td class="url">
											<a href="/etc/licensing" target="_blank"
												>/etc/licensing</a
											>
										</td>
										<td>
											<button
												type="button"
												class="btn_sec sm"
												onclick="direct('이용약관', '/etc/licensing', '_self')"
											>
												바로등록
											</button>
										</td>
									</tr>
									<tr>
										<th>개인정보처리방침</th>
										<td class="url">
											<a href="/etc/privacy" target="_blank">/etc/privacy</a>
										</td>
										<td>
											<button
												type="button"
												class="btn_sec sm"
												onclick="direct('개인정보처리방침', '/etc/privacy', '_self')"
											>
												바로등록
											</button>
										</td>
									</tr>
									<tr>
										<th>고객센터</th>
										<td class="url">
											<a href="/cscenter" target="_blank">/cscenter</a>
										</td>
										<td>
											<button
												type="button"
												class="btn_sec sm"
												onclick="direct('고객센터', '/cscenter', '_self')"
											>
												바로등록
											</button>
										</td>
									</tr>
									<tr>
										<th>1:1친절상담</th>
										<td class="url">
											<a href="/cscenter/inquiry" target="_blank"
												>/cscenter/inquiry</a
											>
										</td>
										<td>
											<button
												type="button"
												class="btn_sec sm"
												onclick="direct('1:1친절상담', '/cscenter/inquiry', '_self')"
											>
												바로등록
											</button>
										</td>
									</tr>
									<tr>
										<th>회사소개</th>
										<td class="url">
											<a href="/etc/about" target="_blank">/etc/about</a>
										</td>
										<td>
											<button
												type="button"
												class="btn_sec sm"
												onclick="direct('회사소개', '/etc/about', '_self')"
											>
												바로등록
											</button>
										</td>
									</tr>

									<tr>
										<th>입점안내 및 신청</th>
										<td class="url">
											<a href="/mim/guide" target="_blank">/mim/guide</a>
										</td>
										<td>
											<button
												type="button"
												class="btn_sec sm"
												onclick="direct('입점신청', '/mim/guide', '_self')"
											>
												바로등록
											</button>
										</td>
									</tr>
								</tbody>
							</table>

							<p>
								※ 기본제공기능은
								<a href="../setup/config_policy" target="_blank"
									>[관리자-환경설정-상점운영정책]</a
								>에서 수정하실수 있습니다.
							</p>
						</div>

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
										'../design/banner_reg_ifrm?akind=FOOT&area=' +
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
										'../design/banner_reg_ifrm?akind=FOOT&idx=' +
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
										akind: 'FOOT',
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
									'http://javalocal.mallstore.co.kr/main/index?areaCode=F01&preview=',
									'',
									'',
								);
							}

							function realSaveBanner() {
								if (confirm('설정 내역으로 저장하시겠습니까?')) {
									var params = {
										mode: 'REALSAVE',
										akind: 'FOOT',
										area: 'F01',
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
									akind: 'FOOT',
									area: 'F01',
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
							<h4>하단 로고<span>(최대 1개)</span></h4>
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
							area="F01"
							main="0"
							child="0"
							max="1"
						>
							<li>
								<label
									><input type="checkbox" name="cbBanner" value="7" class="cb"
								/></label>
								<div class="mover">
									<div><strong>MOVE</strong></div>
								</div>

								<div class="banner">
									<img
										src="//bootdev.mallstore.co.kr/data/base/banner/47241d9079374997bf6f4ff516019a42.png"
										hover="//bootdev.mallstore.co.kr/data/base/banner/86eea3d579d6466b83e824e254346eb8.png"
										style="margin-left: 36px; margin-top: 46px"
										alt="mallstore_수정"
										ow="126"
										oh="46"
									/>
								</div>

								<div class="caption">
									<p class="ellipsis">
										<a href="" target="_self" class="ellipsis"
											>mallstore_수정</a
										>
									</p>
									<div>
										<button
											type="button"
											class="btn_sec sm"
											onclick="editBanner(7)"
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
			<input type="hidden" name="x_preview_footer" />
		</form>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style></style>
