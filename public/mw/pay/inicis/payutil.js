function setPgInfo(f) {
	f.P_UNAME.value = f.ordName.value;
	f.P_EMAIL.value =
		!isEmpty(f.ordEmailId) && !isEmpty(f.ordEmailDomain)
			? f.ordEmailId.value + '@' + f.ordEmailDomain.value
			: '';
	f.P_MOBILE.value =
		f.ordMobile1.value + '-' + f.ordMobile2.value + '-' + f.ordMobile3.value;
}

function payCard(f, isEscrow) {
	setPgInfo(f);

	//  - 에스크로 설정은 프로젝트별로 정책에 맞게 설정 할 것
	// 에스크로 설정
	//	if (isEscrow && getGoodsSize() == 1) {
	//		f.P_RESERVED.value = "useescrow=Y";
	//		f.useescrow.value = "T";
	//	}

	checkPay(f);
}

function payPhone(f) {
	setPgInfo(f);

	checkPay(f);
}

function payBank(f, isEscrow) {
	setPgInfo(f);

	//  - 에스크로 설정은 프로젝트별로 정책에 맞게 설정 할 것
	// 에스크로 설정
	//	if (isEscrow && getGoodsSize() == 1) {
	//		f.P_RESERVED.value = "useescrow=Y";
	//		f.useescrow.value = "T";
	//	}

	checkPay(f);
}

function payVirtual(f, isEscrow) {
	setPgInfo(f);

	//  - 에스크로 설정은 프로젝트별로 정책에 맞게 설정 할 것
	// 에스크로 설정
	//	if (isEscrow && getGoodsSize() == 1) {
	//		f.P_RESERVED.value = "useescrow=Y";
	//		f.useescrow.value = "T";
	//	}

	// PMS 에스크로 설정
	if (isEscrow) {
		f.P_RESERVED.value = 'useescrow=Y';
		f.useescrow.value = 'T';
	}

	checkPay(f);
}

function checkPay(f) {
	payIng = 1;

	var payPath = f.payPath.value;
	f.action = SECURE_URL + payPath + '/inicis/check_pay';
	f.target = 'frmPay';
	f.submit();
}

function pay(pgInfo) {
	var f = document.Frm;
	var payPath = f.payPath.value;

	payIng = 1;

	f.payOrdNo.value = pgInfo['P_OID'];
	for (key in pgInfo) {
		f[key].value = pgInfo[key];
	}

	f.action = SECURE_URL + payPath + '/inicis/pay';
	f.target = '_self';
	f.submit();
}
