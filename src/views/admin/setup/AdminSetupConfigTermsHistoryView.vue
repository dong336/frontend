<template>
	<main v-if="$route.query.code === '101'" id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				이용약관<button
					id="addBmark"
					onclick="addBookmark('이용약관')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>약관관리</li>
				<li>이용약관</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>서비스 이용정책 중 '이용약관'의 이력을 관리하실 수 있습니다.</li>
			<li>적용 위치 : 없음.</li>
		</ul>

		<!-- <script type="text/javascript">
			//<![CDATA[
			function reg(idx) {
				var code = $('input[name="code"]').val();

				if (!idx) {
					idx = 0;
				}

				location.href = 'config_terms_history_reg?code=' + code + '&idx=' + idx;
			}

			function changeIscurrent(idxVal) {
				var code = $('input[name="code"]').val();
				var idx = parseInt(idxVal);

				if (!idx) {
					alert('유효하지 않은 이력이 선택되었습니다.');
				}

				if (confirm('선택된 이력을 현재버전으로 설정하시겠습니까?')) {
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_change_iscurrent_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idx: idx,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
					});
				} else {
					$('input[name="iscurrent"]').attr('checked', false);
					$('input[name="iscurrent"]').each(function () {
						if ($(this).val() == 'T') {
							$(this).attr('checked', true);
						}
					});
					alert('취소되었습니다.');
				}
			}

			function delList() {
				var f = document.Frm;

				var code = f.code.value;
				var items = '';

				if (!f.cbList) {
					return false;
				}

				if (typeof f.cbList.length == 'undefined') {
					if (f.cbList.checked) items = f.cbList.value;
				} else {
					for (var i = 0; i < f.cbList.length; i++) {
						if (f.cbList[i].checked) {
							items += (items ? ',' : '') + f.cbList[i].value;
						}
					}
				}

				if (items == '') {
					alert('삭제하실 항목을 선택해주세요.');
					return false;
				}

				var msg =
					'선택된 이력 정보는 완전히 삭제되어 복구하실 수 없습니다.' +
					'\n삭제를 진행하시겠습니까?';
				if (confirm(msg)) {
					$('.wrap-loading').show();
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_del_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idxs: items,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
								document.location.reload();
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
						complete: function () {
							$('.wrap-loading').hide();
						},
					});
				}
			}

			function del(idx) {
				var f = document.Frm;

				var code = f.code.value;

				var msg =
					'선택된 이력 정보는 완전히 삭제되어 복구하실 수 없습니다.' +
					'\n삭제를 진행하시겠습니까?';
				if (confirm(msg)) {
					$('.wrap-loading').show();
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_del_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idxs: idx,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
								document.location.reload();
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
						complete: function () {
							$('.wrap-loading').hide();
						},
					});
				}
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form name="Frm" method="post">
					<input type="hidden" name="code" value="101" />

					<div class="section_head">
						<h4 class="total">
							총 <span><strong>3개</strong></span
							>의 정보가 등록되어있습니다.
						</h4>
					</div>

					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_list"
					>
						<caption>
							이용약관 이력 리스트
						</caption>
						<colgroup>
							<col width="5%" />
							<col width="35%" />
							<col width="15%" />
							<col width="18%" />
							<col width="12%" />
							<col width="15%" />
						</colgroup>
						<thead>
							<tr>
								<th>
									<label
										><input
											type="checkbox"
											name="cbListAll"
											onclick="checkCbAll(this.form.cbList, this.checked)"
										/>전체선택</label
									>
								</th>
								<th>약관명 [Version]</th>
								<th>등록일시</th>
								<th>등록자ID</th>
								<th>노출상태</th>
								<th>기능</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="45"
										/>선택</label
									>
								</td>
								<td class="left">이용약관 [ver 4.0]</td>
								<td>2018-12-06 17:05:06</td>
								<td>admin</td>
								<td>
									<label>
										<input
											type="radio"
											name="iscurrent"
											value="T"
											checked=""
											onchange="changeIscurrent('45');"
										/>
									</label>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_pri sm"
											onclick="reg('45');"
										>
											수정
										</button>
										<button
											type="button"
											class="btn_sec sm"
											onclick="del('45');"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>

							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="44"
										/>선택</label
									>
								</td>
								<td class="left">이용약관 [ver 3.9]</td>
								<td>2018-12-06 17:05:01</td>
								<td>admin</td>
								<td>
									<label>
										<input
											type="radio"
											name="iscurrent"
											value="F"
											onchange="changeIscurrent('44');"
										/>
									</label>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_pri sm"
											onclick="reg('44');"
										>
											수정
										</button>
										<button
											type="button"
											class="btn_sec sm"
											onclick="del('44');"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>

							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="40"
										/>선택</label
									>
								</td>
								<td class="left">이용약관 [ver 3.6]</td>
								<td>2018-12-06 16:50:47</td>
								<td>admin</td>
								<td>
									<label>
										<input
											type="radio"
											name="iscurrent"
											value="F"
											onchange="changeIscurrent('40');"
										/>
									</label>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_pri sm"
											onclick="reg('40');"
										>
											수정
										</button>
										<button
											type="button"
											class="btn_sec sm"
											onclick="del('40');"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</form>

				<div class="paging">
					<span
						><a href="/nmanager/setup/config_terms_history?page=1&amp;code=101"
							><strong class="active">1</strong></a
						></span
					>
				</div>

				<div class="btn_wrap">
					<button type="button" class="btn_pri" onclick="reg(0);">등록</button>
					<button type="button" onclick="delList()" class="btn_sec">
						선택삭제
					</button>
				</div>
			</section>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>

	<main v-if="$route.query.code === '102'" id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				개인정보취급방침<button
					id="addBmark"
					onclick="addBookmark('개인정보취급방침')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>약관관리</li>
				<li>개인정보취급방침</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				서비스 이용정책 중 '개인정보취급방침'의 이력을 관리하실 수 있습니다.
			</li>
			<li>적용 위치 : 없음.</li>
		</ul>

		<!-- <script type="text/javascript">
			//<![CDATA[
			function reg(idx) {
				var code = $('input[name="code"]').val();

				if (!idx) {
					idx = 0;
				}

				location.href = 'config_terms_history_reg?code=' + code + '&idx=' + idx;
			}

			function changeIscurrent(idxVal) {
				var code = $('input[name="code"]').val();
				var idx = parseInt(idxVal);

				if (!idx) {
					alert('유효하지 않은 이력이 선택되었습니다.');
				}

				if (confirm('선택된 이력을 현재버전으로 설정하시겠습니까?')) {
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_change_iscurrent_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idx: idx,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
					});
				} else {
					$('input[name="iscurrent"]').attr('checked', false);
					$('input[name="iscurrent"]').each(function () {
						if ($(this).val() == 'T') {
							$(this).attr('checked', true);
						}
					});
					alert('취소되었습니다.');
				}
			}

			function delList() {
				var f = document.Frm;

				var code = f.code.value;
				var items = '';

				if (!f.cbList) {
					return false;
				}

				if (typeof f.cbList.length == 'undefined') {
					if (f.cbList.checked) items = f.cbList.value;
				} else {
					for (var i = 0; i < f.cbList.length; i++) {
						if (f.cbList[i].checked) {
							items += (items ? ',' : '') + f.cbList[i].value;
						}
					}
				}

				if (items == '') {
					alert('삭제하실 항목을 선택해주세요.');
					return false;
				}

				var msg =
					'선택된 이력 정보는 완전히 삭제되어 복구하실 수 없습니다.' +
					'\n삭제를 진행하시겠습니까?';
				if (confirm(msg)) {
					$('.wrap-loading').show();
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_del_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idxs: items,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
								document.location.reload();
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
						complete: function () {
							$('.wrap-loading').hide();
						},
					});
				}
			}

			function del(idx) {
				var f = document.Frm;

				var code = f.code.value;

				var msg =
					'선택된 이력 정보는 완전히 삭제되어 복구하실 수 없습니다.' +
					'\n삭제를 진행하시겠습니까?';
				if (confirm(msg)) {
					$('.wrap-loading').show();
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_del_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idxs: idx,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
								document.location.reload();
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
						complete: function () {
							$('.wrap-loading').hide();
						},
					});
				}
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form name="Frm" method="post">
					<input type="hidden" name="code" value="102" />

					<div class="section_head">
						<h4 class="total">
							총 <span><strong>2개</strong></span
							>의 정보가 등록되어있습니다.
						</h4>
					</div>

					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_list"
					>
						<caption>
							이용약관 이력 리스트
						</caption>
						<colgroup>
							<col width="5%" />
							<col width="35%" />
							<col width="15%" />
							<col width="18%" />
							<col width="12%" />
							<col width="15%" />
						</colgroup>
						<thead>
							<tr>
								<th>
									<label
										><input
											type="checkbox"
											name="cbListAll"
											onclick="checkCbAll(this.form.cbList, this.checked)"
										/>전체선택</label
									>
								</th>
								<th>약관명 [Version]</th>
								<th>등록일시</th>
								<th>등록자ID</th>
								<th>노출상태</th>
								<th>기능</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="37"
										/>선택</label
									>
								</td>
								<td class="left">개인정보취급방침 [ver 1.1]</td>
								<td>2018-11-13 14:34:26</td>
								<td>admin</td>
								<td>
									<label>
										<input
											type="radio"
											name="iscurrent"
											value="T"
											checked=""
											onchange="changeIscurrent('37');"
										/>
									</label>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_pri sm"
											onclick="reg('37');"
										>
											수정
										</button>
										<button
											type="button"
											class="btn_sec sm"
											onclick="del('37');"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>

							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="36"
										/>선택</label
									>
								</td>
								<td class="left">개인정보취급방침 [ver 1.0]</td>
								<td>2018-11-13 13:47:38</td>
								<td>admin</td>
								<td>
									<label>
										<input
											type="radio"
											name="iscurrent"
											value="F"
											onchange="changeIscurrent('36');"
										/>
									</label>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_pri sm"
											onclick="reg('36');"
										>
											수정
										</button>
										<button
											type="button"
											class="btn_sec sm"
											onclick="del('36');"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</form>

				<div class="paging">
					<span
						><a href="/nmanager/setup/config_terms_history?page=1&amp;code=102"
							><strong class="active">1</strong></a
						></span
					>
				</div>

				<div class="btn_wrap">
					<button type="button" class="btn_pri" onclick="reg(0);">등록</button>
					<button type="button" onclick="delList()" class="btn_sec">
						선택삭제
					</button>
				</div>
			</section>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>

	<main v-if="$route.query.code === '103'" id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				제3자정보제공동의<button
					id="addBmark"
					onclick="addBookmark('제3자정보제공동의')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>약관관리</li>
				<li>제3자정보제공동의</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				서비스 이용정책 중 '제3자정보제공동의'의 이력을 관리하실 수 있습니다.
			</li>
			<li>적용 위치 : 없음.</li>
		</ul>

		<!-- <script type="text/javascript">
			//<![CDATA[
			function reg(idx) {
				var code = $('input[name="code"]').val();

				if (!idx) {
					idx = 0;
				}

				location.href = 'config_terms_history_reg?code=' + code + '&idx=' + idx;
			}

			function changeIscurrent(idxVal) {
				var code = $('input[name="code"]').val();
				var idx = parseInt(idxVal);

				if (!idx) {
					alert('유효하지 않은 이력이 선택되었습니다.');
				}

				if (confirm('선택된 이력을 현재버전으로 설정하시겠습니까?')) {
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_change_iscurrent_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idx: idx,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
					});
				} else {
					$('input[name="iscurrent"]').attr('checked', false);
					$('input[name="iscurrent"]').each(function () {
						if ($(this).val() == 'T') {
							$(this).attr('checked', true);
						}
					});
					alert('취소되었습니다.');
				}
			}

			function delList() {
				var f = document.Frm;

				var code = f.code.value;
				var items = '';

				if (!f.cbList) {
					return false;
				}

				if (typeof f.cbList.length == 'undefined') {
					if (f.cbList.checked) items = f.cbList.value;
				} else {
					for (var i = 0; i < f.cbList.length; i++) {
						if (f.cbList[i].checked) {
							items += (items ? ',' : '') + f.cbList[i].value;
						}
					}
				}

				if (items == '') {
					alert('삭제하실 항목을 선택해주세요.');
					return false;
				}

				var msg =
					'선택된 이력 정보는 완전히 삭제되어 복구하실 수 없습니다.' +
					'\n삭제를 진행하시겠습니까?';
				if (confirm(msg)) {
					$('.wrap-loading').show();
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_del_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idxs: items,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
								document.location.reload();
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
						complete: function () {
							$('.wrap-loading').hide();
						},
					});
				}
			}

			function del(idx) {
				var f = document.Frm;

				var code = f.code.value;

				var msg =
					'선택된 이력 정보는 완전히 삭제되어 복구하실 수 없습니다.' +
					'\n삭제를 진행하시겠습니까?';
				if (confirm(msg)) {
					$('.wrap-loading').show();
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_del_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idxs: idx,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
								document.location.reload();
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
						complete: function () {
							$('.wrap-loading').hide();
						},
					});
				}
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form name="Frm" method="post">
					<input type="hidden" name="code" value="103" />

					<div class="section_head">
						<h4 class="total">
							총 <span><strong>1개</strong></span
							>의 정보가 등록되어있습니다.
						</h4>
					</div>

					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_list"
					>
						<caption>
							이용약관 이력 리스트
						</caption>
						<colgroup>
							<col width="5%" />
							<col width="35%" />
							<col width="15%" />
							<col width="18%" />
							<col width="12%" />
							<col width="15%" />
						</colgroup>
						<thead>
							<tr>
								<th>
									<label
										><input
											type="checkbox"
											name="cbListAll"
											onclick="checkCbAll(this.form.cbList, this.checked)"
										/>전체선택</label
									>
								</th>
								<th>약관명 [Version]</th>
								<th>등록일시</th>
								<th>등록자ID</th>
								<th>노출상태</th>
								<th>기능</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="46"
										/>선택</label
									>
								</td>
								<td class="left">제3자정보제공동의 [ver 1.0]</td>
								<td>2023-04-11 09:51:21</td>
								<td>admin</td>
								<td>
									<label>
										<input
											type="radio"
											name="iscurrent"
											value="T"
											checked=""
											onchange="changeIscurrent('46');"
										/>
									</label>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_pri sm"
											onclick="reg('46');"
										>
											수정
										</button>
										<button
											type="button"
											class="btn_sec sm"
											onclick="del('46');"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</form>

				<div class="paging">
					<span
						><a href="/nmanager/setup/config_terms_history?page=1&amp;code=103"
							><strong class="active">1</strong></a
						></span
					>
				</div>

				<div class="btn_wrap">
					<button type="button" class="btn_pri" onclick="reg(0);">등록</button>
					<button type="button" onclick="delList()" class="btn_sec">
						선택삭제
					</button>
				</div>
			</section>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>

	<main v-if="$route.query.code === '201'" id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				비회원 이용약관<button
					id="addBmark"
					onclick="addBookmark('비회원 이용약관')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>약관관리</li>
				<li>비회원 이용약관</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				서비스 이용정책 중 '비회원 이용약관'의 이력을 관리하실 수 있습니다.
			</li>
			<li>적용 위치 : 없음.</li>
		</ul>

		<!-- <script type="text/javascript">
			function reg(idx) {
				var code = $('input[name="code"]').val();

				if (!idx) {
					idx = 0;
				}

				location.href = 'config_terms_history_reg?code=' + code + '&idx=' + idx;
			}

			function changeIscurrent(idxVal) {
				var code = $('input[name="code"]').val();
				var idx = parseInt(idxVal);

				if (!idx) {
					alert('유효하지 않은 이력이 선택되었습니다.');
				}

				if (confirm('선택된 이력을 현재버전으로 설정하시겠습니까?')) {
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_change_iscurrent_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idx: idx,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
					});
				} else {
					$('input[name="iscurrent"]').attr('checked', false);
					$('input[name="iscurrent"]').each(function () {
						if ($(this).val() == 'T') {
							$(this).attr('checked', true);
						}
					});
					alert('취소되었습니다.');
				}
			}

			function delList() {
				var f = document.Frm;

				var code = f.code.value;
				var items = '';

				if (!f.cbList) {
					return false;
				}

				if (typeof f.cbList.length == 'undefined') {
					if (f.cbList.checked) items = f.cbList.value;
				} else {
					for (var i = 0; i < f.cbList.length; i++) {
						if (f.cbList[i].checked) {
							items += (items ? ',' : '') + f.cbList[i].value;
						}
					}
				}

				if (items == '') {
					alert('삭제하실 항목을 선택해주세요.');
					return false;
				}

				var msg =
					'선택된 이력 정보는 완전히 삭제되어 복구하실 수 없습니다.' +
					'\n삭제를 진행하시겠습니까?';
				if (confirm(msg)) {
					$('.wrap-loading').show();
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_del_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idxs: items,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
								document.location.reload();
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
						complete: function () {
							$('.wrap-loading').hide();
						},
					});
				}
			}

			function del(idx) {
				var f = document.Frm;

				var code = f.code.value;

				var msg =
					'선택된 이력 정보는 완전히 삭제되어 복구하실 수 없습니다.' +
					'\n삭제를 진행하시겠습니까?';
				if (confirm(msg)) {
					$('.wrap-loading').show();
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_del_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idxs: idx,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
								document.location.reload();
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
						complete: function () {
							$('.wrap-loading').hide();
						},
					});
				}
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form name="Frm" method="post">
					<input type="hidden" name="code" value="201" />

					<div class="section_head">
						<h4 class="total">
							총 <span><strong>1개</strong></span
							>의 정보가 등록되어있습니다.
						</h4>
					</div>

					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_list"
					>
						<caption>
							이용약관 이력 리스트
						</caption>
						<colgroup>
							<col width="5%" />
							<col width="35%" />
							<col width="15%" />
							<col width="18%" />
							<col width="12%" />
							<col width="15%" />
						</colgroup>
						<thead>
							<tr>
								<th>
									<label
										><input
											type="checkbox"
											name="cbListAll"
											onclick="checkCbAll(this.form.cbList, this.checked)"
										/>전체선택</label
									>
								</th>
								<th>약관명 [Version]</th>
								<th>등록일시</th>
								<th>등록자ID</th>
								<th>노출상태</th>
								<th>기능</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="33"
										/>선택</label
									>
								</td>
								<td class="left">비회원 이용약관 [ver 1.0]</td>
								<td>2018-07-31 16:43:13</td>
								<td>admin</td>
								<td>
									<label>
										<input
											type="radio"
											name="iscurrent"
											value="T"
											checked=""
											onchange="changeIscurrent('33');"
										/>
									</label>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_pri sm"
											onclick="reg('33');"
										>
											수정
										</button>
										<button
											type="button"
											class="btn_sec sm"
											onclick="del('33');"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</form>

				<div class="paging">
					<span
						><a href="/nmanager/setup/config_terms_history?page=1&amp;code=201"
							><strong class="active">1</strong></a
						></span
					>
				</div>

				<div class="btn_wrap">
					<button type="button" class="btn_pri" onclick="reg(0);">등록</button>
					<button type="button" onclick="delList()" class="btn_sec">
						선택삭제
					</button>
				</div>
			</section>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>

	<main v-if="$route.query.code === '202'" id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				비회원 개인정보취급방침<button
					id="addBmark"
					onclick="addBookmark('비회원 개인정보취급방침')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>약관관리</li>
				<li>비회원 개인정보취급방침</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				서비스 이용정책 중 '비회원 개인정보취급방침'의 이력을 관리하실 수
				있습니다.
			</li>
			<li>적용 위치 : 없음.</li>
		</ul>

		<!-- <script type="text/javascript">
			function reg(idx) {
				var code = $('input[name="code"]').val();

				if (!idx) {
					idx = 0;
				}

				location.href = 'config_terms_history_reg?code=' + code + '&idx=' + idx;
			}

			function changeIscurrent(idxVal) {
				var code = $('input[name="code"]').val();
				var idx = parseInt(idxVal);

				if (!idx) {
					alert('유효하지 않은 이력이 선택되었습니다.');
				}

				if (confirm('선택된 이력을 현재버전으로 설정하시겠습니까?')) {
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_change_iscurrent_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idx: idx,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
					});
				} else {
					$('input[name="iscurrent"]').attr('checked', false);
					$('input[name="iscurrent"]').each(function () {
						if ($(this).val() == 'T') {
							$(this).attr('checked', true);
						}
					});
					alert('취소되었습니다.');
				}
			}

			function delList() {
				var f = document.Frm;

				var code = f.code.value;
				var items = '';

				if (!f.cbList) {
					return false;
				}

				if (typeof f.cbList.length == 'undefined') {
					if (f.cbList.checked) items = f.cbList.value;
				} else {
					for (var i = 0; i < f.cbList.length; i++) {
						if (f.cbList[i].checked) {
							items += (items ? ',' : '') + f.cbList[i].value;
						}
					}
				}

				if (items == '') {
					alert('삭제하실 항목을 선택해주세요.');
					return false;
				}

				var msg =
					'선택된 이력 정보는 완전히 삭제되어 복구하실 수 없습니다.' +
					'\n삭제를 진행하시겠습니까?';
				if (confirm(msg)) {
					$('.wrap-loading').show();
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_del_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idxs: items,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
								document.location.reload();
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
						complete: function () {
							$('.wrap-loading').hide();
						},
					});
				}
			}

			function del(idx) {
				var f = document.Frm;

				var code = f.code.value;

				var msg =
					'선택된 이력 정보는 완전히 삭제되어 복구하실 수 없습니다.' +
					'\n삭제를 진행하시겠습니까?';
				if (confirm(msg)) {
					$('.wrap-loading').show();
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_del_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idxs: idx,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
								document.location.reload();
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
						complete: function () {
							$('.wrap-loading').hide();
						},
					});
				}
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form name="Frm" method="post">
					<input type="hidden" name="code" value="202" />

					<div class="section_head">
						<h4 class="total">
							총 <span><strong>1개</strong></span
							>의 정보가 등록되어있습니다.
						</h4>
					</div>

					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_list"
					>
						<caption>
							이용약관 이력 리스트
						</caption>
						<colgroup>
							<col width="5%" />
							<col width="35%" />
							<col width="15%" />
							<col width="18%" />
							<col width="12%" />
							<col width="15%" />
						</colgroup>
						<thead>
							<tr>
								<th>
									<label
										><input
											type="checkbox"
											name="cbListAll"
											onclick="checkCbAll(this.form.cbList, this.checked)"
										/>전체선택</label
									>
								</th>
								<th>약관명 [Version]</th>
								<th>등록일시</th>
								<th>등록자ID</th>
								<th>노출상태</th>
								<th>기능</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="34"
										/>선택</label
									>
								</td>
								<td class="left">비회원 개인정보취급방침 [ver 1.0]</td>
								<td>2018-07-31 16:43:25</td>
								<td>admin</td>
								<td>
									<label>
										<input
											type="radio"
											name="iscurrent"
											value="T"
											checked=""
											onchange="changeIscurrent('34');"
										/>
									</label>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_pri sm"
											onclick="reg('34');"
										>
											수정
										</button>
										<button
											type="button"
											class="btn_sec sm"
											onclick="del('34');"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</form>

				<div class="paging">
					<span
						><a href="/nmanager/setup/config_terms_history?page=1&amp;code=202"
							><strong class="active">1</strong></a
						></span
					>
				</div>

				<div class="btn_wrap">
					<button type="button" class="btn_pri" onclick="reg(0);">등록</button>
					<button type="button" onclick="delList()" class="btn_sec">
						선택삭제
					</button>
				</div>
			</section>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>

	<main v-if="$route.query.code === '203'" id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				비회원 제3자정보제공동의<button
					id="addBmark"
					onclick="addBookmark('비회원 제3자정보제공동의')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>약관관리</li>
				<li>비회원 제3자정보제공동의</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				서비스 이용정책 중 '비회원 제3자정보제공동의'의 이력을 관리하실 수
				있습니다.
			</li>
			<li>적용 위치 : 없음.</li>
		</ul>

		<!-- <script type="text/javascript">
			function reg(idx) {
				var code = $('input[name="code"]').val();

				if (!idx) {
					idx = 0;
				}

				location.href = 'config_terms_history_reg?code=' + code + '&idx=' + idx;
			}

			function changeIscurrent(idxVal) {
				var code = $('input[name="code"]').val();
				var idx = parseInt(idxVal);

				if (!idx) {
					alert('유효하지 않은 이력이 선택되었습니다.');
				}

				if (confirm('선택된 이력을 현재버전으로 설정하시겠습니까?')) {
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_change_iscurrent_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idx: idx,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
					});
				} else {
					$('input[name="iscurrent"]').attr('checked', false);
					$('input[name="iscurrent"]').each(function () {
						if ($(this).val() == 'T') {
							$(this).attr('checked', true);
						}
					});
					alert('취소되었습니다.');
				}
			}

			function delList() {
				var f = document.Frm;

				var code = f.code.value;
				var items = '';

				if (!f.cbList) {
					return false;
				}

				if (typeof f.cbList.length == 'undefined') {
					if (f.cbList.checked) items = f.cbList.value;
				} else {
					for (var i = 0; i < f.cbList.length; i++) {
						if (f.cbList[i].checked) {
							items += (items ? ',' : '') + f.cbList[i].value;
						}
					}
				}

				if (items == '') {
					alert('삭제하실 항목을 선택해주세요.');
					return false;
				}

				var msg =
					'선택된 이력 정보는 완전히 삭제되어 복구하실 수 없습니다.' +
					'\n삭제를 진행하시겠습니까?';
				if (confirm(msg)) {
					$('.wrap-loading').show();
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_del_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idxs: items,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
								document.location.reload();
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
						complete: function () {
							$('.wrap-loading').hide();
						},
					});
				}
			}

			function del(idx) {
				var f = document.Frm;

				var code = f.code.value;

				var msg =
					'선택된 이력 정보는 완전히 삭제되어 복구하실 수 없습니다.' +
					'\n삭제를 진행하시겠습니까?';
				if (confirm(msg)) {
					$('.wrap-loading').show();
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_del_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idxs: idx,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
								document.location.reload();
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
						complete: function () {
							$('.wrap-loading').hide();
						},
					});
				}
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form name="Frm" method="post">
					<input type="hidden" name="code" value="203" />

					<div class="section_head">
						<h4 class="total">
							총 <span><strong>1개</strong></span
							>의 정보가 등록되어있습니다.
						</h4>
					</div>

					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_list"
					>
						<caption>
							이용약관 이력 리스트
						</caption>
						<colgroup>
							<col width="5%" />
							<col width="35%" />
							<col width="15%" />
							<col width="18%" />
							<col width="12%" />
							<col width="15%" />
						</colgroup>
						<thead>
							<tr>
								<th>
									<label
										><input
											type="checkbox"
											name="cbListAll"
											onclick="checkCbAll(this.form.cbList, this.checked)"
										/>전체선택</label
									>
								</th>
								<th>약관명 [Version]</th>
								<th>등록일시</th>
								<th>등록자ID</th>
								<th>노출상태</th>
								<th>기능</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="35"
										/>선택</label
									>
								</td>
								<td class="left">비회원 제3자정보제공동의 [ver 1.0]</td>
								<td>2018-07-31 16:43:39</td>
								<td>admin</td>
								<td>
									<label>
										<input
											type="radio"
											name="iscurrent"
											value="T"
											checked=""
											onchange="changeIscurrent('35');"
										/>
									</label>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_pri sm"
											onclick="reg('35');"
										>
											수정
										</button>
										<button
											type="button"
											class="btn_sec sm"
											onclick="del('35');"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</form>

				<div class="paging">
					<span
						><a href="/nmanager/setup/config_terms_history?page=1&amp;code=203"
							><strong class="active">1</strong></a
						></span
					>
				</div>

				<div class="btn_wrap">
					<button type="button" class="btn_pri" onclick="reg(0);">등록</button>
					<button type="button" onclick="delList()" class="btn_sec">
						선택삭제
					</button>
				</div>
			</section>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>

	<main v-if="$route.query.code === '301'" id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				입점사 이용약관<button
					id="addBmark"
					onclick="addBookmark('입점사 이용약관')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>약관관리</li>
				<li>입점사 이용약관</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				서비스 이용정책 중 '입점사 이용약관'의 이력을 관리하실 수 있습니다.
			</li>
			<li>적용 위치 : 없음.</li>
		</ul>

		<!-- <script type="text/javascript">
			function reg(idx) {
				var code = $('input[name="code"]').val();

				if (!idx) {
					idx = 0;
				}

				location.href = 'config_terms_history_reg?code=' + code + '&idx=' + idx;
			}

			function changeIscurrent(idxVal) {
				var code = $('input[name="code"]').val();
				var idx = parseInt(idxVal);

				if (!idx) {
					alert('유효하지 않은 이력이 선택되었습니다.');
				}

				if (confirm('선택된 이력을 현재버전으로 설정하시겠습니까?')) {
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_change_iscurrent_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idx: idx,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
					});
				} else {
					$('input[name="iscurrent"]').attr('checked', false);
					$('input[name="iscurrent"]').each(function () {
						if ($(this).val() == 'T') {
							$(this).attr('checked', true);
						}
					});
					alert('취소되었습니다.');
				}
			}

			function delList() {
				var f = document.Frm;

				var code = f.code.value;
				var items = '';

				if (!f.cbList) {
					return false;
				}

				if (typeof f.cbList.length == 'undefined') {
					if (f.cbList.checked) items = f.cbList.value;
				} else {
					for (var i = 0; i < f.cbList.length; i++) {
						if (f.cbList[i].checked) {
							items += (items ? ',' : '') + f.cbList[i].value;
						}
					}
				}

				if (items == '') {
					alert('삭제하실 항목을 선택해주세요.');
					return false;
				}

				var msg =
					'선택된 이력 정보는 완전히 삭제되어 복구하실 수 없습니다.' +
					'\n삭제를 진행하시겠습니까?';
				if (confirm(msg)) {
					$('.wrap-loading').show();
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_del_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idxs: items,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
								document.location.reload();
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
						complete: function () {
							$('.wrap-loading').hide();
						},
					});
				}
			}

			function del(idx) {
				var f = document.Frm;

				var code = f.code.value;

				var msg =
					'선택된 이력 정보는 완전히 삭제되어 복구하실 수 없습니다.' +
					'\n삭제를 진행하시겠습니까?';
				if (confirm(msg)) {
					$('.wrap-loading').show();
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_del_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idxs: idx,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
								document.location.reload();
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
						complete: function () {
							$('.wrap-loading').hide();
						},
					});
				}
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form name="Frm" method="post">
					<input type="hidden" name="code" value="301" />

					<div class="section_head">
						<h4 class="total">
							총 <span><strong>1개</strong></span
							>의 정보가 등록되어있습니다.
						</h4>
					</div>

					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_list"
					>
						<caption>
							이용약관 이력 리스트
						</caption>
						<colgroup>
							<col width="5%" />
							<col width="35%" />
							<col width="15%" />
							<col width="18%" />
							<col width="12%" />
							<col width="15%" />
						</colgroup>
						<thead>
							<tr>
								<th>
									<label
										><input
											type="checkbox"
											name="cbListAll"
											onclick="checkCbAll(this.form.cbList, this.checked)"
										/>전체선택</label
									>
								</th>
								<th>약관명 [Version]</th>
								<th>등록일시</th>
								<th>등록자ID</th>
								<th>노출상태</th>
								<th>기능</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="32"
										/>선택</label
									>
								</td>
								<td class="left">입점사 이용약관 [ver 1.0]</td>
								<td>2018-07-31 16:28:08</td>
								<td>admin</td>
								<td>
									<label>
										<input
											type="radio"
											name="iscurrent"
											value="T"
											checked=""
											onchange="changeIscurrent('32');"
										/>
									</label>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_pri sm"
											onclick="reg('32');"
										>
											수정
										</button>
										<button
											type="button"
											class="btn_sec sm"
											onclick="del('32');"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</form>

				<div class="paging">
					<span
						><a href="/nmanager/setup/config_terms_history?page=1&amp;code=301"
							><strong class="active">1</strong></a
						></span
					>
				</div>

				<div class="btn_wrap">
					<button type="button" class="btn_pri" onclick="reg(0);">등록</button>
					<button type="button" onclick="delList()" class="btn_sec">
						선택삭제
					</button>
				</div>
			</section>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>

	<main v-if="$route.query.code === '302'" id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				입점사 개인정보취급방침<button
					id="addBmark"
					onclick="addBookmark('입점사 개인정보취급방침')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>약관관리</li>
				<li>입점사 개인정보취급방침</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				서비스 이용정책 중 '입점사 개인정보취급방침'의 이력을 관리하실 수
				있습니다.
			</li>
			<li>적용 위치 : 없음.</li>
		</ul>

		<!-- <script type="text/javascript">
			function reg(idx) {
				var code = $('input[name="code"]').val();

				if (!idx) {
					idx = 0;
				}

				location.href = 'config_terms_history_reg?code=' + code + '&idx=' + idx;
			}

			function changeIscurrent(idxVal) {
				var code = $('input[name="code"]').val();
				var idx = parseInt(idxVal);

				if (!idx) {
					alert('유효하지 않은 이력이 선택되었습니다.');
				}

				if (confirm('선택된 이력을 현재버전으로 설정하시겠습니까?')) {
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_change_iscurrent_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idx: idx,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
					});
				} else {
					$('input[name="iscurrent"]').attr('checked', false);
					$('input[name="iscurrent"]').each(function () {
						if ($(this).val() == 'T') {
							$(this).attr('checked', true);
						}
					});
					alert('취소되었습니다.');
				}
			}

			function delList() {
				var f = document.Frm;

				var code = f.code.value;
				var items = '';

				if (!f.cbList) {
					return false;
				}

				if (typeof f.cbList.length == 'undefined') {
					if (f.cbList.checked) items = f.cbList.value;
				} else {
					for (var i = 0; i < f.cbList.length; i++) {
						if (f.cbList[i].checked) {
							items += (items ? ',' : '') + f.cbList[i].value;
						}
					}
				}

				if (items == '') {
					alert('삭제하실 항목을 선택해주세요.');
					return false;
				}

				var msg =
					'선택된 이력 정보는 완전히 삭제되어 복구하실 수 없습니다.' +
					'\n삭제를 진행하시겠습니까?';
				if (confirm(msg)) {
					$('.wrap-loading').show();
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_del_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idxs: items,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
								document.location.reload();
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
						complete: function () {
							$('.wrap-loading').hide();
						},
					});
				}
			}

			function del(idx) {
				var f = document.Frm;

				var code = f.code.value;

				var msg =
					'선택된 이력 정보는 완전히 삭제되어 복구하실 수 없습니다.' +
					'\n삭제를 진행하시겠습니까?';
				if (confirm(msg)) {
					$('.wrap-loading').show();
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_del_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idxs: idx,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
								document.location.reload();
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
						complete: function () {
							$('.wrap-loading').hide();
						},
					});
				}
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form name="Frm" method="post">
					<input type="hidden" name="code" value="302" />

					<div class="section_head">
						<h4 class="total">
							총 <span><strong>1개</strong></span
							>의 정보가 등록되어있습니다.
						</h4>
					</div>

					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_list"
					>
						<caption>
							이용약관 이력 리스트
						</caption>
						<colgroup>
							<col width="5%" />
							<col width="35%" />
							<col width="15%" />
							<col width="18%" />
							<col width="12%" />
							<col width="15%" />
						</colgroup>
						<thead>
							<tr>
								<th>
									<label
										><input
											type="checkbox"
											name="cbListAll"
											onclick="checkCbAll(this.form.cbList, this.checked)"
										/>전체선택</label
									>
								</th>
								<th>약관명 [Version]</th>
								<th>등록일시</th>
								<th>등록자ID</th>
								<th>노출상태</th>
								<th>기능</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="25"
										/>선택</label
									>
								</td>
								<td class="left">입점사 개인정보취급방침 [ver 1.0]</td>
								<td>2018-07-30 14:51:28</td>
								<td>admin</td>
								<td>
									<label>
										<input
											type="radio"
											name="iscurrent"
											value="T"
											checked=""
											onchange="changeIscurrent('25');"
										/>
									</label>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_pri sm"
											onclick="reg('25');"
										>
											수정
										</button>
										<button
											type="button"
											class="btn_sec sm"
											onclick="del('25');"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</form>

				<div class="paging">
					<span
						><a href="/nmanager/setup/config_terms_history?page=1&amp;code=302"
							><strong class="active">1</strong></a
						></span
					>
				</div>

				<div class="btn_wrap">
					<button type="button" class="btn_pri" onclick="reg(0);">등록</button>
					<button type="button" onclick="delList()" class="btn_sec">
						선택삭제
					</button>
				</div>
			</section>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>

	<main v-if="$route.query.code === '401'" id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				마케팅정보 수집 및 이용동의<button
					id="addBmark"
					onclick="addBookmark('마케팅정보 수집 및 이용동의')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>약관관리</li>
				<li>마케팅정보 수집 및 이용동의</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				서비스 이용정책 중 '마케팅정보 수집 및 이용동의'의 이력을 관리하실 수
				있습니다.
			</li>
			<li>적용 위치 : 없음.</li>
		</ul>

		<!-- <script type="text/javascript">
			function reg(idx) {
				var code = $('input[name="code"]').val();

				if (!idx) {
					idx = 0;
				}

				location.href = 'config_terms_history_reg?code=' + code + '&idx=' + idx;
			}

			function changeIscurrent(idxVal) {
				var code = $('input[name="code"]').val();
				var idx = parseInt(idxVal);

				if (!idx) {
					alert('유효하지 않은 이력이 선택되었습니다.');
				}

				if (confirm('선택된 이력을 현재버전으로 설정하시겠습니까?')) {
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_change_iscurrent_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idx: idx,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
					});
				} else {
					$('input[name="iscurrent"]').attr('checked', false);
					$('input[name="iscurrent"]').each(function () {
						if ($(this).val() == 'T') {
							$(this).attr('checked', true);
						}
					});
					alert('취소되었습니다.');
				}
			}

			function delList() {
				var f = document.Frm;

				var code = f.code.value;
				var items = '';

				if (!f.cbList) {
					return false;
				}

				if (typeof f.cbList.length == 'undefined') {
					if (f.cbList.checked) items = f.cbList.value;
				} else {
					for (var i = 0; i < f.cbList.length; i++) {
						if (f.cbList[i].checked) {
							items += (items ? ',' : '') + f.cbList[i].value;
						}
					}
				}

				if (items == '') {
					alert('삭제하실 항목을 선택해주세요.');
					return false;
				}

				var msg =
					'선택된 이력 정보는 완전히 삭제되어 복구하실 수 없습니다.' +
					'\n삭제를 진행하시겠습니까?';
				if (confirm(msg)) {
					$('.wrap-loading').show();
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_del_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idxs: items,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
								document.location.reload();
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
						complete: function () {
							$('.wrap-loading').hide();
						},
					});
				}
			}

			function del(idx) {
				var f = document.Frm;

				var code = f.code.value;

				var msg =
					'선택된 이력 정보는 완전히 삭제되어 복구하실 수 없습니다.' +
					'\n삭제를 진행하시겠습니까?';
				if (confirm(msg)) {
					$('.wrap-loading').show();
					$.ajax({
						type: 'POST',
						url: '/nmanager/setup/config_terms_history_del_act_ajax',
						dataType: 'json',
						data: {
							code: code,
							idxs: idx,
						},
						success: function (data) {
							if (data.result) {
								alert(data.resultMessage);
								document.location.reload();
							}
						},
						error: function (event) {
							alert('시스템 오류입니다. 관리자에게 문의해주세요.');
						},
						complete: function () {
							$('.wrap-loading').hide();
						},
					});
				}
			}
			//]]>
		</script> -->

		<div class="main_content">
			<section class="cont_wrap">
				<form name="Frm" method="post">
					<input type="hidden" name="code" value="401" />

					<div class="section_head">
						<h4 class="total">
							총 <span><strong>4개</strong></span
							>의 정보가 등록되어있습니다.
						</h4>
					</div>

					<table
						width="100%"
						border="0"
						cellspacing="0"
						cellpadding="0"
						class="t_list"
					>
						<caption>
							이용약관 이력 리스트
						</caption>
						<colgroup>
							<col width="5%" />
							<col width="35%" />
							<col width="15%" />
							<col width="18%" />
							<col width="12%" />
							<col width="15%" />
						</colgroup>
						<thead>
							<tr>
								<th>
									<label
										><input
											type="checkbox"
											name="cbListAll"
											onclick="checkCbAll(this.form.cbList, this.checked)"
										/>전체선택</label
									>
								</th>
								<th>약관명 [Version]</th>
								<th>등록일시</th>
								<th>등록자ID</th>
								<th>노출상태</th>
								<th>기능</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="30"
										/>선택</label
									>
								</td>
								<td class="left">마케팅정보 수집 및 이용동의 [ver 1.3]</td>
								<td>2018-07-30 16:11:48</td>
								<td>admin</td>
								<td>
									<label>
										<input
											type="radio"
											name="iscurrent"
											value="T"
											checked=""
											onchange="changeIscurrent('30');"
										/>
									</label>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_pri sm"
											onclick="reg('30');"
										>
											수정
										</button>
										<button
											type="button"
											class="btn_sec sm"
											onclick="del('30');"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>

							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="29"
										/>선택</label
									>
								</td>
								<td class="left">마케팅정보 수집 및 이용동의 [ver 1.2]</td>
								<td>2018-07-30 16:11:36</td>
								<td>admin</td>
								<td>
									<label>
										<input
											type="radio"
											name="iscurrent"
											value="F"
											onchange="changeIscurrent('29');"
										/>
									</label>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_pri sm"
											onclick="reg('29');"
										>
											수정
										</button>
										<button
											type="button"
											class="btn_sec sm"
											onclick="del('29');"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>

							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="24"
										/>선택</label
									>
								</td>
								<td class="left">마케팅정보 수집 및 이용동의 [ver 1.1]</td>
								<td>2018-07-30 14:47:41</td>
								<td>admin</td>
								<td>
									<label>
										<input
											type="radio"
											name="iscurrent"
											value="F"
											onchange="changeIscurrent('24');"
										/>
									</label>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_pri sm"
											onclick="reg('24');"
										>
											수정
										</button>
										<button
											type="button"
											class="btn_sec sm"
											onclick="del('24');"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>

							<tr>
								<td>
									<label
										><input
											type="checkbox"
											name="cbList"
											value="23"
										/>선택</label
									>
								</td>
								<td class="left">마케팅정보 수집 및 이용동의 [ver 1.0]</td>
								<td>2018-07-30 14:47:16</td>
								<td>admin</td>
								<td>
									<label>
										<input
											type="radio"
											name="iscurrent"
											value="F"
											onchange="changeIscurrent('23');"
										/>
									</label>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_pri sm"
											onclick="reg('23');"
										>
											수정
										</button>
										<button
											type="button"
											class="btn_sec sm"
											onclick="del('23');"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</form>

				<div class="paging">
					<span
						><a href="/nmanager/setup/config_terms_history?page=1&amp;code=401"
							><strong class="active">1</strong></a
						></span
					>
				</div>

				<div class="btn_wrap">
					<button type="button" class="btn_pri" onclick="reg(0);">등록</button>
					<button type="button" onclick="delList()" class="btn_sec">
						선택삭제
					</button>
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
