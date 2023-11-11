<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				카테고리관리<button
					id="addBmark"
					onclick="addBookmark('카테고리관리')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>상품관리</li>
				<li>카테고리관리</li>
				<li>카테고리관리</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>카테고리를 설정합니다.</li>
			<li>이미지파일은 GIF, JPG로 올려주시기 바랍니다.</li>
		</ul>

		<!-- <script type="text/javascript" src="/jscript/tree/cateTree.js"></script>
		<script
			type="text/javascript"
			src="/jscript/tree/cateTree.dragDrop.js"
		></script>
		<script
			type="text/javascript"
			src="/jscript/tree/cateTree.popupMenu.js"
		></script>
		<script type="text/javascript">
			function addCate(cate, name, depth, hidden, parent) {
				cateTree.add({
					no: cate,
					name: name,
					depth: depth,
					hidden: hidden,
					parent: parent,
				});
			}

			function editCate(cate, name, hidden) {
				cateTree.edit({
					no: cate,
					name: name,
					hidden: hidden,
				});
			}

			function removeCate(cate) {
				cateTree.remove(cate);
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<table id="frameBox">
					<colgroup>
						<col width="250" />
						<col width="40" />
						<col width="*" />
					</colgroup>
					<tbody>
						<tr>
							<th>
								<div class="border">
									<div class="menu">
										<ul>
											<li>
												<a
													href="javascript:;"
													onclick="cateTree.print('total'); return false;"
													class="total"
													>전체 펼쳐보기</a
												>
											</li>
											<li class="choice">
												<a
													href="javascript:;"
													onclick="cateTree.print('choice')"
													>전체 닫기</a
												>
											</li>
										</ul>
									</div>
									<div id="treeBox">
										<div id="category">
											<ul
												style="
													list-style: outside none;
													margin: 0px 0px 4px 15px;
													padding: 0px;
													background: url('http://javalocal.mallstore.co.kr/jscript/tree/images/tree_branch.gif')
														repeat-y;
												"
											>
												<li
													class="stair"
													style="
														line-height: 1px;
														font-size: 1px;
														margin-top: 0px;
													"
												>
													<a
														style="
															display: block;
															margin-left: 15px;
															line-height: 1px;
															font-size: 1px;
															height: 4px;
															background: none;
														"
														>&nbsp;</a
													>
												</li>
												<li
													no="1742"
													code="_1742_"
													depth="1"
													child="1"
													style="white-space: nowrap; margin: 0px; padding: 0px"
												>
													<img
														src="http://javalocal.mallstore.co.kr/jscript/tree/images/tree_node.gif"
														class="node"
														style="cursor: pointer; vertical-align: middle"
													/><a id="cate_1742" href="javascript:;">패션의류</a
													><img
														id="hidden_1742"
														src="http://javalocal.mallstore.co.kr/jscript/tree/images/icon_cate_show.gif"
														class="hidden"
														style="
															vertical-align: middle;
															margin-left: 3px;
															cursor: pointer;
														"
													/>
												</li>
												<li
													class="stair"
													style="
														line-height: 1px;
														font-size: 1px;
														margin-top: 0px;
													"
												>
													<a
														style="
															display: block;
															margin-left: 15px;
															line-height: 1px;
															font-size: 1px;
															height: 4px;
														"
														>&nbsp;</a
													>
												</li>
												<li
													no="1831"
													code="_1831_"
													depth="1"
													child="1"
													style="white-space: nowrap; margin: 0px; padding: 0px"
												>
													<img
														src="http://javalocal.mallstore.co.kr/jscript/tree/images/tree_node.gif"
														class="node"
														style="cursor: pointer; vertical-align: middle"
													/><a id="cate_1831" href="javascript:;">테마별</a
													><img
														id="hidden_1831"
														src="http://javalocal.mallstore.co.kr/jscript/tree/images/icon_cate_show.gif"
														class="hidden"
														style="
															vertical-align: middle;
															margin-left: 3px;
															cursor: pointer;
														"
													/>
												</li>
												<li
													class="stair"
													style="
														line-height: 1px;
														font-size: 1px;
														margin-top: 0px;
													"
												>
													<a
														style="
															display: block;
															margin-left: 15px;
															line-height: 1px;
															font-size: 1px;
															height: 4px;
														"
														>&nbsp;</a
													>
												</li>
												<li
													no="1837"
													code="_1837_"
													depth="1"
													child="1"
													style="white-space: nowrap; margin: 0px; padding: 0px"
												>
													<img
														src="http://javalocal.mallstore.co.kr/jscript/tree/images/tree_node.gif"
														class="node"
														style="cursor: pointer; vertical-align: middle"
													/><a id="cate_1837" href="javascript:;">시즌별</a
													><img
														id="hidden_1837"
														src="http://javalocal.mallstore.co.kr/jscript/tree/images/icon_cate_show.gif"
														class="hidden"
														style="
															vertical-align: middle;
															margin-left: 3px;
															cursor: pointer;
														"
													/>
												</li>
												<li
													class="stair"
													style="
														line-height: 1px;
														font-size: 1px;
														margin-top: 0px;
													"
												>
													<a
														style="
															display: block;
															margin-left: 15px;
															line-height: 1px;
															font-size: 1px;
															height: 4px;
														"
														>&nbsp;</a
													>
												</li>
												<li
													no="1704"
													code="_1704_"
													depth="1"
													child="1"
													style="white-space: nowrap; margin: 0px; padding: 0px"
												>
													<img
														src="http://javalocal.mallstore.co.kr/jscript/tree/images/tree_node.gif"
														class="node"
														style="cursor: pointer; vertical-align: middle"
													/><a id="cate_1704" href="javascript:;">화장품</a
													><img
														id="hidden_1704"
														src="http://javalocal.mallstore.co.kr/jscript/tree/images/icon_cate_show.gif"
														class="hidden"
														style="
															vertical-align: middle;
															margin-left: 3px;
															cursor: pointer;
														"
													/>
												</li>
												<li
													class="stair"
													style="
														line-height: 1px;
														font-size: 1px;
														margin-top: 0px;
													"
												>
													<a
														style="
															display: block;
															margin-left: 15px;
															line-height: 1px;
															font-size: 1px;
															height: 4px;
														"
														>&nbsp;</a
													>
												</li>
												<li
													no="1836"
													code="_1836_"
													depth="1"
													child="1"
													style="white-space: nowrap; margin: 0px; padding: 0px"
												>
													<img
														src="http://javalocal.mallstore.co.kr/jscript/tree/images/tree_node.gif"
														class="node"
														style="cursor: pointer; vertical-align: middle"
													/><a id="cate_1836" href="javascript:;">뷰티</a
													><img
														id="hidden_1836"
														src="http://javalocal.mallstore.co.kr/jscript/tree/images/icon_cate_show.gif"
														class="hidden"
														style="
															vertical-align: middle;
															margin-left: 3px;
															cursor: pointer;
														"
													/>
												</li>
												<li
													class="stair"
													style="
														line-height: 1px;
														font-size: 1px;
														margin-top: 0px;
													"
												>
													<a
														style="
															display: block;
															margin-left: 15px;
															line-height: 1px;
															font-size: 1px;
															height: 4px;
														"
														>&nbsp;</a
													>
												</li>
												<li
													no="1710"
													code="_1710_"
													depth="1"
													child="1"
													style="white-space: nowrap; margin: 0px; padding: 0px"
												>
													<img
														src="http://javalocal.mallstore.co.kr/jscript/tree/images/tree_node.gif"
														class="node"
														style="cursor: pointer; vertical-align: middle"
													/><a id="cate_1710" href="javascript:;">잡화</a
													><img
														id="hidden_1710"
														src="http://javalocal.mallstore.co.kr/jscript/tree/images/icon_cate_show.gif"
														class="hidden"
														style="
															vertical-align: middle;
															margin-left: 3px;
															cursor: pointer;
														"
													/>
												</li>
												<li
													class="stair"
													style="
														line-height: 1px;
														font-size: 1px;
														margin-top: 0px;
													"
												>
													<a
														style="
															display: block;
															margin-left: 15px;
															line-height: 1px;
															font-size: 1px;
															height: 4px;
														"
														>&nbsp;</a
													>
												</li>
												<li>
													<img
														src="http://javalocal.mallstore.co.kr/jscript/tree/images/tree_add.gif"
														class="node"
														style="vertical-align: middle"
													/><img
														src="http://javalocal.mallstore.co.kr/jscript/tree/images/icon_cate_regist.gif"
														style="vertical-align: middle; cursor: pointer"
													/>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</th>
							<td></td>
							<td>
								<form name="Frm" method="post" action="category_act">
									<input type="hidden" name="mode" value="REG" />
									<input type="hidden" name="cate" value="0" />
									<input type="hidden" name="parent" value="0" />

									<div id="wrap_body">
										<!-- 카테고리 정보 : 시작 -->
										<div class="section_head">
											<h4>카테고리 추가</h4>
										</div>

										<table class="t_form" width="100%">
											<caption>
												카테고리 내용 입력폼
											</caption>
											<colgroup>
												<col width="130" />
												<col width="*" />
											</colgroup>
											<tbody>
												<tr>
													<th>현재 카테고리</th>
													<td class="category">
														<u id="target_category">추가</u>
													</td>
												</tr>

												<tr>
													<th>카테고리명</th>
													<td>
														<input
															type="text"
															name="name"
															value=""
															class="text_input"
															maxlength="100"
															onkeyup="copyName(this)"
														/>
													</td>
												</tr>

												<tr>
													<th>수수료율</th>
													<td>
														<input
															type="text"
															name="cms"
															class="text_input"
															style="width: 50px"
															value="0"
															maxlength="5"
															onkeyup="onlyFloat(this)"
															onblur="onlyFloat(this)"
														/>
														%
													</td>
												</tr>

												<tr>
													<th>숨김 여부</th>
													<td>
														<div class="label_wrap">
															<label
																><input
																	type="radio"
																	name="hidden"
																	value="0"
																	checked=""
																/>노출</label
															>
															<label
																><input
																	type="radio"
																	name="hidden"
																	value="1"
																/>숨김</label
															>
														</div>
														<div class="noti_info topline">
															상위 카테고리를 숨김처리 하면 하위 카테고리도
															노출되지 않습니다.
														</div>
													</td>
												</tr>

												<!-- tr>
		<th>메인 노출 여부</th>
		<td>
			<span><input type="radio" name="isDisplayMain" value="T"  checked />메인 좌측 카테고리 노출</span>
			<span style="padding-left:10px"><input type="radio" name="isDisplayMain" value="F"   />메인 좌측 카테고리 숨김</span>
		</td>
	</tr //-->
											</tbody>
										</table>
										<!-- 카테고리 정보 : 끝 //-->

										<!-- 상단 꾸미기 : 시작 -->
										<div class="section_head">
											<h4>카테고리 상단 디자인</h4>
										</div>

										<div class="editor">
											<textarea
												name="topDecor"
												style="width: 100%; height: 200px; display: none"
												id="topDecor-placeholder"
											></textarea
											><iframe
												id="__se2_frame_topDecor-placeholder"
												name="__se2_frame_topDecor-placeholder"
												frameborder="0"
												scrolling="no"
												style="width: 100%; height: 252px"
												src="http://javalocal.mallstore.co.kr/common/editor/se2/SmartEditor2Skin.html"
											></iframe>
										</div>

										<table class="t_form" width="100%">
											<colgroup>
												<col width="130" />
												<col width="*" />
											</colgroup>
											<tbody>
												<tr>
													<th>하위 적용</th>
													<td>
														<label
															><input
																type="checkbox"
																name="isInheritTopDecor"
																value="T"
															/><!--
			//-->하위 카테고리에도 동일 하게 적용.</label
														>
													</td>
												</tr>
											</tbody>
										</table>

										<!-- 상단 꾸미기 : 끝 //-->

										<input type="hidden" name="area" value="CMA" />
										<div class="section_head mgt30">
											<h4>
												인기상품 관리

												<span style="color: #cc0000">(최대 5개 등록)</span>
											</h4>
										</div>

										<table class="t_form" width="100%">
											<colgroup>
												<col width="130" />
												<col width="*" />
											</colgroup>
											<tbody>
												<tr>
													<th>출력여부</th>
													<td>
														<div class="label_wrap">
															<label
																><input
																	type="radio"
																	name="areaHiddenCMA"
																	value="0"
																	checked=""
																/>출력</label
															>
															<label
																><input
																	type="radio"
																	name="areaHiddenCMA"
																	value="1"
																/>숨김</label
															>
														</div>
													</td>
												</tr>
												<tr>
													<th>상품관리</th>
													<td>
														<select
															id="areaGoodsCMA"
															name="areaGoodsCMA"
															size="5"
															style="width: 100%; height: 80px"
															multiple=""
															max="5"
															ondblclick="openGoods(this)"
														></select>

														<div class="over_h mgt5">
															<div class="fl">
																<button
																	type="button"
																	class="btn_sec sm"
																	onclick="moveGoods('areaGoodsCMA', 'UP');"
																>
																	▲
																</button>
																<button
																	type="button"
																	class="btn_sec sm"
																	onclick="moveGoods('areaGoodsCMA', 'DOWN');"
																>
																	▼
																</button>
																<button
																	type="button"
																	class="btn_sec sm"
																	onclick="delGoods('areaGoodsCMA');"
																>
																	삭제
																</button>
															</div>
															<div class="fr">
																<button
																	type="button"
																	class="btn_sec sm"
																	onclick="openSelectGoods('areaGoodsCMA');"
																>
																	상품선택
																</button>
															</div>
														</div>
													</td>
												</tr>
											</tbody>
										</table>

										<input type="hidden" name="area" value="CMB" />
										<div class="section_head mgt30">
											<h4>
												신상품 관리

												<span style="color: #cc0000">(최대 5개 등록)</span>
											</h4>
										</div>

										<table class="t_form" width="100%">
											<colgroup>
												<col width="130" />
												<col width="*" />
											</colgroup>
											<tbody>
												<tr>
													<th>출력여부</th>
													<td>
														<div class="label_wrap">
															<label
																><input
																	type="radio"
																	name="areaHiddenCMB"
																	value="0"
																	checked=""
																/>출력</label
															>
															<label
																><input
																	type="radio"
																	name="areaHiddenCMB"
																	value="1"
																/>숨김</label
															>
														</div>
													</td>
												</tr>
												<tr>
													<th>상품관리</th>
													<td>
														<select
															id="areaGoodsCMB"
															name="areaGoodsCMB"
															size="5"
															style="width: 100%; height: 80px"
															multiple=""
															max="5"
															ondblclick="openGoods(this)"
														></select>

														<div class="over_h mgt5">
															<div class="fl">
																<button
																	type="button"
																	class="btn_sec sm"
																	onclick="moveGoods('areaGoodsCMB', 'UP');"
																>
																	▲
																</button>
																<button
																	type="button"
																	class="btn_sec sm"
																	onclick="moveGoods('areaGoodsCMB', 'DOWN');"
																>
																	▼
																</button>
																<button
																	type="button"
																	class="btn_sec sm"
																	onclick="delGoods('areaGoodsCMB');"
																>
																	삭제
																</button>
															</div>
															<div class="fr">
																<button
																	type="button"
																	class="btn_sec sm"
																	onclick="openSelectGoods('areaGoodsCMB');"
																>
																	상품선택
																</button>
															</div>
														</div>
													</td>
												</tr>
											</tbody>
										</table>

										<input type="hidden" name="area" value="CMC" />
										<div class="section_head mgt30">
											<h4>
												MD Choice 관리

												<span style="color: #cc0000">(최대 5개 등록)</span>
											</h4>
										</div>

										<table class="t_form" width="100%">
											<colgroup>
												<col width="130" />
												<col width="*" />
											</colgroup>
											<tbody>
												<tr>
													<th>출력여부</th>
													<td>
														<div class="label_wrap">
															<label
																><input
																	type="radio"
																	name="areaHiddenCMC"
																	value="0"
																	checked=""
																/>출력</label
															>
															<label
																><input
																	type="radio"
																	name="areaHiddenCMC"
																	value="1"
																/>숨김</label
															>
														</div>
													</td>
												</tr>
												<tr>
													<th>상품관리</th>
													<td>
														<select
															id="areaGoodsCMC"
															name="areaGoodsCMC"
															size="5"
															style="width: 100%; height: 80px"
															multiple=""
															max="5"
															ondblclick="openGoods(this)"
														></select>

														<div class="over_h mgt5">
															<div class="fl">
																<button
																	type="button"
																	class="btn_sec sm"
																	onclick="moveGoods('areaGoodsCMC', 'UP');"
																>
																	▲
																</button>
																<button
																	type="button"
																	class="btn_sec sm"
																	onclick="moveGoods('areaGoodsCMC', 'DOWN');"
																>
																	▼
																</button>
																<button
																	type="button"
																	class="btn_sec sm"
																	onclick="delGoods('areaGoodsCMC');"
																>
																	삭제
																</button>
															</div>
															<div class="fr">
																<button
																	type="button"
																	class="btn_sec sm"
																	onclick="openSelectGoods('areaGoodsCMC');"
																>
																	상품선택
																</button>
															</div>
														</div>
													</td>
												</tr>
											</tbody>
										</table>

										<div class="btn_wrap">
											<button
												type="button"
												class="btn_pri"
												onclick="validSubmit()"
											>
												확인
											</button>
											<button type="button" onclick="del()" class="btn_sec">
												삭제
											</button>
										</div>
									</div>
								</form>
							</td>
						</tr>
					</tbody>
				</table>
			</section>
		</div>

		<!-- <script type="text/javascript">
			cateTree.init(_e('category'), 3, 1);
			cateTree.throwHide = function (cate, hidden) {
				var func = _e('frmDetail').contentWindow.hide;
				if (typeof func == 'function') func(cate, hidden);
			};
			cateTree.linkageSelect = function (cate) {
				_e('frmDetail').src = './category_detail_ifrm?cate=' + cate;
			};
			cateTree.linkageRegist = function (parent) {
				_e('frmDetail').src = './category_detail_ifrm?parent=' + parent;
			};

			cateTree.dragDrop.init();
			cateTree.dragDrop.confirmApplyMove = function () {
				return confirm('선택한 위치로 카테고리를 이동 하시겠습니까?');
			};

			cateTree.popupMenu.bind(
				'printChild',
				'하위카테고리<br />펼쳐보기',
				function (cate) {
					cateTree.print('child', cate);
				},
			);
			cateTree.popupMenu.bind('goodsList', '상품보기', function (cate) {
				location.href = 'goods_list?scate=' + cate;
			});
			cateTree.popupMenu.bind(
				'goodsPreview',
				'미리보기',
				function (cate, depth) {
					var f = document.FrmLink;
					var page = '';
					switch (depth) {
						case 1:
							page = 'main';
							break;
						default:
							page = 'category';
							break;
					}
					f.cate.value = cate;
					f.target = '_blank';
					f.action = '/goods/' + page;
					f.submit();
				},
			);

			addEvent(window, 'load', function () {
				cateTree.print();
			});
			addEvent(window, 'resize', function () {
				_e('frmDetail').style.width = '100%';
			});
			//]]>
		</script> -->

		<form name="FrmLink" method="get">
			<input type="hidden" name="cate" />
		</form>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style scoped>
#wrap_body {
	min-width: 540px;
	_width: 540px;
}
.t_form td ul {
	clear: both;
	height: 1%;
}
.t_form td ul:after {
	content: '.';
	display: block;
	clear: both;
	line-height: 0;
	height: 0;
	visibility: hidden;
}
.t_form td ul li {
	float: left;
}
.t_form td ul.in li {
	line-height: 0.5em;
	font-size: 0px;
}
.t_form td.category {
	line-height: 20px;
}
.t_form td.category span {
	margin: 0 3px;
}
.t_form td.category u {
	font-weight: bold;
	margin-left: 3px;
}
.t_form td.blank {
	height: 2px;
	padding: 0;
}

.editor {
	border: 1px solid #e6e6e6;
	border-bottom: none;
	overflow: hidden;
}
</style>
