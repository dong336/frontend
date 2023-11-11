<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				이벤트(일반) 관리<button
					id="addBmark"
					onclick="addBookmark('이벤트(일반) 관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>입점업체관리</li>
				<li>입점업체이벤트관리</li>
				<li>이벤트(일반) 관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>입점업체의 이벤트를 관리하는 곳입니다.</li>
		</ul>

		<!-- <script type="text/javascript">
			function changeList() {
				var f = document.Frm;
				var sf = document.sFrm;

				sf.psize.value = f.psize.options[f.psize.selectedIndex].value;
				sf.submit();
			}

			function setSort(psort) {
				var f = document.sFrm;

				f.psort.value = psort;
				f.submit();
			}
			//]]>
		</script>

		<script type="text/javascript">
			function edit(idx) {
				location.href =
					'event_reg?menu=list&method=100&idx=' +
					idx +
					'&params=6D656E753D6C6973745E6D6574686F643D3130305E736B65793D5E73776F72643D5E70736F72743D6964785F646573635E7073697A653D31305E706167653D31';
			}

			function del(idx) {
				var f = document.Frm;
				var msg;

				switch (f.menu.value) {
					case 'list':
						msg = '선택된 이벤트를 삭제하시겠습니까?';
						break;
					case 'reg':
						msg = '선택된 이벤트 신청을 삭제하시겠습니까?';
						break;
					case 'edit':
						msg = '선택된 이벤트 수정 신청을 삭제하시겠습니까?';
						break;
					case 'del':
						msg = '선택된 이벤튼 삭제 신청을 거부하시겠습니까?';
						break;
				}
				if (confirm(msg)) {
					f.mode.value = 'DEL';
					f.idx.value = idx;
					f.submit();
				}
			}

			function delList() {
				var f = document.Frm;
				var items = '';
				var msg;

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
					alert('이벤트를 선택해 주세요.');
					return false;
				}

				switch (f.menu.value) {
					case 'list':
						msg = '선택된 이벤트를 삭제하시겠습니까?';
						break;
					case 'reg':
						msg = '선택된 이벤트 신청을 삭제하시겠습니까?';
						break;
					case 'edit':
						msg = '선택된 이벤트 수정 신청을 삭제하시겠습니까?';
						break;
					case 'del':
						msg = '선택된 이벤튼 삭제 신청을 거부하시겠습니까?';
						break;
				}
				if (confirm(msg)) {
					f.mode.value = 'DEL';
					f.idx.value = items;
					f.submit();
				}
			}

			function confirmList() {
				var f = document.Frm;
				var items = '';
				var msg;

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
					alert('승인할 이벤트를 선택해 주세요.');
					return false;
				}

				switch (f.menu.value) {
					case 'reg':
						msg = '선택된 이벤트 신청을 승인하시겠습니까?';
						break;
					case 'edit':
						msg = '선택된 이벤트 수정 신청을 승인하시겠습니까?';
						break;
					case 'del':
						msg = '선택된 이벤튼 삭제 신청을 승인하시겠습니까?';
						break;
				}
				if (confirm(msg)) {
					f.mode.value = 'CONFIRM';
					f.idx.value = items;
					f.submit();
				}
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form name="sFrm" method="get" action="event_list">
					<input type="hidden" name="menu" value="list" />
					<input type="hidden" name="method" value="100" />
					<input type="hidden" name="psort" value="" />
					<input type="hidden" name="psize" value="0" />

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_form"
					>
						<caption>
							검색 폼
						</caption>
						<colgroup>
							<col width="160" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>정렬</th>
								<td>
									<a href="event_list?method=100&amp;menu=list"
										><strong class="red">승인완료</strong></a
									>
									&nbsp;
									<a href="event_list?method=100&amp;menu=reg">등록신청</a>
									&nbsp;
									<a href="event_list?method=100&amp;menu=edit">수정신청</a>
									&nbsp;
									<a href="event_list?method=100&amp;menu=del">삭제신청</a>
								</td>
							</tr>
							<tr>
								<th>검색</th>
								<td>
									<select id="skey" name="skey">
										<option value="subject">제목</option>
										<option value="dealer">입점업체ID</option>
										<option value="dealerName">입점업체명</option></select
									><input
										type="text"
										name="sword"
										class="text_input w300px mgl5"
										value=""
									/>
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
				<form
					name="Frm"
					method="post"
					action="event_act"
					enctype="multipart/form-data"
				>
					<input type="hidden" name="menu" value="list" />
					<input type="hidden" name="method" value="100" />
					<input type="hidden" name="mode" />
					<input type="hidden" name="idx" />
					<input
						type="hidden"
						name="params"
						value="6D656E753D6C6973745E6D6574686F643D3130305E736B65793D5E73776F72643D5E70736F72743D6964785F646573635E7073697A653D31305E706167653D31"
					/>

					<div class="section_head">
						<h4>
							전체이벤트(일반)목록
							<span class="total"
								>- 총 <strong>0</strong>개의 이벤트가 검색되었습니다.</span
							>
						</h4>
						<div>
							<select id="psize" name="psize" onchange="changeList();">
								<option value="10">10줄씩보기</option>
								<option value="20">20줄씩보기</option>
								<option value="30">30줄씩보기</option>
								<option value="50">50줄씩보기</option>
								<option value="100">100줄씩보기</option>
								<option value="500">500줄씩보기</option>
							</select>
						</div>
					</div>

					<table
						cellpadding="0"
						cellspacing="0"
						border="0"
						width="100%"
						class="t_list"
					>
						<caption>
							이벤트 목록
						</caption>
						<colgroup>
							<col width="50" />
							<col width="60" />
							<col width="150" />
							<col width="*" />

							<col width="100" />
							<col width="100" />
							<col width="80" />
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
										onclick="setSort('idx_asc')"
										style="font-size: 11px; cursor: pointer"
										>▲</span
									>No<span
										onclick="setSort('idx_desc')"
										style="font-size: 11px; cursor: pointer"
										>▼</span
									>
								</th>
								<th>
									<span
										onclick="setSort('dealer_asc')"
										style="font-size: 11px; cursor: pointer"
										>▲</span
									>입점업체<span
										onclick="setSort('dealer_desc')"
										style="font-size: 11px; cursor: pointer"
										>▼</span
									>
								</th>
								<th>제목</th>

								<th>미리보기</th>
								<th>등록일</th>
								<th>관리</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td height="50" colspan="7">등록된 정보가 없습니다.</td>
							</tr>
						</tbody>
					</table>

					<!-- paging -->
					<div class="paging">
						<span></span>
					</div>
					<!-- //paging -->

					<div class="btn_wrap">
						<button type="button" class="btn_sec" onclick="delList()">
							선택삭제
						</button>
					</div>
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
