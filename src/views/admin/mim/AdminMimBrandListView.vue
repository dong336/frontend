<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				브랜드관리<button
					id="addBmark"
					onclick="addBookmark('브랜드관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>입점업체관리</li>
				<li>입점업체상품관리</li>
				<li>브랜드관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>입점업체에게서 신청된 브랜드에 관하여 관리합니다.</li>
		</ul>

		<!-- <script type="text/javascript">
			function edit(idx) {
				location.href =
					'brand_reg?idx=' +
					idx +
					'&params=736B65793D5E73776F72643D5E706167653D31';
			}

			function del(idx) {
				var f = document.Frm;

				if (confirm('선택하신 항목을 삭제하시겠습니까?')) {
					f.mode.value = 'DEL';
					f.idx.value = idx;
					f.params.value = '736B65793D5E73776F72643D5E706167653D31';
					f.method = 'post';
					f.encoding = 'multipart/form-data';
					f.action = 'brand_act';
					f.submit();
				}
			}

			function setConfirm(idx) {
				var f = document.Frm;

				if (confirm('선택하신 항목을 승인하시겠습니까?')) {
					f.mode.value = 'CONFIRM';
					f.idx.value = idx;
					f.params.value = '736B65793D5E73776F72643D5E706167653D31';
					f.method = 'post';
					f.encoding = 'multipart/form-data';
					f.action = 'brand_act';
					f.submit();
				}
			}

			$(function () {
				$('.adjust_image_container').adjustImage();
			});
			//]]>
		</script> -->

		<form name="Frm" method="get" action="brand_list">
			<input type="hidden" name="mode" />
			<input type="hidden" name="idx" />
			<input type="hidden" name="params" />

			<div class="main_content">
				<section class="cont_wrap">
					<table
						cellspacing="0"
						cellpadding="0"
						border="0"
						width="100%"
						class="t_form"
					>
						<caption>
							입점업체 검색 폼
						</caption>
						<colgroup>
							<col width="160" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>직접검색</th>
								<td>
									<div class="direct_search">
										<select id="skey" name="skey">
											<option value="brand">브랜드명</option>
											<option value="dealer">업체명</option>
										</select>
										<input
											type="text"
											name="sword"
											value=""
											class="text_input"
										/>
									</div>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="btn_wrap">
						<button type="submit" class="btn_pri">검색</button>
					</div>
				</section>
				<section class="cont_wrap">
					<div class="section_head">
						<h4 class="total">
							총 <strong>1</strong>개의 정보가 등록되어있습니다.
						</h4>
					</div>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="table_col"
					>
						<caption>
							등록된 브랜드 리스트
						</caption>
						<colgroup>
							<col width="60" />
							<col width="200" />
							<col width="120" />
							<col width="*" />
							<col width="350" />
							<col width="80" />
							<col width="80" />
						</colgroup>
						<thead>
							<tr>
								<th>No</th>
								<th>업체명</th>
								<th>브랜드코드</th>
								<th>브랜드명</th>
								<th>이미지</th>
								<th>상태</th>
								<th>관리</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>ncgn<br />[mallstoremim]</td>
								<td>64</td>
								<td>입점사[브랜드]테스트</td>
								<td class="imgh50">
									<div class="adjust_image_container">
										<img
											src="//bootdev.mallstore.co.kr/data/base/brand/thumb_e4ee7f7021ca4938b9b06b7a01b30d35.jpg"
											ow="100"
											oh="28"
										/>
									</div>
								</td>
								<td>승인</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="edit(64)">
										수정
									</button>
									<button
										type="button"
										class="btn_sec sm mgt5"
										onclick="del(64)"
									>
										삭제
									</button>
								</td>
							</tr>
						</tbody>
					</table>

					<!-- paging -->
					<div class="paging">
						<span
							><a href="/nmanager/mim/brand_list?page=1&amp;skey=&amp;sword="
								><strong class="active">1</strong></a
							></span
						>
					</div>
					<!-- //paging -->
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
