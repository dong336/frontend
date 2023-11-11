<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				상품정보일괄등록<button
					id="addBmark"
					onclick="addBookmark('상품정보일괄등록')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>상품관리</li>
				<li>상품정보엑셀작업</li>
				<li>상품정보일괄등록</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				[샘플 다운로드] 버튼을 클릭해서 엑셀 업로드 입력 가이드 및 샘플양식을
				다운로드 받습니다.
			</li>
			<li>엑셀파일에 정확한 데이터를 입력하지 않으면 등록이 되지 않습니다.</li>
			<li>
				등록하실 상품의 순서대로 일련번호를 1번부터 입력합니다. 일련번호를
				입력하지 않은 경우에는 등록이 되지 않습니다.
			</li>
			<li>
				다운로드 받은 샘플 엑셀파일에 표시된 필수 데이터는 반드시 입력을 해야
				하며, 필수 데이터가 아닌 경우 공백으로 두시면 됩니다. 단, 엑셀파일의
				필드 열을 삭제하시면 등록이 되지 않습니다.
			</li>
			<li>
				카테고리명 또는 카테고리코드, 브랜드명 또는 브랜드코드는 둘 중 하나의
				필드 값만 입력해도 무방하며, 카테고리명과 브랜드명의 텍스트가 사이트에
				등록된 데이터와 다를 경우에는 등록 오류가 발생할 수 있습니다.
			</li>
			<li>이미지 파일은 압축파일(*.zip)로 함께 첨부 바랍니다.</li>
			<li>
				상품정보다운로드 메뉴에서 정보수정을 원하시는 상품의 데이터를 다운로드
				후, 수정하여 상품정보 일괄수정을 진행하실 수 있습니다.
			</li>
		</ul>

		<!-- <style type="text/css">
			.t_form td .fields li {
				float: left;
				width: 20%;
			}
			.t_form td .fields li.nl {
				width: 100%;
				font-size: 0;
				line-height: 0;
			}
		</style> -->

		<!-- <script type="text/javascript">
			var cateDepthGoods = '2'.toNumeric();

			function validSample(no) {
				var f = document.FrmReg;
				f.action = 'excel_regist_sample';
				f.submit();
			}

			function validRegist() {
				var f = document.FrmReg;

				if (isEmpty(f.attachexcel)) {
					alert('엑셀파일을 선택해 주세요.');
					f.attachexcel.focus();
					return false;
				}

				if (
					!checkFileExt(
						f.attachexcel,
						'xlsx',
						'엑셀(*.xlsx) 파일만 선택해 주세요.',
					)
				)
					return false;

				if (!isEmpty(f.attachzip)) {
					if (
						!checkFileExt(
							f.attachzip,
							'zip',
							'압축(*.zip) 파일만 선택해 주세요.',
						)
					)
						return false;
				}

				if (confirm('상품정보 일괄등록을 하시겠습니까?')) {
					$('#button_regist').html(
						"<strong class='red'>상품정보를 등록 중 입니다.<br />잠시만 기다려주세요.</strong>",
					);
					f.action = 'excel_regist_act';
					f.submit();
				}
			}

			function validModify() {
				var f = document.FrmMod;

				if (isEmpty(f.attachexcel)) {
					alert('엑셀파일을 선택해 주세요.');
					f.attachexcel.focus();
					return false;
				}

				if (
					!checkFileExt(
						f.attachexcel,
						'xlsx',
						'엑셀(*.xlsx) 파일만 선택해 주세요.',
					)
				)
					return false;

				/*	if (!isEmpty(f.attachzip)) {
		if (!checkFileExt(f.attachzip, "zip", "압축(*.zip) 파일만 선택해 주세요.")) return false;
	} */

				if (confirm('상품정보 일괄수정을 하시겠습니까?')) {
					$('#button_modify').html(
						"<strong class='red'>상품정보를 수정 중 입니다.<br />잠시만 기다려주세요.</strong>",
					);

					f.submit();
				}
			}

			function resetButtons() {
				var buttons =
					'<button type="button" class="btn_pri sm" onclick="validRegist()">업로드</button>';
				$('#button_regist').html(buttons);

				var buttons =
					'<button type="button" class="btn_pri sm" onclick="validModify()">업로드</button>';
				$('#button_modify').html(buttons);

				$.ajax({
					url: '/common/ajax/get_goods_excelupload__fail_list',
					type: 'POST',
					dataType: 'JSON',
					success: function (data) {
						var cnt = data.json_arr.length;
						var tag = '';

						for (var i = 0; i < cnt; i++) {
							tag += '<tr>';
							tag += '<th>';
							tag += data.json_arr[i].NO;
							tag += '</th>';
							tag += '<td>';
							tag += data.json_arr[i].MSG;
							tag += '</td>';
							tag += '<td>';
							tag += data.json_arr[i].DATE;
							tag += '</td>';
							tag += '</tr>';
						}

						$('#failList tbody').html(tag);
					},
				});
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form
					name="FrmReg"
					method="post"
					target="frmProc"
					action="excel_regist_act"
					enctype="multipart/form-data"
				>
					<input type="hidden" name="mode" value="REG" />
					<div class="section_head">
						<h4>상품정보 일괄등록</h4>
						<div>
							<button type="button" class="btn_sec sm" onclick="validSample(1)">
								샘플 다운로드
							</button>
						</div>
					</div>
					<table
						cellspacing="0"
						cellpadding="0"
						border="0"
						width="100%"
						class="t_form"
					>
						<caption>
							출력항목 선택 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>엑셀파일</th>
								<td>
									<input
										type="file"
										name="attachexcel"
										onkeypress="blockKey(event)"
										onkeydown="blockKey(event)"
									/>
								</td>
							</tr>
							<tr>
								<th>이미지파일</th>
								<td>
									<input
										type="file"
										name="attachzip"
										onkeypress="blockKey(event)"
										onkeydown="blockKey(event)"
									/>
								</td>
							</tr>
						</tbody>
					</table>

					<div id="button_regist" class="btn">
						<button type="button" class="btn_pri" onclick="validRegist()">
							업로드
						</button>
					</div>
				</form>

				<form
					name="FrmMod"
					method="post"
					target="frmProc"
					action="excel_regist_act"
					enctype="multipart/form-data"
				>
					<input type="hidden" name="mode" value="MOD" />
					<div class="section_head mgt40">
						<h4>상품정보 일괄수정</h4>
					</div>
					<table
						cellspacing="0"
						cellpadding="0"
						border="0"
						width="100%"
						class="t_form"
					>
						<caption>
							출력항목 선택 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>엑셀파일</th>
								<td>
									<input
										type="file"
										name="attachexcel"
										onkeypress="blockKey(event)"
										onkeydown="blockKey(event)"
									/>
								</td>
							</tr>
							<tr>
								<th>이미지파일</th>
								<td>
									<input
										type="file"
										name="attachzip"
										onkeypress="blockKey(event)"
										onkeydown="blockKey(event)"
									/>
								</td>
							</tr>
						</tbody>
					</table>

					<div id="button_modify" class="btn">
						<button type="button" class="btn_pri" onclick="validModify()">
							업로드
						</button>
					</div>
				</form>

				<div class="section_head mgt40">
					<h4>최근 업로드 실패 내역 리스트</h4>
				</div>
				<table
					cellspacing="0"
					cellpadding="0"
					border="0"
					width="100%"
					id="failList"
					class="t_list"
				>
					<caption>
						업로드 실패 내역 리스트
					</caption>
					<colgroup>
						<col width="130" />
						<col width="*" />
						<col width="130" />
					</colgroup>
					<thead>
						<tr>
							<th>엑셀 라인번호</th>
							<th>업로드 실패 사유</th>
							<th>업로드 시간</th>
						</tr>
					</thead>
					<tbody></tbody>
				</table>
			</section>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style></style>
