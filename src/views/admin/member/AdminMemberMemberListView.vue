<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				회원목록<button
					id="addBmark"
					onclick="addBookmark('회원목록')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>회원관리</li>
				<li>회원관리</li>
				<li>회원목록</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>다음은 사이트에 가입한 회원목록 입니다.</li>
			<li><strong>총구매금액</strong> 산출 = (판매가 + 옵션가) × 수량</li>
			<li>배송비 및 적립금, 쿠폰 등의 할인내역은 금액에 포함되지 않습니다.</li>
		</ul>

		<!-- <script type="text/javascript" src="/jscript/calendar/class.js"></script>
		<script type="text/javascript" src="/jscript/inperiod/class.js"></script>
		<script type="text/javascript">
			//<![     [
			function change() {
				var f = document.sFrm;

				validSearch(f);

				f.submit();
			}

			function validSearch(f) {
				if (!isDate(f.sregdts.value)) f.sregdts.value = '';
				if (!isDate(f.sregdte.value)) f.sregdte.value = '';
				if (!isDate(f.svisitdts.value)) f.svisitdts.value = '';
				if (!isDate(f.svisitdte.value)) f.svisitdte.value = '';

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
					$('#svisitdts').val().stripspace() != '' &&
					$('#svisitdte').val().stripspace() != ''
				) {
					if (
						fn_betweenDate($('#svisitdts').val(), $('#svisitdte').val(), 'd') <
						0
					) {
						alert('시작일자가 종료일 보다 늦습니다.\n다시 입력해 주세요.');
						$('#svisitdte').focus();
						return false;
					}
				}
			}
			//]]>
		</script> -->

		<!-- 검색 폼 : 시작 ###################################################################### -->
		<form name="sFrm" method="get" onsubmit="return validSearch(this)">
			<input type="hidden" name="psort" value="" />
			<input type="hidden" name="psize" value="10" />

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
												id="svisitdts"
												name="svisitdts"
												value=""
												maxlength="10"
												class="text_input"
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'svisitdts', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
										~
										<div class="period_inp">
											<input
												type="text"
												id="svisitdte"
												name="svisitdte"
												value=""
												maxlength="10"
												class="text_input"
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'svisitdte', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
										<div class="period_btn">
											<button
												type="button"
												class="btn_sec sm active"
												onclick="inperiod.input('svisitdts', 'svisitdte')"
											>
												전체
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('svisitdts', 'svisitdte', 't')"
											>
												오늘
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('svisitdts', 'svisitdte', 't', -1)"
											>
												어제
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('svisitdts', 'svisitdte', 'd', -3)"
											>
												3일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('svisitdts', 'svisitdte', 'd', -7)"
											>
												7일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('svisitdts', 'svisitdte', 'd', -10)"
											>
												10일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('svisitdts', 'svisitdte', 'd', -20)"
											>
												20일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('svisitdts', 'svisitdte', 'd', -30)"
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
										<select id="skey" name="skey">
											<option value="">전체</option>
											<option value="id">회원아이디</option>
											<option value="name">회원명</option>
											<option value="tel">전화번호</option>
											<option value="mobile">휴대폰번호</option>
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
			</div>
		</form>
		<!-- 검색 폼 : 끝 ###################################################################### -->

		<!-- <script type="text/javascript" src="/jscript/ezpop.js"></script>
		<script type="text/javascript">
			//<![     [
			ezpop.member.bind('detail', '회원정보', function (uno) {
				location.href =
					'member_detail?no=' +
					uno +
					'&params=737265676474733D5E737265676474653D5E7376697369746474733D5E7376697369746474653D5E736C6576656C3D5E7367656E6465723D5E7362757970726963653D5E6562757970726963653D5E73636D6F6E65793D5E65636D6F6E65793D5E736B65793D5E73776F72643D5E70736F72743D5E7073697A653D31305E706167653D31';
			});
			ezpop.member.bind('email', '메일발송', function (uno) {
				openPopup('send_email_pop?uno=' + uno, 'ezEmail', 740, 570);
			});
			ezpop.member.bind('sms', 'SMS전송', function (uno) {
				openPopup(
					'../management/send_sms_direct_pop?uno=' + uno,
					'ezSms',
					400,
					420,
					'scrollbars=yes',
				);
			});
			//]]>
		</script>

		<script type="text/javascript">
			//<![     [
			function changeList() {
				var f = document.Frm;
				var sf = document.sFrm;

				sf.psort.value = f.psort.options[f.psort.selectedIndex].value;
				sf.psize.value = f.psize.options[f.psize.selectedIndex].value;

				sf.target = '_self';
				sf.submit();
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
					alert('삭제할 회원을 선택해 주세요.');
					return false;
				}

				if (confirm('선택하신 회원을 삭제하시겠습니까?')) {
					f.mode.value = 'DEL';
					f.no.value = items;
					f.action = 'member_reg_act';
					f.target = '_self';
					f.submit();
				}
			}

			function downExcel(isSelect) {
				var f = document.Frm;
				var fe = document.FrmExcel;
				var items = '';

				if (!isSelect) isSelect = false;

				if (!f.cbList) return false;

				if (isSelect) {
					$(f.cbList).each(function () {
						if (this.checked) items += (items ? ',' : '') + this.value;
					});

					if (items == '') {
						alert('회원을 선택해 주세요.');
						return false;
					}
				}

				fe.idx.value = items;
				fe.action = 'member_list_excel';
				fe.target = 'frmProc';
				fe.submit();
			}
			//]]>
		</script> -->

		<form name="FrmExcel" method="post">
			<input type="hidden" name="" value="" />

			<input type="hidden" name="idx" />
		</form>
		<form name="Frm" method="post">
			<input type="hidden" name="mode" />
			<input type="hidden" name="no" />
			<input type="hidden" name="id" />
			<input
				type="hidden"
				name="params"
				value="737265676474733D5E737265676474653D5E7376697369746474733D5E7376697369746474653D5E736C6576656C3D5E7367656E6465723D5E7362757970726963653D5E6562757970726963653D5E73636D6F6E65793D5E65636D6F6E65793D5E736B65793D5E73776F72643D5E70736F72743D5E7073697A653D31305E706167653D31"
			/>

			<div class="main_content">
				<section class="cont_wrap">
					<div class="section_head">
						<h4 class="total">
							총 <strong>8</strong> 명의 회원이 조회 되었으며, 오늘 가입한
							회원은 <strong>1</strong> 명입니다.
						</h4>
						<div>
							<span
								><select id="psize" name="psize" onchange="changeList();">
									<option value="10" selected="">10줄씩보기</option>
									<option value="20">20줄씩보기</option>
									<option value="30">30줄씩보기</option>
									<option value="50">50줄씩보기</option>
									<option value="100">100줄씩보기</option>
									<option value="500">500줄씩보기</option>
								</select></span
							>
							<span class="mgl5"
								><select id="psort" name="psort" onchange="changeList();">
									<option value="regdate">회원가입일</option>
									<option value="visitdate">최근접속일</option>
									<option value="buyprice">총구매금액</option>
									<option value="visitcnt">접속수</option>
									<option value="age">나이순</option>
									<option value="name">이름순</option>
									<option value="cmoney">적립금순</option>
								</select></span
							>
						</div>
					</div>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_list"
					>
						<caption>
							가입한 회원 목록
						</caption>
						<colgroup>
							<col width="30" />
							<col width="15%" />
							<col width="10%" />
							<col width="100" />
							<col width="35" />
							<col width="12%" />
							<col width="7%" />
							<col width="9%" />
							<col width="12%" />
							<col width="9%" />
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
								<th>아이디</th>
								<th>회원등급</th>
								<th>성명</th>
								<th>나이</th>
								<th>적립금</th>
								<th>접속수</th>
								<th>최근 접속일</th>
								<th>총구매금액</th>
								<th>가입일</th>
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
											value="148876"
										/>선택</label
									>
								</td>
								<td>
									<a
										href="javascript:;"
										ezi="148876"
										onclick="ezpop.member.open(event)"
										>seobo29</a
									>
								</td>
								<td>일반회원</td>
								<td>서승보</td>
								<td>0</td>
								<td>10,000</td>
								<td>0</td>
								<td><br /></td>
								<td>0</td>
								<td>2023-09-06</td>
							</tr>

							<tr
								onmouseover="this.style.backgroundColor='#FDFAE8'"
								onmouseout="this.style.backgroundColor='#FFFFFF'"
							>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="148875"
										/>선택</label
									>
								</td>
								<td>
									<a
										href="javascript:;"
										ezi="148875"
										onclick="ezpop.member.open(event)"
										>zinys</a
									>
								</td>
								<td>일반회원</td>
								<td>박진원</td>
								<td>0</td>
								<td>10,000</td>
								<td>2</td>
								<td>2023-09-05<br />16:52:22</td>
								<td>0</td>
								<td>2023-09-05</td>
							</tr>

							<tr
								onmouseover="this.style.backgroundColor='#FDFAE8'"
								onmouseout="this.style.backgroundColor='#FFFFFF'"
							>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="148874"
										/>선택</label
									>
								</td>
								<td>
									<a
										href="javascript:;"
										ezi="148874"
										onclick="ezpop.member.open(event)"
										>seobo30</a
									>
								</td>
								<td>일반회원</td>
								<td>서승보</td>
								<td>0</td>
								<td>27,500</td>
								<td>2</td>
								<td>2023-09-06<br />13:11:08</td>
								<td>350,000</td>
								<td>2023-09-05</td>
							</tr>

							<tr
								onmouseover="this.style.backgroundColor='#FDFAE8'"
								onmouseout="this.style.backgroundColor='#FFFFFF'"
							>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="148868"
										/>선택</label
									>
								</td>
								<td>
									<a
										href="javascript:;"
										ezi="148868"
										onclick="ezpop.member.open(event)"
										>seobo28</a
									>
								</td>
								<td>일반회원</td>
								<td>서승보</td>
								<td>22</td>
								<td>40,400</td>
								<td>18</td>
								<td>2023-09-06<br />15:23:04</td>
								<td>1,080,000</td>
								<td>2023-08-31</td>
							</tr>

							<tr
								onmouseover="this.style.backgroundColor='#FDFAE8'"
								onmouseout="this.style.backgroundColor='#FFFFFF'"
							>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="148841"
										/>선택</label
									>
								</td>
								<td>
									<a
										href="javascript:;"
										ezi="148841"
										onclick="ezpop.member.open(event)"
										>ejji</a
									>
								</td>
								<td>일반회원</td>
								<td>신준호</td>
								<td>0</td>
								<td>10,000</td>
								<td>1</td>
								<td>2023-08-25<br />16:14:12</td>
								<td>0</td>
								<td>2023-08-25</td>
							</tr>

							<tr
								onmouseover="this.style.backgroundColor='#FDFAE8'"
								onmouseout="this.style.backgroundColor='#FFFFFF'"
							>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="148809"
										/>선택</label
									>
								</td>
								<td>
									<a
										href="javascript:;"
										ezi="148809"
										onclick="ezpop.member.open(event)"
										>ncgntest</a
									>
								</td>
								<td>일반회원</td>
								<td>박혜선</td>
								<td>0</td>
								<td>10,000</td>
								<td>1</td>
								<td>2023-04-24<br />14:36:49</td>
								<td>0</td>
								<td>2023-04-24</td>
							</tr>

							<tr
								onmouseover="this.style.backgroundColor='#FDFAE8'"
								onmouseout="this.style.backgroundColor='#FFFFFF'"
							>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="148806"
										/>선택</label
									>
								</td>
								<td>
									<a
										href="javascript:;"
										ezi="148806"
										onclick="ezpop.member.open(event)"
										>hspark</a
									>
								</td>
								<td>일반회원</td>
								<td>박혜선</td>
								<td>0</td>
								<td>10,000</td>
								<td>138</td>
								<td>2023-08-09<br />14:46:36</td>
								<td>0</td>
								<td>2023-03-27</td>
							</tr>

							<tr
								onmouseover="this.style.backgroundColor='#FDFAE8'"
								onmouseout="this.style.backgroundColor='#FFFFFF'"
							>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="148609"
										/>선택</label
									>
								</td>
								<td>
									<a
										href="javascript:;"
										ezi="148609"
										onclick="ezpop.member.open(event)"
										>ncgn_kys</a
									>
								</td>
								<td>일반회원</td>
								<td>김용세</td>
								<td>0</td>
								<td>12,000</td>
								<td>131</td>
								<td>2023-08-30<br />16:31:04</td>
								<td>200,000</td>
								<td>2019-04-10</td>
							</tr>
						</tbody>
					</table>

					<div class="paging">
						<span
							><a
								href="/nmanager/member/member_list?page=1&amp;sregdts=&amp;sregdte=&amp;svisitdts=&amp;svisitdte=&amp;slevel=&amp;sgender=&amp;sbuyprice=&amp;ebuyprice=&amp;scmoney=&amp;ecmoney=&amp;skey=&amp;sword=&amp;psort=&amp;psize=10"
								><strong class="active">1</strong></a
							></span
						>
					</div>

					<div class="order_list_btn2">
						<dl>
							<dt>일괄삭제 :</dt>
							<dd>
								선택한 회원정보를
								<button type="button" onclick="delList()" class="btn_sec md">
									선택삭제
								</button>
							</dd>
						</dl>
						<dl>
							<dt>엑셀다운 :</dt>
							<dd>
								선택한 회원정보를
								<button
									type="button"
									onclick="downExcel(true)"
									class="btn_sec md"
								>
									엑셀로받기
								</button>
								현재 페이지의 모든 회원정보를
								<button type="button" onclick="downExcel()" class="btn_sec md">
									엑셀로받기
								</button>
							</dd>
						</dl>
					</div>
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
