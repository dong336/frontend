<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				입점업체목록<button
					id="addBmark"
					onclick="addBookmark('입점업체목록')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>입점업체관리</li>
				<li>입점업체관리</li>
				<li>입점업체목록</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>입점업체 신청목록에서 관리자가 승인을 내린 목록입니다.</li>
			<li>
				<span class="red"
					>주의 : 입점업체 목록을 삭제하시면 해당 상품이 모두 삭제됩니다.</span
				>
			</li>
		</ul>

		<!-- <script type="text/javascript">
			function setSort(psort) {
				var f = document.sFrm;
				f.psort.value = psort;
				f.target = '_self';
				f.action = 'dealer_list';
				f.submit();
			}

			function change() {
				var f = document.sFrm;
				f.target = '_self';
				f.action = 'dealer_list';
				f.submit();
			}

			function downExcel() {
				var f = document.sFrm;
				f.target = 'frmProc';
				f.action = 'dealer_list_excel';
				f.submit();
			}
			//]]>
		</script>

		<script type="text/javascript">
			function detail(no) {
				location.href =
					'dealer_detail?menu=normal&no=' +
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
					alert('입점업체를 선택해 주세요.');
					return false;
				}

				if (confirm('선택하신 입점업체를 삭제하시겠습니까?')) {
					f.no.value = items;
					f.action = 'dealer_del_act';
					f.submit();
				}
			}

			function loginDealer(no) {
				var f = document.loginFrm;

				f.no.value = no;
				f.submit();
			}
			//]]>
		</script> -->

		<form
			name="loginFrm"
			method="post"
			target="_blank"
			action="/mim/dealer_login_act"
		>
			<input type="hidden" name="no" />
		</form>

		<div class="main_content">
			<section class="cont_wrap">
				<form name="sFrm" method="get">
					<input type="hidden" name="psort" value="regdate_desc" />
					<input type="hidden" name="page" value="1" />
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
							<col width="130" />
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
											class="text_input"
											div=""
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
						총 1건의 승인된 입점업체가 있으며, 오늘 승인된 입점업체는 0건입니다.
					</h4>
					<div>
						<button type="button" class="btn_sec md" onclick="downExcel()">
							엑셀로받기
						</button>
						<button type="button" class="btn_sec md" onclick="delList()">
							선택삭제
						</button>
					</div>
				</div>

				<form name="Frm" method="post">
					<input type="hidden" name="menu" value="normal" />
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
							승인된 입점업체 목록
						</caption>
						<colgroup>
							<col width="40px" />
							<col width="60px" />
							<col width="100px" />
							<col width="120px" />
							<col width="*" />
							<col width="80px" />
							<col width="120px" />
							<col width="120px" />
							<col width="100px" />
							<col width="90px" />
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
								<th>접속</th>
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
								<th>사업자 번호</th>
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
								<th>휴대폰</th>
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
							<tr
								onmouseover="this.style.backgroundColor='#FDFAE8'"
								onmouseout="this.style.backgroundColor='#FFFFFF'"
							>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="148605"
										/>선택</label
									>
								</td>
								<td>
									<button
										type="button"
										class="btn_sec sm"
										onclick="loginDealer(148605)"
									>
										JOIN
									</button>
								</td>
								<td>mallstoremim</td>
								<td>119-02-29983</td>
								<td>ncgn</td>
								<td><a href="mailto:zinys@ncgn.co.kr">담당자</a></td>
								<td>02-545-5482</td>
								<td>010-5458-2158</td>
								<td>2016-07-11</td>
								<td>
									<button
										type="button"
										class="btn_sec sm"
										onclick="detail(148605)"
									>
										상세정보
									</button>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="paging">
						<span
							><a
								href="/nmanager/mim/dealer_list?page=1&amp;skey=&amp;sword=&amp;psort=regdate_desc"
								><strong class="active">1</strong></a
							></span
						>
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

<style lang="scss" scoped></style>
