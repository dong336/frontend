<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				입점업체 승인환경설정<button
					id="addBmark"
					onclick="addBookmark('입점업체 승인환경설정')"
					class="add_bmark active"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>입점업체 승인관리</li>
				<li>입점업체 승인환경설정</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>입점업체(입점업체) 승인여부 설정이 가능합니다.</li>
		</ul>
		<!-- <script type="text/javascript">
			function cancel() {
				history.back();
			}

			function changeApprDealerRegistBiz() {
				var value = $(':input:radio[name=apprDealerRegistBiz]:checked').val();
				if (value == '1') {
					//관리자 승인후
					$('#appr_item').show();
				} else {
					$('#appr_item').hide();
				}
			}

			function validSubmit(f) {
				var apprDealerRegistBizVal = $(
					':input:radio[name=apprDealerRegistBiz]:checked',
				).val();

				if (apprDealerRegistBizVal == '1') {
					var isChecked = false;

					$(':input:checkbox[name=apprDealerRegistItem1]').each(function () {
						if ($(this).is(':checked')) {
							isChecked = true;
						}
					});

					$(':input:checkbox[name=apprDealerRegistItem2]').each(function () {
						if ($(this).is(':checked')) {
							isChecked = true;
						}
					});

					$(':input:checkbox[name=apprDealerRegistItem3]').each(function () {
						if ($(this).is(':checked')) {
							isChecked = true;
						}
					});

					if (!isChecked) {
						if (!confirm('선택된 항목이 없습니다.\n등록하시겠습니까?')) {
							return false;
						}
						/*} else if(!$("#apprDealerRegistItem1_7").is(":checked")){
			if(!confirm("수수료 율 설정이 선택되지 않았습니다. \n미 선택 시 입점업체에 수수료율 설정권한이 부여됩니다.")){
				return false;
			} */
					} else {
						if (!confirm('등록하시겠습니까?')) {
							return false;
						}
					}
				} else {
					if (!confirm('등록하시겠습니까?')) {
						return false;
					}
				}
			}

			$(document).ready(function () {
				changeApprDealerRegistBiz();
			});
			//]]>
		</script> -->

		<form
			name="Frm"
			method="post"
			action="config_dealer_act"
			onsubmit="return validSubmit(this)"
		>
			<input type="hidden" name="mode" value="DEALER" />

			<div class="main_content">
				<section class="cont_wrap">
					<!--승인설정 관리-->
					<div class="section_head">
						<h4>일반설정 관리</h4>
					</div>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_form"
					>
						<caption>
							일반설정 관리 폼
						</caption>
						<colgroup>
							<col width="150" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>가입관리</th>
								<td>
									<div class="label_wrap">
										<label for="apprDealerJoinBiz_1"
											><input
												type="radio"
												id="apprDealerJoinBiz_1"
												name="apprDealerJoinBiz"
												value="1"
												checked=""
											/>승인 후 등록</label
										>
										<label for="apprDealerJoinBiz_0"
											><input
												type="radio"
												id="apprDealerJoinBiz_0"
												name="apprDealerJoinBiz"
												value="0"
											/>미 승인 등록</label
										>
										<span
											>(가입시 정산주기는
											<select
												id="dealerAccountCycle"
												name="dealerAccountCycle"
												style="width: 70px"
											>
												<option value="1" selected="">일정산</option>
												<option value="7">주정산</option>
												<option value="15">15일정산</option>
												<option value="30">월정산</option>
											</select>
											으로 설정)</span
										>
									</div>
									<div class="topline noti_info">
										입점업체의 가입승인 여부를 설정합니다.
									</div>
								</td>
							</tr>

							<tr>
								<th>이벤트관리</th>
								<td>
									<div class="label_wrap">
										<label for="apprDealerEventRegistBiz_1"
											><input
												type="radio"
												id="apprDealerEventRegistBiz_1"
												name="apprDealerEventRegistBiz"
												value="1"
												checked=""
											/>승인 후 등록</label
										>
										<label for="apprDealerEventRegistBiz_0"
											><input
												type="radio"
												id="apprDealerEventRegistBiz_0"
												name="apprDealerEventRegistBiz"
												value="0"
											/>미 승인 등록</label
										>
									</div>
									<div class="topline noti_info">
										일반/할인 이벤트 등록/수정/삭제 시 승인여부를 설정합니다.
									</div>
								</td>
							</tr>

							<tr>
								<th>브랜드관리</th>
								<td>
									<div class="label_wrap">
										<label for="apprBrandRegistBiz_1"
											><input
												type="radio"
												id="apprBrandRegistBiz_1"
												name="apprBrandRegistBiz"
												value="1"
												checked=""
											/>승인 후 등록</label
										>
										<label for="apprBrandRegistBiz_0"
											><input
												type="radio"
												id="apprBrandRegistBiz_0"
												name="apprBrandRegistBiz"
												value="0"
											/>미 승인 등록</label
										>
									</div>
									<div class="topline noti_info">
										입점업체에서 등록한 브랜드의 승인여부를 설정합니다.
									</div>
								</td>
							</tr>

							<tr>
								<th>정산 관리</th>
								<td>
									<div class="label_wrap">
										<label for="apprDealerAccountBiz_1"
											><input
												type="radio"
												id="apprDealerAccountBiz_1"
												name="apprDealerAccountBiz"
												value="1"
												checked=""
											/>관리자 "정산확인" 후 입점업체 "업체확인" 가능</label
										>
										<label for="apprDealerAccountBiz_0"
											><input
												type="radio"
												id="apprDealerAccountBiz_0"
												name="apprDealerAccountBiz"
												value="0"
											/>곧 바로 "업체확인" 가능</label
										>
									</div>
									<div class="topline noti_info">
										정산 요청 가능여부를 결정합니다.
									</div>
								</td>
							</tr>
						</tbody>
					</table>

					<!--승인설정 관리-->
					<div class="section_head">
						<h4>상품정보설정관리</h4>
					</div>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_form"
					>
						<caption>
							상품정보설정관리 폼
						</caption>
						<colgroup>
							<col width="150" />
							<col width="*" />
						</colgroup>

						<tbody>
							<tr>
								<th>등록/수정 /삭제 설정</th>
								<td>
									<div class="label_wrap">
										<label for="apprDealerRegistBiz_1"
											><input
												type="radio"
												id="apprDealerRegistBiz_1"
												name="apprDealerRegistBiz"
												onchange="changeApprDealerRegistBiz()"
												value="1"
												checked=""
											/>승인 후 등록</label
										>
										<label for="apprDealerRegistBiz_0"
											><input
												type="radio"
												id="apprDealerRegistBiz_0"
												name="apprDealerRegistBiz"
												onchange="changeApprDealerRegistBiz()"
												value="0"
											/>미 승인 등록</label
										>
									</div>
									<div class="topline noti_info">
										선택된 설정은 입점업체 신청/목록 내 기본설정으로 노출됩니다.
									</div>
								</td>
							</tr>

							<tr id="appr_item" style="">
								<th>수정 승인 항목 설정</th>
								<td>
									<div class="label_wrap">
										<!-- 카테고리 -->
										<label for="apprDealerRegistItem2_6">
											<input
												type="checkbox"
												name="apprDealerRegistItem2"
												id="apprDealerRegistItem2_6"
												value="32"
												checked=""
											/>카테고리
										</label>
										<!-- 상품명 -->
										<label for="apprDealerRegistItem1_1">
											<input
												type="checkbox"
												name="apprDealerRegistItem1"
												id="apprDealerRegistItem1_1"
												value="1"
											/>상품명
										</label>
										<!-- 간략설명 -->
										<label for="apprDealerRegistItem1_2">
											<input
												type="checkbox"
												name="apprDealerRegistItem1"
												id="apprDealerRegistItem1_2"
												value="2"
												checked=""
											/>간략설명
										</label>
										<!-- 이미지 -->
										<label for="apprDealerRegistItem1_3">
											<input
												type="checkbox"
												name="apprDealerRegistItem1"
												id="apprDealerRegistItem1_3"
												value="4"
												checked=""
											/>이미지
										</label>
										<!-- 시중가 -->
										<label for="apprDealerRegistItem1_4">
											<input
												type="checkbox"
												name="apprDealerRegistItem1"
												id="apprDealerRegistItem1_4"
												value="8"
												checked=""
											/>시중가
										</label>
										<!-- 판매가 -->
										<label for="apprDealerRegistItem1_5">
											<input
												type="checkbox"
												name="apprDealerRegistItem1"
												id="apprDealerRegistItem1_5"
												value="16"
												checked=""
											/>판매가
										</label>
										<!-- 공급가 -->
										<label for="apprDealerRegistItem1_6">
											<input
												type="checkbox"
												name="apprDealerRegistItem1"
												id="apprDealerRegistItem1_6"
												value="32"
												checked=""
											/>공급가
										</label>
										<!-- 수수료율 -->
										<label for="apprDealerRegistItem1_7">
											<input
												type="checkbox"
												name="apprDealerRegistItem1"
												id="apprDealerRegistItem1_7"
												value="64"
												checked=""
											/>수수료율
										</label>
										<!-- 부가가치세 -->
										<label for="apprDealerRegistItem1_8">
											<input
												type="checkbox"
												name="apprDealerRegistItem1"
												id="apprDealerRegistItem1_8"
												value="128"
												checked=""
											/>부가가치세
										</label>
										<!-- 재고 -->
										<label for="apprDealerRegistItem1_9">
											<input
												type="checkbox"
												name="apprDealerRegistItem1"
												id="apprDealerRegistItem1_9"
												value="256"
												checked=""
											/>재고
										</label>
										<!-- 품절여부 -->
										<label for="apprDealerRegistItem2_7"
											>품절여부
											<input
												type="checkbox"
												name="apprDealerRegistItem2"
												id="apprDealerRegistItem2_7"
												value="64"
												checked=""
											/>
										</label>
										<!-- 진열상태 -->
										<label for="apprDealerRegistItem1_10"
											>진열상태
											<input
												type="checkbox"
												name="apprDealerRegistItem1"
												id="apprDealerRegistItem1_10"
												value="512"
												checked=""
											/>
										</label>
										<!-- 제조사 -->
										<label for="apprDealerRegistItem2_1"
											>제조사
											<input
												type="checkbox"
												name="apprDealerRegistItem2"
												id="apprDealerRegistItem2_1"
												value="1"
												checked=""
											/>
										</label>
										<!-- 원산지 -->
										<label for="apprDealerRegistItem2_2"
											>원산지
											<input
												type="checkbox"
												name="apprDealerRegistItem2"
												id="apprDealerRegistItem2_2"
												value="2"
												checked=""
											/>
										</label>
										<!-- 상품정보고시 -->
										<label for="apprDealerRegistItem2_8"
											>상품정보고시
											<input
												type="checkbox"
												name="apprDealerRegistItem2"
												id="apprDealerRegistItem2_8"
												value="128"
												checked=""
											/>
										</label>
										<!-- 배송비구분 -->
										<label for="apprDealerRegistItem2_3"
											>배송비구분
											<input
												type="checkbox"
												name="apprDealerRegistItem2"
												id="apprDealerRegistItem2_3"
												value="4"
												checked=""
											/>
										</label>
										<!-- 배송비 -->
										<label for="apprDealerRegistItem2_4"
											>배송비
											<input
												type="checkbox"
												name="apprDealerRegistItem2"
												id="apprDealerRegistItem2_4"
												value="8"
												checked=""
											/>
										</label>
										<!-- 배송비무료금액 -->
										<label for="apprDealerRegistItem2_5"
											>배송비무료금액
											<input
												type="checkbox"
												name="apprDealerRegistItem2"
												id="apprDealerRegistItem2_5"
												value="16"
												checked=""
											/>
										</label>
										<!-- 배송정책 -->
										<label for="apprDealerRegistItem3_1"
											>배송정책
											<input
												type="checkbox"
												name="apprDealerRegistItem3"
												id="apprDealerRegistItem3_1"
												value="1"
												checked=""
											/>
										</label>
										<!-- 옵션 -->
										<label for="apprDealerRegistItem3_2"
											>옵션
											<input
												type="checkbox"
												name="apprDealerRegistItem3"
												id="apprDealerRegistItem3_2"
												value="2"
												checked=""
											/>
										</label>
										<!-- 상품설명(PC) -->
										<label for="apprDealerRegistItem2_9"
											>상품설명(PC)
											<input
												type="checkbox"
												name="apprDealerRegistItem2"
												id="apprDealerRegistItem2_9"
												value="256"
												checked=""
											/>
										</label>
										<!-- 상품설명(MOBILE) -->
										<label for="apprDealerRegistItem2_10"
											>상품설명(MOBILE)
											<input
												type="checkbox"
												name="apprDealerRegistItem2"
												id="apprDealerRegistItem2_10"
												value="512"
												checked=""
											/>
										</label>
									</div>
								</td>
							</tr>

							<tr>
								<th>상품당 수수료 설정</th>
								<td>
									<div class="label_wrap">
										<label for="permDealerGoodsCmsBiz_1"
											><input
												type="radio"
												id="permDealerGoodsCmsBiz_1"
												name="permDealerGoodsCmsBiz"
												value="1"
											/>상품당 수수료 설정 가능</label
										>
										<label for="permDealerGoodsCmsBiz_0"
											><input
												type="radio"
												id="permDealerGoodsCmsBiz_0"
												name="permDealerGoodsCmsBiz"
												value="0"
												checked=""
											/>수수료 설정 불가</label
										>
									</div>
									<div class="topline noti_info">
										상품당 수수료 설정 가능여부를 결정합니다.
									</div>
								</td>
							</tr>
							<tr>
								<th>입점업체 상품진열 승인</th>
								<td>
									<div class="label_wrap">
										<label for="permDealerGoodsDisplayBiz_1"
											><input
												type="radio"
												id="permDealerGoodsDisplayBiz_1"
												name="permDealerGoodsDisplayBiz"
												value="1"
												checked=""
											/>상품진열 설정 가능</label
										>
										<label for="permDealerGoodsDisplayBiz_0"
											><input
												type="radio"
												id="permDealerGoodsDisplayBiz_0"
												name="permDealerGoodsDisplayBiz"
												value="0"
											/>설정 불가</label
										>
									</div>
									<div class="topline noti_info">
										입점업체에서 상품 진열/미진열 설정 가능여부를 결정합니다.
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="btn_wrap">
						<button type="submit" class="btn_pri">확인</button>
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
