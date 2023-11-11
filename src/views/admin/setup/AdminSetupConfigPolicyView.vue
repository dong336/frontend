<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				상점운영정책<button
					id="addBmark"
					onclick="addBookmark('상점운영정책')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>상점운영정책</li>
				<li>상점운영정책</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				상점운영에 필요한 배송, 교환, 반품등 운영정책을 입력하는 곳입니다.
			</li>
			<li>
				수정을 클릭하시여 내용을 확인하시고 쇼핑몰에 맞는 정책을 기입해 주세요.
			</li>
		</ul>

		<!-- <script type="text/javascript">
			function edit(idx) {
				location.href = 'config_policy_reg?idx=' + idx;
			}
			//]]>
		</script> -->

		<form name="Frm" method="post">
			<input type="hidden" name="mode" />
			<input type="hidden" name="idx" />

			<div class="main_content">
				<section class="cont_wrap">
					<div class="section_head">
						<h4 class="total">
							총 <strong>4</strong>개의 정보가 등록되어있습니다.
						</h4>
					</div>

					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_list"
					>
						<caption>
							상점운영정책 리스트
						</caption>
						<colgroup>
							<col width="50" />
							<col width="*" />
							<col width="*" />
							<col width="80" />
						</colgroup>
						<thead>
							<tr>
								<th>No</th>
								<th>제목</th>
								<th>적용위치</th>
								<th>관리</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td class="left">배송안내</td>
								<td class="left">
									/etc/delivery.do &gt; 배송안내, /etc/guide.do &gt; 배송안내,
									/goods/detail.do &gt; 배송안내
								</td>
								<td>
									<div class="btn_wrap">
										<button type="button" onclick="edit(4)" class="btn_sec sm">
											수정
										</button>
									</div>
								</td>
							</tr>

							<tr>
								<td>2</td>
								<td class="left">교환 및 반품정보</td>
								<td class="left">
									/etc/guide.do &gt; 취소/교환/반품, goods/detail.do &gt;
									배송안내
								</td>
								<td>
									<div class="btn_wrap">
										<button type="button" onclick="edit(5)" class="btn_sec sm">
											수정
										</button>
									</div>
								</td>
							</tr>

							<tr>
								<td>3</td>
								<td class="left">입점안내</td>
								<td class="left">/mim/guide.do</td>
								<td>
									<div class="btn_wrap">
										<button type="button" onclick="edit(6)" class="btn_sec sm">
											수정
										</button>
									</div>
								</td>
							</tr>

							<tr>
								<td>4</td>
								<td class="left">개인정보취급방침</td>
								<td class="left">/etc/privacy.do, /mw/member/join_agree.do</td>
								<td>
									<div class="btn_wrap">
										<button type="button" onclick="edit(9)" class="btn_sec sm">
											수정
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</section>
			</div>
		</form>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style></style>
