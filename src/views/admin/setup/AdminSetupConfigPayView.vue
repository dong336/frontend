<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				결제정보설정<button
					id="addBmark"
					onclick="addBookmark('결제정보설정')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>결제정보관리</li>
				<li>결제정보설정</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				저희 몰스토어와 제휴한 PG사와 제휴를 맺으신 후 받은 정보를 적어주시면
				됩니다.
			</li>
			<li>
				기타 카드사(PG)는 직접 모듈을 설치하시거나 저희
				고객지원팀(02-555-1344)로 연락 주시면 설치해드립니다. (유료)
			</li>
			<li>결제수단을 선택하신 후 결제 수수료를 설정해 주십시요.</li>
		</ul>

		<!-- <script type="text/javascript">
			//<![CDATA[
			function toNumericData(obj) {
				var $unit = $(obj).next();

				if ($unit.val() == '100') {
					toCurrency(obj);
				} else {
					onlyFloat(obj);
				}
			}

			function changeUnit(obj) {
				toNumericData($(obj).prev()[0]);
			}

			function changePg() {
				var f = document.Frm;
				var url;

				switch (f.currentPg.value) {
					case 'INICIS':
						url = 'config_pay_inicis_ajax';
						break;
					case 'KCP':
						url = 'config_pay_kcp_ajax';
						break;
					case 'UPLUS':
						url = 'config_pay_uplus_ajax';
						break;
					case 'KAKAOPAY':
						url = 'config_pay_kakaopay_ajax';
						break;
				}

				if (url) {
					$.ajax({
						type: 'get',
						url: url,
						error: function (request, status, error) {
							alert(request.responseText);
						},
						success: function (data) {
							$('#pg_container').html(data);
						},
					});
				}
			}

			function checkNoInt(obj) {
				var f = document.Frm;
				if (obj.value == 'T') {
					$(f.noIntQuota).prop('disabled', false).css('background-color', '');
				} else {
					$(f.noIntQuota)
						.prop('disabled', true)
						.css('background-color', '#e0e0e0');
				}
			}

			function openApplicationPg() {
				var f = document.Frm;

				$('#FrmApplication').remove();

				var pop = null;
				var $form = $('<form id="FrmApplication" />').appendTo('body');

				switch (f.currentPg.value) {
					case 'INICIS':
						$form.attr({
							method: 'get',
							action: 'http://landing.inicis.com/app/landing_pg_step01.php',
							target: '_blank',
						});
						$(
							'<input type="hidden" name="cd" value="hostinglanding" />',
						).appendTo($form);
						$(
							'<input type="hidden" name="product" value="myfriend" />',
						).appendTo($form);
						break;
					case 'KCP':
						pop = openPopup(
							'../../dummy.htm',
							'ApplicationPg_Kcp',
							670,
							650,
							'scrollbars=1',
						);

						$form.attr({
							method: 'get',
							action:
								'https://admin.kcp.co.kr/Modules/homepage/service_5_3.jsp',
							target: 'ApplicationPg_Kcp',
						});
						$('<input type="hidden" name="host_id" />')
							.val('내친구네트웍스(몰스토어)')
							.appendTo($form);
						document.charset = 'euc-kr';
						break;
					case 'UPLUS':
						pop = openPopup(
							'../../dummy.htm',
							'ApplicationPg_Uplus',
							670,
							650,
							'scrollbars=1',
						);

						$form.attr({
							method: 'get',
							action:
								'https://pgweb.uplus.co.kr:8443/pg/wmp/Home/renew_register/applyRenewal_agreementInfo.jsp',
							target: 'ApplicationPg_Uplus',
						});
						$('<input type="hidden" name="host_id" />')
							.val('내친구네트웍스(몰스토어)')
							.appendTo($form);
						document.charset = 'euc-kr';
						break;
					case 'KAKAOPAY':
						pop = openPopup(
							'../../dummy.htm',
							'ApplicationPg_Kakaopay',
							670,
							650,
							'scrollbars=1',
						);

						$form.attr({
							method: 'get',
							action:
								'https://pgweb.uplus.co.kr:8443/pg/wmp/Home/renew_register/applyRenewal_agreementInfo.jsp',
							target: 'ApplicationPg_Uplus',
						});
						$('<input type="hidden" name="host_id" />')
							.val('내친구네트웍스(몰스토어)')
							.appendTo($form);
						document.charset = 'euc-kr';
						break;
				}

				$form.submit();
				document.charset = 'utf-8';
				if (pop) pop.focus();
			}

			function validSubmit() {
				var f = document.Frm;

				var usePayway = 0;
				$('input[name="usePayway"]:checked').each(function () {
					usePayway |= $(this).val().toNumeric();
				});

				var flagInvalid = false;
				$('input[name="feePayway"]').each(function (index) {
					var $payFeeValue = $('input[name="payFeeValue"]');
					var $payFeeUnit = $('select[name="payFeeUnit"]');
					var $escrowFeeValue = $('input[name="escrowFeeValue"]');
					var $escrowFeeUnit = $('input[name="escrowFeeUnit"]');

					if (
						$payFeeUnit.eq(index).val() == '200' &&
						$payFeeValue.eq(index).val().toNumeric() > 100
					) {
						alert('결제 수수료 비율은 100% 이상으로 입력할 수 없습니다.');
						$payFeeValue.eq(index).focus();
						flagInvalid = true;
						return false;
					}

					if (
						$escrowFeeUnit.eq(index).val() == '200' &&
						$escrowFeeValue.eq(index).val().toNumeric() > 100
					) {
						alert('에스크로 수수료 비율은 100% 이상으로 입력할 수 없습니다.');
						$escrowFeeValue.eq(index).focus();
						flagInvalid = true;
						return false;
					}
				});
				if (flagInvalid) return false;

				if (usePayway) {
					switch (f.currentPg.value) {
						case 'INICIS':
							if (isEmpty(f.merchantId)) {
								alert('이니시스(INICIS)에서 부여받은 상점ID를 입력해 주세요.');
								f.merchantId.focus();
								return false;
							}

							if (isEmpty(f.escrowId)) {
								alert(
									'이니시스(INICIS)에서 부여받은 에스크로 상점ID를 입력해 주세요.',
								);
								f.escrowId.focus();
								return false;
							}
							break;
						case 'KCP':
							if (isEmpty(f.merchantId)) {
								alert(
									'한국사이버결제(KCP)에서 부여받은 사이트코드를 입력해 주세요.',
								);
								f.merchantId.focus();
								return false;
							}
							/*
				if (isEmpty(f.merchantKey)) {
					alert("한국사이버결제(KCP)에서 부여받은 사이트키를 입력해 주세요.");
					f.merchantKey.focus();
					return false;
				}
*/
							break;
						case 'UPLUS':
							if (isEmpty(f.merchantId)) {
								alert('LG유플러스에서 발급한 사이트코드를 입력해 주세요.');
								f.merchantId.focus();
								return false;
							}

							if (isEmpty(f.merchantKey)) {
								alert('LG유플러스에서 발급한 상점키 사이트키를 입력해 주세요.');
								f.merchantKey.focus();
								return false;
							}
							break;
						case 'KAKAOPAY':
							if (isEmpty(f.merchantId)) {
								alert('카카오페이에서 발급한 사이트코드를 입력해 주세요.');
								f.merchantId.focus();
								return false;
							}

							if (isEmpty(f.merchantKey)) {
								alert('카카오페이에서 발급한 상점키 사이트키를 입력해 주세요.');
								f.merchantKey.focus();
								return false;
							}
							break;
					}

					if (isEmpty(f.quota)) {
						alert('일반 할부기간를 입력해 주세요.');
						f.quota.focus();
						return false;
					}

					if (getRadio(f.isNoInt) == 'T' && isEmpty(f.noIntQuota)) {
						alert('무이자 할부기간를 입력해 주세요.');
						f.noIntQuota.focus();
						return false;
					}

					if (isEmpty(f.pgUrl)) {
						alert('Url을 입력해주세요.');
						f.pgUrl.focus();
						return false;
					}
				}

				if (
					confirm(
						'해당 PG사에서 부여받은 정보를 정확히 입력하셔야\n결제가 이루어 집니다.\n\n등록하시겠습니까?',
					)
				) {
					f.submit();
				}
			}

			$(function () {
				changePg();
			});
			//]]>
		</script> -->

		<form name="Frm" method="post" action="config_pay_act">
			<div class="main_content">
				<section class="cont_wrap">
					<!-- 결제 환경 -->
					<div class="section_head">
						<h4>결제 환경</h4>
					</div>
					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_form"
					>
						<caption>
							결제 환경 입력폼
						</caption>
						<colgroup>
							<col width="130" />
						</colgroup>
						<tbody>
							<tr>
								<th rowspan="2">결제 수단</th>
								<th class="pdt0 pdb0">기본</th>
								<th class="pdt0 pdb0">에스크로</th>
							</tr>
							<tr>
								<td>
									<div class="label_wrap">
										<label for="use_payway_1"
											><input
												type="checkbox"
												id="use_payway_1"
												name="usePayway"
												value="1"
												checked=""
											/>신용카드</label
										>
										<label for="use_payway_2"
											><input
												type="checkbox"
												id="use_payway_2"
												name="usePayway"
												value="2"
												checked=""
											/>계좌이체</label
										>
										<label for="use_payway_3"
											><input
												type="checkbox"
												id="use_payway_3"
												name="usePayway"
												value="4"
												checked=""
											/>가상계좌</label
										>
									</div>
								</td>
								<td>
									<!-- 
				<input type="checkbox" id="use_escrow_payway_1" name="useEscrowPayway" value="1"  /><label for="use_escrow_payway_1">신용카드</label>&nbsp;
				<input type="checkbox" id="use_escrow_payway_2" name="useEscrowPayway" value="2"  /><label for="use_escrow_payway_2">계좌이체</label>&nbsp;
				-->
									<label for="use_escrow_payway_3"
										><input
											type="checkbox"
											id="use_escrow_payway_3"
											name="useEscrowPayway"
											value="4"
											checked=""
										/>가상계좌</label
									>
								</td>
							</tr>
							<tr>
								<th>가상계좌<br />입금마감일</th>
								<td colspan="2">
									결제일로 부터
									<input
										name="virtualLimitDay"
										value="5"
										class="text_input"
										style="width: 100px"
										maxlength="3"
										onkeyup="onlyInt(this)"
									/>
									일
								</td>
							</tr>
							<tr>
								<th>부가세 설정</th>
								<td colspan="2">
									<div class="label_wrap">
										<label for="allow_tax_free_F"
											><input
												type="radio"
												id="allow_tax_free_F"
												name="isAllowTaxFree"
												value="F"
											/>과세만 가능</label
										>
										<label for="allow_tax_free_T"
											><input
												type="radio"
												id="allow_tax_free_T"
												name="isAllowTaxFree"
												value="T"
												checked=""
											/>과세+면세 가능</label
										>
										<span class="blue"
											>(반드시 선택하신 PG사와 계약 후에 사용해야 합니다.)</span
										>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					<!--// 결제 환경 -->

					<!-- 결제 수수료 -->
					<div class="section_head" style="display: none">
						<h4>결제 수수료</h4>
					</div>
					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_form"
						style="display: none"
					>
						<caption>
							결제 수수료 입력 폼
						</caption>
						<colgroup>
							<col width="130" />
						</colgroup>
						<thead>
							<tr>
								<th></th>
								<th class="tc">결제 수수료</th>
								<th class="tc">에스크로 수수료</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>
									<input type="hidden" name="feePayway" value="1" />신용카드
								</th>
								<td>
									<input
										name="payFeeValue"
										value="0.044"
										class="text_input"
										style="width: 100px"
										maxlength="6"
										onkeyup="toNumericData(this)"
									/>
									<!-- 
					
						
							%
						
						
					 
					<input type="hidden" name="payFeeUnit" value="200" />
					 -->
									<select id="payFeeUnit" name="payFeeUnit">
										<option value="200" selected="">%</option>
										<option value="100">원</option>
									</select>
								</td>
								<td>
									<input type="hidden" name="escrowFeeValue" value="" />
									<input type="hidden" name="escrowFeeUnit" value="" />
									<input type="hidden" name="isSwapEscrowFee" value="" />
								</td>
							</tr>

							<tr>
								<th>
									<input type="hidden" name="feePayway" value="2" />계좌이체
								</th>
								<td>
									<input
										name="payFeeValue"
										value="0.02"
										class="text_input"
										style="width: 100px"
										maxlength="6"
										onkeyup="toNumericData(this)"
									/>
									<!-- 
					
						
							%
						
						
					 
					<input type="hidden" name="payFeeUnit" value="200" />
					 -->
									<select id="payFeeUnit" name="payFeeUnit">
										<option value="200" selected="">%</option>
										<option value="100">원</option>
									</select>
								</td>
								<td>
									<input type="hidden" name="escrowFeeValue" value="" />
									<input type="hidden" name="escrowFeeUnit" value="" />
									<input type="hidden" name="isSwapEscrowFee" value="" />
								</td>
							</tr>

							<tr>
								<th>
									<input type="hidden" name="feePayway" value="4" />가상계좌
								</th>
								<td>
									<input
										name="payFeeValue"
										value=""
										class="text_input"
										style="width: 100px"
										maxlength="6"
										onkeyup="toNumericData(this)"
									/>
									<!-- 
					
						
							%
						
						
					 
					<input type="hidden" name="payFeeUnit" value="200" />
					 -->
									<select id="payFeeUnit" name="payFeeUnit">
										<option value="200" selected="">%</option>
										<option value="100">원</option>
									</select>
								</td>
								<td>
									<input
										name="escrowFeeValue"
										value="2"
										class="text_input"
										style="width: 100px"
										maxlength="6"
										onkeyup="toNumericData(this)"
									/>

									%

									<input type="hidden" name="escrowFeeUnit" value="200" />
									&nbsp;
									<select id="isSwapEscrowFee" name="isSwapEscrowFee">
										<option value="F">결제 수수료에 추가</option>
										<option value="T" selected="">
											에스크로 수수료로 변경
										</option>
									</select>
								</td>
							</tr>

							<!-- tr>
				<th>수수료 부담</th>
				<td colspan="2">
					<input type="radio" id="share_dealer_pay_fee_1" name="shareDealerPayFee" value="1"  checked /><label for="share_dealer_pay_fee_1">결제수수료를 포함한 금액을 정산: <span class="blue">입점업체부담</span></label>
					&nbsp;
					<input type="radio" id="share_dealer_pay_fee_2" name="shareDealerPayFee" value="0"   /><label for="share_dealer_pay_fee_2">결제수수료를 제외한 금액을 정산: <span class="blue">마스터부담</span></label>
				</td>
			</tr //-->
						</tbody>
					</table>
					<!--// 결제 수수료 -->

					<!-- 결제 설정 -->
					<div class="section_head">
						<h4>결제 설정</h4>
					</div>
					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_form"
					>
						<caption>
							결제 설정 입력폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>결제대행사</th>
								<td>
									<div style="float: left; margin-right: 10px">
										<select
											id="currentPg"
											name="currentPg"
											onchange="changePg();"
											style="font-weight: bold"
										>
											<option value="INICIS" selected="">
												이니시스 (INICIS - INIpayTX 5.0)
											</option>
											<option value="KCP">
												한국사이버결제 (KCP - Payplus AX-HUB V6)
											</option>
											<option value="UPLUS">
												LG 유플러스 (LG U+ - XPay 2.5
											</option>
										</select>
									</div>
									<button
										type="button"
										class="btn_sec sm"
										onclick="openApplicationPg()"
									>
										온라인신청서
									</button>
								</td>
							</tr>
						</tbody>
					</table>
					<div id="pg_container">
						<table
							width="100%"
							border="0"
							cellspacing="0"
							cellpadding="0"
							class="t_form"
							style="border-top: none"
						>
							<caption>
								이니시스 결제 설정 입력폼
							</caption>
							<colgroup>
								<col width="130" />
								<col width="*" />
							</colgroup>
							<tbody>
								<tr>
									<th>상점ID</th>
									<td>
										<input
											type="text"
											name="merchantId"
											class="text_input"
											style="width: 200px; font-weight: bold"
											maxlength="40"
											value="Mallsho000"
										/>
									</td>
								</tr>
								<tr>
									<th>SignKey</th>
									<td>
										<input
											type="text"
											name="merchantKey"
											class="text_input wide"
											maxlength="100"
											value="NWc3Z3pBNE4wdmFsNWlNZFJaWmczQT09"
										/>
									</td>
								</tr>
								<tr>
									<th>에스크로 상점ID</th>
									<td>
										<input
											type="text"
											name="escrowId"
											class="text_input"
											style="width: 200px; font-weight: bold"
											maxlength="50"
											value="Mallsho000"
										/>
									</td>
								</tr>
								<tr>
									<th>일반 할부기간</th>
									<td>
										<div>
											<input
												type="text"
												name="quota"
												value="2:3:4:5:6"
												class="text_input wide"
												maxlength="125"
											/>
										</div>
										<ul class="noti_info">
											<li>할부 허용안할 경우 - 일시불</li>
											<li>"2:3:4", "2:0" &gt;&gt; 개월수를 : 로 구분된 값</li>
											<li>
												일시불은 기본적을 표시, 생략시 일시불만 5만원 이상시에만
												동작
											</li>
										</ul>
									</td>
								</tr>
								<tr>
									<th>무이자 할부사용</th>
									<td>
										<div class="label_wrap">
											<label for="no_int_1"
												><input
													type="radio"
													id="no_int_1"
													name="isNoInt"
													value="T"
													onclick="checkNoInt(this)"
												/>사용</label
											>
											<label for="no_int_2"
												><input
													type="radio"
													id="no_int_2"
													name="isNoInt"
													value="F"
													onclick="checkNoInt(this)"
													checked=""
												/>사용안함</label
											>
										</div>
										<div class="topline noti_info">
											무이자 할부는 반드시 PG사(이니시스)와 계약 후에 사용해야
											합니다.
										</div>
									</td>
								</tr>
								<tr>
									<th>무이자 할부기간</th>
									<td>
										<input
											type="text"
											name="noIntQuota"
											value=""
											class="text_input wide"
											style="background-color: #e0e0e0"
											maxlength="125"
											disabled=""
										/>
										<ul class="noti_info">
											<li>
												<strong>카드사코드</strong><br />
												외환-01, 롯데-03, 현대-04, 국민-06, BC-11, 삼성-12,
												LG-13, 신한-14, NH-16, 하나-17
											</li>
											<li>
												<strong>예시</strong><br />
												11-2:3:5:6,34-2:6, 04-2:6<br />
												카드사코드-할부개월:할부개월… 여러카드는 공백없이 ,로
												구분
											</li>
										</ul>
									</td>
								</tr>
								<tr>
									<th>URL</th>
									<td>
										http://<input
											type="text"
											name="pgUrl"
											class="text_input"
											style="width: 300px"
											maxlength="100"
											value="www.inicis.com"
										/>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!--// 결제 설정 -->

					<div class="btn_wrap">
						<button type="button" class="btn_pri" onclick="validSubmit()">
							확인
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
