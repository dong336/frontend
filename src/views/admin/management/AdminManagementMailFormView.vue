<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				메일폼관리<button
					id="addBmark"
					onclick="addBookmark('메일폼관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>전시관리</li>
				<li>기타</li>
				<li>메일폼관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				회원가입부터 상품배송완료 메일까지 각종 메일이 등록되어 수정 관리를 하는
				곳입니다.
			</li>
		</ul>

		<!-- <script type="text/javascript">
			function changeCode(item) {
				location.href =
					'mail_form?code=' + item.options[item.selectedIndex].value;
			}

			function openPreview() {
				var f = document.Frm;

				if (isEmpty(f.content)) {
					alert('내용을 입력해주세요.');
					return false;
				}

				openPopup(
					'../../dummy.htm',
					'PreviewMailForm',
					737,
					600,
					'scrollbars=1',
				);

				f.target = 'PreviewMailForm';
				f.action = 'mail_form_preview_pop';
				f.submit();
			}

			function validSubmit() {
				var f = document.Frm;

				if (confirm('위 내용으로 설정을 저장하시겠습니까?')) {
					f.target = '_self';
					f.action = 'mail_form_act';
					f.submit();
				}
			}
			//]]>
		</script> -->

		<form name="Frm" method="post">
			<div class="main_content">
				<section class="cont_wrap">
					<div class="section_head">
						<h4>메일폼</h4>
					</div>

					<table
						cellspacing="0"
						cellpadding="0"
						border="0"
						width="100%"
						class="t_form"
					>
						<caption>
							메일폼 수정
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>메일폼</th>
								<td>
									<select id="code" name="code" onchange="changeCode(this);">
										<option value="100" selected="">기본폼</option>
										<option value="201">회원가입</option>
										<option value="202">회원등급변경</option>
										<option value="203">아이디찾기</option>
										<option value="204">비밀번호찾기</option>
										<option value="205">회원탈퇴</option>
										<option value="206">자동탈퇴 안내 메일</option>
										<option value="207">자동탈퇴 메일</option>
										<option value="208">휴면회원 안내 메일</option>
										<option value="209">휴면회원 전환 메일</option>
										<option value="210">광고성 수신 동의 메일</option>
										<option value="301">주문완료</option>
										<option value="302">주문입금확인</option>
										<option value="303">주문배송완료</option>
										<option value="308">주문취소신청</option>
										<option value="306">주문취소완료</option>
										<option value="309">주문교환신청</option>
										<option value="305">주문교환완료</option>
										<option value="310">주문반품신청</option>
										<option value="307">주문반품완료</option>
										<option value="304">세금계산서</option>
										<option value="701">입점업체가입</option>
										<option value="702">입점업체승인</option>
										<option value="801">1:1문의답변</option>
										<option value="802">게시판답변</option>
										<optgroup label="===================="></optgroup>
										<option value="901">메일 상단 내용</option>
										<option value="902">메일 하단 내용</option>
									</select>
								</td>
							</tr>
							<tr>
								<th>메일 제목</th>
								<td>
									<input
										name="subject"
										class="text_input wide"
										value="입력하신 메일 제목으로 자동 입력"
										maxlength="100"
									/>
								</td>
							</tr>
							<tr>
								<td colspan="2" style="padding: 0">
									<textarea
										name="content"
										class="text_input"
										style="height: 350px; border: 0"
									>
{MAIL_TOP}
&lt;tr&gt;
	&lt;td&gt;&lt;/td&gt;
	&lt;td&gt;
		&lt;table cellpadding="0" cellspacing="0" style="width:100%;margin:0;padding:0"&gt;
		&lt;tbody&gt;
			&lt;tr&gt;
				&lt;td style="font-size:24px;font-family:'맑은고딕',Malgun Gothic,'돋움',Dotum,Helvetica,'Apple SD Gothic Neo',Sans-serif;color:#000;line-height:30px;vertical-align:top"&gt;{
											SUBJECT
										}&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/tbody&gt;
		&lt;/table&gt;
	&lt;/td&gt;
	&lt;/td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
	&lt;td colspan="3" height="20"&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
	&lt;td&gt;&lt;/td&gt;
	&lt;td height="1"  style="background:#dee1e7"&gt;&lt;/td&gt;
	&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
	&lt;td colspan="3" height="30"&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
	&lt;td&gt;&lt;/td&gt;
	&lt;td&gt;
		&lt;table cellpadding="0" cellspacing="0" style="width:100%;margin:0;padding:0"&gt;
		&lt;tbody&gt;
			&lt;tr&gt;
				&lt;td style="font-size:14px;font-family:'맑은고딕',Malgun Gothic,'돋움',Dotum,Helvetica,'Apple SD Gothic Neo',Sans-serif;color:#000;line-height:22px;vertical-align:top"&gt;{
											CONTENT
										}&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/tbody&gt;
		&lt;/table&gt;
	&lt;/td&gt;
	&lt;/td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
	&lt;td colspan="3" height="40"&gt;&lt;/td&gt;
&lt;/tr&gt;
{ MAIL_FOOTER }</textarea
									>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="btn_wrap">
						<button type="button" class="btn_pri" onclick="validSubmit()">
							확인
						</button>

						<button type="button" onclick="openPreview()" class="btn_sec">
							미리보기
						</button>
					</div>

					<!-- 설명 -->
					<div class="mgt20">
						<img src="../imgs/icon/icon_tip.png" alt="TIP" />
					</div>

					<div class="replacement">
						<h2>
							※ 치환코드<span
								>(내용 중 프로그램으로 된 정보를 뿌려줄때 아래와 같이 코드를
								삽입합니다.)</span
							>
						</h2>
						<p>기본정보</p>
						<ul>
							<li>
								<span>{{ SITE_ID }}</span> : 쇼핑몰 부여코드<span
									style="color: #3191b7"
									>(싸이트 고유코드)</span
								>
							</li>
							<li>
								<span>{{ SITE_DATA }}</span> : 쇼핑몰 데이터 경로(/data/base)
							</li>
							<li class="m">
								<span>{{ IMG_URL }}</span> : 이미지 URL
							</li>

							<li class="m">
								<span>{{ SHOP_URL }}</span> : 쇼핑몰 URL
							</li>
							<li>
								<span>{{ SHOP_NAME }}</span> : 쇼핑몰 이름
							</li>
							<li>
								<span>{{ SHOP_MAIL }}</span> : 쇼핑몰 메일
							</li>

							<li class="m">
								<span>{{ SHOP_COMPANY }}</span> : 회사명
							</li>
							<li>
								<span>{{ SHOP_BIZ_NO }}</span> : 사업자등록번호
							</li>
							<li>
								<span>{{ SHOP_TONGSIN_NO }}</span> : 통신판매업신고번호
							</li>
							<li>
								<span>{{ SHOP_CEO_NAME }}</span> : 대표자
							</li>
							<li>
								<span>{{ SHOP_SECURITY_NAME }}</span> : 개인정보담당자
							</li>
							<li>
								<span>{{ SHOP_SECURITY_EMAIL }}</span> : 개인정보담당자 이메일
							</li>
							<li>
								<span>{{ SHOP_TEL }}</span> : 회사 전화번호
							</li>
							<li>
								<span>{{ SHOP_FAX }}</span> : 회사 팩스
							</li>
							<li>
								<span>{{ SHOP_POST }}</span> : 회사 우편번호
							</li>
							<li>
								<span>{{ SHOP_ADDR }}</span> : 회사 주소
							</li>

							<li class="m">
								<span>{{ MAKE_DATE }}</span> : 메일 작성일자
							</li>
							<li>
								<span>{{ MAIL_TOP }}</span> : 메일 상단 내용
							</li>
							<li>
								<span>{{ MAIL_FOOTER }}</span> : 메일 하단 내용
							</li>
						</ul>

						<p>기본메일폼</p>
						<ul>
							<li>
								<span>{{ SUBJECT }}</span> : 제목
							</li>
							<li>
								<span>{{ CONTENT }}</span> : 내용
							</li>
						</ul>

						<p>회원가입</p>
						<ul>
							<li>
								<span>{{ MEMBER_NAME }}</span> : 회원명
							</li>
							<li>
								<span>{{ MEMBER_ID }}</span> : 아이디
							</li>
							<li>
								<span>{{ MEMBER_EMAIL }}</span> : 이메일
							</li>
						</ul>

						<p>회원등급변경</p>
						<ul>
							<li>
								<span>{{ MEMBER_NAME }}</span> : 회원명
							</li>
							<li>
								<span>{{ MEMBER_ID }}</span> : 아이디
							</li>
							<li>
								<span>{{ LEVEL_BEFORE }}</span> : 기존등급
							</li>
							<li>
								<span>{{ LEVEL_NEW }}</span> : 변경등급
							</li>
						</ul>

						<p>아이디 찾기</p>
						<ul>
							<li>
								<span>{{ MEMBER_NAME }}</span> : 회원명
							</li>
							<li>
								<span>{{ MEMBER_ID }}</span> : 아이디
							</li>
						</ul>

						<p>비밀번호 찾기</p>
						<ul>
							<li>
								<span>{{ MEMBER_NAME }}</span> : 회원명
							</li>
							<li>
								<span>{{ MEMBER_ID }}</span> : 아이디
							</li>
							<li>
								<span>{{ MEMBER_PW }}</span> : 임시비밀번호
							</li>
						</ul>

						<p>회원탈퇴</p>
						<ul>
							<li>
								<span>{{ MEMBER_NAME }}</span> : 이름
							</li>
							<li>
								<span>{{ MEMBER_ID }}</span> : 아이디
							</li>
						</ul>

						<p>주문완료, 주문입금확인, 주문배송완료</p>
						<ul>
							<li>
								<span>{{ ORDER_NO }}</span> : 주문번호
							</li>
							<li>
								<span>{{ ORDER_YEAR }}</span> : 주문일자 년
							</li>
							<li>
								<span>{{ ORDER_MONTH }}</span> : 주문일자 월
							</li>
							<li>
								<span>{{ ORDER_DAY }}</span> : 주문일자 일
							</li>
							<li>
								<span>{{ ORDER_HOUR }}</span> : 주문일자 시
							</li>
							<li>
								<span>{{ ORDER_MINUTE }}</span> : 주문일자 분
							</li>
							<li>
								<span>{{ ORDER_SECOND }}</span> : 주문일자 초
							</li>
							<li>
								<span>{{ CONFIRM_YEAR }}</span> : 입금일자 년
							</li>
							<li>
								<span>{{ CONFIRM_MONTH }}</span> : 입금일자 월
							</li>
							<li>
								<span>{{ CONFIRM_DAY }}</span> : 입금일자 일
							</li>
							<li>
								<span>{{ CONFIRM_HOUR }}</span> : 입금일자 시
							</li>
							<li>
								<span>{{ CONFIRM_MINUTE }}</span> : 입금일자 분
							</li>
							<li>
								<span>{{ CONFIRM_SECOND }}</span> : 입금일자 초
							</li>
							<li>
								<span>{{ PAY_WAY }}</span> : 결제수단
							</li>
							<li>
								<span>{{ PAY_INFO }}</span> : 결제방법
							</li>

							<li class="m">
								<span>{{ ORDER_PRICE }}</span> : 주문금액
							</li>
							<li>
								<span>{{ DELIVERY_FEE }}</span> : 배송비
							</li>
							<li>
								<span>{{ DISCOUNT_PRICE }}</span> : 할인금액
							</li>
							<li>
								<span>{{ PAYMENT }}</span> : 결제금액
							</li>

							<li class="m">
								<span>{{ ORD_NAME }}</span> : 주문자명
							</li>
							<li>
								<span>{{ ORD_TEL }}</span> : 주문자 전화번호
							</li>
							<li>
								<span>{{ ORD_MOBILE }}</span> : 주문자 휴대전화번호
							</li>
							<li>
								<span>{{ ORD_ADDRESS }}</span> : 주문자 주소
							</li>
							<li>
								<span>{{ ORD_EMAIL }}</span> : 주문자 이메일
							</li>

							<li class="m">
								<span>{{ RCV_NAME }}</span> : 수령인명
							</li>
							<li>
								<span>{{ RCV_TEL }}</span> : 수령인 전화번호
							</li>
							<li>
								<span>{{ RCV_MOBILE }}</span> : 수령인 휴대전화번호
							</li>
							<li>
								<span>{{ RCV_ADDRESS }}</span> : 수령인 주소
							</li>
							<li>
								<span>{{ DEMAND }}</span> : 배송요청사항
							</li>

							<li class="m"><span>{@GOODS_LIST}</span> : 주문상품 시작</li>
							<li class="child">
								<ul>
									<li>
										<span>{{ GOODS_LIST_NAME }}</span> : 상품명
									</li>
									<li>
										<span>{{ GOODS_LIST_URL_PAGE }}</span> : 상품상세페이지 URL
									</li>
									<li>
										<span>{{ GOODS_LIST_URL_IMAGE }}</span> : 상품이미지 URL
									</li>
									<li>
										<span>{{ GOODS_LIST_OPTION }}</span> : 주문옵션
									</li>
									<li>
										<span>{{ GOODS_LIST_EA }}</span> : 주문수량
									</li>
									<li>
										<span>{{ GOODS_LIST_PRICE }}</span> : 주문금액
									</li>
								</ul>
							</li>
							<li>
								<span>{{ GOODS_LIST }}</span> : 주문내역 종료
							</li>
						</ul>

						<p>
							주문취소신청, 주문취소완료, 주문교환신청, 주문교환완료,
							주문반품신청, 주문반품완료
						</p>
						<ul>
							<li>
								<span>{{ ORDER_NO }}</span> : 주문번호
							</li>
							<li>
								<span>{{ ORDER_YEAR }}</span> : 주문일자 년
							</li>
							<li>
								<span>{{ ORDER_MONTH }}</span> : 주문일자 월
							</li>
							<li>
								<span>{{ ORDER_DAY }}</span> : 주문일자 일
							</li>
							<li>
								<span>{{ ORDER_HOUR }}</span> : 주문일자 시
							</li>
							<li>
								<span>{{ ORDER_MINUTE }}</span> : 주문일자 분
							</li>
							<li>
								<span>{{ ORDER_SECOND }}</span> : 주문일자 초
							</li>

							<li class="m">
								<span>{{ ORDER_PRICE }}</span> : 주문금액
							</li>
							<li>
								<span>{{ ORDER_PRICE_INFO }}</span> : 주문금액내역
							</li>
							<li>
								<span>{{ DISCOUNT_PRICE }}</span> : 할인금액
							</li>
							<li>
								<span>{{ DISCOUNT_PRICE_INFO }}</span> : 할인금액내역
							</li>
							<li>
								<span>{{ DELIVERY_FEE }}</span> : 배송비
							</li>
							<li>
								<span>{{ PAYMENT }}</span> : 결제금액
							</li>
							<li>
								<span>{{ PAY_WAY }}</span> : 결제수단
							</li>

							<li class="m">
								<span>{{ PAY_BANK }}</span> : 결제계좌 분기 시작
							</li>
							<li class="child">
								<ul>
									<li>
										<span>{{ PAY_BANK }}</span> : 결제계좌
									</li>
								</ul>
							</li>
							<li>
								<span>{{ PAY_BANK }}</span> : 결제계좌 분기 종료
							</li>

							<li class="m">
								<span>{{ ORD_NAME }}</span> : 주문자명
							</li>

							<li class="m">
								<span>{{ RCV_NAME }}</span> : 수령인명
							</li>
							<li>
								<span>{{ RCV_TEL }}</span> : 수령인 전화번호
							</li>
							<li>
								<span>{{ RCV_MOBILE }}</span> : 수령인 휴대전화번호
							</li>
							<li>
								<span>{{ RCV_ADDRESS }}</span> : 수령인 주소
							</li>
							<li>
								<span>{{ DEMAND }}</span> : 배송요청사항
							</li>

							<li class="m">
								<span>{{ REFUND }}</span> : 환불정보 분기 시작
							</li>
							<li class="child">
								<ul>
									<li>
										<span>{{ REFUND_GOODS_PRICE }}</span> : 취소상품금액
									</li>
									<li>
										<span>{{ REFUND_DELIVERY_FEE }}</span> : 취소배송비
									</li>
									<li>
										<span>{{ DIFFER_COUPON_DISCOUNT_PRICE }}</span> : 쿠폰할인
										변동금액
									</li>
									<li>
										<span>{{ DIFFER_CMONEY }}</span> : 마일리지할인 변동금액
									</li>
									<li>
										<span>{{ REFUND_SUM_PRICE }}</span> : 취소금액 합계
									</li>
									<li>
										<span>{{ EXTRA_DELIVERY_FEE }}</span> : 추가배송비
									</li>
									<li>
										<span>{{ EXTRA_SUM_PRICE }}</span> : 차감금액 합계
									</li>
									<li>
										<span>{{ REFUND_PRICE }}</span> : 환불(예정)금액
									</li>
								</ul>
							</li>
							<li>
								<span>{{ REFUND }}</span> : 환불정보 분기 종료
							</li>

							<li class="m">
								<span>{{ GOODS_LIST }}</span> : 요청상품 반복 시작
							</li>
							<li class="child">
								<ul>
									<li>
										<span>{{ GOODS_LIST_NAME }}</span> : 상품명
									</li>
									<li>
										<span>{{ GOODS_LIST_URL_PAGE }}</span> : 상품상세페이지 URL
									</li>
									<li>
										<span>{{ GOODS_LIST_URL_IMAGE }}</span> : 상품이미지 URL
									</li>
									<li>
										<span>{{ GOODS_LIST_OPTION }}</span> : 주문옵션
									</li>
									<li>
										<span>{{ GOODS_LIST_EA }}</span> : 요청수량
									</li>
								</ul>
							</li>
							<li>
								<span>{{ GOODS_LIST }}</span> : 요청상품 반복 종료
							</li>
						</ul>

						<p>세금계산서</p>
						<ul>
							<li>
								<span>{{ ORDER_NAME }}</span> : 주문자명
							</li>
							<li>
								<span>{{ ORDER_YEAR }}</span> : 주문일자 년
							</li>
							<li>
								<span>{{ ORDER_MONTH }}</span> : 주문일자 월
							</li>
							<li>
								<span>{{ ORDER_DAY }}</span> : 주문일자 일
							</li>
							<li>
								<span>{{ ORDER_HOUR }}</span> : 주문일자 시
							</li>
							<li>
								<span>{{ ORDER_MINUTE }}</span> : 주문일자 분
							</li>
							<li>
								<span>{{ ORDER_SECOND }}</span> : 주문일자 초
							</li>
							<li>
								<span>{{ TAX_URL }}</span> : 세금계산서 URL
							</li>
						</ul>

						<p>입점업체 가입</p>
						<ul>
							<li>
								<span>{{ DEALER_ID }}</span> : 신청아이디
							</li>
							<li>
								<span>{{ DEALER_NAME }}</span> : 회사명
							</li>
							<li>
								<span>{{ BIZ_NO }}</span> : 사업자등록번호
							</li>
							<li>
								<span>{{ BIZ_CONDITION }}</span> : 업태
							</li>
							<li>
								<span>{{ BIZ_ITEM }}</span> : 종목
							</li>
							<li>
								<span>{{ REMIT_DEPOSITOR }}</span> : 정산 계좌명의
							</li>
							<li>
								<span>{{ REMIT_BANK }}</span> : 정산 은행
							</li>
							<li>
								<span>{{ REMIT_ACCOUNT }}</span> : 정산 계좌번호
							</li>
							<li>
								<span>{{ CHARGE_NAME }}</span> : 담당자 이름
							</li>
							<li>
								<span>{{ CHARGE_POSITION }}</span> : 담당자 직위
							</li>
							<li>
								<span>{{ TEL }}</span> : 전화번호
							</li>
							<li>
								<span>{{ MOBILE }}</span> : 휴대전화번호
							</li>
							<li>
								<span>{{ FAX }}</span> : 팩스번호
							</li>
							<li>
								<span>{{ EMAIL }}</span> : 이메일
							</li>
							<li>
								<span>{{ HOMEPAGE }}</span> : 홈페이지
							</li>
							<li>
								<span>{{ ADDRESS }}</span> : 주소
							</li>
							<li>
								<span>{{ MEMO }}</span> : 기타사항
							</li>
							<li>
								<span>{{ MD_NAME }}</span> : MD 이름
							</li>
							<li>
								<span>{{ MD_EMAIL }}</span> : MD 이메일
							</li>
						</ul>

						<p>입점업체 승인</p>
						<ul>
							<li>
								<span>{{ DEALER_ID }}</span> : 신청아이디
							</li>
							<li>
								<span>{{ DEALER_NAME }}</span> : 업체명
							</li>
							<li>
								<span>{{ BIZ_NO }}</span> : 사업자등록번호
							</li>
							<li>
								<span>{{ CHARGE_NAME }}</span> : 담당자 이름
							</li>
							<li>
								<span>{{ MD_NAME }}</span> : MD 이름
							</li>
							<li>
								<span>{{ MD_EMAIL }}</span> : MD 이메일
							</li>
						</ul>

						<p>1:1문의답변</p>
						<ul>
							<li>
								<span>{{ MEMBER_NAME }}</span> : 회원 이름
							</li>
							<li>
								<span>{{ MEMBER_ID }}</span> : 회원 아이디
							</li>
							<li>
								<span>{{ QUESTION_SUBJECT }}</span> : 문의 제목
							</li>
							<li>
								<span>{{ QUESTION_CONTENT }}</span> : 문의 내용
							</li>
							<li>
								<span>{{ ANSWER_SUBJECT }}</span> : 답변 제목
							</li>
							<li>
								<span>{{ ANSWER_CONTENT }}</span> : 답변 내용
							</li>
						</ul>

						<p>게시판답변</p>
						<ul>
							<li>
								<span>{{ BOARD }}</span> : 게시판명
							</li>
							<li>
								<span>{{ BOARD_URL }}</span> : 게시물 주소
							</li>
							<li>
								<span>{{ QUESTION_WRITER }}</span> : 질문자
							</li>
							<li>
								<span>{{ QUESTION_SUBJECT }}</span> : 질문제목
							</li>
							<li>
								<span>{{ QUESTION_CONTENT }}</span> : 질문내용
							</li>
							<li>
								<span>{{ ANSWER_WRITER }}</span> : 답변자
							</li>
							<li>
								<span>{{ ANSWER_SUBJECT }}</span> : 답변제목
							</li>
							<li>
								<span>{{ ANSWER_CONTENT }}</span> : 답변내용
							</li>
						</ul>

						<p>메일상단내용</p>
						<ul>
							<li>
								<span>{{ LOGO_TOP }}</span> : 상단 로고
							</li>
						</ul>

						<p>메일하단내용</p>
						<ul>
							<li>
								<span>{{ LOGO_FOOT }}</span> : 하단 로고
							</li>
						</ul>
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
