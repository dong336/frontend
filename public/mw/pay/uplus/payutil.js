function setPgInfo(f) {
	f.LGD_BUYER.value = f.ordName.value;
	//f.LGD_BUYERADDRESS.value = f.ordAddr.value+" "+f.ordAddrDetail.value;
	f.LGD_BUYERPHONE.value =
		f.ordMobile1.value + '-' + f.ordMobile2.value + '-' + f.ordMobile3.value;
	if (f.ordEmailId && f.ordEmailDomain) {
		f.LGD_BUYEREMAIL.value = f.ordEmailId.value + '@' + f.ordEmailDomain.value;
	} else {
		f.LGD_BUYEREMAIL.value = f.email.value;
	}

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
	//	f.LGD_ESCROW_USEYN.value = (isEscrow && getGoodsSize() == 1 ? "Y" : "N");

	checkPay(f);
}

function payBank(f, isEscrow) {
	setPgInfo(f);

	f.LGD_CUSTOM_FIRSTPAY.value = 'SC0030';
	f.LGD_CUSTOM_USABLEPAY.value = 'SC0030';
	//  - 에스크로 설정은 프로젝트별로 정책에 맞게 설정 할 것
	// 에스크로 설정
	//	f.LGD_ESCROW_USEYN.value = (isEscrow && getGoodsSize() == 1 ? "Y" : "N");

	checkPay(f);
}

function payVirtual(f, isEscrow) {
	setPgInfo(f);

	f.LGD_CUSTOM_FIRSTPAY.value = 'SC0040';
	f.LGD_CUSTOM_USABLEPAY.value = 'SC0040';
	//  - 에스크로 설정은 프로젝트별로 정책에 맞게 설정 할 것
	// 에스크로 설정
	//	f.LGD_ESCROW_USEYN.value = (isEscrow && getGoodsSize() == 1 ? "Y" : "N");

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

function checkPay(f) {
	payIng = 1;

	var payPath = f.payPath.value;
	f.action = SECURE_URL + payPath + '/uplus/check_pay';
	f.target = 'frmPay';
	f.submit();
}

function pay(pgInfo) {
	var f = document.Frm;
	var payPath = f.payPath.value;

	payIng = 1;

	f.payOrdNo.value = pgInfo['LGD_OID'];
	for (key in pgInfo) {
		if (f[key]) f[key].value = pgInfo[key];
	}

	f.target = '_self';

	var lgdwin = open_paymentwindow(
		document.getElementById('Frm'),
		f.CST_PLATFORM.value,
		f.CST_WINDOW_TYPE.value,
	);
}

function getFormObject() {
	return document.getElementById('Frm');
}
