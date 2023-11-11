<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				PAYCO 결제정보설정<button
					id="addBmark"
					onclick="addBookmark('PAYCO 결제정보설정')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>결제정보관리</li>
				<li>PAYCO 결제정보설정</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>PAYCO 결제정보를 설정 관리합니다.</li>
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

			function checkNoInt(obj) {
				var f = document.Frm;
				if (obj.value == 'T') {
					$(f.noIntQuota).prop('disabled', false).css('background-color', '');
				} else {
					$(f.noIntQuota)
						.prop('disabled', true)
						.css('background-color', '#e0e0e0');
					$(f.noIntQuota).val('');
				}
			}

			function validSubmit() {
				var f = document.Frm;

				var usePayway = 0;
				$('input[name="usePayway"]:checked').each(function () {
					usePayway |= $(this).val().toNumeric();
				});

				if (usePayway) {
					if (isEmpty(f.merchantId)) {
						alert('PAYCO에서 발급한 사이트ID를 입력해 주세요.');
						f.merchantId.focus();
						return false;
					}

					if (isEmpty(f.merchantKey)) {
						alert('PAYCO에서 발급한 상점키를 입력해 주세요.');
						f.merchantKey.focus();
						return false;
					}

					if (isEmpty(f.productId)) {
						alert('PAYCO에서 발급한 상품ID를 입력해 주세요.');
						f.productId.focus();
						return false;
					}

					// 		if (isEmpty(f.quota)) {
					// 			alert("일반 할부기간를 입력해 주세요.");
					// 			f.quota.focus();
					// 			return false;
					// 		}

					// 		if (getRadio(f.isNoInt) == "T" && isEmpty(f.noIntQuota)) {
					// 			alert("무이자 할부기간를 입력해 주세요.");
					// 			f.noIntQuota.focus();
					// 			return false;
					// 		}

					// 		if (isEmpty(f.pgUrl)) {
					// 			alert("Url을 입력해주세요.");
					// 			f.pgUrl.focus();
					// 			return false;
					// 		}

					if (
						confirm(
							'해당 PG사에서 부여받은 정보를 정확히 입력하셔야\n결제가 이루어 집니다.\n\n등록하시겠습니까?',
						)
					) {
						f.submit();
					}
				} else {
					if (confirm('등록하시겠습니까?')) {
						f.submit();
					}
				}
			}

			function checkUsePayway(obj) {
				if ($('input[name="usePayway"]:checked').val() == '64') {
					$('#divPaycoArea').show();
				} else {
					$('#divPaycoArea').hide();
				}
			}

			$(function () {
				// 	changePg();
				// 	$('input[name="usePayway"]').attr("checked", "checked");
				checkUsePayway();
			});
			//]]>
		</script> -->

		<form name="Frm" method="post" action="config_payco_act">
			<div class="main_content">
				<section class="cont_wrap">
					<div class="section_head">
						<h4>PAYCO 사용여부</h4>
					</div>
					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_form"
					>
						<caption>
							PAYCO 사용여부
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>사용여부</th>
								<td>
									<label>
										<input
											type="checkbox"
											name="usePayway"
											value="64"
											checked=""
											onclick="checkUsePayway(this)"
										/>PAYCO를 사용합니다.
									</label>
								</td>
							</tr>
						</tbody>
					</table>

					<div id="divPaycoArea" class="mgt30">
						<!-- 결제 설정 -->
						<div class="section_head">
							<h4>결제 설정</h4>
						</div>
						<div id="pg_container">
							<table
								width="100%"
								border="0"
								cellspacing="0"
								cellpadding="0"
								class="t_form"
							>
								<caption>
									PAYCO 결제 설정 입력폼
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
												value=""
											/>
										</td>
									</tr>
									<tr>
										<th>상점키</th>
										<td>
											<input
												type="text"
												name="merchantKey"
												class="text_input"
												maxlength="100"
												value=""
											/>
										</td>
									</tr>
									<tr>
										<th>상품ID</th>
										<td>
											<input
												type="text"
												name="productId"
												class="text_input"
												maxlength="100"
												value=""
											/>
										</td>
									</tr>
									<tr>
										<th>부가세 설정</th>
										<td>
											<div class="label_wrap">
												<label for="allow_tax_free_F"
													><input
														type="radio"
														id="allow_tax_free_F"
														name="isAllowTaxFreeForPayco"
														value="F"
														checked=""
													/>과세만 가능</label
												>
												<label for="allow_tax_free_T"
													><input
														type="radio"
														id="allow_tax_free_T"
														name="isAllowTaxFreeForPayco"
														value="T"
													/>과세+면세 가능</label
												>
												<span class="blue"
													>(반드시 선택하신 PG사와 계약 후에 사용해야
													합니다.)</span
												>
											</div>
										</td>
									</tr>
									<tr>
										<th>
											<input type="hidden" name="feePayway" value="64" />결제
											수수료
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
											%
											<input type="hidden" name="payFeeUnit" value="200" />
										</td>
									</tr>

									<!-- 
			<tr>
				<th>일반 할부기간</th>
				<td>
					<div><input type="text" name="quota" value="" class="text_input" maxlength="125" /></div>
					<div style="color:#3191b7; margin-top:5px;">※ 00:일시불, 02:2개월, 03:3개월, ... , 12:12개월</div>
					<div style="color:#3191b7; margin-top:5px;">
						<div style="float:left;">※ 예)</div>
						<div>할부기간을 일시불만 가능하도록 적용할 경우 : 00</div>
						<div style="margin-left:36px;">할부기간을 일시불~12개월까지 적용할 경우 : 12</div>
					</div>
				</td>
			</tr>
			<tr>
				<th>무이자 할부사용</th>
				<td>
					<div>
						<input type="radio" id="no_int_1" name="isNoInt" value="T" onClick="checkNoInt(this)"  /><label for="no_int_1">사용</label>&nbsp;
						<input type="radio" id="no_int_2" name="isNoInt" value="F" onClick="checkNoInt(this)"  checked /><label for="no_int_2">사용안함</label>
					</div>
					<div style="color:#3191b7; margin-top:5px;">무이자 할부는 반드시 PG사(PAYCO)와 계약 후에 사용해야 합니다.</div>
				</td>
			</tr>
			<tr>
				<th>무이자 할부기간</th>
				<td>
					<div><input type="text" name="noIntQuota" value="" class="text_input" style="width:99%;background-color:#e0e0e0;" maxlength="125"   disabled /></div>
					<div style="color:#3191b7; margin-top:5px;">
						<div style="float:left;">※ 카드사코드 :</div>
						<div>BC-CC01, 국민-CC02, 외환-CC03, 삼성-CC04, 신한-CC06, 현대-CC07, 롯데-CC08, NH채움-CC12, 하나SK-CC16</div>
					</div>
					<div style="color:#3191b7; margin-top:5px;">
						<div style="float:left;">※ 예)</div>
						<div>모든 카드에 대해서 3개월/6개월/9개월 무이자로 적용할 경우 : ALL-3:6:9</div>
						<div style="margin-left:36px;">국민카드 3개월/6개월/9개월 무이자로 적용할 경우 : CC02-3:6:9</div>
						<div style="margin-left:36px;">국민카드 3개월/6개월, 외환카드 2개월/3개월 무이자로 적용할 경우 : CC02-3:6,CC03-2:3</div>
					</div>
				</td>
			</tr>
			
			<tr>
				<th>URL</th>
				<td>
					http://<input type="text" name="pgUrl" class="text_input" style="width:300px" maxlength="100" value="" />
				</td>
			</tr>
			 -->
								</tbody>
							</table>
						</div>
						<!--// 결제 설정 -->
					</div>

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
