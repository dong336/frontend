<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				일괄배송관리<button
					id="addBmark"
					onclick="addBookmark('일괄배송관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>주문/매출관리</li>
				<li>주문관리</li>
				<li>일괄배송관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>"배송준비" 상태인 주문건에 대한 일괄배송 관리 페이지입니다.</li>
		</ul>

		<!-- <script type="text/javascript">
			//<![    [
			function checkCbListAll(obj) {
				var f = document.FrmL;

				$(f.cbList).each(function () {
					this.checked = obj.checked;
					checkLine(this);
				});
			}

			function checkLine(obj) {
				var $row = $(obj).parent().parent();
				if (obj.checked) {
					$row.addClass('current');
				} else {
					$row.removeClass('current');
				}
			}

			function openDetail(idx) {
				// 주문정보 상세보기
				openPopup(
					'order_detail_new_pop?idx=' + idx,
					'Detail',
					1080,
					800,
					'scrollbars=1',
				);
			}

			function downExcel() {
				var f = document.FrmL;
				var items = '';

				if (!f.cbList) return false;

				$('input[name="cbList"]:checked', $(f)).each(function () {
					items += (items ? ',' : '') + this.value;
				});

				if (items == '') {
					alert('배송 대상 주문을 선택해 주세요.');
					return false;
				}

				f.invoiceIdx.value = items;
				f.target = 'frmProc';
				f.submit();
			}
			//]]>
		</script>

		<script type="text/javascript">
			//<![    [
			function validSubmit() {
				var f = document.FrmR;

				if (isEmpty(f.delivery)) {
					alert('배송업체를 선택해 주세요.');
					f.delivery.focus();
					return false;
				}

				if (isEmpty(f.attach)) {
					alert('CSV 파일을 선택해 주세요.');
					f.attach.focus();
					return false;
				}

				if (!checkFileExt(f.attach, 'csv', 'CSV(.csv) 파일만 선택해 주세요.'))
					return false;

				if (confirm('송장정보 업로드를 하시겠습니까?')) {
					$('#regist_button').html(
						"<div class='red'><strong>송장정보를 등록 중 입니다.<br />잠시만 기다려주세요.</strong></div>",
					);
					f.submit();
				}
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form name="FrmL" method="post" action="invoice_excel">
					<input type="hidden" name="invoiceIdx" />

					<div class="section_head">
						<h4 class="total">
							배송 대상 주문 - 총 <strong>2</strong>건이 조회되었습니다.
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
							배송대상주문 항목
						</caption>
						<colgroup>
							<col width="40" />
							<col width="60" />
							<col width="55" />
							<col width="120" />
							<col width="70" />
							<col width="70" />
							<col width="160" />
							<col width="*" />
							<col width="55" />
							<col width="94" />
						</colgroup>
						<thead>
							<tr class="fixed_top">
								<th>
									<label
										><input
											type="checkbox"
											name="cbListAll"
											onclick="checkCbListAll(this)"
										/>전체선택</label
									>
								</th>
								<th>고유<br />번호</th>
								<th>배송<br />구분</th>
								<th>주문번호</th>
								<th>주문자</th>
								<th>수령인</th>
								<th>배송지</th>
								<th>상품명</th>
								<th>수량</th>
								<th>판매가</th>
							</tr>
						</thead>

						<tbody>
							<tr class="even">
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="1408"
											onclick="checkLine(this)"
										/>선택</label
									>
								</td>
								<td>1408</td>
								<td>주문</td>
								<td>
									<a href="javascript:;" onclick="openDetail(1086)"
										>A2324046411411</a
									>
								</td>
								<td>서승보</td>
								<td>창고</td>
								<td>
									<div>
										경기 성남시 분당구 용인서울고속도로 88 (대장동, 판교터널
										관리사무소) 77
									</div>
									<div>[010-3136-3730]</div>
								</td>
								<td class="tl">
									<div>
										<a href="../../goods/detail?gno=10858" target="_blank"
											>모던 스타일_sample 014</a
										>
									</div>
								</td>
								<td>1개</td>
								<td>270,000원</td>
							</tr>

							<tr class="">
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="1415"
											onclick="checkLine(this)"
										/>선택</label
									>
								</td>
								<td>1415</td>
								<td>주문</td>
								<td>
									<a href="javascript:;" onclick="openDetail(1093)"
										>A2324841770770</a
									>
								</td>
								<td>서승보</td>
								<td>비밀아지트</td>
								<td>
									<div>서울 중구 필동로1길 2 (필동3가) 44</div>
									<div>[010-8888-8888]</div>
								</td>
								<td class="tl">
									<div>
										<a href="../../goods/detail?gno=10860" target="_blank"
											>모던 스타일_sample 016</a
										>
									</div>
								</td>
								<td>1개</td>
								<td>150,000원</td>
							</tr>
						</tbody>
					</table>
					<div class="btn_right">
						선택한 배송 대상 주문건을
						<button type="button" onclick="downExcel()" class="btn_sec md">
							엑셀로받기
						</button>
					</div>
				</form>

				<form
					name="FrmR"
					method="post"
					action="invoice_act"
					enctype="multipart/form-data"
				>
					<!-- 설명 -->
					<div class="mgt20">
						<img src="../imgs/icon/icon_tip.png" alt="TIP" />
					</div>
					<div class="tip_box2">
						<span
							>배송 대상 주문건을 엑셀로 받아 아래 일괄배송 입력양식에 맞게
							정리하신 후, 송장번호를 입력하여
							<em class="red">"CSV (쉼표로 분리) (.csv)"로 저장</em>하여
							업로드하시기 바랍니다.</span
						><br />
						<span
							>다운로드 받은 엑셀파일의 첫번째 라인의 필드값은 삭제하거나,
							고유번호와 주문번호를 변경할 경우 배송처리에 오류가 발생할 수
							있으니 주의해 주시기 바랍니다.</span
						><br />
						<span
							>송장번호를 입력하지 않은 주문은 배송처리가 되지 않습니다.</span
						><br /><br />

						<strong>일괄배송 입력양식</strong><br />
						<table cellpadding="0" cellspacing="0" border="0">
							<thead>
								<tr>
									<th>고유번호</th>
									<th>주문번호</th>
									<th>송장번호</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>A081231234501</td>
									<td>12535258125</td>
								</tr>
								<tr>
									<td>2</td>
									<td>A081231234502</td>
									<td>12535258128</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- 설명 -->

					<div class="section_head mgt40">
						<h4>송장 업로드</h4>
					</div>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_form"
					>
						<caption>
							엑셀 업로드 폼
						</caption>
						<colgroup>
							<col width="150" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>배송업체</th>
								<td>
									<select id="delivery" name="delivery">
										<option value="">배송업체선택</option>
										<optgroup label="----------------"></optgroup>
										<option value="31">롯데택배(구,현대택배)</option>
										<option value="32">CJ대한통운</option>
										<option value="33">로젠택배</option>
										<option value="34">우체국택배</option>
										<option value="35">일양로지스택배</option>
										<option value="36">경동택배</option>
									</select>
								</td>
							</tr>
							<tr>
								<th>일괄배송 CSV 파일</th>
								<td>
									<input
										type="File"
										name="attach"
										size="35"
										onkeypress="blockKey(event)"
										onkeydown="blockKey(event)"
									/>
								</td>
							</tr>
						</tbody>
					</table>

					<div id="regist_button" class="btn_wrap">
						<button type="button" onclick="validSubmit()" class="btn_pri">
							확인
						</button>
						<button type="button" onclick="cancle()" class="btn_sec">
							취소
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

<style scoped>
.invoice_order_list {
	overflow: auto;
	overflow-y: scroll;
	height: 301px;
}
.invoice_order_list table {
	border-top: 0 none;
}
.invoice_order_list tr.even td {
	background-color: #fdf8e4;
}
.invoice_order_list tr.current td {
	background-color: #e2f4dd;
}
</style>
