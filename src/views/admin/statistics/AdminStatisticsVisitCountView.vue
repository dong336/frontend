<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				방문자접속 통계<button
					id="addBmark"
					onclick="addBookmark('방문자접속 통계')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>통계/분석</li>
				<li>접속 통계</li>
				<li>방문자접속 통계</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				아래의 그래프는 달 기준이면 아래에 달 번호 나오고
				<span class="red">[전날보기] [이달보기] [다음달보기]</span>로 나옵니다.
			</li>
			<li>
				시간 기준이면 아래에 <span class="red">1 ~24까지의 시간</span>이
				나옵니다.
			</li>
			<li>
				마찬가지로 요일기준이면
				<span class="red">월요일에서 일요일까지의 기준</span>이 나옵니다.
			</li>
		</ul>

		<!-- <script type="text/javascript" src="/jscript/calendar/class.js"></script>
<script type="text/javascript">
function checkMode(mode) {
	var term;

	_es("info_day").display = "none";
	_es("info_month").display = "none";
	_es("info_year").display = "none";
	_es("info_week").display = "none";
	_es("info_hour").display = "none";

	_es("term_1").display = "none";
	_es("term_2").display = "none";
	_es("term_3").display = "none";

	_es("info_"+mode).display = "";

	switch (mode) {
		case "day":
			term = "term_1";
			break;
		case "month":
		case "week":
		case "hour":
			term = "term_2";
			break;
		case "year":
			term = "term_3";
			break;
	}

	_es(term).display = "";
}

function changeDay(day) {
	var f = document.sFrm;
	var year = "";
	var month = "";

	f.targetDate.value = year+"-"+month+"-"+day;
	f.submit();
}

function excel(){
	var f = document.sFrm;
	var year = "";
	var month = "";

	location.href = "visit_count_excel?"+$("form[name='sFrm']").serialize();
}

function validSearch(f) {
	if (!isDate(f.sdate.value)) f.sdate.value = "";
	if (!isDate(f.edate.value)) f.edate.value = "";
	
	if($("#sdate").val().stripspace() != '' && $("#edate").val().stripspace() != ''){
		if (fn_betweenDate($("#sdate").val(), $("#edate").val(),'d') < 0){
			alert('시작일자가 종료일 보다 늦습니다.\n다시 입력해 주세요.');
			$("#edate").focus();
			return false;
		} 
	}
}
//]]>
</script> -->

		<form
			name="sFrm"
			method="get"
			action="visit_count"
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
							검색 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>조건 선택</th>
								<td>
									<div class="label_wrap">
										<label for="day"
											><input
												name="mode"
												type="radio"
												value="day"
												id="day"
												onclick="checkMode('day')"
												checked=""
											/>일별(시간단위)</label
										>
										<label for="month"
											><input
												name="mode"
												type="radio"
												value="month"
												id="month"
												onclick="checkMode('month')"
											/>월별(일단위)</label
										>
										<label for="year"
											><input
												name="mode"
												type="radio"
												value="year"
												id="year"
												onclick="checkMode('year')"
											/>연도별(월단위)</label
										>
										<label for="week"
											><input
												name="mode"
												type="radio"
												value="week"
												id="week"
												onclick="checkMode('week')"
											/>요일별</label
										>
										<label for="hour"
											><input
												name="mode"
												type="radio"
												value="hour"
												id="hour"
												onclick="checkMode('hour')"
											/>시간대별</label
										>
									</div>
								</td>
							</tr>
							<tr>
								<th>검색 기간</th>
								<td>
									<div class="label_wrap">
										<div id="term_1" class="period_inp" style="display: ">
											<input
												type="text"
												id="targetDate"
												name="targetDate"
												value="2023-09-06"
												class="text_input"
												readonly=""
											/>
											<img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'targetDate', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>

										<div id="term_2" class="schdt" style="display: none">
											<div class="period_inp">
												<input
													type="text"
													id="sdate"
													name="sdate"
													class="text_input"
													value=""
													readonly=""
												/>
												<img
													src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
													onclick="calendar.open(event, 'sdate', 'YYYY-MM-DD')"
													style="vertical-align: middle"
												/>
											</div>
											~
											<div class="period_inp">
												<input
													type="text"
													id="edate"
													name="edate"
													class="text_input"
													value=""
													readonly=""
												/>
												<img
													src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
													onclick="calendar.open(event, 'edate', 'YYYY-MM-DD')"
													style="vertical-align: middle"
												/>
											</div>
										</div>

										<div id="term_3" style="display: none">
											<select id="syear" name="syear">
												<option value="">년도 선택</option>
												<option value="2023">2023</option>
											</select>

											<select name="smonth">
												<option value="">월 선택</option>

												<option value="1">1</option>

												<option value="2">2</option>

												<option value="3">3</option>

												<option value="4">4</option>

												<option value="5">5</option>

												<option value="6">6</option>

												<option value="7">7</option>

												<option value="8">8</option>

												<option value="9">9</option>

												<option value="10">10</option>

												<option value="11">11</option>

												<option value="12">12</option>
											</select>
											~
											<select id="eyear" name="eyear">
												<option value="">년도 선택</option>
												<option value="2023">2023</option>
											</select>
											<select name="emonth">
												<option value="">월 선택</option>

												<option value="1">1</option>

												<option value="2">2</option>

												<option value="3">3</option>

												<option value="4">4</option>

												<option value="5">5</option>

												<option value="6">6</option>

												<option value="7">7</option>

												<option value="8">8</option>

												<option value="9">9</option>

												<option value="10">10</option>

												<option value="11">11</option>

												<option value="12">12</option>
											</select>
										</div>
									</div>
									<div class="label_wrap">
										<span id="info_day" class="noti_info" style="display: "
											>일별 선택을 하시고 날짜를 선택하시면 시간대별 접속자가
											보입니다.</span
										>
										<span
											id="info_month"
											class="noti_info"
											style="display: none"
											>월별 선택을 하시고 최대 30일까지의 기간을 설정하시면 그
											기간별 접속통계를 보실 수 있습니다.</span
										>
										<span id="info_year" class="noti_info" style="display: none"
											>연도별 선택을 하시면 원하시는 년도의 달 기간을 최대한
											30개월까지 선택하셔서 보실 수 있습니다.</span
										>
										<span id="info_week" class="noti_info" style="display: none"
											>원하시는 기간을 선택하시면 요일단위의 접속통계를
											보여드립니다.</span
										>
										<span id="info_hour" class="noti_info" style="display: none"
											>원하시는 기간을 선택하시면 시간대별 접속통계를
											보여드립니다.</span
										>
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
							<span><strong>2023년 09월 06일</strong></span
							>의 일별 검색결과 입니다.
						</h4>
						<div>
							<a
								href="visit_count?mode=day&amp;targetDate=2023-09-05"
								class="btn_sec md"
								>전일보기</a
							>
							<a
								href="visit_count?mode=day&amp;targetDate=2023-09-07"
								class="btn_sec md"
								>오늘보기</a
							>
							<a
								href="visit_count?mode=day&amp;targetDate=2023-09-07"
								class="btn_sec md"
								>다음일보기</a
							>
							일별검색&nbsp;
							<select
								name="targetDay"
								onchange="changeDay(this.options [this.selectedIndex].value);"
							>
								<option value="1">1</option>

								<option value="2">2</option>

								<option value="3">3</option>

								<option value="4">4</option>

								<option value="5">5</option>

								<option value="6" selected="">6</option>

								<option value="7">7</option>

								<option value="8">8</option>

								<option value="9">9</option>

								<option value="10">10</option>

								<option value="11">11</option>

								<option value="12">12</option>

								<option value="13">13</option>

								<option value="14">14</option>

								<option value="15">15</option>

								<option value="16">16</option>

								<option value="17">17</option>

								<option value="18">18</option>

								<option value="19">19</option>

								<option value="20">20</option>

								<option value="21">21</option>

								<option value="22">22</option>

								<option value="23">23</option>

								<option value="24">24</option>

								<option value="25">25</option>

								<option value="26">26</option>

								<option value="27">27</option>

								<option value="28">28</option>

								<option value="29">29</option>

								<option value="30">30</option>

								<option value="31">31</option>
							</select>
						</div>
					</div>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="table_col"
					>
						<caption>
							방문자 접속 통계 내역
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<thead>
							<tr>
								<th>시간</th>
								<th>접속수</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>00 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 0px"></span
									>&nbsp;0
								</td>
							</tr>

							<tr>
								<td>01 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 0px"></span
									>&nbsp;0
								</td>
							</tr>

							<tr>
								<td>02 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 0px"></span
									>&nbsp;0
								</td>
							</tr>

							<tr>
								<td>03 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 0px"></span
									>&nbsp;0
								</td>
							</tr>

							<tr>
								<td>04 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 0px"></span
									>&nbsp;0
								</td>
							</tr>

							<tr>
								<td>05 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 0px"></span
									>&nbsp;0
								</td>
							</tr>

							<tr>
								<td>06 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 0px"></span
									>&nbsp;0
								</td>
							</tr>

							<tr>
								<td>07 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 0px"></span
									>&nbsp;0
								</td>
							</tr>

							<tr>
								<td>08 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 0px"></span
									>&nbsp;0
								</td>
							</tr>

							<tr>
								<td>09 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 93px"></span
									>&nbsp;15
								</td>
							</tr>

							<tr>
								<td>10 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 580px"></span
									>&nbsp;93
								</td>
							</tr>

							<tr>
								<td>11 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 305px"></span
									>&nbsp;49
								</td>
							</tr>

							<tr>
								<td>12 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 62px"></span
									>&nbsp;10
								</td>
							</tr>

							<tr>
								<td>13 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 430px"></span
									>&nbsp;69
								</td>
							</tr>

							<tr>
								<td>14 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 49px"></span
									>&nbsp;8
								</td>
							</tr>

							<tr>
								<td>15 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 162px"></span
									>&nbsp;26
								</td>
							</tr>

							<tr>
								<td>16 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 93px"></span
									>&nbsp;15
								</td>
							</tr>

							<tr>
								<td>17 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 0px"></span
									>&nbsp;0
								</td>
							</tr>

							<tr>
								<td>18 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 0px"></span
									>&nbsp;0
								</td>
							</tr>

							<tr>
								<td>19 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 0px"></span
									>&nbsp;0
								</td>
							</tr>

							<tr>
								<td>20 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 0px"></span
									>&nbsp;0
								</td>
							</tr>

							<tr>
								<td>21 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 0px"></span
									>&nbsp;0
								</td>
							</tr>

							<tr>
								<td>22 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 0px"></span
									>&nbsp;0
								</td>
							</tr>

							<tr>
								<td>23 시</td>
								<td class="txt_left">
									<span class="graphbox color1" style="width: 0px"></span
									>&nbsp;0
								</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td>합 계</td>
								<td class="left">285</td>
							</tr>
						</tfoot>
					</table>
					<div class="btn_right">
						<a href="javascript:excel();" class="btn_sec md">엑셀로받기</a>
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
