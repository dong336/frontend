<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				상품Q&amp;A관리<button
					id="addBmark"
					onclick="addBookmark('상품Q&amp;A관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>운영관리</li>
				<li>고객운영관리</li>
				<li>상품Q&amp;A관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>상품의 Q&amp;A를 관리합니다.</li>
		</ul>

		<!-- <script type="text/javascript" src="/jscript/calendar/class.js"></script>
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
					80,
					340,
					'scrollbars=yes',
				);
			});
			//]]>
		</script> -->

		<!-- <script type="text/javascript">
			function delQuestion(idx) {
				var f = document.Frm;

				if (confirm('Q&A를 삭제하시겠습니까?')) {
					f.mode.value = 'DEL';
					f.idx.value = idx;
					f.method = 'post';
					f.action = 'qna_act';
					f.submit();
				}
			}

			function delAnswer(idx, aidx) {
				var f = document.Frm;

				if (confirm('답변을 삭제하시겠습니까?')) {
					f.mode.value = 'DEL_ANSWER';
					f.idx.value = idx;
					f.aidx.value = aidx;
					f.method = 'post';
					f.action = 'qna_act';
					f.submit();
				}
			}

			function editQuestion(idx) {
				$.laybox({
					type: 'iframe',
					source: 'qna_reg_ifrm?idx=' + idx,
				});
			}

			function regAnswer(idx) {
				$.laybox({
					type: 'iframe',
					source: 'qna_reg_ifrm?mode=ANSWER&idx=' + idx,
				});
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

		<form
			name="Frm"
			method="get"
			action="qna_list"
			onsubmit="return validSearch(this)"
		>
			<input type="hidden" name="mode" />
			<input type="hidden" name="idx" />
			<input type="hidden" name="aidx" />
			<input
				type="hidden"
				name="params"
				value="73776F72643D5E736B65793D5E737265676474733D5E737265676474653D5E7367626E3D5E706167653D31"
			/>

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
							검색 영역
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>등록일자</th>
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
												readonly=""
											/><!-- 
							//--><img
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
												readonly=""
											/><!-- 
							//--><img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'sregdte', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<th>구분</th>
								<td>
									<div class="label_wrap">
										<label
											><input
												type="radio"
												name="sgbn"
												value=""
												checked=""
											/>전체</label
										>
										<label
											><input
												type="radio"
												name="sgbn"
												value="false"
											/>미답변</label
										>
										<label
											><input
												type="radio"
												name="sgbn"
												value="true"
											/>답변</label
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
											<option value="goods">상품명</option>
											<option value="subject">제목</option>
											<option value="content">내용</option>
											<option value="answer">답변</option>
											<option value="user">질문자</option>
											<option value="dealer">답변자</option>
										</select>
										<input
											type="text"
											name="sword"
											value=""
											maxlength="50"
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
					<div class="section_head">
						<h4 class="total">
							오늘 등록된 Q&amp;A는 총 <strong>0</strong>개입니다.
						</h4>
					</div>

					<table
						border="0"
						cellspacing="0"
						cellpadding="0"
						width="100%"
						class="table_col"
					>
						<caption>
							등록된 Q&amp;A 리스트
						</caption>
						<colgroup>
							<col width="50" />
							<col width="*" />
							<col width="100" />
							<col width="100" />
							<col width="80" />
						</colgroup>
						<thead>
							<tr>
								<th>No</th>
								<th>제목</th>
								<th>고객명</th>
								<th>등록일</th>
								<th>관리</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td height="50" colspan="4">
									등록된 Q&amp;A가 존재하지 않습니다.
								</td>
							</tr>
						</tbody>
					</table>

					<!-- paging -->
					<div class="paging" style="margin-top: 20px">
						<span></span>
					</div>
					<!-- //paging -->
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
