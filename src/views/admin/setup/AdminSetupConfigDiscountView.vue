<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				할인액부담설정<button
					id="addBmark"
					onclick="addBookmark('할인액부담설정')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>전체운영설정</li>
				<li>할인액부담설정</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				정산시 부담에 의해서 금액이 틀려지니 할인된 금액을 누가 부담할지
				설정하십시요.
			</li>
		</ul>

		<!-- <script
			type="text/javascript"
			src="/common/editor/se2/js/HuskyEZCreator.js"
		></script>
		<script type="text/javascript">
			function validSubmit() {
				var f = document.Frm;

				if (confirm('등록하시겠습니까?')) {
					f.submit();
				}
			}
			//]]>
		</script> -->

		<form name="Frm" method="post" action="config_discount_act">
			<input type="hidden" name="mode" value="DISCOUNTCHARGE" />

			<div class="main_content">
				<section class="cont_wrap">
					<div class="section_head">
						<h4>할인액 부담 설정</h4>
					</div>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_form"
					>
						<caption>
							할인액 부담 설정 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>회원등급 할인액 부담 설정</th>
								<td>
									<div class="label_wrap">
										<label
											><input
												type="radio"
												name="shareDealerMemberDiscount"
												value="0"
											/>마스터가 할인액 부담</label
										>
										<label
											><input
												type="radio"
												name="shareDealerMemberDiscount"
												value="1"
												checked=""
											/>입점업체가 할인액 부담</label
										>
									</div>
									<div class="topline noti_info">
										회원등급 설정에서 할인율을 적용할 경우 할인되는 금액을
										정산하는 주체를 선택합니다.
									</div>
								</td>
							</tr>
							<tr>
								<th>이벤트 할인액 부담 설정</th>
								<td>
									<div class="label_wrap">
										<label
											><input
												type="radio"
												name="shareDealerEventDiscount"
												value="0"
												checked=""
											/>마스터가 할인액 부담</label
										>
										<label
											><input
												type="radio"
												name="shareDealerEventDiscount"
												value="1"
											/>입점업체가 할인액 부담</label
										>
									</div>
									<ul class="topline noti_info">
										<li>
											마스터가 등록하는 할인이벤트 상품의 할인되는 금액을
											정산하는 주체를 선택합니다.
										</li>
										<li>
											입점업체가 신청할 할인이벤트 경우 위 설정과 관계없이
											입점업체가 할인액을 부담합니다.
										</li>
									</ul>
								</td>
							</tr>
						</tbody>
					</table>

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
