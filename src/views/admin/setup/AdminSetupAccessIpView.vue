<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				관리자접속IP설정<button
					id="addBmark"
					onclick="addBookmark('관리자접속IP설정')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>관리자설정</li>
				<li>관리자접속IP설정</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>관리자에 접속 가능한 IP를 설정합니다.</li>
		</ul>

		<!-- <script type="text/javascript">
			//<![CDATA[
			function setBand(obj) {
				var f = document.Frm;
				if (obj.checked) {
					f.ipBandEnd.disabled = false;
					_es('bodyBandEnd').display = '';
				} else {
					_es('bodyBandEnd').display = 'none';
					f.ipBandEnd.disabled = true;
				}
			}

			function setNowIp() {
				var f = document.Frm;
				var arrIp = '127.0.0.1'.split('.');

				f.cbBand.checked = false;
				setBand(f.cbBand);

				for (var i = 1; i <= 3; i++) {
					f['ip' + i].value = arrIp[i - 1];
				}
				f.ipBandBegin.value = arrIp[3];
			}

			function addIp() {
				var f = document.Frm;
				var accessIp = '';

				for (var i = 1; i <= 3; i++) {
					var obj = f['ip' + i];
					if (isEmpty(obj)) {
						alert('IP를 입력해 주세요.');
						obj.focus();
						return false;
					}

					if (obj.value.toNumeric() < 0 || obj.value.toNumeric() > 255) {
						alert('IP는 0~255 사이의 숫자만 입력이 가능합니다.');
						obj.value = '';
						obj.focus();
						return false;
					}

					accessIp += (accessIp ? '.' : '') + obj.value.toNumeric();
				}

				if (f.cbBand.checked) {
					if (isEmpty(f.ipBandBegin)) {
						accessIp += '.' + 0;
					} else {
						if (
							f.ipBandBegin.value.toNumeric() < 0 ||
							f.ipBandBegin.value.toNumeric() > 255
						) {
							alert('IP는 0~255 사이의 숫자만 입력이 가능합니다.');
							f.ipBandBegin.value = '';
							f.ipBandBegin.focus();
							return false;
						}

						accessIp += '.' + f.ipBandBegin.value.toNumeric();
					}

					if (isEmpty(f.ipBandEnd)) {
						accessIp += ' ~ ' + 255;
					} else {
						if (
							f.ipBandEnd.value.toNumeric() < 0 ||
							f.ipBandEnd.value.toNumeric() > 255
						) {
							alert('IP는 0~255 사이의 숫자만 입력이 가능합니다.');
							f.ipBandEnd.value = '';
							f.ipBandEnd.focus();
							return false;
						}

						accessIp += ' ~ ' + f.ipBandEnd.value.toNumeric();
					}
				} else {
					if (isEmpty(f.ipBandBegin)) {
						alert('IP를 입력해 주세요.');
						f.ipBandBegin.focus();
						return false;
					}

					if (
						f.ipBandBegin.value.toNumeric() < 0 ||
						f.ipBandBegin.value.toNumeric() > 255
					) {
						alert('IP는 0~255 사이의 숫자만 입력이 가능합니다.');
						f.ipBandBegin.value = '';
						f.ipBandBegin.focus();
						return false;
					}

					accessIp += '.' + f.ipBandBegin.value.toNumeric();
				}

				for (var i = 0; i < f.accessIp.length; i++) {
					if (f.accessIp.options[i].text == accessIp) {
						alert('이미 추가된 IP(대역) 입니다.');
						return false;
					}
				}

				addSelectOption(f.accessIp, accessIp, accessIp.stripspace());
			}

			function removeIp() {
				var f = document.Frm;

				for (var i = f.accessIp.length - 1; i > -1; i--) {
					if (f.accessIp[i].selected) {
						removeSelectOption(f.accessIp, i);
					}
				}
			}

			function validSubmit() {
				var f = document.Frm;

				if (getRadio(f.isAdminAccessIp) == 'T' && f.accessIp.length == 0) {
					alert('접속 가능 IP를 설정해 주세요.');
					f.accessIp.focus();
					return false;
				}

				if (confirm('등록하시겠습니까?')) {
					for (var i = 0; i < f.accessIp.length; i++) {
						f.accessIp[i].selected = true;
					}

					f.submit();
				}
			}
			//]]>
		</script> -->

		<form name="Frm" method="post" action="access_ip_act">
			<div class="main_content">
				<section class="cont_wrap">
					<div class="section_head">
						<h4>접속 IP 설정</h4>
					</div>

					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_form"
					>
						<caption>
							접속 IP설정 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>접속 제한 여부</th>
								<td>
									<div class="label_wrap">
										<label for="isAccessIP_F"
											><input
												type="radio"
												id="isAccessIP_F"
												name="isAdminAccessIp"
												value="F"
												checked=""
											/>모든 IP 허용
										</label>
										<label for="isAccessIP_T"
											><input
												type="radio"
												id="isAccessIP_T"
												name="isAdminAccessIp"
												value="T"
											/>IP 접속 제한 (설정된 IP만 접속 가능)</label
										>
									</div>
								</td>
							</tr>
							<tr>
								<th rowspan="2">접속 가능 IP</th>
								<td>
									<table
										border="0"
										cellpadding="0"
										cellspacing="0"
										width="600"
										class="t_form"
									>
										<colgroup>
											<col width="130" />
											<col width="*" />
										</colgroup>
										<tbody>
											<tr>
												<th rowspan="2"><strong>IP 추가</strong></th>
												<td>
													현재 접속 IP (127.0.0.1)
													<button
														type="button"
														onclick="setNowIp()"
														class="btn_sec sm"
													>
														선택
													</button>
												</td>
											</tr>
											<tr>
												<td class="lineh">
													<input
														type="text"
														name="ip1"
														class="text_input"
														style="width: 40px"
														maxlength="3"
														onkeypress="blockNotNumber(event)"
														onkeyup="onlyInt(this)"
													/>
													<span>-</span>
													<input
														type="text"
														name="ip2"
														class="text_input"
														style="width: 40px"
														maxlength="3"
														onkeypress="blockNotNumber(event)"
														onkeyup="onlyInt(this)"
													/>
													<span>-</span>
													<input
														type="text"
														name="ip3"
														class="text_input"
														style="width: 40px"
														maxlength="3"
														onkeypress="blockNotNumber(event)"
														onkeyup="onlyInt(this)"
													/>
													<span>-</span>
													<input
														type="text"
														name="ipBandBegin"
														class="text_input"
														style="width: 40px"
														maxlength="3"
														onkeypress="blockNotNumber(event)"
														onkeyup="onlyInt(this)"
													/>
													<span id="bodyBandEnd" style="display: none"
														>~
														<input
															type="text"
															name="ipBandEnd"
															class="text_input"
															style="width: 35px"
															maxlength="3"
															onkeypress="blockNotNumber(event)"
															onkeyup="onlyInt(this)"
													/></span>
													<ul class="arrange fr">
														<li>
															<label for="cd_band"
																><input
																	type="checkbox"
																	id="cd_band"
																	name="cbBand"
																	onclick="setBand(this)"
																/>대역 지정
															</label>
														</li>
														<li>
															<button
																type="button"
																onclick="addIp()"
																class="btn_sec sm"
															>
																추가
															</button>
														</li>
													</ul>
												</td>
											</tr>
										</tbody>
									</table>
									<ul class="noti_info">
										<li>IP 대역 지정은 4번째 자리에만 설정할 수 있습니다.</li>
										<li>
											IP 대역을 입력하지 않으면 대역대(0~255)로 설정됩니다.
										</li>
									</ul>
								</td>
							</tr>
							<tr>
								<td>
									<select
										name="accessIp"
										size="15"
										multiple=""
										style="width: 200px; height: 150px"
									>
										<option value="127.0.0.1:1">127.0.0.1</option>

										<option value="123.143.85.245~245:2">
											123.143.85.245~245
										</option>

										<option value="124.61.147.42~42:3">124.61.147.42~42</option>

										<option value="203.249.162.60:6">203.249.162.60</option>

										<option value="123.123.123.123:7">123.123.123.123</option>

										<option value="121.66.217.114:10">121.66.217.114</option>
									</select>
									<div class="mgt10">
										<span class="button black small"
											><button type="button" onclick="removeIp()">
												선택 삭제
											</button></span
										>
									</div>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="btn_wrap">
						<button type="button" class="btn_pri" onclick="validSubmit()">
							저장
						</button>
						<button type="button" onclick="cancel()" class="btn_sec">
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

<style></style>
