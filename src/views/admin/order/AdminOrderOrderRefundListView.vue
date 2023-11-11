<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				환불대기<button
					id="addBmark"
					onclick="addBookmark('환불대기')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>주문/매출관리</li>
				<li>취소/교환/반품신청관리</li>
				<li>환불대기</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>환불대기 및 수동환불완료 주문건을 관리합니다.</li>
		</ul>

		<!-- <script type="text/javascript">
			//<![ [
			function validSearch(f) {
				f.target = '_self';
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<!-- 검색 폼 : 시작 ###################################################################### -->
				<form name="sFrm" method="get" onsubmit="return validSearch(this)">
					<input type="hidden" name="psort" value="" />
					<input type="hidden" name="psize" value="10" />

					<table
						cellspacing="0"
						cellpadding="0"
						border="0"
						width="100%"
						class="t_form"
					>
						<caption>
							주문 검색
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>주문 구분</th>
								<td>
									<div class="label_wrap">
										<label
											><input
												type="radio"
												name="sprocess"
												value=""
												checked=""
											/>전체</label
										>
										<label
											><input
												type="radio"
												name="sprocess"
												value="101"
											/>미처리</label
										>
										<label
											><input
												type="radio"
												name="sprocess"
												value="900"
											/>처리완료</label
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
											<option value="ordno">주문번호</option>
											<option value="id">주문자ID</option>
											<option value="ordname">주문자명</option>
											<option value="ordemail">주문자이메일</option>
											<option value="ordtel">주문자연락처</option>
											<option value="rcvname">수령인명</option>
											<option value="rcvtel">수령인전화번호</option>
											<option value="remittor">입금자명</option>
											<option value="gcode">상품코드</option>
											<option value="gname">상품명</option>
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
				</form>
				<!-- 검색 폼 : 끝 ###################################################################### -->
			</section>
			<section class="cont_wrap">
				<!-- <script type="text/javascript" src="/jscript/ezpop.js"></script>
				<script type="text/javascript">
					//<![ [
					ezpop.member.bind('detail', '회원정보', function (uno) {
						$.laybox({
							type: 'iframe',
							source: '../member/member_detail_ifrm?uno=' + uno,
						});
					});
					ezpop.member.bind('email', '메일발송', function (uno) {
						openPopup(
							'../member/send_email_pop?uno=' + uno,
							'ezEmail',
							740,
							570,
						);
					});
					ezpop.member.bind('sms', 'SMS전송', function (uno) {
						openPopup(
							'../management/send_sms_direct_pop?uno=' + uno,
							'ezSms',
							80,
							340,
							'scrollbars=yes',
						);
					});
					//]]>
				</script>

				<script type="text/javascript">
					//<![ [
					function changeList() {
						var f = document.Frm;
						var sf = document.sFrm;

						sf.psort.value = f.psort.value;
						sf.psize.value = f.psize.value;

						validSearch(sf);

						$('.wrap-loading').show();
						sf.submit();
					}
					//]]>
				</script>

				<script type="text/javascript">
					//<![ [
					function openDetail(idx) {
						// 주문정보 상세보기
						openPopup(
							'order_detail_new_pop?menu=&idx=' + idx,
							'Detail',
							1080,
							800,
							'scrollbars=1',
						);
					}

					function setClaimRefund(idx, mode) {
						var f = document.Frm;
						var msg;

						switch (mode) {
							case '200':
								msg =
									'해당 취소/반품건에 대한 환불계좌 송금처리를 하시겠습니까?';
								break;
							default:
								mode = '';
								msg = '해당 취소/반품건에 대한 환불처리를 하시겠습니까?';
								break;
						}

						if (confirm(msg)) {
							$('.wrap-loading').show();
							f.mode.value = mode;
							f.idx.value = idx;
							f.action = 'order_claim_refund_act';
							f.target = '_self';
							f.submit();
						}
					}
					//]]>
				</script> -->

				<form name="Frm" method="post">
					<input type="hidden" name="from" value="main" />
					<input type="hidden" name="mode" />
					<input type="hidden" name="idx" />
					<input
						type="hidden"
						name="params"
						value="736B65793D5E73776F72643D5E70736F72743D5E7073697A653D31305E7370726F636573733D5E706167653D31"
					/>
					<input
						type="hidden"
						name="redirect"
						value="http://javalocal.mallstore.co.kr/nmanager/order/order_refund_list"
					/>

					<div class="section_head">
						<h4 class="total">
							총 <strong>1</strong>건의 주문이 조회되었습니다.
						</h4>
						<div>
							<select id="psize" name="psize" onchange="changeList()">
								<option value="10" selected="">10줄씩보기</option>
								<option value="20">20줄씩보기</option>
								<option value="30">30줄씩보기</option>
								<option value="50">50줄씩보기</option>
								<option value="100">100줄씩보기</option>
								<option value="500">500줄씩보기</option></select
							>&nbsp;<select id="psort" name="psort" onchange="changeList()">
								<option value="orddt">주문일</option>
								<option value="ordno">주문번호</option>
								<option value="ordprice">주문금액순</option>
								<option value="id">주문자아이디순</option>
								<option value="ordname">주문자명순</option>
								<option value="rcvname">수령인순</option>
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
							주문 리스트
						</caption>
						<colgroup>
							<col width="40" />
							<col width="6%" />
							<col width="12%" />
							<col width="12%" />
							<col width="5%" />
							<col width="11%" />
							<col width="*" />
							<col width="16%" />
							<col width="16%" />
						</colgroup>
						<thead>
							<tr>
								<th>NO</th>
								<th>구분</th>
								<th>주문번호</th>
								<th>주문자ID</th>
								<th>클레임</th>
								<th>환불금액</th>
								<th>환불계좌정보</th>
								<th>환불접수</th>
								<th>환불완료</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>처리</td>
								<td>
									<a href="javascript:;" onclick="openDetail(1094)"
										>A2324821383383</a
									>
								</td>
								<td>
									<div>서승보</div>

									<div>
										<a
											href="javascript:;"
											ezi="148868"
											onclick="ezpop.member.open(event)"
											>(seobo28)</a
										>
									</div>
								</td>
								<td>취소</td>
								<td>150,000</td>
								<td class="break tl"><br /><br /></td>
								<td class="break"><br />()</td>
								<td class="break">
									<span>2023-09-05 11:01:00<br />(seobo28)</span>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="paging">
						<span
							><a
								href="/nmanager/order/order_refund_list?page=1&amp;skey=&amp;sword=&amp;psort=&amp;psize=10&amp;sprocess="
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

<style scoped></style>
