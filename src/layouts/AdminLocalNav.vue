<template>
	<div v-if="pathSegments.includes('setup')" id="lnb" class="lnb open">
		<div class="lnb_top">
			<h2>환경설정</h2>
		</div>
		<nav class="lnb_view">
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					상점기본정보관리
				</a>
				<ul class="depth active">
					<li
						:class="{ active: isLinkActive('/nmanager/setup/config_manager') }"
					>
						<RouterLink to="/nmanager/setup/config_manager">
							상점환경설정
						</RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					사이트정보관리
				</a>
				<ul class="depth active">
					<li :class="{ active: isLinkActive('/nmanager/setup/config_site') }">
						<RouterLink to="/nmanager/setup/config_site"
							>사이트환경설정</RouterLink
						>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					입점업체 승인관리
				</a>
				<ul class="depth active">
					<li
						:class="{ active: isLinkActive('/nmanager/setup/config_dealer') }"
					>
						<RouterLink
							active-class="active"
							to="/nmanager/setup/config_dealer"
						>
							입점업체 승인환경설정
						</RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					전체운영설정
				</a>
				<ul class="depth active">
					<li :class="{ active: isLinkActive('/nmanager/setup/config_vocab') }">
						<RouterLink to="/nmanager/setup/config_vocab">
							용어설정
						</RouterLink>
					</li>

					<li
						:class="{ active: isLinkActive('/nmanager/setup/config_delivery') }"
					>
						<RouterLink to="/nmanager/setup/config_delivery">
							배송설정
						</RouterLink>
					</li>

					<li
						:class="{ active: isLinkActive('/nmanager/setup/config_discount') }"
					>
						<RouterLink to="/nmanager/setup/config_discount">
							할인액부담설정
						</RouterLink>
					</li>

					<li :class="{ active: isLinkActive('/nmanager/setup/member_level') }">
						<RouterLink to="/nmanager/setup/member_level">
							회원등급관리
						</RouterLink>
					</li>

					<li
						:class="{ active: isLinkActive('/nmanager/setup/config_cmoney') }"
					>
						<RouterLink to="/nmanager/setup/config_cmoney">
							적립금설정
						</RouterLink>
					</li>

					<li :class="{ active: isLinkActive('/nmanager/setup/notify_tpl') }">
						<RouterLink to="/nmanager/setup/notify_tpl">
							상품정보고시관리
						</RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					관리자설정
				</a>
				<ul class="depth active">
					<li>
						<RouterLink active-class="active" to="/nmanager/setup/manager_list">
							부운영자관리
						</RouterLink>
					</li>

					<li>
						<RouterLink active-class="active" to="/nmanager/setup/access_ip">
							관리자접속IP설정
						</RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					상점운영정책
				</a>
				<ul class="depth active">
					<li>
						<RouterLink
							active-class="active"
							to="/nmanager/setup/config_policy"
						>
							상점운영정책
						</RouterLink>
					</li>

					<li>
						<RouterLink
							active-class="active"
							to="/nmanager/setup/config_terms_history?code=101"
						>
							회원 이용약관
						</RouterLink>
					</li>

					<li>
						<RouterLink
							active-class="active"
							to="/nmanager/setup/config_terms_history?code=102"
						>
							회원 개인정보취급방침
						</RouterLink>
					</li>

					<li>
						<RouterLink
							active-class="active"
							to="/nmanager/setup/config_terms_history?code=103"
						>
							회원 제3자정보제공동의
						</RouterLink>
					</li>

					<li>
						<RouterLink
							active-class="active"
							to="/nmanager/setup/config_terms_history?code=201"
						>
							비회원 이용약관
						</RouterLink>
					</li>

					<li>
						<RouterLink
							active-class="active"
							to="/nmanager/setup/config_terms_history?code=202"
						>
							비회원 개인정보취급방침
						</RouterLink>
					</li>

					<li>
						<RouterLink
							active-class="active"
							to="/nmanager/setup/config_terms_history?code=203"
						>
							비회원 제3자정보제공동의
						</RouterLink>
					</li>

					<li>
						<RouterLink
							active-class="active"
							to="/nmanager/setup/config_terms_history?code=301"
						>
							입점사 이용약관
						</RouterLink>
					</li>

					<li>
						<RouterLink
							active-class="active"
							to="/nmanager/setup/config_terms_history?code=302"
						>
							입점사 개인정보취급방침
						</RouterLink>
					</li>

					<li>
						<RouterLink
							active-class="active"
							to="/nmanager/setup/config_terms_history?code=401"
						>
							마케팅정보수집및이용동의
						</RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					결제정보관리
				</a>
				<ul class="depth active">
					<li>
						<RouterLink active-class="active" to="/nmanager/setup/config_pay">
							결제정보설정
						</RouterLink>
					</li>

					<li>
						<RouterLink active-class="active" to="/nmanager/setup/config_mw_pay"
							>모바일결제정보설정</RouterLink
						>
					</li>

					<li>
						<RouterLink
							active-class="active"
							to="/nmanager/setup/config_pay_online"
							>온라인입금계좌</RouterLink
						>
					</li>

					<li>
						<RouterLink
							active-class="active"
							to="/nmanager/setup/config_kakaopay"
							>카카오페이 결제정보설정</RouterLink
						>
					</li>

					<li>
						<RouterLink active-class="active" to="/nmanager/setup/config_payco"
							>PAYCO 결제정보설정</RouterLink
						>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<div v-if="pathSegments.includes('design')" id="lnb" class="lnb open">
		<div class="lnb_top">
			<h2>전시관리</h2>
		</div>

		<nav class="lnb_view">
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					PC관리
				</a>
				<ul class="depth active">
					<li :class="{ active: isLinkActive('/nmanager/design/topper') }">
						<RouterLink to="/nmanager/design/topper">상단부분관리</RouterLink>
					</li>

					<li :class="{ active: isLinkActive('/nmanager/design/footer') }">
						<RouterLink to="/nmanager/design/footer">하단부분관리</RouterLink>
					</li>

					<li :class="{ active: isLinkActive('/nmanager/design/main') }">
						<RouterLink to="/nmanager/design/main">메인관리</RouterLink>
					</li>

					<li :class="{ active: isLinkActive('/nmanager/design/pagemaker') }">
						<RouterLink to="/nmanager/design/pagemaker"
							>페이지생성기 관리</RouterLink
						>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					Mobile관리
				</a>
				<ul class="depth active">
					<li :class="{ active: isLinkActive('/nmanager/design/mw_topper') }">
						<RouterLink to="/nmanager/design/mw_topper"
							>모바일상단관리</RouterLink
						>
					</li>

					<li :class="{ active: isLinkActive('/nmanager/design/mw_main') }">
						<RouterLink to="/nmanager/design/mw_main"
							>모바일메인관리</RouterLink
						>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					기타
				</a>
				<ul class="depth active">
					<li :class="{ active: isLinkActive('/nmanager/design/popup') }">
						<RouterLink to="/nmanager/design/popup">팝업관리</RouterLink>
					</li>

					<li :class="{ active: isLinkActive('/nmanager/design/mw_popup') }">
						<RouterLink to="/nmanager/design/mw_popup"
							>모바일 팝업관리</RouterLink
						>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<div v-if="pathSegments.includes('promotion')" id="lnb" class="lnb open">
		<div class="lnb_top">
			<h2>프로모션</h2>
		</div>

		<nav class="lnb_view">
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					이벤트관리
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/promotion/event_list?method=100'),
						}"
					>
						<RouterLink to="/nmanager/promotion/event_list?method=100">
							이벤트(일반)관리
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/promotion/event_list?method=200'),
						}"
					>
						<RouterLink to="/nmanager/promotion/event_list?method=200">
							이벤트(분류)관리
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/promotion/event_list?method=300'),
						}"
					>
						<RouterLink to="/nmanager/promotion/event_list?method=300">
							이벤트(쿠폰)관리
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/promotion/event_list?method=400'),
						}"
					>
						<RouterLink to="/nmanager/promotion/event_list?method=400">
							이벤트(할인)관리
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/promotion/event_reg'),
						}"
					>
						<RouterLink to="/nmanager/promotion/event_reg">
							이벤트등록
						</RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					쿠폰관리
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/promotion/coupon_list'),
						}"
					>
						<RouterLink to="/nmanager/promotion/coupon_list">
							쿠폰관리
						</RouterLink>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<div v-if="pathSegments.includes('goods')" id="lnb" class="lnb open">
		<div class="lnb_top">
			<h2>상품관리</h2>
		</div>

		<nav class="lnb_view">
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					카테고리관리
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/goods/category'),
						}"
					>
						<RouterLink to="/nmanager/goods/category">
							카테고리관리
						</RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					상품관리
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/goods/goods_reg'),
						}"
					>
						<RouterLink to="/nmanager/goods/goods_reg">상품등록</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/goods/goods_list'),
						}"
					>
						<RouterLink to="/nmanager/goods/goods_list">상품목록</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/goods/goods_sort'),
						}"
					>
						<RouterLink to="/nmanager/goods/goods_sort"
							>상품진열설정</RouterLink
						>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/goods/trash_list'),
						}"
					>
						<RouterLink to="/nmanager/goods/trash_list">상품휴지통</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/goods/brand_list'),
						}"
					>
						<RouterLink to="/nmanager/goods/brand_list">브랜드관리</RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					상품정보엑셀작업
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/goods/excel_down'),
						}"
					>
						<RouterLink to="/nmanager/goods/excel_down"
							>상품정보엑셀다운로드</RouterLink
						>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/goods/excel_regist'),
						}"
					>
						<RouterLink to="/nmanager/goods/excel_regist"
							>상품정보엑셀업로드</RouterLink
						>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<div v-if="pathSegments.includes('order')" id="lnb" class="lnb open">
		<div class="lnb_top">
			<h2>주문/클레임</h2>
		</div>
		<nav class="lnb_view">
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					전체주문
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/order/order_list'),
						}"
					>
						<RouterLink to="/nmanager/order/order_list"> 전체주문 </RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					주문관리
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/order/order_list?menu=new'),
						}"
					>
						<RouterLink to="/nmanager/order/order_list?menu=new">
							입금확인중
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/order/order_list?menu=confirm'),
						}"
					>
						<RouterLink to="/nmanager/order/order_list?menu=confirm">
							결제완료
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/order/order_list?menu=ready'),
						}"
					>
						<RouterLink to="/nmanager/order/order_list?menu=ready">
							상품준비중
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/order/order_list?menu=out'),
						}"
					>
						<RouterLink to="/nmanager/order/order_list?menu=out">
							결품
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/order/order_list?menu=delay'),
						}"
					>
						<RouterLink to="/nmanager/order/order_list?menu=delay">
							배송지연
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/order/order_list?menu=sending'),
						}"
					>
						<RouterLink to="/nmanager/order/order_list?menu=sending">
							배송중
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/order/order_list?menu=delivery'),
						}"
					>
						<RouterLink to="/nmanager/order/order_list?menu=delivery">
							배송완료
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/order/order_list?menu=account'),
						}"
					>
						<RouterLink to="/nmanager/order/order_list?menu=account">
							구매확정
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/order/consult_list'),
						}"
					>
						<RouterLink to="/nmanager/order/consult_list">
							주문상담
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/order/invoice'),
						}"
					>
						<RouterLink to="/nmanager/order/invoice"> 일괄배송관리 </RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					취소/교환/반품신청관리
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive(
								'/nmanager/order/order_list?menu=cancel_ing',
							),
						}"
					>
						<RouterLink to="/nmanager/order/order_list?menu=cancel_ing">
							주문취소신청처리중
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive(
								'/nmanager/order/order_list?menu=cancel_finish',
							),
						}"
					>
						<RouterLink to="/nmanager/order/order_list?menu=cancel_finish">
							주문취소완료
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive(
								'/nmanager/order/order_list?menu=change_ing',
							),
						}"
					>
						<RouterLink to="/nmanager/order/order_list?menu=change_ing">
							주문교환신청처리중
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive(
								'/nmanager/order/order_list?menu=change_finish',
							),
						}"
					>
						<RouterLink to="/nmanager/order/order_list?menu=change_finish">
							주문교환완료
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive(
								'/nmanager/order/order_list?menu=return_ing',
							),
						}"
					>
						<RouterLink to="/nmanager/order/order_list?menu=return_ing">
							주문반품신청처리중
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive(
								'/nmanager/order/order_list?menu=return_finish',
							),
						}"
					>
						<RouterLink to="/nmanager/order/order_list?menu=return_finish">
							주문반품완료
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive(
								'/nmanager/order/order_list?menu=order_refund_list',
							),
						}"
					>
						<RouterLink to="/nmanager/order/order_list?menu=order_refund_list">
							환불대기
						</RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					거래증빙서류관리
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/order/tax_list'),
						}"
					>
						<RouterLink to="/nmanager/order/tax_list">
							세금계산서신청관리
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/order/cashreceipt_list'),
						}"
					>
						<RouterLink to="/nmanager/order/cashreceipt_list">
							현금영수증신청관리
						</RouterLink>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<div v-if="pathSegments.includes('member')" id="lnb" class="lnb open">
		<div class="lnb_top">
			<h2>회원관리</h2>
		</div>

		<nav class="lnb_view">
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					회원관련설정
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/member/config_member'),
						}"
					>
						<RouterLink to="/nmanager/member/config_member">
							회원가입설정
						</RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					회원관리
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/member/member_list'),
						}"
					>
						<RouterLink to="/nmanager/member/member_list">
							회원목록
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/member/member_delete'),
						}"
					>
						<RouterLink to="/nmanager/member/member_delete">
							탈퇴회원목록
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/member/member_buy_list'),
						}"
					>
						<RouterLink to="/nmanager/member/member_buy_list">
							상품구매회원목록
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/member/member_auto_delete_list'),
						}"
					>
						<RouterLink to="/nmanager/member/member_auto_delete_list">
							자동탈퇴대상자목록
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/member/member_sleep_list'),
						}"
					>
						<RouterLink to="/nmanager/member/member_sleep_list">
							휴면회원목록
						</RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					메일발송관리
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/member/member_mailing'),
						}"
					>
						<RouterLink to="/nmanager/member/member_mailing">
							회원메일발송
						</RouterLink>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<div v-if="pathSegments.includes('management')" id="lnb" class="lnb open">
		<div class="lnb_top">
			<h2>운영관리</h2>
		</div>

		<nav class="lnb_view">
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					고객운영관리
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/management/review_list'),
						}"
					>
						<RouterLink to="/nmanager/management/review_list">
							상품평관리
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/management/qna_list'),
						}"
					>
						<RouterLink to="/nmanager/management/qna_list">
							상품Q&amp;A관리
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/management/faq_list'),
						}"
					>
						<RouterLink to="/nmanager/management/faq_list">
							FAQ관리
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/management/inquiry_list'),
						}"
					>
						<RouterLink to="/nmanager/management/inquiry_list">
							1:1문의관리
						</RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					상점운영관리
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/management/board_manage'),
						}"
					>
						<RouterLink to="/nmanager/management/board_manage">
							게시판통합관리
						</RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					SMS/알림톡/메일설정
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/management/config'),
						}"
					>
						<RouterLink to="/nmanager/management/config"> 환경설정 </RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					SMS관리
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/management/ment_manage'),
						}"
					>
						<RouterLink to="/nmanager/management/ment_manage">
							문구관리
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/management/emoticon_manage'),
						}"
					>
						<RouterLink to="/nmanager/management/emoticon_manage">
							이모티콘 관리
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/management/send_msg'),
						}"
					>
						<RouterLink to="/nmanager/management/send_msg">
							SMS발송 관리
						</RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					메일폼관리
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/management/mail_form'),
						}"
					>
						<RouterLink to="/nmanager/management/mail_form">
							메일폼관리
						</RouterLink>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<div v-if="pathSegments.includes('statistics')" id="lnb" class="lnb open">
		<div class="lnb_top">
			<h2>통계/분석</h2>
		</div>

		<nav class="lnb_view">
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					매출관리
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/statistics/sale_total'),
						}"
					>
						<RouterLink to="/nmanager/statistics/sale_total">
							전체 매출통계
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/statistics/sale_goods'),
						}"
					>
						<RouterLink to="/nmanager/statistics/sale_goods">
							상품별 매출통계
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/statistics/sale_member'),
						}"
					>
						<RouterLink to="/nmanager/statistics/sale_member">
							회원별 매출통계
						</RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					회원통계
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/statistics/member_gender'),
						}"
					>
						<RouterLink to="/nmanager/statistics/member_gender">
							남여비율 통계
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/statistics/member_age'),
						}"
					>
						<RouterLink to="/nmanager/statistics/member_age">
							연령대별 통계
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/statistics/member_area'),
						}"
					>
						<RouterLink to="/nmanager/statistics/member_area">
							거주지별 통계
						</RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					접속통계
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/statistics/visit_count'),
						}"
					>
						<RouterLink to="/nmanager/statistics/visit_count">
							방문자 접속통계
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/statistics/visit_fromsite'),
						}"
					>
						<RouterLink to="/nmanager/statistics/visit_fromsite">
							접속방향 통계
						</RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					상품통계
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/statistics/goods_total'),
						}"
					>
						<RouterLink to="/nmanager/statistics/goods_total">
							상품별 통계
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/statistics/goods_wish'),
						}"
					>
						<RouterLink to="/nmanager/statistics/goods_wish">
							상품보관함 통계
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/statistics/goods_marks'),
						}"
					>
						<RouterLink to="/nmanager/statistics/goods_marks">
							고객평점 통계
						</RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					마케팅통계
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/statistics/marketing_usecmoney'),
						}"
					>
						<RouterLink to="/nmanager/statistics/marketing_usecmoney">
							적립금 사용통계
						</RouterLink>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<div v-if="pathSegments.includes('account')" id="lnb" class="lnb open">
		<div class="lnb_top">
			<h2>정산관리</h2>
		</div>

		<nav class="lnb_view">
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					결제/정산내역
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/account/account'),
						}"
					>
						<RouterLink to="/nmanager/account/account"> 본사정산 </RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/account/dealer_account'),
						}"
					>
						<RouterLink to="/nmanager/account/dealer_account">
							입점업체정산
						</RouterLink>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<div
		v-if="
			pathSegments.includes('mim') ||
			$route.fullPath == '/nmanager/board/list?board=mim_notice'
		"
		id="lnb"
		class="lnb open"
	>
		<div class="lnb_top">
			<h2>입점업체관리</h2>
		</div>

		<nav class="lnb_view">
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					입점업체관리
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/mim/dealer_regist_list'),
						}"
					>
						<RouterLink to="/nmanager/mim/dealer_regist_list">
							입점업체 신청목록
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/mim/dealer_list'),
						}"
					>
						<RouterLink to="/nmanager/mim/dealer_list">
							입점업체 목록
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/mim/dealer_secession_list'),
						}"
					>
						<RouterLink to="/nmanager/mim/dealer_secession_list">
							입점업체 탈퇴목록
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/mim/dealer_qna_list'),
						}"
					>
						<RouterLink to="/nmanager/mim/dealer_qna_list">
							입점업체 문의하기
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/board/list?board=mim_notice'),
						}"
					>
						<RouterLink to="/nmanager/board/list?board=mim_notice">
							입점업체 공지사항
						</RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					입점업체상품관리
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/mim/goods_list'),
						}"
					>
						<RouterLink to="/nmanager/mim/goods_list">
							입점업체 상품관리
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/mim/goods_list?menu=reg'),
						}"
					>
						<RouterLink to="/nmanager/mim/goods_list?menu=reg">
							상품신청/수정/삭제
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/mim/brand_list'),
						}"
					>
						<RouterLink to="/nmanager/mim/brand_list"> 브랜드관리 </RouterLink>
					</li>
				</ul>
			</div>
			<div class="lnb_menu active">
				<a @click.prevent="lnbAccordion" href="#none;" class="menu icon_01">
					입점업체이벤트관리
				</a>
				<ul class="depth active">
					<li
						:class="{
							active: isLinkActive('/nmanager/mim/event_list?method=100'),
						}"
					>
						<RouterLink to="/nmanager/mim/event_list?method=100">
							이벤트(일반)관리
						</RouterLink>
					</li>

					<li
						:class="{
							active: isLinkActive('/nmanager/mim/event_list?method=400'),
						}"
					>
						<RouterLink to="/nmanager/mim/event_list?method=400">
							이벤트(할인)관리
						</RouterLink>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const pathSegments = computed(() => route.path.split('/'));
const isLinkActive = path => {
	return route.fullPath === path;
};

const slideUp = (target, duration = 300) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;

	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
	}, duration);
};

const slideDown = (target, duration = 300) => {
	target.style.removeProperty('display');
	const computedDisplay = window.getComputedStyle(target).display;
	const display = computedDisplay === 'none' ? 'block' : computedDisplay;
	target.style.display = display;

	const height = target.offsetHeight;

	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.boxSizing = 'border-box';
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');

	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
	}, duration);
};

const lnbAccordion = e => {
	const target = e.target;
	const ul = target.nextElementSibling;

	if (ul.classList.contains('active')) {
		ul.classList.remove('active');
		ul.parentElement.classList.remove('active');
		slideUp(ul, 300);
	} else {
		ul.classList.add('active');
		ul.parentElement.classList.add('active');
		slideDown(ul, 300);
	}
};
</script>

<style></style>
