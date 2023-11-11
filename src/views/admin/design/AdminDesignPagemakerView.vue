<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				페이지관리<button
					id="addBmark"
					onclick="addBookmark('페이지관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>전시관리</li>
				<li>페이지생성기</li>
				<li>페이지관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				현재 설정되어 있는 페이지와 이벤트 페이지, 메일폼을 제외하고 페이지를
				쉽게 생성해 적용할 수 있는 곳입니다.
			</li>
		</ul>
		<!-- <script type="text/javascript" src="/jscript/calendar/class.js"></script>
		<script type="text/javascript" src="/jscript/inperiod/class.js"></script>

		<script type="text/javascript">
			function reg() {
				location.href = 'pagemaker_reg';
			}

			function edit(idx) {
				location.href = 'pagemaker_reg?idx=' + idx;
			}

			function del(idx) {
				var f = document.Frm;

				if (confirm('삭제하시겠습니까?')) {
					f.mode.value = 'DEL';
					f.idx.value = idx;
					f.action = 'pagemaker_act';
					f.submit();
				}
			}

			function validSearch(f) {
				if (!isDate(f.sregdts.value)) f.sregdts.value = '';
				if (!isDate(f.sregdte.value)) f.sregdte.value = '';

				if (
					$('#sregdts').val().stripspace() != '' &&
					$('#sregdte').val().stripspace() != ''
				) {
					if (
						fn_betweenDate($('#sregdts').val(), $('#sregdte').val(), 'd') < 0
					) {
						alert('시작일자가 종료일 보다 늦습니다.\n다시 입력해 주세요.');
						$('#sregdte').focus();
						return false;
					}
				}
			}

			//]]>
		</script> -->

		<!-- 검색 폼 : 시작 ###################################################################### -->
		<form name="sFrm" method="get" onsubmit="return validSearch(this)">
			<input type="hidden" name="psort" value="" />
			<input type="hidden" name="psize" value="" />

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
							페이지 관리 검색 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>등록일</th>
								<td>
									<div class="label_wrap">
										<div class="period_inp">
											<input
												type="text"
												id="sregdts"
												name="sregdts"
												value=""
												maxlength="10"
												class="text_input"
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'sregdts', 'YYYY-MM-DD')"
											/>
										</div>
										~
										<div class="period_inp">
											<input
												type="text"
												id="sregdte"
												name="sregdte"
												value=""
												maxlength="10"
												class="text_input"
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'sregdte', 'YYYY-MM-DD')"
											/>
										</div>
										<div class="period_btn">
											<button
												type="button"
												class="btn_sec sm active"
												onclick="inperiod.input('sregdts', 'sregdte')"
											>
												전체
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sregdts', 'sregdte', 't')"
											>
												오늘
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sregdts', 'sregdte', 't', -1)"
											>
												어제
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sregdts', 'sregdte', 'd', -3)"
											>
												3일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sregdts', 'sregdte', 'd', -7)"
											>
												7일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sregdts', 'sregdte', 'd', -10)"
											>
												10일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sregdts', 'sregdte', 'd', -20)"
											>
												20일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sregdts', 'sregdte', 'd', -30)"
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
							<tr>
								<th>좌측메뉴</th>
								<td>
									<select id="sleftmenu" name="sleftmenu" style="width: 100%">
										<option value="">메뉴 없음</option>
										<optgroup label="- 고정 메뉴 -"></optgroup>
										<option value="-2">고객센터 메뉴</option>
										<optgroup label="- 사용자 메뉴 -"></optgroup>
										<option value="5">545454</option>
										<option value="4">1212</option>
									</select>
								</td>
							</tr>

							<tr>
								<th>직접검색</th>
								<td>
									<div class="direct_search">
										<select id="skey" name="skey">
											<option value="">전체</option>
											<option value="subject">제목</option>
											<option value="content">내용</option>
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

					<div class="btn btn_search_width">
						<button type="submit" class="btn_pri">검색</button>
					</div>
				</section>

				<!-- 검색 폼 : 끝 ###################################################################### -->

				<section class="cont_wrap">
					<form name="Frm" method="post">
						<input type="hidden" name="mode" />
						<input type="hidden" name="idx" />

						<div class="section_head">
							<h4 class="total">
								총 <strong>3</strong>개의 정보가 등록되어있습니다.
							</h4>
						</div>

						<table
							cellspacing="0"
							cellpadding="0"
							border="0"
							width="100%"
							class="t_list"
						>
							<caption>
								등록된 페이지 리스트
							</caption>
							<colgroup>
								<col width="50" />
								<col width="200" />
								<col width="*" />
								<col width="150" />
								<col width="80" />
								<col width="80" />
							</colgroup>
							<thead>
								<tr>
									<th>No</th>
									<th>제목</th>
									<th>링크경로 &amp; 미리보기</th>
									<th>왼쪽메뉴</th>
									<th>등록일</th>
									<th>관리</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>3</td>
									<td>test</td>
									<td>
										<a
											href="http://javalocal.mallstore.co.kr/etc/page?idx=34"
											target="_blank"
											>http://javalocal.mallstore.co.kr/etc/page?idx=34</a
										>
									</td>
									<td><span class="ellipsis">좌메뉴 없음</span></td>
									<td>2023-07-14</td>
									<td>
										<button type="button" class="btn_sec sm" onclick="edit(34)">
											수정
										</button>
										<button
											type="button"
											class="btn_sec sm mgt5"
											onclick="del(34)"
										>
											삭제
										</button>
									</td>
								</tr>

								<tr>
									<td>2</td>
									<td>회원혜택</td>
									<td>
										<a
											href="http://javalocal.mallstore.co.kr/etc/page?idx=33"
											target="_blank"
											>http://javalocal.mallstore.co.kr/etc/page?idx=33</a
										>
									</td>
									<td><span class="ellipsis">좌메뉴 없음</span></td>
									<td>2023-07-13</td>
									<td>
										<button type="button" class="btn_sec sm" onclick="edit(33)">
											수정
										</button>
										<button
											type="button"
											class="btn_sec sm mgt5"
											onclick="del(33)"
										>
											삭제
										</button>
									</td>
								</tr>

								<tr>
									<td>1</td>
									<td>회사소개</td>
									<td>
										<a
											href="http://javalocal.mallstore.co.kr/etc/page?idx=27"
											target="_blank"
											>http://javalocal.mallstore.co.kr/etc/page?idx=27</a
										>
									</td>
									<td><span class="ellipsis">좌메뉴 없음</span></td>
									<td>2018-01-22</td>
									<td>
										<button type="button" class="btn_sec sm" onclick="edit(27)">
											수정
										</button>
										<button
											type="button"
											class="btn_sec sm mgt5"
											onclick="del(27)"
										>
											삭제
										</button>
									</td>
								</tr>
							</tbody>
						</table>

						<div class="btn_wrap">
							<button type="button" class="btn_pri" onclick="reg()">
								등록
							</button>
							<button type="button" onclick="cancel()" class="btn_sec">
								취소
							</button>
						</div>
					</form>
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
