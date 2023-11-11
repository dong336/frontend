<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				메세지보내기<button
					id="addBmark"
					onclick="addBookmark('메세지보내기')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>운영관리</li>
				<li>SMS관리</li>
				<li>메세지보내기</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>SMS 메세지를 보낼수 있습니다.</li>
		</ul>

		<!-- <script type="text/javascript" src="/jscript/calendar/class.js"></script>
		<script type="text/javascript" src="sms_func.js"></script>
		<script type="text/javascript">
			// 자동발송 문구 가져오기
			function changeMent(obj) {
				$.ajax({
					type: 'POST',
					url: 'ment_ajax',
					dataType: 'json',
					data: { idx: obj.options[obj.selectedIndex].value },
					error: function (request, status, error) {
						alert(request.responseText);
					},
					success: function (data) {
						var f = document.Frm;
						f.content.value = data.content;
						checkSmsContent(f.content);
					},
				});
			}

			// 이모티콘
			function openEmoticon() {
				openPopup(
					'emoticon_pop',
					'Emoticon',
					800,
					500,
					'left=300, top=200, scrollbars=1',
				);
			}

			function openMemberList(e) {
				switchSmsLayer(e, 'layerMember');

				if ($('#layerMember').css('display') != 'none') {
					$('#layerMember').css('display', '');
					$('#ifrmMember').src = 'search_member_list_ifrm';
				}
			}

			function insReceiveNumber(value) {
				var f = document.Frm;

				var objNumber = f.receiveNumber;
				if (objNumber.value.indexOf(value) >= 0) {
					alert('이미 선택한 번호입니다.');
					return;
				} else {
					objNumber.value = objNumber.value
						? objNumber.value + '\n' + value
						: value;
				}
			}

			function insSmsContent(value) {
				var f = document.Frm;
				f.content.value = value;
				checkSmsContent(f.content);
			}

			/* function checkReserved() {
	var f = document.Frm;

	if (getRadio(f.reservedFlag) == "true") {
		$('#reserved_time').css({display: 'block'});
	}
	else {
		$('#reserved_time').css({display: 'none'});
	}
} */

			function validSubmit() {
				var f = document.Frm;

				if (isEmpty(f.content)) {
					alert('메세지를 입력해 주세요.');
					f.content.focus();
					return false;
				}

				//if (getRadio(f.sendType) == "1") {
				if (isEmpty(f.receiveNumber)) {
					alert('핸드폰번호를 입력해 주세요.');
					f.receiveNumber.focus();
					return false;
				}
				//}

				/* if (getRadio(f.reservedFlag) == "true") {
		if (isEmpty(f.reservedDate)) {
			alert("예약 일자를 입력해 주세요.");
			f.reservedDate.focus();
			return false;
		}
	}
 */

				f.target = 'SendSms';
				f.action = 'send_msg_confirm_pop';
				f.submit();
			}

			/* // 대용량 SMS 발송 페이지로 이동
function openSendSmsMass(){
	// sms 사이트 가입 정보

	
	alert('대량 SMS 발송 페이지로 이동합니다.');
	openPopup("msbridge?mode=sendsms");
	
	


	alert('대량 SMS 발송 페이지로 이동합니다.');
	openPopup("msbridge?mode=sendsms");

} */
			//]]>
		</script> -->

		<!-- 회원검색 : 시작 -->
		<div
			id="layerMember"
			style="
				position: absolute;
				border: 1 solid #ccc;
				z-index: 100;
				display: none;
			"
		>
			<iframe
				id="ifrmMember"
				src="search_member_list_ifrm"
				frameborder="0"
				style="width: 420px; height: 500px; border: 1px solid #ddd"
			></iframe>
		</div>
		<!-- 회원검색 : 끝 -->

		<!-- 특수문자 : 시작 -->
		<div
			id="layerSpecial"
			style="position: absolute; z-index: 100; display: none"
		>
			<iframe
				src="special_char_ifrm"
				frameborder="0"
				style="width: 316px; height: 143px"
				scrolling="no"
			></iframe>
		</div>
		<!-- 특수문자 : 끝 -->

		<form name="Frm" method="post">
			<input type="hidden" name="mode" />
			<input type="hidden" name="params" value="" />

			<div class="main_content">
				<section class="cont_wrap">
					<div class="section_head">
						<h4>메세지 보내기</h4>
					</div>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_form"
					>
						<caption>
							메세지 보내기 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>메세지 설정</th>
								<td>
									<div class="over_h">
										<div class="fl">
											<ul class="smsviewNew">
												<li class="contbox mgt5">
													<textarea
														name="content"
														cols="16"
														rows="5"
														onkeyup="checkSmsContent(this)"
														onchange="checkSmsContent(this)"
													></textarea>
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
															value="0"
															readonly=""
														/>
													</p>
												</li>
												<li class="tc mgt10">
													<button
														type="button"
														class="btn_sec md"
														onclick="switchSmsLayer(event, 'layerSpecial')"
													>
														특수문자
													</button>
												</li>
											</ul>
										</div>
										<div
											class="fl"
											style="margin-left: 20px; padding-top: 50px"
										>
											<div>[자동발송 메세지 선택]</div>
											<div class="mgt10">
												<select
													id="ment"
													name="ment"
													onchange="changeMent(this)"
												>
													<option value="">:: 선택해주세요 ::</option>
													<option value="46">[사용자] 회원가입</option>
													<option value="3">[사용자] 회원탈퇴</option>
													<option value="53">[사용자] 자동탈퇴안내</option>
													<option value="5">[사용자] 주문완료</option>
													<option value="8">[사용자] 주문입금확인</option>
													<option value="11">[사용자] 주문배송완료</option>
													<option value="14">[사용자] 취소신청</option>
													<option value="17">[사용자] 취소완료</option>
													<option value="20">[사용자] 교환신청</option>
													<option value="50">[사용자] 교환완료</option>
													<option value="23">[사용자] 반품신청</option>
													<option value="32">[사용자] 반품완료</option>
													<option value="35">[사용자] 1:1문의답변</option>
													<option value="7">[입점업체] 주문완료</option>
													<option value="10">[입점업체] 주문입금확인</option>
													<option value="13">[입점업체] 주문배송완료</option>
													<option value="16">[입점업체] 취소신청</option>
													<option value="19">[입점업체] 취소완료</option>
													<option value="22">[입점업체] 교환신청</option>
													<option value="25">[입점업체] 반품신청</option>
													<option value="34">[입점업체] 반품완료</option>
													<option value="4">[관리자] 회원탈퇴</option>
													<option value="54">[관리자] 자동탈퇴안내</option>
													<option value="6">[관리자] 주문완료</option>
													<option value="9">[관리자] 주문입금확인</option>
													<option value="12">[관리자] 주문배송완료</option>
													<option value="15">[관리자] 취소신청</option>
													<option value="18">[관리자] 취소완료</option>
													<option value="21">[관리자] 교환신청</option>
													<option value="24">[관리자] 반품신청</option>
													<option value="33">[관리자] 반품완료</option>
													<option value="36">[관리자] 1:1문의답변</option>
												</select>
											</div>
											<div class="mgt10">
												<button
													type="button"
													class="btn_sec sm"
													onclick="openEmoticon()"
												>
													이모티콘 가져오기
												</button>
											</div>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<!-- <th rowspan="3">수신자 선택</th> -->
								<th>수신자 선택</th>
								<td>
									<div>
										<input
											type="hidden"
											id="send_type_1"
											name="sendType"
											value="1"
										/>
										<button
											type="button"
											class="btn_sec sm"
											onclick="openMemberList(event)"
										>
											회원주소록
										</button>
									</div>
									<div class="mgt5">
										<textarea
											name="receiveNumber"
											rows="5"
											style="width: 130px"
											class="text_input vt"
										></textarea>
									</div>
									<ul class="noti_info">
										<li>한줄당 하나의 발송번호를 입력해 주세요.</li>
										<li>발송번호는 "-"없이 숫자만 입력해 주세요.</li>
										<li>
											수신자가 100명 이상이 될 경우 오류가 발생할 수 있으니
											지양해주세요.
										</li>
									</ul>
								</td>
							</tr>

							<tr>
								<th>회원목록 다운로드</th>
								<td>
									<a href="../member/member_list">회원목록 페이지로 이동</a>
								</td>
							</tr>

							<tr>
								<th>관리자 번호</th>
								<td>
									<div>
										<input
											type="text"
											name="sendNumber"
											class="text_input"
											value="01021232350"
											onkeypress="blockNotNumber(event)"
											onkeyup="onlyInt(this)"
										/>
									</div>
									<div class="noti_info">
										발송자 핸드폰 번호를 적어 주세요. (예시 : 01012345678)
									</div>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="btn_wrap">
						<button type="button" class="btn_pri" onclick="validSubmit()">
							보내기
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
