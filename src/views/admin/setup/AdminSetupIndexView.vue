<template>
	<main id="contents" class="content">
		<AdminTitle></AdminTitle>
		<form
			name="Frm"
			method="post"
			action="config_manager_act"
			onsubmit="return validSubmit(this)"
		>
			<div class="main_content">
				<div class="cont_wrap">
					<div class="section_head">
						<h4>상점기본정보관리</h4>
					</div>
					<dl class="menu_list">
						<dt><a href="/nmanager/setup/config_manager">상점환경설정 </a></dt>
						<dd>
							<a href="/nmanager/setup/config_manager"
								>관리자 로그인정보 변경 및 상점의 기본적인 정보를 입력하실 수
								있습니다.
							</a>
						</dd>
					</dl>
					<div class="section_head">
						<h4>사이트정보관리</h4>
					</div>
					<dl class="menu_list">
						<dt><a href="/nmanager/setup/config_site">사이트환경설정 </a></dt>
						<dd>
							<a href="/nmanager/setup/config_site"
								>사이트의 기본정보 및 상품관련환경을 설정하실 수 있습니다.
							</a>
						</dd>
					</dl>
					<div class="section_head">
						<h4>입점업체 승인관리</h4>
					</div>
					<dl class="menu_list">
						<dt>
							<a href="/nmanager/setup/config_dealer">입점업체 승인환경설정 </a>
						</dt>
						<dd>
							<a href="/nmanager/setup/config_dealer"
								>입점업체의 승인 및 상품승인을 관리합니다.
							</a>
						</dd>
					</dl>
					<div class="section_head">
						<h4>전체운영설정</h4>
					</div>
					<dl class="menu_list">
						<dt><a href="/nmanager/setup/config_vocab">용어설정 </a></dt>
						<dd>
							<a href="/nmanager/setup/config_vocab"
								>사이트에서 사용되는 용어를 설정합니다.
							</a>
						</dd>

						<dt><a href="/nmanager/setup/config_delivery">배송설정 </a></dt>
						<dd>
							<a href="/nmanager/setup/config_delivery"
								>전체 배송환경을 설정합니다.
							</a>
						</dd>

						<dt>
							<a href="/nmanager/setup/config_discount">할인액부담설정 </a>
						</dt>
						<dd>
							<a href="/nmanager/setup/config_discount"
								>할인액을 누가 부담할지 설정합니다.
							</a>
						</dd>

						<dt><a href="/nmanager/setup/member_level">회원등급관리 </a></dt>
						<dd>
							<a href="/nmanager/setup/member_level">회원등급을 관리합니다. </a>
						</dd>

						<dt><a href="/nmanager/setup/config_cmoney">적립금설정 </a></dt>
						<dd>
							<a href="/nmanager/setup/config_cmoney"
								>적립금설정을 관리합니다.
							</a>
						</dd>

						<dt><a href="/nmanager/setup/notify_tpl">상품정보고시관리 </a></dt>
						<dd>
							<a href="/nmanager/setup/notify_tpl"
								>상품등록시 사용되는 상품정보고시 템플릿을 설정합니다.
							</a>
						</dd>
					</dl>
					<div class="section_head">
						<h4>관리자설정</h4>
					</div>
					<dl class="menu_list">
						<dt><a href="/nmanager/setup/manager_list">부운영자관리 </a></dt>
						<dd>
							<a href="/nmanager/setup/manager_list"
								>쇼핑몰을 운영할 수 있는 운영자를 설정합니다.
							</a>
						</dd>

						<dt><a href="/nmanager/setup/access_ip">관리자접속IP설정 </a></dt>
						<dd>
							<a href="/nmanager/setup/access_ip"
								>관리자에 접속 가능한 IP를 설정합니다.
							</a>
						</dd>
					</dl>
					<div class="section_head">
						<h4>상점운영정책</h4>
					</div>
					<dl class="menu_list">
						<dt><a href="/nmanager/setup/config_policy">상점운영정책 </a></dt>
						<dd>
							<a href="/nmanager/setup/config_policy"
								>상점운영정책을 관리할수있습니다.
							</a>
						</dd>

						<dt>
							<a href="/nmanager/setup/config_terms_history?code=101"
								>회원 이용약관
							</a>
						</dt>
						<dd>
							<a href="/nmanager/setup/config_terms_history?code=101"
								>회원에 대한 이용약관 내용을 버전별로 관리하실 수 있습니다.
							</a>
						</dd>

						<dt>
							<a href="/nmanager/setup/config_terms_history?code=102"
								>회원 개인정보취급방침
							</a>
						</dt>
						<dd>
							<a href="/nmanager/setup/config_terms_history?code=102"
								>회원에 대한 개인정보취급방침 내용을 버전별로 관리하실 수
								있습니다.
							</a>
						</dd>

						<dt>
							<a href="/nmanager/setup/config_terms_history?code=103"
								>회원 제3자정보제공동의
							</a>
						</dt>
						<dd>
							<a href="/nmanager/setup/config_terms_history?code=103"
								>회원에 대한 제3자정보제공동의 내용을 버전별로 관리하실 수
								있습니다.
							</a>
						</dd>

						<dt>
							<a href="/nmanager/setup/config_terms_history?code=201"
								>비회원 이용약관
							</a>
						</dt>
						<dd>
							<a href="/nmanager/setup/config_terms_history?code=201"
								>비회원에 대한 이용약관 내용을 버전별로 관리하실 수 있습니다.
							</a>
						</dd>

						<dt>
							<a href="/nmanager/setup/config_terms_history?code=202"
								>비회원 개인정보취급방침
							</a>
						</dt>
						<dd>
							<a href="/nmanager/setup/config_terms_history?code=202"
								>비회원에 대한 개인정보취급방침 내용을 버전별로 관리하실 수
								있습니다.
							</a>
						</dd>

						<dt>
							<a href="/nmanager/setup/config_terms_history?code=203"
								>비회원 제3자정보제공동의
							</a>
						</dt>
						<dd>
							<a href="/nmanager/setup/config_terms_history?code=203"
								>비회원에 대한 제3자정보제공동의 내용을 버전별로 관리하실 수
								있습니다.
							</a>
						</dd>

						<dt>
							<a href="/nmanager/setup/config_terms_history?code=301"
								>입점사 이용약관
							</a>
						</dt>
						<dd>
							<a href="/nmanager/setup/config_terms_history?code=301"
								>입점사에 대한 이용약관 내용을 버전별로 관리하실 수 있습니다.
							</a>
						</dd>

						<dt>
							<a href="/nmanager/setup/config_terms_history?code=302"
								>입점사 개인정보취급방침
							</a>
						</dt>
						<dd>
							<a href="/nmanager/setup/config_terms_history?code=302"
								>입점사에 대한 개인정보취급방침 내용을 버전별로 관리하실 수
								있습니다.
							</a>
						</dd>

						<dt>
							<a href="/nmanager/setup/config_terms_history?code=401"
								>마케팅정보수집및이용동의
							</a>
						</dt>
						<dd>
							<a href="/nmanager/setup/config_terms_history?code=401"
								>마케팅용 정보에 대한 수집/이용 동의 내용을 버전별로 관리하실 수
								있습니다.
							</a>
						</dd>
					</dl>
					<div class="section_head">
						<h4>결제정보관리</h4>
					</div>
					<dl class="menu_list">
						<dt><a href="/nmanager/setup/config_pay">결제정보설정 </a></dt>
						<dd>
							<a href="/nmanager/setup/config_pay"
								>결제 환경을 설정 하실 수 있습니다.
							</a>
						</dd>

						<dt>
							<a href="/nmanager/setup/config_mw_pay">모바일결제정보설정 </a>
						</dt>
						<dd>
							<a href="/nmanager/setup/config_mw_pay"
								>모바일 결제 환경을 설정 하실 수 있습니다.
							</a>
						</dd>

						<dt>
							<a href="/nmanager/setup/config_pay_online">온라인입금계좌 </a>
						</dt>
						<dd>
							<a href="/nmanager/setup/config_pay_online"
								>온라인입금계좌를 설정 하실 수 있습니다.
							</a>
						</dd>

						<dt>
							<a href="/nmanager/setup/config_kakaopay"
								>카카오페이 결제정보설정
							</a>
						</dt>
						<dd>
							<a href="/nmanager/setup/config_kakaopay"
								>카카오페이 결제정보를 설정 관리합니다.
							</a>
						</dd>

						<dt>
							<a href="/nmanager/setup/config_payco">PAYCO 결제정보설정 </a>
						</dt>
						<dd>
							<a href="/nmanager/setup/config_payco"
								>PAYCO 결제정보를 설정 관리합니다.
							</a>
						</dd>
					</dl>
				</div>
			</div>
		</form>
		<AdminFooter></AdminFooter>
	</main>
</template>

<script setup>
import AdminFooter from '@/components/AdminFooter.vue';
import AdminTitle from '@/components/AdminTitle.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
console.log('path: ', route.path);
</script>

<style></style>
