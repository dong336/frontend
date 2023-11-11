function m_Completepayment(FormOrJson, closeEvent) {
	var frm = document.Frm;
	var payPath = frm.payPath.value;

	/********************************************************************/
	/* FormOrJson은 가맹점 임의 활용 금지                               */
	/* frm 값에 FormOrJson 값이 설정 됨 frm 값으로 활용 하셔야 됩니다.  */
	/* FormOrJson 값을 활용 하시려면 기술지원팀으로 문의바랍니다.       */
	/********************************************************************/
	GetField(frm, FormOrJson); // 위에서 만든 폼데이터에 결제창의 인증데이터 담기.

	if (frm.res_cd.value == '0000') {
		/*
            가맹점 리턴값 처리 영역
        */
		//
		frm.action = SECURE_URL + payPath + '/kcp/pp_ax_hub';
		frm.target = '_self';

		frm.submit();
	} else {
		alert('[' + frm.res_cd.value + '] ' + frm.res_msg.value);

		closeEvent();

		failPay();
	}
}

function pay_chrome(pgInfo) {
	var f = document.Frm;
	var payPath = f.payPath.value;

	payIng = 1;
	$('#order_payment_button').css({ display: 'none' });
	$('#order_payment_progress').css({ display: 'block' });

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

	KCP_Pay_Execute(f);
}
