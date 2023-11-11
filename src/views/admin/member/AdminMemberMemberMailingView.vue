<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				회원메일발송<button
					id="addBmark"
					onclick="addBookmark('회원메일발송')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>회원관리</li>
				<li>메일발송관리</li>
				<li>회원메일발송</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>회원에게 발송하는 메일의 디자인 및 내용 등을 일괄 관리합니다.</li>
			<li>발송그룹 선택 및 메일폼을 디자인하신 후, 발송하시면 됩니다.</li>
			<li>
				이메일 입력으로 여러명에게 동시에 발송하실 경우 이메일 주소를
				세미콜론(;)으로 구분하여 입력하시면 됩니다.
			</li>
		</ul>

		<!-- 에디터 Script -->
		<!-- <script
			type="text/javascript"
			src="/common/editor/se2/js/HuskyEZCreator.js"
		></script>
		<script type="text/javascript">
			function validSubmit() {
				var f = document.Frm;

				if (isEmpty(f.subject)) {
					alert('제목을 입력해 주세요.');
					f.subject.focus();
					return false;
				}

				if (getRadio(f.group) == '') {
					if (isEmpty(f.email)) {
						alert('이메일을 입력해 주세요.');
						f.email.focus();
						return false;
					}

					var emails = f.email.value.split(';');
					for (var i = 0; i < emails.length; i++) {
						if (emails[i].trim() != '' && !checkEmail(emails[i].trim())) {
							alert(
								'형식에 맞지 않는 이메일 주소가 존재합니다.\n\n이메일 주소를 정확하게 입력해 주세요.',
							);
							f.email.focus();
							return false;
						}
					}
				}

				if (isEmpty(f.content)) {
					alert('내용을 입력해 주세요.');
					return false;
				}

				if (confirm('발송하시겠습니까?')) {
					f.submit();
				}
			}
			//]]>
		</script> -->

		<form name="Frm" method="post" action="member_mailing_act_proc">
			<div class="main_content">
				<section class="cont_wrap">
					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_form"
					>
						<caption>
							메일 보내기 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>제목</th>
								<td>
									<input type="text" name="subject" class="text_input wide" />
								</td>
							</tr>
							<tr>
								<th>보낼그룹</th>
								<td>
									<div class="label_wrap">
										<label
											><input type="radio" name="group" value="total" />회원전체
											(3명)</label
										>
										<label
											><input
												type="radio"
												name="group"
												value="birthday"
											/>금일생일자 (0명)</label
										>
										<label style="width: calc(100% - 238px)"
											><input
												type="radio"
												name="group"
												value=""
												checked="" />이메일 입력<input
												type="text"
												name="email"
												style="width: calc(100% - 70px)"
												class="text_input mgl5"
										/></label>
									</div>
									<div></div>
								</td>
							</tr>
							<tr>
								<th>메일폼사용여부</th>
								<td>
									<label
										><input type="checkbox" name="isForm" value="T" />
										기본메일폼 사용</label
									>
								</td>
							</tr>
						</tbody>
					</table>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_form"
					>
						<tbody>
							<tr>
								<td style="padding: 0px">
									<textarea
										name="content"
										style="width: 100%; height: 350px; display: none"
										id="content-placeholder"
									></textarea
									><iframe
										id="__se2_frame_content-placeholder"
										name="__se2_frame_content-placeholder"
										frameborder="0"
										scrolling="no"
										style="width: 100%; height: 397px"
										src="http://javalocal.mallstore.co.kr/common/editor/se2/SmartEditor2Skin.html"
									></iframe>
								</td>
							</tr>
						</tbody>
					</table>
					<!-- <script type="text/javascript">
						nhn.husky.EZCreator.createInIFrame({
							elPlaceHolder: 'content',
						});
						//]]>
					</script> -->

					<div class="btn_wrap">
						<button type="button" class="btn_pri" onclick="validSubmit()">
							확인
						</button>
						<button type="button" class="btn_sec" onclick="cancle()">
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

<style lang="scss" scoped></style>
