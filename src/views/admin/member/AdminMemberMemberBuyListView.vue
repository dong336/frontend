<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				상품구매 회원목록<button
					id="addBmark"
					onclick="addBookmark('상품구매 회원목록')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>회원관리</li>
				<li>회원관리</li>
				<li>상품구매 회원목록</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>다음은 상품구매 회원목록 입니다.</li>
			<li><strong>총구매금액</strong> 산출 = (입점업체+옵션)*수량</li>
			<li>적립금, 쿠폰, 배송비, 할인내역은 금액에 포함되지 않습니다.</li>
		</ul>

		<!-- <script type="text/javascript" src="/jscript/calendar/class.js"></script>
		<script type="text/javascript" src="/jscript/inperiod/class.js"></script> -->
		<!-- <script type="text/javascript">
			function change() {
				var f = document.sFrm;

				validSearch(f);

				f.submit();
			}

			function validSearch(f) {
				if (!isDate(f.sregdts.value)) f.sregdts.value = '';
				if (!isDate(f.sregdte.value)) f.sregdte.value = '';
				if (!isDate(f.sorderdts.value)) f.sorderdts.value = '';
				if (!isDate(f.sorderdte.value)) f.sorderdte.value = '';

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

				if (
					$('#sorderdts').val().stripspace() != '' &&
					$('#sorderdte').val().stripspace() != ''
				) {
					if (
						fn_betweenDate($('#sorderdts').val(), $('#sorderdte').val(), 'd') <
						0
					) {
						alert('시작일자가 종료일 보다 늦습니다.\n다시 입력해 주세요.');
						$('#sorderdte').focus();
						return false;
					}
				}
			}
			//]]>
		</script>

		<script type="text/javascript" src="/jscript/ezpop.js"></script>
		<script type="text/javascript">
			ezpop.member.bind('detail', '회원정보', function (uno) {
				$.laybox({
					type: 'iframe',
					source: '../member/member_detail_ifrm?uno=' + uno,
				});
			});
			ezpop.member.bind('email', '메일발송', function (uno) {
				openPopup('../member/send_email_pop?uno=' + uno, 'ezEmail', 740, 570);
			});
			ezpop.member.bind('sms', 'SMS전송', function (uno) {
				openPopup(
					'../management/send_sms_direct_pop?uno=' + uno,
					'ezSms',
					300,
					340,
					'scrollbars=yes',
				);
			});
			//]]>
		</script>

		<script type="text/javascript">
			var excelSize = 3;

			function downExcel() {
				var f = document.Frm;
				//	f.page.value = page;
				//	f.psize.value = excelSize;
				f.target = 'frmProc';
				f.action = 'member_buy_list_excel';
				f.submit();
			}

			// function setDownExcel() {
			// 	var totalCnt = 3;
			// 	alert("totalCnt="+totalCnt);
			// 	if (totalCnt > 0) {
			// 		var group = Math.ceil(totalCnt / excelSize);
			// 		var excelDownHtml = "";
			// 		for(var i=1; i<=group; i++) {
			// 			excelDownHtml += "<a href='#' onClick=\"downExcel("+i+");return false;\" >" + i + "번째 액셀다운로드" + "</a><br/>";
			// 		}

			// 		$("#excelButton").html(excelDownHtml);
			// 	}
			// }

			//]]>
		</script> -->

		<form
			name="sFrm"
			method="post"
			action="member_buy_list"
			onsubmit="return validSearch(this)"
		>
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
							회원 검색 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>가입일</th>
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
								<th>최근접속일</th>
								<td>
									<div class="label_wrap">
										<div class="period_inp">
											<input
												type="text"
												id="sorderdts"
												name="sorderdts"
												value=""
												maxlength="10"
												class="text_input"
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'sorderdts', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
										~
										<div class="period_inp">
											<input
												type="text"
												id="sorderdte"
												name="sorderdte"
												value=""
												maxlength="10"
												class="text_input"
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'sorderdte', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
										<div class="period_btn">
											<button
												type="button"
												class="btn_sec sm active"
												onclick="inperiod.input('sorderdts', 'sorderdte')"
											>
												전체
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sorderdts', 'sorderdte', 't')"
											>
												오늘
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sorderdts', 'sorderdte', 't', -1)"
											>
												어제
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sorderdts', 'sorderdte', 'd', -3)"
											>
												3일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sorderdts', 'sorderdte', 'd', -7)"
											>
												7일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sorderdts', 'sorderdte', 'd', -10)"
											>
												10일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sorderdts', 'sorderdte', 'd', -20)"
											>
												20일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sorderdts', 'sorderdte', 'd', -30)"
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
								<th>그룹별</th>
								<td>
									<select
										id="slevel"
										name="slevel"
										onchange="changeLevel(this);"
									>
										<option value="">회원등급</option>
										<option value="11">일반회원</option>
										<option value="13">임직원회원</option>
										<option value="120">에이전시회원</option>
										<option value="121">VIP회원</option>
										<option value="123">임직원회원</option></select
									>&nbsp;
								</td>
							</tr>
							<tr>
								<th>총구매금액</th>
								<td>
									<input
										type="text"
										name="sbuyprice"
										value=""
										class="text_input"
										onkeyup="toCurrency(this)"
									/>
									원 ~
									<input
										type="text"
										name="ebuyprice"
										value=""
										class="text_input"
										onkeyup="toCurrency(this)"
									/>
									원
								</td>
							</tr>
							<tr>
								<th>보유적립금</th>
								<td>
									<input
										type="text"
										name="scmoney"
										value=""
										class="text_input"
										onkeyup="toCurrency(this)"
									/>
									원 ~
									<input
										type="text"
										name="ecmoney"
										value=""
										class="text_input"
										onkeyup="toCurrency(this)"
									/>
									원
								</td>
							</tr>
							<tr>
								<th>직접검색</th>
								<td>
									<div class="direct_search">
										<select id="skey" name="skey" null="">
											<option value="">전체</option>
											<option value="id">아이디</option>
											<option value="name">성명</option>
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
				</section>
				<section class="cont_wrap">
					<div class="section_head">
						<h4 class="total">총 <strong>3</strong> 명의 회원이 있습니다.</h4>
						<div>
							<select id="psize" name="psize" onchange="change();">
								<option value="10" selected="">10명씩보기</option>
								<option value="20">20명씩보기</option>
								<option value="30">30명씩보기</option>
								<option value="50">50명씩보기</option>
								<option value="100">100명씩보기</option>
							</select>

							<select id="psort" name="psort" onchange="change();" class="mgl5">
								<option value="regdate">회원가입일</option>
								<option value="visitcnt">접속수</option>
								<option value="buygoods">구매상품건수</option>
								<option value="buyprice">구매총금액</option>
								<option value="id">아이디순</option>
								<option value="name">이름순</option>
							</select>
						</div>
					</div>

					<form name="Frm" method="post">
						<input type="hidden" name="page" value="1" />
						<input type="hidden" name="psort" value="" />
						<input type="hidden" name="psize" value="10" />
						<input
							type="hidden"
							name="params"
							value="737265676474653D5E73636D6F6E65793D305E7367656E6465723D5E736F726465726474733D5E6562757970726963653D305E736C6576656C3D5E7362757970726963653D305E736F726465726474653D5E737265676474733D5E7061676573697A653D31305E73746172746E756D3D305E7369746569643D626173655E706167653D315E65636D6F6E65793D305E656E646E756D3D3130"
						/>
						<input type="hidden" name="skey" value="" />
						<input type="hidden" name="sword" value="" />

						<table
							border="0"
							cellpadding="0"
							cellspacing="0"
							width="100%"
							class="t_list"
						>
							<caption>
								상품구매 회원목록
							</caption>
							<colgroup>
								<col width="*" />
								<col width="*" />
								<col width="70" />
								<col width="50" />
								<col width="50" />
								<col width="*" />
								<col width="50" />
								<col width="*" />
								<col width="*" />
								<col width="*" />
							</colgroup>
							<thead>
								<tr>
									<th>아이디</th>
									<th>회원등급</th>
									<th>성명</th>
									<th>성별</th>
									<th>나이</th>
									<th>적립금</th>
									<th>접속수</th>
									<th>가입일</th>
									<th>구매상품건수</th>
									<th>구매총금액</th>
								</tr>
							</thead>
							<tbody>
								<tr
									onmouseover="this.style.backgroundcolor='#FDFAE8'"
									onmouseout="this.style.backgroundcolor='#FFFFFF'"
								>
									<td>
										<strike
											><span class="red"></span>s<span class="red"></span>e<span
												class="red"
											></span
											>o<span class="red"></span>b<span class="red"></span
											>o<span class="red"></span>3<span class="red"></span
											>0<span class="red"></span
										></strike>
									</td>
									<td></td>
									<td>
										<span class="red"></span>서<span class="red"></span>승<span
											class="red"
										></span
										>보<span class="red"></span>
									</td>
									<td>-</td>

									<td>-</td>

									<td>0원</td>
									<td>5</td>
									<td>2023-09-07</td>
									<td>1 건</td>
									<td>350,000원</td>
								</tr>

								<tr
									onmouseover="this.style.backgroundcolor='#FDFAE8'"
									onmouseout="this.style.backgroundcolor='#FFFFFF'"
								>
									<td>
										<a
											href="javascript:;"
											ezi="148868"
											onclick="ezpop.member.open(event)"
											><span class="red"></span>s<span class="red"></span>e<span
												class="red"
											></span
											>o<span class="red"></span>b<span class="red"></span
											>o<span class="red"></span>2<span class="red"></span
											>8<span class="red"></span
										></a>
									</td>
									<td>일반회원</td>
									<td>
										<span class="red"></span>서<span class="red"></span>승<span
											class="red"
										></span
										>보<span class="red"></span>
									</td>
									<td>-</td>

									<td>22</td>

									<td>40,400원</td>
									<td>23</td>
									<td>2023-08-31</td>
									<td>4 건</td>
									<td>1,080,000원</td>
								</tr>

								<tr
									onmouseover="this.style.backgroundcolor='#FDFAE8'"
									onmouseout="this.style.backgroundcolor='#FFFFFF'"
								>
									<td>
										<a
											href="javascript:;"
											ezi="148609"
											onclick="ezpop.member.open(event)"
											><span class="red"></span>n<span class="red"></span>c<span
												class="red"
											></span
											>g<span class="red"></span>n<span class="red"></span
											>_<span class="red"></span>k<span class="red"></span
											>y<span class="red"></span>s<span class="red"></span
										></a>
									</td>
									<td>일반회원</td>
									<td>
										<span class="red"></span>김<span class="red"></span>용<span
											class="red"
										></span
										>세<span class="red"></span>
									</td>
									<td>-</td>

									<td>-</td>

									<td>12,000원</td>
									<td>131</td>
									<td>2019-04-10</td>
									<td>2 건</td>
									<td>200,000원</td>
								</tr>
							</tbody>
						</table>

						<div class="paging" style="margin-top: 20px">
							<span
								><a
									href="/nmanager/member/member_buy_list?page=1&amp;skey=&amp;sword=&amp;psort=&amp;psize=10"
									><strong class="active">1</strong></a
								></span
							>
						</div>

						<div class="member_list_btn">
							<dl>
								<dt>엑셀다운 :</dt>
								<dd>
									현재 페이지의 모든 회원 목록을
									<button
										type="button"
										onclick="downExcel()"
										class="btn_sec md"
									>
										엑셀로받기
									</button>
								</dd>
							</dl>
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

<style lang="scss" scoped></style>
