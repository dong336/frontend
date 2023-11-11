var inperiod = {
	XmlHttpReq: null,
	path: '.',
	date: { start: null, end: null },

	init: function () {
		var path = null;
		var scripts = document.getElementsByTagName('script');
		for (var i = 0; i < scripts.length; i++) {
			if (typeof scripts[i].src == 'string') {
				if (scripts[i].src.indexOf('inperiod/class.js') != -1) {
					path = scripts[i].src;
					break;
				}
			}
		}
		if (path) this.path = path.substring(0, path.lastIndexOf('/'));

		if (window.XMLHttpRequest) {
			// Create XMLHttpRequest object in non-Microsoft browsers
			this.XmlHttpReq = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			// Create XMLHttpRequest via MS ActiveX
			try {
				// Try to create XMLHttpRequest in later versions of Internet Explorer
				this.XmlHttpReq = new ActiveXObject('Msxml2.XMLHTTP');
			} catch (e1) {
				// Failed to create required ActiveXObject
				try {
					// Try version supported by older versions of Internet Explorer
					this.XmlHttpReq = new ActiveXObject('Microsoft.XMLHTTP');
				} catch (e2) {
					// Unable to create an XMLHttpRequest with ActiveX
				}
			}
		}
	},

	input: function (start, end, interval, period) {
		var self = this;

		if (typeof interval == 'undefined') interval = '';
		if (typeof period == 'undefined') period = 0;

		this.date.start =
			start.nodeType == 1 ? start : document.getElementById(start);
		this.date.end = end
			? end.nodeType == 1
				? end
				: document.getElementById(end)
			: null;

		if (this.date.start.disabled || this.date.end.disabled) {
			return false;
		}

		if (!interval) {
			if (this.date.start) this.date.start.value = '';
			if (this.date.end) this.date.end.value = '';
		} else if (this.XmlHttpReq) {
			var url =
				'/common/ajax/calcPeriod?interval=' +
				interval +
				'&period=' +
				period +
				'&rnd=' +
				Math.random();

			this.XmlHttpReq.onreadystatechange = function () {
				if (self.XmlHttpReq.readyState == 4) {
					if (self.XmlHttpReq.status == 200) {
						try {
							var data = eval('(' + self.XmlHttpReq.responseText + ')');

							if (self.date.start) self.date.start.value = data.start;
							if (self.date.end) self.date.end.value = data.end;
						} catch (e) {}

						data = null;
					}
				}
			};

			try {
				this.XmlHttpReq.open('get', url, true);
				this.XmlHttpReq.send(null);
			} catch (e) {}
		}
	},
};

inperiod.init();
