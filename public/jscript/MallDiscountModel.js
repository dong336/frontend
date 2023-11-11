/**
 *
 */

var MallDiscountModel = function (_unit, _value) {
	var unit = _unit,
		value = _value;
	this.getDiscountPrice = function (price) {
		if (CONST_UNIT_MONEY == unit) return value;
		if (CONST_UNIT_PERCENT == unit) {
			return setRound(price * value, 0);
		}

		return 0;
	};
};
