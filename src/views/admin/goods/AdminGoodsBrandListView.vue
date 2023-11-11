<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				브랜드관리<button
					id="addBmark"
					onclick="addBookmark('브랜드관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>상품관리</li>
				<li>상품관리</li>
				<li>브랜드관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>각 디렉토리별로 브랜드별 정리를 하실 수 있는 곳입니다.</li>
			<li>
				브랜드명을 적으시고 추가 해 주시면 상품등록에서 브랜드를 선택해 주시면
				됩니다.
			</li>
		</ul>

		<!-- <style type="text/css">
			.table_col tr.current {
				border: 1px solid #336699;
				background-color: #dfdfff;
			}
			.table_col th.check,
			.table_col td.check {
				cursor: pointer;
			}
		</style>

		<script type="text/javascript" src="/jscript/SelectCategory.js"></script>
		<script type="text/javascript">
			function reg() {
				location.href = 'brand_reg';
			}

			function edit(idx) {
				location.href =
					'brand_reg?idx=' +
					idx +
					'&params=736B65793D5E73776F72643D5E706167653D31';
			}

			function del(idx) {
				var f = document.Frm;

				if (confirm('삭제하시겠습니까?')) {
					$('.wrap-loading').show();
					f.mode.value = 'DEL';
					f.idx.value = idx;
					f.method = 'post';
					f.encoding = 'multipart/form-data';
					f.action = 'brand_act';
					f.submit();
				}
			}

			$(function () {
				$('.adjust_image_container').adjustImage({
					realtime: true,
				});

				$('.original').laybox();
			});
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form name="sFrm" method="post" action="brand_list">
					<table
						cellspacing="0"
						cellpadding="0"
						border="0"
						width="100%"
						class="t_form"
					>
						<caption>
							상품 검색 폼
						</caption>
						<colgroup>
							<col width="160" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>브랜드명</th>
								<td>
									<select id="skey" name="skey" style="display: none">
										<option value="name"></option>
									</select>
									<input
										type="text"
										name="sword"
										value=""
										class="text_input w300px mgl5"
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
				<form name="Frm" method="post">
					<input type="hidden" name="mode" />
					<input type="hidden" name="idx" />
					<input type="hidden" name="idxs" />
					<input
						type="hidden"
						name="params"
						value="736B65793D5E73776F72643D5E706167653D31"
					/>
					<div class="section_head">
						<h4 class="total">
							총 <strong>15</strong>개의 브랜드가 검색되었습니다.
						</h4>
						<button type="button" class="btn_sec sm" onclick="reg()">
							추가하기
						</button>
					</div>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="table_col"
						id="brandListTable"
					>
						<caption>
							등록된 배너 리스트
						</caption>
						<colgroup>
							<col width="50" />
							<col width="100" />
							<col width="*" />
							<col width="*" />
							<col width="100" />
						</colgroup>
						<thead>
							<tr>
								<th>No</th>
								<th>브랜드코드</th>
								<th>이미지</th>
								<th>브랜드명</th>
								<th>관리</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>15</td>
								<td>64</td>
								<td class="imgh50">
									<div class="adjust_image_container">
										<a
											href="//bootdev.mallstore.co.kr/data/base/brand/thumb_e4ee7f7021ca4938b9b06b7a01b30d35.jpg"
											class="original"
											><img
												src="//bootdev.mallstore.co.kr/data/base/brand/thumb_e4ee7f7021ca4938b9b06b7a01b30d35.jpg"
												ow="100"
												oh="28"
										/></a>
									</div>
								</td>
								<td>입점사[브랜드]테스트</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(64)">
										삭제
									</button>
									<button type="button" class="btn_sec sm" onclick="edit(64)">
										수정
									</button>
								</td>
							</tr>

							<tr>
								<td>14</td>
								<td>62</td>
								<td class="imgh50">
									<div class="adjust_image_container">
										<a
											href="//bootdev.mallstore.co.kr/data/base/brand/thumb_c6f307f6e7f343d784280a127a1ac0f0.jpg"
											class="original"
											><img
												src="//bootdev.mallstore.co.kr/data/base/brand/thumb_c6f307f6e7f343d784280a127a1ac0f0.jpg"
												ow="100"
												oh="28"
										/></a>
									</div>
								</td>
								<td>베르사체</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(62)">
										삭제
									</button>
									<button type="button" class="btn_sec sm" onclick="edit(62)">
										수정
									</button>
								</td>
							</tr>

							<tr>
								<td>13</td>
								<td>61</td>
								<td class="imgh50">
									<div class="adjust_image_container">
										<a
											href="//bootdev.mallstore.co.kr/data/base/brand/thumb_25c797a37bf34acbbeea7f0d07890228.jpg"
											class="original"
											><img
												src="//bootdev.mallstore.co.kr/data/base/brand/thumb_25c797a37bf34acbbeea7f0d07890228.jpg"
												ow="100"
												oh="33"
										/></a>
									</div>
								</td>
								<td>코치</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(61)">
										삭제
									</button>
									<button type="button" class="btn_sec sm" onclick="edit(61)">
										수정
									</button>
								</td>
							</tr>

							<tr>
								<td>12</td>
								<td>60</td>
								<td class="imgh50">
									<div class="adjust_image_container">
										<a
											href="//bootdev.mallstore.co.kr/data/base/brand/thumb_44f2094f10944cccbdf98254f082cd29.jpg"
											class="original"
											><img
												src="//bootdev.mallstore.co.kr/data/base/brand/thumb_44f2094f10944cccbdf98254f082cd29.jpg"
												ow="100"
												oh="32"
										/></a>
									</div>
								</td>
								<td>티파니</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(60)">
										삭제
									</button>
									<button type="button" class="btn_sec sm" onclick="edit(60)">
										수정
									</button>
								</td>
							</tr>

							<tr>
								<td>11</td>
								<td>59</td>
								<td class="imgh50">
									<div class="adjust_image_container">
										<a
											href="//bootdev.mallstore.co.kr/data/base/brand/thumb_52db9b0cd410450dba3eea20f538c348.jpg"
											class="original"
											><img
												src="//bootdev.mallstore.co.kr/data/base/brand/thumb_52db9b0cd410450dba3eea20f538c348.jpg"
												ow="100"
												oh="32"
										/></a>
									</div>
								</td>
								<td>보스 까르띠에</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(59)">
										삭제
									</button>
									<button type="button" class="btn_sec sm" onclick="edit(59)">
										수정
									</button>
								</td>
							</tr>

							<tr>
								<td>10</td>
								<td>58</td>
								<td class="imgh50">
									<div class="adjust_image_container">
										<a
											href="//bootdev.mallstore.co.kr/data/base/brand/thumb_87a72b6403dd438eb9c748314bdaab7d.jpg"
											class="original"
											><img
												src="//bootdev.mallstore.co.kr/data/base/brand/thumb_87a72b6403dd438eb9c748314bdaab7d.jpg"
												ow="100"
												oh="35"
										/></a>
									</div>
								</td>
								<td>아르마니</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(58)">
										삭제
									</button>
									<button type="button" class="btn_sec sm" onclick="edit(58)">
										수정
									</button>
								</td>
							</tr>

							<tr>
								<td>9</td>
								<td>56</td>
								<td class="imgh50">
									<div class="adjust_image_container">
										<a
											href="//bootdev.mallstore.co.kr/data/base/brand/thumb_4e3771ec54c542b2891c377ec8efb057.jpg"
											class="original"
											><img
												src="//bootdev.mallstore.co.kr/data/base/brand/thumb_4e3771ec54c542b2891c377ec8efb057.jpg"
												ow="100"
												oh="37"
										/></a>
									</div>
								</td>
								<td>샤넬</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(56)">
										삭제
									</button>
									<button type="button" class="btn_sec sm" onclick="edit(56)">
										수정
									</button>
								</td>
							</tr>

							<tr>
								<td>8</td>
								<td>54</td>
								<td class="imgh50">
									<div class="adjust_image_container">
										<a
											href="//bootdev.mallstore.co.kr/data/base/brand/thumb_4654f03bdc244c18929b2241b5de68cc.jpg"
											class="original"
											><img
												src="//bootdev.mallstore.co.kr/data/base/brand/thumb_4654f03bdc244c18929b2241b5de68cc.jpg"
												ow="100"
												oh="32"
										/></a>
									</div>
								</td>
								<td>루이비통</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(54)">
										삭제
									</button>
									<button type="button" class="btn_sec sm" onclick="edit(54)">
										수정
									</button>
								</td>
							</tr>

							<tr>
								<td>7</td>
								<td>53</td>
								<td class="imgh50">
									<div class="adjust_image_container">
										<a
											href="//bootdev.mallstore.co.kr/data/base/brand/thumb_f8351b726dd649658b5b69354c1593c3.jpg"
											class="original"
											><img
												src="//bootdev.mallstore.co.kr/data/base/brand/thumb_f8351b726dd649658b5b69354c1593c3.jpg"
												ow="100"
												oh="35"
										/></a>
									</div>
								</td>
								<td>구찌</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(53)">
										삭제
									</button>
									<button type="button" class="btn_sec sm" onclick="edit(53)">
										수정
									</button>
								</td>
							</tr>

							<tr>
								<td>6</td>
								<td>52</td>
								<td class="imgh50">
									<div class="adjust_image_container">
										<a
											href="//bootdev.mallstore.co.kr/data/base/brand/thumb_ff0ff6e7aaca426e8a4bb1e1503a0318.jpg"
											class="original"
											><img
												src="//bootdev.mallstore.co.kr/data/base/brand/thumb_ff0ff6e7aaca426e8a4bb1e1503a0318.jpg"
												ow="100"
												oh="33"
										/></a>
									</div>
								</td>
								<td>버버리</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(52)">
										삭제
									</button>
									<button type="button" class="btn_sec sm" onclick="edit(52)">
										수정
									</button>
								</td>
							</tr>

							<tr>
								<td>5</td>
								<td>50</td>
								<td class="imgh50">
									<div class="adjust_image_container">
										<a
											href="//bootdev.mallstore.co.kr/data/base/brand/thumb_9bb32ddb5ce14e91826087c951af6b31.jpg"
											class="original"
											><img
												src="//bootdev.mallstore.co.kr/data/base/brand/thumb_9bb32ddb5ce14e91826087c951af6b31.jpg"
												ow="100"
												oh="38"
										/></a>
									</div>
								</td>
								<td>프라다</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(50)">
										삭제
									</button>
									<button type="button" class="btn_sec sm" onclick="edit(50)">
										수정
									</button>
								</td>
							</tr>

							<tr>
								<td>4</td>
								<td>44</td>
								<td class="imgh50">
									<div class="adjust_image_container">
										<a
											href="//bootdev.mallstore.co.kr/data/base/brand/thumb_c428bf4610584289b0da0f7d8ceefd8f.jpg"
											class="original"
											><img
												src="//bootdev.mallstore.co.kr/data/base/brand/thumb_c428bf4610584289b0da0f7d8ceefd8f.jpg"
												ow="100"
												oh="44"
										/></a>
									</div>
								</td>
								<td>에르메스</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(44)">
										삭제
									</button>
									<button type="button" class="btn_sec sm" onclick="edit(44)">
										수정
									</button>
								</td>
							</tr>

							<tr>
								<td>3</td>
								<td>39</td>
								<td class="imgh50">
									<div class="adjust_image_container">
										<a
											href="//bootdev.mallstore.co.kr/data/base/brand/thumb_b214506cbc5249f59bcf9b584c9d8b15.jpg"
											class="original"
											><img
												src="//bootdev.mallstore.co.kr/data/base/brand/thumb_b214506cbc5249f59bcf9b584c9d8b15.jpg"
												ow="100"
												oh="37"
										/></a>
									</div>
								</td>
								<td>불가리</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(39)">
										삭제
									</button>
									<button type="button" class="btn_sec sm" onclick="edit(39)">
										수정
									</button>
								</td>
							</tr>

							<tr>
								<td>2</td>
								<td>38</td>
								<td class="imgh50">
									<div class="adjust_image_container">
										<a
											href="//bootdev.mallstore.co.kr/data/base/brand/thumb_c7bcd12383f9485589236207e13eaa45.jpg"
											class="original"
											><img
												src="//bootdev.mallstore.co.kr/data/base/brand/thumb_c7bcd12383f9485589236207e13eaa45.jpg"
												ow="100"
												oh="36"
										/></a>
									</div>
								</td>
								<td>발리</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(38)">
										삭제
									</button>
									<button type="button" class="btn_sec sm" onclick="edit(38)">
										수정
									</button>
								</td>
							</tr>

							<tr>
								<td>1</td>
								<td>9</td>
								<td class="imgh50">
									<div class="adjust_image_container">
										<a
											href="//bootdev.mallstore.co.kr/data/base/brand/thumb_731abb3f851847419578ab6df751190c.jpg"
											class="original"
											><img
												src="//bootdev.mallstore.co.kr/data/base/brand/thumb_731abb3f851847419578ab6df751190c.jpg"
												ow="100"
												oh="36"
										/></a>
									</div>
								</td>
								<td>크리스찬 디올</td>
								<td>
									<button type="button" class="btn_sec sm" onclick="del(9)">
										삭제
									</button>
									<button type="button" class="btn_sec sm" onclick="edit(9)">
										수정
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</form>
				<div class="paging">
					<span
						><a href="/nmanager/goods/brand_list?page=1&amp;skey=&amp;sword="
							><strong class="active">1</strong></a
						></span
					>
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
