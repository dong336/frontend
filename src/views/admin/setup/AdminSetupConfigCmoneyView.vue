<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				적립금 설정<button
					id="addBmark"
					onclick="addBookmark('적립금 설정')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>전체운영설정</li>
				<li>적립금 설정</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				적립금 사용여부를 선택하고 어떤경우에 적립금을 지급할지를 설정합니다.
			</li>
			<li>
				상품별 적립금 적용은 상품관리의 상품등록 메뉴에서 상품마다 재 설정 하실
				수 있습니다.
			</li>
		</ul>

		<!-- <script type="text/javascript">
			function validSubmit() {
				var f = document.Frm;

				switch (getRadio(f.cmoneySavePolicy)) {
					case '6':
						if (f.cmoneySavePercent.value.toNumeric() <= 0) {
							alert('적립률을 입력해 주세요.');
							f.cmoneySavePercent.focus();
							return false;
						}

						if (f.cmoneySavePercent.value.toNumeric() > 100) {
							alert('100% 이하로 입력해 주세요.');
							f.cmoneySavePercent.value = '100';
							f.cmoneySavePercent.focus();
							return false;
						}

						if (
							!isEmpty(f.cmoneySavePercent) &&
							!checkRound(f.cmoneySavePercent.value, 2)
						) {
							alert('소수점 2자리수 이상은 불가능합니다.');
							f.cmoneySavePercent.focus();
							return false;
						}
						break;
					case '8':
						if (f.cmoneySaveMoney.value.toNumeric() <= 0) {
							alert('적립금을 입력해 주세요.');
							f.cmoneySaveMoney.focus();
							return false;
						}
						break;
				}

				if (isEmpty(f.cmoneyUseLimit)) {
					alert('사용 가능 보유 적립금을 입력해 주세요.');
					f.cmoneyUseLimit.focus();
					return false;
				}

				if (isEmpty(f.cmoneyUseMin)) {
					alert('결제시 사용 가능 최소 적립금을 입력해 주세요.');
					f.cmoneyUseMin.focus();
					return false;
				}

				if (isEmpty(f.cmoneyUseMax)) {
					alert('결제시 사용 가능 최대 적립금을 입력해 주세요.');
					f.cmoneyUseMax.focus();
					return false;
				}

				if (confirm('등록하시겠습니까?')) {
					f.submit();
				}
			}

			function cancel() {
				location.href = '/nmanager';
			}

			$(function () {
				$('input[name="cmoneySavePolicy"]').click(function () {
					$(this)
						.parent()
						.parent()
						.find('input:text, select')
						.prop('disabled', true);
					$(this)
						.parent()
						.children('input:text, select')
						.prop('disabled', false);
				});
				$('input[name="cmoneySavePolicy"]:checked').click();
			});
			//]]>
		</script> -->

		<form name="Frm" method="post" action="config_cmoney_act">
			<input type="hidden" name="mode" value="CMONEY" />
			<div class="main_content">
				<section class="cont_wrap">
					<div class="section_head">
						<h4>기본 적립금 지급 설정</h4>
					</div>
					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_form"
					>
						<caption>
							기본 적립금 지급 설정 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>회원 가입 적립금</th>
								<td>
									<input
										type="text"
										name="cmoneySaveJoin"
										value="10,000"
										maxlength="10"
										class="text_input tr"
										onkeyup="toCurrency(this)"
										onblur="toCurrency(this)"
									/>
									원
									<div class="topline noti_info">
										회원 가입시 적립해 줄 적립금액 입니다.
									</div>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="section_head">
						<h4>상품 적립금 지급 설정</h4>
					</div>
					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_form"
					>
						<caption>
							상품 적립금 지급 설정 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>적립금 기본정책</th>
								<td>
									<ul>
										<li>
											<label>
												<input type="radio" name="cmoneySavePolicy" value="0" />
												적립금 지급 안함
											</label>
										</li>
										<li class="mgt5">
											<label>
												<input type="radio" name="cmoneySavePolicy" value="1" />
												회원등급 적립금 설정에 따라 지급
											</label>
										</li>
										<li class="mgt5">
											<label>
												<input
													type="radio"
													name="cmoneySavePolicy"
													value="6"
													checked=""
												/>
												<select
													id="cmoneySavePolicyPrice"
													name="cmoneySavePolicyPrice"
													class="sm"
												>
													<option value="2" selected="">판매가</option>
													<option value="4">결제가</option>
												</select>
												의
												<input
													type="text"
													name="cmoneySavePercent"
													value="3"
													maxlength="5"
													class="text_input tr"
													onkeyup="onlyFloat(this)"
												/>
												% 지급
											</label>
										</li>
										<li class="mgt5">
											<label>
												<input type="radio" name="cmoneySavePolicy" value="8" />
												구매 상품(개수) 당
												<input
													type="text"
													name="cmoneySaveMoney"
													value="0"
													class="text_input tr"
													onkeyup="toCurrency(this)"
													disabled="disabled"
												/>
												원 지급
											</label>
										</li>
									</ul>
								</td>
							</tr>
							<tr>
								<th>상품평 적립금</th>
								<td>
									<ul class="checkoptionrow">
										<li class="inform">
											텍스트
											<input
												type="text"
												name="cmoneyReview"
												value="1000"
												maxlength="10"
												class="text_input tr"
												onkeyup="toNumericData(this)"
											/>
											원
										</li>
										<li class="inform">
											텍스트 + 이미지
											<input
												type="text"
												name="cmoneyReviewimg"
												value="2000"
												maxlength="10"
												class="text_input tr"
												onkeyup="toNumericData(this)"
											/>
											원
										</li>
									</ul>
								</td>
							</tr>

							<tr>
								<th>적립금 설정 권한</th>
								<td>
									<div class="label_wrap">
										<label>
											<input
												type="radio"
												name="permDealerCmoney"
												value="0"
											/>마스터만 설정
										</label>
										<label>
											<input
												type="radio"
												name="permDealerCmoney"
												value="1"
												checked=""
											/>입점업체 설정 가능
										</label>
									</div>
								</td>
							</tr>
							<tr>
								<th>적립금 부담 설정</th>
								<td>
									<div class="label_wrap">
										<label
											><input
												type="radio"
												name="shareDealerCmoney"
												value="0"
											/>마스터가 부담</label
										>
										<label
											><input
												type="radio"
												name="shareDealerCmoney"
												value="1"
												checked=""
											/>입점업체가 부담</label
										>
									</div>
									<div class="topline noti_info">
										상품에서 “기본정책” 이외 설정으로 적립금 지급시, 위 설정과
										관계없이 입점업체에게 부담됩니다.
									</div>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="section_head">
						<h4>적립금 사용 설정</h4>
					</div>
					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_form"
					>
						<caption>
							적립금 지급 설정 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>사용 가능<br />보유 적립금</th>
								<td>
									<input
										type="text"
										name="cmoneyUseLimit"
										value="5,000"
										maxlength="10"
										class="text_input tr"
										onkeyup="toCurrency(this)"
										onblur="toCurrency(this)"
									/>
									원 이상 보유시 사용 가능.
									<div class="topline noti_info">
										적립금이 얼마이상이어야 사용가능한지 금액을 적어주세요.
									</div>
								</td>
							</tr>
							<tr>
								<th>결제시 사용 가능<br />최소 적립금</th>
								<td>
									<input
										type="text"
										name="cmoneyUseMin"
										value="200"
										maxlength="10"
										class="text_input tr"
										onkeyup="toCurrency(this)"
										onblur="toCurrency(this)"
									/>
									원 이상 사용 가능.
									<div class="topline noti_info">
										한번의 구매 결제시 사용할 수 있는 최소금액을 적어주세요.
									</div>
								</td>
							</tr>
							<tr>
								<th>결제시 사용 가능<br />최대 적립금</th>
								<td>
									<input
										type="text"
										name="cmoneyUseMax"
										value="10,000,000"
										maxlength="10"
										class="text_input tr"
										onkeyup="toCurrency(this)"
										onblur="toCurrency(this)"
									/>
									원 이하 사용 가능.
									<div class="topline noti_info">
										한번의 구매 결제시 사용할 수 있는 최대금액을 적어주세요.
									</div>
								</td>
							</tr>
						</tbody>
					</table>

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

<style lang="scss" scoped></style>
