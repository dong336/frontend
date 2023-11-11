$(function () {
	setPaycoBtn();
});

// payco 버튼
function setPaycoBtn() {
	Payco.Button.register({
		SELLER_KEY: '111', // 가맹점 코드
		ORDER_METHOD: 'EASYPAY', // 주문유형 : CHECKOUT / EASYPAY
		BUTTON_TYPE: 'A1', // 버튼타입 선택 (A1,A2)
		BUTTON_HANDLER: 'paycoReserve', // 구매하기 버튼 이벤트 Handler 함수 등록
		// 		BUTTON_HANDLER_ARG : ['param1', 'param2'], // handler 함수 argument
		BUTTON_HANDLER_ARG: [], // handler 함수 argument
		DISPLAY_PROMOTION: 'Y', // 이벤트 문구 출력 여부
		DISPLAY_ELEMENT_ID: 'payco_type1', // 노출될 element id
		'': '',
	});
}

/*
function setPgInfo(f) {
	f.buyername.value = f.ordName.value;
	f.buyeremail.value = f.ordEmailId.value+'@'+f.ordEmailDomain.value;
	f.buyertel.value = f.ordMobile1.value+'-'+f.ordMobile2.value+'-'+f.ordMobile3.value;
	f.recvname.value = f.rcvName.value;
	f.recvtel.value = f.rcvMobile1.value+'-'+f.rcvMobile2.value+'-'+f.rcvMobile3.value;
	//f.recvpostnum.value = f.rcvPost1.value+f.rcvPost2.value;
	f.recvpostnum.value = f.rcvPost1.value;
	f.recvaddr.value = f.rcvAddr.value+(isEmpty(f.rcvAddrDetail) ? '' : ' '+f.rcvAddrDetail.value);
	f.recvmsg.value = f.demand.value;
}
*/

function payPaycoReserve(f) {
	//setPgInfo(f);

	checkPayPayco(f);
}

function checkPayPayco(f) {
	payIng = 1;

	var payPath = f.payPath.value;

	// localhost 로 테스트 시 크로스 도메인 문제로 발생하는 오류
	$.support.cors = true;

	/* + "&" + $('order_product_delivery_info').serialize() ); */
	$.ajax({
		type: 'POST',
		url: SECURE_URL + payPath + '/payco/check_pay',
		data: $('#Frm').serialize(),
		contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType: 'json',
		success: function (data) {
			if (data.code == '0') {
				var orderurl = data.result.orderSheetUrl;
				var popup = window.open(
					orderurl,
					'popupPayco',
					'top=100, left=300, width=727px, height=512px, resizble=no, scrollbars=yes',
				);
				if (popup == null || popup == undefined) {
					alert('팝업이 차단되어있습니다. \n팝업차단 설정을 해제 해주세요.');
				}
			} else if (data.code == '-1') {
				alert(data.message);
			} else {
				alert(data.message);
			}
		},
		error: function (request, status, error) {
			//에러코드
			alert(
				'code:' +
					request.status +
					'\n' +
					'message:' +
					request.responseText +
					'\n' +
					'error:' +
					error,
			);
			return false;
		},
	});
}
