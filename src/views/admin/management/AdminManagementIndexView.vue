<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				운영관리<button
					id="addBmark"
					onclick="addBookmark('운영관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>운영관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>쇼핑몰을 운영하시는데 필요한 요소들을 모았습니다.</li>
			<li>수시로 관리를 하셔야 보다 나은 쇼핑몰을 운영하실 수 있습니다.</li>
		</ul>

		<div class="main_content">
			<div class="cont_wrap">
				<div class="section_head">
					<h4>고객운영관리</h4>
				</div>
				<dl class="menu_list">
					<dt><a href="/nmanager/management/review_list">상품평관리 </a></dt>
					<dd>
						<a href="/nmanager/management/review_list"
							>상품에 대한 고객평들을 한곳에 모았습니다.
						</a>
					</dd>

					<dt><a href="/nmanager/management/qna_list">상품Q&amp;A관리 </a></dt>
					<dd>
						<a href="/nmanager/management/qna_list"
							>상품에 대한 고객들의 Q&amp;A를 관리합니다.
						</a>
					</dd>

					<dt><a href="/nmanager/management/faq_list">FAQ관리 </a></dt>
					<dd>
						<a href="/nmanager/management/faq_list"
							>FAQ를 관리하실 수 있습니다.
						</a>
					</dd>

					<dt><a href="/nmanager/management/inquiry_list">1:1문의관리 </a></dt>
					<dd>
						<a href="/nmanager/management/inquiry_list"
							>1:1문의를 관리하실 수 있습니다.
						</a>
					</dd>
				</dl>
				<div class="section_head">
					<h4>상점운영관리</h4>
				</div>
				<dl class="menu_list">
					<dt>
						<a href="/nmanager/management/board_manage">게시판통합관리 </a>
					</dt>
					<dd>
						<a href="/nmanager/management/board_manage"
							>게시판을 관리하실 수 있습니다.
						</a>
					</dd>
				</dl>
				<div class="section_head">
					<h4>SMS/알림톡/메일설정</h4>
				</div>
				<dl class="menu_list">
					<dt><a href="/nmanager/management/config">환경설정 </a></dt>
					<dd>
						<a href="/nmanager/management/config"
							>SMS/알림톡/메일 환경설정을 하실 수 있습니다.
						</a>
					</dd>
				</dl>
				<div class="section_head">
					<h4>SMS관리</h4>
				</div>
				<dl class="menu_list">
					<dt><a href="/nmanager/management/ment_manage">문구관리 </a></dt>
					<dd>
						<a href="/nmanager/management/ment_manage"
							>SMS발송문구를 일괄 관리 하실 수 있습니다.
						</a>
					</dd>

					<dt>
						<a href="/nmanager/management/emoticon_manage">이모티콘 관리 </a>
					</dt>
					<dd>
						<a href="/nmanager/management/emoticon_manage"
							>SMS발송시 특수문자 및 이모티콘을 넣으실 수 있습니다.
						</a>
					</dd>

					<dt><a href="/nmanager/management/send_msg">SMS발송 </a></dt>
					<dd>
						<a href="/nmanager/management/send_msg"
							>자동발송 외에 메세지를 추가로 보내실 수 있습니다.
						</a>
					</dd>
				</dl>
				<div class="section_head">
					<h4>메일폼관리</h4>
				</div>
				<dl class="menu_list">
					<dt><a href="/nmanager/management/mail_form">메일폼관리 </a></dt>
					<dd>
						<a href="/nmanager/management/mail_form"
							>메일폼의 디자인을 수정합니다.
						</a>
					</dd>
				</dl>
			</div>
		</div>

		<!-- <script type="text/javascript">
			function checkpw() {
				$.laybox({
					type: 'iframe',
					width: 400,
					source: 'check_pw_ifrm',
				});
			}
		</script> -->

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
