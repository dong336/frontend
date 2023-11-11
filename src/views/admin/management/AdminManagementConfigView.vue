<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				환경설정<button
					id="addBmark"
					onclick="addBookmark('환경설정')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>운영관리</li>
				<li>SMS관리</li>
				<li>환경설정</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>SMS 환경설정을 합니다.</li>
			<li>
				SMS 충전은 아래 버튼을 눌러주세요. 충전을 하실려면 SMS회원가입이 필요
				합니다.
			</li>
			<li>
				SMS 회원가입을 하실려면 원하는 아이디와 비밀번호를 아래의 환경설정에
				입력해 주세요.
			</li>
		</ul>

		<!-- <script type="text/javascript">
			function validSubmit() {
				var f = document.Frm;

				if (getRadio(f.isHumuson) == 'T') {
					if (isEmpty(f.bizID)) {
						alert('휴머스온 ID를 입력해 주세요.');
						f.bizID.focus();
						return false;
					}

					if (isEmpty(f.humusonAuthkey)) {
						alert('휴머스온 키를 입력해 주세요.');
						f.humusonAuthkey.focus();
						return false;
					}

					if (isEmpty(f.shopName)) {
						alert('샵 이름을 입력해 주세요.');
						f.shopName.focus();
						return false;
					}

					if (isEmpty(f.sendNumber)) {
						alert('발송자 휴대폰 번호를 입력해 주세요.');
						f.sendNumber.focus();
						return false;
					}

					if (isEmpty(f.receiveNumber)) {
						alert('관리자 휴대폰 번호를 입력해 주세요.');
						f.receiveNumber.focus();
						return false;
					}
				}

				if (getRadio(f.isMail) == 'T') {
					if (getRadio(f.mailServerType) == 'S') {
						if (isEmpty(f.mailServerIp)) {
							alert('메일 서버 IP를 입력해 주세요.');
							f.mailServerIp.focus();
							return false;
						}

						if (isEmpty(f.mailServerId)) {
							alert('메일 서버 ID를 입력해 주세요.');
							f.mailServerId.focus();
							return false;
						}

						if (isEmpty(f.mailServerPw)) {
							alert('메일 서버 PW를 입력해 주세요.');
							f.mailServerPw.focus();
							return false;
						}
					}
				}

				if (confirm('등록하시겠습니까?')) {
					f.submit();
				}
			}

			function cancel() {
				history.back();
			}

			function checkUseHumuson() {
				if ('T' == $('input[name=isHumuson]:checked').val()) {
					$('*[useHumuson]').show();
				} else {
					$('*[useHumuson]').hide();

					if ('H' == $('input[name=mailServerType]:checked').val()) {
						$(':radio[name="mailServerType"][value="S"]').attr('checked', true);
					}
				}

				checkMail();
			}

			function checkMail() {
				var f = document.Frm;
				_es('bodyMail').display = getRadio(f.isMail) == 'T' ? '' : 'none';

				checkMailAccount();
			}

			function checkMailAccount() {
				var f = document.Frm;
				_es('bodyMailAccount').display =
					getRadio(f.isMail) == 'T' && getRadio(f.mailServerType) == 'S'
						? ''
						: 'none';
			}

			$(function () {
				checkUseHumuson();
			});
			//]]>
		</script> -->

		<form name="Frm" method="post" action="config_act">
			<div class="main_content">
				<section class="cont_wrap">
					<div class="section_head">
						<h4>휴머스온 환경설정</h4>
					</div>
					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_form"
					>
						<caption>
							SMS 설정폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>사용 여부</th>
								<td>
									<div class="label_wrap">
										<label
											><input
												type="radio"
												name="isHumuson"
												value="T"
												onclick="checkUseHumuson()"
												checked=""
											/>사용</label
										>
										<label
											><input
												type="radio"
												name="isHumuson"
												value="F"
												onclick="checkUseHumuson()"
											/>미사용</label
										>
									</div>
								</td>
							</tr>
							<tr usehumuson="">
								<th>휴머스온 ID</th>
								<td>
									<input
										type="text"
										name="bizID"
										value="seobo28@ncgn.co.kr"
										class="text_input"
										style="width: 150px"
										maxlength="25"
									/>
									<a
										href="https://www.tason.com/"
										class="btn_sec sm"
										target="_blink"
										>SMS신청하기</a
									>
									<div class="noti_info">
										“휴머스온”의 SMS 제휴서비스를 이용하시는 고객분은 가입한
										ID를 등록 하시면 됩니다. [SMS신청하기]클릭 후 연동회원
										회원가입을 진행하셔야 합니다.
									</div>
								</td>
							</tr>
							<tr usehumuson="">
								<th>휴머스온 키</th>
								<td>
									<input
										type="text"
										name="humusonAuthkey"
										class="text_input wide"
										maxlength="100"
										value="MV699Q-AWRPDY-Z60HY6-WC01231"
									/>
								</td>
							</tr>
							<tr>
								<th>샵 이름</th>
								<td>
									<input
										type="text"
										name="shopName"
										class="text_input"
										value="몰스토어"
										maxlength="7"
									/>
									<ul class="noti_info">
										<li>샵 이름을 적어 주세요 최대 7글자!</li>
										<li>샵 이름은 발송 SMS 하단에 표시됩니다.</li>
									</ul>
								</td>
							</tr>
							<tr>
								<th>발송자 휴대폰</th>
								<td>
									<input
										type="text"
										name="sendNumber"
										class="text_input"
										value="01021232350"
										maxlength="20"
										onkeypress="blockNotNumber(event)"
										onkeyup="onlyInt(this)"
									/>
									<ul class="noti_info">
										<li>Ex) 0103483724</li>
										<li>
											발송될 때의 받는 사람에게 보여지는 번호를 적어주세요.
										</li>
									</ul>
								</td>
							</tr>
							<tr>
								<th>관리자 휴대폰</th>
								<td>
									<input
										type="text"
										name="receiveNumber"
										class="text_input"
										value="01021232350"
										maxlength="20"
										onkeypress="blockNotNumber(event)"
										onkeyup="onlyInt(this)"
									/>
									<div class="noti_info">
										Ex) 관리자가 메세지 받을 핸드폰 번호
									</div>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="section_head" usehumuson="">
						<h4>SMS 환경설정</h4>
					</div>
					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_form"
						usehumuson=""
					>
						<caption>
							SMS 설정폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>사용 여부</th>
								<td>
									<div class="label_wrap">
										<label
											><input
												type="radio"
												name="isUse"
												value="T"
												checked=""
											/>사용</label
										>
										<label
											><input
												type="radio"
												name="isUse"
												value="F"
											/>미사용</label
										>
									</div>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="section_head" usehumuson="">
						<h4>알림톡 환경설정</h4>
					</div>
					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_form"
						usehumuson=""
					>
						<caption>
							알림톡 설정폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>사용 여부</th>
								<td>
									<div class="label_wrap">
										<label
											><input
												type="radio"
												name="isAlarmtalk"
												value="T"
												checked=""
											/>사용</label
										>
										<label
											><input
												type="radio"
												name="isAlarmtalk"
												value="F"
											/>미사용</label
										>
									</div>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="section_head">
						<h4>메일 환경설정</h4>
					</div>
					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_form"
					>
						<caption>
							메일 설정폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>사용 여부</th>
								<td>
									<div class="label_wrap">
										<label
											><input
												type="radio"
												name="isMail"
												value="T"
												onclick="checkMail()"
												checked=""
											/>사용</label
										>
										<label
											><input
												type="radio"
												name="isMail"
												value="F"
												onclick="checkMail()"
											/>미사용</label
										>
									</div>
								</td>
							</tr>
						</tbody>
						<tbody id="bodyMail" style="">
							<tr>
								<th>메일 서버 타입</th>
								<td>
									<div class="label_wrap">
										<label
											><input
												type="radio"
												name="mailServerType"
												value="S"
												onclick="checkMailAccount()"
												checked=""
											/>외부 서버</label
										>
										<label usehumuson=""
											><input
												type="radio"
												name="mailServerType"
												value="H"
												onclick="checkMailAccount()"
											/>휴머스온</label
										>
									</div>
									<div class="topline pdn">
										<div class="noti_info">
											외부 서버를 사용하시면 메일 관련 정보를 입력하셔야 합니다.
										</div>
									</div>
								</td>
							</tr>
						</tbody>
						<tbody id="bodyMailAccount" style="">
							<tr>
								<th>메일 서버 IP</th>
								<td>
									<input
										type="text"
										name="mailServerIp"
										value="119.205.211.68"
										class="text_input"
										style="width: 250px"
										maxlength="50"
									/>
									<span class="noti_info">메일 서버 IP를 입력해 주세요.</span>
								</td>
							</tr>
							<tr>
								<th>메일 서버 ID</th>
								<td>
									<input
										type="text"
										name="mailServerId"
										value=" test"
										class="text_input"
										style="width: 250px"
										maxlength="50"
									/>
									<span class="noti_info">메일 서버 ID를 입력해 주세요.</span>
								</td>
							</tr>
							<tr>
								<th>메일 서버 PW</th>
								<td>
									<input
										type="password"
										name="mailServerPw"
										value="test"
										class="text_input"
										style="width: 250px"
										maxlength="100"
									/>
									<span class="noti_info">메일 서버 PW를 입력해 주세요.</span>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="btn_wrap">
						<button type="button" class="btn_pri" onclick="validSubmit()">
							확인
						</button>
						<button type="button" class="btn_sec" onclick="cancel()">
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
