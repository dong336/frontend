/* main visual */
var mainvisualplay;
function mainvisualsetting(a, b) {
	if ($('.main-visual').length > 0) {
		var target = $('.main-visual');
		var total = target.find('.stage .item-list').length;

		target
			.find('.stage .item-list')
			.eq(0)
			.addClass('active')
			.css({ visibility: 'visible', 'z-index': '2', position: 'relative' })
			.find('.text')
			.css({ opacity: '1' });

		if (total > 1) {
			target.find('.prev-button').show();
			target.find('.next-button').show();

			if (a == 'play') {
				target.attr('vt', b).addClass('play');
				clearInterval(mainvisualplay);
				mainvisualplay = setInterval(function () {
					mainvisualmove('next');
				}, b);

				/* 일시잠금
				target.on('mouseenter',function(){
					clearInterval(mainvisualplay);
				}).on('mouseleave',function(){
					clearInterval(mainvisualplay);
					mainvisualplay=setInterval(function(){
						mainvisualmove('next');
					},b);
				});
				*/
			}
		}
		mainvisualcount();
		mainindicator();
	}
}
function mainvisualmove(a) {
	var target = $('.main-visual');
	var vt = target.attr('vt');
	var total = target.find('.stage .item-list').length;
	var active = target.find('.stage .item-list.active');
	var move;
	var ax;
	var mx;
	var tx;

	if (target.hasClass('ing')) {
		return false;
	}

	target.addClass('ing');

	if (a == 'prev') {
		if (active.index() == 0) {
			move = target.find('.stage .item-list').eq(total - 1);
		} else {
			move = active.prev();
		}
		ax = 100;
		mx = -100;
		tx = -50;
	} else if (a == 'next') {
		if (active.index() == total - 1) {
			move = target.find('.stage .item-list').eq(0);
		} else {
			move = active.next();
		}
		ax = -100;
		mx = 100;
		tx = 50;
	} else {
		move = target.find('.stage .item-list').eq(a);
		if (a < active.index()) {
			ax = 100;
			mx = -100;
		}
		if (a > active.index()) {
			ax = -100;
			mx = 100;
		}
	}

	active.removeClass('active');
	move.addClass('active');
	target.find('.indicator ul .active').removeClass('active');
	target
		.find('.indicator ul li')
		.eq(target.find('.item-list.active').index())
		.addClass('active');

	move.find('.text').css({
		'margin-left': tx + 'px',
		opacity: '0',
		'-moz-transition': '0s',
		'-webkit-transition': '0s',
		transition: '0s',
	});
	active.css({
		left: ax + '%',
		'-moz-transition': 'left 0.6s',
		'-webkit-transition': 'left 0.6s',
		transition: 'left 0.6s',
	});
	move
		.css({
			visibility: 'visible',
			left: ax + '%',
			'margin-left': mx + '%',
			'-moz-transition': 'left 0.6s',
			'-webkit-transition': 'left 0.6s',
			transition: 'left 0.6s',
		})
		.one('transitionend', function () {
			move.find('.text').css({
				'margin-left': '0',
				opacity: '1',
				'-moz-transition': '0.3s',
				'-webkit-transition': '0.3s',
				transition: '0.3s',
			});
			target.find('.stage .item-list').attr('style', '');
			target
				.find('.stage .item-list.active')
				.css({ visibility: 'visible', 'z-index': '2', position: 'relative' });
			target.removeClass('ing');
		});

	if (target.hasClass('play')) {
		clearInterval(mainvisualplay);
		mainvisualplay = setInterval(function () {
			mainvisualmove('next');
		}, vt);
	}

	mainvisualcount();
}
function mainvisualcount() {
	var target = $('.main-visual');
	var total = target.find('.stage .item-list').length;
	var active = target.find('.stage .item-list.active').index() + 1;

	if (String(total).length == 1) {
		total = '0' + total;
	}
	if (String(active).length == 1) {
		active = '0' + active;
	}

	target
		.find('.count')
		.html('<strong>' + active + ' /</strong><span>' + total + '</span>');
}

function mainindicator() {
	var target = $('.main-visual');
	var total = target.find('.stage .item-list').length;

	for (var i = 0; i < total; i++) {
		target
			.find('.indicator ul')
			.append(
				'<li><button type="button" onclick="mainvisualmove(' +
					i +
					')">' +
					(i + 1) +
					'</button></li>',
			);
	}

	target
		.find('.indicator')
		.addClass('length' + total)
		.find('ul li')
		.eq(0)
		.addClass('active');
	target.find('.indicator ul li').css({ width: 400 / total + 'px' });
}

/* best brand */
var brandbestplay;
function brandbestsetting(a, b) {
	if ($('.brand-best').length > 0) {
		var target = $('.brand-best');
		var total = target.find('.stage .item-list').length;
		var page;
		var paging = -1;

		if (total % 5 == 0) {
			page = total / 5;
		} else {
			page = (total - (total % 5)) / 5 + 1;
		}

		target.find('.stage .item-list').eq(0).addClass('active');

		var active = target.find('.stage .item-list.active');
		for (var c = 0; c < total; c++) {
			if (c % 5 == 0) {
				paging++;
			}

			target
				.find('.stage .item-list')
				.eq(c)
				.attr('t', 59 * c)
				.attr('p', paging)
				.find('.item-button')
				.css({ top: 59 * c });
			if (c * 5 - 1 != -1) {
				target
					.find('.stage .item-list')
					.eq(c * 5 - 1)
					.addClass('last');
			}
		}

		if (page > 1) {
			for (var d = 0; d < page; d++) {
				target
					.find('.indicator ul')
					.append(
						'<li><button type="button" onclick="brandbestpage(' +
							d +
							')">' +
							(d + 1) +
							'</button></li>',
					);
			}
			target.find('.indicator ul li').eq(0).addClass('active');
		}

		brandbestfocus();

		if (a == 'play' && total > 1) {
			target.attr('vt', b).addClass('play');
			clearInterval(brandbestplay);
			brandbestplay = setInterval(brandbestnext, b);

			/* 일시잠금
			target.on('mouseenter',function(){
				clearInterval(brandbestplay);
			}).on('mouseleave',function(){
				clearInterval(brandbestplay);
				brandbestplay=setInterval(brandbestnext,b);
			});
			*/
		}
	}
}
function brandbestmove(a) {
	var target = $('.brand-best');
	var vt = target.attr('vt');
	var total = target.find('.stage .item-list').length;
	var active = target.find('.stage .item-list.active');

	active.removeClass('active');

	if (isNaN(a) == true) {
		$(a).closest('.item-list').addClass('active');
	}
	if (isNaN(a) == false) {
		target.find('.stage .item-list').eq(a).addClass('active');
	}

	if (target.hasClass('play')) {
		clearInterval(brandbestplay);
		brandbestplay = setInterval(brandbestnext, vt);
	}

	brandbestfocus();
}
function brandbestpage(a) {
	var target = $('.brand-best');
	var vt = target.attr('vt');
	var total = target.find('.stage .item-list').length;

	var t = a * -295;

	for (var i = 0; i < total; i++) {
		target
			.find('.stage .item-list')
			.eq(i)
			.attr('t', 59 * i + t)
			.find('.item-button')
			.css({
				top: 59 * i + t,
				'-moz-transition': 'top 0.3s',
				'-webkit-transition': 'top 0.3s',
				transition: 'top 0.3s',
			});
	}

	target.find('.indicator ul li').removeClass('active');
	target.find('.indicator ul li').eq(a).addClass('active');

	if (target.hasClass('play')) {
		clearInterval(brandbestplay);
		brandbestplay = setInterval(brandbestnext, vt);
	}

	brandbestfocus();
}
function brandbestfocus() {
	var target = $('.brand-best');
	var active = target.find('.stage .item-list.active');

	var t = eval(active.attr('t')) + 93;

	target.find('.focus').css({ top: t });

	//lazyload 자동&수동
	active.find('.lazyTab').lazy();
}
function brandbestnext() {
	var target = $('.brand-best');
	var total = target.find('.stage .item-list').length;
	var active = target.find('.stage .item-list.active');

	if (active.index() == total - 1) {
		brandbestmove(0);
	} else {
		brandbestmove(active.index() + 1);
	}

	if (total > 5) {
		brandbestpage(target.find('.stage .item-list.active').attr('p'));
	}
}

function hotproductinsetting() {
	var target = $('.recommend-product .product-item');
	target.each(function () {
		var _this = $(this);
		var total = _this.find('.item').length;
		_this.find('.item').eq(0).addClass('activei');

		for (var i = 0; i < 3; i++) {
			_this
				.find('.item')
				.eq(i)
				.css({ display: 'block', left: i * 33 + '%' });
		}

		for (var i = 0; i < total / 3; i++) {
			_this
				.find('.indicatori ul')
				.append(
					'<li><button type="button" onclick="hotproductinmove(this,' +
						i +
						')">' +
						(i + 1) +
						'</button></li>',
				);
		}

		if (total > 3) {
			_this.find('.prev-buttoni').show();
			_this.find('.next-buttoni').show();
			_this
				.find('.indicatori')
				.addClass('length' + _this.find('.indicatori li').length)
				.show();
			_this.find('.indicatori ul').addClass('active0');
			_this.find('.indicatori ul li').eq(0).addClass('active');
		}
	});
}
function hotproductinmove(a, b) {
	var target = $(a).closest('.product-item');
	var total = target.find('.item').length;
	var active = target.find('.item.activei');
	var parent = target.closest('.tab-section');

	var mx;

	if (
		b == target.find('.indicatori ul .active').index() ||
		target.hasClass('ing')
	) {
		return false;
	}

	if (parent.hasClass('play')) {
		var tsi = parent.attr('tsi');
		var tst = parent.attr('tst');
		clearInterval(tabsectionplay[tsi]);
		tabsectionplay[tsi] = setInterval(function () {
			tabsectionnext(parent);
		}, tst);
	}

	target.addClass('ing');
	active.removeClass('activei');

	if (b == 'prev') {
		mx = 99;
		for (var i = 0; i < 3; i++) {
			if (active.index() == 0) {
				if (total % 3 == 0) {
					if (i == 0) {
						target
							.find('.item')
							.eq(total - 3 + i)
							.addClass('activei');
					}
					target
						.find('.item')
						.eq(total - 3 + i)
						.css({ display: 'block', left: 33 * (i - 3) + '%' });
				} else {
					if (i == 0) {
						target
							.find('.item')
							.eq(total - (total % 3) + i)
							.addClass('activei');
					}
					target
						.find('.item')
						.eq(total - (total % 3) + i)
						.css({ display: 'block', left: 33 * (i - 3) + '%' });
				}
			} else {
				if (i == 0) {
					target
						.find('.item')
						.eq(active.index() + (i - 3))
						.addClass('activei');
				}
				target
					.find('.item')
					.eq(active.index() + (i - 3))
					.css({ display: 'block', left: 33 * (i - 3) + '%' });
			}
		}
	} else if (b == 'next') {
		mx = -99;
		for (var i = 0; i < 3; i++) {
			if (active.index() > total - 4) {
				if (i == 0) {
					target.find('.item').eq(i).addClass('activei');
				}
				target
					.find('.item')
					.eq(i)
					.css({ display: 'block', left: 33 * (i + 3) + '%' });
			} else {
				if (i == 0) {
					target
						.find('.item')
						.eq(active.index() + (i + 3))
						.addClass('activei');
				}
				target
					.find('.item')
					.eq(active.index() + (i + 3))
					.css({ display: 'block', left: 33 * (i + 3) + '%' });
			}
		}
	} else {
		if (target.find('.indicatori ul .active').index() > b) {
			mx = 99;

			for (var i = 0; i < 3; i++) {
				target
					.find('.item')
					.eq(b * 3)
					.addClass('activei');
				target
					.find('.item')
					.eq(b * 3 + i)
					.css({ display: 'block', left: 33 * (i - 3) + '%' });
			}
		}
		if (target.find('.indicatori ul .active').index() < b) {
			mx = -99;

			for (var i = 0; i < 3; i++) {
				target
					.find('.item')
					.eq(b * 3)
					.addClass('activei');
				target
					.find('.item')
					.eq(b * 3 + i)
					.css({ display: 'block', left: 33 * (i + 3) + '%' });
			}
		}
	}

	target.find('.indicatori ul').removeClass();
	target
		.find('.indicatori ul')
		.addClass('active' + target.find('.item.activei').index() / 3);
	target.find('.indicatori ul .active').removeClass('active');
	target
		.find('.indicatori ul li')
		.eq(target.find('.item.activei').index() / 3)
		.addClass('active');

	target
		.find('.item:visible')
		.css({
			'margin-left': mx + '%',
			'-moz-transition': 'margin 0.6s',
			'-webkit-transition': 'margin 0.6s',
			transition: 'margin 0.6s',
		})
		.one('transitionend', function () {
			target.find('.item').attr('style', '');
			for (var i = 0; i < 3; i++) {
				target
					.find('.item')
					.eq(target.find('.item.activei').index() + i)
					.css({ display: 'block', left: 33 * i + '%' });
			}
			target.removeClass('ing');
		});
}

$(window).on('load resize scroll', function () {
	sortingFixed();
});

function sortingFixed() {
	if ($('#container .all-product .sorting').length > 0) {
		var point = $('#container .all-product .product-item');
		var target = $('#container .all-product .sorting');
		var w = point.width();
		var t = point.offset().top;
		var b = target.outerHeight();
		var s = $(window).scrollTop();
		var h = $('#header').outerHeight();
		target.width(w);

		if (s + h >= t - b) {
			target.addClass('fixed');
		} else {
			target.removeClass('fixed');
			target.width();
		}
	}
}
