function setPgInfo(f) {
	f.buyr_name.value = kcpRemoveChar(f.ordName.value);
	f.buyr_mail.value = kcpRemoveChar(
		f.ordEmailId.value + '@' + f.ordEmailDomain.value,
	);
	f.buyr_tel1.value = kcpRemoveChar(
		f.ordTel1.value + '-' + f.ordTel2.value + '-' + f.ordTel3.value,
	);
	f.buyr_tel2.value = kcpRemoveChar(
		f.ordMobile1.value + '-' + f.ordMobile2.value + '-' + f.ordMobile3.value,
	);
	f.rcvr_name.value = kcpRemoveChar(f.rcvName.value);
	f.rcvr_tel1.value = kcpRemoveChar(
		f.rcvTel1.value + '-' + f.rcvTel2.value + '-' + f.rcvTel3.value,
	);
	f.rcvr_tel2.value = kcpRemoveChar(
		f.rcvMobile1.value + '-' + f.rcvMobile2.value + '-' + f.rcvMobile3.value,
	);
	f.rcvr_mail.value = '';
	f.rcvr_zipx.value = kcpRemoveChar(f.rcvPost.value);
	f.rcvr_add1.value = kcpRemoveChar(f.rcvAddr.value);
	f.rcvr_add2.value = kcpRemoveChar(f.rcvAddrDetail.value);
}

function kcpRemoveChar(value) {
	return value.stripspace() != ''
		? value.replace(/(,|&|;|\\|\||'|\")/g, '')
		: '';
}

function payCard(f, isEscrow) {
	setPgInfo(f);

	f.pay_method.value = '100000000000';

	//  - 에스크로 설정은 프로젝트별로 정책에 맞게 설정 할 것
	// 에스크로 설정
	//	if (getGoodsSize() == 1) {
	//		f.escw_used.value = (isEscrow ? "Y" : "");
	//		f.pay_mod.value = (isEscrow ? "Y" : "N");
	//	}

	//f.used_card_YN.value = "Y";
	//f.used_card.value = "CCHN";

	checkPay(f);
}

function payPayco(f) {
	setPgInfo(f);
	f.pay_method.value = '100000000000';
	f.escw_used.value = '';
	f.pay_mod.value = 'N';

	f.payco_direct.value = 'Y';

	checkPay(f);
}

function payPhone(f, isEscrow) {
	setPgInfo(f);

	f.pay_method.value = '000010000000';

	//  - 에스크로 설정은 프로젝트별로 정책에 맞게 설정 할 것
	// 에스크로 설정
	//	f.escw_used.value = (isEscrow ? "Y" : "");
	//	f.pay_mod.value = (isEscrow ? "Y" : "N");

	f.hp_apply_yn.value = 'Y';
	f.hp_commid.value = '';

	checkPay(f);
}

function payBank(f, isEscrow) {
	setPgInfo(f);

	f.pay_method.value = '010000000000';

	//  - 에스크로 설정은 프로젝트별로 정책에 맞게 설정 할 것
	// 에스크로 설정
	//	if (getGoodsSize() == 1) {
	//		f.escw_used.value = (isEscrow ? "Y" : "");
	//		f.pay_mod.value = (isEscrow ? "Y" : "N");
	//	}

	checkPay(f);
}

function payVirtual(f, isEscrow) {
	//function payVirtual(f, isEscrow, alreayConfirm) {
	var settlePrice = f.settlePrice.value.toNumeric();
	f.escw_used.value = '';
	f.pay_mod.value = 'N';

	//  - 에스크로 설정은 프로젝트별로 정책에 맞게 설정 할 것
	// 에스크로 설정
	//	if (isEscrow && settlePrice >= 50000 && getGoodsSize() == 1) {
	//		if ( confirm("에스크로로 주문 하시겠습니까?")) {
	//			f.escw_used.value = "Y";
	//			f.pay_mod.value = "Y";
	//		}
	//	}

	// PMS 에스크로 설정
	if (isEscrow) {
		f.escw_used.value = 'Y';
		f.pay_mod.value = 'Y';
	}

	setPgInfo(f);

	f.pay_method.value = '001000000000';

	checkPay(f);
}

function checkPay(f) {
	var payPath = f.payPath.value;
	f.action = SECURE_URL + payPath + '/kcp/check_pay';
	f.target = 'frmPay';
	f.submit();
}

function pay(pgInfo) {
	var f = document.Frm;
	var payPath = f.payPath.value;

	payIng = 1;
	$('#order_payment_button').css({ display: 'none' });
	$('#order_payment_progress').css({ display: 'block' });

	if (GetPluginObject() == null) {
		failPay('플러그인 설치 후 다시 시도 하십시오.');
		return;
	}

	f.payOrdNo.value = pgInfo['ordr_idxx'];
	for (key in pgInfo) {
		f[key].value = pgInfo[key];
	}

	if (f.good_mny.value.toNumeric() < 50000) f.quotaopt.value = '0';

	var chr30 = String.fromCharCode(30); // Record Separator 변수 생성
	var chr31 = String.fromCharCode(31); // Unit Separator 변수 생성

	f.bask_cntx.value = '1';
	f.good_info.value =
		'seq=1' +
		chr31 +
		'ordr_numb=' +
		f.ordr_idxx.value +
		chr31 +
		'good_name=' +
		kcpRemoveChar(f.payGoodsNm.value) +
		chr31 +
		'good_cntx=1' +
		chr31 +
		'good_amtx=' +
		f.good_mny.value;

	/* Payplus Plugin 실행 */
	if (MakePayMessage(f) == true) {
		f.action = SECURE_URL + payPath + '/kcp/pp_ax_hub';
		f.target = '_self';
		f.submit();
	} else {
		/* Payplus Plugin에서 오류발생 시 */
		/* res_cd와 res_msg변수에 해당 에러코드와 에러메시지가 셋팅됨
		ex) PLUGIN에서 취소 버튼 클릭시 res_cd=3001, res_msg=사용자 취소 셋팅됨 */
		failPay();
		return;
	}
}
