<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				온라인입금계좌<button
					id="addBmark"
					onclick="addBookmark('온라인입금계좌')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>결제정보관리</li>
				<li>온라인입금계좌</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>결제에 필요한 온라인 입금 계좌 정보를 관리하는 곳입니다.</li>
			<li>아래 내용을 입력하시면 자동으로 쇼핑몰에 적용됩니다.</li>
		</ul>

		<!-- <script type="text/javascript">
			//<![CDATA[
			function checkUsePayway(obj) {
				var f = document.Frm;

				if (obj.checked && typeof f.isMain == 'undefined') {
					alert(
						'최소 하나이상의 입금계좌가 추가되어야 합니다.\n먼저 입금계좌를 추가해 주세요.',
					);
					obj.checked = false;
					return false;
				}

				if (confirm('온라인입금 사용여부를 변경하시겠습니까?')) {
					f.mode.value = 'USE';
					f.submit();
				} else obj.checked = !obj.checked;
			}

			function checkMain(idx) {
				var f = document.Frm;

				if (confirm('선택한 계좌를 주계좌로 설정하시겠습니까?')) {
					f.mode.value = 'MAIN';
					f.idx.value = idx;
					f.submit();
				} else {
					if (typeof f.isMain.length != 'undefined') {
						for (var i = 0; i < f.isMain.length; i++) {
							if (f.isMain[i].getAttribute('main').toString().toNumeric() > 0) {
								f.isMain[i].checked = true;
								break;
							}
						}
					}
				}
			}

			function del(idx) {
				var f = document.Frm;

				if (confirm('삭제하시겠습니까?')) {
					f.mode.value = 'DEL';
					f.idx.value = idx;
					f.submit();
				}
			}

			function validSubmit() {
				var f = document.Frm;

				if (isEmpty(f.bank)) {
					alert('은행명을 입력해 주세요.');
					f.bank.focus();
					return false;
				}

				if (isEmpty(f.depositor)) {
					alert('예금주명을 입력해 주세요.');
					f.depositor.focus();
					return false;
				}

				if (isEmpty(f.account)) {
					alert('계좌번호를 입력해 주세요.');
					f.account.focus();
					return false;
				}

				if (confirm('등록하시겠습니까?')) {
					f.mode.value = 'REG';
					f.submit();
				}
			}
			//]]>
		</script> -->

		<form name="Frm" method="post" action="config_pay_online_act">
			<input type="hidden" name="mode" />
			<input type="hidden" name="idx" />

			<div class="main_content">
				<section class="cont_wrap">
					<div class="section_head">
						<h4>온라인입금사용</h4>
					</div>

					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_form"
					>
						<caption>
							온라인입금 사용여부
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>사용여부</th>
								<td>
									<label>
										<input
											type="checkbox"
											name="usePayway"
											value="128"
											checked=""
											onclick="checkUsePayway(this)"
										/>온라인입금을 사용합니다.
									</label>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="section_head">
						<h4>입금계좌목록</h4>
					</div>

					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_list"
					>
						<caption>
							입금계좌목록 리스트
						</caption>
						<colgroup>
							<col width="50" />
							<col width="150" />
							<col width="*" />
							<col width="150" />
							<col width="70" />
							<col width="70" />
						</colgroup>
						<thead>
							<tr>
								<th>No</th>
								<th>은행명</th>
								<th>계좌번호</th>
								<th>예금주</th>
								<th>주계좌</th>
								<th>삭제</th>
							</tr>
						</thead>
						<tbody>
							<tr bgcolor="#F8F8F8" align="center">
								<td>1</td>
								<td>스마일 뱅크</td>
								<td class="left">12345678900000</td>
								<td>홍길동</td>
								<td>
									<label>
										<input
											type="radio"
											name="isMain"
											checked=""
											main="1"
											onclick="checkMain(22)"
										/>
									</label>
								</td>
								<td>
									<button type="button" onclick="del(22)" class="btn_sec sm">
										삭제
									</button>
								</td>
							</tr>

							<tr bgcolor="#F8F8F8" align="center">
								<td>2</td>
								<td>스마일 뱅크</td>
								<td class="left">12345678900000</td>
								<td>홍길동</td>
								<td>
									<label>
										<input
											type="radio"
											name="isMain"
											checked=""
											main="1"
											onclick="checkMain(23)"
										/>
									</label>
								</td>
								<td>
									<button type="button" onclick="del(23)" class="btn_sec sm">
										삭제
									</button>
								</td>
							</tr>
						</tbody>
						<tbody></tbody>
					</table>

					<div class="section_head">
						<h4>입금계좌추가</h4>
					</div>

					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_form"
					>
						<caption>
							입금계좌 추가 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>은행명</th>
								<td>
									<input
										type="text"
										name="bank"
										class="text_input wide"
										maxlength="50"
									/>
								</td>
								<th>예금주</th>
								<td>
									<input
										type="text"
										name="depositor"
										class="text_input wide"
										maxlength="100"
									/>
								</td>
							</tr>
							<tr>
								<th>계좌번호</th>
								<td colspan="3">
									<input
										type="text"
										name="account"
										class="text_input wide"
										maxlength="100"
									/>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="btn_wrap">
						<button type="button" class="btn_pri" onclick="validSubmit()">
							확인
						</button>
						<button type="button" onclick="cancel()" class="btn_sec">
							취소
						</button>
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

<style></style>
