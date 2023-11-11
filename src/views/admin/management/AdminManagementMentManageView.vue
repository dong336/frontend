<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				문구관리<button
					id="addBmark"
					onclick="addBookmark('문구관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>운영관리</li>
				<li>SMS관리</li>
				<li>문구관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>SMS 문구관리을 합니다.</li>
		</ul>

		<!-- <script type="text/javascript" src="sms_func.js"></script>
		<script type="text/javascript">
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

				invalid = false;
				$("input:checkbox[name='isChangeTemplateCode']").each(function () {
					if ($(this).attr('checked') == 'checked') {
						var span = $(this).closest('li');
						if (span.find("input[name='templateCode']").val() == '') {
							alert('탬플릿 코드를 입력해주세요.');
							this.focus();
							invalid = true;
							return false;
						}
					}
				});
				if (invalid) return false;

				if (confirm('등록하시겠습니까?')) {
					f.submit();
				}
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

			function changeTemplateCode(checkbox) {
				var span = $(checkbox).closest('li');

				if ($(checkbox).is(':checked')) {
					$(span).find('input').attr('readonly', false);
				} else {
					$(span).find('input').attr('readonly', true);
				}
			}
			//]]>
		</script> -->

		<form name="Frm" method="post" action="ment_manage_act">
			<div class="main_content">
				<section class="cont_wrap">
					<div class="section_head">
						<h4>알림톡 문구설정</h4>
					</div>

					<div class="tip_box2">
						<span
							>[사용자모드]게시판 답글 은 1:1 친절상담의 답변을 할때
							발송됩니다.</span
						><br />

						<span
							>[입점업체모드] 에서 메세지를 발송할시 마스터가 부담합니다.</span
						><br /><br />

						<strong class="blue">주의사항</strong><br />
						<!-- <span>내용 입력시 80 Bytes 이상 적으시면 발송이 안됩니다. 참고하시기 바랍니다.</span><br />
			<span>[자동발송]으로 설정이 안되어있거나 휴대폰번호가 정확하기 않을 시에는 발송되지 않습니다.</span><br /> -->
						<span
							>SMS 및 알림톡을 발송하실 문구는 카카오측의 검수 승인이 되어야
							합니다.</span
						><br />
						<span>도움문구는 다음과 같습니다.</span><br />
						<span style="background: none; padding-left: 10px"
							>[NAME] : 회원이름, [SHOPNAME] : 상점명, [ORDERNUMBER] : 주문번호,
							[ORDERPRODUCT] : 주문 상품</span
						><br />
						<span style="background: none; padding-left: 10px"
							>[NAME] 회원 정보가 없을 경우 '회원' 보이게 함, [DATE] 날짜</span
						><br />
					</div>

					<h5 class="subtit">
						[사용자모드] : 고객에게 보내지는 메세지를 설정합니다.
					</h5>

					<ul class="textset_list">
						<li>
							<input type="hidden" name="idx" value="46" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								회원가입
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="C_LI_013_02_50286"
							/>)
							<label for="isChangeTemplateCode_46"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_46"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_46"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[DATE]에 [NAME]님, [SHOPNAME]에 회원가입해 주셔서 감사합니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_46"
											><input
												type="radio"
												name="type_46"
												id="type_sms_46"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_46"
											><input
												type="radio"
												name="type_46"
												checked=""
												id="type_biztalk_46"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="3" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								회원탈퇴
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_3"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_3"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_3"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[NAME]님 [SHOPNAME]에서 회원탈퇴 처리되었습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_3"
											><input
												type="radio"
												name="type_3"
												id="type_sms_3"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_3"
											><input
												type="radio"
												name="type_3"
												checked=""
												id="type_biztalk_3"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="53" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								자동탈퇴안내
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_53"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_53"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_53"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[NAME]님. 장기간 [SHOPNAME]에 미접속하여 탈퇴 예정 이오니 참고바랍니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_53"
											><input
												type="radio"
												name="type_53"
												id="type_sms_53"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_53"
											><input
												type="radio"
												name="type_53"
												checked=""
												id="type_biztalk_53"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="5" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								주문완료
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_5"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_5"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_5"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[NAME]님께서 신청하신 주문이 완료되었습니다. 주문번호는 [ORDERNUMBER]입니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_5"
											><input
												type="radio"
												name="type_5"
												id="type_sms_5"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_5"
											><input
												type="radio"
												name="type_5"
												checked=""
												id="type_biztalk_5"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="8" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								주문입금확인
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_8"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_8"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_8"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[NAME]님 [SHOPNAME]에서 [ORDERNUMBER] 주문의 입금이 확인되었습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_8"
											><input
												type="radio"
												name="type_8"
												id="type_sms_8"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_8"
											><input
												type="radio"
												name="type_8"
												checked=""
												id="type_biztalk_8"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="11" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								주문배송완료
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_11"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_11"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_11"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[NAME]님 주문하신 물품의 발송되었습니다. 상품 수령 후 구매확정 바랍니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_11"
											><input
												type="radio"
												name="type_11"
												id="type_sms_11"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_11"
											><input
												type="radio"
												name="type_11"
												checked=""
												id="type_biztalk_11"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="14" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								취소신청
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_14"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_14"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_14"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[SHOPNAME]에서 [ORDERNUMBER] 주문을 취소신청하셨습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_14"
											><input
												type="radio"
												name="type_14"
												id="type_sms_14"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_14"
											><input
												type="radio"
												name="type_14"
												checked=""
												id="type_biztalk_14"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="17" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								취소완료
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_17"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_17"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_17"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[NAME]님 주문이 취소되었습니다. 취소 주문번호는 [ORDERNUMBER] 입니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_17"
											><input
												type="radio"
												name="type_17"
												id="type_sms_17"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_17"
											><input
												type="radio"
												name="type_17"
												checked=""
												id="type_biztalk_17"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="20" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								교환신청
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_20"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_20"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_20"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[SHOPNAME]에서 [ORDERNUMBER] 주문의 물품을 교환신청하셨습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_20"
											><input
												type="radio"
												name="type_20"
												id="type_sms_20"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_20"
											><input
												type="radio"
												name="type_20"
												checked=""
												id="type_biztalk_20"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="50" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								교환완료
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_50"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_50"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_50"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[NAME]님이 [ORDERNUMBER] 주문의 물품을 교환 처리 되었습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_50"
											><input
												type="radio"
												name="type_50"
												id="type_sms_50"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_50"
											><input
												type="radio"
												name="type_50"
												checked=""
												id="type_biztalk_50"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="23" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								반품신청
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_23"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_23"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_23"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[SHOPNAME]에서 [ORDERNUMBER] 주문의 물품을 반품신청하셨습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_23"
											><input
												type="radio"
												name="type_23"
												id="type_sms_23"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_23"
											><input
												type="radio"
												name="type_23"
												checked=""
												id="type_biztalk_23"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="32" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								반품완료
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_32"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_32"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_32"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[SHOPNAME]에서 [ORDERNUMBER] 주문의 반품신청이 완료되었습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_32"
											><input
												type="radio"
												name="type_32"
												id="type_sms_32"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_32"
											><input
												type="radio"
												name="type_32"
												checked=""
												id="type_biztalk_32"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="35" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								1:1문의답변
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_35"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_35"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_35"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[NAME]님께서 문의하신 내용에 대한 답변이 등록되었습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_35"
											><input
												type="radio"
												name="type_35"
												id="type_sms_35"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_35"
											><input
												type="radio"
												name="type_35"
												checked=""
												id="type_biztalk_35"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>
					</ul>

					<h5 class="subtit">
						[입점업체모드] : 입점업체에게 보내지는 메세지를 설정합니다.
					</h5>

					<ul class="textset_list">
						<li>
							<input type="hidden" name="idx" value="7" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								주문완료
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_7"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_7"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_7"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[DATE] [SHOPNAME]에서 [ORDERNUMBER]로 주문이 접수되었습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_7"
											><input
												type="radio"
												name="type_7"
												id="type_sms_7"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_7"
											><input
												type="radio"
												name="type_7"
												checked=""
												id="type_biztalk_7"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="10" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								주문입금확인
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_10"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_10"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_10"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[DATE] [SHOPNAME]에서 [ORDERNUMBER]로 주문이 접수되었습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_10"
											><input
												type="radio"
												name="type_10"
												id="type_sms_10"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_10"
											><input
												type="radio"
												name="type_10"
												checked=""
												id="type_biztalk_10"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="13" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								주문배송완료
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_13"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_13"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_13"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[DATE] [SHOPNAME]에서 [ORDERNUMBER] 주문의 물품이 발송되었습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_13"
											><input
												type="radio"
												name="type_13"
												id="type_sms_13"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_13"
											><input
												type="radio"
												name="type_13"
												checked=""
												id="type_biztalk_13"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="16" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								취소신청
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_16"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_16"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_16"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[SHOPNAME]에서 [ORDERNUMBER] 주문이 취소신청되었습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_16"
											><input
												type="radio"
												name="type_16"
												id="type_sms_16"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_16"
											><input
												type="radio"
												name="type_16"
												checked=""
												id="type_biztalk_16"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="19" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								취소완료
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_19"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_19"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_19"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[SHOPNAME]에서 [ORDERNUMBER] 주문이 취소되었습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_19"
											><input
												type="radio"
												name="type_19"
												id="type_sms_19"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_19"
											><input
												type="radio"
												name="type_19"
												checked=""
												id="type_biztalk_19"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="22" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								교환신청
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_22"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_22"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_22"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[SHOPNAME]에서 [ORDERNUMBER] 주문의 물품이 교환신청되었습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_22"
											><input
												type="radio"
												name="type_22"
												id="type_sms_22"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_22"
											><input
												type="radio"
												name="type_22"
												checked=""
												id="type_biztalk_22"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="25" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								반품신청
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_25"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_25"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_25"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[SHOPNAME]에서 [ORDERNUMBER] 주문의 물품이 반품신청되었습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_25"
											><input
												type="radio"
												name="type_25"
												id="type_sms_25"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_25"
											><input
												type="radio"
												name="type_25"
												checked=""
												id="type_biztalk_25"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="34" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								반품완료
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_34"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_34"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_34"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[SHOPNAME]에서 [ORDERNUMBER] 주문의 반품신청이 완료되었습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_34"
											><input
												type="radio"
												name="type_34"
												id="type_sms_34"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_34"
											><input
												type="radio"
												name="type_34"
												checked=""
												id="type_biztalk_34"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>
					</ul>

					<h5 class="subtit">
						[관리자모드] : 관리자에게 보내지는 메세지를 설정합니다.
					</h5>

					<ul class="textset_list">
						<li>
							<input type="hidden" name="idx" value="4" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								회원탈퇴
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_4"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_4"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_4"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[NAME]님이 회원탈퇴 처리되었습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_4"
											><input
												type="radio"
												name="type_4"
												id="type_sms_4"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_4"
											><input
												type="radio"
												name="type_4"
												checked=""
												id="type_biztalk_4"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="54" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								자동탈퇴안내
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_54"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_54"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_54"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[NAME]님. 장기간 [SHOPNAME]에 미접속하여 탈퇴 예정 이오니 참고바랍니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_54"
											><input
												type="radio"
												name="type_54"
												id="type_sms_54"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_54"
											><input
												type="radio"
												name="type_54"
												checked=""
												id="type_biztalk_54"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="6" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								주문완료
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_6"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_6"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_6"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[NAME]님께서 주문을 신청하셨습니다. 주문번호는 [ORDERNUMBER]입니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_6"
											><input
												type="radio"
												name="type_6"
												id="type_sms_6"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_6"
											><input
												type="radio"
												name="type_6"
												checked=""
												id="type_biztalk_6"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="9" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								주문입금확인
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_9"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_9"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_9"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[NAME]님이 [ORDERNUMBER] 주문의 입금이 확인되었습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_9"
											><input
												type="radio"
												name="type_9"
												id="type_sms_9"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_9"
											><input
												type="radio"
												name="type_9"
												checked=""
												id="type_biztalk_9"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="12" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								주문배송완료
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_12"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_12"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_12"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[SHOPNAME] 에서 [NAME]님 주문하신 상품이 발송되었습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_12"
											><input
												type="radio"
												name="type_12"
												id="type_sms_12"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_12"
											><input
												type="radio"
												name="type_12"
												checked=""
												id="type_biztalk_12"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="15" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								취소신청
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_15"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_15"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_15"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[NAME]님이 [ORDERNUMBER] 주문을 취소신청하셨습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_15"
											><input
												type="radio"
												name="type_15"
												id="type_sms_15"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_15"
											><input
												type="radio"
												name="type_15"
												checked=""
												id="type_biztalk_15"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="18" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								취소완료
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_18"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_18"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_18"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[NAME]님 주문이 취소되었습니다. 취소 주문번호는 [ORDERNUMBER] 입니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_18"
											><input
												type="radio"
												name="type_18"
												id="type_sms_18"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_18"
											><input
												type="radio"
												name="type_18"
												checked=""
												id="type_biztalk_18"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="21" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								교환신청
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_21"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_21"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_21"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[NAME]님이 [ORDERNUMBER] 주문의 물품을 교환신청하셨습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_21"
											><input
												type="radio"
												name="type_21"
												id="type_sms_21"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_21"
											><input
												type="radio"
												name="type_21"
												checked=""
												id="type_biztalk_21"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="24" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								반품신청
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_24"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_24"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_24"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[NAME]님이 [ORDERNUMBER] 주문의 물품을 반품신청하셨습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_24"
											><input
												type="radio"
												name="type_24"
												checked=""
												id="type_sms_24"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_24"
											><input
												type="radio"
												name="type_24"
												id="type_biztalk_24"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="33" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								반품완료
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="00000"
							/>)
							<label for="isChangeTemplateCode_33"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_33"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_33"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[NAME]님이 신청하신 [ORDERNUMBER] 주문의 반품신청이 완료되었습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_33"
											><input
												type="radio"
												name="type_33"
												id="type_sms_33"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_33"
											><input
												type="radio"
												name="type_33"
												checked=""
												id="type_biztalk_33"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>

						<li>
							<input type="hidden" name="idx" value="36" />
							<h5
								style="
									font-size: 12px;
									color: #444;
									padding-bottom: 6px;
									clear: both;
								"
							>
								1:1문의답변
							</h5>
							(탬플릿코드 :
							<input
								class="text_input"
								name="templateCode"
								type="text"
								readonly="readonly"
								value="000001212"
							/>)
							<label for="isChangeTemplateCode_36"
								><input
									type="checkbox"
									name="isChangeTemplateCode"
									id="isChangeTemplateCode_36"
									value="T"
									onchange="changeTemplateCode(this)"
								/>변경</label
							>
							<input
								type="hidden"
								name="isChangeTemplateCode"
								id="isChangeTemplateCode_36"
								value="F"
							/>
							<ul>
								<!-- <li><img src="../imgs/bg/sms_top.gif" /></li> -->
								<li class="contbox mgt10">
									<textarea
										name="content"
										cols="16"
										rows="5"
										style="height: 130px"
										maxlength="1000"
									>
[NAME]님께서 문의하신 내용에 대한 답변이 등록되었습니다.</textarea
									>
								</li>
								<!-- <li class="byte">
							<p><input type="text" name="bytes" style="width:20px;text-align:right;border:0;font-size:11px;font-style:verdana;" value="0" readOnly /></p>
						</li> -->
								<li class="mgt10 tc">
									<div class="label_wrap center">
										<label for="type_sms_36"
											><input
												type="radio"
												name="type_36"
												checked=""
												id="type_sms_36"
												value="100"
											/>SMS</label
										>
										<label for="type_biztalk_36"
											><input
												type="radio"
												name="type_36"
												id="type_biztalk_36"
												value="200"
											/>알림톡</label
										>
									</div>
								</li>
							</ul>
						</li>
					</ul>

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
