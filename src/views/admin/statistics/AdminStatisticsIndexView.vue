<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				통계/분석<button
					id="addBmark"
					onclick="addBookmark('통계/분석')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>통계/분석</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>사이트에 관련된 일반적인 통계를 분석합니다.</li>
			<li>
				통계를 잘 활용해 이벤트 내지 홍보 하시면 매출에 많은 도움이 되실 겁니다.
			</li>
		</ul>

		<div class="main_content">
			<div class="cont_wrap">
				<div class="section_head">
					<h4>매출관리</h4>
				</div>
				<dl class="menu_list">
					<dt><a href="/nmanager/statistics/sale_total">전체 매출통계 </a></dt>
					<dd>
						<a href="/nmanager/statistics/sale_total"
							>쇼핑몰의 전반적인 매출상황을 보실수 있는 곳입니다.
						</a>
					</dd>

					<dt>
						<a href="/nmanager/statistics/sale_goods">상품별 매출통계 </a>
					</dt>
					<dd>
						<a href="/nmanager/statistics/sale_goods"
							>상품당 매출 상황 및 분포도, 구매고객을 한눈에 보실 수 있는
							곳입니다.
						</a>
					</dd>

					<dt>
						<a href="/nmanager/statistics/sale_member">회원별 매출통계 </a>
					</dt>
					<dd>
						<a href="/nmanager/statistics/sale_member"
							>각 회원들의 매출 상황을 보실 수 있는 곳입니다.
						</a>
					</dd>
				</dl>
				<div class="section_head">
					<h4>회원통계</h4>
				</div>
				<dl class="menu_list">
					<dt>
						<a href="/nmanager/statistics/member_gender">남여비율 통계 </a>
					</dt>
					<dd>
						<a href="/nmanager/statistics/member_gender"
							>사이트에 가입한 회원들의 남여 비율입니다.
						</a>
					</dd>

					<dt><a href="/nmanager/statistics/member_age">연령대별 통계 </a></dt>
					<dd>
						<a href="/nmanager/statistics/member_age"
							>사이트에 가입한 회원들을 연령대별로 분석합니다.
						</a>
					</dd>

					<dt><a href="/nmanager/statistics/member_area">거주지별 통계 </a></dt>
					<dd>
						<a href="/nmanager/statistics/member_area"
							>사이트에 가입한 회원들을 거주지역별로 분석합니다.
						</a>
					</dd>
				</dl>
				<div class="section_head">
					<h4>접속통계</h4>
				</div>
				<dl class="menu_list">
					<dt>
						<a href="/nmanager/statistics/visit_count">방문자 접속통계 </a>
					</dt>
					<dd>
						<a href="/nmanager/statistics/visit_count"
							>쇼핑몰 이용자들의 방문 현황을 보실 수 있습니다.
						</a>
					</dd>

					<dt>
						<a href="/nmanager/statistics/visit_fromsite">접속방향 통계 </a>
					</dt>
					<dd>
						<a href="/nmanager/statistics/visit_fromsite"
							>쇼핑몰 이용자들이 어떤 곳을 통해서 들어왔는지 한눈에 보실 수 있는
							곳입니다.
						</a>
					</dd>
				</dl>
				<div class="section_head">
					<h4>상품통계</h4>
				</div>
				<dl class="menu_list">
					<dt><a href="/nmanager/statistics/goods_total">상품별 통계 </a></dt>
					<dd>
						<a href="/nmanager/statistics/goods_total"
							>상품당 접속, 위시리스트 등록 및 주문, 판매, 매출을 볼 수 있는
							곳입니다.
						</a>
					</dd>

					<dt>
						<a href="/nmanager/statistics/goods_wish">상품보관함 통계 </a>
					</dt>
					<dd>
						<a href="/nmanager/statistics/goods_wish"
							>상품보관함에 가장 많이 담긴 상품 및 판매수를 한 눈에 볼 수 있는
							곳입니다.
						</a>
					</dd>

					<dt><a href="/nmanager/statistics/goods_marks">고객평점 통계 </a></dt>
					<dd>
						<a href="/nmanager/statistics/goods_marks"
							>판매 후, 고객들의 평점을 비교해 볼 수 있는 곳 입니다.
						</a>
					</dd>
				</dl>
				<div class="section_head">
					<h4>마케팅통계</h4>
				</div>
				<dl class="menu_list">
					<dt>
						<a href="/nmanager/statistics/marketing_usecmoney"
							>적립금 사용통계
						</a>
					</dt>
					<dd>
						<a href="/nmanager/statistics/marketing_usecmoney"
							>날짜별로 회원들의 적립금 사용액 및 획득한 적립금을 볼 수 있는
							곳입니다.
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
