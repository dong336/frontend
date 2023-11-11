<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				내친구네트웍스정산<button
					id="addBmark"
					onclick="addBookmark('내친구네트웍스정산')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>정산관리</li>
				<li>결제/정산내역</li>
				<li>내친구네트웍스정산</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>내친구네트웍스의 정산내역 목록입니다.</li>
			<li>초기 페이지는 현재달을 기준으로 합니다.</li>
			<li>
				선배송비는 해당 업체의 해당주문번호 마지막 구매확정상품에 일괄
				표시됩니다.
			</li>
		</ul>
		<!-- ' ###################################################################### -->
		<!-- '	정산계산원칙 -->
		<!-- '	1) 모든 정산은 배송일자를 기준으로 계산합니다.  단 결제수수료는 주문일자별이며 취소,반품을 모두 포함합니다. -->
		<!-- '	2) 카드수수료의 결과에서 소숫점절산은 10원단위로 끊어줍니다. -->
		<!-- ' ###################################################################### -->
		<!-- <script type="text/javascript" src="/jscript/SelectCategory.js"></script>
		<script type="text/javascript" src="/jscript/calendar/class.js"></script>
		<script type="text/javascript" src="/jscript/inperiod/class.js"></script>
		<script type="text/javascript">
			function validSearch(f) {
				if (
					$('#sdts').val().stripspace() != '' &&
					$('#sdte').val().stripspace() != ''
				) {
					if (fn_betweenDate($('#sdts').val(), $('#sdte').val(), 'd') < 0) {
						alert('시작일자가 종료일 보다 늦습니다.\n다시 입력해 주세요.');
						$('#sdte').focus();
						return false;
					}
				}

				for (var i = 1; i <= CATEGORY_DEPTH; i++) {
					f['scate_' + i].disabled = true;
				}
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form
					name="sFrm"
					method="post"
					action="account"
					onsubmit="validSearch(this)"
				>
					<table
						border="0"
						cellspacing="0"
						cellpadding="0"
						width="100%"
						class="t_form"
					>
						<caption>
							검색 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="" />
						</colgroup>
						<tbody>
							<tr>
								<th>구매자구분</th>
								<td>
									<select id="suser" name="suser">
										<option value="">선택하세요</option>
										<option value="1">회원</option>
										<option value="2">비회원</option>
									</select>
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
												class="btn_sec sm active"
												onclick="inperiod.input('sdts', 'sdte')"
											>
												전체
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sdts', 'sdte', 't')"
											>
												오늘
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sdts', 'sdte', 't', -1)"
											>
												어제
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sdts', 'sdte', 'd', -3)"
											>
												3일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sdts', 'sdte', 'd', -7)"
											>
												7일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sdts', 'sdte', 'd', -10)"
											>
												10일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sdts', 'sdte', 'd', -20)"
											>
												20일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('sdts', 'sdte', 'd', -30)"
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
								<th>카테고리별</th>
								<td>
									<input type="hidden" name="scate" value="" />
									<div style="float: left; margin-right: 5px">
										<select
											id="scate_1"
											name="scate_1"
											head="선택"
											depth="1"
											onchange="sc.get(this)"
										>
											<option value="">선택</option>
											<option value="1742">패션의류</option>
											<option value="1831">테마별</option>
											<option value="1837">시즌별</option>
											<option value="1704">화장품</option>
											<option value="1836">뷰티</option>
											<option value="1710">잡화</option>
											<option value="1846">대카테고리 테스트</option>
										</select>
									</div>
									<div style="float: left; margin-right: 5px">
										<select
											id="scate_2"
											name="scate_2"
											head="선택"
											depth="2"
											onchange="sc.get(this)"
										>
											<option value="">선택</option>
										</select>
									</div>
									<div style="float: left; margin-right: 5px">
										<select
											id="scate_3"
											name="scate_3"
											head="선택"
											depth="3"
											onchange="sc.get(this)"
										>
											<option value="">선택</option>
										</select>
									</div>
									<!-- <script type="text/javascript">
										var sc = new SelectCategory();
										sc.init(document.sFrm.scate);
										//]]>
									</script> -->
								</td>
							</tr>
							<tr>
								<th>키워드검색</th>
								<td>
									<select id="skey" name="skey">
										<option value="">++ 검색영역선택 ++</option>
										<option value="ordname">주문자명</option>
									</select>

									&nbsp;<input
										type="text"
										name="sword"
										value=""
										class="text_input"
										style="width: 300px"
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
				<ul class="account_form mgt10">
					<li>총정산 : <strong>0개</strong></li>
					<li>판매종류 : <strong>0개</strong></li>
					<li>판매수 : <strong>0개</strong></li>
					<!-- 
			<li>상품적립금 합계 : 0 원</li>
			 -->
					<li>선배송 합계 : <strong>0원</strong></li>
					<!-- 
			<li>결제 수수료 : 0 원</li>
			<li>사용 적립금 : 0 원</li>
			 -->
					<li>회원 할인금 : <strong>0원</strong></li>
					<li>이벤트 할인금 : <strong>0원</strong></li>
					<li>쿠폰 사용금 : <strong>0원</strong></li>
					<li>판매가합 : <strong>0원</strong></li>
					<li>공급가합계 : <strong>0원</strong></li>
				</ul>
				<div class="btn_right">
					<a href="account_excel?" class="btn_sec md">출력/엑셀다운</a>
				</div>
				<div>
					<table
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_list mgt10"
					>
						<caption>
							본사 정산 내역
						</caption>
						<colgroup>
							<col width="50" />
							<col width="150" />
							<col width="100" />
							<col width="100" />
							<col width="80" />
							<col width="*" />
							<col width="80" />
							<col width="150" />
							<col width="150" />
							<col width="150" />
						</colgroup>
						<thead>
							<tr>
								<th>No</th>
								<th>주문번호</th>
								<th>구매확정일</th>
								<th>주문자<br />(입금자)</th>
								<th>부가세</th>
								<th>주문상품</th>
								<!--th>공급가</th>
			<th>옵션공급가</th-->
								<th>수량</th>
								<th>공급가합</th>
								<!--th>상품판매가</th>
			<th>옵션가</th-->
								<th>판매가합</th>
								<!--th>적립금</th-->
								<th>선배송비</th>
								<!--th>회원할인금</th>
			<th>이벤트할인금</th>
			<th>사용적립금</th>
			<th>쿠폰사용금</th>
			<th>실제결제금액</th>
			<th>결제방법<br />(수수료)</th-->
							</tr>
						</thead>
						<tbody>
							<tr>
								<td colspan="10" height="50">
									저장된내역이 존재하지 않습니다.
								</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<th colspan="2">합계</th>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
								<!--th>368,000</th>
			<th>0</th-->
								<th>0</th>
								<th>0</th>
								<!--th>419,700</th>
			<th>0</th-->
								<th>0</th>
								<!--th>58,100</th-->
								<th>0</th>
								<!--th>75,200</th>
			<th>0</th>
			<th>0</th>
			<th>12,800</th>
			<th>336,700</th>
			<th></th-->
							</tr>
						</tfoot>
					</table>
				</div>
			</section>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
