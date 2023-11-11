function resizePopup(args) {
	var self = this;

	var init = { w: 0, h: 0 };
	var resize = { w: 0, h: 0 };

	var height = (args && args.height) || 0;
	var center = (args && args.center) || false;

	this.getBodySize = function () {
		var dom = document;
		return {
			client: {
				w: Math.max(dom.body.clientWidth, dom.documentElement.clientWidth),
				h: Math.max(dom.body.clientHeight, dom.documentElement.clientHeight),
			},
			scroll: {
				w: Math.max(dom.body.scrollWidth, dom.documentElement.scrollWidth),
				h: Math.max(dom.body.scrollHeight, dom.documentElement.scrollHeight),
			},
		};
	};

	this.resizing = function (step) {
		var bs = this.getBodySize();
		var step = step || 0;

		switch (step) {
			case 0:
				var childs = document.getElementsByTagName('body')[0].childNodes;
				for (var i = 0; i < childs.length; i++) {
					if (childs[i].nodeType == 1) {
						if (init.w < childs[i].offsetWidth) init.w = childs[i].offsetWidth;
						init.h += childs[i].offsetHeight;
					}
				}
				if (height && init.h > height) init.h = height;

				if (init.w == bs.client.w && init.h == bs.client.h) return;

				window.resizeTo(init.w, init.h);
				break;
			case 1:
				resize.w = bs.scroll.w - bs.client.w + init.w;
				resize.h = bs.scroll.h - bs.client.h + init.h;
				if (height && resize.h > height) resize.h = height;

				window.resizeTo(resize.w, resize.h);
				break;
			default:
				if (bs.scroll.w >= bs.client.w) resize.w -= bs.scroll.w - init.w;
				if (bs.scroll.h >= bs.client.h) resize.h -= bs.scroll.h - init.h;
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
			self.resizing(step);
		}, 20);
	};

	setTimeout(function () {
		if (center) {
			var bs = this.getBodySize();
			var x = (screen.availWidth - bs.scroll.w) / 2;
			var y = (screen.availHeight - bs.scroll.h) / 2;
			window.moveTo(x, y);
		}

		self.resizing();
	}, 50);
}
