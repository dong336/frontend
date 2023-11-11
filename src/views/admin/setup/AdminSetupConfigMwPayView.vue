<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				모바일결제정보설정<button
					id="addBmark"
					onclick="addBookmark('모바일결제정보설정')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>모바일관리</li>
				<li>결제정보관리</li>
				<li>모바일결제정보설정</li>
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
						url = 'config_mw_pay_inicis_ajax';
						break;
					case 'KCP':
						url = 'config_mw_pay_kcp_ajax';
						break;
					case 'UPLUS':
						url = 'config_mw_pay_uplus_ajax';
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
				}

				$form.submit();
				document.charset = 'utf-8';
				if (pop) pop.focus();
			}

			function validSubmit() {
				var f = document.Frm;

				var useMobilePayway = 0;
				$('input[name="useMobilePayway"]:checked').each(function () {
					useMobilePayway |= $(this).val().toNumeric();
				});

				var flagInvalid = false;
				$('input[name="feePayway"]').each(function (index) {
					var $payFeeValue = $('input[name="payFeeValue"]');
					var $payFeeUnit = $('input[name="payFeeUnit"]');

					if (
						$payFeeUnit.eq(index).val() == '200' &&
						$payFeeValue.eq(index).val().toNumeric() > 100
					) {
						alert('결제 수수료 비율은 100% 이상으로 입력할 수 없습니다.');
						$payFeeValue.eq(index).focus();
						flagInvalid = true;
						return false;
					}
				});
				if (flagInvalid) return false;

				if (useMobilePayway) {
					switch (f.currentPg.value) {
						case 'ALLTHEGATE':
							if (isEmpty(f.merchantId)) {
								alert(
									'올더게이트(alltheGate)에서 부여받은 상점ID를 입력해 주세요.',
								);
								f.merchantId.focus();
								return false;
							}
							break;
						case 'INICIS':
							if (isEmpty(f.merchantId)) {
								alert('이니시스(INICIS)에서 부여받은 상점ID를 입력해 주세요.');
								f.merchantId.focus();
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

		<form name="Frm" method="post" action="config_mw_pay_act">
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
								<th>모바일기본</th>
								<th>에스크로</th>
							</tr>
							<tr>
								<td>
									<div class="label_wrap">
										<label for="use_payway_1"
											><input
												type="checkbox"
												id="use_payway_1"
												name="useMobilePayway"
												value="1"
												checked=""
											/>신용카드</label
										>
										<label for="use_payway_2"
											><input
												type="checkbox"
												id="use_payway_2"
												name="useMobilePayway"
												value="2"
												checked=""
											/>계좌이체</label
										>
										<label for="use_payway_3"
											><input
												type="checkbox"
												id="use_payway_3"
												name="useMobilePayway"
												value="4"
												checked=""
											/>가상계좌</label
										>
										<label for="use_payway_4"
											><input
												type="checkbox"
												id="use_payway_4"
												name="useMobilePayway"
												value="128"
												checked=""
											/>온라인입금</label
										>
									</div>
									<!--
				모바일에서는 휴대폰 결제 작업하지 않았음 				
				<input type="checkbox" id="use_payway_5" name="useMobilePayway" value="1024"   /><label for="use_payway_5">휴대폰</label>&nbsp;
 -->
								</td>
								<td>
									<!-- 
				<input type="checkbox" id="use_mobile_escrow_payway_1" name="useMobileEscrowPayway" value="1"  /><label for="use_escrow_payway_1">신용카드</label>&nbsp;
				<input type="checkbox" id="use_mobile_escrow_payway_2" name="useMobileEscrowPayway" value="2"  /><label for="use_escrow_payway_2">계좌이체</label>&nbsp;
				 -->
									<label for="use_escrow_payway_3"
										><input
											type="checkbox"
											id="use_mobile_escrow_payway_3"
											name="useMobileEscrowPayway"
											value="4"
											checked=""
										/>가상계좌</label
									>
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
								<th class="tc">모바일 결제 수수료</th>
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
										value="0.04"
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
										value="0.03"
										class="text_input"
										style="width: 100px"
										maxlength="6"
										onkeyup="toNumericData(this)"
									/>

									%

									<input type="hidden" name="escrowFeeUnit" value="200" />
									&nbsp;
									<select id="isSwapEscrowFee" name="isSwapEscrowFee">
										<option value="F" selected="">결제 수수료에 추가</option>
										<option value="T">에스크로 수수료로 변경</option>
									</select>
								</td>
							</tr>
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
											<option value="INICIS">
												이니시스 (INICIS - INIpayTX 5.0)
											</option>
											<option value="KCP" selected="">
												한국사이버결제 (KCP - Payplus AX-HUB V6)
											</option>
											<option value="UPLUS">
												LG 유플러스 (LG U+ - XPay 2.5
											</option>
										</select>
									</div>
									<div>
										<button
											type="button"
											class="btn_sec sm"
											onclick="openApplicationPg()"
										>
											온라인신청서
										</button>
									</div>
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
								한국사이버결제 결제 설정 입력폼
							</caption>
							<colgroup>
								<col width="130" />
								<col width="*" />
							</colgroup>
							<tbody>
								<tr>
									<th>모바일 사이트코드</th>
									<td style="line-height: 20px">
										<input
											type="text"
											name="merchantId"
											class="text_input"
											style="width: 200px; font-weight: bold"
											maxlength="40"
											value="T0007"
										/>
										<span style="color: #3191b7"
											>(부여받은 사이트코드 뒷부분을 입력해 주세요.)</span
										>
									</td>
								</tr>
								<tr>
									<th>모바일 사이트키</th>
									<td>
										<input
											type="text"
											name="merchantKey"
											class="text_input"
											style="width: 99%"
											maxlength="100"
											value="4Ho4YsuOZlLXUZUdOxM1Q7X__"
										/>
									</td>
								</tr>
								<tr>
									<th>일반 할부기간</th>
									<td>
										<div>
											<select id="quota" name="quota">
												<option value="0">허용안함</option>
												<option value="2">02개월까지</option>
												<option value="3">03개월까지</option>
												<option value="4">04개월까지</option>
												<option value="5">05개월까지</option>
												<option value="6" selected="">06개월까지</option>
												<option value="7">07개월까지</option>
												<option value="8">08개월까지</option>
												<option value="9">09개월까지</option>
												<option value="10">10개월까지</option>
												<option value="11">11개월까지</option>
												<option value="12">12개월까지</option>
											</select>
										</div>
										<div style="color: #3191b7; margin-top: 5px">
											<div>※ 할부 허용안할 경우 - 허용안함 선택</div>
											<div>
												※ 값을 "05개월까지" 로 설정했을 경우 =&gt; 카드결제시
												결제창에 일시불부터 5개월까지 선택가능
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<th>무이자 할부사용</th>
									<td>
										<div>
											<input
												type="radio"
												id="no_int_1"
												name="isNoInt"
												value="T"
												onclick="checkNoInt(this)"
											/><label for="no_int_1">사용</label>&nbsp;
											<input
												type="radio"
												id="no_int_2"
												name="isNoInt"
												value="F"
												onclick="checkNoInt(this)"
												checked=""
											/><label for="no_int_2">사용안함</label>
										</div>
										<div style="color: #3191b7; margin-top: 5px">
											무이자 할부는 반드시 PG사(한국사이버결제)와 계약 후에
											사용해야 합니다.
										</div>
									</td>
								</tr>
								<tr>
									<th>무이자 할부기간</th>
									<td>
										<div>
											<input
												type="text"
												name="noIntQuota"
												value=""
												class="text_input"
												style="width: 99%; background-color: #e0e0e0"
												maxlength="125"
												disabled=""
											/>
										</div>
										<div style="color: #3191b7; margin-top: 5px">
											<div style="float: left">※ 카드사코드 :</div>
											<div>
												AmexLocal카드-CCAM, 비씨카드-CCBC, 축협카드-CCCH,
												제주은행카드-CCCJ, 시티카드-CCCT,
											</div>
											<div style="margin-left: 87px">
												현대카드-CCDI, 한미카드-CCHM, 하나카드-CCHN,
												전북은행카드-CCJB, 외환카드-CCKE,
											</div>
											<div style="margin-left: 87px">
												광주은행카드-CCKJ, 국민카드-CCKM, 조흥카드-CCKW,
												엘지카드-CCLG, 롯데카드-CCLO,
											</div>
											<div style="margin-left: 87px">
												우리카드-CCPH, 신세계한미카드-CCSG, 신한카드-CCSH,
												삼성카드-CCSS, 수협카드-CCSU,
											</div>
											<div style="margin-left: 87px">
												Amex해외카드-CAMF, Diners해외카드-CDIF,
												JCB해외카드-CJCF, Master해외카드-CMCF,
											</div>
											<div style="margin-left: 87px">Visa해외카드-CVSF</div>
										</div>
										<div style="color: #3191b7; margin-top: 5px">
											<div style="float: left">※ 예)</div>
											<div>
												모든 카드에 대해서 2개월/3개월/6개월 무이자로 적용할
												경우 : ALL-02:03:06
											</div>
											<div style="margin-left: 36px">
												국민카드 2개월/3개월/6개월 무이자로 적용할 경우 :
												CCKM-02:03:06
											</div>
											<div style="margin-left: 36px">
												국민카드 3개월/6개월, 비씨카드 3개월 무이자로 적용할
												경우 : CCKM-03:06,CCBC-03
											</div>
										</div>
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
											value="www.kcp.co.kr"
										/>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!--// 결제 설정 -->

					<div class="btn_wrap">
						<button type="submit" class="btn_pri" onclick="validSubmit()">
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
