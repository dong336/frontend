/*파라미터 : dateUse*/
function DateUtility(dateUse) {
	//파라미터 갯수 확인
	if (0 === arguments.length) {
		//없다.
		//현재 날짜 사용
		dateUse = new Date();
	}
	//파라미터가 있으면 지정한 날짜를 사용한다.

	//복제한 date를 준다.
	function CloneDate() {
		return new Date(dateUse.valueOf());
	}

	//지정된 날짜를 리턴한다.
	this.Today = function () {
		return CloneDate();
	};

	//날짜에서 nDate만큼 더한 날짜를 리턴한다.
	this.Day = function (nDay) {
		var date = CloneDate();
		date.setDate(date.getDate() + nDay);
		return date;
	};

	//날짜에서 nMonth만큼 더한 월을 구한다.
	this.Month = function (nMonth) {
		var date = CloneDate();
		date.setMonth(date.getMonth() + nMonth);
		return date;
	};

	//날짜에서 nMonth만큼 더한 월의 1일을 구한다.
	this.Month_First = function (nMonth) {
		var date = this.Month(nMonth);
		return new Date(date.getYear(), date.getMonth(), 1);
	};

	//날짜에서 nMonth만큼 더한 월의 마지막날짜를 구한다.
	this.Month_Last = function (nMonth) {
		var date = this.Month(nMonth);
		return new Date(date.getYear(), date.getMonth() + 1, 0);
	};

	// format 에 맞는 문자열 반환
	this.getFormatString = function (pDate, format) {
		var result = '';
		var y = pDate.getFullYear();
		var m = pDate.getMonth() + 1;
		var d = pDate.getDate();

		if (m < 10) {
			m = '0' + m;
		}

		if (d < 10) {
			d = '0' + d;
		}

		if (format.toUpperCase() == 'YYYY-MM-DD') {
			result = y + '-' + m + '-' + d;
		} else if (format.toUpperCase() == 'YYYY/MM/DD') {
			result = y + '/' + m + '/' + d;
		} else {
			result = y + '' + m + '' + d;
		}

		return result;
	};
}

/**
 *  사용 예제
 */
function fnDateUtilityExample() {
	var dateUtil = new DateUtility(new Date());
	//기준 날짜
	console.log(dateUtil.Today());

	//하루전
	console.log(dateUtil.Day(-1));
	//이틀전
	console.log(dateUtil.Day(-2));

	//하루 후
	console.log(dateUtil.Day(1));
	//이틀 후
	console.log(dateUtil.Day(2));

	//한달 전
	console.log(dateUtil.Month(-1));
	//한달 후
	console.log(dateUtil.Month(1));

	//한달 전 1일
	console.log(dateUtil.Month_First(1));
	//한달 전 마지막일
	console.log(dateUtil.Month_Last(1));

	// format 에 맞는 문자열 반환 예제
	// 기준 날짜
	var today = dateUtil.Today();
	//한달 전
	var before = dateUtil.Month(-1);

	console.log(dateUtil.getFormatString(today, 'YYYY-MM-DD'));
	console.log(dateUtil.getFormatString(before, 'YYYY-MM-DD'));
}
