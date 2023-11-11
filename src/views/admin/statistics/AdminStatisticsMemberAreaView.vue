<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				거주지역별 통계<button
					id="addBmark"
					onclick="addBookmark('거주지역별 통계')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>통계/분석</li>
				<li>회원 통계</li>
				<li>거주지역별 통계</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>사이트에 가입한 회원들을 거주지역별로 분석합니다.</li>
			<li>
				회원의 주소정보 중 정확하지 않은 정보가 등록되어 있을 경우 통계 결과에
				오차가 발생할 수 있습니다.
			</li>
		</ul>

		<div class="main_content">
			<section class="cont_wrap">
				<table
					border="0"
					cellpadding="0"
					cellspacing="0"
					width="100%"
					class="table_col"
				>
					<caption>
						거주지별 통계 내역
					</caption>
					<colgroup>
						<col width="80" />
						<col width="80" />
						<col width="80" />
						<col width="*" />
					</colgroup>
					<thead>
						<tr>
							<th>구분</th>
							<th>회원수</th>
							<th>비율</th>
							<th>그래프</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>서울</td>
							<td>4</td>
							<td>100%</td>
							<td class="txt_left">
								<span class="graphbox color1" style="width: 500px"></span>
							</td>
						</tr>

						<tr>
							<td>부산</td>
							<td>0</td>
							<td>0%</td>
							<td class="txt_left">
								<span class="graphbox color1" style="width: 0px"></span>
							</td>
						</tr>

						<tr>
							<td>인천</td>
							<td>0</td>
							<td>0%</td>
							<td class="txt_left">
								<span class="graphbox color1" style="width: 0px"></span>
							</td>
						</tr>

						<tr>
							<td>대구</td>
							<td>0</td>
							<td>0%</td>
							<td class="txt_left">
								<span class="graphbox color1" style="width: 0px"></span>
							</td>
						</tr>

						<tr>
							<td>대전</td>
							<td>0</td>
							<td>0%</td>
							<td class="txt_left">
								<span class="graphbox color1" style="width: 0px"></span>
							</td>
						</tr>

						<tr>
							<td>광주</td>
							<td>0</td>
							<td>0%</td>
							<td class="txt_left">
								<span class="graphbox color1" style="width: 0px"></span>
							</td>
						</tr>

						<tr>
							<td>울산</td>
							<td>0</td>
							<td>0%</td>
							<td class="txt_left">
								<span class="graphbox color1" style="width: 0px"></span>
							</td>
						</tr>

						<tr>
							<td>경기</td>
							<td>0</td>
							<td>0%</td>
							<td class="txt_left">
								<span class="graphbox color1" style="width: 0px"></span>
							</td>
						</tr>

						<tr>
							<td>전남</td>
							<td>0</td>
							<td>0%</td>
							<td class="txt_left">
								<span class="graphbox color1" style="width: 0px"></span>
							</td>
						</tr>

						<tr>
							<td>전북</td>
							<td>0</td>
							<td>0%</td>
							<td class="txt_left">
								<span class="graphbox color1" style="width: 0px"></span>
							</td>
						</tr>

						<tr>
							<td>강원</td>
							<td>0</td>
							<td>0%</td>
							<td class="txt_left">
								<span class="graphbox color1" style="width: 0px"></span>
							</td>
						</tr>

						<tr>
							<td>충남</td>
							<td>0</td>
							<td>0%</td>
							<td class="txt_left">
								<span class="graphbox color1" style="width: 0px"></span>
							</td>
						</tr>

						<tr>
							<td>충북</td>
							<td>0</td>
							<td>0%</td>
							<td class="txt_left">
								<span class="graphbox color1" style="width: 0px"></span>
							</td>
						</tr>

						<tr>
							<td>경북</td>
							<td>0</td>
							<td>0%</td>
							<td class="txt_left">
								<span class="graphbox color1" style="width: 0px"></span>
							</td>
						</tr>

						<tr>
							<td>경남</td>
							<td>0</td>
							<td>0%</td>
							<td class="txt_left">
								<span class="graphbox color1" style="width: 0px"></span>
							</td>
						</tr>

						<tr>
							<td>제주</td>
							<td>0</td>
							<td>0%</td>
							<td class="txt_left">
								<span class="graphbox color1" style="width: 0px"></span>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td>합계</td>
							<td>4</td>
							<td>100%</td>
							<td></td>
						</tr>
					</tfoot>
				</table>
			</section>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
