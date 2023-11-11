<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				이모티콘관리<button
					id="addBmark"
					onclick="addBookmark('이모티콘관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>운영관리</li>
				<li>SMS관리</li>
				<li>이모티콘관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>SMS 이모티콘관리를 합니다.</li>
		</ul>

		<!-- <script type="text/javascript" src="sms_func.js"></script>
		<script type="text/javascript">
			function reg() {
				location.href = 'emoticon_manage_reg';
			}

			function del(obj) {
				var f = document.Frm;

				if (confirm('삭제하시겠습니까?')) {
					$(obj)
						.parent()
						.parent()
						.parent()
						.siblings()
						.find('input[name="idx"]')
						.prop('disabled', true);

					f.mode.value = 'DEL';
					f.submit();
				}
			}

			function validSubmit() {
				var f = document.Frm;

				var invalid = false;
				$('textarea[name="content"]', 'form[name="Frm"]').each(function () {
					if (isEmpty(this)) {
						alert('문구를 입력해 주세요.');
						this.focus();
						invalid = true;
						return false;
					}
				});
				if (invalid) return false;

				if (confirm('등록하시겠습니까?')) {
					f.mode.value = 'EDIT';
					f.submit();
				}
			}

			function cancel() {
				location.reload();
			}

			$(function () {
				$('textarea[name="content"]', 'form[name="Frm"]').each(function () {
					var byteInfo = getSmsByte($(this).val(), 80);
					$(this)
						.parent()
						.parent()
						.find('input[name="bytes"]')
						.val(byteInfo.size);
				});
			});
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form name="Frm" method="post" action="emoticon_manage_act">
					<input type="hidden" name="mode" />

					<div class="section_head">
						<h4>SMS 이모티콘 관리</h4>
						<button type="button" class="btn_sec md" onclick="reg()">
							추가하기
						</button>
					</div>

					<div class="tip_box2">
						<strong class="blue">주의사항</strong><br />
						<span
							>내용 입력시 80 Bytes 이상 적으시면 발송이 안됩니다. 참고하시기
							바랍니다.</span
						><br />
						<span>도움문구는 다음과 같습니다.</span><br />
						<span style="background: none; padding-left: 10px"
							>[NAME] : 회원이름, [SHOPNAME] : 상점명, [ORDERNUMBER] :
							주문번호</span
						><br />
						<span style="background: none; padding-left: 10px"
							>[NAME] 회원 정보가 없을 경우 '회원' 보이게 함, [DATE] 날짜</span
						><br />
					</div>

					<ul class="smsview_wrap mgt40">
						<li>
							<input type="hidden" name="idx" value="70" />
							<ul class="smsviewNew">
								<li class="tc ellipsis"></li>
								<li class="contbox mgt5">
									<textarea
										name="content"
										cols="16"
										rows="5"
										onkeyup="checkSmsContent(this)"
										onchange="checkSmsContent(this)"
									>
서실장 테스트▣◐◐◐◐◐⊙♣♣♣♣</textarea
									>
								</li>
								<li class="byte">
									<p>
										<input
											type="hidden"
											name="bytes"
											style="
												width: 20px;
												text-align: right;
												border: 0;
												font-size: 11px;
												font-style: verdana;
											"
											value="35"
											readonly=""
										/>
									</p>
								</li>
								<li class="mgt5 tc">
									<button type="button" class="btn_sec md" onclick="del(this)">
										삭제
									</button>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="71" />
							<ul class="smsviewNew">
								<li class="tc ellipsis"></li>
								<li class="contbox mgt5">
									<textarea
										name="content"
										cols="16"
										rows="5"
										onkeyup="checkSmsContent(this)"
										onchange="checkSmsContent(this)"
									>
sdfsd21</textarea
									>
								</li>
								<li class="byte">
									<p>
										<input
											type="hidden"
											name="bytes"
											style="
												width: 20px;
												text-align: right;
												border: 0;
												font-size: 11px;
												font-style: verdana;
											"
											value="7"
											readonly=""
										/>
									</p>
								</li>
								<li class="mgt5 tc">
									<button type="button" class="btn_sec md" onclick="del(this)">
										삭제
									</button>
								</li>
							</ul>
						</li>
					</ul>

					<div class="btn_wrap">
						<button type="button" class="btn_pri" onclick="validSubmit()">
							확인
						</button>
						<button type="button" class="btn_sec" onclick="cancel()">
							취소
						</button>
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

<style lang="scss" scoped></style>
