<template>
	<main id="contents" class="content">
		<!-- <script type="text/javascript" src="/jscript/calendar/class.js"></script>
		<script type="text/javascript" src="/jscript/inperiod/class.js"></script> -->

		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				입점업체탈퇴목록<button
					id="addBmark"
					onclick="addBookmark('입점업체탈퇴목록')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>입점업체관리</li>
				<li>입점업체관리</li>
				<li>입점업체탈퇴목록</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>탈퇴신청을 한 입점업체 목록입니다.</li>
		</ul>

		<!-- <script type="text/javascript">
			function setSort(psort) {
				var f = document.sFrm;
				f.psort.value = psort;
				f.target = '_self';
				f.submit();
			}

			function change() {
				var f = document.sFrm;
				f.target = '_self';
				f.submit();
			}
			//]]>
		</script>

		<script type="text/javascript">
			function detail(no) {
				location.href =
					'dealer_detail?menu=secession&no=' +
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

				if (
					confirm(
						'선택하신 탈퇴신청 입점업체를 정상 입점업체로 되돌리시겠습니까?',
					)
				) {
					f.mode.value = 'DEL_SECESSION';
					f.no.value = items;
					f.target = '_self';
					f.action = 'dealer_act';
					f.submit();
				}
			}

			function setConfirm() {
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

				if (confirm('선택하신 입점업체를 탈퇴승인하시겠습니까?')) {
					f.no.value = items;
					f.target = '_self';
					f.action = 'dealer_del_act';
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
											class="text_input"
										/>
									</div>
								</td>
							</tr>
							<tr>
								<th>기간</th>
								<td>
									<div class="label_wrap">
										<div class="period_inp">
											<input
												type="text"
												id="sdts"
												name="sdts"
												value=""
												maxlength="10"
												class="text_input"
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'sdts', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
										~
										<div class="period_inp">
											<input
												type="text"
												id="sdte"
												name="sdte"
												value=""
												maxlength="10"
												class="text_input"
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'sdte', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
										<div class="period_btn">
											<button
												type="button"
												onclick="inperiod.input('sdts', 'sdte')"
												class="btn_sec sm active"
											>
												전체
											</button>
											<button
												type="button"
												onclick="inperiod.input('sdts', 'sdte', 't')"
												class="btn_sec sm"
											>
												오늘
											</button>
											<button
												type="button"
												onclick="inperiod.input('sdts', 'sdte', 't', -1)"
												class="btn_sec sm"
											>
												어제
											</button>
											<button
												type="button"
												onclick="inperiod.input('sdts', 'sdte', 'd', -3)"
												class="btn_sec sm"
											>
												3일간
											</button>
											<button
												type="button"
												onclick="inperiod.input('sdts', 'sdte', 'd', -7)"
												class="btn_sec sm"
											>
												7일간
											</button>
											<button
												type="button"
												onclick="inperiod.input('sdts', 'sdte', 'd', -10)"
												class="btn_sec sm"
											>
												10일간
											</button>
											<button
												type="button"
												onclick="inperiod.input('sdts', 'sdte', 'd', -20)"
												class="btn_sec sm"
											>
												20일간
											</button>
											<button
												type="button"
												onclick="inperiod.input('sdts', 'sdte', 'd', -30)"
												class="btn_sec sm"
											>
												30일간
											</button>
										</div>
										<span class="noti_info"
											>직접 입력시에는 “2023-01-01” 형식으로 입력해주세요.</span
										>
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
						총 <strong>0</strong>건의 탈퇴신청 입점업체가 있습니다.
					</h4>
				</div>

				<form name="Frm" method="post">
					<input type="hidden" name="menu" value="secession" />
					<input type="hidden" name="mode" />
					<input type="hidden" name="no" />
					<input
						type="hidden"
						name="params"
						value="736B65793D5E73776F72643D5E70736F72743D726567646174655F646573635E706167653D31"
					/>

					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_list"
					>
						<caption>
							탈퇴 신청 입점업체 목록
						</caption>
						<colgroup>
							<col width="200" />
							<col width="*" />
							<col width="120" />
							<col width="120" />
							<col width="120" />
							<col width="120" />
							<col width="100" />
							<col width="50" />
						</colgroup>
						<thead>
							<tr>
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
									>입점일<span
										onclick="setSort('regdate_desc')"
										style="font-size: 11px; cursor: pointer"
										>▼</span
									>
								</th>
								<th>상세정보</th>
								<th>
									<label
										><input
											type="checkbox"
											name="cbListAll"
											onclick="checkCbAll(this.form.cbList, this.checked)"
										/>전체선택</label
									>
								</th>
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

					<div class="btn_wrap">
						<button type="button" class="btn_pri" onclick="setConfirm()">
							탈퇴승인
						</button>
						<button type="button" class="btn_sec" onclick="delList()">
							탈퇴반려
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
