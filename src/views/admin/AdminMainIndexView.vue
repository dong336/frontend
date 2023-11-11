<template>
	<main id="content" class="content">
		<div class="dashboard_cont">
			<section class="list_box">
				<h2><i class="ri-draft-line"></i>주문</h2>
				<div class="group_per color01">
					<dl>
						<dt>입금대기</dt>
						<dd><a href="../order/order_list?menu=new">0</a>건</dd>
					</dl>
					<dl>
						<dt>결제완료</dt>
						<dd><a href="../order/order_list?menu=confirm">0</a>건</dd>
					</dl>
				</div>
			</section>
			<section class="list_box">
				<h2><i class="ri-truck-line"></i>배송</h2>
				<div class="group_per color02">
					<dl>
						<dt>상품준비중</dt>
						<dd><a href="../order/order_list?menu=ready">0</a>건</dd>
					</dl>
					<dl>
						<dt>배송중</dt>
						<dd><a href="../order/order_list?menu=sending">0</a>건</dd>
					</dl>
					<dl>
						<dt>배송완료</dt>
						<dd><a href="../order/order_list?menu=delivery">0</a>건</dd>
					</dl>
					<dl>
						<dt>구매확정</dt>
						<dd><a href="../order/order_list?menu=account">0</a>건</dd>
					</dl>
				</div>
			</section>
			<section class="list_box">
				<h2><i class="ri-message-3-line"></i>클레임</h2>
				<div class="group_per color03">
					<dl>
						<dt>취소요청</dt>
						<dd><a href="../order/order_list?menu=cancel_ing">0</a>건</dd>
					</dl>
					<dl>
						<dt>반품요청</dt>
						<dd><a href="../order/order_list?menu=return_ing">0</a>건</dd>
					</dl>
					<dl>
						<dt>교환요청</dt>
						<dd><a href="../order/order_list?menu=change_ing">0</a>건</dd>
					</dl>
				</div>
			</section>
			<section class="list_box">
				<h2><i class="ri-edit-line"></i>문의</h2>
				<div class="group_per color04">
					<dl>
						<dt>상품문의</dt>
						<dd><a href="../management/qna_list">0</a>건</dd>
					</dl>
					<dl>
						<dt>1:1 문의</dt>
						<dd><a href="../management/inquiry_list">0</a>건</dd>
					</dl>
					<dl>
						<dt>상품리뷰</dt>
						<dd><a href="../management/review_list">0</a>건</dd>
					</dl>
				</div>
			</section>
			<section class="list_box sales">
				<div class="list_tit">
					<h2><i class="ri-bar-chart-box-line"></i>매출 현황</h2>
					<ul class="tabs">
						<li class="tab_sales active"><button>매출</button></li>
						<li class="tab_order"><button>주문</button></li>
					</ul>
				</div>
				<div class="chart_wrap">
					<canvas id="chart_sales" aria-label="매출 현황 그래프"></canvas>
					<canvas id="chart_order" aria-label="주문 현황 그래프"></canvas>
				</div>
			</section>
			<div class="group_vertical">
				<section class="list_box vertical">
					<h2><i class="ri-user-line"></i>가입현황</h2>
					<div class="group_per color02">
						<dl>
							<dt>신규가입자</dt>
							<dd><a href="../member/member_list">0</a>건</dd>
						</dl>
						<dl>
							<dt>총가입자</dt>
							<dd><a href="../member/member_list">51</a>건</dd>
						</dl>
						<dl>
							<dt>휴면전환대상</dt>
							<dd><a href="../member/member_sleep_list">0</a>건</dd>
						</dl>
					</div>
				</section>
				<section class="list_box vertical">
					<h2><i class="ri-survey-line"></i>상품현황</h2>
					<div class="group_per color04">
						<dl>
							<dt>판매중</dt>
							<dd><a href="../goods/goods_list">20</a>건</dd>
						</dl>
						<dl>
							<dt>일시품절</dt>
							<dd><a href="../goods/goods_list">0</a>건</dd>
						</dl>
						<dl>
							<dt>판매종료</dt>
							<dd><a href="../goods/goods_list">0</a>건</dd>
						</dl>
					</div>
				</section>
			</div>
		</div>
	</main>
</template>

<script setup>
// import { useRouteStore } from '@/stores/store';
// import { onMounted } from 'vue';
// import { useRoute } from 'vue-router';

// const routeStore = useRouteStore();
// const route = useRoute();

// onMounted(() => {
// 	routeStore.setCurrentRoute(route.path);
// 	console.log('set path: ', route.path);
// 	console.log('set path: ', routeStore.currentRoute);
// });
</script>

<style></style>
