<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				쿠폰관리<button
					id="addBmark"
					onclick="addBookmark('쿠폰관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>프로모션</li>
				<li>쿠폰관리</li>
				<li>쿠폰관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>쿠폰을 발행하고 쿠폰지급 내역을 확인할 수 있습니다.</li>
			<li>
				회원별, 상품별로 쿠폰을 부여하여 쇼핑몰이 활성화 하는데 도움을 줍니다.
			</li>
		</ul>

		<!-- <script type="text/javascript" src="/jscript/calendar/class.js"></script>
		<script type="text/javascript" src="/jscript/inperiod/class.js"></script>
		<script type="text/javascript">
			function validSearch(f) {
				if (!isDate(f.sregdts.value)) f.sregdts.value = '';
				if (!isDate(f.sregdte.value)) f.sregdte.value = '';
				if (!isDate(f.srundts.value)) f.srundts.value = '';
				if (!isDate(f.srundte.value)) f.srundte.value = '';

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
					$('#srundts').val().stripspace() != '' &&
					$('#srundte').val().stripspace() != ''
				) {
					if (
						fn_betweenDate($('#srundts').val(), $('#srundte').val(), 'd') < 0
					) {
						alert('시작일자가 종료일 보다 늦습니다.\n다시 입력해 주세요.');
						$('#srundte').focus();
						return false;
					}
				}
			}
			//]]>
		</script>

		<script type="text/javascript">
			function reg() {
				var f = document.Frm;

				if (isEmpty(f.kind)) {
					alert('쿠폰종류를 선택해 주세요.');
					f.kind.focus();
					return false;
				}

				location.href = 'coupon_reg?kind=' + f.kind.value;
			}

			function edit(idx) {
				location.href =
					'coupon_reg?idx=' +
					idx +
					'&params=736B696E643D5E736D6574686F643D5E737265676474733D5E737265676474653D5E7372756E6474733D5E7372756E6474653D5E7372756E3D305E73776F72643D5E706167653D31';
			}

			function delList() {
				var f = document.Frm;
				var items = '';

				var cnt = 0;
				$('input[name="cbList"]:checked').each(function () {
					items += (items ? ',' : '') + this.value;
					if ($(this).attr('usedqty') > 0) cnt++;
				});

				if (items == '') {
					alert('삭제할 항목을 선택해 주세요.');
					return false;
				}

				if (cnt > 0) {
					alert(
						'사용된 쿠폰이 존재합니다.\n해당 쿠폰을 해제 후 삭제를 진행해주세요.',
					);
					return false;
				}

				if (
					confirm('쿠폰을 삭제하면 모든 내역이 삭제됩니다.\n삭제하시겠습니까?')
				) {
					f.mode.value = 'DEL';
					f.idx.value = items;
					f.action = 'coupon_act';
					f.submit();
				}
			}

			function openIssueList(idx) {
				$.laybox({
					type: 'iframe',
					source: 'coupon_issue_list_ifrm?idx=' + idx,
				});
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form name="sFrm" method="get" onsubmit="return validSearch(this)">
					<table
						cellspacing="0"
						cellpadding="0"
						border="0"
						width="100%"
						class="t_form"
					>
						<caption>
							쿠폰 종류
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>쿠폰종류</th>
								<td>
									<select id="skind" name="skind" onchange="this.form.submit()">
										<option value="">전체</option>
										<option value="100">상품할인쿠폰</option>
										<option value="200">주문할인쿠폰</option>
										<option value="300">무료배송쿠폰</option>
									</select>
								</td>
								<th>발급방법</th>
								<td>
									<select
										id="smethod"
										name="smethod"
										onchange="this.form.submit()"
									>
										<option value="">전체</option>
										<option value="100">상품발급</option>
										<option value="201">구매완료보상발급</option>
										<option value="202">구매횟수보상발급</option>
										<option value="300">회원선택발급</option>
										<option value="400">오프라인발급</option>
										<option value="501">회원가입발급</option>
										<option value="502">생일발급</option>
									</select>
								</td>
							</tr>
							<tr>
								<th>등록일자</th>
								<td colspan="3">
									<div class="label_wrap">
										<div class="period_inp">
											<input
												type="text"
												id="sregdts"
												name="sregdts"
												value=""
												maxlength="10"
												class="text_input"
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
											/><!-- 
					//--><img
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
									</div>
								</td>
							</tr>
							<tr>
								<th>진행기간</th>
								<td colspan="3">
									<div class="label_wrap">
										<div class="period_inp">
											<input
												type="text"
												id="srundts"
												name="srundts"
												value=""
												maxlength="10"
												class="text_input"
											/><!-- 
						//--><img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'srundts', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
										~
										<div class="period_inp">
											<input
												type="text"
												id="srundte"
												name="srundte"
												value=""
												maxlength="10"
												class="text_input"
											/><!-- 
						//--><img
												src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
												onclick="calendar.open(event, 'srundte', 'YYYY-MM-DD')"
												style="vertical-align: middle"
											/>
										</div>
										<div class="period_btn">
											<button
												type="button"
												class="btn_sec sm active"
												onclick="inperiod.input('srundts', 'srundte')"
											>
												전체
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('srundts', 'srundte', 't')"
											>
												오늘
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('srundts', 'srundte', 't', -1)"
											>
												어제
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('srundts', 'srundte', 'd', -3)"
											>
												3일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('srundts', 'srundte', 'd', -7)"
											>
												7일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('srundts', 'srundte', 'd', -10)"
											>
												10일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('srundts', 'srundte', 'd', -20)"
											>
												20일간
											</button>
											<button
												type="button"
												class="btn_sec sm"
												onclick="inperiod.input('srundts', 'srundte', 'd', -30)"
											>
												30일간
											</button>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<th>진행여부</th>
								<td colspan="3">
									<div class="label_wrap">
										<label
											><input
												type="radio"
												name="srun"
												value="0"
												checked=""
											/>전체</label
										>
										<label
											><input type="radio" name="srun" value="1" />대기</label
										>
										<label
											><input type="radio" name="srun" value="2" />진행중</label
										>
										<label
											><input type="radio" name="srun" value="3" />종료</label
										>
									</div>
								</td>
							</tr>
							<tr>
								<th>쿠폰명 검색</th>
								<td colspan="3">
									<input
										type="text"
										name="sword"
										value=""
										class="text_input wide"
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
				<form name="Frm" method="post" enctype="multipart/form-data">
					<input type="hidden" name="mode" />
					<input type="hidden" name="idx" />
					<input
						type="hidden"
						name="params"
						value="736B696E643D5E736D6574686F643D5E737265676474733D5E737265676474653D5E7372756E6474733D5E7372756E6474653D5E7372756E3D305E73776F72643D5E706167653D31"
					/>

					<div class="btn_right">
						<select name="kind">
							<option value="">선택</option>
							<option value="100">상품할인쿠폰</option>
							<option value="300">무료배송쿠폰</option>
							<option value="200">주문할인쿠폰</option>
						</select>
						<button type="button" class="btn_pri sm" onclick="reg()">
							쿠폰등록
						</button>
						<button type="button" class="btn_sec sm" onclick="delList()">
							선택삭제
						</button>
					</div>

					<table
						cellspacing="0"
						cellpadding="0"
						border="0"
						width="100%"
						class="t_list mgt20"
					>
						<caption>
							등록된 쿠폰 내역
						</caption>
						<colgroup>
							<col width="40" />
							<col width="5%" />
							<col width="7%" />
							<col width="7%" />
							<col width="*" />
							<col width="10%" />
							<col width="10%" />
							<col width="13%" />
							<col width="9%" />
							<col width="7%" />
							<col width="60" />
						</colgroup>
						<thead>
							<tr>
								<th>
									<label
										><input
											type="checkbox"
											name="cbListAll"
											onclick="checkCbAll(this.form.cbList, this.checked)"
										/>전체검색</label
									>
								</th>
								<th>No</th>
								<th>쿠폰종류</th>
								<th>발급방법</th>
								<th>쿠폰명</th>
								<th>할인폭</th>
								<th>진행기간</th>
								<th>적용등급</th>
								<th>사용/발행</th>
								<th>등록일자</th>
								<th>메뉴</th>
							</tr>
						</thead>
						<tbody>
							<tr
								onmouseover="this.style.backgroundColor='#fdfae8'"
								onmouseout="this.style.backgroundColor='#ffffff'"
							>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="354"
											usedqty="0"
										/>선택</label
									>
								</td>
								<td>68</td>
								<td>상품할인쿠폰</td>
								<td>구매완료보상발급</td>
								<td class="left break">
									test 0719 03 / 상품할인쿠폰 - 구매완료보상발급
								</td>
								<td>10%</td>
								<td>2023-07-17~<br />2023-07-21</td>
								<td>전체회원</td>
								<td>
									<a
										href="javascript:;"
										onclick="openIssueList(354); return false;"
										>0/0장</a
									>
								</td>
								<td>2023.07.19</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="edit(354)">
										수정
									</button>
								</td>
							</tr>

							<tr
								onmouseover="this.style.backgroundColor='#fdfae8'"
								onmouseout="this.style.backgroundColor='#ffffff'"
							>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="353"
											usedqty="0"
										/>선택</label
									>
								</td>
								<td>67</td>
								<td>무료배송쿠폰</td>
								<td>구매완료보상발급</td>
								<td class="left break">
									test 0719 02 / 무료배송쿠폰 - 구매완료보상발급 e
								</td>
								<td>배송비 무료</td>
								<td>2023-07-19~<br />2023-07-25</td>
								<td>전체회원</td>
								<td>
									<a
										href="javascript:;"
										onclick="openIssueList(353); return false;"
										>0/0장</a
									>
								</td>
								<td>2023.07.19</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="edit(353)">
										수정
									</button>
								</td>
							</tr>

							<tr
								onmouseover="this.style.backgroundColor='#fdfae8'"
								onmouseout="this.style.backgroundColor='#ffffff'"
							>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="352"
											usedqty="0"
										/>선택</label
									>
								</td>
								<td>66</td>
								<td>상품할인쿠폰</td>
								<td>상품발급</td>
								<td class="left break">
									test 0719 01 / 상품할인쿠폰 - 상품발급
								</td>
								<td>1,000원</td>
								<td>2023-07-19~<br />2023-07-25</td>
								<td>전체회원</td>
								<td>
									<a
										href="javascript:;"
										onclick="openIssueList(352); return false;"
										>0/1장</a
									>
								</td>
								<td>2023.07.19</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="edit(352)">
										수정
									</button>
								</td>
							</tr>

							<tr
								onmouseover="this.style.backgroundColor='#fdfae8'"
								onmouseout="this.style.backgroundColor='#ffffff'"
							>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="351"
											usedqty="0"
										/>선택</label
									>
								</td>
								<td>65</td>
								<td>상품할인쿠폰</td>
								<td>회원선택발급</td>
								<td class="left break">상품쿠폰테스트(다수상품적용)</td>
								<td>1,000원</td>
								<td>-</td>
								<td>전체회원</td>
								<td>
									<a
										href="javascript:;"
										onclick="openIssueList(351); return false;"
										>0/2장</a
									>
								</td>
								<td>2022.04.18</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="edit(351)">
										수정
									</button>
								</td>
							</tr>

							<tr
								onmouseover="this.style.backgroundColor='#fdfae8'"
								onmouseout="this.style.backgroundColor='#ffffff'"
							>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="350"
											usedqty="0"
										/>선택</label
									>
								</td>
								<td>64</td>
								<td>무료배송쿠폰</td>
								<td>회원선택발급</td>
								<td class="left break">취소후재발급test</td>
								<td>배송비 무료</td>
								<td>-</td>
								<td>전체회원</td>
								<td>
									<a
										href="javascript:;"
										onclick="openIssueList(350); return false;"
										>0/1장</a
									>
								</td>
								<td>2022.02.22</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="edit(350)">
										수정
									</button>
								</td>
							</tr>

							<tr
								onmouseover="this.style.backgroundColor='#fdfae8'"
								onmouseout="this.style.backgroundColor='#ffffff'"
							>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="349"
											usedqty="1"
										/>선택</label
									>
								</td>
								<td>63</td>
								<td>주문할인쿠폰</td>
								<td>회원선택발급</td>
								<td class="left break">30%</td>
								<td>30%</td>
								<td>-</td>
								<td>전체회원</td>
								<td>
									<a
										href="javascript:;"
										onclick="openIssueList(349); return false;"
										>1/1장</a
									>
								</td>
								<td>2022.01.27</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="edit(349)">
										수정
									</button>
								</td>
							</tr>

							<tr
								onmouseover="this.style.backgroundColor='#fdfae8'"
								onmouseout="this.style.backgroundColor='#ffffff'"
							>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="348"
											usedqty="1"
										/>선택</label
									>
								</td>
								<td>62</td>
								<td>상품할인쿠폰</td>
								<td>회원선택발급</td>
								<td class="left break">20%</td>
								<td>20%</td>
								<td>-</td>
								<td>전체회원</td>
								<td>
									<a
										href="javascript:;"
										onclick="openIssueList(348); return false;"
										>1/1장</a
									>
								</td>
								<td>2022.01.27</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="edit(348)">
										수정
									</button>
								</td>
							</tr>

							<tr
								onmouseover="this.style.backgroundColor='#fdfae8'"
								onmouseout="this.style.backgroundColor='#ffffff'"
							>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="347"
											usedqty="0"
										/>선택</label
									>
								</td>
								<td>61</td>
								<td>상품할인쿠폰</td>
								<td>상품발급</td>
								<td class="left break">젠장</td>
								<td>10%</td>
								<td>2021-12-13~<br />2021-12-14</td>
								<td>전체회원</td>
								<td>
									<a
										href="javascript:;"
										onclick="openIssueList(347); return false;"
										>0/0장</a
									>
								</td>
								<td>2021.12.13</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="edit(347)">
										수정
									</button>
								</td>
							</tr>

							<tr
								onmouseover="this.style.backgroundColor='#fdfae8'"
								onmouseout="this.style.backgroundColor='#ffffff'"
							>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="346"
											usedqty="0"
										/>선택</label
									>
								</td>
								<td>60</td>
								<td>상품할인쿠폰</td>
								<td>구매완료보상발급</td>
								<td class="left break">구매완료보상 발급 쿠폰 테스트</td>
								<td>5,000원</td>
								<td>2021-12-08~<br />2021-12-10</td>
								<td>전체회원</td>
								<td>
									<a
										href="javascript:;"
										onclick="openIssueList(346); return false;"
										>0/1장</a
									>
								</td>
								<td>2021.12.08</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="edit(346)">
										수정
									</button>
								</td>
							</tr>

							<tr
								onmouseover="this.style.backgroundColor='#fdfae8'"
								onmouseout="this.style.backgroundColor='#ffffff'"
							>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="345"
											usedqty="2"
										/>선택</label
									>
								</td>
								<td>59</td>
								<td>주문할인쿠폰</td>
								<td>회원선택발급</td>
								<td class="left break">3만원 제한쿠폰</td>
								<td>10%</td>
								<td>-</td>
								<td>전체회원</td>
								<td>
									<a
										href="javascript:;"
										onclick="openIssueList(345); return false;"
										>2/3장</a
									>
								</td>
								<td>2021.11.10</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="edit(345)">
										수정
									</button>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="paging" style="margin-top: 20px">
						<span
							><a
								href="/nmanager/promotion/coupon_list?page=1&amp;skind=&amp;smethod=&amp;sregdts=&amp;sregdte=&amp;srundts=&amp;srundte=&amp;srun=0&amp;sword="
								><strong class="active">1</strong></a
							><a
								href="/nmanager/promotion/coupon_list?page=2&amp;skind=&amp;smethod=&amp;sregdts=&amp;sregdte=&amp;srundts=&amp;srundte=&amp;srun=0&amp;sword="
								><span class="num">2</span></a
							><a
								href="/nmanager/promotion/coupon_list?page=3&amp;skind=&amp;smethod=&amp;sregdts=&amp;sregdte=&amp;srundts=&amp;srundte=&amp;srun=0&amp;sword="
								><span class="num">3</span></a
							><a
								href="/nmanager/promotion/coupon_list?page=4&amp;skind=&amp;smethod=&amp;sregdts=&amp;sregdte=&amp;srundts=&amp;srundte=&amp;srun=0&amp;sword="
								><span class="num">4</span></a
							><a
								href="/nmanager/promotion/coupon_list?page=5&amp;skind=&amp;smethod=&amp;sregdts=&amp;sregdte=&amp;srundts=&amp;srundte=&amp;srun=0&amp;sword="
								><span class="num">5</span></a
							><a
								href="/nmanager/promotion/coupon_list?page=6&amp;skind=&amp;smethod=&amp;sregdts=&amp;sregdte=&amp;srundts=&amp;srundte=&amp;srun=0&amp;sword="
								><span class="num">6</span></a
							><a
								href="/nmanager/promotion/coupon_list?page=7&amp;skind=&amp;smethod=&amp;sregdts=&amp;sregdte=&amp;srundts=&amp;srundte=&amp;srun=0&amp;sword="
								><span class="num">7</span></a
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

<style></style>
