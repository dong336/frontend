<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				프로모션<button
					id="addBmark"
					onclick="addBookmark('프로모션')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>프로모션</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>쇼핑몰 전체의 이벤트를 관리하실 수 있습니다.</li>
		</ul>

		<div class="main_content">
			<div class="cont_wrap">
				<div class="section_head">
					<h4>이벤트관리</h4>
				</div>
				<dl class="menu_list">
					<dt>
						<a href="/nmanager/promotion/event_list?method=100"
							>이벤트(일반)관리
						</a>
					</dt>
					<dd>
						<a href="/nmanager/promotion/event_list?method=100"
							>이벤트(일반) 관련된 정보들을 관리합니다.
						</a>
					</dd>

					<dt>
						<a href="/nmanager/promotion/event_list?method=200"
							>이벤트(분류)관리
						</a>
					</dt>
					<dd>
						<a href="/nmanager/promotion/event_list?method=200"
							>이벤트(분류) 관련된 정보들을 관리합니다.
						</a>
					</dd>

					<dt>
						<a href="/nmanager/promotion/event_list?method=300"
							>이벤트(쿠폰)관리
						</a>
					</dt>
					<dd>
						<a href="/nmanager/promotion/event_list?method=300"
							>이벤트(쿠폰) 관련된 정보들을 관리합니다.
						</a>
					</dd>

					<dt>
						<a href="/nmanager/promotion/event_list?method=400"
							>이벤트(할인)관리
						</a>
					</dt>
					<dd>
						<a href="/nmanager/promotion/event_list?method=400"
							>이벤트(할인) 관련된 정보들을 관리합니다.
						</a>
					</dd>

					<dt><a href="/nmanager/promotion/event_reg">이벤트등록 </a></dt>
					<dd>
						<a href="/nmanager/promotion/event_reg"
							>새로운 이벤트를 등록 하실 수 있습니다.
						</a>
					</dd>
				</dl>
				<div class="section_head">
					<h4>쿠폰관리</h4>
				</div>
				<dl class="menu_list">
					<dt><a href="/nmanager/promotion/coupon_list">쿠폰관리 </a></dt>
					<dd>
						<a href="/nmanager/promotion/coupon_list"
							>회원별,상품별로 쿠폰을 부여하여 쇼핑몰이 활성화 하는데 도움을
							줍니다.
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
