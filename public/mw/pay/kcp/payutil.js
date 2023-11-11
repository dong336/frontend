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
}

function kcpRemoveChar(value) {
	return value.stripspace() != ''
		? value.replace(/(,|&|;|\\|\||'|\")/g, '')
		: '';
}

function payCard(f, isEscrow) {
	setPgInfo(f);

	f.ActionResult.value = 'card';
	f.pay_method.value = 'CARD';

	//  - 에스크로 설정은 프로젝트별로 정책에 맞게 설정 할 것
	// 에스크로 설정
	//	if (isEscrow && getGoodsSize() == 1) {
	//		f.escw_used.value = "Y";
	//		f.pay_mod.value = "Y";
	//	}

	// PMS 에스크로 설정
	if (isEscrow) {
		f.escw_used.value = 'Y';
		f.pay_mod.value = 'Y';
	}

	checkPay(f);
}

function payPayco(f) {
	setPgInfo(f);

	f.ActionResult.value = 'card';
	f.pay_method.value = 'CARD';
	f.payco_direct.value = 'Y';
	f.escw_used.value = 'N';
	f.pay_mod.value = 'N';

	checkPay(f);
}

function payPhone(f, isEscrow) {
	setPgInfo(f);

	f.ActionResult.value = 'mobx';
	f.pay_method.value = 'MOBX';

	f.hp_apply_yn.value = 'Y';
	f.hp_commid.value = '';
	checkPay(f);
}

function payBank(f, isEscrow) {
	setPgInfo(f);

	f.ActionResult.value = 'acnt';
	f.pay_method.value = 'BANK';

	//  - 에스크로 설정은 프로젝트별로 정책에 맞게 설정 할 것
	// 에스크로 설정
	//	if (isEscrow && getGoodsSize() == 1) {
	//		f.escw_used.value = "Y";
	//		f.pay_mod.value = "Y";
	//	}

	checkPay(f);
}

function payVirtual(f, isEscrow) {
	setPgInfo(f);

	f.ActionResult.value = 'vcnt';
	f.pay_method.value = 'VCNT';

	//  - 에스크로 설정은 프로젝트별로 정책에 맞게 설정 할 것
	// 에스크로 설정
	//	if (isEscrow && getGoodsSize() == 1) {
	//		if (confirm("에스크로로 주문 하시겠습니까?")) {
	//			f.escw_used.value = "Y";
	//			f.pay_mod.value = "Y";
	//		}
	//	}

	checkPay(f);
}

function checkPay(f) {
	payIng = 1;

	var payPath = f.payPath.value;
	f.action = SECURE_URL + payPath + '/kcp/check_pay';
	f.target = 'frmPay';
	f.submit();
}

function pay(pgInfo) {
	var f = document.Frm;
	var payPath = f.payPath.value;

	payIng = 1;

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

	try {
		kcp_AJAX();
	} catch (e) {
		failPay('결제를 실패하였습니다.');
		return;
	}
}

/* kcp web 결제창 호츨 (변경불가) */
function call_pay_form(payUrl) {
	var f = document.Frm;

	self.name = 'tar_opener';
	bodyheight = $('body').height();

	if ($('#kcp_pay_layer').length > 0) {
		$('#kcp_pay_layer').remove();
	}

	var $kcpPayLayer = $('<div id="kcp_pay_layer" />')
		.css({
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			'background-color': '#f4f4f4',
			'z-index': 1000000000,
			display: 'none',
		})
		.appendTo('body');

	$(
		'<iframe name="frmKcpPay" frameBorder="0" vspace="0" hspace="0" scrolling="auto" marginheight="0" marginwidth="0"></iframe>',
	)
		.css({
			width: '100%',
			height: '100%',
			border: 'none',
			overflow: 'auto',
		})
		.appendTo($kcpPayLayer)
		.one('load', function () {
			$('#kcp_pay_layer').show();
			$('#contents').hide();
		});

	setTimeout(function () {
		$('body').css('height', bodyheight);
	}, 1000);

	// utf-8
	f.PayUrl.value = payUrl;

	f.target = 'frmKcpPay';
	f.action =
		payUrl.substring(0, payUrl.lastIndexOf('/')) +
		'/jsp/encodingFilter/encodingFilter.jsp';
	//f.action = payUrl;
	f.submit();
}
