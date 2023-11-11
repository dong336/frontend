<template>
	<main id="contents" class="content">
		<div class="top_tit clr">
			<h2 class="tit_h1" id="pageTitle">
				전체주문<button
					id="addBmark"
					onclick="addBookmark('전체주문')"
					class="add_bmark"
					title="즐겨찾기 버튼"
					aria-label="즐겨찾기 추가/해제 버튼"
				></button>
			</h2>
			<ul class="navi">
				<li class="home"><a href="../main" target="_top">홈</a></li>
				<li>주문/매출관리</li>
				<li>전체주문</li>
				<li>전체주문</li>
			</ul>
		</div>
		<ul class="helpbox">
			<li>전체 주문목록을 보실 수 있습니다.</li>
		</ul>

		<!-- <script type="text/javascript" src="/jscript/SelectCategory.js"></script>
		<script type="text/javascript" src="/jscript/calendar/class.js"></script>
		<script type="text/javascript" src="/jscript/inperiod/class.js"></script> -->

		<link
			rel="stylesheet"
			href="https://uicdn.toast.com/tui.pagination/latest/tui-pagination.css"
		/>
		<link
			rel="stylesheet"
			href="https://uicdn.toast.com/grid/latest/tui-grid.css"
		/>
		<!-- <script
			type="text/javascript"
			src="https://uicdn.toast.com/tui.pagination/v3.4.0/tui-pagination.js"
		></script>
		<script src="https://uicdn.toast.com/grid/latest/tui-grid.js"></script>

		<script type="text/javascript">
			document.addEventListener('click', e => {
				if (e.target == switchBtn.querySelector('i')) {
					setInterval(() => {
						gridOrd.refreshLayout();
					});
				}
			});

			function closePopup() {
				window.open('', '_self').close();
			}

			function change() {
				var f = document.sFrm;

				if (!validSearch(f)) {
					return false;
				}

				$('.wrap-loading').show();
				f.submit();
			}

			function validSearch(f) {
				if (isEmpty(f.skey) && !isEmpty(f.sword)) {
					alert('검색 항목을 선택해 주세요.');
					f.skey.focus();
					return false;
				}

				var sstep = '';
				if (f.cstep) {
					for (var i = 0; i < f.cstep.length; i++) {
						if (f.cstep[i].checked)
							sstep += (sstep ? ',' : '') + f.cstep[i].value;
						f.cstep[i].disabled = true;
					}
					f.sstep.value = sstep;
				}

				var spayway = '';
				if (f.cpayway) {
					for (var i = 0; i < f.cpayway.length; i++) {
						if (f.cpayway[i].checked)
							spayway += (spayway ? ',' : '') + f.cpayway[i].value;
						f.cpayway[i].disabled = true;
					}
					f.spayway.value = spayway;
				}

				var selects = _ee(_pe(f.scate, 'td'), 'select');
				for (var i = 0; i < selects.length; i++) {
					selects[i].disabled = true;
				}

				if (!isDate(f.sdts.value)) f.sdts.value = '';
				if (!isDate(f.sdte.value)) f.sdte.value = '';

				if (
					$('#sdts').val().stripspace() != '' &&
					$('#sdte').val().stripspace() != ''
				) {
					if (fn_betweenDate($('#sdts').val(), $('#sdte').val(), 'd') < 0) {
						alert('시작일자가 종료일 보다 늦습니다.\n다시 입력해 주세요.');
						$('#sdte').focus();
						return false;
					}
				}

				f.target = '_self';
				return true;
			}

			function loginDealer(no) {
				var f = document.loginFrm;

				f.no.value = no;
				f.submit();
			}

			function goOrderList() {
				var f = document.sFrm;

				f.listview.value = 'O';
				f.submit();
			}

			function goOrderGoodsList() {
				var f = document.sFrm;

				f.listview.value = 'G';
				f.submit();
			}

			function setOutOfStock(idx, goodsIdx, block) {
				// 결품
				var f = document.Frm;

				if (block) {
					alert(
						'현재 취소신청이 접수된 주문상품입니다.\n\n취소처리 완료 후 실행하실 수 있습니다.',
					);
					return false;
				} else if (
					confirm(
						'해당 주문상품을 결품처리 하시겠습니까?\n\n확인하신 주문상품은 결품으로 이동됩니다.',
					)
				) {
					$('.wrap-loading').show();
					f.idx.value = idx;
					f.goodsIdx.value = goodsIdx;
					f.action = 'order_outofstock_act';
					f.target = '_self';
					f.submit();
				}
			}

			function setDelay(idx, goodsIdx, block) {
				// 배송지연
				var f = document.Frm;

				if (block) {
					alert(
						'현재 취소신청이 접수된 주문상품입니다.\n\n취소처리 완료 후 실행하실 수 있습니다.',
					);
					return false;
				} else if (
					confirm(
						'해당 주문상품을 배송지연처리 하시겠습니까?\n\n확인하신 주문상품은 배송지연으로 이동됩니다.',
					)
				) {
					$('.wrap-loading').show();
					f.idx.value = idx;
					f.goodsIdx.value = goodsIdx;
					f.action = 'order_delay_act';
					f.target = '_self';
					f.submit();
				}
			}

			function setDeliveryEnd(idx, goodsIdx, block) {
				// 배송완료
				var f = document.Frm;

				if (block) {
					alert(
						'현재 클레임(취소/반품/교환)이 진행 중인 경우\n해당 클레임을 완료하신 후 처리하실 수 있습니다.',
					);
					return false;
				} else {
					// if (!checkDeliveryInfo(idx, goodsIdx)) return false;

					if (
						confirm(
							'배송완료로 수정하시겠습니까?\n\n해당 주문상품 진행상태는 배송완료로 설정됩니다.',
						)
					) {
						$('.wrap-loading').show();
						f.idx.value = idx;
						f.goodsIdx.value = goodsIdx;
						f.action = 'order_deliveryend_act';
						f.submit();
					}
				}
			}

			function setDelivery(idx, goodsIdx, block) {
				// 배송중
				var f = document.Frm;

				if (block) {
					alert(
						'현재 클레임(취소/반품/교환)이 진행 중인 경우\n해당 클레임을 완료하신 후 처리하실 수 있습니다.',
					);
					return false;
				} else {
					if (!checkDeliveryInfo(idx, goodsIdx)) return false;

					if (
						confirm(
							'입력하신 배송정보로 수정하시겠습니까?\n\n해당 주문상품 진행상태는 배송중으로 설정됩니다.',
						)
					) {
						$('.wrap-loading').show();
						f.idx.value = idx;
						f.goodsIdx.value = goodsIdx;
						f.action = 'order_delivery_act';
						f.submit();
					}
				}
			}

			//배송정보 입력확인(주문상품_일련번호 수준)
			function checkDeliveryInfo(idx, goodsIdx) {
				var f = document.Frm;

				var objDelivery = f['delivery_' + idx + '_' + goodsIdx];
				var objInvoiceNo = f['invoiceNo_' + idx + '_' + goodsIdx];

				if (!objDelivery || (objInvoiceNo.disabled && isEmpty(objInvoiceNo))) {
					alert('배송정보를 등록할 수 없습니다.');
					return false;
				}

				if (isEmpty(objDelivery)) {
					alert('배송업체를 선택해 주세요.');
					objDelivery.focus();
					return false;
				}

				if (isEmpty(objInvoiceNo)) {
					alert('송장번호를 입력해 주세요.');
					objInvoiceNo.focus();
					return false;
				}

				return true;
			}

			//]]>
		</script>

		<script type="text/javascript">
			//<![  [
			function openRequestClaim(type, idx, goodsIdx) {
				// 취소/교환/반품 신청
				openPopup(
					'../../mypage/order_claim_request_pop?caller=admin&type=' +
						type +
						'&idx=' +
						idx +
						(typeof goodsIdx != 'undefined' ? '&ogidx=' + goodsIdx : ''),
					'ClaimOrder',
					673,
					750,
					'left=0,top=0,scrollbars=1',
				);
			}

			function setConfirm(idx) {
				// 입금확인
				var f = document.Frm;

				if (confirm('해당 주문을 결제완료로 설정 하시겠습니까?')) {
					$('.wrap-loading').show();
					f.idx.value = idx;
					f.action = 'order_confirm_act';
					f.target = '_self';
					f.submit();
				}
			}

			function setReady(idx, goodsIdx, block) {
				// 상품준비중
				var f = document.Frm;

				if (block) {
					alert(
						'현재 취소신청이 접수된 주문상품입니다.\n\n취소처리 완료 후 실행하실 수 있습니다.',
					);
					return false;
				} else if (
					confirm(
						'해당 주문상품을 확인처리 하시겠습니까?\n\n확인하신 주문상품은 상품준비중으로 이동됩니다.',
					)
				) {
					$('.wrap-loading').show();
					f.idx.value = idx;
					f.goodsIdx.value = goodsIdx;
					f.action = 'order_ready_act';
					f.target = '_self';
					f.submit();
				}
			}

			function setCancel(goodsIdx, ordStep) {
				// 취소확인
				var f = document.Frm;
				var msg;

				switch (ordStep) {
					case '611':
					case '612':
						msg = '선택한 주문의 취소신청을 승인하시겠습니까?';
						break;
					default:
						alert('처리할 수 없는 주문입니다.');
						return false;
				}

				if (confirm(msg)) {
					$('.wrap-loading').show();
					f.goodsIdx.value = goodsIdx;
					f.action = 'order_cancel_act';
					f.target = '_self';
					f.submit();
				}
			}

			function setChange(goodsIdx, mode) {
				// 교환승인/상품수령확인
				var f = document.Frm;

				if (mode == 'DELIVERY') {
					$.laybox({
						type: 'iframe',
						source:
							'order_change_invoice_ifrm?menu=&cgidx=' +
							goodsIdx +
							'&params=menu=&sstep=&spayway=&sescrow=&sterm=order&sdts=&sdte=&slevel=&ssprice=&seprice=&scate=0&sdealer=&snoacct=0&skey=&sword=&psort=orddt&psize=10&listview=O&sflatform=',
					});
				} else {
					switch (mode) {
						case 'AGREE':
							msg = '선택한 주문의 교환신청에 동의 하시겠습니까?';
							break;
						case 'RECEIVE':
							msg = '교환상품의 수령확인을 하시겠습니까?';
							break;
					}
					if (confirm(msg)) {
						$('.wrap-loading').show();
						f.mode.value = mode;
						f.goodsIdx.value = goodsIdx;
						f.action = 'order_change_act';
						f.target = '_self';
						f.submit();
					}
				}
			}

			function setReturn(goodsIdx, mode) {
				// 반품승인/상품수령확인
				var f = document.Frm;

				switch (mode) {
					case 'AGREE':
						msg = '선택한 주문의 반품신청에 동의 하시겠습니까?';
						break;
					case 'RECEIVE':
						msg =
							'반품상품의 상품수령확인을 하시겠습니까?\n\n해당 반품상품의 환불요청을 진행합니다.';
						break;
				}
				if (confirm(msg)) {
					$('.wrap-loading').show();
					f.mode.value = mode;
					f.goodsIdx.value = goodsIdx;
					f.action = 'order_return_act';
					f.target = '_self';
					f.submit();
				}
			}

			function setRestore(goodsIdx, ordStep) {
				// 클레임거절
				var f = document.Frm;
				var msg;

				switch (ordStep) {
					case '611':
					case '612':
						msg = '선택한 주문상품의 취소신청을 거절하시겠습니까?';
						break;
					case '710':
						msg = '선택한 주문상품의 교환신청을 거절하시겠습니까?';
						break;
					case '810':
						msg = '선택한 주문상품의 반품신청을 거절하시겠습니까?';
						break;
					default:
						alert('처리할 수 없는 주문입니다.');
						return false;
				}

				if (confirm(msg)) {
					$('.wrap-loading').show();
					f.goodsIdx.value = goodsIdx;
					f.action = 'order_restore_act';
					f.target = '_self';
					f.submit();
				}
			}

			function setRollback(goodsIdx, ordStep) {
				// 클레임 롤백
				var f = document.Frm;
				var msg;

				switch (ordStep) {
					case '720':
						msg = '교환을 취소하시겠습니까?';
						break;
					case '730':
						msg = '교환상품 반송을 취소하시겠습니까?';
						break;
					case '750':
						msg = '교환상품 수령을 취소하시겠습니까?';
						break;
					case '820':
						msg = '반품을 취소하시겠습니까?';
						break;
					case '830':
						msg = '반품상품 반송을 취소하시겠습니까?';
						break;
					default:
						alert('처리할 수 없는 주문입니다.');
						return false;
				}

				if (confirm(msg)) {
					$('.wrap-loading').show();
					f.goodsIdx.value = goodsIdx;
					f.action = 'order_rollback_act';
					f.target = '_self';
					f.submit();
				}
			}

			function setClaimRefund(idx, mode) {
				var f = document.Frm;
				var msg;

				switch (mode) {
					case '200':
						msg = '해당 취소/반품건에 대한 환불계좌 송금처리를 하시겠습니까?';
						break;
					default:
						mode = '';
						msg = '해당 취소/반품건에 대한 환불처리를 하시겠습니까?';
						break;
				}

				if (confirm(msg)) {
					$('.wrap-loading').show();
					f.mode.value = mode;
					f.idx.value = idx;
					f.action = 'order_claim_refund_act';
					f.target = '_self';
					f.submit();
				}
			}

			// 구매거절 승인
			//
			function setEscrowDenyConfirm(orderIdx, pg) {
				var f = document.Frm;
				var action;

				switch (pg) {
					case '':
						break;
					case 'INICIS':
						action = '/pay/inicis/INIescrow_denyconfirm';
						break;
					case 'KCP':
						break;
					case 'UPLUS':
						break;

					default:
						alert('처리할 수 없습니다.');
						return false;
						break;
				}

				$('.wrap-loading').show();
				f.idx.value = orderIdx;
				f.action = action;
				f.target = '_self';
				f.submit();
			}

			function setEscrowManualConfirm(orderIdx, pg) {
				var f = document.Frm;
				var action;

				switch (pg) {
					case '':
						break;
					case 'INICIS':
						action = '/pay/inicis/INIescrow_manual_confirm';
						break;
					case 'KCP':
						break;
					case 'UPLUS':
						break;

					default:
						alert('처리할 수 없습니다.');
						return false;
						break;
				}

				$('.wrap-loading').show();
				f.idx.value = orderIdx;
				f.action = action;
				f.target = '_self';
				f.submit();
			}

			function escrowDelivery(idx, pg) {
				// 에스크로배송
				var f = document.Frm;
				var action;

				switch (pg) {
					case '':
						f.mode.value = 'delivery';
						action =
							'http://javalocal.mallstore.co.kr/pay/allthegate/AGS_escrow_ing';
						break;
					case 'INICIS':
						action = '/pay/inicis/INIescrow_delivery';
						break;
					case 'KCP':
						f.mode.value = 'delivery';
						action = '/pay/kcp/mod_escw';
						break;

					default:
						alert('처리할 수 없습니다.');
						return false;
						break;
				}

				$('.wrap-loading').show();
				f.idx.value = idx;
				f.action = action;
				f.target = '_self';
				f.submit();
			}

			function del(idx) {
				// 삭제
				var f = document.Frm;

				if (
					confirm(
						'선택한 주문을 삭제하시겠습니까?\n\n삭제를 하시면 해당 주문과 관련된 내용을 복구 할 수 없습니다.',
					)
				) {
					$('.wrap-loading').show();
					f.idx.value = idx;
					f.action = 'order_del_act';
					f.target = '_self';
					f.submit();
				}
			}

			function setDecision(idx, goodsIdx) {
				// 관리자 구매확인
				var f = document.Frm;

				if (confirm('배송완료된 주문상품을 구매확정 하시겠습니까?')) {
					$('.wrap-loading').show();
					f.mode.value = 'CONFIRM';
					f.idx.value = idx;
					f.goodsIdx.value = goodsIdx;
					f.action = 'order_decision_act';
					f.target = '_self';
					f.submit();
				}
			}

			function setDecisionList() {
				var f = document.Frm;
				var items = '';
				var isBlockDecision = false;

				if (!f.cbList) return false;

				var $isSetDecision = $(f.isSetDecision);

				$(f.cbList).each(function (index) {
					if (this.checked) {
						items += (items ? ',' : '') + this.value;
						if ($isSetDecision.eq(index).val() != 'T') isBlockDecision = true;
					}
				});

				if (items == '') {
					alert('구매확정 하실 주문을 선택해 주세요.');
					return false;
				}

				if (isBlockDecision) {
					alert(
						'구매확정 할 수 없는 주문상품이 포함된 주문이 있습니다.\n확인 후 다시 시도해 주세요.',
					);
					return false;
				}

				if (
					confirm(
						'선택한 주문에 포함된 배송완료된 주문상품을 구매확정 하시겠습니까?',
					)
				) {
					$('.wrap-loading').show();
					f.mode.value = 'CONFIRM';
					f.idx.value = items;
					f.goodsIdx.value = '';
					f.action = 'order_decision_act';
					f.target = '_self';
					f.submit();
				}
			}
			//]]>
		</script>

		<script type="text/javascript">
			//<![  [
			function setStepList() {
				var f = document.Frm;
				var items = '';
				var action;

				var arrPayway = new Array();
				var arrStep = new Array();
				var isEscrow = false;
				var isDecision = false;

				var stepText =
					f.batchOrdStep.options[f.batchOrdStep.selectedIndex].text;
				var stepValue =
					f.batchOrdStep.options[f.batchOrdStep.selectedIndex].value;

				if (!f.cbList) return false;

				if (stepValue == '') {
					alert('수정할 상태를 선택해 주세요.');
					f.batchOrdStep.focus();
					return false;
				}

				var $payway = $(f.payway);
				var $ordStep = $(f.ordStep);
				var $eswStep = $(f.eswStep);
				var $isDecision = $(f.isDecision);

				$(f.cbList).each(function (index) {
					if (this.checked) {
						items += (items ? ',' : '') + this.value;

						arrPayway[arrPayway.length] = $payway.eq(index).val();
						arrStep[arrStep.length] = $ordStep.eq(index).val();
						if ($eswStep.eq(index).val().toNumeric() > 0) isEscrow = true;
						if ($isDecision.eq(index).val() == 'T') isDecision = true;
					}
				});

				if (items == '') {
					alert(stepText + '로(으로) 수정하실 주문을 선택해 주세요.');
					return false;
				}

				if (isDecision && (stepValue == '100' || stepValue == '200')) {
					alert(
						'구매확정된 주문상품이 포함된 주문은 정산에 영향을 미치므로 수정하실 수 없습니다',
					);
					return false;
				}

				// 입금확인중
				if (stepValue == '100') {
					if (isEscrow) {
						alert(
							'에스크로로 결제된 주문이 포함되어 있습니다. 입금확인중으로 수정할 수 없습니다.',
						);
						return false;
					}

					for (var i = 0; i < arrStep.length; i++) {
						if (arrStep[i] != '200' || arrPayway[i] != '128') {
							alert(
								'진행상태가 "결제완료"이고 "온라인입금"으로 결제된 주문만 입금확인중으로 설정이 가능합니다.',
							);
							return false;
						}
					}

					action = 'order_new_act';
				}

				// 결제완료
				else if (stepValue == '200') {
					for (var i = 0; i < arrStep.length; i++) {
						if (arrStep[i] != '100' && arrStep[i] != '300') {
							alert(
								'진행상태가 "입금확인중" 또는 "상품준비중"인 주문만 결제완료으로 설정이 가능합니다.',
							);
							return false;
						}
					}

					action = 'order_confirm_act';
				}

				if (
					confirm('선택한 주문을 ' + stepText + '로(으로) 수정하시겠습니까?')
				) {
					$('.wrap-loading').show();
					f.idx.value = items;
					f.action = action;
					f.target = '_self';
					f.submit();
				}
			}

			function downExcel(isSelect) {
				var f = document.Frm;
				var fe = document.FrmExcel;
				var mode = '';
				var items = '';

				if (!isSelect) isSelect = false;

				if (!f.cbList) return false;

				if (isSelect) {
					$(f.cbList).each(function () {
						if (this.checked) items += (items ? ',' : '') + this.value;
					});

					if (items == '') {
						alert('주문을 선택해 주세요.');
						return false;
					}

					mode = 'SELECT';
				}

				fe.mode.value = mode;
				fe.idx.value = items;
				fe.action = 'order_list_excel';
				fe.target = 'frmProc';
				fe.submit();
			}

			$(function () {
				$('.search_form_box .btn_open').click(function () {
					$('.form_none').slideToggle();
					/* 		if ($(".search_form_box .btn_open").hasClass('on')) {
			$(this).removeClass('on');
		} else {
			$(this).addClass('on');
		} */
				});
			});
			//]]>
		</script> -->

		<form
			name="loginFrm"
			method="post"
			target="_blank"
			action="/nmanager/mim/dealer_login"
		>
			<input type="hidden" name="no" />
		</form>

		<div class="main_content">
			<!-- 검색 폼 : 시작 ###################################################################### -->
			<form name="sFrm" method="get" onsubmit="return validSearch(this)">
				<input type="hidden" name="menu" value="" />
				<input type="hidden" name="sstep" value="" />
				<input type="hidden" name="spayway" value="" />
				<input type="hidden" name="psort" value="orddt" />
				<input type="hidden" name="psize" value="10" />
				<input type="hidden" name="listview" value="O" />

				<section class="search_wrap">
					<div class="total_search">
						<p class="tit_h2">전체주문조회</p>
						<div class="search_area">
							<div class="dropdown_wrap">
								<div class="dropdown all_search">
									<select id="skey" name="skey">
										<option value="">선택</option>
										<option value="ordno">주문번호</option>
										<option value="id">주문자ID</option>
										<option value="ordname">주문자명</option>
										<option value="ordemail">주문자이메일</option>
										<option value="ordtel">주문자연락처</option>
										<option value="rcvname">수령인명</option>
										<option value="rcvtel">수령인전화번호</option>
										<option value="remittor">입금자명</option>
										<option value="gcode">상품코드</option>
										<option value="gname">상품명</option>
									</select>
								</div>
								<div class="input_area">
									<input
										type="search"
										class="text_inp"
										id=""
										name="sword"
										value=""
										title=""
										placeholder="검색어를 입력하세요."
									/>
								</div>
							</div>
							<div class="btn_wrap">
								<button type="submit" class="btn_sec">검색</button>
							</div>
							검색
						</div>
					</div>
					<div class="search_form_box">
						<div class="table_box">
							<div class="form_none">
								<p class="tit_h2">상세검색</p>
								<table
									cellspacing="0"
									cellpadding="0"
									border="0"
									width="100%"
									class="t_form"
								>
									<caption>
										주문 검색
									</caption>
									<colgroup>
										<col width="110" />
										<col width="*" />
									</colgroup>

									<tbody>
										<tr>
											<th>진행상태</th>
											<td>
												<div class="label_wrap">
													<label
														><input
															type="checkbox"
															name="cstep"
															value="100"
														/>입금확인중</label
													>
													<label
														><input
															type="checkbox"
															name="cstep"
															value="200"
														/>결제완료</label
													>
													<label
														><input
															type="checkbox"
															name="cstep"
															value="300"
														/>상품준비중</label
													>
													<label
														><input
															type="checkbox"
															name="cstep"
															value="310"
														/>결품</label
													>
													<label
														><input
															type="checkbox"
															name="cstep"
															value="320"
														/>배송지연</label
													>
													<label
														><input
															type="checkbox"
															name="cstep"
															value="510"
														/>배송중</label
													>
													<label
														><input
															type="checkbox"
															name="cstep"
															value="590"
														/>배송완료</label
													>
													<label
														><input
															type="checkbox"
															name="cstep"
															value="E590"
														/>구매확정</label
													>
													<label
														><input
															type="checkbox"
															name="cstep"
															value="R600"
														/>주문취소처리중</label
													>
													<label
														><input
															type="checkbox"
															name="cstep"
															value="E600"
														/>주문취소완료</label
													>
													<label
														><input
															type="checkbox"
															name="cstep"
															value="R710"
														/>주문교환처리중</label
													>
													<label
														><input
															type="checkbox"
															name="cstep"
															value="E710"
														/>주문교환완료</label
													>
													<label
														><input
															type="checkbox"
															name="cstep"
															value="R810"
														/>주문반품처리중</label
													>
													<label
														><input
															type="checkbox"
															name="cstep"
															value="E810"
														/>주문반품완료</label
													>
												</div>
											</td>
										</tr>

										<tr>
											<th>결제수단</th>
											<td>
												<div class="label_wrap">
													<label
														><input
															type="checkbox"
															name="cpayway"
															value="128"
														/>온라인입금</label
													>
													<label
														><input
															type="checkbox"
															name="cpayway"
															value="1"
														/>신용카드</label
													>
													<label
														><input
															type="checkbox"
															name="cpayway"
															value="2"
														/>계좌이체</label
													>
													<label
														><input
															type="checkbox"
															name="cpayway"
															value="4"
														/>가상계좌</label
													>

													<label
														><input
															type="checkbox"
															name="cpayway"
															value="32"
														/>카카오페이</label
													>
													<label
														><input
															type="checkbox"
															name="cpayway"
															value="64"
														/>PAYCO</label
													>
													<label
														><input
															type="checkbox"
															name="cpayway"
															value="512"
														/>기타</label
													>
													<label
														><input
															type="checkbox"
															name="sescrow"
															value="escrow"
														/>에스크로</label
													>
												</div>
											</td>
										</tr>
										<tr>
											<th>기간</th>
											<td>
												<div class="label_wrap">
													<label
														><input
															type="radio"
															name="sterm"
															value="order"
															checked=""
														/>주문일</label
													>
													<label
														><input
															type="radio"
															name="sterm"
															value="confirm"
														/>결제완료</label
													>

													<label
														><input
															type="radio"
															name="sterm"
															value="sending"
														/>배송일자</label
													>
													<label
														><input
															type="radio"
															name="sterm"
															value="delivery"
														/>배송완료</label
													>
													<label
														><input
															type="radio"
															name="sterm"
															value="decision"
														/>구매확정</label
													>
													<label
														><input
															type="radio"
															name="sterm"
															value="cancel"
														/>취소신청일자</label
													>
													<label
														><input
															type="radio"
															name="sterm"
															value="cancel_finish"
														/>취소완료일자</label
													>
													<label
														><input
															type="radio"
															name="sterm"
															value="change"
														/>교환신청일자</label
													>
													<label
														><input
															type="radio"
															name="sterm"
															value="change_finish"
														/>교환완료일자</label
													>
													<label
														><input
															type="radio"
															name="sterm"
															value="return"
														/>반품신청일자</label
													>
													<label
														><input
															type="radio"
															name="sterm"
															value="return_finish"
														/>반품완료일자</label
													>
												</div>
												<div class="label_wrap">
													<div class="period_inp">
														<input
															type="text"
															id="sdts"
															name="sdts"
															value=""
															maxlength="10"
															class="text_input"
														/>
														<img
															src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
															onclick="calendar.open(event, 'sdts', 'YYYY-MM-DD')"
															style="vertical-align: middle"
														/>
													</div>
													~
													<div class="period_inp">
														<input
															type="text"
															id="sdte"
															name="sdte"
															value=""
															maxlength="10"
															class="text_input"
														/>
														<img
															src="//bootdev.mallstore.co.kr/jscript/calendar/images/btn_open.gif"
															onclick="calendar.open(event, 'sdte', 'YYYY-MM-DD')"
															style="vertical-align: middle"
														/>
													</div>
													<div class="period_btn">
														<button
															type="button"
															onclick="inperiod.input('sdts', 'sdte')"
															class="btn_sec sm active"
														>
															전체
														</button>
														<button
															type="button"
															onclick="inperiod.input('sdts', 'sdte', 't')"
															class="btn_sec sm"
														>
															오늘
														</button>
														<button
															type="button"
															onclick="inperiod.input('sdts', 'sdte', 't', -1)"
															class="btn_sec sm"
														>
															어제
														</button>
														<button
															type="button"
															onclick="inperiod.input('sdts', 'sdte', 'd', -3)"
															class="btn_sec sm"
														>
															3일간
														</button>
														<button
															type="button"
															onclick="inperiod.input('sdts', 'sdte', 'd', -7)"
															class="btn_sec sm"
														>
															7일간
														</button>
														<button
															type="button"
															onclick="inperiod.input('sdts', 'sdte', 'd', -10)"
															class="btn_sec sm"
														>
															10일간
														</button>
														<button
															type="button"
															onclick="inperiod.input('sdts', 'sdte', 'd', -20)"
															class="btn_sec sm"
														>
															20일간
														</button>
														<button
															type="button"
															onclick="inperiod.input('sdts', 'sdte', 'd', -30)"
															class="btn_sec sm"
														>
															30일간
														</button>
													</div>
													<span class="noti_info"
														>직접 입력시에는 “2023-01-01” 형식으로
														입력해주세요.</span
													>
												</div>
											</td>
										</tr>
										<tr>
											<th>등급별</th>
											<td>
												<select id="slevel" name="slevel">
													<option value="">전체 분류</option>
													<option value="11">일반회원</option>
													<option value="13">임직원회원</option>
													<option value="120">에이전시회원</option>
													<option value="121">VIP회원</option>
													<option value="123">임직원회원</option>
													<option value="-1">비회원</option>
												</select>
											</td>
										</tr>
										<tr>
											<th>주문경로</th>
											<td>
												<div class="label_wrap">
													<label
														><input
															type="radio"
															name="sflatform"
															value=""
															checked=""
														/>전체</label
													>
													<label
														><input
															type="radio"
															name="sflatform"
															value="100"
														/>PC</label
													>
													<label
														><input
															type="radio"
															name="sflatform"
															value="200"
														/>MOBILE</label
													>
												</div>
											</td>
										</tr>
										<tr>
											<th>주문금액</th>
											<td>
												<input
													type="text"
													name="ssprice"
													value=""
													class="text_input"
													onkeyup="toCurrency(this)"
													onblur="toCurrency(this)"
												/>
												원 ~
												<input
													type="text"
													name="seprice"
													value=""
													class="text_input"
													onkeyup="toCurrency(this)"
													onblur="toCurrency(this)"
												/>
												원
											</td>
										</tr>
										<tr>
											<th>상품분류</th>
											<td>
												<input type="hidden" name="scate" value="" />
												<div style="float: left; margin-right: 5px">
													<select
														id="scate_1"
														name="scate_1"
														head="선택"
														depth="1"
														onchange="sc.get(this)"
													>
														<option value="">선택</option>
														<option value="1742">패션의류</option>
														<option value="1831">테마별</option>
														<option value="1837">시즌별</option>
														<option value="1704">화장품</option>
														<option value="1836">뷰티</option>
														<option value="1710">잡화</option>
														<option value="1846">대카테고리 테스트</option>
													</select>
												</div>
												<div style="float: left; margin-right: 5px">
													<select
														id="scate_2"
														name="scate_2"
														head="선택"
														depth="2"
														onchange="sc.get(this)"
													>
														<option value="">선택</option>
													</select>
												</div>
												<div style="float: left; margin-right: 5px">
													<select
														id="scate_3"
														name="scate_3"
														head="선택"
														depth="3"
														onchange="sc.get(this)"
													>
														<option value="">선택</option>
													</select>
												</div>

												<!-- <script type="text/javascript">
													//<![  [
													var sc = new SelectCategory();
													sc.init(document.sFrm.scate);
													//]]>
												</script> -->
											</td>
										</tr>
									</tbody>
								</table>
								<div class="btn_wrap">
									<button type="submit" class="btn_pri">검색</button>
								</div>
							</div>
						</div>
						<a href="#none" class="btn_open"
							><i class="ri-arrow-down-s-line"></i
						></a>
					</div>
				</section>
			</form>
			<!-- 검색 폼 : 끝 ###################################################################### -->

			<!-- <script type="text/javascript" src="/jscript/ezpop.js"></script>
			<script type="text/javascript">
				//<![  [
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
						80,
						340,
						'scrollbars=yes',
					);
				});
				//]]>
			</script>

			<script type="text/javascript">
				//<![  [
				function changeList() {
					var f = document.Frm;
					var sf = document.sFrm;

					sf.psort.value = f.psort.value;
					sf.psize.value = f.psize.value;

					if (!validSearch(sf)) {
						return false;
					}

					$('.wrap-loading').show();
					sf.submit();
				}

				function checkCbList(obj) {
					var f = obj.form;
					var total = (checked = 0);

					$(f[obj.name]).each(function () {
						++total;
						if ($(this).is(':checked')) ++checked;
					});
					f.cbListAll.checked = total == checked ? true : false;
					f.isCheckCbListAll.value = total == checked ? 'T' : 'F';
				}

				function checkCbListAll() {
					var f = document.Frm;

					if (f.isCheckCbListAll.value != 'T') {
						checkCbAll(f.cbList, true);
						f.cbListAll.checked = true;
						f.isCheckCbListAll.value = 'T';
					} else {
						checkCbAll(f.cbList, false);
						f.cbListAll.checked = false;
						f.isCheckCbListAll.value = 'F';
					}
				}

				function checkCbGoods(obj) {
					var $table = $(obj).parents('table').first();
					var total = (checked = 0);

					$table.find('input[name="cbGoods"]').each(function () {
						if (!this.disabled) {
							++total;
							if ($(this).is(':checked')) ++checked;
						}
					});
					$table
						.find('input[name="cbGoodsAll"]')
						.prop('checked', total == checked ? true : false);
				}

				function checkCbGoodsAll(obj) {
					$(obj)
						.parents('table')
						.first()
						.find('input[name="cbGoods"]')
						.each(function () {
							if (!this.disabled) {
								this.checked = obj.checked;
							}
						});
				}
				//]]>
			</script>

			<script type="text/javascript">
				//<![  [
				function openDetail(idx) {
					// 주문정보 상세보기
					openPopup(
						'order_detail_new_pop?menu=&idx=' + idx,
						'Detail',
						1080,
						800,
						'scrollbars=1',
					);
				}

				function openDeliveryBatch(idx) {
					// 일괄 배송완료 처리
					openPopup(
						'order_delivery_batch_pop?idx=' + idx,
						'DeliveryBatch',
						618,
						500,
						'scrollbars=1',
					);
				}

				function setReadyList() {
					var f = document.Frm;
					var items = '';

					if (!f.cbList) return false;

					var $cb = $('input[name="cbList"]:checked', f);

					if ($cb.length == 0) {
						alert('주문상품 확인처리를 하실 주문상품을 선택해 주세요.');
						return false;
					}

					var invalid = false;
					$cb.each(function () {
						var ordStepGoods = $(this)
							.parent()
							.find('input[name="ordStepGoods"]')
							.val();
						if (ordStepGoods != '200') {
							alert(
								'진행상태가 "결제완료"인 주문상품만 상품준비중으로 설정이 가능합니다.',
							);
							invalid = true;
							return false;
						}

						items += (items ? ',' : '') + this.value;
					});
					if (invalid) return false;

					if (
						confirm('선택한 주문상품을 일괄 주문상품 확인처리 하시겠습니까?')
					) {
						$('.wrap-loading').show();
						f.idx.value = '';
						f.goodsIdx.value = items;
						f.action = 'order_ready_act';
						f.target = '_self';
						f.submit();
					}
				}
				//]]>
			</script>

			<script>
				//<![  [
				$(function () {
					$('.view_proList')
						.children()
						.click(function (e) {
							var idx = $(this).attr('idx');
							addProList(idx);
							var offset = $(this).offset();
							var state = $('.layer_pro_list').css('display');
							$('.layer_pro_list')
								.css({
									left: offset.left,
									top: offset.top + 20,
								})
								.show();
						});
					$('.layer_pro_list').mouseleave(function () {
						$('.layer_pro_list')
							.css({
								top: 0,
							})
							.hide();
					});
				});

				function addProList(idx) {
					var html = '';
					var objs = g_popgoods[idx];
					for (var i = 0; i < objs.length; i++) {
						var obj = objs[i];
						var trs = [
							'<tr>',
							'<td>' + obj.idx + '</td>',
							'<td>' + obj.code + '</td>',
							'<td class="txt_left">' +
								obj.name +
								'<div class="option">' +
								obj.opt +
								'</div></td>',
							'<td>' + obj.ea + '</td>',
							'</tr>',
						];
						html += trs.join('');
					}

					$('#layer_pro_list_tbody').html(html);
				}

				//]]>
			</script> -->

			<section class="grid_wrap">
				<form name="Frm" method="post">
					<input type="hidden" name="frameMode" value="orderList" />
					<input type="hidden" name="menu" value="" />
					<input type="hidden" name="mode" />
					<input type="hidden" name="idx" />
					<input type="hidden" name="goodsIdx" />
					<input
						type="hidden"
						name="params"
						value="6D656E753D5E73737465703D5E737061797761793D5E73657363726F773D5E737465726D3D6F726465725E736474733D5E736474653D5E736C6576656C3D5E737370726963653D5E736570726963653D5E73636174653D305E736465616C65723D5E736E6F616363743D305E736B65793D5E73776F72643D5E70736F72743D6F726464745E7073697A653D31305E6C697374766965773D4F5E73666C6174666F726D3D5E706167653D31"
					/>
					<input
						type="hidden"
						name="redirect"
						value="http://javalocal.mallstore.co.kr/nmanager/order/order_list"
					/>

					<input type="hidden" name="isCheckCbListAll" value="F" />

					<div class="section_head">
						<h4 class="total">
							총
							<span> <strong> 34 </strong> </span>건의 주문이 조회되었습니다.
						</h4>
					</div>

					<div class="order_list_tab">
						<div class="tab_box clr">
							<a href="javascript:goOrderList();" class="active">주문별보기</a>
							<a href="javascript:goOrderGoodsList();" class="">상품별보기</a>
						</div>
						<div class="selects">
							<select id="psize" name="psize" onchange="changeList()">
								<option value="10" selected="">10줄씩보기</option>
								<option value="20">20줄씩보기</option>
								<option value="30">30줄씩보기</option>
								<option value="50">50줄씩보기</option>
								<option value="100">100줄씩보기</option>
								<option value="500">500줄씩보기</option>
							</select>
							<select id="psort" name="psort" onchange="changeList()">
								<option value="orddt" selected="">주문일</option>
								<option value="ordno">주문번호</option>
								<option value="ordprice">주문금액순</option>
								<option value="id">주문자아이디순</option>
								<option value="ordname">주문자명순</option>
							</select>
						</div>
					</div>

					<div class="box_scroll_orderList">
						<!-- <script type="text/javascript">
							var g_popgoods = [];
						</script> -->

						<!-- 주문 그리드 주석 -->
						<!-- <div id="gridOrd" class="grid"></div> -->

						<!-- 새로운 주문 리스트 시작 2015.09.04 -->
						<table
							cellpadding="0"
							cellspacing="0"
							border="0"
							width="100%"
							class="t_list"
						>
							<caption>
								주문 리스트
							</caption>
							<colgroup>
								<col width="40" />
								<!-- 체크박스 -->
								<col width="50" />
								<!-- 구분 -->
								<col width="120" />
								<!-- 주문번호 -->
								<col width="80" />
								<!-- 주문일시 -->
								<col width="*" />
								<!-- 상품명 -->
								<col width="80" />
								<!-- 성명 -->
								<col width="80" />
								<!-- ID -->
								<col width="70" />
								<!-- 주문금액 -->
								<col width="70" />
								<!-- 결제금액 -->
								<col width="70" />
								<!-- 결제수단 -->
								<col width="80" />
								<!-- 결제일 -->
								<col width="70" />
								<!-- 할인금액 -->
								<col width="70" />
								<!-- 적립금 사용금액 -->
								<col width="70" />
								<!-- 배송비 -->
								<col width="50" />
								<!-- 주문수량 -->
								<col width="50" />
								<!-- 미배송건수 -->
								<col width="50" />
								<!-- 배송중건수 -->
								<col width="50" />
								<!-- 배송완료건수 -->
								<col width="50" />
								<!-- 구매확정건수 -->
								<col width="50" />
								<!-- 취소건수 -->
								<col width="50" />
								<!-- 반품건수 -->
								<col width="50" />
								<!-- 교환건수 -->
							</colgroup>
							<thead>
								<tr>
									<th>
										<label
											><input
												type="checkbox"
												name="cbListAll"
												onclick="checkCbListAll()"
											/>전체선택</label
										>
									</th>
									<!-- 1 -->
									<th>주문<br />경로</th>
									<th>주문<br />번호</th>
									<th>주문<br />일시</th>
									<th>상품명<br />(품목수)</th>
									<th>성명</th>
									<th>ID</th>
									<th>주문<br />금액</th>
									<th>결제<br />금액</th>
									<th>결제<br />수단</th>
									<th>결제일</th>
									<th>할인<br />금액</th>
									<th>적립금<br />사용</th>
									<th>배송비</th>
									<th>주문<br />수량</th>
									<th>미배송</th>
									<th>발송<br />완료</th>
									<th>배송<br />완료</th>
									<th>구매<br />확정</th>
									<th>취소</th>
									<th>반품</th>
									<th>교환</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<input type="hidden" name="payway" value="128" />
									<input type="hidden" name="ordStep" value="100" />
									<input type="hidden" name="eswStep" value="0" />
									<input type="hidden" name="isConfirm" value="F" />

									<td>
										<label
											><input
												type="checkbox"
												id="cbList"
												name="cbList"
												value="1100"
												onclick="checkCbList(this)"
											/>선택</label
										>
									</td>
									<td>PC</td>
									<td>
										<a
											href="javascript:openDetail(1100);"
											title="A2324938820820"
											>A2324938820820</a
										>
									</td>
									<td>2023-09-06 11:38:58</td>
									<td>
										<a href="#none" class="view_proList"
											><span idx="0"
												>입점업체 상품 테스트_수수료적용 01 (1)</span
											></a
										>
									</td>
									<td>서승보</td>
									<td>
										<div>
											<a
												href="javascript:;"
												ezi="148868"
												onclick="ezpop.member.open(event)"
												>seobo28</a
											>
										</div>
									</td>
									<td>400,000</td>
									<td>400,000</td>
									<td>온라인입금</td>
									<td>미입금</td>

									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>1</td>
									<td>1</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
								</tr>

								<!-- <script type="text/javascript">
									var l_goods = [];

									var l_obj = {
										idx: 1,
										code: 'G0000010866',
										name: '입점업체 상품 테스트_수수료적용 01',
										opt: '',
										ea: '1',
									};
									l_goods.push(l_obj);

									g_popgoods.push(l_goods);
								</script> -->

								<input type="hidden" name="isSetDecision" value="F" />

								<tr>
									<input type="hidden" name="payway" value="128" />
									<input type="hidden" name="ordStep" value="590" />
									<input type="hidden" name="eswStep" value="0" />
									<input type="hidden" name="isConfirm" value="T" />

									<td>
										<label
											><input
												type="checkbox"
												id="cbList"
												name="cbList"
												value="1099"
												onclick="checkCbList(this)"
											/>선택</label
										>
									</td>
									<td>PC</td>
									<td>
										<a
											href="javascript:openDetail(1099);"
											title="A2324999061061"
											>A2324999061061</a
										>
									</td>
									<td>2023-09-06 10:59:58</td>
									<td>
										<a href="#none" class="view_proList"
											><span idx="1">모던 스타일_sample 006 (1)</span></a
										>
									</td>
									<td>서승보</td>
									<td>
										<div>
											<a
												href="javascript:;"
												ezi="148868"
												onclick="ezpop.member.open(event)"
												>seobo28</a
											>
										</div>
									</td>
									<td>380,000</td>
									<td>380,000</td>
									<td>온라인입금</td>
									<td>2023-09-06 11:00:27</td>

									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>1</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>1</td>
								</tr>

								<!-- <script type="text/javascript">
									var l_goods = [];

									var l_obj = {
										idx: 1,
										code: 'G0000010850',
										name: '모던 스타일_sample 006',
										opt: '',
										ea: '1',
									};
									l_goods.push(l_obj);

									g_popgoods.push(l_goods);
								</script> -->

								<input type="hidden" name="isSetDecision" value="F" />

								<tr>
									<input type="hidden" name="payway" value="128" />
									<input type="hidden" name="ordStep" value="100" />
									<input type="hidden" name="eswStep" value="0" />
									<input type="hidden" name="isConfirm" value="F" />

									<td>
										<label
											><input
												type="checkbox"
												id="cbList"
												name="cbList"
												value="1098"
												onclick="checkCbList(this)"
											/>선택</label
										>
									</td>
									<td>PC</td>
									<td>
										<a
											href="javascript:openDetail(1098);"
											title="A2324896311311"
											>A2324896311311</a
										>
									</td>
									<td>2023-09-05 16:59:58</td>
									<td>
										<a href="#none" class="view_proList"
											><span idx="2">모던 스타일_sample 005 (1)</span></a
										>
									</td>
									<td>박진원</td>
									<td>
										<div>
											<a
												href="javascript:;"
												ezi="148875"
												onclick="ezpop.member.open(event)"
												>zinys</a
											>
										</div>
									</td>
									<td>350,000</td>
									<td>350,000</td>
									<td>온라인입금</td>
									<td>미입금</td>

									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>1</td>
									<td>1</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
								</tr>

								<!-- <script type="text/javascript">
									var l_goods = [];

									var l_obj = {
										idx: 1,
										code: 'G0000010849',
										name: '모던 스타일_sample 005',
										opt: '',
										ea: '1',
									};
									l_goods.push(l_obj);

									g_popgoods.push(l_goods);
								</script> -->

								<input type="hidden" name="isSetDecision" value="F" />

								<tr>
									<input type="hidden" name="payway" value="4" />
									<input type="hidden" name="ordStep" value="590" />
									<input type="hidden" name="eswStep" value="1" />
									<input type="hidden" name="isConfirm" value="T" />

									<td>
										<label
											><input
												type="checkbox"
												id="cbList"
												name="cbList"
												value="1097"
												onclick="checkCbList(this)"
											/>선택</label
										>
									</td>
									<td>PC</td>
									<td>
										<a
											href="javascript:openDetail(1097);"
											title="A2324856680680"
											>A2324856680680</a
										>
									</td>
									<td>2023-09-05 16:40:56</td>
									<td>
										<a href="#none" class="view_proList"
											><span idx="3"
												>입점업체 상품 테스트_수수료적용 02 (1)</span
											></a
										>
									</td>
									<td>박진원</td>
									<td>
										<div>
											<a
												href="javascript:;"
												ezi="148875"
												onclick="ezpop.member.open(event)"
												>zinys</a
											>
										</div>
									</td>
									<td>350,000</td>
									<td>350,000</td>
									<td>가상계좌(E)</td>
									<td>2023-09-05 16:43:20</td>

									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>1</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>1</td>
								</tr>

								<!-- <script type="text/javascript">
									var l_goods = [];

									var l_obj = {
										idx: 1,
										code: 'G0000010867',
										name: '입점업체 상품 테스트_수수료적용 02',
										opt: '',
										ea: '1',
									};
									l_goods.push(l_obj);

									g_popgoods.push(l_goods);
								</script> -->

								<input type="hidden" name="isSetDecision" value="F" />

								<tr>
									<input type="hidden" name="payway" value="128" />
									<input type="hidden" name="ordStep" value="590" />
									<input type="hidden" name="eswStep" value="0" />
									<input type="hidden" name="isConfirm" value="T" />

									<td>
										<label
											><input
												type="checkbox"
												id="cbList"
												name="cbList"
												value="1096"
												onclick="checkCbList(this)"
											/>선택</label
										>
									</td>
									<td>PC</td>
									<td>
										<a
											href="javascript:openDetail(1096);"
											title="A2324861541541"
											>A2324861541541</a
										>
									</td>
									<td>2023-09-05 16:12:41</td>
									<td>
										<a href="#none" class="view_proList"
											><span idx="4"
												>입점업체 상품 테스트_수수료적용 02 (1)</span
											></a
										>
									</td>
									<td>서승보</td>
									<td>
										<div>
											<a
												href="javascript:;"
												ezi="148874"
												onclick="ezpop.member.open(event)"
												>seobo30</a
											>
										</div>
									</td>
									<td>350,000</td>
									<td>350,000</td>
									<td>온라인입금</td>
									<td>2023-09-05 16:13:00</td>

									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>1</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>1</td>
									<td>0</td>
									<td>0</td>
									<td>1</td>
								</tr>

								<!-- <script type="text/javascript">
									var l_goods = [];

									var l_obj = {
										idx: 1,
										code: 'G0000010867',
										name: '입점업체 상품 테스트_수수료적용 02',
										opt: '',
										ea: '1',
									};
									l_goods.push(l_obj);

									g_popgoods.push(l_goods);
								</script> -->

								<input type="hidden" name="isSetDecision" value="F" />

								<tr>
									<input type="hidden" name="payway" value="128" />
									<input type="hidden" name="ordStep" value="612" />
									<input type="hidden" name="eswStep" value="0" />
									<input type="hidden" name="isConfirm" value="T" />

									<td>
										<label
											><input
												type="checkbox"
												id="cbList"
												name="cbList"
												value="1095"
												onclick="checkCbList(this)"
											/>선택</label
										>
									</td>
									<td>PC</td>
									<td>
										<a
											href="javascript:openDetail(1095);"
											title="A2324897614614"
											>A2324897614614</a
										>
									</td>
									<td>2023-09-05 11:03:17</td>
									<td>
										<a href="#none" class="view_proList"
											><span idx="5">모던 스타일_sample 015 (1)</span></a
										>
									</td>
									<td>서승보</td>
									<td>
										<div>
											<a
												href="javascript:;"
												ezi="148868"
												onclick="ezpop.member.open(event)"
												>seobo28</a
											>
										</div>
									</td>
									<td>270,000</td>
									<td>270,000</td>
									<td>온라인입금</td>
									<td>2023-09-05 11:03:32</td>

									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>1</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>1</td>
									<td>0</td>
									<td>0</td>
								</tr>

								<!-- <script type="text/javascript">
									var l_goods = [];

									var l_obj = {
										idx: 1,
										code: 'G0000010859',
										name: '모던 스타일_sample 015',
										opt: '',
										ea: '1',
									};
									l_goods.push(l_obj);

									g_popgoods.push(l_goods);
								</script> -->

								<input type="hidden" name="isSetDecision" value="F" />

								<tr>
									<input type="hidden" name="payway" value="128" />
									<input type="hidden" name="ordStep" value="690" />
									<input type="hidden" name="eswStep" value="0" />
									<input type="hidden" name="isConfirm" value="F" />

									<td>
										<label
											><input
												type="checkbox"
												id="cbList"
												name="cbList"
												value="1094"
												onclick="checkCbList(this)"
											/>선택</label
										>
									</td>
									<td>PC</td>
									<td>
										<a
											href="javascript:openDetail(1094);"
											title="A2324821383383"
											>A2324821383383</a
										>
									</td>
									<td>2023-09-05 11:00:21</td>
									<td>
										<a href="#none" class="view_proList"
											><span idx="6">모던 스타일_sample 019 (1)</span></a
										>
									</td>
									<td>서승보</td>
									<td>
										<div>
											<a
												href="javascript:;"
												ezi="148868"
												onclick="ezpop.member.open(event)"
												>seobo28</a
											>
										</div>
									</td>
									<td>150,000</td>
									<td>150,000</td>
									<td>온라인입금</td>
									<td>미입금</td>

									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>1</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>1</td>
									<td>0</td>
									<td>0</td>
								</tr>

								<!-- <script type="text/javascript">
									var l_goods = [];

									var l_obj = {
										idx: 1,
										code: 'G0000010863',
										name: '모던 스타일_sample 019',
										opt: '',
										ea: '1',
									};
									l_goods.push(l_obj);

									g_popgoods.push(l_goods);
								</script> -->

								<input type="hidden" name="isSetDecision" value="F" />

								<tr>
									<input type="hidden" name="payway" value="128" />
									<input type="hidden" name="ordStep" value="300" />
									<input type="hidden" name="eswStep" value="0" />
									<input type="hidden" name="isConfirm" value="T" />

									<td>
										<label
											><input
												type="checkbox"
												id="cbList"
												name="cbList"
												value="1093"
												onclick="checkCbList(this)"
											/>선택</label
										>
									</td>
									<td>PC</td>
									<td>
										<a
											href="javascript:openDetail(1093);"
											title="A2324841770770"
											>A2324841770770</a
										>
									</td>
									<td>2023-09-05 10:57:21</td>
									<td>
										<a href="#none" class="view_proList"
											><span idx="7">모던 스타일_sample 016 (1)</span></a
										>
									</td>
									<td>서승보</td>
									<td>
										<div>
											<a
												href="javascript:;"
												ezi="148868"
												onclick="ezpop.member.open(event)"
												>seobo28</a
											>
										</div>
									</td>
									<td>150,000</td>
									<td>150,000</td>
									<td>온라인입금</td>
									<td>2023-09-05 10:57:35</td>

									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>1</td>
									<td>1</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
								</tr>

								<!-- <script type="text/javascript">
									var l_goods = [];

									var l_obj = {
										idx: 1,
										code: 'G0000010860',
										name: '모던 스타일_sample 016',
										opt: '',
										ea: '1',
									};
									l_goods.push(l_obj);

									g_popgoods.push(l_goods);
								</script> -->

								<input type="hidden" name="isSetDecision" value="F" />

								<tr>
									<input type="hidden" name="payway" value="128" />
									<input type="hidden" name="ordStep" value="100" />
									<input type="hidden" name="eswStep" value="0" />
									<input type="hidden" name="isConfirm" value="F" />

									<td>
										<label
											><input
												type="checkbox"
												id="cbList"
												name="cbList"
												value="1092"
												onclick="checkCbList(this)"
											/>선택</label
										>
									</td>
									<td>PC</td>
									<td>
										<a
											href="javascript:openDetail(1092);"
											title="A2324836653653"
											>A2324836653653</a
										>
									</td>
									<td>2023-09-05 10:42:16</td>
									<td>
										<a href="#none" class="view_proList"
											><span idx="8">모던 스타일_sample 019 (1)</span></a
										>
									</td>
									<td>서승보</td>
									<td>
										<div>
											<a
												href="javascript:;"
												ezi="148868"
												onclick="ezpop.member.open(event)"
												>seobo28</a
											>
										</div>
									</td>
									<td>160,000</td>
									<td>160,000</td>
									<td>온라인입금</td>
									<td>미입금</td>

									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>1</td>
									<td>1</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
								</tr>

								<!-- <script type="text/javascript">
									var l_goods = [];

									var l_obj = {
										idx: 1,
										code: 'G0000010864',
										name: '모던 스타일_sample 019',
										opt: ' 색상 : 블루',
										ea: '1',
									};
									l_goods.push(l_obj);

									g_popgoods.push(l_goods);
								</script> -->

								<input type="hidden" name="isSetDecision" value="F" />

								<tr>
									<input type="hidden" name="payway" value="128" />
									<input type="hidden" name="ordStep" value="590" />
									<input type="hidden" name="eswStep" value="0" />
									<input type="hidden" name="isConfirm" value="T" />

									<td>
										<label
											><input
												type="checkbox"
												id="cbList"
												name="cbList"
												value="1091"
												onclick="checkCbList(this)"
											/>선택</label
										>
									</td>
									<td>PC</td>
									<td>
										<a
											href="javascript:openDetail(1091);"
											title="A2324822692692"
											>A2324822692692</a
										>
									</td>
									<td>2023-09-05 10:08:42</td>
									<td>
										<a href="#none" class="view_proList"
											><span idx="9"
												>입점업체 상품 테스트_수수료적용 02 (1)</span
											></a
										>
									</td>
									<td>서승보</td>
									<td>
										<div>
											<a
												href="javascript:;"
												ezi="148868"
												onclick="ezpop.member.open(event)"
												>seobo28</a
											>
										</div>
									</td>
									<td>350,000</td>
									<td>350,000</td>
									<td>온라인입금</td>
									<td>2023-09-05 10:09:07</td>

									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>1</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
									<td>1</td>
									<td>0</td>
									<td>0</td>
									<td>0</td>
								</tr>

								<!-- <script type="text/javascript">
									var l_goods = [];

									var l_obj = {
										idx: 1,
										code: 'G0000010867',
										name: '입점업체 상품 테스트_수수료적용 02',
										opt: '',
										ea: '1',
									};
									l_goods.push(l_obj);

									g_popgoods.push(l_goods);
								</script> -->

								<input type="hidden" name="isSetDecision" value="F" />
							</tbody>
						</table>

						<!-- 새로운 주문 리스트 끝 2015.09.04 -->

						<!-- 주문 그리드 스크립트 -->
						<!-- <script>
//grid
const row_count = 4000;
const col_count = 12;

const data = [];
const columns = [
    {header: '주문경로', name: 'orderpath', minWidth: 70, whiteSpace: 'normal', align: "center",},
    {header: '주문번호', name: 'ordernumber', minWidth: 100, whiteSpace: 'normal', align: "center",},
    {header: '주문일시', name: 'orderdate', minWidth: 120, whiteSpace: 'normal', align: "center",},
    {header: '상품명(품목수)', name: 'pdtinfo', minWidth: 218, whiteSpace: 'normal', align: "left",},
    {header: '성명', name: 'memname', minWidth: 80, whiteSpace: 'normal', align: "center",},
    {header: 'ID', name: 'memid', minWidth: 100, whiteSpace: 'normal', align: "center",},
    {header: '주문금액', name: 'price', minWidth: 100, whiteSpace: 'normal', align: "center",},
    {header: '결제금액', name: 'pay', minWidth: 100, whiteSpace: 'normal', align: "center",},
    {header: '결제수단', name: 'method', minWidth: 100, whiteSpace: 'normal', align: "center",},
    {header: '결제일', name: 'paymentdate', minWidth: 120, whiteSpace: 'normal', align: "center",},
    {header: '할인금액', name: 'discount', minWidth: 100, whiteSpace: 'normal', align: "center",},
    {header: '적립금사용', name: 'point', minWidth: 100, whiteSpace: 'normal', align: "center",},
    {header: '배송비', name: 'shipment', minWidth: 100, whiteSpace: 'normal', align: "center",},
    {header: '주문수량', name: 'count', minWidth: 70, whiteSpace: 'normal', align: "center",},
    {header: '미배송', name: 'undelivered', minWidth: 50, whiteSpace: 'normal', align: "center",},
    {header: '배송중', name: 'send', minWidth: 70, whiteSpace: 'normal', align: "center",},
    {header: '배송완료', name: 'delivery', minWidth: 70, whiteSpace: 'normal', align: "center",},
    {header: '구매확정', name: 'confirm', minWidth: 70, whiteSpace: 'normal', align: "center",},
    {header: '취소', name: 'cancle', minWidth: 40, whiteSpace: 'normal', align: "center",},
    {header: '반품', name: 'refurn', minWidth: 40, whiteSpace: 'normal', align: "center",},
    {header: '교환', name: 'exchange', minWidth: 40, whiteSpace: 'normal', align: "center",},
];

for (let i = 0; i < row_count; i++) {
    const row = {
        'orderpath': 'PC',
        'ordernumber': '123654789',
        'orderdate': '2023-03-06<br>14:02:15',
        'pdtinfo': '<a href="#none;">상품명상품명상품명상품명상품명상품명상품상품명상품명상품명상품명상품명상품명상품상품명상품명상품명상품명상품명상품명상품상품명상품명상품명상품명상품명상품명상품상품명상품명상품명상품명상품명상품명상품상품명상품명상품명상품명상품명상품명상품명</a>',
        'memname': '',
        'memid': 'ncgnncgn',
        'price': '34,000',
        'pay': '34,000',
        'method': '온라인입금',
        'paymentdate': '2023-03-06<br>12:45:12',
        'discount': '3,000',
        'point' : '0',
        'shipment': '3,000',
        'count': '1',
        'undelivered': '2',
        'send': '3',
        'delivery': '4',
        'confirm' : '5',
        'cancle': '6',
        'refurn': '7',
        'exchange' : '8',
    };
    for (let j = 0; j < col_count; j++) {
        row[``] = row;
    }
    data.push(row);
}
// checkbox custom renderer
class CheckboxRenderer {
    constructor(props) {
        const { grid, rowKey } = props;

        const inputWrap = document.createElement('div');
        inputWrap.className = 'label_wrap';

        const label = document.createElement('label');
        label.setAttribute('for', String(rowKey));

        const checkInput = document.createElement('input');
        checkInput.className = 'chkbox_inp';
        checkInput.id = String(rowKey);
        checkInput.name = 'cbList';

        inputWrap.appendChild(checkInput);
        inputWrap.appendChild(label);

        checkInput.type = 'checkbox';
        label.addEventListener('click', (ev) => {
            ev.preventDefault();

            if (ev.shiftKey) {
                gridOrd[!checkInput.checked ? 'checkBetween' : 'uncheckBetween'](rowKey);
                return;
            }

            grid[!checkInput.checked ? 'check' : 'uncheck'](rowKey);
        });

        this.el = inputWrap;

        this.render(props);
    }
  
    getElement() {
        return this.el;
    }
  
    render(props) {
        const checkInput = this.el.querySelector('.chkbox_inp');
        const checked = Boolean(props.value);

        checkInput.checked = checked;
    }
}
// 주문별
const gridOrd = new tui.Grid({
    el: document.getElementById('gridOrd'),
    data: data,
    //scrollX: false,
    //scrollY: false,
    bodyHeight: 497,
    minRowHeight:40, // td 높이
    rowHeight: 'auto',
    header: {
        height:40 // th 높이
    },
    draggable: false,
    contextMenu: null,
    rowHeaders: [
        {
            type: 'checkbox',
            header: `
            <div class="label_wrap">
                <input type="checkbox" id="all-checkbox" class="chkbox_inp" name="cbListAll" />
                <label for="all-checkbox" class="checkbox">
                    <span class="custom-input"></span>
                </label>
            </div>
            `,
            renderer: {
                type: CheckboxRenderer
            }
        }
    ],
    columns: columns,
    columnOptions: { 
        resizable: true // 컬럼 너비 조절
    },
    pageOptions: { 
        useClient: true,
        perPage: 30 // 페이지당 노출 갯수
    }
});
// tooltip
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

// 상품정보에 마우스 오버시
gridOrd.on('mouseover', (e) => {
    const key = e.rowKey + 1;
    if (e.columnName == 'pdtinfo' && !isNaN(key)) {
        if(key < 10){
            tooltip.innerHTML = '<div class="tip_img"><img src="../imgs/test0' + key + '.jpg"></div>';
        } else {
            tooltip.innerHTML = '<div class="tip_img"><img src="../imgs/test' + key + '.jpg"></div>';
        }
        tooltip.innerHTML += '<div class="tip_detail"><span class="prdtit">컵밥_전주식돌솥비빔밥</span><span class="price">3,000원</span><span class="state">미입금</span></div>';
        document.querySelector('.grid_wrap').append(tooltip);

        // 마우스 위치 따라 tooltip 이동
        document.addEventListener('mousemove', function(e){
            tooltip.style.left = (e.pageX) + 'px';
            tooltip.style.top = (e.pageY) + 'px';
        });
    }
});

// 상품정보에서 마우스가 벗어났을 때
gridOrd.on('mouseout', (e) => { 
    const key = e.rowKey + 1;
    if (e.columnName == 'pdtinfo' && !isNaN(key)) {
        tooltip.parentNode.removeChild(tooltip);
    }
});
</script> -->
					</div>

					<!-- 상품상세내역 -->
					<div class="layer_pro_list">
						<table>
							<caption>
								상품상세내역
							</caption>
							<colgroup>
								<col width="50" />
								<col width="80" />
								<col width="" />
								<col width="60" />
							</colgroup>
							<thead>
								<tr>
									<th>No.</th>
									<th>상품코드</th>
									<th>상품명(옵션)</th>
									<th>수량</th>
								</tr>
							</thead>
							<tbody id="layer_pro_list_tbody">
								<tr>
									<td>1</td>
									<td>00000000</td>
									<td class="txt_left">
										상품명
										<div class="option">사이즈 : S</div>
									</td>
									<td>1</td>
								</tr>
								<tr>
									<td>2</td>
									<td>00000000</td>
									<td class="txt_left">
										상품명
										<div class="option">사이즈 : S</div>
									</td>
									<td>1</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- //layer_pro_list -->

					<div class="paging" style="margin-top: 10px">
						<span
							><a
								href="/nmanager/order/order_list?page=1&amp;menu=&amp;sstep=&amp;spayway=&amp;sescrow=&amp;sterm=order&amp;sdts=&amp;sdte=&amp;slevel=&amp;ssprice=&amp;seprice=&amp;scate=0&amp;sdealer=&amp;snoacct=0&amp;skey=&amp;sword=&amp;psort=orddt&amp;psize=10&amp;listview=O&amp;sflatform="
								><strong class="active">1</strong></a
							><a
								href="/nmanager/order/order_list?page=2&amp;menu=&amp;sstep=&amp;spayway=&amp;sescrow=&amp;sterm=order&amp;sdts=&amp;sdte=&amp;slevel=&amp;ssprice=&amp;seprice=&amp;scate=0&amp;sdealer=&amp;snoacct=0&amp;skey=&amp;sword=&amp;psort=orddt&amp;psize=10&amp;listview=O&amp;sflatform="
								><span class="num">2</span></a
							><a
								href="/nmanager/order/order_list?page=3&amp;menu=&amp;sstep=&amp;spayway=&amp;sescrow=&amp;sterm=order&amp;sdts=&amp;sdte=&amp;slevel=&amp;ssprice=&amp;seprice=&amp;scate=0&amp;sdealer=&amp;snoacct=0&amp;skey=&amp;sword=&amp;psort=orddt&amp;psize=10&amp;listview=O&amp;sflatform="
								><span class="num">3</span></a
							><a
								href="/nmanager/order/order_list?page=4&amp;menu=&amp;sstep=&amp;spayway=&amp;sescrow=&amp;sterm=order&amp;sdts=&amp;sdte=&amp;slevel=&amp;ssprice=&amp;seprice=&amp;scate=0&amp;sdealer=&amp;snoacct=0&amp;skey=&amp;sword=&amp;psort=orddt&amp;psize=10&amp;listview=O&amp;sflatform="
								><span class="num">4</span></a
							></span
						>
					</div>

					<!-- <div class="btn_left mgb20">
					<span class="button large black"><button type="button" onClick="checkCbListAll()">전체선택</button></span>
				</div>-->

					<div class="order_list_btn2">
						<dl>
							<dt>일괄수정 :</dt>
							<dd>
								선택한 주문건을
								<select id="batchOrdStep" name="batchOrdStep">
									<option value="">선택</option>
									<option value="100">입금확인중</option>
									<option value="200">결제완료</option>
								</select>
								로(으로)
								<button
									type="button"
									onclick="setStepList()"
									class="btn_sec md"
								>
									수정하기
								</button>
							</dd>
						</dl>

						<dl>
							<dt>엑셀다운 :</dt>
							<dd>
								선택한 주문건을
								<button
									type="button"
									onclick="downExcel(true)"
									class="btn_sec md"
								>
									엑셀로받기
								</button>
								현재 페이지의 모든 주문건을
								<button type="button" onclick="downExcel()" class="btn_sec md">
									엑셀로받기
								</button>
							</dd>
						</dl>
					</div>
					<!-- //order_list_btn2 -->
				</form>

				<!-- 엑셀다운 폼 : 시작 ###################################################################### -->
				<form name="FrmExcel" method="post">
					<input type="hidden" name="" value="" />

					<input type="hidden" name="mode" />
					<input type="hidden" name="idx" />
				</form>
				<!-- 엑셀다운 폼 : 끝 ###################################################################### -->
			</section>
		</div>

		<div id="footer">
			<p>Copyright ⓒ <strong>내친구네트웍스</strong> All rights reserved.</p>
		</div>
	</main>
</template>

<script setup></script>

<style></style>
