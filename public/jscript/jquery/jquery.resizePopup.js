/*
 * resizePopup
 * By: HanSeungho landboy@gmail.com
 * Version: 1.0.1
 * Updated: 2013-04-10
 */

(function ($) {
	$.resizePopup = function (options) {
		var me = this;
		var opts = $.extend(
			{
				wrapper: null,
				height: 0,
				center: false,
			},
			options,
		);

		var init = { w: 0, h: 0 };
		var resize = { w: 0, h: 0 };

		var $wrapper = opts.wrapper ? $(opts.wrapper) : $('body'),
			height = opts.height,
			center = opts.center;
		this.resizing = function (step) {
			var step = step || 0;

			switch (step) {
				case 0:
					var childs = $wrapper.children(':not(style, script)');
					for (var i = 0; i < childs.length; i++) {
						var ow = $(childs[i]).outerWidth(true);
						var oh = $(childs[i]).outerHeight(true);
						if (init.w < ow) init.w = ow;
						if (init.h < oh) init.h = oh;
					}
					if (height && init.h > height) init.h = height;

					if (init.w == $(window).width() && init.h == $(window).height())
						return;

					window.resizeTo(init.w, init.h);
					break;
				case 1:
					resize.w = $(document).width() - $(window).width() + init.w;
					resize.h = $(document).height() - $(window).height() + init.h;
					if (height && resize.h > height) resize.h = height;

					window.resizeTo(resize.w, resize.h);
					break;
				default:
					if ($(document).width() >= $(window).width())
						resize.w -= $(document).width() - init.w;
					if ($(document).height() >= $(window).height())
						resize.h -= $(document).height() - init.h;
					if (height && resize.h < height) resize.h = height;

					window.resizeTo(resize.w, resize.h);

					setTimeout(function () {
						if (center) {
							// 화면 중앙 이동
							var x = (screen.availWidth - resize.w) / 2;
							var y = (screen.availHeight - resize.h) / 2;
							window.moveTo(x, y);
						}
					}, 20);
					return;
					break;
			}

			setTimeout(function () {
				++step;
				me.resizing(step);
			}, 20);
		};

		setTimeout(function () {
			if (center) {
				var x = (screen.availWidth - $(window).width()) / 2;
				var y = (screen.availHeight - $(window).height()) / 2;
				window.moveTo(x, y);
			}

			me.resizing();
		}, 50);
	};
})(jQuery);
