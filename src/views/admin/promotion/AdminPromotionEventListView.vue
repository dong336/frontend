<template>
	<main v-if="$route.query.method === '100'" id="contents" class="content">
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
				<li>프로모션</li>
				<li>이벤트관리</li>
				<li>이벤트(일반) 관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>이벤트를 생성하고 관리하는 페이지입니다.</li>
		</ul>

		<!-- <script type="text/javascript" src="/jscript/calendar/class.js"></script>
		<script type="text/javascript" src="/jscript/inperiod/class.js"></script>
		<script type="text/javascript">
			function reg() {
				location.href = 'event_reg?method=100';
			}

			function edit(idx) {
				location.href =
					'event_reg?method=100&idx=' +
					idx +
					'&params=6D6574686F643D3130305E737265676474733D5E737265676474653D5E737461727464743D5E656E6464743D5E736B65793D5E73776F72643D5E7374617475733D3939395E706167653D31';
			}

			function del(idx) {
				var f = document.Frm;

				if (confirm('삭제하시겠습니까?')) {
					f.mode.value = 'DEL';
					f.idx.value = idx;
					f.action = 'event_act';
					f.submit();
				}
			}

			function changeRun(idx, isrun) {
				var f = document.Frm;

				f.mode.value = 'RUN';
				f.idx.value = idx;
				f.isrun.value = isrun;
				f.action = 'event_act';
				f.submit();
			}

			function change() {
				var f = document.sFrm;

				validSearch(f);

				f.submit();
			}

			function validSearch(f) {
				if (!isDate(f.sregdts.value)) f.sregdts.value = '';
				if (!isDate(f.sregdte.value)) f.sregdte.value = '';
				if (!isDate(f.startdt.value)) f.startdt.value = '';
				if (!isDate(f.enddt.value)) f.enddt.value = '';

				if (
					$('#startdt').val().stripspace() != '' &&
					$('#enddt').val().stripspace() != ''
				) {
					if (fn_betweenDate($('#startdt').val(), $('#enddt').val(), 'd') < 0) {
						alert('시작일자가 종료일 보다 늦습니다.\n다시 입력해 주세요.');
						$('#enddt').focus();
						return false;
					}
				}

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

		<form name="sFrm" method="get" onsubmit="return validSearch(this)">
			<input type="hidden" name="psort" value="" />
			<input type="hidden" name="psize" value="" />
			<input type="hidden" name="method" value="100" />

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
							이벤트 검색 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>

						<tbody>
							<tr>
								<th>기간</th>
								<td>
									<div class="label_wrap">
										<div class="period_inp">
											<input
												type="text"
												id="startdt"
												name="startdt"
												value=""
												maxlength="10"
												class="text_input"
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'startdt', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
										~
										<div class="period_inp">
											<input
												type="text"
												id="enddt"
												name="enddt"
												value=""
												maxlength="10"
												class="text_input"
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'enddt', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
										<div class="period_btn">
											<button
												type="button"
												class="btn_sec sm active"
												onclick="inperiod.input('startdt', 'enddt')"
											>
												전체
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 't')"
											>
												오늘
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 't', -1)"
											>
												어제
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 'd', -3)"
											>
												3일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 'd', -7)"
											>
												7일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 'd', -10)"
											>
												10일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 'd', -20)"
											>
												20일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 'd', -30)"
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
												style="vertical-align: middle"
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
												style="vertical-align: middle"
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
								<th>진행상태</th>
								<td>
									<div class="label_wrap">
										<label
											><input
												type="radio"
												name="status"
												value="999"
												checked=""
											/>전체</label
										>
										<label
											><input
												type="radio"
												name="status"
												value="100"
											/>대기</label
										>
										<label
											><input
												type="radio"
												name="status"
												value="200"
											/>진행중</label
										>
										<label
											><input
												type="radio"
												name="status"
												value="300"
											/>종료</label
										>
										<label
											><input
												type="radio"
												name="status"
												value="900"
											/>마감</label
										>
									</div>
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

					<div class="btn_wrap">
						<button type="submit" class="btn_pri">검색</button>
					</div>
				</section>

				<section class="cont_wrap">
					<form name="Frm" method="post" enctype="multipart/form-data">
						<input type="hidden" name="method" value="100" />
						<input type="hidden" name="mode" />
						<input type="hidden" name="idx" />
						<input type="hidden" name="isrun" />
						<input
							type="hidden"
							name="params"
							value="6D6574686F643D3130305E737265676474733D5E737265676474653D5E737461727464743D5E656E6464743D5E736B65793D5E73776F72643D5E7374617475733D3939395E706167653D31"
						/>

						<div class="section_head">
							<h4 class="total">
								총 <strong>33 </strong>개의 정보가 등록되어있습니다.
							</h4>
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
								<col width="35" />
								<col width="200" />

								<col width="100" />

								<col width="80" />

								<col width="*" />
								<col width="80" />
								<col width="80" />
								<col width="80" />
							</colgroup>
							<thead>
								<tr>
									<th>No</th>
									<th>제목</th>

									<th>입점업체</th>

									<th>기간</th>

									<th>링크경로 &amp; 미리보기</th>
									<th>진행상태</th>
									<th>등록일</th>
									<th>관리</th>
								</tr>
							</thead>
							<tbody>
								<tr align="center" bgcolor="#FFFFFF">
									<td>33</td>
									<td style="word-wrap: break-word; word-break: break-all">
										test 0817 13
									</td>

									<td>본사</td>

									<td>2023-08-17<br />~<br />2023-08-17</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=8706"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=8706</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=8706" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=8706</a>
				 -->
									</td>
									<td>종료</td>

									<td>2023-08-17</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(8706)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(8706)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>32</td>
									<td style="word-wrap: break-word; word-break: break-all">
										test 0817 12
									</td>

									<td>본사</td>

									<td>2023-08-17<br />~<br />2023-08-17</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=8705"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=8705</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=8705" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=8705</a>
				 -->
									</td>
									<td>종료</td>

									<td>2023-08-17</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(8705)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(8705)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>31</td>
									<td style="word-wrap: break-word; word-break: break-all">
										test 0817 11
									</td>

									<td>본사</td>

									<td>2023-08-17<br />~<br />2023-08-17</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=8704"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=8704</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=8704" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=8704</a>
				 -->
									</td>
									<td>종료</td>

									<td>2023-08-17</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(8704)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(8704)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>30</td>
									<td style="word-wrap: break-word; word-break: break-all">
										[가을 신상품]가격인한 이벤트
									</td>

									<td>medaje</td>

									<td>2023-07-11<br />~<br />2023-09-30</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=430"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=430</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=430" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=430</a>
				 -->
									</td>
									<td>진행중</td>

									<td>2023-07-11</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(430)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(430)"
												>
													삭제
												</button>

												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="changeRun(430,'F')"
												>
													마감
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#F7F7F7">
									<td>29</td>
									<td style="word-wrap: break-word; word-break: break-all">
										ㅅㄷㄴㅅ
									</td>

									<td>test</td>

									<td>2023-07-05<br />~<br />2023-07-28</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=424"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=424</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=424" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=424</a>
				 -->
									</td>
									<td>마감</td>

									<td>2023-07-07</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(424)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(424)"
												>
													삭제
												</button>

												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="changeRun(424,'T')"
												>
													진행
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>28</td>
									<td style="word-wrap: break-word; word-break: break-all">
										[기획전_테스트]서실장
									</td>

									<td>본사</td>

									<td>2023-07-02<br />~<br />2023-11-30</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=423"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=423</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=423" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=423</a>
				 -->
									</td>
									<td>진행중</td>

									<td>2023-07-03</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(423)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(423)"
												>
													삭제
												</button>

												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="changeRun(423,'F')"
												>
													마감
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#F7F7F7">
									<td>27</td>
									<td style="word-wrap: break-word; word-break: break-all">
										서실장_테스트(이벤트)
									</td>

									<td>medaje</td>

									<td>2023-04-19<br />~<br />2023-08-31</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=420"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=420</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=420" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=420</a>
				 -->
									</td>
									<td>마감</td>

									<td>2023-04-20</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(420)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(420)"
												>
													삭제
												</button>

												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="changeRun(420,'T')"
												>
													진행
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>26</td>
									<td style="word-wrap: break-word; word-break: break-all">
										서실장_테스트
									</td>

									<td>본사</td>

									<td>2023-04-11<br />~<br />2023-04-15</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=419"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=419</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=419" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=419</a>
				 -->
									</td>
									<td>종료</td>

									<td>2023-04-11</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(419)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(419)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>25</td>
									<td style="word-wrap: break-word; word-break: break-all">
										test
									</td>

									<td>본사</td>

									<td>2023-04-10<br />~<br />2023-04-12</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=417"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=417</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=417" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=417</a>
				 -->
									</td>
									<td>종료</td>

									<td>2022-06-05</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(417)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(417)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#F7F7F7">
									<td>24</td>
									<td style="word-wrap: break-word; word-break: break-all">
										12213231
									</td>

									<td>본사</td>

									<td>2022-02-17<br />~<br />2022-02-19</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=416"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=416</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=416" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=416</a>
				 -->
									</td>
									<td>마감</td>

									<td>2022-02-15</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(416)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(416)"
												>
													삭제
												</button>

												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="changeRun(416,'T')"
												>
													진행
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>23</td>
									<td style="word-wrap: break-word; word-break: break-all">
										&lt;img src=x onerror=x-alert('wins_test')&gt;
									</td>

									<td>본사</td>

									<td>2021-12-13<br />~<br />2021-12-14</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=415"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=415</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=415" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=415</a>
				 -->
									</td>
									<td>종료</td>

									<td>2021-12-13</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(415)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(415)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#F7F7F7">
									<td>22</td>
									<td style="word-wrap: break-word; word-break: break-all">
										무더운 여름에 이벤트!
									</td>

									<td>본사</td>

									<td>2022-02-14<br />~<br />2022-02-17</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=412"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=412</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=412" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=412</a>
				 -->
									</td>
									<td>마감</td>

									<td>2021-08-17</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(412)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(412)"
												>
													삭제
												</button>

												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="changeRun(412,'T')"
												>
													진행
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#F7F7F7">
									<td>21</td>
									<td style="word-wrap: break-word; word-break: break-all">
										test 등록
									</td>

									<td>본사</td>

									<td>2021-06-28<br />~<br />2021-06-30</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=410"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=410</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=410" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=410</a>
				 -->
									</td>
									<td>마감</td>

									<td>2021-06-25</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(410)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(410)"
												>
													삭제
												</button>

												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="changeRun(410,'T')"
												>
													진행
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>20</td>
									<td style="word-wrap: break-word; word-break: break-all">
										test_jian
									</td>

									<td>본사</td>

									<td>2021-03-01<br />~<br />2021-03-31</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=402"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=402</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=402" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=402</a>
				 -->
									</td>
									<td>종료</td>

									<td>2021-02-23</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(402)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(402)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>19</td>
									<td style="word-wrap: break-word; word-break: break-all">
										TEST
									</td>

									<td>본사</td>

									<td>2019-06-21<br />~<br />2021-02-26</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=395"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=395</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=395" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=395</a>
				 -->
									</td>
									<td>종료</td>

									<td>2019-06-30</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(395)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(395)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>

						<div class="paging" style="margin-top: 20px">
							<span
								><a
									href="/nmanager/promotion/event_list?page=1&amp;method=100&amp;sregdts=&amp;sregdte=&amp;startdt=&amp;enddt=&amp;skey=&amp;sword=&amp;status=999"
									><strong class="active">1</strong></a
								><a
									href="/nmanager/promotion/event_list?page=2&amp;method=100&amp;sregdts=&amp;sregdte=&amp;startdt=&amp;enddt=&amp;skey=&amp;sword=&amp;status=999"
									><span class="num">2</span></a
								><a
									href="/nmanager/promotion/event_list?page=3&amp;method=100&amp;sregdts=&amp;sregdte=&amp;startdt=&amp;enddt=&amp;skey=&amp;sword=&amp;status=999"
									><span class="num">3</span></a
								></span
							>
						</div>

						<div class="btn_wrap">
							<button class="btn_pri" onclick="reg()" type="button">
								등록
							</button>
							<button class="btn_sec" onclick="cancle()" type="button">
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

	<main v-if="$route.query.method === '200'" id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				이벤트(분류) 관리<button
					id="addBmark"
					onclick="addBookmark('이벤트(분류) 관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>프로모션</li>
				<li>이벤트관리</li>
				<li>이벤트(분류) 관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>이벤트를 생성하고 관리하는 페이지입니다.</li>
		</ul>

		<!-- <script type="text/javascript" src="/jscript/calendar/class.js"></script>
		<script type="text/javascript" src="/jscript/inperiod/class.js"></script>
		<script type="text/javascript">
			function reg() {
				location.href = 'event_reg?method=200';
			}

			function edit(idx) {
				location.href =
					'event_reg?method=200&idx=' +
					idx +
					'&params=6D6574686F643D3230305E737265676474733D5E737265676474653D5E737461727464743D5E656E6464743D5E736B65793D5E73776F72643D5E7374617475733D3939395E706167653D31';
			}

			function del(idx) {
				var f = document.Frm;

				if (confirm('삭제하시겠습니까?')) {
					f.mode.value = 'DEL';
					f.idx.value = idx;
					f.action = 'event_act';
					f.submit();
				}
			}

			function changeRun(idx, isrun) {
				var f = document.Frm;

				f.mode.value = 'RUN';
				f.idx.value = idx;
				f.isrun.value = isrun;
				f.action = 'event_act';
				f.submit();
			}

			function change() {
				var f = document.sFrm;

				validSearch(f);

				f.submit();
			}

			function validSearch(f) {
				if (!isDate(f.sregdts.value)) f.sregdts.value = '';
				if (!isDate(f.sregdte.value)) f.sregdte.value = '';
				if (!isDate(f.startdt.value)) f.startdt.value = '';
				if (!isDate(f.enddt.value)) f.enddt.value = '';

				if (
					$('#startdt').val().stripspace() != '' &&
					$('#enddt').val().stripspace() != ''
				) {
					if (fn_betweenDate($('#startdt').val(), $('#enddt').val(), 'd') < 0) {
						alert('시작일자가 종료일 보다 늦습니다.\n다시 입력해 주세요.');
						$('#enddt').focus();
						return false;
					}
				}

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
			<input type="hidden" name="method" value="200" />

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
							이벤트 검색 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>

						<tbody>
							<tr>
								<th>기간</th>
								<td>
									<div class="label_wrap">
										<div class="period_inp">
											<input
												type="text"
												id="startdt"
												name="startdt"
												value=""
												maxlength="10"
												class="text_input"
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'startdt', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
										~
										<div class="period_inp">
											<input
												type="text"
												id="enddt"
												name="enddt"
												value=""
												maxlength="10"
												class="text_input"
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'enddt', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
										<div class="period_btn">
											<button
												type="button"
												class="btn_sec sm active"
												onclick="inperiod.input('startdt', 'enddt')"
											>
												전체
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 't')"
											>
												오늘
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 't', -1)"
											>
												어제
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 'd', -3)"
											>
												3일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 'd', -7)"
											>
												7일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 'd', -10)"
											>
												10일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 'd', -20)"
											>
												20일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 'd', -30)"
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
												style="vertical-align: middle"
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
												style="vertical-align: middle"
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
								<th>진행상태</th>
								<td>
									<div class="label_wrap">
										<label
											><input
												type="radio"
												name="status"
												value="999"
												checked=""
											/>전체</label
										>
										<label
											><input
												type="radio"
												name="status"
												value="100"
											/>대기</label
										>
										<label
											><input
												type="radio"
												name="status"
												value="200"
											/>진행중</label
										>
										<label
											><input
												type="radio"
												name="status"
												value="300"
											/>종료</label
										>
										<label
											><input
												type="radio"
												name="status"
												value="900"
											/>마감</label
										>
									</div>
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

					<div class="btn_wrap">
						<button type="submit" class="btn_pri">검색</button>
					</div>
				</section>

				<!-- 검색 폼 : 끝 ###################################################################### -->

				<section class="cont_wrap">
					<form name="Frm" method="post" enctype="multipart/form-data">
						<input type="hidden" name="method" value="200" />
						<input type="hidden" name="mode" />
						<input type="hidden" name="idx" />
						<input type="hidden" name="isrun" />
						<input
							type="hidden"
							name="params"
							value="6D6574686F643D3230305E737265676474733D5E737265676474653D5E737461727464743D5E656E6464743D5E736B65793D5E73776F72643D5E7374617475733D3939395E706167653D31"
						/>

						<div class="section_head">
							<h4 class="total">
								총 <strong>18 </strong>개의 정보가 등록되어있습니다.
							</h4>
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
								<col width="35" />
								<col width="200" />

								<col width="80" />

								<col width="*" />
								<col width="80" />
								<col width="80" />
								<col width="80" />
							</colgroup>
							<thead>
								<tr>
									<th>No</th>
									<th>제목</th>

									<th>기간</th>

									<th>링크경로 &amp; 미리보기</th>
									<th>진행상태</th>
									<th>등록일</th>
									<th>관리</th>
								</tr>
							</thead>
							<tbody>
								<tr align="center" bgcolor="#F7F7F7">
									<td>18</td>
									<td style="word-wrap: break-word; word-break: break-all">
										dfsdf
									</td>

									<td>2023-03-01<br />~<br />2023-10-28</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=418"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=418</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=418" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=418</a>
				 -->
									</td>
									<td>마감</td>

									<td>2023-03-27</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(418)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(418)"
												>
													삭제
												</button>

												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="changeRun(418,'T')"
												>
													진행
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>17</td>
									<td style="word-wrap: break-word; word-break: break-all">
										ㅁㅁㅁ
									</td>

									<td>2021-07-23<br />~<br />2021-07-30</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=411"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=411</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=411" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=411</a>
				 -->
									</td>
									<td>종료</td>

									<td>2021-07-23</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(411)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(411)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>16</td>
									<td style="word-wrap: break-word; word-break: break-all">
										4444444444444444444444444444444444444444444444444444444444444444
									</td>

									<td>2021-06-01<br />~<br />2021-06-30</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=407"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=407</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=407" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=407</a>
				 -->
									</td>
									<td>종료</td>

									<td>2021-06-16</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(407)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(407)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>15</td>
									<td style="word-wrap: break-word; word-break: break-all">
										분류이벤트 테스트
									</td>

									<td>2019-11-01<br />~<br />2020-01-22</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=397"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=397</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=397" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=397</a>
				 -->
									</td>
									<td>종료</td>

									<td>2019-11-19</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(397)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(397)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>14</td>
									<td style="word-wrap: break-word; word-break: break-all">
										김효주) 분류
									</td>

									<td>2019-05-09<br />~<br />2019-05-09</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=392"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=392</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=392" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=392</a>
				 -->
									</td>
									<td>종료</td>

									<td>2019-05-09</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(392)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(392)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>13</td>
									<td style="word-wrap: break-word; word-break: break-all">
										ㅇㅇㅇ
									</td>

									<td>2018-10-03<br />~<br />2018-10-30</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=388"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=388</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=388" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=388</a>
				 -->
									</td>
									<td>종료</td>

									<td>2018-10-29</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(388)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(388)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>12</td>
									<td style="word-wrap: break-word; word-break: break-all">
										분류 이벤트2
									</td>

									<td>2018-07-02<br />~<br />2018-07-31</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=353"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=353</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=353" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=353</a>
				 -->
									</td>
									<td>종료</td>

									<td>2018-07-11</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(353)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(353)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>11</td>
									<td style="word-wrap: break-word; word-break: break-all">
										분류 이벤트
									</td>

									<td>2018-07-02<br />~<br />2018-07-31</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=352"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=352</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=352" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=352</a>
				 -->
									</td>
									<td>종료</td>

									<td>2018-07-11</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(352)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(352)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#F7F7F7">
									<td>10</td>
									<td style="word-wrap: break-word; word-break: break-all">
										분류 이벤트 테스트
									</td>

									<td>2018-07-03<br />~<br />2018-07-03</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=317"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=317</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=317" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=317</a>
				 -->
									</td>
									<td>마감</td>

									<td>2018-07-02</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(317)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(317)"
												>
													삭제
												</button>

												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="changeRun(317,'T')"
												>
													진행
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#F7F7F7">
									<td>9</td>
									<td style="word-wrap: break-word; word-break: break-all">
										ㅇㅇ
									</td>

									<td>2017-12-07<br />~<br />2017-12-31</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=259"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=259</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=259" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=259</a>
				 -->
									</td>
									<td>마감</td>

									<td>2017-12-21</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(259)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(259)"
												>
													삭제
												</button>

												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="changeRun(259,'T')"
												>
													진행
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>8</td>
									<td style="word-wrap: break-word; word-break: break-all">
										분류이벤트
									</td>

									<td>2017-12-21<br />~<br />2017-12-31</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=256"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=256</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=256" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=256</a>
				 -->
									</td>
									<td>종료</td>

									<td>2017-12-21</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(256)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(256)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>7</td>
									<td style="word-wrap: break-word; word-break: break-all">
										ㅇㅇㅇ
									</td>

									<td>2017-12-28<br />~<br />2017-12-31</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=250"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=250</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=250" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=250</a>
				 -->
									</td>
									<td>종료</td>

									<td>2017-12-21</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(250)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(250)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>6</td>
									<td style="word-wrap: break-word; word-break: break-all">
										dddddd
									</td>

									<td>2017-12-07<br />~<br />2017-12-24</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=230"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=230</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=230" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=230</a>
				 -->
									</td>
									<td>종료</td>

									<td>2017-12-07</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(230)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(230)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>5</td>
									<td style="word-wrap: break-word; word-break: break-all">
										분류이벤트 테스트
									</td>

									<td>2017-11-01<br />~<br />2017-11-13</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=227"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=227</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=227" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=227</a>
				 -->
									</td>
									<td>종료</td>

									<td>2017-11-13</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(227)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(227)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#F7F7F7">
									<td>4</td>
									<td style="word-wrap: break-word; word-break: break-all">
										분류이벤트~
									</td>

									<td>2015-10-07<br />~<br />2015-12-03</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=180"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=180</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=180" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=180</a>
				 -->
									</td>
									<td>마감</td>

									<td>2015-10-07</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(180)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(180)"
												>
													삭제
												</button>

												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="changeRun(180,'T')"
												>
													진행
												</button>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>

						<div class="paging" style="margin-top: 20px">
							<span
								><a
									href="/nmanager/promotion/event_list?page=1&amp;method=200&amp;sregdts=&amp;sregdte=&amp;startdt=&amp;enddt=&amp;skey=&amp;sword=&amp;status=999"
									><strong class="active">1</strong></a
								><a
									href="/nmanager/promotion/event_list?page=2&amp;method=200&amp;sregdts=&amp;sregdte=&amp;startdt=&amp;enddt=&amp;skey=&amp;sword=&amp;status=999"
									><span class="num">2</span></a
								></span
							>
						</div>

						<div class="btn_wrap">
							<button class="btn_pri" onclick="reg()" type="button">
								등록
							</button>
							<button class="btn_sec" onclick="cancle()" type="button">
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

	<main v-if="$route.query.method === '300'" id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				이벤트(쿠폰) 관리<button
					id="addBmark"
					onclick="addBookmark('이벤트(쿠폰) 관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>프로모션</li>
				<li>이벤트관리</li>
				<li>이벤트(쿠폰) 관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>이벤트를 생성하고 관리하는 페이지입니다.</li>
		</ul>

		<!-- <script type="text/javascript" src="/jscript/calendar/class.js"></script>
		<script type="text/javascript" src="/jscript/inperiod/class.js"></script>
		<script type="text/javascript">
			function reg() {
				location.href = 'event_reg?method=300';
			}

			function edit(idx) {
				location.href =
					'event_reg?method=300&idx=' +
					idx +
					'&params=6D6574686F643D3330305E737265676474733D5E737265676474653D5E737461727464743D5E656E6464743D5E736B65793D5E73776F72643D5E7374617475733D3939395E706167653D31';
			}

			function del(idx) {
				var f = document.Frm;

				if (confirm('삭제하시겠습니까?')) {
					f.mode.value = 'DEL';
					f.idx.value = idx;
					f.action = 'event_act';
					f.submit();
				}
			}

			function changeRun(idx, isrun) {
				var f = document.Frm;

				f.mode.value = 'RUN';
				f.idx.value = idx;
				f.isrun.value = isrun;
				f.action = 'event_act';
				f.submit();
			}

			function change() {
				var f = document.sFrm;

				validSearch(f);

				f.submit();
			}

			function validSearch(f) {
				if (!isDate(f.sregdts.value)) f.sregdts.value = '';
				if (!isDate(f.sregdte.value)) f.sregdte.value = '';
				if (!isDate(f.startdt.value)) f.startdt.value = '';
				if (!isDate(f.enddt.value)) f.enddt.value = '';

				if (
					$('#startdt').val().stripspace() != '' &&
					$('#enddt').val().stripspace() != ''
				) {
					if (fn_betweenDate($('#startdt').val(), $('#enddt').val(), 'd') < 0) {
						alert('시작일자가 종료일 보다 늦습니다.\n다시 입력해 주세요.');
						$('#enddt').focus();
						return false;
					}
				}

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
			<input type="hidden" name="method" value="300" />

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
							이벤트 검색 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>

						<tbody>
							<tr>
								<th>기간</th>
								<td>
									<div class="label_wrap">
										<div class="period_inp">
											<input
												type="text"
												id="startdt"
												name="startdt"
												value=""
												maxlength="10"
												class="text_input"
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'startdt', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
										~
										<div class="period_inp">
											<input
												type="text"
												id="enddt"
												name="enddt"
												value=""
												maxlength="10"
												class="text_input"
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'enddt', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
										<div class="period_btn">
											<button
												type="button"
												class="btn_sec sm active"
												onclick="inperiod.input('startdt', 'enddt')"
											>
												전체
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 't')"
											>
												오늘
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 't', -1)"
											>
												어제
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 'd', -3)"
											>
												3일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 'd', -7)"
											>
												7일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 'd', -10)"
											>
												10일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 'd', -20)"
											>
												20일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 'd', -30)"
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
												style="vertical-align: middle"
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
												style="vertical-align: middle"
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
								<th>진행상태</th>
								<td>
									<div class="label_wrap">
										<label
											><input
												type="radio"
												name="status"
												value="999"
												checked=""
											/>전체</label
										>
										<label
											><input
												type="radio"
												name="status"
												value="100"
											/>대기</label
										>
										<label
											><input
												type="radio"
												name="status"
												value="200"
											/>진행중</label
										>
										<label
											><input
												type="radio"
												name="status"
												value="300"
											/>종료</label
										>
										<label
											><input
												type="radio"
												name="status"
												value="900"
											/>마감</label
										>
									</div>
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

					<div class="btn_wrap">
						<button type="submit" class="btn_pri">검색</button>
					</div>
				</section>

				<!-- 검색 폼 : 끝 ###################################################################### -->

				<section class="cont_wrap">
					<form name="Frm" method="post" enctype="multipart/form-data">
						<input type="hidden" name="method" value="300" />
						<input type="hidden" name="mode" />
						<input type="hidden" name="idx" />
						<input type="hidden" name="isrun" />
						<input
							type="hidden"
							name="params"
							value="6D6574686F643D3330305E737265676474733D5E737265676474653D5E737461727464743D5E656E6464743D5E736B65793D5E73776F72643D5E7374617475733D3939395E706167653D31"
						/>

						<div class="section_head">
							<h4 class="total">
								총 <strong>25 </strong>개의 정보가 등록되어있습니다.
							</h4>
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
								<col width="35" />
								<col width="200" />

								<col width="80" />

								<col width="*" />
								<col width="80" />
								<col width="80" />
								<col width="80" />
							</colgroup>
							<thead>
								<tr>
									<th>No</th>
									<th>제목</th>

									<th>기간</th>

									<th>링크경로 &amp; 미리보기</th>
									<th>진행상태</th>
									<th>등록일</th>
									<th>관리</th>
								</tr>
							</thead>
							<tbody>
								<tr align="center" bgcolor="#F7F7F7">
									<td>25</td>
									<td style="word-wrap: break-word; word-break: break-all">
										test 0719 03 / 이벤트(쿠폰)
									</td>

									<td>2023-07-17<br />~<br />2023-07-18</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=434"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=434</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=434" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=434</a>
				 -->
									</td>
									<td>마감</td>

									<td>2023-07-19</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(434)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(434)"
												>
													삭제
												</button>

												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="changeRun(434,'T')"
												>
													진행
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#F7F7F7">
									<td>24</td>
									<td style="word-wrap: break-word; word-break: break-all">
										test 0719 02 / 이벤트(쿠폰)
									</td>

									<td>2023-07-17<br />~<br />2023-07-18</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=433"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=433</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=433" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=433</a>
				 -->
									</td>
									<td>마감</td>

									<td>2023-07-19</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(433)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(433)"
												>
													삭제
												</button>

												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="changeRun(433,'T')"
												>
													진행
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#F7F7F7">
									<td>23</td>
									<td style="word-wrap: break-word; word-break: break-all">
										test 0719 01 / 이벤트(쿠폰)
									</td>

									<td>2023-07-17<br />~<br />2023-07-18</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=432"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=432</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=432" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=432</a>
				 -->
									</td>
									<td>마감</td>

									<td>2023-07-19</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(432)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(432)"
												>
													삭제
												</button>

												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="changeRun(432,'T')"
												>
													진행
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>22</td>
									<td style="word-wrap: break-word; word-break: break-all">
										쿠폰이벤
									</td>

									<td>2021-01-22<br />~<br />2021-01-29</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=401"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=401</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=401" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=401</a>
				 -->
									</td>
									<td>종료</td>

									<td>2021-01-22</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(401)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(401)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>21</td>
									<td style="word-wrap: break-word; word-break: break-all">
										쿠폰이벤트
									</td>

									<td>2020-11-04<br />~<br />2020-11-30</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=399"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=399</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=399" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=399</a>
				 -->
									</td>
									<td>종료</td>

									<td>2020-11-04</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(399)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(399)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>20</td>
									<td style="word-wrap: break-word; word-break: break-all">
										쿠폰이벤트
									</td>

									<td>2019-10-10<br />~<br />2019-10-31</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=396"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=396</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=396" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=396</a>
				 -->
									</td>
									<td>종료</td>

									<td>2019-10-11</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(396)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(396)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>19</td>
									<td style="word-wrap: break-word; word-break: break-all">
										TEST
									</td>

									<td>2019-06-17<br />~<br />2019-06-28</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=394"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=394</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=394" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=394</a>
				 -->
									</td>
									<td>종료</td>

									<td>2019-06-24</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(394)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(394)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>18</td>
									<td style="word-wrap: break-word; word-break: break-all">
										쿠폰 이벤트 테스트
									</td>

									<td>2019-04-15<br />~<br />2019-04-30</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=318"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=318</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=318" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=318</a>
				 -->
									</td>
									<td>종료</td>

									<td>2018-07-02</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(318)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(318)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>17</td>
									<td style="word-wrap: break-word; word-break: break-all">
										상품할인 쿠폰 - 쿠폰사용제한금액
									</td>

									<td>2018-05-27<br />~<br />2018-06-30</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=293"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=293</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=293" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=293</a>
				 -->
									</td>
									<td>종료</td>

									<td>2018-05-29</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(293)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(293)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>16</td>
									<td style="word-wrap: break-word; word-break: break-all">
										이벤트(쿠폰2) 등록
									</td>

									<td>2018-05-28<br />~<br />2018-06-22</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=277"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=277</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=277" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=277</a>
				 -->
									</td>
									<td>종료</td>

									<td>2018-05-29</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(277)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(277)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>15</td>
									<td style="word-wrap: break-word; word-break: break-all">
										이벤트 등록 테스트
									</td>

									<td>2018-05-28<br />~<br />2018-06-15</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=276"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=276</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=276" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=276</a>
				 -->
									</td>
									<td>종료</td>

									<td>2018-05-29</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(276)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(276)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>14</td>
									<td style="word-wrap: break-word; word-break: break-all">
										쿠폰이벤트
									</td>

									<td>2017-12-21<br />~<br />2019-12-02</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=257"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=257</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=257" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=257</a>
				 -->
									</td>
									<td>종료</td>

									<td>2017-12-21</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(257)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(257)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>13</td>
									<td style="word-wrap: break-word; word-break: break-all">
										쿠폰 전체상품
									</td>

									<td>2017-12-14<br />~<br />2017-12-31</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=244"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=244</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=244" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=244</a>
				 -->
									</td>
									<td>종료</td>

									<td>2017-12-14</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(244)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(244)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>12</td>
									<td style="word-wrap: break-word; word-break: break-all">
										dsfsdfasdf
									</td>

									<td>2017-12-08<br />~<br />2017-12-31</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=240"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=240</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=240" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=240</a>
				 -->
									</td>
									<td>종료</td>

									<td>2017-12-08</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(240)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(240)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#F7F7F7">
									<td>11</td>
									<td style="word-wrap: break-word; word-break: break-all">
										테스트쿠폰
									</td>

									<td>2016-07-22<br />~<br />2016-07-23</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=223"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=223</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=223" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=223</a>
				 -->
									</td>
									<td>마감</td>

									<td>2016-07-21</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(223)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(223)"
												>
													삭제
												</button>

												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="changeRun(223,'T')"
												>
													진행
												</button>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>

						<div class="paging" style="margin-top: 20px">
							<span
								><a
									href="/nmanager/promotion/event_list?page=1&amp;method=300&amp;sregdts=&amp;sregdte=&amp;startdt=&amp;enddt=&amp;skey=&amp;sword=&amp;status=999"
									><strong class="active">1</strong></a
								><a
									href="/nmanager/promotion/event_list?page=2&amp;method=300&amp;sregdts=&amp;sregdte=&amp;startdt=&amp;enddt=&amp;skey=&amp;sword=&amp;status=999"
									><span class="num">2</span></a
								></span
							>
						</div>

						<div class="btn_wrap">
							<button class="btn_pri" onclick="reg()" type="button">
								등록
							</button>
							<button class="btn_sec" onclick="cancle()" type="button">
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

	<main v-if="$route.query.method === '400'" id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				이벤트(할인) 관리<button
					id="addBmark"
					onclick="addBookmark('이벤트(할인) 관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>프로모션</li>
				<li>이벤트관리</li>
				<li>이벤트(할인) 관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>이벤트를 생성하고 관리하는 페이지입니다.</li>
		</ul>

		<!-- <script type="text/javascript" src="/jscript/calendar/class.js"></script>
		<script type="text/javascript" src="/jscript/inperiod/class.js"></script>
		<script type="text/javascript">
			function reg() {
				location.href = 'event_reg?method=400';
			}

			function edit(idx) {
				location.href =
					'event_reg?method=400&idx=' +
					idx +
					'&params=6D6574686F643D3430305E737265676474733D5E737265676474653D5E737461727464743D5E656E6464743D5E736B65793D5E73776F72643D5E7374617475733D3939395E706167653D31';
			}

			function del(idx) {
				var f = document.Frm;

				if (confirm('삭제하시겠습니까?')) {
					f.mode.value = 'DEL';
					f.idx.value = idx;
					f.action = 'event_act';
					f.submit();
				}
			}

			function changeRun(idx, isrun) {
				var f = document.Frm;

				f.mode.value = 'RUN';
				f.idx.value = idx;
				f.isrun.value = isrun;
				f.action = 'event_act';
				f.submit();
			}

			function change() {
				var f = document.sFrm;

				validSearch(f);

				f.submit();
			}

			function validSearch(f) {
				if (!isDate(f.sregdts.value)) f.sregdts.value = '';
				if (!isDate(f.sregdte.value)) f.sregdte.value = '';
				if (!isDate(f.startdt.value)) f.startdt.value = '';
				if (!isDate(f.enddt.value)) f.enddt.value = '';

				if (
					$('#startdt').val().stripspace() != '' &&
					$('#enddt').val().stripspace() != ''
				) {
					if (fn_betweenDate($('#startdt').val(), $('#enddt').val(), 'd') < 0) {
						alert('시작일자가 종료일 보다 늦습니다.\n다시 입력해 주세요.');
						$('#enddt').focus();
						return false;
					}
				}

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
			<input type="hidden" name="method" value="400" />

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
							이벤트 검색 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>

						<tbody>
							<tr>
								<th>기간</th>
								<td>
									<div class="label_wrap">
										<div class="period_inp">
											<input
												type="text"
												id="startdt"
												name="startdt"
												value=""
												maxlength="10"
												class="text_input"
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'startdt', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
										~
										<div class="period_inp">
											<input
												type="text"
												id="enddt"
												name="enddt"
												value=""
												maxlength="10"
												class="text_input"
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'enddt', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
										<div class="period_btn">
											<button
												type="button"
												class="btn_sec sm active"
												onclick="inperiod.input('startdt', 'enddt')"
											>
												전체
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 't')"
											>
												오늘
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 't', -1)"
											>
												어제
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 'd', -3)"
											>
												3일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 'd', -7)"
											>
												7일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 'd', -10)"
											>
												10일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 'd', -20)"
											>
												20일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('startdt', 'enddt', 'd', -30)"
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
												style="vertical-align: middle"
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
												style="vertical-align: middle"
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
								<th>진행상태</th>
								<td>
									<div class="label_wrap">
										<label
											><input
												type="radio"
												name="status"
												value="999"
												checked=""
											/>전체</label
										>
										<label
											><input
												type="radio"
												name="status"
												value="100"
											/>대기</label
										>
										<label
											><input
												type="radio"
												name="status"
												value="200"
											/>진행중</label
										>
										<label
											><input
												type="radio"
												name="status"
												value="300"
											/>종료</label
										>
										<label
											><input
												type="radio"
												name="status"
												value="900"
											/>마감</label
										>
									</div>
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

					<div class="btn_wrap">
						<button type="submit" class="btn_pri">검색</button>
					</div>
				</section>

				<!-- 검색 폼 : 끝 ###################################################################### -->

				<section class="cont_wrap">
					<form name="Frm" method="post" enctype="multipart/form-data">
						<input type="hidden" name="method" value="400" />
						<input type="hidden" name="mode" />
						<input type="hidden" name="idx" />
						<input type="hidden" name="isrun" />
						<input
							type="hidden"
							name="params"
							value="6D6574686F643D3430305E737265676474733D5E737265676474653D5E737461727464743D5E656E6464743D5E736B65793D5E73776F72643D5E7374617475733D3939395E706167653D31"
						/>

						<div class="section_head">
							<h4 class="total">
								총 <strong>42 </strong>개의 정보가 등록되어있습니다.
							</h4>
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
								<col width="35" />
								<col width="200" />

								<col width="100" />

								<col width="80" />

								<col width="*" />
								<col width="80" />
								<col width="80" />
								<col width="80" />
							</colgroup>
							<thead>
								<tr>
									<th>No</th>
									<th>제목</th>

									<th>입점업체</th>

									<th>기간</th>

									<th>링크경로 &amp; 미리보기</th>
									<th>진행상태</th>
									<th>등록일</th>
									<th>관리</th>
								</tr>
							</thead>
							<tbody>
								<tr align="center" bgcolor="#F7F7F7">
									<td>42</td>
									<td style="word-wrap: break-word; word-break: break-all">
										test 0816 06
									</td>

									<td>본사</td>

									<td>2023-08-14<br />~<br />2023-08-20</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=2610"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=2610</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=2610" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=2610</a>
				 -->
									</td>
									<td>마감</td>

									<td>2023-08-16</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(2610)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(2610)"
												>
													삭제
												</button>

												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="changeRun(2610,'T')"
												>
													진행
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>41</td>
									<td style="word-wrap: break-word; word-break: break-all">
										[입점사]이벤트 테스트
									</td>

									<td>medaje</td>

									<td>2023-07-11<br />~<br />2023-11-30</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=431"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=431</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=431" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=431</a>
				 -->
									</td>
									<td>진행중</td>

									<td>2023-07-11</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(431)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(431)"
												>
													삭제
												</button>

												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="changeRun(431,'F')"
												>
													마감
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>40</td>
									<td style="word-wrap: break-word; word-break: break-all">
										[기획전_테스트] 여름 이월상품 HOT 폭탄 할인
									</td>

									<td>본사</td>

									<td>2023-07-11<br />~<br />2023-10-31</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=429"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=429</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=429" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=429</a>
				 -->
									</td>
									<td>진행중</td>

									<td>2023-07-11</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(429)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(429)"
												>
													삭제
												</button>

												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="changeRun(429,'F')"
												>
													마감
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>39</td>
									<td style="word-wrap: break-word; word-break: break-all">
										서실장_이벤트할인(입점) 테스트
									</td>

									<td>medaje</td>

									<td>2023-04-20<br />~<br />2023-04-30</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=421"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=421</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=421" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=421</a>
				 -->
									</td>
									<td>종료</td>

									<td>2023-04-21</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(421)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(421)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>38</td>
									<td style="word-wrap: break-word; word-break: break-all">
										등록 테스트
									</td>

									<td>본사</td>

									<td>2021-06-01<br />~<br />2021-10-22</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=406"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=406</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=406" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=406</a>
				 -->
									</td>
									<td>종료</td>

									<td>2021-06-11</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(406)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(406)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>37</td>
									<td style="word-wrap: break-word; word-break: break-all">
										할인이벤트 테스트 등록
									</td>

									<td>본사</td>

									<td>2021-05-24<br />~<br />2021-05-27</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=404"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=404</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=404" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=404</a>
				 -->
									</td>
									<td>종료</td>

									<td>2021-05-24</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(404)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(404)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>36</td>
									<td style="word-wrap: break-word; word-break: break-all">
										할인이벤트 테스트
									</td>

									<td>본사</td>

									<td>2021-03-22<br />~<br />2021-03-23</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=403"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=403</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=403" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=403</a>
				 -->
									</td>
									<td>종료</td>

									<td>2021-03-22</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(403)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(403)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>35</td>
									<td style="word-wrap: break-word; word-break: break-all">
										할인이벤트 테스트
									</td>

									<td>본사</td>

									<td>2020-12-21<br />~<br />2020-12-31</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=400"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=400</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=400" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=400</a>
				 -->
									</td>
									<td>종료</td>

									<td>2020-12-28</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(400)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(400)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>34</td>
									<td style="word-wrap: break-word; word-break: break-all">
										할인이벤트 테스트
									</td>

									<td>본사</td>

									<td>2020-04-28<br />~<br />2020-12-31</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=398"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=398</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=398" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=398</a>
				 -->
									</td>
									<td>종료</td>

									<td>2020-04-28</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(398)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(398)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>33</td>
									<td style="word-wrap: break-word; word-break: break-all">
										할인이벤트
									</td>

									<td>본사</td>

									<td>2019-05-09<br />~<br />2020-12-31</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=393"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=393</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=393" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=393</a>
				 -->
									</td>
									<td>종료</td>

									<td>2019-05-09</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(393)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(393)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>32</td>
									<td style="word-wrap: break-word; word-break: break-all">
										dddd
									</td>

									<td>본사</td>

									<td>2018-10-22<br />~<br />2019-11-30</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=389"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=389</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=389" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=389</a>
				 -->
									</td>
									<td>종료</td>

									<td>2018-10-29</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(389)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(389)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#F7F7F7">
									<td>31</td>
									<td style="word-wrap: break-word; word-break: break-all">
										할인이벤트 상품
									</td>

									<td>본사</td>

									<td>2018-10-11<br />~<br />2018-10-11</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=387"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=387</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=387" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=387</a>
				 -->
									</td>
									<td>마감</td>

									<td>2018-10-11</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(387)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(387)"
												>
													삭제
												</button>

												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="changeRun(387,'T')"
												>
													진행
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>30</td>
									<td style="word-wrap: break-word; word-break: break-all">
										이벤트할인 테스트 상품
									</td>

									<td>mallstore122</td>

									<td>2018-07-24<br />~<br />2018-07-25</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=386"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=386</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=386" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=386</a>
				 -->
									</td>
									<td>종료</td>

									<td>2018-07-24</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(386)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(386)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>29</td>
									<td style="word-wrap: break-word; word-break: break-all">
										할인 이벤트 테스트123
									</td>

									<td>jhmim</td>

									<td>2018-07-16<br />~<br />2018-07-18</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=384"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=384</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=384" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=384</a>
				 -->
									</td>
									<td>종료</td>

									<td>2018-07-17</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(384)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(384)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>

								<tr align="center" bgcolor="#FFFFFF">
									<td>28</td>
									<td style="word-wrap: break-word; word-break: break-all">
										이벤트(할인)관리1
									</td>

									<td>scmtest123</td>

									<td>2018-07-16<br />~<br />2018-07-31</td>

									<td style="word-wrap: break-word; word-break: break-all">
										<a
											href="http://javalocal.mallstore.co.kr/goods/event?idx=374"
											target="_blank"
											>http://javalocal.mallstore.co.kr/goods/event?idx=374</a
										>
										<!-- 
				<br/><a href="http://javalocal.mallstore.co.kr/mw/goods/event?idx=374" target="_blank">http://javalocal.mallstore.co.kr/mw/goods/event?idx=374</a>
				 -->
									</td>
									<td>종료</td>

									<td>2018-07-16</td>
									<td>
										<div>
											<button
												type="button"
												class="btn_sec sm"
												onclick="edit(374)"
											>
												수정
											</button>
											<div style="margin-top: 1px">
												<button
													type="button"
													class="btn_sec sm mgt5"
													onclick="del(374)"
												>
													삭제
												</button>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>

						<div class="paging" style="margin-top: 20px">
							<span
								><a
									href="/nmanager/promotion/event_list?page=1&amp;method=400&amp;sregdts=&amp;sregdte=&amp;startdt=&amp;enddt=&amp;skey=&amp;sword=&amp;status=999"
									><strong class="active">1</strong></a
								><a
									href="/nmanager/promotion/event_list?page=2&amp;method=400&amp;sregdts=&amp;sregdte=&amp;startdt=&amp;enddt=&amp;skey=&amp;sword=&amp;status=999"
									><span class="num">2</span></a
								><a
									href="/nmanager/promotion/event_list?page=3&amp;method=400&amp;sregdts=&amp;sregdte=&amp;startdt=&amp;enddt=&amp;skey=&amp;sword=&amp;status=999"
									><span class="num">3</span></a
								></span
							>
						</div>

						<div class="btn_wrap">
							<button class="btn_pri" onclick="reg()" type="button">
								등록
							</button>
							<button class="btn_sec" onclick="cancle()" type="button">
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
