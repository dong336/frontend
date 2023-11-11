<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				입점업체 신청목록<button
					id="addBmark"
					onclick="addBookmark('입점업체 신청목록')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>입점업체관리</li>
				<li>입점업체관리</li>
				<li>입점업체 신청목록</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>쇼핑몰에 입점업체 신청하신 목록을 관리하는 곳 입니다.</li>
			<li>
				입점업체의 상세내역을 잘 검토하시여 입점업체 승인을 해 주시면 됩니다.
			</li>
			<li>
				입점업체 신청 목록에서 승인을 하시면 입점업체목록으로 자동 등록됩니다.
			</li>
		</ul>

		<!-- <script type="text/javascript">
			function setSort(psort) {
				var f = document.sFrm;

				f.psort.value = psort;
				f.submit();
			}
			//]]>
		</script>

		<script type="text/javascript">
			function detail(no) {
				location.href =
					'dealer_detail?menu=regist&no=' +
					no +
					'&params=736B65793D5E73776F72643D5E70736F72743D726567646174655F646573635E706167653D31';
			}

			function delList() {
				var f = document.Frm;
				var items = '';

				if (!f.cbList) return false;

				if (typeof f.cbList.length == 'undefined') {
					if (f.cbList.checked) items = f.cbList.value;
				} else {
					for (var i = 0; i < f.cbList.length; i++) {
						if (f.cbList[i].checked) {
							items += (items ? ',' : '') + f.cbList[i].value;
						}
					}
				}

				if (items == '') {
					alert('삭제할 입점업체 신청을 선택해 주세요.');
					return false;
				}

				if (confirm('선택하신 입점업체 신청을 삭제하시겠습니까?')) {
					f.mode.value = 'DEL_REGIST';
					f.no.value = items;
					f.action = 'dealer_act';
					f.submit();
				}
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form name="sFrm" method="get">
					<input type="hidden" name="psort" value="regdate_desc" />

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
											<option value="">전체</option>
											<option value="id">아이디</option>
											<option value="name">업체명</option>
											<option value="charger">담당자</option>
											<option value="bizno">사업자등록번호</option>
											<option value="tel">전화번호</option>
											<option value="mobile">핸드폰번호</option>
											<option value="email">이메일</option>
										</select>
										<input
											type="text"
											name="sword"
											value=""
											class="text_input wide"
										/>
									</div>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="btn_wrap">
						<button type="submit" class="btn_pri">검색</button>
					</div>
				</form>
			</section>

			<section class="cont_wrap">
				<div class="section_head">
					<h4 class="total">
						총 <strong>0</strong>건의 입점업체 신청이 있으며, 오늘 신청된
						입점업체는 <strong>0</strong>건입니다.
					</h4>
					<button type="button" class="btn_sec md" onclick="delList()">
						선택삭제
					</button>
				</div>

				<form name="Frm" method="post">
					<input type="hidden" name="menu" value="regist" />
					<input type="hidden" name="mode" />
					<input type="hidden" name="no" />
					<input
						type="hidden"
						name="params"
						value="736B65793D5E73776F72643D5E70736F72743D726567646174655F646573635E706167653D31"
					/>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_list"
					>
						<caption>
							승인 대기 입점업체 목록
						</caption>
						<colgroup>
							<col width="50" />
							<col width="17%" />
							<col width="*" />
							<col width="13%" />
							<col width="13%" />
							<col width="13%" />
							<col width="10%" />
							<col width="100" />
						</colgroup>
						<thead>
							<tr>
								<th>
									<label
										><input
											type="checkbox"
											name="cbListAll"
											onclick="checkCbAll(this.form.cbList, this.checked)"
										/>전체선택</label
									>
								</th>
								<th>
									<span
										onclick="setSort('id_asc')"
										style="font-size: 11px; cursor: pointer"
										>▲</span
									>아이디<span
										onclick="setSort('id_desc')"
										style="font-size: 11px; cursor: pointer"
										>▼</span
									>
								</th>
								<th>
									<span
										onclick="setSort('name_asc')"
										style="font-size: 11px; cursor: pointer"
										>▲</span
									>업체명<span
										onclick="setSort('name_desc')"
										style="font-size: 11px; cursor: pointer"
										>▼</span
									>
								</th>
								<th>
									<span
										onclick="setSort('charger_asc')"
										style="font-size: 11px; cursor: pointer"
										>▲</span
									>담당자<span
										onclick="setSort('charger_desc')"
										style="font-size: 11px; cursor: pointer"
										>▼</span
									>
								</th>
								<th>전화번호</th>
								<th>휴대폰번호</th>
								<th>
									<span
										onclick="setSort('regdate_asc')"
										style="font-size: 11px; cursor: pointer"
										>▲</span
									>신청일<span
										onclick="setSort('regdate_desc')"
										style="font-size: 11px; cursor: pointer"
										>▼</span
									>
								</th>
								<th>상세정보</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td colspan="8" class="nodata">신청된 입점업체가 없습니다.</td>
							</tr>
						</tbody>
					</table>

					<!-- paging -->
					<div class="paging">
						<span></span>
					</div>
					<!-- //paging -->
				</form>
			</section>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style></style>
