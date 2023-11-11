<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				입점업체상품관리<button
					id="addBmark"
					onclick="addBookmark('입점업체상품관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>입점업체관리</li>
				<li>입점업체관리</li>
				<li>입점업체상품관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>입점업체의 상품을 관리하는 곳입니다.</li>
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
			function edit(gno) {
				location.href =
					'goods_edit?menu=list&gno=' +
					gno +
					'&params=6D656E753D6C6973745E736B65793D5E73776F72643D5E70736F72743D6E6F5F646573635E7073697A653D32305E706167653D31';
			}

			function del(gno) {
				var f = document.Frm;
				var msg;

				if (f.menu.value == 'list') {
					msg = '선택된 상품을 휴지통에 버리시겠습니까?';
				} else if (f.menu.value == 'reg') {
					msg = '선택된 신청 상품을 목록에서 삭제하시겠습니까?';
				} else if (f.menu.value == 'edit') {
					msg = '선택된 수정신청 상품을 목록에서 삭제하시겠습니까?';
				} else if (f.menu.value == 'del') {
					msg = '선택된 삭제신청 상품을 신청거부하시겠습니까?';
				}
				if (confirm(msg)) {
					f.gno.value = gno;
					f.action = 'goods_del_act';
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
					alert('삭제할 상품을 선택해 주세요.');
					return false;
				}

				if (f.menu.value == 'list') {
					msg = '선택된 상품을 휴지통으로 이동시키겠습니까?';
				} else if (f.menu.value == 'reg') {
					msg = '선택된 신청 상품을 신청거부하시겠습니까?';
				} else if (f.menu.value == 'edit') {
					msg = '선택된 수정신청 상품을 신청거부하시겠습니까?';
				} else if (f.menu.value == 'del') {
					msg = '선택된 삭제신청 상품을 신청거부하시겠습니까?';
				}
				if (confirm(msg)) {
					f.gno.value = items;
					f.action = 'goods_del_act';
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
					alert('승인할 상품을 선택해 주세요.');
					return false;
				}

				if (f.menu.value == 'reg') {
					msg = '선택된 신청 상품을 등록 승인하시겠습니까?';
				} else if (f.menu.value == 'edit') {
					msg = '선택된 수정신청 상품을 수정 승인하시겠습니까?';
				} else if (f.menu.value == 'del') {
					msg =
						'선택된 삭제신청 상품을 삭제 승인하시겠습니까?\n승인하시면 해당 삭제신청상품은 휴지통으로 이동됩니다.';
				}
				if (confirm(msg)) {
					f.gno.value = items;
					f.action = 'goods_confirm_act';
					f.submit();
				}
			}

			function returnList() {
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
					alert('반려할 상품을 선택해 주세요.');
					return false;
				}

				if (f.menu.value == 'reg') {
					msg = '선택된 등록신청 상품을 반려하시겠습니까?';
				} else if (f.menu.value == 'edit') {
					msg = '선택된 수정신청 상품을 반려하시겠습니까?';
				}
				if (confirm(msg)) {
					f.gno.value = items;
					f.action = 'goods_return_act';
					f.submit();
				}
			}

			function openGoodsModifyHistory(gno) {
				location.href = 'goods_history?gno=' + gno;
			}

			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form name="sFrm" method="get" action="goods_list">
					<input type="hidden" name="menu" value="list" />
					<input type="hidden" name="psort" value="no_desc" />
					<input type="hidden" name="psize" value="20" />

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
									<a href="goods_list?menu=list"
										><strong class="red">승인완료</strong></a
									>
									&nbsp;
									<a href="goods_list?menu=reg">등록신청</a>
									&nbsp;
									<a href="goods_list?menu=edit">수정신청</a>
									&nbsp;
									<a href="goods_list?menu=del">삭제신청</a>
								</td>
							</tr>
							<tr>
								<th>상품검색</th>
								<td>
									<select id="skey" name="skey">
										<option value="name">상품명</option>
										<option value="code">상품키</option>
										<option value="dealer">입점업체ID</option></select
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
				<form name="Frm" method="post">
					<input type="hidden" name="menu" value="list" />
					<input type="hidden" name="gno" />
					<input
						type="hidden"
						name="params"
						value="6D656E753D6C6973745E736B65793D5E73776F72643D5E70736F72743D6E6F5F646573635E7073697A653D32305E706167653D31"
					/>

					<div class="section_head">
						<h4>
							전체상품목록
							<span class="total"
								>- 총 <strong>3</strong>개의 상품이 검색되었습니다.</span
							>
						</h4>
						<div>
							<select id="psize" name="psize" onchange="changeList();">
								<option value="10">10줄씩보기</option>
								<option value="20" selected="">20줄씩보기</option>
								<option value="30">30줄씩보기</option>
								<option value="50">50줄씩보기</option>
								<option value="100">100줄씩보기</option>
								<option value="500">500줄씩보기</option>
							</select>
							<button type="button" onclick="delList()" class="btn_sec md mgl5">
								선택삭제
							</button>
						</div>
					</div>
					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_list table_col"
					>
						<caption>
							입점업체 상품 목록
						</caption>
						<colgroup>
							<col width="50" />
							<col width="60" />
							<col width="10%" />
							<col width="60" />
							<col width="*" />
							<col width="27%" />
							<col width="120" />
						</colgroup>
						<thead>
							<tr>
								<th>
									<label
										><input
											type="checkbox"
											name="cbAll"
											onclick="checkCbAll(this.form.cbList, this.checked)"
										/>전체선택</label
									>
								</th>
								<th>
									<span
										onclick="setSort('no_asc')"
										style="font-size: 8pt; cursor: pointer"
										>▲</span
									>No<span
										onclick="setSort('no_desc')"
										style="font-size: 8pt; cursor: pointer"
										>▼</span
									>
								</th>
								<th>
									<span
										onclick="setSort('dealer_asc')"
										style="font-size: 8pt; cursor: pointer"
										>▲</span
									>업체명<span
										onclick="setSort('dealer_desc')"
										style="font-size: 8pt; cursor: pointer"
										>▼</span
									>
								</th>
								<th colspan="2">상품명</th>
								<th>희망카테고리</th>
								<th>관리</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="10867"
										/>선택</label
									>
								</td>
								<td>1</td>
								<td>ncgn<br />(mallstoremim)</td>
								<td class="borright">
									<img
										src="//bootdev.mallstore.co.kr/data/base/goods/small/20230905/35e28602abba4e85b1236d9c353fbc5e.jpg"
										onerror="this.src='//bootdev.mallstore.co.kr/imgs/goods/no.gif'"
										width="50"
										height="50"
									/>
								</td>
								<td class="txt_left" style="border-left: 0">
									<a href="../../goods/detail?gno=10867" target="_blank"
										>입점업체 상품 테스트_수수료적용 02</a
									>
									<div class="topline">
										공급가 : <span class="numtxt">245,000</span>원&nbsp;(<span
											class="numtxt"
											>30.0%</span
										>
										수수료)<br />
										판매가 : <span class="numtxt">350,000</span>원
										<span class="light_gray"
											>시중가 : <span class="numtxt">500,000</span>원</span
										>
									</div>
								</td>
								<td class="txt_left">
									<ul>
										<li class="mgt3">테마별&gt;오피스룩</li>
										<li class="mgt3">패션의류&gt;여성의류&gt;원피스</li>
									</ul>
								</td>
								<td class="buttonw65">
									<a
										href="../../goods/detail?gno=10867"
										class="btn_sec md"
										target="_blank"
										>상세정보</a
									>

									<button
										type="button"
										class="btn_sec md mgt5"
										onclick="edit(10867)"
									>
										수정
									</button>

									<button
										type="button"
										class="btn_sec md mgt5"
										onclick="del(10867)"
									>
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="10866"
										/>선택</label
									>
								</td>
								<td>2</td>
								<td>ncgn<br />(mallstoremim)</td>
								<td class="borright">
									<img
										src="//bootdev.mallstore.co.kr/data/base/goods/small/20230905/36b045f70026438a8fdacf8727e66d14.jpg"
										onerror="this.src='//bootdev.mallstore.co.kr/imgs/goods/no.gif'"
										width="50"
										height="50"
									/>
								</td>
								<td class="txt_left" style="border-left: 0">
									<a href="../../goods/detail?gno=10866" target="_blank"
										>입점업체 상품 테스트_수수료적용 01</a
									>
									<div class="topline">
										공급가 : <span class="numtxt">360,000</span>원&nbsp;(<span
											class="numtxt"
											>10.0%</span
										>
										수수료)<br />
										판매가 : <span class="numtxt">400,000</span>원
										<span class="light_gray"
											>시중가 : <span class="numtxt">500,000</span>원</span
										>
									</div>
								</td>
								<td class="txt_left">
									<ul>
										<li class="mgt3">패션의류&gt;여성의류&gt;원피스</li>
									</ul>
								</td>
								<td class="buttonw65">
									<a
										href="../../goods/detail?gno=10866"
										class="btn_sec md"
										target="_blank"
										>상세정보</a
									>

									<button
										type="button"
										class="btn_sec md mgt5"
										onclick="edit(10866)"
									>
										수정
									</button>

									<button
										type="button"
										class="btn_sec md mgt5"
										onclick="del(10866)"
									>
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="10865"
										/>선택</label
									>
								</td>
								<td>3</td>
								<td>ncgn<br />(mallstoremim)</td>
								<td class="borright">
									<img
										src="//bootdev.mallstore.co.kr/data/base/goods/small/20230905/09bd00cbe15a4d98bc2181eac5172e1d.jpg"
										onerror="this.src='//bootdev.mallstore.co.kr/imgs/goods/no.gif'"
										width="50"
										height="50"
									/>
								</td>
								<td class="txt_left" style="border-left: 0">
									<a href="../../goods/detail?gno=10865" target="_blank"
										>입점업체 상품 테스트_01</a
									>
									<div class="topline">
										공급가 : <span class="numtxt">180,000</span>원&nbsp;(<span
											class="numtxt"
											>0.0%</span
										>
										수수료)<br />
										판매가 : <span class="numtxt">180,000</span>원
										<span class="light_gray"
											>시중가 : <span class="numtxt">200,000</span>원</span
										>
									</div>
								</td>
								<td class="txt_left">
									<ul>
										<li class="mgt3">패션의류&gt;여성의류&gt;원피스</li>
									</ul>
								</td>
								<td class="buttonw65">
									<a
										href="../../goods/detail?gno=10865"
										class="btn_sec md"
										target="_blank"
										>상세정보</a
									>

									<button
										type="button"
										class="btn_sec md mgt5"
										onclick="edit(10865)"
									>
										수정
									</button>

									<button
										type="button"
										class="btn_sec md mgt5"
										onclick="del(10865)"
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
							><a
								href="/nmanager/mim/goods_list?page=1&amp;menu=list&amp;skey=&amp;sword=&amp;psort=no_desc&amp;psize=20"
								><strong class="active">1</strong></a
							></span
						>
					</div>
					<!-- //paging -->

					<div class="btn_wrap"></div>
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
