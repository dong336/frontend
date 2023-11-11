<template>
	<header>
		<h1>
			<RouterLink to="/nmanager/main/index">
				<img src="/nmanager/imgs/logo.png" alt="NCGN 로고" />
			</RouterLink>
			<button
				@click="menuAccordion"
				type="button"
				class="lnb_switch closeBtn"
				id="lnb_switch"
				aria-label="left menu 접기/펴기 버튼"
			>
				<i class="ri-menu-line"></i>
			</button>
		</h1>
		<nav class="inner">
			<div class="book_area">
				<button
					@click="bookmarkAccordion"
					type="button"
					class="ico bookmark"
					id="bookmark"
					aria-label="메뉴 즐겨찾기 버튼"
					onclick="getBookMark()"
				>
					<i class="ri-star-line"></i>
				</button>
				<div class="favorite" id="favorite">
					<div class="layer_search">
						<div class="input_area">
							<input
								type="search"
								id="menuName"
								name="menuName"
								class="text_inp"
								placeholder="메뉴명을 검색하세요."
								onkeyup="getMenuList()"
							/>
						</div>
						<button>
							<i class="ri-search-2-line"></i>
						</button>
						<ul class="search_list" id="search_list"></ul>
					</div>
					<ul class="favorite_list" id="favorite_list"></ul>
				</div>
			</div>

			<ul id="gnb" class="gnbmenu">
				<li>
					<RouterLink to="/nmanager/setup/index" active-class="over"
						>환경설정</RouterLink
					>
				</li>

				<li>
					<RouterLink to="/nmanager/design/index" active-class="over"
						>전시관리</RouterLink
					>
				</li>

				<li>
					<RouterLink to="/nmanager/promotion/index" active-class="over"
						>프로모션</RouterLink
					>
				</li>

				<li>
					<RouterLink to="/nmanager/goods/index" active-class="over"
						>상품관리</RouterLink
					>
				</li>

				<li>
					<RouterLink to="/nmanager/order/index" active-class="over"
						>주문/클레임</RouterLink
					>
				</li>

				<li>
					<RouterLink to="/nmanager/member/index" active-class="over"
						>회원관리</RouterLink
					>
				</li>

				<li>
					<RouterLink to="/nmanager/management/index" active-class="over"
						>운영관리</RouterLink
					>
				</li>

				<li>
					<RouterLink to="/nmanager/statistics/index" active-class="over"
						>통계/분석</RouterLink
					>
				</li>

				<li>
					<RouterLink to="/nmanager/account/index" active-class="over"
						>정산관리</RouterLink
					>
				</li>

				<li>
					<RouterLink to="/nmanager/mim/index" active-class="over"
						>입점업체관리</RouterLink
					>
				</li>
			</ul>

			<div class="utilmenu">
				<RouterLink
					v-bind:to="currentPath"
					class="ico user"
					aria-label="설정 바로가기 버튼"
					><i class="ri-settings-4-line"></i
				></RouterLink>
				<!-- <a
					href="/nmanager/setup/index"
					class="ico user"
					aria-label="설정 바로가기 버튼"
					><i class="ri-settings-4-line"></i
				></a> -->
				<a
					href="http://localhost:8080"
					class="ico user"
					aria-label="쇼핑몰 바로가기 버튼"
					target="_blank"
					><i class="ri-store-line"></i
				></a>
				<!-- <button class="ico user" aria-label="공지사항 바로가기 버튼"><i class="ri-notification-2-line"></i></button> -->
				<button
					class="ico user"
					id="accountBtn"
					aria-label="사용자 바로가기 버튼"
				>
					<i class="ri-account-circle-line"></i>
				</button>
				<div class="account" id="account">
					<div class="account_info">
						<p class="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="20"
								height="20"
							>
								<path fill="none" d="M0 0h24v24H0z"></path>
								<path
									d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
									fill="rgba(52,68,76,1)"
								></path>
							</svg>
						</p>
						<dl>
							<dt>몰스토어관리자</dt>
							<dd>
								admin
								<a href="/nmanager/setup/config_manager">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="16"
										height="16"
									>
										<path fill="none" d="M0 0h24v24H0z"></path>
										<path
											d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z"
											fill="rgba(52,68,76,1)"
										></path>
									</svg>
								</a>
							</dd>
						</dl>
					</div>
					<a href="../main/logout" class="logout_btn">로그아웃</a>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentPath = computed(() => {
	let pathSegments = route.path.split('/');
	pathSegments.pop();
	pathSegments.push('index');

	return pathSegments.join('/');
});

// lnb 열기, 닫기
const menuAccordion = e => {
	const lnb = document.getElementById('lnb');
	const switchBtn = document.getElementById('lnb_switch');

	if (switchBtn.contains(e.target)) {
		if (switchBtn.classList.contains('openBtn')) {
			switchBtn.classList.replace('openBtn', 'closeBtn');
			lnb.classList.replace('close', 'open');
		} else {
			switchBtn.classList.replace('closeBtn', 'openBtn');
			lnb.classList.replace('open', 'close');
		}
	}
};

onMounted(() => {
	// 상세조건 토글
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

	const slideToggle = (target, duration = 300) => {
		if (window.getComputedStyle(target).display === 'none') {
			return slideDown(target, duration);
		}

		return slideUp(target, duration);
	};

	// 즐겨찾기 토글
	const bookMarkOpen = document.getElementById('bookmark');
	const bookMarkList = document.getElementById('favorite');

	bookMarkOpen.addEventListener('click', () => {
		slideToggle(bookMarkList);
	});

	document.addEventListener('click', e => {
		const clickInside =
			bookMarkList.contains(e.target) || bookMarkOpen.contains(e.target);
		if (!clickInside) {
			bookMarkList.style.display = 'none';
		}
	});

	// 계정 버튼 클릭시
	const accountBtn = document.getElementById('accountBtn');
	const accountLayer = document.getElementById('account');
	accountBtn.addEventListener('click', () => {
		slideToggle(accountLayer);
	});
	document.addEventListener('click', e => {
		const clickInside =
			accountLayer.contains(e.target) || accountBtn.contains(e.target);
		if (!clickInside) {
			accountLayer.style.display = 'none';
		}
	});
});
</script>

<style></style>
