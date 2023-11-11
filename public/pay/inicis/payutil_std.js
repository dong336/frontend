function setPgInfo(f) {
	var fis = document.FrmInicisStd;

	fis.buyername.value = f.ordName.value;
	fis.buyeremail.value = f.ordEmailId.value + '@' + f.ordEmailDomain.value;
	fis.buyertel.value =
		f.ordMobile1.value + '-' + f.ordMobile2.value + '-' + f.ordMobile3.value;
	fis.recvname.value = f.rcvName.value;
	fis.recvtel.value =
		f.rcvMobile1.value + '-' + f.rcvMobile2.value + '-' + f.rcvMobile3.value;
	fis.recvpostnum.value = f.rcvPost.value;
	fis.recvaddr.value =
		f.rcvAddr.value +
		(isEmpty(f.rcvAddrDetail) ? '' : ' ' + f.rcvAddrDetail.value);
	fis.recvmsg.value = f.demand.value;
}

function payCard(f, isEscrow) {
	var fis = document.FrmInicisStd;

	setPgInfo(f);

	//  - 에스크로 설정은 프로젝트별로 정책에 맞게 설정 할 것
	// 에스크로 설정
	//	fis.useescrow.value = (isEscrow && getGoodsSize() == 1 ? "T" : "F");
	//	fis.gopaymethod.value = "onlycard";
	fis.gopaymethod.value = 'Card';

	//상성페이 사용할때 해당 파라미터의 값을 넣어서 쓰면 됩니다.
	//	fis.gopaymethod.value = "onlyssp";
	//  fis.acceptmethod.value = "cardonly";

	fis.acceptmethod.value = 'below1000';

	checkPay(f);
}

function payPhone(f, isEscrow) {
	var fis = document.FrmInicisStd;

	setPgInfo(f);

	//  - 에스크로 설정은 프로젝트별로 정책에 맞게 설정 할 것
	// 에스크로 설정
	//	fis.useescrow.value = (isEscrow && getGoodsSize() == 1 ? "T" : "F");
	//	fis.gopaymethod.value = "onlyhpp";
	fis.gopaymethod.value = 'HPP';

	checkPay(f);
}

function payBank(f, isEscrow) {
	var fis = document.FrmInicisStd;

	setPgInfo(f);

	//  - 에스크로 설정은 프로젝트별로 정책에 맞게 설정 할 것
	// 에스크로 설정
	//	fis.useescrow.value = (isEscrow && getGoodsSize() == 1 ? "T" : "F");
	//	fis.gopaymethod.value = "onlydbank";
	fis.gopaymethod.value = 'DirectBank';

	checkPay(f);
}

function payVirtual(f, isEscrow) {
	var fis = document.FrmInicisStd;

	setPgInfo(f);

	var settlePrice = f.settlePrice.value.toNumeric();

	//	fis.gopaymethod.value = "onlyvbank";
	fis.gopaymethod.value = 'VBank';

	// 입금기한 설정_현금영수증 발행
	fis.acceptmethod.value =
		'Vbank(' + fis.virtualDay_yyyymmdd.value + '):va_receipt';

	//  - 에스크로 설정은 프로젝트별로 정책에 맞게 설정 할 것
	// 에스크로 설정
	//	if (isEscrow && settlePrice >= 50000 && getGoodsSize() == 1) {
	//		if (confirm("에스크로로 주문 하시겠습니까?")) {
	//			fis.useescrow.value = "T";
	//			fis.acceptmethod.value = fis.acceptmethod.value + ":useescrow";
	//		}
	//	}

	//	console.log( $("input[name='payway']:checked").attr("id") );
	//	console.log( $("input[name='payway']:checked").attr("id").indexOf("_escrow") );

	// 에스크로 설정
	//	if( $("input[name='payway']:checked").attr("id").indexOf("_escrow") > -1 ){
	//		f.useescrow.value = "T";
	//		fis.useescrow.value = "T";
	//		fis.acceptmethod.value += ":useescrow";
	//	}

	// PMS 에스크로 설정
	if (isEscrow) {
		fis.useescrow.value = 'T';
		fis.acceptmethod.value = fis.acceptmethod.value + ':useescrow';
	}

	checkPay(f);
}

function checkPay(f) {
	var fis = document.FrmInicisStd;
	var payPath = f.payPath.value;

	f.gopaymethod.value = fis.gopaymethod.value;
	f.useescrow.value = fis.useescrow.value;
	f.acceptmethod.value = fis.acceptmethod.value;

	$.ajax({
		type: 'POST',
		dataType: 'json',
		url: SECURE_URL + payPath + '/inicis/check_pay_std_ajax',
		data: $('#Frm').serialize(),
		error: function (request, status, error) {
			alert(request.responseText);
			failPay();
		},
		success: function (data) {
			console.log(data);

			if (data.code != 0) {
				alert(data.message);
				failPay();
			} else {
				fis.payOrdNo.value = data.ordNo;
				fis.ordNo.value = data.ordNo;
				fis.orderIdx.value = data.orderIdx;
				var merchantData =
					'ordNo:' +
					data.ordNo +
					'@@carts:' +
					$('#strCarts').val() +
					'@@useescrow:' +
					fis.useescrow.value;
				fis.merchantData.value = merchantData;

				pay();
			}
		},
	});
}

function pay() {
	var f = document.Frm;
	var fis = document.FrmInicisStd;
	var payPath = f.payPath.value;
	var settlePrice = f.settlePrice.value.toNumeric();

	f.gopaymethod.value = fis.gopaymethod.value;
	f.useescrow.value = fis.useescrow.value;
	f.acceptmethod.value = fis.acceptmethod.value;

	payIng = 1;
	$('#order_payment_button').css({ display: 'none' });
	$('#order_payment_progress').css({ display: 'block' });

	$.ajax({
		type: 'POST',
		dataType: 'json',
		url: SECURE_URL + payPath + '/inicis/inicis_std_init_request_ajax',
		data: {
			settlePrice: settlePrice,
			useescrow: fis.useescrow.value,
			ordNo: fis.ordNo.value,
		},
		error: function (request, status, error) {
			alert(request.responseText);
			failPay();
		},
		success: function (data) {
			console.log(data);

			if (data.code != 0) {
				alert(data.message);
				failPay();
			} else {
				fis.mid.value = data.mid;
				fis.oid.value = data.oid;
				fis.timestamp.value = data.timestamp;
				fis.signature.value = data.signature;
				fis.mKey.value = data.mKey;
				fis.quotabase.value = data.quotabase;
				fis.nointerest.value = data.nointerest;
				fis.returnUrl.value = data.returnUrl;
				fis.closeUrl.value = data.closeUrl;
				fis.popupUrl.value = data.popupUrl;
				fis.price.value = settlePrice;

				INIStdPay.pay('FrmInicisStd');
			}
		},
	});
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
