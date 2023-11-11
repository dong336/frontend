<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				회원가입설정<button
					id="addBmark"
					onclick="addBookmark('회원가입설정')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>회원관리</li>
				<li>회원관련설정</li>
				<li>회원가입설정</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				회원가입할 때 원하는 부분의 필수 및 선택 입력 및 추가할 사항을 관리하는
				곳 입니다.
			</li>
		</ul>

		<!-- <script type="text/javascript">
			//<![    [
			function checkField(obj) {
				var f = document.Frm;
				var objItem;

				var field = obj.name.split('_');
				var name = field[0];
				var code = field[1];

				if (obj.checked) {
					if (name == 'fieldRequire') {
						f['fieldUse_' + code].checked = true;
					}
				} else {
					if (name == 'fieldUse') {
						f['fieldRequire_' + code].checked = false;
					}
				}
			}

			function validSubmit() {
				var f = document.Frm;

				for (var i = 0; i < f.code.length; i++) {
					var code = f.code[i].value;
					var objFieldTitle = f['fieldTitle_' + code];
					var objFieldUse = f['fieldUse_' + code];

					if (
						typeof objFieldTitle != 'undefined' &&
						objFieldUse.checked &&
						isEmpty(objFieldTitle)
					) {
						alert('항목명을 입력해 주세요.');
						objFieldTitle.focus();
						return false;
					}
				}

				if (confirm('등록하시겠습니까?')) {
					f.submit();
				}
			}

			// SNS유형_체크
			function checkSns(obj) {
				var f = document.Frm;

				if (obj.checked) {
					obj.value = 'Y'; // 사용설정
				} else {
					obj.value = 'N'; // 미사용설정
				}
			}
			//]]>
		</script> -->

		<form name="Frm" method="post" action="config_member_act">
			<div class="main_content">
				<section class="cont_wrap">
					<div class="section_head">
						<h4>회원가입 정책설정</h4>
					</div>
					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_form"
					>
						<caption>
							차단 ID설정
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th rowspan="4">가입 차단 ID</th>
								<td class="gray_bg">기본 차단 ID</td>
							</tr>
							<tr>
								<td>base,guest</td>
							</tr>
							<tr>
								<td class="gray_bg">선택 차단 ID</td>
							</tr>
							<tr>
								<td>
									<div>
										<textarea name="blockID" rows="3" class="text_input">
Toomuch,wenzietest,hellojava</textarea
										>
									</div>
									<ul class="noti_info">
										<li>사용을 제한할 ID를 입력해주세요.</li>
										<li>
											","(콤마)로 구분<br />예) base, admin, webmaster, master
										</li>
									</ul>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="section_head">
						<h4>회원가입 기본항목설정</h4>
					</div>
					<div class="headsubtext">
						<ul>
							<li>
								- 실명인증 모듈을 사용하지 않는 경우 "휴대폰번호", "이메일",
								"생일"이 기존 가입회원과 동일하면 회원가입을 할 수 없습니다.
							</li>
							<li>
								- 이메일 필수항목 해제 시 "아이디 찾기", "비밀번호 찾기" 기능
								사용이 불가능합니다.
							</li>
						</ul>
					</div>
					<table class="fields mgt10">
						<caption>
							기본항목 설정 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
							<col width="*" />
							<col width="130" />
							<col width="*" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>항목명</th>
								<th>사용여부</th>
								<th>필수항목</th>
								<th>항목명</th>
								<th>사용여부</th>
								<th>필수항목</th>
							</tr>
							<tr>
								<th>성별<input type="hidden" name="code" value="101" /></th>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldUse_101"
											value="1"
											onclick="checkField(this)"
											class="cb"
											checked=""
										/>선택</label
									>
								</td>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldRequire_101"
											value="2"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>

								<th>생일<input type="hidden" name="code" value="102" /></th>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldUse_102"
											value="1"
											onclick="checkField(this)"
											class="cb"
											checked=""
										/>선택</label
									>
								</td>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldRequire_102"
											value="2"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>
							</tr>
							<tr>
								<th>회사명<input type="hidden" name="code" value="103" /></th>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldUse_103"
											value="1"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldRequire_103"
											value="2"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>

								<th>
									사업자등록번호<input type="hidden" name="code" value="104" />
								</th>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldUse_104"
											value="1"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldRequire_104"
											value="2"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>
							</tr>
							<tr>
								<th>업태<input type="hidden" name="code" value="105" /></th>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldUse_105"
											value="1"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldRequire_105"
											value="2"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>

								<th>종목<input type="hidden" name="code" value="106" /></th>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldUse_106"
											value="1"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldRequire_106"
											value="2"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>
							</tr>
							<tr>
								<th>전화번호<input type="hidden" name="code" value="107" /></th>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldUse_107"
											value="1"
											onclick="checkField(this)"
											class="cb"
											checked=""
										/>선택</label
									>
								</td>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldRequire_107"
											value="2"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>

								<th>팩스번호<input type="hidden" name="code" value="108" /></th>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldUse_108"
											value="1"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldRequire_108"
											value="2"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>
							</tr>
							<tr>
								<th>
									휴대폰번호<input type="hidden" name="code" value="109" />
								</th>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldUse_109"
											value="1"
											onclick="checkField(this)"
											class="cb"
											checked=""
										/>선택</label
									>
								</td>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldRequire_109"
											value="2"
											onclick="checkField(this)"
											class="cb"
											checked=""
										/>선택</label
									>
								</td>

								<th>이메일<input type="hidden" name="code" value="110" /></th>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldUse_110"
											value="1"
											onclick="checkField(this)"
											class="cb"
											checked=""
										/>선택</label
									>
								</td>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldRequire_110"
											value="2"
											onclick="checkField(this)"
											class="cb"
											checked=""
										/>선택</label
									>
								</td>
							</tr>
							<tr>
								<th>주소<input type="hidden" name="code" value="111" /></th>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldUse_111"
											value="1"
											onclick="checkField(this)"
											class="cb"
											checked=""
										/>선택</label
									>
								</td>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldRequire_111"
											value="2"
											onclick="checkField(this)"
											class="cb"
											checked=""
										/>선택</label
									>
								</td>

								<th>메모<input type="hidden" name="code" value="112" /></th>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldUse_112"
											value="1"
											onclick="checkField(this)"
											class="cb"
											checked=""
										/>선택</label
									>
								</td>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldRequire_112"
											value="2"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="section_head">
						<h4>회원가입 추가항목설정</h4>
					</div>
					<table class="fields">
						<caption>
							추가항목 설정 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
							<col width="*" />
							<col width="130" />
							<col width="*" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>항목명</th>
								<th>사용여부</th>
								<th>필수항목</th>
								<th>항목명</th>
								<th>사용여부</th>
								<th>필수항목</th>
							</tr>
							<tr></tr>
							<tr>
								<th>
									<input type="hidden" name="code" value="201" />
									<input
										type="text"
										name="fieldTitle_201"
										value="결혼"
										class="text_input"
										maxlength="50"
										style="width: 100px; text-align: center"
									/>
								</th>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldUse_201"
											value="1"
											onclick="checkField(this)"
											class="cb"
											checked=""
										/>선택</label
									>
								</td>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldRequire_201"
											value="2"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>

								<th>
									<input type="hidden" name="code" value="202" />
									<input
										type="text"
										name="fieldTitle_202"
										value="추가정보2"
										class="text_input"
										maxlength="50"
										style="width: 100px; text-align: center"
									/>
								</th>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldUse_202"
											value="1"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldRequire_202"
											value="2"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>
							</tr>
							<tr>
								<th>
									<input type="hidden" name="code" value="203" />
									<input
										type="text"
										name="fieldTitle_203"
										value="추가"
										class="text_input"
										maxlength="50"
										style="width: 100px; text-align: center"
									/>
								</th>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldUse_203"
											value="1"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldRequire_203"
											value="2"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>

								<th>
									<input type="hidden" name="code" value="204" />
									<input
										type="text"
										name="fieldTitle_204"
										value="추가정보4"
										class="text_input"
										maxlength="50"
										style="width: 100px; text-align: center"
									/>
								</th>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldUse_204"
											value="1"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldRequire_204"
											value="2"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>
							</tr>
							<tr>
								<th>
									<input type="hidden" name="code" value="205" />
									<input
										type="text"
										name="fieldTitle_205"
										value="추가정보5"
										class="text_input"
										maxlength="50"
										style="width: 100px; text-align: center"
									/>
								</th>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldUse_205"
											value="1"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldRequire_205"
											value="2"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>

								<th>
									<input type="hidden" name="code" value="206" />
									<input
										type="text"
										name="fieldTitle_206"
										value="추가정보6"
										class="text_input"
										maxlength="50"
										style="width: 100px; text-align: center"
									/>
								</th>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldUse_206"
											value="1"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="fieldRequire_206"
											value="2"
											onclick="checkField(this)"
											class="cb"
										/>선택</label
									>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="section_head">
						<h4>회원SNS가입 설정</h4>
					</div>
					<table class="fields">
						<caption>
							추가항목 설정 폼
						</caption>
						<colgroup>
							<col width="200" />
							<!-- SNS명 -->
							<col width="150" />
							<!-- 사용여부 -->
							<col width="450" />
							<!-- CLIENT_ID -->
							<col width="450" />
							<!-- CLIENT_SECRET -->
							<col width="*" />
							<!-- 비고 -->
						</colgroup>
						<tbody>
							<tr>
								<th>SNS명</th>
								<th>사용여부</th>
								<th>CLIENT ID</th>
								<th>CLIENT SECRET</th>
								<th>비고</th>
							</tr>

							<tr>
								<td>
									<input
										type="text"
										name="snsname_0"
										value="네이버"
										class="text_input"
										maxlength="50"
										style="width: 100%; text-align: center"
									/>
								</td>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="isuse_0"
											value="Y"
											class="cb"
											onclick="checkSns(this)"
											checked="checked"
										/>선택</label
									>
								</td>
								<td>
									<input
										type="text"
										name="clientid_0"
										value="vvNXPHXTRh2Twt228KrW"
										class="text_input"
										maxlength="200"
										style="width: 100%"
									/>
								</td>
								<td>
									<input
										type="text"
										name="clientsecret_0"
										value="uZd115XuI5"
										class="text_input"
										maxlength="200"
										style="width: 100%"
									/>
								</td>
								<td>
									<input
										type="text"
										name="remark_0"
										value=""
										class="text_input"
										maxlength="100"
										style="width: 100%"
									/>
									<input type="hidden" name="idx_0" value="1" />
									<input type="hidden" name="snstype_0" value="NAVER" />
								</td>
							</tr>

							<tr>
								<td>
									<input
										type="text"
										name="snsname_1"
										value="카카오"
										class="text_input"
										maxlength="50"
										style="width: 100%; text-align: center"
									/>
								</td>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="isuse_1"
											value="Y"
											class="cb"
											onclick="checkSns(this)"
											checked="checked"
										/>선택</label
									>
								</td>
								<td>
									<input
										type="text"
										name="clientid_1"
										value="55bb319dc22b2f59a56e9b138949417b"
										class="text_input"
										maxlength="200"
										style="width: 100%"
									/>
								</td>
								<td>
									<input
										type="text"
										name="clientsecret_1"
										value="fae78478b2d1b2cf8301c479bfaa6f70"
										class="text_input"
										maxlength="200"
										style="width: 100%"
									/>
								</td>
								<td>
									<input
										type="text"
										name="remark_1"
										value=""
										class="text_input"
										maxlength="100"
										style="width: 100%"
									/>
									<input type="hidden" name="idx_1" value="2" />
									<input type="hidden" name="snstype_1" value="KAKAO" />
								</td>
							</tr>

							<tr>
								<td>
									<input
										type="text"
										name="snsname_2"
										value="애플"
										class="text_input"
										maxlength="50"
										style="width: 100%; text-align: center"
									/>
								</td>
								<td>
									<label class="text_none"
										><input
											type="checkbox"
											name="isuse_2"
											value="Y"
											class="cb"
											onclick="checkSns(this)"
											checked="checked"
										/>선택</label
									>
								</td>
								<td>
									<input
										type="text"
										name="clientid_2"
										value="com.mallstore.member.signin"
										class="text_input"
										maxlength="200"
										style="width: 100%"
									/>
								</td>
								<td>
									<input
										type="text"
										name="clientsecret_2"
										value=""
										class="text_input"
										maxlength="200"
										style="width: 100%"
									/>
								</td>
								<td>
									<input
										type="text"
										name="remark_2"
										value=""
										class="text_input"
										maxlength="100"
										style="width: 100%"
									/>
									<input type="hidden" name="idx_2" value="3" />
									<input type="hidden" name="snstype_2" value="APPLE" />
								</td>
							</tr>

							<input type="hidden" name="snsListCnt" value="3" />
						</tbody>
					</table>
					<div class="btn_wrap">
						<button type="button" class="btn_pri" onclick="validSubmit()">
							확인
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
