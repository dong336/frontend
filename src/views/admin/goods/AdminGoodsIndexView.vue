<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				상품관리<button
					id="addBmark"
					onclick="addBookmark('상품관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>상품관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				쇼핑몰의 상품을 올리실 수 있는 곳입니다. 먼저 상품에 맞는 카테고리를
				설정해 주세요.
			</li>
			<li>상품정보를 엑셀로 다운로드 하실 수 있습니다.</li>
		</ul>

		<div class="main_content">
			<div class="cont_wrap">
				<div class="section_head">
					<h4>카테고리관리</h4>
				</div>
				<dl class="menu_list">
					<dt><a href="/nmanager/goods/category">카테고리관리 </a></dt>
					<dd>
						<a href="/nmanager/goods/category">카테고리를 설정합니다. </a>
					</dd>
				</dl>
				<div class="section_head">
					<h4>상품관리</h4>
				</div>
				<dl class="menu_list">
					<dt><a href="/nmanager/goods/goods_reg">상품등록 </a></dt>
					<dd>
						<a href="/nmanager/goods/goods_reg"
							>가격과 상품이미지 설정하여 상품등록합니다.
						</a>
					</dd>

					<dt><a href="/nmanager/goods/goods_list">상품목록 </a></dt>
					<dd>
						<a href="/nmanager/goods/goods_list"
							>등록하신 상품들을 수정/관리 하실 수 있습니다
						</a>
					</dd>

					<dt><a href="/nmanager/goods/goods_sort">상품진열설정 </a></dt>
					<dd>
						<a href="/nmanager/goods/goods_sort"
							>등록하신 상품의 진열순서를 설정하실 수 있습니다.
						</a>
					</dd>

					<dt><a href="/nmanager/goods/trash_list">상품휴지통 </a></dt>
					<dd>
						<a href="/nmanager/goods/trash_list"
							>삭제된 상품들을 모았습니다. 복원 누르면 다시 복구됩니다.
						</a>
					</dd>

					<dt><a href="/nmanager/goods/brand_list">브랜드관리 </a></dt>
					<dd>
						<a href="/nmanager/goods/brand_list"
							>각 브랜드별 정리를 하실 수 있는 곳입니다.
						</a>
					</dd>
				</dl>
				<div class="section_head">
					<h4>상품정보엑셀작업</h4>
				</div>
				<dl class="menu_list">
					<dt>
						<a href="/nmanager/goods/excel_down">상품정보엑셀다운로드 </a>
					</dt>
					<dd>
						<a href="/nmanager/goods/excel_down"
							>상품정보를 엑셀로 받아 보실 수 있습니다.
						</a>
					</dd>

					<dt>
						<a href="/nmanager/goods/excel_regist">상품정보엑셀업로드 </a>
					</dt>
					<dd>
						<a href="/nmanager/goods/excel_regist"
							>엑셀로 정리된 내용을 업로드 합니다.
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
