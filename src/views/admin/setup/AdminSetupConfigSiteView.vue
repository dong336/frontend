<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				사이트환경설정<button
					id="addBmark"
					onclick="addBookmark('사이트환경설정')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>사이트정보관리</li>
				<li>사이트환경설정</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				웹브라우져 Title, 검색엔진키워드설정, 파비콘 등록, 상점명 문법설정을
				설정합니다.
			</li>
			<li>카드무이자할부, 소스공개 여부, 업로드 컴포넌트를 설정합니다.</li>
			<li>
				카테고리분류, 상품목록 장바구니 관리기능, 업로드 컴포넌트를 설정합니다.
			</li>
			<li>변동사항이 있을시에는 반드시 변경해주시기 바랍니다.</li>
		</ul>
		<!-- <script type="text/javascript">
			function openUpload(code) {
				$.laybox({
					type: 'iframe',
					source: 'config_upload_ifrm?code=' + code,
					borderSize: 0,
				});
			}

			function checkCertify() {
				var f = document.Frm;
				_es('bodyCertify').display = getRadio(f.isCertify) == 'T' ? '' : 'none';
			}

			function checkSmtp() {
				var f = document.Frm;
				_es('bodySmtp').display =
					getRadio(f.isOutsideSmtp) == 'T' ? '' : 'none';
			}

			function cancel() {
				history.back();
			}

			function validSubmit(f) {
				if (isEmpty(f.browserTitle)) {
					alert('웹브라우져 Title을 입력해 주세요.');
					f.browserTitle.focus();
					return false;
				}

				if (getRadio(f.isCertify) == 'T') {
					if (isEmpty(f.certifyNiceId)) {
						alert('NICE에서 부여받은 사이트 코드를 입력해 주세요.');
						f.certifyNiceId.focus();
						return false;
					}

					if (isEmpty(f.certifyNicePw)) {
						alert('NICE에서 부여받은 사이트 비밀번호를 입력해 주세요.');
						f.certifyNicePw.focus();
						return false;
					}

					if (isEmpty(f.certifyIpinId)) {
						alert('NICE에서 부여받은 아이핀 사이트 코드를 입력해 주세요.');
						f.certifyIpinId.focus();
						return false;
					}

					if (isEmpty(f.certifyIpinPw)) {
						alert('NICE에서 부여받은 아이핀 사이트 비밀번호를 입력해 주세요.');
						f.certifyIpinPw.focus();
						return false;
					}
				}

				if (f.imgSWidth.value.toNumeric() < 1) {
					alert('리스트 이미지 사이즈 폭을 입력해 주세요.');
					f.imgSWidth.focus();
					return false;
				}

				if (f.imgSHeight.value.toNumeric() < 1) {
					alert('리스트 이미지 사이즈 높이를 입력해 주세요.');
					f.imgSHeight.focus();
					return false;
				}

				if (f.imgMWidth.value.toNumeric() < 1) {
					alert('상세정보 이미지 사이즈 폭을 입력해 주세요.');
					f.imgMWidth.focus();
					return false;
				}

				if (f.imgMHeight.value.toNumeric() < 1) {
					alert('상세정보 이미지 사이즈 높이를 입력해 주세요.');
					f.imgMHeight.focus();
					return false;
				}

				if (f.imgBWidth.value.toNumeric() < 1) {
					alert('확대보기 이미지 사이즈 폭을 입력해 주세요.');
					f.imgBWidth.focus();
					return false;
				}

				if (f.imgBHeight.value.toNumeric() < 1) {
					alert('확대보기 이미지 사이즈 높이를 입력해 주세요.');
					f.imgBHeight.focus();
					return false;
				}

				if (f.cfgautowithdrawtarget.value > f.cfgautowithdrawperiod.value) {
					alert(
						'자동 탈퇴 일은 자동탈퇴 대상자 선정일보다 \n빠르게 설정 할 수 없습니다.',
					);
					f.cfgautowithdrawtarget.value = 0;
					f.cfgautowithdrawtarget.focus();
					return false;
				}

				var msg = '등록하시겠습니까?';
				if (getRadio(f.isOutsideSmtp) == 'T')
					msg +=
						'\n\n외부메일서버 사용시 메일계정 확인을 위해 관리자 메일주소로\n테스트 메일이 발송될 수 있습니다.';

				if (!confirm(msg)) {
					return false;
				}
			}
			//]]>
		</script> -->

		<form
			name="Frm"
			method="post"
			action="config_site_act"
			onsubmit="return validSubmit(this)"
		>
			<input type="hidden" name="siteEmail" value="seobo28@ncgn.co.kr" />

			<div class="main_content">
				<section class="cont_wrap">
					<!--상단쇼핑몰타이틀-->
					<div class="section_head">
						<h4>상단쇼핑몰타이틀</h4>
					</div>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_form"
					>
						<caption>
							상단쇼핑몰타이틀 입력 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>웹브라우져 Title</th>
								<td>
									<input
										name="browserTitle"
										value="DEV_자바프레임워크 엔진"
										class="text_input"
										maxlength="100"
										style="width: 98%"
									/>
								</td>
							</tr>
							<tr>
								<th rowspan="3">검색엔진<br />키워드설정</th>
								<td>
									<strong>Description(쇼핑몰설명)</strong>
									<div class="mgt5">
										<input
											type="text"
											name="description"
											value="자바프레임워크엔진13"
											class="text_input"
											maxlength="100"
											style="width: 98%"
										/>
									</div>
									<div class="noti_info">
										영문, 한글, 숫자만 입력 가능하며, 200자 이내로 작성해
										주세요.
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<strong>Keyword(키워드)</strong>
									<div class="mgt5">
										<input
											type="text"
											name="keyword"
											value="자바프레임워크엔진2"
											class="text_input"
											maxlength="100"
											style="width: 98%"
										/>
									</div>
									<div class="noti_info">
										영문, 한글, 숫자만 입력 가능하며, 70자 이내로 작성해
										주세요.(같은단어는 3회이상 반복 불가)
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div>
										<strong>검색엔진 관련키워드</strong>
									</div>
									<div class="mgt5">
										<textarea
											name="metaTag"
											rows="3"
											class="text_input"
											style="width: 98%"
										>
몰스토어, 자바, JAVA, mallstore</textarea
										>
									</div>
									<div class="noti_info">
										검색로봇이 해당 키워드를 검색합니다.(여러 키워드 작성 시
										콤마로 구분)
									</div>
								</td>
							</tr>
							<tr>
								<th>파비콘</th>
								<td>
									<span class="button black small"
										><button type="button" onclick="openUpload('favicon')">
											이미지 업로드
										</button></span
									>
									<span class="noti_info"
										>이미지 사이즈 : 16 * 16 / 파일명 : favicon.ico</span
									>
									<div class="topline"></div>
								</td>
							</tr>
							<tr>
								<th>오픈그래프</th>
								<td>
									<span class="button black small"
										><button type="button" onclick="openUpload('ogimage')">
											이미지 업로드
										</button></span
									>
									<span class="noti_info"
										>이미지 사이즈 : 270 * 270 / 확장자 : jpg</span
									>
									<div class="topline">
										"ogimage.jpg" 파일이 등록되어 있습니다.&nbsp;<label
											class="red"
											><input
												type="checkbox"
												name="isDelOgimage"
												value="T"
											/>삭제</label
										>
									</div>
								</td>
							</tr>

							<tr>
								<th>법인인감도장</th>
								<td>
									<span class="button black small"
										><button type="button" onclick="openUpload('stamp')">
											이미지 업로드
										</button></span
									>
									<span class="noti_info"
										>"세금계산서", "현금영수증"에 사용되는 법인인감도장 이미지를
										등록합니다.(배경이 투명한 png이미지 사용)</span
									>
									<div class="topline">
										"stamp.png" 파일이 등록되어 있습니다.&nbsp;<label
											class="red"
											><input
												type="checkbox"
												name="isDelStampimage"
												value="T"
											/>삭제</label
										>
									</div>
								</td>
							</tr>

							<tr style="display: none">
								<th>상점명 문법설정</th>
								<td>
									<div>
										사이트명 (
										<input type="radio" name="postWord" value="100" />와,
										<input
											type="radio"
											name="postWord"
											value="200"
											checked=""
										/>과 ) 함께 즐거운 시간되시길....
									</div>
									<div class="noti_info">
										상점명에 따라 바뀌는 조사를 설정합니다. 예를들어 사이트명이
										'예스몰'이면 '과'를 선택하시면 됩니다.
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					<!--상단쇼핑몰타이틀-->

					<!--사이트 일반정보-->
					<div class="section_head">
						<h4>사이트 일반정보</h4>
					</div>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_form"
					>
						<caption>
							사이트 일반정보 입력 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<!-- 	
		<tr>
			<th>메인페이지 시작파일</th>
			<td>
				<div><input type="radio" name="startPage" value="main_prog" >&nbsp;프로그램 적용 (/main/main_prog)</div>
				<div><input type="radio" name="startPage" value="main_html" >&nbsp;HTML 적용 (/main/main_html)</div>

				<div class="mgl10 mgt10">
					<div>1. 프로그램적용 :</div>
					<div class="mgl10">- 전환 버튼을 눌러줄 필요없이 바로 메인에 표출</div>
					<div class="mgl10">- 사용자가 사이트를 열때마다 메인 디비정보를(배너/상품정보등) 불러오기 때문에 속도가 느리다.</div>
				</div>
				<div class="mgl10 mgt10">
					<div>2. HTML적용 :</div>
					<div class="mgl10">- 메인에 설정을 바꿔줄때마다 변환 버튼을 눌러주어야함.</div>
					<div class="mgl10">- 디비에서 불러오는것이 아닌 저장된 html을 이용하므로 속도가 빠르다.</div>
				</div>
			</td>
		</tr>
		
		<tr>
			<th>API 인증키</th>
			<td>
				<input type="text" name="apiKey" class="text_input" style="width:300px" value="" maxlength="50" />
				<ul class="mgt5">
					<li class="noti_info">도로명 우편번호 검색에 사용되는 인증키 입니다.</li>
				</ul>
			</td>
		</tr>
 -->
						<tbody>
							<tr>
								<th>카드무이자할부</th>
								<td>
									<div>
										<input
											name="noInterest"
											value="카드무이자할부"
											class="text_input"
											maxlength="100"
											style="width: 80%"
										/>
									</div>
									<div class="noti_info">
										상품목록, 장바구니, 주문결제 페이지에 노출되는 무이자 정보를
										등록/관리할 수 있습니다.
									</div>
								</td>
							</tr>
							<tr>
								<th>소스공개여부</th>
								<td>
									<div class="label_wrap">
										<label>
											<input name="isOpenHtml" type="radio" value="F" />적용
										</label>
										<label>
											<input
												name="isOpenHtml"
												type="radio"
												value="T"
												checked=""
											/>적용안함
										</label>
									</div>
									<div class="topline pdn">
										<div class="noti_info">
											오른쪽마우스 버튼의 마우스 사용을 막아 소스 및 이미지
											경로를 못보게 합니다.
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<th>본인 인증</th>
								<td>
									<div class="label_wrap">
										<label>
											<input
												name="isCertify"
												type="radio"
												value="T"
												onclick="checkCertify()"
												checked=""
											/>사용함
										</label>
										<label>
											<input
												name="isCertify"
												type="radio"
												value="F"
												onclick="checkCertify()"
											/>사용안함
										</label>
									</div>
									<div id="bodyCertify">
										<table
											border="0"
											cellpadding="0"
											cellspacing="0"
											width="500"
											class="t_form mgt10"
										>
											<colgroup>
												<col width="130" />
												<col width="100" />
												<col width="*" />
											</colgroup>
											<tbody>
												<tr>
													<th rowspan="2"><strong>NICE 본인확인</strong></th>
													<th>아이디</th>
													<td>
														<input
															type="text"
															name="certifyNiceId"
															class="text_input"
															value="G4978"
															maxlength="20"
														/>
													</td>
												</tr>
												<tr>
													<th>비밀번호</th>
													<td>
														<input
															type="password"
															name="certifyNicePw"
															class="text_input"
															value="UBKTT5YOV2NV"
															maxlength="20"
														/>
													</td>
												</tr>
												<tr>
													<th rowspan="2"><strong>NICE 아이핀</strong></th>
													<th>아이디</th>
													<td>
														<input
															type="text"
															name="certifyIpinId"
															class="text_input"
															value="C970"
															maxlength="20"
														/>
													</td>
												</tr>
												<tr>
													<th>비밀번호</th>
													<td>
														<input
															type="password"
															name="certifyIpinPw"
															class="text_input"
															value="Mall1234"
															maxlength="20"
														/>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					<!--사이트 일반정보-->

					<!--상품관련환경-->
					<div class="section_head">
						<h4>상품관련 환경설정</h4>
					</div>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_form"
					>
						<caption>
							상품관련 환경설정 입력 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>리스트 이미지<br />사이즈</th>
								<td>
									<div>
										가로
										<input
											name="imgSWidth"
											class="text_input"
											style="width: 40px"
											maxlength="3"
											value="600"
											onkeypress="blockNotNumber(event)"
											onkeyup="onlyInt(this)"
										/>
										픽셀 * 세로
										<input
											name="imgSHeight"
											class="text_input"
											style="width: 40px"
											maxlength="3"
											value="600"
											onkeypress="blockNotNumber(event)"
											onkeyup="onlyInt(this)"
										/>
										픽셀
									</div>
									<div class="noti_info">
										각 메인 추천상품, 상품리스트의 출력되는 이미지의 사이지를
										설정합니다.
									</div>
								</td>
							</tr>
							<tr>
								<th>상세정보 이미지 사이즈</th>
								<td>
									<div>
										가로
										<input
											name="imgMWidth"
											class="text_input"
											style="width: 40px"
											maxlength="3"
											value="450"
											onkeypress="blockNotNumber(event)"
											onkeyup="onlyInt(this)"
										/>
										픽셀 * 세로
										<input
											name="imgMHeight"
											class="text_input"
											style="width: 40px"
											maxlength="3"
											value="450"
											onkeypress="blockNotNumber(event)"
											onkeyup="onlyInt(this)"
										/>
										픽셀
									</div>
									<div class="noti_info">
										상세정보페이지의 이미지 사이즈를 설정합니다.
									</div>
								</td>
							</tr>
							<tr>
								<th>확대보기 이미지 사이즈</th>
								<td>
									<div>
										가로
										<input
											name="imgBWidth"
											class="text_input"
											style="width: 40px"
											maxlength="3"
											value="500"
											onkeypress="blockNotNumber(event)"
											onkeyup="onlyInt(this)"
										/>
										픽셀 * 세로
										<input
											name="imgBHeight"
											class="text_input"
											style="width: 40px"
											maxlength="3"
											value="500"
											onkeypress="blockNotNumber(event)"
											onkeyup="onlyInt(this)"
										/>
										픽셀
									</div>
									<div class="noti_info">
										상품의 확대보기(zoom)의 이미지 사이즈를 설정합니다.
									</div>
								</td>
							</tr>
							<tr>
								<th>상품목록 장바구니 관리기능</th>
								<td>
									<div class="label_wrap">
										<label>
											<input
												type="radio"
												name="isChoiceListCart"
												value="T"
												checked=""
											/>적용함
										</label>
										<label>
											<input
												type="radio"
												name="isChoiceListCart"
												value="F"
											/>적용안함
										</label>
									</div>
									<div class="topline pdn">
										<div class="noti_info">
											상품리스트에서 전체항목을 장바구니에 저장하실 수 있습니다.
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<th>품절상품 진열기능</th>
								<td>
									<div class="label_wrap">
										<label>
											<input
												type="radio"
												name="isDisplaySoldOut"
												value="T"
												checked=""
											/>진열하기
										</label>
										<label>
											<input
												type="radio"
												name="isDisplaySoldOut"
												value="F"
											/>진열안함
										</label>
									</div>
									<div class="topline pdn">
										<div class="noti_info">
											품절된 상품을 쇼핑몰에서 진열할지 진열하지 않을지를
											결정합니다.
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					<!--상품관련환경-->

					<!--관리자 구매확정 기간 설정-->
					<div class="section_head">
						<h4>기간 설정</h4>
					</div>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_form"
					>
						<caption>
							기간 설정 입력 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>배송완료<br />기간 설정</th>
								<td>
									<input
										type="text"
										name="deliveryperiod"
										value="0"
										maxlength="2"
										class="text_input"
										style="width: 30px"
										onkeypress="blockNotNumber(event)"
										onkeyup="onlyInt(this);DefaultValue(this,0);"
									/>
									일 이후설정된 기간동안 입점업체가 배송완료를 안하게 되면
									자동으로 ‘배송완료’ 로 전환 됩니다.
									<ul class="noti_info">
										<li>'0' 으로 설정하면 관리자가 임의 설정 불가능</li>
									</ul>
								</td>
							</tr>
							<tr>
								<th>구매확정<br />기간 설정</th>
								<td>
									<input
										type="text"
										name="decisionPeriod"
										value="1"
										maxlength="2"
										class="text_input"
										style="width: 30px"
										onkeypress="blockNotNumber(event)"
										onkeyup="onlyInt(this);DefaultValue(this,0);"
									/>
									일 이후설정된 기간동안 사용자가 구매확정을 안하게 되면
									관리자가 구매확정을 강제로 할수 있다.
									<ul class="noti_info">
										<li>'0' 으로 설정하면 관리자가 임의 설정 불가능</li>
									</ul>
								</td>
							</tr>
							<!--
		<tr>
			<th>자동탈퇴<br /> 대상자 설정</th>
			<td>
				<div style="margin-bottom:5px;">
					<span style="width:90px;"><input type="text" name="cfgautowithdrawtarget" value="0" maxlength="3" class="text_input" style="width:40px;" onKeyPress="blockNotNumber(event)" onKeyUp="onlyInt(this);DefaultValue(this,0);" readonly/> 일</span>휴면회원 전환 이후 0일 동안 접속하지 않으면 자동탈퇴 안내메일 발송
				</div>
				<div style="margin-left:90px;">(<span class="blue">0</span> 으로 설정시 자동탈퇴 대상 사용 안함으로 설정)</div>
			</td>
		</tr>
		<tr>
			<th>자동탈퇴일 설정</th>
			<td>
				<div style="margin-bottom:5px;">
					<span style="width:90px;"><input type="text" name="cfgautowithdrawperiod" value="0" maxlength="3" class="text_input" style="width:40px;" onKeyPress="blockNotNumber(event)" onKeyUp="onlyInt(this);DefaultValue(this,0);" readonly/> 일</span>휴면회원 전환 이후 0일 동안 접속하지 않으면 자동탈퇴 처리
				</div>
				<div style="margin-left:90px;">(<span class="blue">0</span> 으로 설정시 자동탈퇴 처리하지 않습니다.)</div>
			</td>
		</tr>
		-->

							<tr>
								<th>휴면전환일 설정</th>
								<td>
									<!-- 0 일(1년) 동안 미접속 시 휴면회원 전환 -->
									365일(1년) 동안 미접속 시 휴면회원 전환 (휴면회원 전환 30일전
									안내메일 발송)
								</td>
							</tr>
							<tr>
								<th>자동탈퇴일 설정</th>
								<td>
									휴면회원 전환 이후 0 일(3년) 동안 접속하지 않으면 자동탈퇴
									처리 (탈퇴처리 30일 전 안내메일 발송)
								</td>
							</tr>
						</tbody>
					</table>
					<!--관리자 구매확정 기간 설정-->

					<!-- 입점업체에 이력 보기 -->
					<div class="section_head">
						<h4>입점업체에 상품이력 보이기 설정</h4>
					</div>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_form"
					>
						<caption>
							입점업체에 상품이력 보이기 설정 입력 폼입니다.
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>설정 여부</th>
								<td>
									<div class="label_wrap">
										<label>
											<input
												type="radio"
												name="isGoodsLogInfo"
												value="T"
												checked=""
											/>보이기
										</label>
										<label>
											<input
												type="radio"
												name="isGoodsLogInfo"
												value="F"
											/>안보이기
										</label>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					<!-- 입점업체에 이력 보기 -->

					<div class="btn_wrap">
						<button type="submit" class="btn_pri">확인</button>
						<button type="button" onclick="cancel()" class="btn_sec">
							취소
						</button>
					</div>
				</section>
			</div>
		</form>

		<!-- <script type="text/javascript">
			checkCertify();
			checkSmtp();
			//]]>
		</script> -->

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style></style>
