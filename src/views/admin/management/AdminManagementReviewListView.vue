<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				상품평관리<button
					id="addBmark"
					onclick="addBookmark('상품평관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>운영관리</li>
				<li>고객운영관리</li>
				<li>상품평관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				<span class="red">[회원정보보기]</span>를 클릭하시면 상품평을 적어주신
				회원의 정보를 보실 수 있습니다.
			</li>
			<li>
				상품평을 삭제 하실려면 <span class="red">[삭제]</span> 버튼을 클릭해
				주세요.
			</li>
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
					200,
					340,
					'scrollbars=yes',
				);
			});
			//]]>
		</script>

		<script type="text/javascript">
			function delReview(idx) {
				var f = document.Frm;

				if (confirm('상품평을 삭제하시겠습니까?')) {
					f.mode.value = 'DEL';
					f.idx.value = idx;
					f.params.value =
						'73776F72643D5E736B65793D5E737265676474733D5E737265676474653D5E706167653D31';
					f.method = 'post';
					f.encoding = 'multipart/form-data';
					f.action = 'review_act';
					f.submit();
				}
			}

			function delAnswer(idx, aidx) {
				var f = document.Frm;

				if (confirm('답변을 삭제하시겠습니까?')) {
					f.mode.value = 'DEL_ANSWER';
					f.idx.value = idx;
					f.aidx.value = aidx;
					f.params.value =
						'73776F72643D5E736B65793D5E737265676474733D5E737265676474653D5E706167653D31';
					f.method = 'post';
					f.encoding = 'multipart/form-data';
					f.action = 'review_act';
					f.submit();
				}
			}

			function editReview(idx) {
				$.laybox({
					type: 'iframe',
					source: 'review_reg_ifrm?idx=' + idx,
				});
			}

			function regAnswer(idx) {
				$.laybox({
					type: 'iframe',
					source: 'review_reg_ifrm?mode=ANSWER&idx=' + idx,
				});
			}

			function HieenReview(idx, obj) {
				var checked = $(obj).is(':checked');

				if (
					!confirm((checked ? '미노출' : '노출') + ' 상태로 변경 하시겠습니까?')
				) {
					$(obj).prop('checked', !checked);
					return false;
				}

				$.ajax({
					type: 'POST',
					url: 'review_hidden_act',
					data: 'idx=' + idx + '&isHidden=' + (checked ? 'T' : 'F'),
					success: function (data) {
						alert('노출 상태 변경이 정상처리 되었습니다.');
					},
					error: function (request, status, error) {
						alert(request.responseText);
					},
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

			$(function () {
				$('.adjust_image_container').adjustImage();
			});
			//]]>
		</script> -->

		<form
			name="Frm"
			method="get"
			action="review_list"
			onsubmit="return validSearch(this)"
		>
			<input type="hidden" name="mode" />
			<input type="hidden" name="idx" />
			<input type="hidden" name="aidx" />
			<input
				type="hidden"
				name="params"
				value="73776F72643D5E736B65793D5E737265676474733D5E737265676474653D5E706167653D31"
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
								<th>직접검색</th>
								<td>
									<div class="direct_search">
										<select id="skey" name="skey">
											<option value="">전체</option>
											<option value="goods">상품명</option>
											<option value="goodscode">상품코드</option>
											<option value="subject">제목</option>
											<option value="content">내용</option>
											<option value="answer">답변</option>
											<option value="user">회원ID</option>
											<option value="username">회원명</option>
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
							오늘 등록된 상품평은 총 <strong>0</strong>개입니다.
						</h4>
						<a
							href="review_list_excel?sword=&amp;skey=&amp;sregdts=&amp;sregdte="
							class="btn_sec md"
							>엑셀로 받기</a
						>
					</div>

					<table
						border="0"
						cellspacing="0"
						cellpadding="0"
						width="100%"
						class="table_col"
					>
						<caption>
							등록된 상품평 리스트
						</caption>
						<colgroup>
							<col width="70" />
							<col width="100" />
							<col width="*" />
							<col width="150" />
							<col width="150" />
							<col width="150" />
							<col width="100" />
							<col width="80" />
						</colgroup>
						<thead>
							<tr>
								<th>No</th>
								<th colspan="5">상품평</th>
								<th>전시</th>
								<th>관리</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>3</td>
								<td class="borright">
									<div class="over_h" style="padding: 10px">
										<div style="width: 70px">
											<img
												src="//bootdev.mallstore.co.kr/data/base/goods/small/20230905/35e28602abba4e85b1236d9c353fbc5e.jpg"
												onerror="this.src='//bootdev.mallstore.co.kr/imgs/goods/no.gif'"
												width="50"
												height="50"
												border="0"
											/>
										</div>
									</div>
								</td>
								<td class="txt_left">
									<div class="fl">
										<a href="../../goods/detail?gno=10867" target="_blank"
											>입점업체 상품 테스트_수수료적용 02
											(상품코드:G0000010867)</a
										>
									</div>

									<!-- 
					
					
					
					
					
					
					
					 -->
								</td>
								<td><img src="/imgs/icon/star_05.png" alt="별점 5" /></td>
								<td>
									서승보(seobo28)
									<button
										type="button"
										class="btn_sec md mgt5"
										ezi="148868"
										onclick="ezpop.member.open(event)"
									>
										회원정보보기
									</button>
								</td>
								<td>2023-09-06 10:37:40</td>
								<td rowspan="2">
									<label
										><input
											type="checkbox"
											onclick="HieenReview(988, this)"
											value="T"
										/>미노출</label
									>
								</td>
								<td rowspan="2">
									<div class="mgt5">
										<button
											type="button"
											class="btn_sec sm"
											onclick="editReview(988)"
										>
											수정
										</button>
										<button
											type="button"
											class="btn_sec sm mgt5"
											onclick="delReview(988)"
										>
											삭제
										</button>
									</div>

									<div class="mgt5">
										<button
											type="button"
											class="btn_sec sm"
											onclick="regAnswer(988)"
										>
											답변
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="6" class="td_detail">
									<div style="padding: 15px 10px; text-align: left">
										<div><strong>굿굿굿~~~~~~~~~</strong></div>

										<div class="mgt10 break">굿굿굿~~~~~~~~~</div>
									</div>
								</td>
							</tr>

							<tr>
								<td>2</td>
								<td class="borright">
									<div class="over_h" style="padding: 10px">
										<div style="width: 70px">
											<img
												src="//bootdev.mallstore.co.kr/data/base/goods/small/20230905/35e28602abba4e85b1236d9c353fbc5e.jpg"
												onerror="this.src='//bootdev.mallstore.co.kr/imgs/goods/no.gif'"
												width="50"
												height="50"
												border="0"
											/>
										</div>
									</div>
								</td>
								<td class="txt_left">
									<div class="fl">
										<a href="../../goods/detail?gno=10867" target="_blank"
											>입점업체 상품 테스트_수수료적용 02
											(상품코드:G0000010867)</a
										>
									</div>

									<!-- 
					
					
					
					
					
					
					
					 -->
								</td>
								<td><img src="/imgs/icon/star_05.png" alt="별점 5" /></td>
								<td>
									서승보(seobo30)
									<button
										type="button"
										class="btn_sec md mgt5"
										ezi="148874"
										onclick="ezpop.member.open(event)"
									>
										회원정보보기
									</button>
								</td>
								<td>2023-09-05 16:41:21</td>
								<td rowspan="2">
									<label
										><input
											type="checkbox"
											onclick="HieenReview(987, this)"
											value="T"
										/>미노출</label
									>
								</td>
								<td rowspan="2">
									<div class="mgt5">
										<button
											type="button"
											class="btn_sec sm"
											onclick="editReview(987)"
										>
											수정
										</button>
										<button
											type="button"
											class="btn_sec sm mgt5"
											onclick="delReview(987)"
										>
											삭제
										</button>
									</div>

									<div class="mgt5">
										<button
											type="button"
											class="btn_sec sm"
											onclick="regAnswer(987)"
										>
											답변
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="6" class="td_detail">
									<div style="padding: 15px 10px; text-align: left">
										<div><strong>이뿌게 잘 입겠습니다</strong></div>

										<div
											class="adjust_image_container mgt10"
											style="overflow: hidden"
										>
											<img
												src="//bootdev.mallstore.co.kr/data/base/review/thumb_7fa17d12a5844959b25ffe50feec1399.jpg"
												ow="500"
												oh="375"
											/>
										</div>

										<div class="mgt10 break">감사합니다~~</div>
									</div>
								</td>
							</tr>

							<tr>
								<td>1</td>
								<td class="borright">
									<div class="over_h" style="padding: 10px">
										<div style="width: 70px">
											<img
												src="//bootdev.mallstore.co.kr/data/base/goods/small/20230808/a7e635bdf9714b03924360d6e7fa9662.jpg"
												onerror="this.src='//bootdev.mallstore.co.kr/imgs/goods/no.gif'"
												width="50"
												height="50"
												border="0"
											/>
										</div>
									</div>
								</td>
								<td class="txt_left">
									<div class="fl">
										<a href="../../goods/detail?gno=10862" target="_blank"
											>모던 스타일_sample 018 (상품코드:G0000010862)</a
										>
									</div>

									<!-- 
					
					
					
					
					
					
					
					 -->
								</td>
								<td><img src="/imgs/icon/star_05.png" alt="별점 5" /></td>
								<td>
									서승보(seobo28)
									<button
										type="button"
										class="btn_sec md mgt5"
										ezi="148868"
										onclick="ezpop.member.open(event)"
									>
										회원정보보기
									</button>
								</td>
								<td>2023-09-04 17:55:33</td>
								<td rowspan="2">
									<label
										><input
											type="checkbox"
											onclick="HieenReview(986, this)"
											value="T"
										/>미노출</label
									>
								</td>
								<td rowspan="2">
									<div class="mgt5">
										<button
											type="button"
											class="btn_sec sm"
											onclick="editReview(986)"
										>
											수정
										</button>
										<button
											type="button"
											class="btn_sec sm mgt5"
											onclick="delReview(986)"
										>
											삭제
										</button>
									</div>

									<div class="mgt5">
										<button
											type="button"
											class="btn_sec sm"
											onclick="regAnswer(986)"
										>
											답변
										</button>
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="6" class="td_detail">
									<div style="padding: 15px 10px; text-align: left">
										<div><strong>서실장_테스트</strong></div>

										<div
											class="adjust_image_container mgt10"
											style="overflow: hidden"
										>
											<img
												src="//bootdev.mallstore.co.kr/data/base/review/thumb_a2ae1d0217fe4d8ab93b5bba9c71126f.jpg"
												ow="500"
												oh="375"
											/>
										</div>

										<div class="mgt10 break">서실장_테스트</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>

					<!-- paging -->
					<div class="paging" style="margin-top: 20px">
						<span
							><a
								href="/nmanager/management/review_list?page=1&amp;sword=&amp;skey=&amp;sregdts=&amp;sregdte="
								><strong class="active">1</strong></a
							></span
						>
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
