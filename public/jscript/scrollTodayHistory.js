/**
 *	scrollTodayHistory
 **/

var scrollTodayHistory = {
	canvas: null,
	counter: null,
	datas: null,

	blank: null,

	firstIdx: 0,
	lastIdx: 1,
	size: 3,

	init: function (canvas, up, down, counter, size) {
		this.canvas = canvas;
		this.up = up;
		this.down = down;
		this.counter = counter;

		this.datas = new Array();

		if (size) this.size = size;
	},

	setBlank: function (data) {
		this.blank = data;
	},

	add: function (data) {
		this.datas[this.datas.length] = data;
	},

	print: function (idx) {
		var count = 0;
		var data = '';

		if (!idx) idx = 0;

		for (var i = idx; i < this.datas.length; i++) {
			count++;
			if (count <= this.size) {
				data += this.datas[i];
			}
		}

		if (count < this.size && this.blank) {
			for (var i = 0; i < this.size - count; i++) {
				data += this.blank;
			}
		}

		this.canvas.innerHTML = data;

		if (this.counter) this.counter.innerHTML = this.datas.length;

		if (this.datas.length > this.size) {
			this.up.style.display = '';
			this.down.style.display = '';
		}
	},

	move: function (direction) {
		var total = this.datas.length;

		if (total <= this.size) return;

		if (direction == 0) {
			if (this.firstIdx > 0) {
				this.firstIdx = this.firstIdx - 1;
				this.lastIdx = this.lastIdx + 1;
				this.print(this.firstIdx);
			}
		} else {
			if (this.lastIdx > -(total - this.size)) {
				this.firstIdx = this.firstIdx + 1;
				this.lastIdx = this.lastIdx - 1;
				this.print(this.firstIdx);
			}
		}
	},
};
