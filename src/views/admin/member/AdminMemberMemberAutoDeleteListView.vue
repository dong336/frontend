<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				자동탈퇴대상자목록<button
					id="addBmark"
					onclick="addBookmark('자동탈퇴대상자목록')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>회원관리</li>
				<li>회원관리</li>
				<li>자동탈퇴대상자목록</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				사이트 미 접속고객에 대한 자동탈퇴 대상자 목록을 확인할 수 있습니다.
			</li>
			<li>대상자 검색 후 자동탈퇴 안내메일을 발송 할 수 있습니다.</li>
		</ul>

		<!-- <script type="text/javascript">
			function change() {
				var f = document.sFrm;
				f.submit();
			}
			//]]>
		</script>

		<script type="text/javascript" src="/jscript/ezpop.js"></script>
		<script type="text/javascript">
			ezpop.member.bind('detail', '회원정보', function (uno) {
				$.laybox({
					type: 'iframe',
					source: '../member/member_detail_ifrm?uno=' + uno,
				});
			});
			ezpop.member.bind('email', '메일발송', function (uno) {
				openPopup('../member/send_email_pop?uno=' + uno, 'ezEmail', 740, 570);
			});
			ezpop.member.bind('sms', 'SMS전송', function (uno) {
				openPopup(
					'../management/send_sms_direct_pop?uno=' + uno,
					'ezSms',
					80,
					340,
					'scrollbars=yes',
				);
			});

			function sendMail() {
				if ($("*[autowithdrawemaildate='N']").length > 0) {
					document.sFrm.action = 'member_auto_delete_send_mail_act';
					document.sFrm.target = '_self';
					document.sFrm.submit();
				} else {
					alert('자동탈퇴 안내 발송 대상자가 없습니다.');
				}
			}

			function sendSms() {
				if ($("*[autowithdrawsmsdate='N']").length > 0) {
					document.sFrm.action = 'member_auto_delete_send_sms_act';
					document.sFrm.target = '_self';
					document.sFrm.submit();
				} else {
					alert('자동탈퇴 안내 발송 대상자가 없습니다.');
				}
			}

			function del() {
				var msg = '총 0명을 탈퇴처리 하시겠습니까?';
				if (
					$("*[autowithdrawemaildate='N']").length > 0 &&
					$("*[autowithdrawsmsdate='N']").length > 0
				) {
					msg =
						'메일 및 SMS를 보내지 않은 회원이 있습니다.\n탈퇴처리 하시겠습니까?';
				}

				if (confirm(msg)) {
					document.sFrm.action = 'member_auto_delete_act';
					document.sFrm.target = '_self';
					document.sFrm.submit();
				}
			}
			//]]>
		</script> -->
		<form name="sFrm" method="post" action="member_auto_delete_list">
			<div class="main_content">
				<section class="cont_wrap">
					<table
						cellspacing="0"
						cellpadding="0"
						border="0"
						width="100%"
						class="t_form"
					>
						<caption>
							회원 검색 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>알림 여부</th>
								<td>
									<!-- 					"id", "아이디"/"name", "성명"/"email", "이메일" -->

									<div class="label_wrap">
										<label
											><input
												type="radio"
												name="sautowithdraw"
												value="T"
												checked=""
											/>
											알림(메일/ SMS 발송)</label
										>
										<label
											><input type="radio" name="sautowithdraw" value="F" /> 미
											알림</label
										>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="btn_wrap">
						<button type="submit" class="btn_pri">검색</button>
					</div>
				</section>

				<form name="Frm" method="post">
					<input type="hidden" name="page" value="" />
					<input type="hidden" name="psort" value="" />
					<input type="hidden" name="psize" value="" />
					<input
						type="hidden"
						name="params"
						value="736175746F77697468647261773D545E7369746569643D626173655E73746174653D383030"
					/>
					<input type="hidden" name="skey" value="" />
					<input type="hidden" name="sword" value="" />

					<section class="cont_wrap mgt40">
						<table
							border="0"
							cellpadding="0"
							cellspacing="0"
							width="100%"
							class="t_list mgt30"
						>
							<caption>
								상품구매 회원목록
							</caption>
							<colgroup>
								<col width="*" />
								<col width="*" />
								<col width="*" />
								<col width="*" />
								<col width="*" />
								<col width="*" />
							</colgroup>
							<thead>
								<tr>
									<th>아이디</th>
									<th>회원등급</th>
									<th>성명</th>
									<th>최근접속일</th>
									<th>메일 발송</th>
									<th>SMS 발송</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td height="50" colspan="6">검색된 회원이 없습니다.</td>
								</tr>
							</tbody>
						</table>

						<div class="btn_wrap">
							<button type="button" onclick="sendMail()" class="btn_sec">
								메일 발송
							</button>
							<button type="button" onclick="sendSms()" class="btn_sec">
								SMS
							</button>
							<button type="button" onclick="del()" class="btn_pri">
								탈퇴처리
							</button>
						</div>
					</section>
				</form>
			</div>
		</form>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
