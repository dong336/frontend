<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				전시관리<button
					id="addBmark"
					onclick="addBookmark('전시관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>전시관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>쇼핑몰 전체의 레이아웃 및 디자인을 하실 수 있습니다.</li>
			<li>아이템에 맞는 디자인으로 사이트를 이쁘게 꾸며 주세요.</li>
		</ul>

		<div class="main_content">
			<div class="cont_wrap">
				<div class="section_head">
					<h4>PC관리</h4>
				</div>
				<dl class="menu_list">
					<dt><a href="/nmanager/design/topper">상단부분관리 </a></dt>
					<dd>
						<a href="/nmanager/design/topper"
							>사이트 상단 부분의 디자인을 설정합니다.
						</a>
					</dd>

					<dt><a href="/nmanager/design/footer">하단부분관리 </a></dt>
					<dd>
						<a href="/nmanager/design/footer"
							>사이트 하단 부분의 디자인을 설정합니다.
						</a>
					</dd>

					<dt><a href="/nmanager/design/main">메인관리 </a></dt>
					<dd>
						<a href="/nmanager/design/main"
							>메인페이지의 각종 배너를 관리하며 쇼핑몰 컨셉에 맞게 구성하실 수
							있습니다.
						</a>
					</dd>

					<dt><a href="/nmanager/design/pagemaker">페이지생성기 관리 </a></dt>
					<dd>
						<a href="/nmanager/design/pagemaker"
							>각종 페이지들을 일괄적으로 관리합니다.
						</a>
					</dd>
				</dl>
				<div class="section_head">
					<h4>Mobile관리</h4>
				</div>
				<dl class="menu_list">
					<dt><a href="/nmanager/design/mw_topper">모바일상단관리 </a></dt>
					<dd>
						<a href="/nmanager/design/mw_topper"
							>모바일 상단 부분의 디자인을 설정합니다.
						</a>
					</dd>

					<dt><a href="/nmanager/design/mw_main">모바일메인관리 </a></dt>
					<dd>
						<a href="/nmanager/design/mw_main"
							>모바일 메인페이지의 상품 및 배너를 관리합니다.
						</a>
					</dd>
				</dl>
				<div class="section_head">
					<h4>기타</h4>
				</div>
				<dl class="menu_list">
					<dt><a href="/nmanager/design/popup">팝업관리 </a></dt>
					<dd>
						<a href="/nmanager/design/popup"
							>팝업창의 디자인을 생성/관리합니다.
						</a>
					</dd>

					<dt><a href="/nmanager/design/mw_popup">모바일 팝업관리 </a></dt>
					<dd>
						<a href="/nmanager/design/mw_popup"
							>모바일 팝업창의 디자인을 생성/관리합니다.
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
