<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				입점업체관리<button
					id="addBmark"
					onclick="addBookmark('입점업체관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>입점업체관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>쇼핑몰 운영시 개인 및 사업자의 입점을 받을수 있는 시스템입니다.</li>
			<li>
				입점업체 신청을 하면 입점업체 관리자가 따로 주어지며 별도로 관리 하실 수
				있습니다.
			</li>
		</ul>

		<div class="main_content">
			<div class="cont_wrap">
				<div class="section_head">
					<h4>입점업체관리</h4>
				</div>
				<dl class="menu_list">
					<dt>
						<a href="/nmanager/mim/dealer_regist_list">입점업체 신청목록</a>
					</dt>
					<dd>
						<a href="/nmanager/mim/dealer_regist_list"
							>쇼핑몰에 입점 신청하신 입점업체 목록을 관리합니다.</a
						>
					</dd>
					<dt><a href="/nmanager/mim/dealer_list">입점업체 목록</a></dt>
					<dd>
						<a href="/nmanager/mim/dealer_list"
							>관리자가 승인을 내린 입점업체 목록입니다.</a
						>
					</dd>
					<dt>
						<a href="/nmanager/mim/dealer_secession_list">입점업체 탈퇴목록</a>
					</dt>
					<dd>
						<a href="/nmanager/mim/dealer_secession_list"
							>입점업체 탈퇴 신청 목록입니다.</a
						>
					</dd>
					<dt><a href="/nmanager/mim/dealer_qna_list">입점업체 문의하기</a></dt>
					<dd>
						<a href="/nmanager/mim/dealer_qna_list">입점업체에게 질문합니다.</a>
					</dd>
					<dt>
						<a href="/nmanager/board/list?board=mim_notice"
							>입점업체 공지사항</a
						>
					</dt>
					<dd>
						<a href="/nmanager/board/list?board=mim_notice"
							>입점업체에 대한 공지하는 곳입니다.</a
						>
					</dd>
				</dl>
				<div class="section_head">
					<h4>입점업체상품관리</h4>
				</div>
				<dl class="menu_list">
					<dt><a href="/nmanager/mim/goods_list">입점업체 상품관리</a></dt>
					<dd>
						<a href="/nmanager/mim/goods_list"
							>입점업체가 올린 상품들을 관리하실 수 있습니다.</a
						>
					</dd>
					<dt>
						<a href="/nmanager/mim/goods_list?menu=reg">상품신청/수정/삭제</a>
					</dt>
					<dd>
						<a href="/nmanager/mim/goods_list?menu=reg"
							>입점업체에게서 신청된 상품에 관하여 관리합니다.</a
						>
					</dd>
					<dt><a href="/nmanager/mim/brand_list">브랜드관리</a></dt>
					<dd>
						<a href="/nmanager/mim/brand_list"
							>입점업체에서 등록한 브랜드를 관리합니다.</a
						>
					</dd>
					<!-- <DT><A HREF="/NMANAGER/MIM/BRAND_LIST">브랜드관리</A></DT> -->
					<!-- <DD><A HREF="/NMANAGER/MIM/BRAND_LIST">입점업체에게서 신청된 브랜드에 관하여 관리합니다.</A></DD> -->
				</dl>
				<div class="section_head">
					<h4>입점업체이벤트관리</h4>
				</div>
				<dl class="menu_list">
					<dt>
						<a href="/nmanager/mim/event_list?method=100">이벤트(일반)관리</a>
					</dt>
					<dd>
						<a href="/nmanager/mim/event_list?method=100"
							>입점업체에서 등록한 이벤트몰(일반)을 관리합니다.</a
						>
					</dd>
					<dt>
						<a href="/nmanager/mim/event_list?method=400">이벤트(할인)관리</a>
					</dt>
					<dd>
						<a href="/nmanager/mim/event_list?method=400"
							>입점업체에서 등록한 이벤트몰(할인)을 관리합니다.</a
						>
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
