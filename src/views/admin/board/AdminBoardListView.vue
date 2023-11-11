<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				입점업체 공지사항<button
					id="addBmark"
					onclick="addBookmark('입점업체 공지사항')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>입점업체관리</li>
				<li>입점업체관리</li>
				<li>입점업체 공지사항</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>입점업체에게 공지하고 싶은 내용을 적어 주세요.</li>
		</ul>

		<link rel="stylesheet" type="text/css" href="/css/board.css" />

		<!-- <script type="text/javascript">
			function validSearch(f) {
				if (f.targetBoard) {
					f.targetBoard.disabled = true;
				}
			}

			function change() {
				var f = document.Frm;
				validSearch(f);
				f.submit();
			}

			function del(idx) {
				var f = document.Frm;

				if (
					confirm(
						'선택한 게시물을 삭제하시겠습니까?\n\n-답글이 존재할 경우 답글도 함께 삭제됩니다.',
					)
				) {
					addInput(f, 'hidden', 'board_path', '/nmanager/board');
					addInput(f, 'hidden', 'pidx', idx);
					addInput(f, 'hidden', 'params', '706167653D31');

					f.method = 'post';
					f.action = 'del_act';
					f.submit();
				}
			}

			$(function () {
				$('.adjust_image_container').adjustImage();

				$('#tdEmpty').attr(
					'colspan',
					$('table.board_list_ver thead tr th').length,
				);
			});
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<div style="width: 100%; margin: 0 auto; overflow: hidden">
					<form name="Frm" method="get" onsubmit="return validSearch(this)">
						<input type="hidden" name="board" value="mim_notice" />

						<!-- 일반, 자료실형 -->

						<table class="board_list_ver">
							<caption>
								게시판 목록
							</caption>
							<colgroup>
								<col width="5%" />

								<col width="8%" />

								<col width="*" />
								<col width="12%" />
								<col width="12%" />
								<col width="10%" />
							</colgroup>
							<thead>
								<tr>
									<th>
										<input
											type="checkbox"
											name="cbAll"
											onclick="checkCbAll(this.form.pidx, this.checked)"
										/>
									</th>

									<th>번호</th>

									<th>제목</th>
									<th>글쓴이</th>
									<th>등록일</th>
									<th>조회수</th>
								</tr>
							</thead>
							<tbody>
								<!-- 관리자 공지 : 시작 -->

								<tr class="admin">
									<td>
										<input type="checkbox" name="pidx" value="118" thread="1" />
									</td>

									<td>공지</td>

									<td class="title">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=118&amp;params=373036313637363533443331"
											>55555</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2021-03-09</td>
									<td>2</td>
								</tr>

								<tr class="admin">
									<td>
										<input type="checkbox" name="pidx" value="94" thread="1" />
									</td>

									<td>공지</td>

									<td class="title">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=94&amp;params=373036313637363533443331"
											>게시판 테스트6</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2020-12-15</td>
									<td>17</td>
								</tr>

								<tr class="admin">
									<td>
										<input type="checkbox" name="pidx" value="40" thread="1" />
									</td>

									<td>공지</td>

									<td class="title">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=40&amp;params=373036313637363533443331"
											>첨부파일 테스트11</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2018-07-20</td>
									<td>17</td>
								</tr>

								<tr class="admin">
									<td>
										<input type="checkbox" name="pidx" value="13" thread="1" />
									</td>

									<td>공지</td>

									<td class="title">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=13&amp;params=373036313637363533443331"
											>첨부파일 테스트입니다.</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2017-09-21</td>
									<td>69</td>
								</tr>

								<tr class="admin">
									<td>
										<input type="checkbox" name="pidx" value="8" thread="1" />
									</td>

									<td>공지</td>

									<td class="title">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=8&amp;params=373036313637363533443331"
											>판매자 공지사항입니다.</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2016-07-11</td>
									<td>63</td>
								</tr>

								<!-- 관리자 공지 : 끝 -->
								<!-- 게시물 목록 : 시작 -->

								<tr class="">
									<td>
										<input
											type="checkbox"
											name="pidx"
											value="133"
											class="check"
											thread="1"
										/>
									</td>

									<td>1</td>

									<td class="title" style="padding-left: 10px">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=133&amp;params=706167653D31"
											>k11111</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2021-03-09</td>
									<td>27</td>
								</tr>

								<tr class="">
									<td>
										<input
											type="checkbox"
											name="pidx"
											value="132"
											class="check"
											thread="1"
										/>
									</td>

									<td>2</td>

									<td class="title" style="padding-left: 10px">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=132&amp;params=706167653D31"
											>j11111</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2021-03-09</td>
									<td>10</td>
								</tr>

								<tr class="">
									<td>
										<input
											type="checkbox"
											name="pidx"
											value="131"
											class="check"
											thread="1"
										/>
									</td>

									<td>3</td>

									<td class="title" style="padding-left: 10px">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=131&amp;params=706167653D31"
											>i11111</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2021-03-09</td>
									<td>4</td>
								</tr>

								<tr class="">
									<td>
										<input
											type="checkbox"
											name="pidx"
											value="130"
											class="check"
											thread="1"
										/>
									</td>

									<td>4</td>

									<td class="title" style="padding-left: 10px">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=130&amp;params=706167653D31"
											>h11111</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2021-03-09</td>
									<td>1</td>
								</tr>

								<tr class="">
									<td>
										<input
											type="checkbox"
											name="pidx"
											value="129"
											class="check"
											thread="1"
										/>
									</td>

									<td>5</td>

									<td class="title" style="padding-left: 10px">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=129&amp;params=706167653D31"
											>g11111</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2021-03-09</td>
									<td>2</td>
								</tr>

								<tr class="">
									<td>
										<input
											type="checkbox"
											name="pidx"
											value="128"
											class="check"
											thread="1"
										/>
									</td>

									<td>6</td>

									<td class="title" style="padding-left: 10px">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=128&amp;params=706167653D31"
											>f11111</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2021-03-09</td>
									<td>0</td>
								</tr>

								<tr class="">
									<td>
										<input
											type="checkbox"
											name="pidx"
											value="127"
											class="check"
											thread="1"
										/>
									</td>

									<td>7</td>

									<td class="title" style="padding-left: 10px">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=127&amp;params=706167653D31"
											>e11111</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2021-03-09</td>
									<td>0</td>
								</tr>

								<tr class="">
									<td>
										<input
											type="checkbox"
											name="pidx"
											value="126"
											class="check"
											thread="1"
										/>
									</td>

									<td>8</td>

									<td class="title" style="padding-left: 10px">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=126&amp;params=706167653D31"
											>d11111</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2021-03-09</td>
									<td>1</td>
								</tr>

								<tr class="">
									<td>
										<input
											type="checkbox"
											name="pidx"
											value="125"
											class="check"
											thread="1"
										/>
									</td>

									<td>9</td>

									<td class="title" style="padding-left: 10px">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=125&amp;params=706167653D31"
											>c11111</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2021-03-09</td>
									<td>2</td>
								</tr>

								<tr class="">
									<td>
										<input
											type="checkbox"
											name="pidx"
											value="124"
											class="check"
											thread="1"
										/>
									</td>

									<td>10</td>

									<td class="title" style="padding-left: 10px">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=124&amp;params=706167653D31"
											>b11111</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2021-03-09</td>
									<td>0</td>
								</tr>

								<tr class="">
									<td>
										<input
											type="checkbox"
											name="pidx"
											value="123"
											class="check"
											thread="1"
										/>
									</td>

									<td>11</td>

									<td class="title" style="padding-left: 10px">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=123&amp;params=706167653D31"
											>00000</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2021-03-09</td>
									<td>1</td>
								</tr>

								<tr class="">
									<td>
										<input
											type="checkbox"
											name="pidx"
											value="122"
											class="check"
											thread="1"
										/>
									</td>

									<td>12</td>

									<td class="title" style="padding-left: 10px">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=122&amp;params=706167653D31"
											>99999</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2021-03-09</td>
									<td>0</td>
								</tr>

								<tr class="">
									<td>
										<input
											type="checkbox"
											name="pidx"
											value="121"
											class="check"
											thread="1"
										/>
									</td>

									<td>13</td>

									<td class="title" style="padding-left: 10px">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=121&amp;params=706167653D31"
											>88888</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2021-03-09</td>
									<td>2</td>
								</tr>

								<tr class="">
									<td>
										<input
											type="checkbox"
											name="pidx"
											value="120"
											class="check"
											thread="1"
										/>
									</td>

									<td>14</td>

									<td class="title" style="padding-left: 10px">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=120&amp;params=706167653D31"
											>77777</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2021-03-09</td>
									<td>0</td>
								</tr>

								<tr class="">
									<td>
										<input
											type="checkbox"
											name="pidx"
											value="119"
											class="check"
											thread="1"
										/>
									</td>

									<td>15</td>

									<td class="title" style="padding-left: 10px">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=119&amp;params=706167653D31"
											>66666</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2021-03-09</td>
									<td>1</td>
								</tr>

								<tr class="">
									<td>
										<input
											type="checkbox"
											name="pidx"
											value="117"
											class="check"
											thread="1"
										/>
									</td>

									<td>16</td>

									<td class="title" style="padding-left: 10px">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=117&amp;params=706167653D31"
											>44444</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2021-03-09</td>
									<td>10</td>
								</tr>

								<tr class="">
									<td>
										<input
											type="checkbox"
											name="pidx"
											value="116"
											class="check"
											thread="1"
										/>
									</td>

									<td>17</td>

									<td class="title" style="padding-left: 10px">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=116&amp;params=706167653D31"
											>33333</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2021-03-09</td>
									<td>0</td>
								</tr>

								<tr class="">
									<td>
										<input
											type="checkbox"
											name="pidx"
											value="115"
											class="check"
											thread="1"
										/>
									</td>

									<td>18</td>

									<td class="title" style="padding-left: 10px">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=115&amp;params=706167653D31"
											>22222</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2021-03-09</td>
									<td>4</td>
								</tr>

								<tr class="">
									<td>
										<input
											type="checkbox"
											name="pidx"
											value="41"
											class="check"
											thread="1"
										/>
									</td>

									<td>19</td>

									<td class="title" style="padding-left: 10px">
										<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=41&amp;params=706167653D31"
											>teststest</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2018-07-20</td>
									<td>15</td>
								</tr>

								<tr class="">
									<td>
										<input
											type="checkbox"
											name="pidx"
											value="136"
											class="check"
											thread="2"
										/>
									</td>

									<td>20</td>

									<td class="title" style="padding-left: 10px">
										<img
											src="//bootdev.mallstore.co.kr/imgs/icon/ico_reply.gif"
											alt="REPLY"
										/>&nbsp;<a
											href="content?board=mim_notice&amp;board_group=0&amp;pidx=136&amp;params=706167653D31"
											>Re: teststest</a
										>
									</td>
									<td>내친구네트웍스</td>
									<td>2021-06-07</td>
									<td>9</td>
								</tr>
							</tbody>
						</table>

						<!-- <script type="text/javascript">
							function delList() {
								var f = document.Frm;

								if (typeof f.pidx == 'undefined') {
									return false;
								}

								var checker = 0;
								if (typeof f.pidx.length == 'undefined') {
									if (f.pidx.checked) ++checker;
								} else {
									for (var i = 0; i < f.pidx.length; i++) {
										if (f.pidx[i].checked) ++checker;
									}
								}

								if (checker == 0) {
									alert('삭제할 게시물을 선택해 주세요.');
									return false;
								}

								if (
									confirm(
										'선택한 게시물을 삭제하시겠습니까?\n\n-답글이 존재할 경우 답글도 함께 삭제됩니다.',
									)
								) {
									addInput(f, 'hidden', 'mode', 'DEL');
									addInput(f, 'hidden', 'redirect', document.URL);

									f.method = 'post';
									f.action = 'manage_act';
									f.submit();
								}
							}

							function moveList() {
								var f = document.Frm;

								if (typeof f.pidx == 'undefined') {
									return false;
								}

								var checker = 0;
								if (typeof f.pidx.length == 'undefined') {
									if (f.pidx.checked) {
										if (
											f.pidx.getAttribute('thread').toString().toNumeric() > 1
										) {
											alert('답글은 이동할 수 없습니다.');
											return false;
										}
										++checker;
									}
								} else {
									for (var i = 0; i < f.pidx.length; i++) {
										if (f.pidx[i].checked) {
											if (
												f.pidx[i]
													.getAttribute('thread')
													.toString()
													.toNumeric() > 1
											) {
												alert('답글은 이동할 수 없습니다.');
												return false;
											}
											++checker;
										}
									}
								}

								if (checker == 0) {
									alert('이동할 게시물을 선택해 주세요.');
									return false;
								}

								if (isEmpty(f.targetBoard)) {
									alert('게시판을 선택해 주세요.');
									f.targetBoard.focus();
									return false;
								}
								/*
	var objOption = f.targetBoard.options[f.targetBoard.selectedIndex];
	if (objOption.getAttribute('btype') == '200') {
		switch ('100') {
			case '100':
			case '300':
				alert("현재 게시판의 게시물은 앨범형 게시판으로 이동할 수 없습니다.");
				f.targetBoard.focus();
				return false;
			break;
		}
	}
*/
								if (
									confirm(
										'선택한 게시물을 이동하시겠습니까?\n\n-답글이 존재할 경우 답글도 함께 이동됩니다.',
									)
								) {
									addInput(f, 'hidden', 'mode', 'MOVE');
									addInput(f, 'hidden', 'redirect', document.URL);

									f.method = 'post';
									f.action = 'manage_act';
									f.submit();
								}
							}

							function copyList() {
								var f = document.Frm;

								if (typeof f.pidx == 'undefined') {
									return false;
								}

								var checker = 0;
								if (typeof f.pidx.length == 'undefined') {
									if (f.pidx.checked) ++checker;
								} else {
									for (var i = 0; i < f.pidx.length; i++) {
										if (f.pidx[i].checked) ++checker;
									}
								}

								if (checker == 0) {
									alert('복사할 게시물을 선택해 주세요.');
									return false;
								}

								if (isEmpty(f.targetBoard)) {
									alert('게시판을 선택해 주세요.');
									f.targetBoard.focus();
									return false;
								}
								/*
	var objOption = f.targetBoard.options[f.targetBoard.selectedIndex];
	if (objOption.getAttribute('btype') == '200') {
		switch ('100') {
			case '100':
			case '300':
				alert("현재 게시판의 게시물은 앨범형 게시판으로 이동할 수 없습니다.");
				f.targetBoard.focus();
				return false;
			break;
		}
	}
*/
								if (confirm('선택한 게시물을 복사하시겠습니까?')) {
									addInput(f, 'hidden', 'mode', 'COPY');
									addInput(f, 'hidden', 'redirect', document.URL);

									f.method = 'post';
									f.action = 'manage_act';
									f.submit();
								}
							}
							//]]>
						</script> -->

						<!-- 버튼 -->
						<div class="board_button">
							<div class="ltb">
								<button type="button" onclick="delList()" class="btnIn">
									삭제
								</button>
								<select id="targetBoard" name="targetBoard">
									<option value="">:: 게시판 선택 ::</option>

									<option value="notice" btype="100">공지사항</option>

									<option value="mim_notice" btype="100">
										입점업체 공지사항
									</option>

									<option value="mim_qna" btype="100">입점업체 게시판</option>

									<option value="mim_pds" btype="300">입점업체 자료실</option>

									<option value="album" btype="200">앨범형게시판</option>
								</select>
								<button type="button" onclick="moveList()" class="btnIn">
									이동
								</button>
								<button type="button" onclick="copyList()" class="btnIn">
									복사
								</button>
							</div>

							<div class="rtb">
								<a
									href="write?board=mim_notice&amp;board_group=0&amp;params=706167653D31"
									class="btnIn"
									>새글쓰기</a
								>
							</div>
						</div>

						<!-- paging -->
						<div class="board_paging">
							<div class="left"></div>
							<div class="page-num">
								<a
									class="active"
									href="/nmanager/board/list?page=1&amp;board=mim_notice&amp;board_group=0&amp;"
									>1</a
								>
							</div>
							<div class="right"></div>
						</div>
						<!-- //paging -->

						<!-- 검색 -->
						<div class="board_search">
							<strong><span class="x_highlight"></span> 검색</strong>
							<select id="skey" name="skey">
								<option value="subject">제목</option>
								<option value="writer">글쓴이</option>
								<option value="content">내용</option>
							</select>
							<input type="text" size="30" class="txt" name="sword" value="" />
							<button type="submit" class="smallbutton">검색</button>
						</div>
						<!-- //검색 -->
					</form>
				</div>
			</section>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style></style>
