function payKakaopay(f) {
	var callUrl = SECURE_URL + f.payPath.value + '/kakaopay/';

	callUrl += 'check_pay';

	$.ajax({
		dataType: 'json',
		url: callUrl,
		data: $('#Frm').serialize(),
		error: function (request, status, error) {
			console.log(request.responseText);
		},
		success: function (result) {
			if (result.errNo != 0) {
				var errNo = result.errNo;
				var errMessage = result.errMessage;

				if (!errMessage) {
					errMessage =
						'결제 과정(' +
						errNo +
						')에서 오류가 발생하여 결제가 취소되었습니다.\n\n' +
						'동일한 오류가 계속 발생할 경우 관리자에게 문의하시기 바랍니다.';
				}

				failPay(errMessage);
				return false;
			}

			payIng = 1;
			$('#order_payment_button').hide();
			$('#order_payment_progress').show();

			f.payOrdNo.value = result.order_id;

			f.target = '_self';
			f.action = result.redirect_url;
			f.submit();
		},
	});
}

function kakaoSuccess(result) {
	var f = document.Frm;

	f.kakaopay_order_id.value = result.order_id;
	f.kakaopay_pg_token.value = result.pg_token;

	var callUrl = SECURE_URL + f.payPath.value + '/kakaopay/';

	callUrl += 'approval';

	f.action = callUrl;
	f.submit();
}

function kakaoFail() {
	$.laybox.close();
	failPay();
}
