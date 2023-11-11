<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				상점환경설정<button
					id="addBmark"
					onclick="addBookmark('상점환경설정')"
					class="add_bmark active"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>상점환경설정</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				관리자정보는 관리자사이트 접속시 적용됩니다. 보안을 위해 아이디와
				패스워드는 자주 바꿔주시는게 좋습니다.
			</li>
			<li>관리자명에 입력한 이름은 게시판 관리시에 글쓴이로 등록됩니다.</li>
			<li>
				사업자 정보에 입력하신 정보는 기본적으로 쇼핑몰 하단 카피라이트부분에
				보여집니다.
			</li>
			<li>변동사항이 있을시에는 반드시 변경해주시기 바랍니다.</li>
		</ul>

		<!-- https -->
		<!-- <script src="https://spi.maps.daum.net/imap/map_js_init/postcode.v2.js"></script>
		<script
			charset="UTF-8"
			type="text/javascript"
			src="//t1.daumcdn.net/postcode/api/core/221018/1666013742754/221018.js"
		></script> -->

		<!-- 에디터 Script -->
		<!-- <script
			type="text/javascript"
			src="/common/editor/se2/js/HuskyEZCreator.js"
		></script>
		<script type="text/javascript">
			function validSubmit(f) {
				if (isEmpty(f.adminId)) {
					alert('관리자 아이디을 입력해 주세요.');
					f.adminId.focus();
					return false;
				}

				if (checkInvalidId(f.adminId.value, 4, 20)) {
					alert('관리자 아이디는 영문 또는 숫자 4~20자로 입력해 주세요.');
					f.adminId.focus();
					return false;
				}

				if ($("input[name='isChangePw']").prop('checked')) {
					if (isEmpty(f.adminPw)) {
						alert('관리자 비밀번호를 입력해 주세요.');
						f.adminPw.focus();
						return false;
					}

					switch (checkInvalidPw(f.adminId.value, f.adminPw.value, 4, 20)) {
						case 1:
							alert('비밀번호는 아이디와 동일하게 사용할 수 없습니다.');
							return false;
						case 2:
							alert(
								'비밀번호는 영문 대/소문자, 숫자를 조합하여 4~20자리로 해주세요.',
							);
							return false;
					}
				}

				if (isEmpty(f.adminName)) {
					alert('관리자명을 입력해 주세요.');
					f.adminName.focus();
					return false;
				}

				if (isEmpty(f.siteEmail)) {
					alert('관리자 메일을 입력해 주세요.');
					f.siteEmail.focus();
					return false;
				}

				if (isEmpty(f.siteName)) {
					alert('상점명을 입력해 주세요.');
					f.siteName.focus();
					return false;
				}

				if (isEmpty(f.ceoName)) {
					alert('대표자명을 입력해 주세요.');
					f.ceoName.focus();
					return false;
				}

				if (isEmpty(f.securityName)) {
					alert('개인정보관리자명을 입력해 주세요.');
					f.securityName.focus();
					return false;
				}

				if (isEmpty(f.securityEmail)) {
					alert('개인정보관리자 이메일을 입력해 주세요.');
					f.securityEmail.focus();
					return false;
				}

				if (isEmpty(f.comName)) {
					alert('회사명을 입력해 주세요.');
					f.comName.focus();
					return false;
				}

				if (isEmpty(f.comPost)) {
					alert('우편번호를 선택해 주세요.');
					f.comPost.focus();
					return false;
				}

				if (isEmpty(f.comTel)) {
					alert('대표전화를 입력해 주세요.');
					f.comTel.focus();
					return false;
				}

				if (isEmpty(f.bizNo)) {
					alert('사업자등록번호를 입력해 주세요.');
					f.bizNo.focus();
					return false;
				}

				if (isEmpty(f.tongsinNo)) {
					alert('통신판매업신고번호를 입력해 주세요.');
					f.tongsinNo.focus();
					return false;
				}

				if (isEmpty(f.hostingService)) {
					alert('호스팅서비스 업체명을 입력해 주세요.');
					f.hostingService.focus();
					return false;
				}

				if (!confirm('등록하시겠습니까?')) {
					return false;
				}
			}

			function cancel() {
				history.back();
			}

			function checkChangePw() {
				if ($("input[name='isChangePw']").prop('checked')) {
					$('#divPw').show();
				} else {
					$('#divPw').hide();
				}
			}
			//]]>
		</script> -->

		<form
			name="Frm"
			method="post"
			action="config_manager_act"
			onsubmit="return validSubmit(this)"
		>
			<div class="main_content">
				<div class="cont_wrap">
					<!-- 관리자정보 -->
					<div class="section_head">
						<h4>관리자정보</h4>
					</div>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_form"
					>
						<caption>
							관리자 정보입력
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>관리자 아이디</th>
								<td>
									<input
										type="text"
										name="adminId"
										value="admin"
										class="text_input"
										maxlength="20"
									/>
									<span class="noti_info">영문 또는 숫자 4~20자.</span>
								</td>
							</tr>
							<tr>
								<th>관리자 비밀번호</th>
								<td>
									<label>
										<input
											type="checkbox"
											name="isChangePw"
											value="T"
											onclick="checkChangePw();"
											style="vertical-align: middle"
										/>비밀번호 수정
									</label>
									<div id="divPw" class="mgt5" style="display: none">
										<input
											type="text"
											name="adminPw"
											value=""
											class="text_input"
											maxlength="20"
										/>
										<span class="noti_info">영문, 숫자 조합 4~20자.</span>
									</div>
								</td>
							</tr>
							<tr>
								<th>관리자명</th>
								<td>
									<input
										type="text"
										name="adminName"
										value="몰스토어관리자"
										class="text_input"
										maxlength="15"
									/>
								</td>
							</tr>
							<tr>
								<th>관리자 메일</th>
								<td>
									<div>
										<input
											type="text"
											name="siteEmail"
											value="seobo28@ncgn.co.kr"
											class="text_input"
											style="width: 300px"
											maxlength="100"
										/>
									</div>
									<div class="noti_info">
										Contact us, 고객의 소리, 제휴문의 등을 고객이 이용 시 본
										이메일로 받아볼 수 있습니다.
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					<!-- 관리자정보 -->

					<!-- 사업자정보 -->
					<div class="section_head">
						<h4>사업자정보</h4>
					</div>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_form"
					>
						<caption>
							사업자 정보입력
						</caption>
						<colgroup>
							<col width="140" />
							<col width="*" />
							<col width="140" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>상점명(사이트명)</th>
								<td colspan="3">
									<div>
										<input
											type="text"
											name="siteName"
											value="내친구네트웍스"
											class="text_input"
											style="width: 200px"
											maxlength="50"
										/>
									</div>
									<div class="noti_info">
										사이트명은 문장속에서 많이 쓰입니다. 간단하고 짧게 써 주시기
										바랍니다.
									</div>
								</td>
							</tr>
							<tr>
								<th>대표자명</th>
								<td colspan="3">
									<input
										type="text"
										name="ceoName"
										value="홍길동"
										class="text_input"
										style="width: 100px"
										maxlength="10"
									/>
								</td>
							</tr>
							<tr>
								<th>개인정보 관리자</th>
								<td colspan="3">
									<div>
										<input
											type="text"
											value="홍길동4"
											name="securityName"
											class="text_input"
											style="width: 100px"
											maxlength="10"
										/>&nbsp;(&nbsp;<input
											type="text"
											value="seobo28@ncgn.co.kr"
											name="securityEmail"
											class="text_input"
											style="width: 300px"
											maxlength="100"
										/>&nbsp;)
									</div>
									<div class="noti_info">
										개인정보관리자를 임명하시어 임명자의 성명과 이메일 주소를
										적어주세요.
									</div>
								</td>
							</tr>

							<tr>
								<th>입점업체 담당자</th>
								<td colspan="3">
									<div>
										<input
											type="text"
											value="홍길동"
											name="mdName"
											class="text_input"
											style="width: 100px"
											maxlength="10"
										/>&nbsp;(&nbsp;<input
											type="text"
											value="seobo28@ncgn.co.kr"
											name="mdEmail"
											class="text_input"
											style="width: 300px"
											maxlength="100"
										/>&nbsp;)
									</div>
									<div class="noti_info">
										입점업체 담당자(MD)를 임명하시어 임명자의 성명과 이메일
										주소를 적어주세요.
									</div>
								</td>
							</tr>

							<tr>
								<th>회사명</th>
								<td colspan="3">
									<input
										type="text"
										value="(주)내친구네트웍스"
										name="comName"
										class="text_input"
										style="width: 300px"
										maxlength="50"
									/>
								</td>
							</tr>
							<tr>
								<th>회사 주소</th>
								<td colspan="3">
									<div>
										<input
											type="text"
											name="comPost"
											id="comPost"
											value="04793"
											maxlength="7"
											class="text_input"
											style="width: 70px"
											readonly=""
										/>
										<button
											type="button"
											class="btn_sec sm"
											onclick="openZipcode('comPost','comAddr','comAddrDetail'); return false;"
										>
											우편번호 검색
										</button>
									</div>
									<div class="mgt3">
										<input
											type="text"
											name="comAddr"
											id="comAddr"
											value="서울 성동구 성수일로8길 5 (성수동2가, 서울숲 SK V1 TOWER)"
											maxlength="50"
											class="text_input"
											style="width: 70%"
											readonly=""
										/>
									</div>
									<div class="mgt3">
										<input
											type="text"
											name="comAddrDetail"
											id="comAddrDetail"
											value="44-4"
											maxlength="50"
											class="text_input"
											style="width: 70%"
										/>
									</div>
								</td>
							</tr>
							<tr>
								<th>대표전화</th>
								<td>
									<input
										type="text"
										value="02-9999-9999"
										name="comTel"
										class="text_input"
										maxlength="20"
									/>
								</td>
								<th>Fax</th>
								<td>
									<input
										type="text"
										value="02-552-2202"
										name="comFax"
										class="text_input"
										maxlength="20"
									/>
								</td>
							</tr>
							<tr>
								<th>사업자등록번호</th>
								<td>
									<input
										type="text"
										value="101-86-64524"
										name="bizNo"
										class="text_input"
										maxlength="12"
									/>
								</td>
								<th>통신판매업신고번호</th>
								<td>
									<input
										type="text"
										value="제1234-서울강남-1234호."
										name="tongsinNo"
										class="text_input"
										maxlength="20"
									/>
								</td>
							</tr>
							<tr>
								<th>업태</th>
								<td>
									<input
										type="text"
										value="업태"
										name="bizCondition"
										class="text_input"
										maxlength="20"
									/>
								</td>
								<th>종목</th>
								<td>
									<input
										type="text"
										value="서비스"
										name="bizItem"
										class="text_input"
										maxlength="20"
									/>
								</td>
							</tr>
							<tr>
								<th>호스팅서비스업체명</th>
								<td colspan="3">
									<input
										type="text"
										value="(주)내친구네트웍스"
										name="hostingService"
										class="text_input"
										maxlength="50"
									/>
									<span class="noti_info"
										>호스팅서비스 업체명을 입력해주세요.</span
									>
								</td>
							</tr>
						</tbody>
					</table>
					<!-- 사업자정보 -->
					<div class="btn_wrap">
						<button type="submit" class="btn_pri">확인</button>
						<button type="button" onclick="cancel()" class="btn_sec">
							취소
						</button>
					</div>
				</div>
			</div>
		</form>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup>
import { useRoute } from 'vue-router';

const router = useRoute();
console.log(router.path);
</script>

<style></style>
