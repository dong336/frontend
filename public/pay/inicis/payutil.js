StartSmartUpdate();

addEvent(window, 'load', enable_click);
addEvent(window, 'focus', focus_control);

function setPgInfo(f) {
	f.buyername.value = f.ordName.value;
	f.buyeremail.value = f.ordEmailId.value + '@' + f.ordEmailDomain.value;
	f.buyertel.value =
		f.ordMobile1.value + '-' + f.ordMobile2.value + '-' + f.ordMobile3.value;
	f.recvname.value = f.rcvName.value;
	f.recvtel.value =
		f.rcvMobile1.value + '-' + f.rcvMobile2.value + '-' + f.rcvMobile3.value;
	//f.recvpostnum.value = f.rcvPost1.value+f.rcvPost2.value;
	f.recvpostnum.value = f.rcvPost.value;
	f.recvaddr.value =
		f.rcvAddr.value +
		(isEmpty(f.rcvAddrDetail) ? '' : ' ' + f.rcvAddrDetail.value);
	f.recvmsg.value = f.demand.value;
}

function payCard(f, isEscrow) {
	setPgInfo(f);

	f.useescrow.value = isEscrow && getGoodsSize() == 1 ? 'T' : 'F';
	f.gopaymethod.value = 'onlycard';

	checkPay(f);
}

function payPhone(f, isEscrow) {
	setPgInfo(f);

	f.useescrow.value = isEscrow && getGoodsSize() == 1 ? 'T' : 'F';
	f.gopaymethod.value = 'onlyhpp';

	checkPay(f);
}

function payBank(f, isEscrow) {
	setPgInfo(f);

	f.useescrow.value = isEscrow && getGoodsSize() == 1 ? 'T' : 'F';
	f.gopaymethod.value = 'onlydbank';

	checkPay(f);
}

function payVirtual(f, isEscrow) {
	setPgInfo(f);

	f.useescrow.value = isEscrow && getGoodsSize() == 1 ? 'T' : 'F';
	f.gopaymethod.value = 'onlyvbank';

	checkPay(f);
}

function checkPay(f) {
	var payPath = f.payPath.value;
	f.action = SECURE_URL + payPath + '/inicis/check_pay';
	f.target = 'frmPay';
	f.submit();
}

function pay(pgInfo) {
	var f = document.Frm;
	var payPath = f.payPath.value;

	payIng = 1;
	$('#order_payment_button').css({ display: 'none' });
	$('#order_payment_progress').css({ display: 'block' });

	if (f.clickcontrol.value == 'enable') {
		if (
			(navigator.userAgent.indexOf('MSIE') >= 0 ||
				navigator.appName == 'Microsoft Internet Explorer') &&
			(document.INIpay == null || document.INIpay.object == null)
		) {
			failPay(
				'이니페이 플러그인 128이 설치되지 않았습니다.\n\n' +
					'안전한 결제를 위하여 이니페이 플러그인 128의 설치가 필요합니다.\n\n' +
					'다시 설치하시려면 Ctrl+F5키를 누르시거나 메뉴의 [보기/새로고침]을 선택하여 주십시오.',
			);
			return false;
		} else {
			f.payOrdNo.value = pgInfo['oid'];
			for (key in pgInfo) {
				if (f[key]) f[key].value = pgInfo[key];
			}

			if (MakePayMessage(f)) {
				// 결제 성공시
				disable_click();

				f.action = SECURE_URL + payPath + '/inicis/INIsecureResult';
				f.target = '_self';
				f.submit();
			} else {
				// 결제 취소시
				if (IsPluginModule()) {
					alert('결제요청을 취소하셨습니다.');
				}
				failPay();
			}
		}
	}
}

function enable_click() {
	document.Frm.clickcontrol.value = 'enable';
}

function disable_click() {
	document.Frm.clickcontrol.value = 'disable';
}

function focus_control() {
	if (document.Frm.clickcontrol.value == 'disable') {
	}
}
