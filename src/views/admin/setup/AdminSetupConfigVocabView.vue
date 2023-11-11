<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				용어설정<button
					id="addBmark"
					onclick="addBookmark('용어설정')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>전체운영설정</li>
				<li>용어설정</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				전화번호 지역번호, 휴대폰 사업자번호 등 사이트에서 사용되는 어휘를
				설정합니다.
			</li>
		</ul>

		<!-- 에디터 Script -->
		<!-- <script
			type="text/javascript"
			src="/common/editor/se2/js/HuskyEZCreator.js"
		></script>
		<script type="text/javascript">
			function changeVocab(item) {
				location.href =
					'config_vocab?code=' + item.options[item.selectedIndex].value;
			}

			function validSubmit() {
				var f = document.Frm;
				var size = '4'.toNumeric();

				if (isEmpty(f.words)) {
					alert('항목 설정을 입력해 주세요.');
					f.words.focus();
					return false;
				}

				var arrWord = f.words.value.split('\n');

				var checker = 0;
				for (var i = 0; i < arrWord.length; i++) {
					if (arrWord[i].stripspace() != '') {
						if (arrWord[i].trim().length > size) {
							alert(
								'한 항목당 ' +
									size +
									'자의 한글, 영문, 숫자만 입력이 가능합니다.',
							);
							f.words.focus();
							return false;
						}
						++checker;
					}
				}

				if (checker == 0) {
					alert('항목 설정을 입력해 주세요.');
					f.words.focus();
					return false;
				}

				if (confirm('등록하시겠습니까?')) {
					f.submit();
				}
			}

			addEvent(window, 'load', function () {
				_e('words').onkeyup = function () {
					this.rows = this.value.split('\n').length;
				};
			});
			//]]>
		</script> -->

		<form name="Frm" method="post" action="config_vocab_act">
			<input type="hidden" name="mode" value="VOCAB" />

			<div class="main_content">
				<section class="cont_wrap">
					<div class="section_head">
						<h4>용어 설정</h4>
					</div>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_form"
					>
						<caption>
							용어 설정 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>용어 분류</th>
								<td>
									<select id="code" name="code" onchange="changeVocab(this)">
										<option value="101" selected="">전화번호 지역번호</option>
										<option value="102">휴대폰 인식번호</option>
										<option value="103">이메일주소 도메인</option>
										<option value="104">은행</option>
										<option value="105">취소사유</option>
										<option value="106">교환사유</option>
										<option value="107">반품사유</option>
									</select>
								</td>
							</tr>
							<tr>
								<th>항목 설정</th>
								<td>
									<div style="float: left">
										<textarea id="words" rows="22" name="words">
051
053
032
062
042
052
044
031
033
043
041
063
061
054
055
064
070
080
0502
02</textarea
										>
									</div>
									<div class="fl" style="margin-left: 20px">
										<ul class="noti_info">
											<li>한줄에 한 항목씩 입력해 주세요.</li>
											<li>
												한 항목당 4자의 한글, 영문, 숫자를 입력 할 수 있습니다.
											</li>
										</ul>
									</div>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="btn_wrap">
						<button type="submit" class="btn_pri" onclick="validSubmit()">
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
