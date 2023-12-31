/**
 *	layerPopup v2.0
 *
 *	@author		HanSeungho landboy@gmail.com
 *	@copyright	Copyright (c) HanSeungho
 *
 *	작성일 :			2011-10-15
 *	최종수정일 :	2012-03-04
 **/

var layerPopup = {
	isMSIE:
		navigator.userAgent.match(/MSIE/) || navigator.userAgent.match(/Trident/),

	popups: new Array(),
	guide: null,

	target: null,
	x: 0,
	y: 0,

	cancelEvent: function () {
		return false;
	},

	cancelSelectionEvent: function () {
		return false;
	},

	parse: function (n) {
		return isNaN(parseInt(n, 10)) ? 0 : parseInt(n, 10);
	},

	getOffset: function (obj) {
		var objOffset = { left: 0, top: 0 };
		var objOffsetParent = obj.offsetParent;

		objOffset.left = parseInt(obj.offsetLeft, 10);
		objOffset.top = parseInt(obj.offsetTop, 10);

		while (objOffsetParent) {
			objOffset.left += parseInt(objOffsetParent.offsetLeft, 10);
			objOffset.top += parseInt(objOffsetParent.offsetTop, 10);

			objOffsetParent = objOffsetParent.offsetParent;
		}

		return objOffset;
	},

	addEvent: function (obj, evt, exec) {
		if (window.attachEvent) obj.attachEvent('on' + evt, exec);
		else if (window.addEventListener) obj.addEventListener(evt, exec, false);
		else obj['on' + evt] = exec;
	},

	getBaseLeft: function () {
		return this.guide ? this.getOffset(this.guide).left : 0;
	},

	down: function (e, id) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		layerPopup.target = document.getElementById(id);
		layerPopup.x = e.clientX;
		layerPopup.y = e.clientY;

		if (layerPopup.isMSIE) target.onmousemove = layerPopup.move;
		else document.onmousemove = layerPopup.move;
	},

	move: function (e) {
		e = e || window.event;

		if (layerPopup.target) {
			var x = e.clientX - layerPopup.x;
			var y = e.clientY - layerPopup.y;

			layerPopup.target.style.left =
				layerPopup.parse(layerPopup.target.style.left) + x + 'px';
			layerPopup.target.style.top =
				layerPopup.parse(layerPopup.target.style.top) + y + 'px';

			layerPopup.x = e.clientX;
			layerPopup.y = e.clientY;
		}
		return false;
	},

	up: function () {
		if (this.target) {
			var id = this.target.id;

			if (this.guide && typeof this.popups[id] != 'undefined') {
				this.popups[id] =
					this.parse(document.getElementById(id).style.left) -
					this.getBaseLeft();
			}
		}

		layerPopup.target = null;
	},

	addBase: function (id) {
		if (this.guide) {
			var objStyle = document.getElementById(id).style;
			objStyle.left = this.parse(objStyle.left) + this.getBaseLeft() + 'px';

			this.popups[id] = this.parse(objStyle.left) - this.getBaseLeft();
		}
	},

	resize: function () {
		if (this.guide) {
			var baseLeft = this.getBaseLeft();

			for (var id in this.popups) {
				document.getElementById(id).style.left =
					baseLeft + this.popups[id] + 'px';
			}
		}
	},
};

layerPopup.addEvent(window, 'mouseup', function () {
	layerPopup.up();
});
layerPopup.addEvent(window, 'resize', function () {
	layerPopup.resize();
});
