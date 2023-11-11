<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				정산관리<button
					id="addBmark"
					onclick="addBookmark('정산관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>정산관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>본사의 정산내역과 입점업체의 정산내역을 조회할 수 있습니다.</li>
		</ul>

		<div class="main_content">
			<div class="cont_wrap">
				<div class="section_head">
					<h4>결제/정산내역</h4>
				</div>
				<dl class="menu_list">
					<dt><a href="/nmanager/account/account">본사정산 </a></dt>
					<dd>
						<a href="/nmanager/account/account">본사 정산내역을 조회합니다. </a>
					</dd>

					<dt><a href="/nmanager/account/dealer_account">입점업체정산 </a></dt>
					<dd>
						<a href="/nmanager/account/dealer_account"
							>입점업체의 정산내역을 조회합니다.
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
