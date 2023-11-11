<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				회원관리<button
					id="addBmark"
					onclick="addBookmark('회원관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>회원관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>사이트에 가입한 회원들의 정보를 보실 수 있습니다.</li>
			<li>회원등급 및 메일발송등 사이트 회원에 대해 일괄 관리합니다.</li>
		</ul>

		<div class="main_content">
			<div class="cont_wrap">
				<div class="section_head">
					<h4>회원관련설정</h4>
				</div>
				<dl class="menu_list">
					<dt><a href="/nmanager/member/config_member">회원가입설정 </a></dt>
					<dd>
						<a href="/nmanager/member/config_member"
							>회원가입에 필요한 항목을 관리합니다.
						</a>
					</dd>
				</dl>
				<div class="section_head">
					<h4>회원관리</h4>
				</div>
				<dl class="menu_list">
					<dt><a href="/nmanager/member/member_list">회원목록 </a></dt>
					<dd>
						<a href="/nmanager/member/member_list"
							>사이트에 가입한 회원들을 일괄 관리합니다.
						</a>
					</dd>

					<dt><a href="/nmanager/member/member_delete">탈퇴회원목록 </a></dt>
					<dd>
						<a href="/nmanager/member/member_delete"
							>탈퇴된 회원들을 일괄 관리합니다.
						</a>
					</dd>

					<dt>
						<a href="/nmanager/member/member_buy_list">상품구매회원목록 </a>
					</dt>
					<dd>
						<a href="/nmanager/member/member_buy_list"
							>상품을 구매한 회원들을 관리합니다.
						</a>
					</dd>

					<dt>
						<a href="/nmanager/member/member_auto_delete_list"
							>자동탈퇴대상자목록
						</a>
					</dt>
					<dd>
						<a href="/nmanager/member/member_auto_delete_list"
							>자동탈퇴 대상자 회원들을 관리합니다.
						</a>
					</dd>

					<dt>
						<a href="/nmanager/member/member_sleep_list">휴면회원목록 </a>
					</dt>
					<dd>
						<a href="/nmanager/member/member_sleep_list"
							>휴면회원을 관리합니다.
						</a>
					</dd>
				</dl>
				<div class="section_head">
					<h4>메일발송관리</h4>
				</div>
				<dl class="menu_list">
					<dt><a href="/nmanager/member/member_mailing">회원메일발송 </a></dt>
					<dd>
						<a href="/nmanager/member/member_mailing"
							>회원들에게 메일을 일괄 발송합니다.
						</a>
					</dd>
				</dl>
			</div>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log('path: ', route.path);
</script>

<style></style>
