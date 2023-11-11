<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				주문/매출관리<button
					id="addBmark"
					onclick="addBookmark('주문/매출관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>주문/매출관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>주문/매출을 관리할 수 있는 곳입니다.</li>
		</ul>

		<div class="main_content">
			<div class="cont_wrap">
				<div class="section_head">
					<h4>전체주문</h4>
				</div>
				<dl class="menu_list">
					<dt><a href="/nmanager/order/order_list">전체주문 </a></dt>
					<dd>
						<a href="/nmanager/order/order_list"
							>전체 주문을 관리하실 수 있습니다.
						</a>
					</dd>
				</dl>
				<div class="section_head">
					<h4>주문관리</h4>
				</div>
				<dl class="menu_list">
					<dt><a href="/nmanager/order/order_list?menu=new">입금확인중 </a></dt>
					<dd>
						<a href="/nmanager/order/order_list?menu=new"
							>상품에 대한 주문이 이루어진 목록을 관리하실 수 있습니다.
						</a>
					</dd>

					<dt>
						<a href="/nmanager/order/order_list?menu=confirm">결제완료 </a>
					</dt>
					<dd>
						<a href="/nmanager/order/order_list?menu=confirm"
							>결제완료(입금확인)된 주문내역을 관리하실 수 있습니다.
						</a>
					</dd>

					<dt>
						<a href="/nmanager/order/order_list?menu=ready">상품준비중 </a>
					</dt>
					<dd>
						<a href="/nmanager/order/order_list?menu=ready"
							>주문된 상품에 대한 배송 전 목록을 보실 수 있습니다.
						</a>
					</dd>

					<dt><a href="/nmanager/order/order_list?menu=out">결품 </a></dt>
					<dd>
						<a href="/nmanager/order/order_list?menu=out"
							>주문한 상품이 결품 처리된 주문 목록입니다.
						</a>
					</dd>

					<dt><a href="/nmanager/order/order_list?menu=delay">배송지연 </a></dt>
					<dd>
						<a href="/nmanager/order/order_list?menu=delay"
							>주문한 상품이 배송지연 처리 된 주문 목록입니다.
						</a>
					</dd>

					<dt><a href="/nmanager/order/order_list?menu=sending">배송중 </a></dt>
					<dd>
						<a href="/nmanager/order/order_list?menu=sending"
							>주문한 상품이 배송중 처리 된 주문 목록입니다.
						</a>
					</dd>

					<dt>
						<a href="/nmanager/order/order_list?menu=delivery">배송완료 </a>
					</dt>
					<dd>
						<a href="/nmanager/order/order_list?menu=delivery"
							>주문한 상품이 배송완료 처리 된 주문 목록입니다.
						</a>
					</dd>

					<dt>
						<a href="/nmanager/order/order_list?menu=account">구매확정 </a>
					</dt>
					<dd>
						<a href="/nmanager/order/order_list?menu=account"
							>구매가 확정되어 주문이 완료된 목록입니다.
						</a>
					</dd>

					<dt><a href="/nmanager/order/consult_list">주문상담 </a></dt>
					<dd>
						<a href="/nmanager/order/consult_list"
							>회원별로 주문내역과 상담내역을 관리합니다.
						</a>
					</dd>

					<dt><a href="/nmanager/order/invoice">일괄배송관리 </a></dt>
					<dd>
						<a href="/nmanager/order/invoice"
							>"배송준비" 상태인 주문건에 대한 일괄배송 관리 페이지입니다.
						</a>
					</dd>
				</dl>
				<div class="section_head">
					<h4>취소/교환/반품신청관리</h4>
				</div>
				<dl class="menu_list">
					<dt>
						<a href="/nmanager/order/order_list?menu=cancel_ing"
							>주문취소신청처리중
						</a>
					</dt>
					<dd>
						<a href="/nmanager/order/order_list?menu=cancel_ing"
							>주문 취소신청된 내역을 관리합니다.
						</a>
					</dd>

					<dt>
						<a href="/nmanager/order/order_list?menu=cancel_finish"
							>주문취소완료
						</a>
					</dt>
					<dd>
						<a href="/nmanager/order/order_list?menu=cancel_finish"
							>주문 취소처리 완료된 내역을 관리합니다.
						</a>
					</dd>

					<dt>
						<a href="/nmanager/order/order_list?menu=change_ing"
							>주문교환신청처리중
						</a>
					</dt>
					<dd>
						<a href="/nmanager/order/order_list?menu=change_ing"
							>교환요청을 한 주문 목록을 관리합니다.
						</a>
					</dd>

					<dt>
						<a href="/nmanager/order/order_list?menu=change_finish"
							>주문교환완료
						</a>
					</dt>
					<dd>
						<a href="/nmanager/order/order_list?menu=change_finish"
							>교환신청완료된 주문 목록을 관리합니다.
						</a>
					</dd>

					<dt>
						<a href="/nmanager/order/order_list?menu=return_ing"
							>주문반품신청처리중
						</a>
					</dt>
					<dd>
						<a href="/nmanager/order/order_list?menu=return_ing"
							>반품요청을 한 주문 목록을 관리합니다.
						</a>
					</dd>

					<dt>
						<a href="/nmanager/order/order_list?menu=return_finish"
							>주문반품완료
						</a>
					</dt>
					<dd>
						<a href="/nmanager/order/order_list?menu=return_finish"
							>반품신청완료된 주문 목록을 관리합니다.
						</a>
					</dd>

					<dt><a href="/nmanager/order/order_refund_list">환불대기 </a></dt>
					<dd>
						<a href="/nmanager/order/order_refund_list"
							>환불 미 처리 된 상품 목록입니다.
						</a>
					</dd>
				</dl>
				<div class="section_head">
					<h4>거래증빙서류관리</h4>
				</div>
				<dl class="menu_list">
					<dt><a href="/nmanager/order/tax_list">세금계산서신청관리 </a></dt>
					<dd>
						<a href="/nmanager/order/tax_list"
							>세금계산서 신청 내역을 관리합니다.
						</a>
					</dd>

					<dt>
						<a href="/nmanager/order/cashreceipt_list">현금영수증신청관리 </a>
					</dt>
					<dd>
						<a href="/nmanager/order/cashreceipt_list"
							>현금영수증 신청 내역을 관리합니다.
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
