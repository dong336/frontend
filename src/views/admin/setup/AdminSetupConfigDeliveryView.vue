<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				배송설정<button
					id="addBmark"
					onclick="addBookmark('배송설정')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>환경설정</li>
				<li>전체운영설정</li>
				<li>배송설정</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>
				배송료에 대한 금액 및 조건을 설정하고 배송회사, 송장번호를 조회할 주소
				등을 설정합니다.
			</li>
			<li>입점업체에서 사용중인 배송사는 삭제할 수 없습니다.</li>
		</ul>

		<!-- <script
			type="text/javascript"
			src="/common/editor/se2/js/HuskyEZCreator.js"
		></script>
		<script type="text/javascript">
			//<![CDATA[
			var cellHtmls = new Array();
			cellHtmls[0] = {
				html: '<input type="hidden" name="idx" /><input type="hidden" name="isUse" /><label><input type="checkbox" name="cbList" />선택</label>',
			};
			cellHtmls[1] = {
				html: '<input type="text" name="name" class="text_input" maxlength="25" />',
			};
			cellHtmls[2] = {
				html: '<input type="text" name="tel" class="text_input" maxlength="20" />',
			};
			cellHtmls[3] = {
				html: '<input type="text" name="url" class="text_input" maxlength="300" />',
			};
			cellHtmls[4] = {
				html: '<input type="text" name="trackingUrl" class="text_input" maxlength="300" />',
			};
			cellHtmls[5] = {
				html: '<button type="button" class="btn_sec sm" onClick="delRow(this)">삭제</button>',
			};

			function addRow() {
				var tableId = 'tb_delivery_company';

				var $row = $('<tr />');
				for (i = 0; i < cellHtmls.length; i++) {
					var $cell = $('<td />').html(cellHtmls[i].html).appendTo($row);
				}
				$('#' + tableId)
					.children('tbody')
					.append($row);
			}

			function delRow(obj) {
				var tableId = 'tb_delivery_company';

				$(obj).parents('tr').eq(0).remove();

				if (
					$('#' + tableId)
						.children('tbody')
						.children('tr').length < 1
				) {
					addRow();
				}
			}
			//]]>
		</script> -->

		<!-- <script type="text/javascript">
			//<![CDATA[
			function checkDelivery() {
				var f = document.Frm;
				var isFree;

				if (getRadio(f.deliveryMethod) == '102') {
					isFree = false;
				} else if (getRadio(f.deliveryMethod) == '103') {
					isFree = false;
				} else {
					isFree = true;
					setRadio(f.deliveryMethod, '101');
				}

				if (isFree) {
					_es('tbDeliveryPay').display = 'none';
					_es('tbDeliveryFree').display = '';
				} else {
					_es('tbDeliveryFree').display = 'none';
					_es('tbDeliveryPay').display = '';
				}
			}

			function checkDeliveryLimit() {
				var f = document.Frm;
				if (f.cbDeliveryLimitFee.checked) {
					f.deliveryLimit.disabled = false;
					f.deliveryLimit.style.backgroundColor = '';
				} else {
					f.deliveryLimit.disabled = true;
					f.deliveryLimit.style.backgroundColor = 'silver';
				}
			}

			function delFail() {
				alert('입점업체에서 사용중인 배송사는 삭제할 수 없습니다.');
				return false;
			}

			function validSubmit() {
				var f = document.Frm;

				if (getRadio(f.deliveryMethod) != '101') {
					if (f.deliveryFee.value.toNumeric() < 1) {
						alert('배송료를 입력해 주세요.');
						f.deliveryFee.focus();
						return false;
					}

					if (
						f.cbDeliveryLimitFee.checked &&
						f.deliveryLimit.value.toNumeric() < 1
					) {
						alert('무료배송 기준금액을 입력해 주세요.');
						f.deliveryLimit.focus();
						return false;
					}
				}

				var checker = 0;
				if (typeof f.idx.length == 'undefined') {
					if (f.cbList.checked) {
						f.isUse.value = 'T';
						++checker;
					} else {
						f.isUse.value = 'F';
					}

					if (isEmpty(f.name)) {
						alert('배송회사명을 입력해 주세요.');
						f.name.focus();
						return false;
					}

					if (!isEmpty(f.url) && !checkUrl(f.url.value)) {
						alert('http:// 를 포함한 링크주소를 정확하게 입력해 주세요.');
						f.url.focus();
						return false;
					}

					if (!isEmpty(f.trackingUrl) && !checkUrl(f.trackingUrl.value)) {
						alert('http:// 를 포함한 링크주소를 정확하게 입력해 주세요.');
						f.trackingUrl.focus();
						return false;
					}
				} else {
					for (var i = 0; i < f.idx.length; i++) {
						if (f.cbList[i].checked) {
							f.isUse[i].value = 'T';
							++checker;
						} else {
							f.isUse[i].value = 'F';
						}

						if (isEmpty(f.name[i])) {
							alert('배송회사명을 입력해 주세요.');
							f.name[i].focus();
							return false;
						}

						if (!isEmpty(f.url[i]) && !checkUrl(f.url[i].value)) {
							alert('http:// 를 포함한 링크주소를 정확하게 입력해 주세요.');
							f.url[i].focus();
							return false;
						}

						if (
							!isEmpty(f.trackingUrl[i]) &&
							!checkUrl(f.trackingUrl[i].value)
						) {
							alert('http:// 를 포함한 링크주소를 정확하게 입력해 주세요.');
							f.trackingUrl[i].focus();
							return false;
						}
					}
				}

				if (checker == 0) {
					alert('사용하실 배송회사를 하나이상 선택해주세요.');
					return false;
				}

				if (confirm('등록하시겠습니까?')) {
					f.submit();
				}
			}

			addEvent(window, 'load', checkDeliveryLimit);
			//]]>
		</script> -->

		<form name="Frm" method="post" action="config_delivery_act">
			<input type="hidden" name="mode" value="DELIVERY" />

			<div class="main_content">
				<section class="cont_wrap">
					<div class="section_head">
						<h4>배송정책</h4>
					</div>

					<table
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_form"
					>
						<caption>
							배송정책 설정 폼
						</caption>
						<colgroup>
							<col width="130" />
							<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th>배송료 설정</th>
								<td>
									<div class="label_wrap">
										<label
											><input
												type="radio"
												name="deliveryMethod"
												value="101"
												onclick="checkDelivery(this)"
											/>무료</label
										>
										<label
											><input
												type="radio"
												name="deliveryMethod"
												value="102"
												onclick="checkDelivery(this)"
												checked=""
											/>선불</label
										>
										<label
											><input
												type="radio"
												name="deliveryMethod"
												value="103"
												onclick="checkDelivery(this)"
											/>착불</label
										>
									</div>
									<div id="tbDeliveryFree" style="display: none">
										<div class="topline">
											<span style="line-height: 19px"
												>배송료는 무료 입니다.</span
											>
										</div>
									</div>

									<div id="tbDeliveryPay">
										<div class="topline">
											<input
												name="deliveryFee"
												value="2,500"
												class="text_input tr"
												style="width: 75px"
												onkeyup="toCurrency(this)"
												onblur="toCurrency(this)"
											/>
											원
											<span style="margin-left: 16px"
												>(&nbsp;<label
													><input
														type="checkbox"
														name="cbDeliveryLimitFee"
														onclick="checkDeliveryLimit()"
														checked=""
													/>무료배송 설정</label
												>
												:
												<input
													name="deliveryLimit"
													value="10,000"
													class="text_input tr"
													style="width: 75px"
													onkeyup="toCurrency(this)"
													onblur="toCurrency(this)"
												/>
												원 이상 구매시 배송비 무료)</span
											>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="section_head">
						<h4>배송회사 설정</h4>
					</div>

					<table
						id="tb_delivery_company"
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="100%"
						class="t_list"
					>
						<caption>
							배송회사 리스트
						</caption>
						<colgroup>
							<col width="60" />
							<col width="200" />
							<col width="160" />
							<col width="350" />
							<col width="*" />
							<col width="80" />
						</colgroup>
						<thead>
							<tr>
								<th>사용</th>
								<th>배송회사</th>
								<th>연락처</th>
								<th>배송사 URL</th>
								<th>배송조회 URL</th>
								<th>
									<div class="btn_wrap">
										<button type="button" class="btn_sec sm" onclick="addRow()">
											추가
										</button>
									</div>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<label>
										<input type="hidden" name="idx" value="1" /><input
											type="hidden"
											name="isUse"
											value="T"
										/><input type="checkbox" name="cbList" checked="" />사용
									</label>
								</td>
								<td>
									<input
										type="text"
										name="name"
										class="text_input"
										maxlength="25"
										value="한진택배"
									/>
								</td>
								<td>
									<input
										type="text"
										name="tel"
										class="text_input"
										maxlength="20"
										value="1588-0011"
									/>
								</td>
								<td>
									<input
										type="text"
										name="url"
										class="text_input"
										maxlength="300"
										value="http://www.hanjin.co.kr"
									/>
								</td>
								<td>
									<input
										type="text"
										name="trackingUrl"
										class="text_input"
										maxlength="300"
										value="http://www.hanjin.co.kr/Delivery_html/inquiry/result_waybill.jsp?wbl_num="
									/>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_sec sm"
											onclick="delRow(this)"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>

							<tr>
								<td>
									<label>
										<input type="hidden" name="idx" value="2" /><input
											type="hidden"
											name="isUse"
											value="T"
										/><input type="checkbox" name="cbList" checked="" />사용
									</label>
								</td>
								<td>
									<input
										type="text"
										name="name"
										class="text_input"
										maxlength="25"
										value="현대택배"
									/>
								</td>
								<td>
									<input
										type="text"
										name="tel"
										class="text_input"
										maxlength="20"
										value="1588-2121"
									/>
								</td>
								<td>
									<input
										type="text"
										name="url"
										class="text_input"
										maxlength="300"
										value="http://www.hlc.co.kr"
									/>
								</td>
								<td>
									<input
										type="text"
										name="trackingUrl"
										class="text_input"
										maxlength="300"
										value="http://www.hlc.co.kr/hydex/jsp/tracking/trackingViewCus.jsp?InvNo="
									/>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_sec sm"
											onclick="delRow(this)"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>

							<tr>
								<td>
									<label>
										<input type="hidden" name="idx" value="4" /><input
											type="hidden"
											name="isUse"
											value="T"
										/><input type="checkbox" name="cbList" checked="" />사용
									</label>
								</td>
								<td>
									<input
										type="text"
										name="name"
										class="text_input"
										maxlength="25"
										value="KGB택배"
									/>
								</td>
								<td>
									<input
										type="text"
										name="tel"
										class="text_input"
										maxlength="20"
										value="1577-4577"
									/>
								</td>
								<td>
									<input
										type="text"
										name="url"
										class="text_input"
										maxlength="300"
										value="http://www.kgbls.co.kr"
									/>
								</td>
								<td>
									<input
										type="text"
										name="trackingUrl"
										class="text_input"
										maxlength="300"
										value="http://www.kgbls.co.kr/sub5/trace.asp?f_slipno="
									/>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_sec sm"
											onclick="delRow(this)"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>

							<tr>
								<td>
									<label>
										<input type="hidden" name="idx" value="7" /><input
											type="hidden"
											name="isUse"
											value="T"
										/><input type="checkbox" name="cbList" checked="" />사용
									</label>
								</td>
								<td>
									<input
										type="text"
										name="name"
										class="text_input"
										maxlength="25"
										value="대한통운"
									/>
								</td>
								<td>
									<input
										type="text"
										name="tel"
										class="text_input"
										maxlength="20"
										value="1588-1255"
									/>
								</td>
								<td>
									<input
										type="text"
										name="url"
										class="text_input"
										maxlength="300"
										value="http://wwwortodoor.co.kr"
									/>
								</td>
								<td>
									<input
										type="text"
										name="trackingUrl"
										class="text_input"
										maxlength="300"
										value="https://wwwortodoor.co.kr/parcel/doortodoor?fsp_action=PARC_ACT_002&amp;fsp_cmd=retrieveInvNoACT&amp;invc_no="
									/>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_sec sm"
											onclick="delRow(this)"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>

							<tr>
								<td>
									<label>
										<input type="hidden" name="idx" value="8" /><input
											type="hidden"
											name="isUse"
											value="T"
										/><input type="checkbox" name="cbList" checked="" />사용
									</label>
								</td>
								<td>
									<input
										type="text"
										name="name"
										class="text_input"
										maxlength="25"
										value="로젠택배"
									/>
								</td>
								<td>
									<input
										type="text"
										name="tel"
										class="text_input"
										maxlength="20"
										value="1588-9988"
									/>
								</td>
								<td>
									<input
										type="text"
										name="url"
										class="text_input"
										maxlength="300"
										value="http://d2d.ilogen.com"
									/>
								</td>
								<td>
									<input
										type="text"
										name="trackingUrl"
										class="text_input"
										maxlength="300"
										value="http://d2d.ilogen.com/d2d/delivery/invoice_tracesearch_quick.jsp?slipno="
									/>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_sec sm"
											onclick="delRow(this)"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>

							<tr>
								<td>
									<label>
										<input type="hidden" name="idx" value="9" /><input
											type="hidden"
											name="isUse"
											value="F"
										/><input type="checkbox" name="cbList" />사용
									</label>
								</td>
								<td>
									<input
										type="text"
										name="name"
										class="text_input"
										maxlength="25"
										value="CJ GLS"
									/>
								</td>
								<td>
									<input
										type="text"
										name="tel"
										class="text_input"
										maxlength="20"
										value="1588-3312"
									/>
								</td>
								<td>
									<input
										type="text"
										name="url"
										class="text_input"
										maxlength="300"
										value="http://nexs.cjgls.com"
									/>
								</td>
								<td>
									<input
										type="text"
										name="trackingUrl"
										class="text_input"
										maxlength="300"
										value="http://nexs.cjgls.com/web/service02_01.jsp?slipno="
									/>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_sec sm"
											onclick="delRow(this)"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>

							<tr>
								<td>
									<label>
										<input type="hidden" name="idx" value="10" /><input
											type="hidden"
											name="isUse"
											value="T"
										/><input type="checkbox" name="cbList" checked="" />사용
									</label>
								</td>
								<td>
									<input
										type="text"
										name="name"
										class="text_input"
										maxlength="25"
										value="옐로우캡"
									/>
								</td>
								<td>
									<input
										type="text"
										name="tel"
										class="text_input"
										maxlength="20"
										value="1588-0123"
									/>
								</td>
								<td>
									<input
										type="text"
										name="url"
										class="text_input"
										maxlength="300"
										value="http://www.yellowcap.co.kr"
									/>
								</td>
								<td>
									<input
										type="text"
										name="trackingUrl"
										class="text_input"
										maxlength="300"
										value="http://www.yellowcap.co.kr/custom/inquiry_result.asp?invoice_no="
									/>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_sec sm"
											onclick="delRow(this)"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>

							<tr>
								<td>
									<label>
										<input type="hidden" name="idx" value="12" /><input
											type="hidden"
											name="isUse"
											value="F"
										/><input type="checkbox" name="cbList" />사용
									</label>
								</td>
								<td>
									<input
										type="text"
										name="name"
										class="text_input"
										maxlength="25"
										value="우체국택배"
									/>
								</td>
								<td>
									<input
										type="text"
										name="tel"
										class="text_input"
										maxlength="20"
										value="1588-1300"
									/>
								</td>
								<td>
									<input
										type="text"
										name="url"
										class="text_input"
										maxlength="300"
										value="http://service.epost.go.kr"
									/>
								</td>
								<td>
									<input
										type="text"
										name="trackingUrl"
										class="text_input"
										maxlength="300"
										value="http://service.epost.go.kr/trace.RetrieveRegiPrclDeliv.postal?sid1="
									/>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_sec sm"
											onclick="delRow(this)"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>

							<tr>
								<td>
									<label>
										<input type="hidden" name="idx" value="13" /><input
											type="hidden"
											name="isUse"
											value="F"
										/><input type="checkbox" name="cbList" />사용
									</label>
								</td>
								<td>
									<input
										type="text"
										name="name"
										class="text_input"
										maxlength="25"
										value="동부택배"
									/>
								</td>
								<td>
									<input
										type="text"
										name="tel"
										class="text_input"
										maxlength="20"
										value="1588-8848"
									/>
								</td>
								<td>
									<input
										type="text"
										name="url"
										class="text_input"
										maxlength="300"
										value="http://wwwngbups.com"
									/>
								</td>
								<td>
									<input
										type="text"
										name="trackingUrl"
										class="text_input"
										maxlength="300"
										value="http://wwwngbups.com/Html/Delivery/DeliveryCheckView.jsp?item_no="
									/>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_sec sm"
											onclick="delRow(this)"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>

							<tr>
								<td>
									<label>
										<input type="hidden" name="idx" value="15" /><input
											type="hidden"
											name="isUse"
											value="F"
										/><input type="checkbox" name="cbList" />사용
									</label>
								</td>
								<td>
									<input
										type="text"
										name="name"
										class="text_input"
										maxlength="25"
										value="일양로지스택배"
									/>
								</td>
								<td>
									<input
										type="text"
										name="tel"
										class="text_input"
										maxlength="20"
										value="1588-0002"
									/>
								</td>
								<td>
									<input
										type="text"
										name="url"
										class="text_input"
										maxlength="300"
										value="http://www.ilyanglogis.com"
									/>
								</td>
								<td>
									<input
										type="text"
										name="trackingUrl"
										class="text_input"
										maxlength="300"
										value="http://www.ilyanglogis.com/functionality/tracking_result.asp?hawb_no="
									/>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_sec sm"
											onclick="delRow(this)"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>

							<tr>
								<td>
									<label>
										<input type="hidden" name="idx" value="16" /><input
											type="hidden"
											name="isUse"
											value="F"
										/><input type="checkbox" name="cbList" />사용
									</label>
								</td>
								<td>
									<input
										type="text"
										name="name"
										class="text_input"
										maxlength="25"
										value="경동택배"
									/>
								</td>
								<td>
									<input
										type="text"
										name="tel"
										class="text_input"
										maxlength="20"
										value="080-873-2178"
									/>
								</td>
								<td>
									<input
										type="text"
										name="url"
										class="text_input"
										maxlength="300"
										value="http://www.kdexp.com"
									/>
								</td>
								<td>
									<input
										type="text"
										name="trackingUrl"
										class="text_input"
										maxlength="300"
										value="http://www.kdexp.com/newDeliverySearch.kd?barcode="
									/>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_sec sm"
											onclick="delRow(this)"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>

							<tr>
								<td>
									<label>
										<input type="hidden" name="idx" value="18" /><input
											type="hidden"
											name="isUse"
											value="F"
										/><input type="checkbox" name="cbList" />사용
									</label>
								</td>
								<td>
									<input
										type="text"
										name="name"
										class="text_input"
										maxlength="25"
										value="KGLogis"
									/>
								</td>
								<td>
									<input
										type="text"
										name="tel"
										class="text_input"
										maxlength="20"
										value="1588-0123"
									/>
								</td>
								<td>
									<input
										type="text"
										name="url"
										class="text_input"
										maxlength="300"
										value="http://www.kgologis.co.kr"
									/>
								</td>
								<td>
									<input
										type="text"
										name="trackingUrl"
										class="text_input"
										maxlength="300"
										value="http://www.kglogis.co.kr/delivery/delivery_result.jsp?item_no="
									/>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_sec sm"
											onclick="delRow(this)"
										>
											삭제
										</button>
									</div>
								</td>
							</tr>

							<tr>
								<td>
									<label>
										<input type="hidden" name="idx" value="19" /><input
											type="hidden"
											name="isUse"
											value="F"
										/><input type="checkbox" name="cbList" />사용
									</label>
								</td>
								<td>
									<input
										type="text"
										name="name"
										class="text_input"
										maxlength="25"
										value="스마일"
									/>
								</td>
								<td>
									<input
										type="text"
										name="tel"
										class="text_input"
										maxlength="20"
										value="555-1344"
									/>
								</td>
								<td>
									<input
										type="text"
										name="url"
										class="text_input"
										maxlength="300"
										value="http://www.smileattack.co.kr"
									/>
								</td>
								<td>
									<input
										type="text"
										name="trackingUrl"
										class="text_input"
										maxlength="300"
										value=""
									/>
								</td>
								<td>
									<div class="btn_wrap">
										<button
											type="button"
											class="btn_sec sm"
											onclick="delRow(this)"
										>
											삭제
										</button>
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

		<img
			src="http://java.mallstore.co.kr/images/blank.gif"
			width="0"
			height="0"
		/>
		<!-- <script type="text/javascript">
			checkDelivery();
			//]]>
		</script> -->

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style></style>
