function setPgInfo(f) {
	f.LGD_BUYER.value = f.ordName.value;
	f.LGD_BUYERADDRESS.value = f.ordAddr.value + ' ' + f.ordAddrDetail.value;
	f.LGD_BUYERPHONE.value =
		f.ordMobile1.value + '-' + f.ordMobile2.value + '-' + f.ordMobile3.value;
	f.LGD_BUYEREMAIL.value = f.ordEmailId.value + '@' + f.ordEmailDomain.value;
	f.LGD_RECEIVER.value = f.rcvName.value;
	f.LGD_RECEIVERPHONE.value =
		f.rcvMobile1.value + '-' + f.rcvMobile2.value + '-' + f.rcvMobile3.value;
	f.LGD_DELIVERYINFO.value = f.rcvAddr.value + ' ' + f.rcvAddrDetail.value;
}

function payCard(f, isEscrow) {
	setPgInfo(f);

	f.LGD_CUSTOM_FIRSTPAY.value = 'SC0010';
	f.LGD_CUSTOM_USABLEPAY.value = 'SC0010';

	//  - 에스크로 설정은 프로젝트별로 정책에 맞게 설정 할 것
	// 에스크로 설정
	//	if (isEscrow && getGoodsSize() == 1) {
	//		f.LGD_ESCROW_USEYN.value = "Y";
	//	}

	checkPay(f);
}

function payBank(f, isEscrow) {
	setPgInfo(f);

	f.LGD_CUSTOM_FIRSTPAY.value = 'SC0030';
	f.LGD_CUSTOM_USABLEPAY.value = 'SC0030';

	//  - 에스크로 설정은 프로젝트별로 정책에 맞게 설정 할 것
	// 에스크로 설정
	//	if (isEscrow && getGoodsSize() == 1) {
	//		f.LGD_ESCROW_USEYN.value = "Y";
	//	}

	checkPay(f);
}

function payVirtual(f, isEscrow) {
	var settlePrice = f.settlePrice.value.toNumeric();

	setPgInfo(f);

	f.LGD_CUSTOM_FIRSTPAY.value = 'SC0040';
	f.LGD_CUSTOM_USABLEPAY.value = 'SC0040';

	//  - 에스크로 설정은 프로젝트별로 정책에 맞게 설정 할 것
	// 에스크로 설정
	//	if (isEscrow && settlePrice >= 50000 && getGoodsSize() == 1) {
	//		if (confirm("에스크로로 주문 하시겠습니까?")) {
	//			f.LGD_ESCROW_USEYN.value = "Y";
	//		}
	//	}

	// PMS 에스크로 설정
	if (isEscrow) {
		f.LGD_ESCROW_USEYN.value = 'Y';
	}

	checkPay(f);
}

//휴대폰 결제
function payPhone(f) {
	setPgInfo(f);

	f.LGD_CUSTOM_FIRSTPAY.value = 'SC0060';
	f.LGD_CUSTOM_USABLEPAY.value = 'SC0060';

	checkPay(f);
}

//ARS 결제
function payARS(f) {
	setPgInfo(f);

	f.LGD_CUSTOM_FIRSTPAY.value = 'SC0070';
	f.LGD_CUSTOM_USABLEPAY.value = 'SC0070';

	checkPay(f);
}

// 결제 유효성 검사
function checkPay(f) {
	var payPath = f.payPath.value;
	f.action = payPath + '/uplus/check_pay';
	f.target = 'frmPay';
	f.submit();
}

// 결제 수단 인증 요청
function pay(pgInfo) {
	var f = document.Frm;
	var payPath = f.payPath.value;

	payIng = 1;
	$('#order_payment_button').css({ display: 'none' });
	$('#order_payment_progress').css({ display: 'block' });

	for (key in pgInfo) {
		console.log('key=' + key + ', value=' + pgInfo[key]);
	}

	f.payOrdNo.value = pgInfo['LGD_OID'];
	for (key in pgInfo) {
		if (f[key]) f[key].value = pgInfo[key];
	}

	var LGD_window_type = f.LGD_WINDOW_TYPE.value;
	lgdwin = openXpay(f, f.CST_PLATFORM.value, LGD_window_type, null, '', '');
}

// 결제 수단 인증 결과 처리
function payment_return() {
	var fDoc;
	fDoc = lgdwin.contentWindow || lgdwin.contentDocument;

	var f = document.Frm;
	var payPath = f.payPath.value;

	if (fDoc.document.getElementById('LGD_RESPCODE').value == '0000') {
		f.LGD_PAYKEY.value = fDoc.document.getElementById('LGD_PAYKEY').value;
		f.target = '_self';
		f.action = payPath + '/uplus/pay_result';
		f.submit();
	} else {
		var LGD_RESPCODE = fDoc.document.getElementById('LGD_RESPCODE').value;
		var LGD_RESPMSG = fDoc.document.getElementById('LGD_RESPMSG').value;
		failPay('인증이 실패하였습니다.\n\n' + LGD_RESPMSG);
		closeIframe();
	}
}
