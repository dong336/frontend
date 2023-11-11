var trace = {
	IE: !!(window.attachEvent && !window.opera),
	IE6:
		navigator.userAgent.toLowerCase().indexOf('msie 6') != -1 &&
		navigator.userAgent.toLowerCase().indexOf('msie 7') < 0,
	IE7: navigator.userAgent.toLowerCase().indexOf('msie 7') != -1,
	IE9: navigator.userAgent.toLowerCase().indexOf('msie 9') != -1,
	FF: navigator.userAgent.toLowerCase().indexOf('firefox') != -1,
	Opera: !!window.opera,
	WebKit: navigator.userAgent.indexOf('AppleWebKit/') > -1,
	Gecko:
		navigator.userAgent.indexOf('Gecko') > -1 &&
		navigator.userAgent.indexOf('KHTML') == -1,
	MobileSafari: !!navigator.userAgent.match(/Apple.*Mobile.*Safari/),

	create: function (opts) {
		// create element
		var rv = trace.IE && !trace.IE9 ? '' : document.createElement(opts.tagname);
		for (var i in opts) {
			if (i != 'tagname') {
				if (trace.IE && !trace.IE9)
					rv += ' ' + (i == 'classname' ? 'class' : i) + '="' + opts[i] + '"';
				else rv.setAttribute(i == 'classname' ? 'class' : i, opts[i]);
			}
		}
		return trace.IE && !trace.IE9
			? document.createElement('<' + opts.tagname + rv + '>')
			: rv;
	},
	show: function (msg, type) {
		if (!trace.area) {
			trace.area = trace.create({
				tagname: 'div',
				id: 'trace',
				style:
					'position:fixed; left:10px; top:10px; padding:5px; background:#fff; border:1px solid red;z-index:10000;',
			});
			document.getElementsByTagName('body')[0].appendChild(trace.area);
		}
		trace.area.innerHTML = type ? msg : trace.area.innerHTML + ' : ' + msg;
	},
};

let touchup;
let touchdown;
let touchnow;
let touchlock;

let letCategory = '';

window.globalscroll = document.documentElement.scrollTop || 0;
document.addEventListener('scroll', function () {
	let dy = document.documentElement.scrollTop;
	let ed = $(document).height() - window.innerHeight;

	if (dy < 0) {
		dy = 0;
	}
	if (dy > ed) {
		dy = ed;
	}

	if (dy - window.globalscroll >= 2) {
		touchup = false;
		touchdown = true;
	}
	if (dy - window.globalscroll <= -2) {
		touchup = true;
		touchdown = false;
	}

	window.globalscroll = dy;
});

function menuopen() {
	categoryOpen();
	$('#menu')
		.addClass('active')
		.css({
			'-moz-transform': 'translate3d(0,0,0)',
			'-webkit-transform': 'translate3d(0,0,0)',
			transform: 'translate3d(0,0,0)',
		})
		.one('transitionend', function () {
			lock();
		});
	$('#globaldim')
		.css({
			top: '-50%',
			opacity: '1',
			'-moz-transition': 'opacity 0.8s',
			'-webkit-transition': 'opacity 0.8s',
			transition: 'opacity 0.8s',
		})
		.bind('click', function () {
			menuclose();
		});
}

function categoryOpen() {
	if (letCategory == '') {
		// 카테고리
		$.ajax({
			type: 'GET',
			url: '/common/ajax/topTotalCategory_ajax',
			cache: false,
			dataType: 'json',
			success: function (data) {
				letCategory = data.category;
				var categoryHtml = categoryGrid(letCategory, '');
				$('#categoryUl').html(categoryHtml);
			},
			error: function (xhr) {
				alert(xhr.responseText);
			},
		});
	} else {
		var categoryHtml = categoryGrid(letCategory, '');
		$('#categoryUl').html(categoryHtml);
	}
}

function categoryGrid(categoryList, categoryHtml) {
	_.each(categoryList, function (category) {
		if (category.category != undefined) {
			categoryHtml += '<li class="item">';
			categoryHtml +=
				'	<button type="button" onclick="multitab(this)">' +
				category.NAME +
				'</button>';
			categoryHtml += '	<ul>';
			categoryHtml += '		<li class="item">';
			categoryHtml +=
				'			<a href="/mw/goods/list?cate=' + category.IDX + '">ALL</a>';
			categoryHtml += '		</li>';
			categoryHtml = categoryGrid(category.category, categoryHtml);
			categoryHtml += '	</ul>';
			categoryHtml += '</li>';
		} else {
			categoryHtml += '		<li class="item">';
			categoryHtml +=
				'			<a href="/mw/goods/list?cate=' +
				category.IDX +
				'">' +
				category.NAME +
				'</a>';
			categoryHtml += '		</li>';
		}
	});
	return categoryHtml;
}

function menuclose() {
	unlock();
	$('#globaldim').unbind();
	$('#menu')
		.css({
			'-moz-transform': 'translate3d(100%,0,0)',
			'-webkit-transform': 'translate3d(100%,0,0)',
			transform: 'translate3d(100%,0,0)',
		})
		.one('transitionend', function () {
			$('#menu').removeClass('active');
		});
	$('#globaldim')
		.css({
			opacity: '0',
			'-moz-transition': 'opacity 0.6s',
			'-webkit-transition': 'opacity 0.6s',
			transition: 'opacity 0.6s',
		})
		.one('transitionend', function () {
			$('#globaldim').css({ top: '-9999px' });
		});
}

function todayopen() {
	lock();
	$('#todaylist').addClass('active');
}
function todayclose() {
	unlock();
	$('#todaylist').removeClass('active');
}

function lock() {
	touchnow = $(window).scrollTop();
	touchlock = true;
	$('html,body').addClass('lock');
	$('.top-banner,#wrap').css({ top: -touchnow });
}
function unlock() {
	$('html,body').removeClass('lock');
	$('.top-banner,#wrap').attr('style', '');
	$(window).scrollTop(touchnow);
	setTimeout(function () {
		touchlock = false;
	}, 0);
}

$(function () {
	controlpanel();
	footer();

	// 최근 본 상품
});
$(window).on('resize orientationchange', function () {
	controlpanel();
});
$(window).on('scroll', function () {
	controlpanel();
});

function controlpanel() {
	if (($('#header').length || $('#panel').length) && touchlock != true) {
		let s = $(window).scrollTop();
		let se = $(document).height() - window.innerHeight;
		let w = $('#wrap').position().top;

		if (s < 0) {
			s = 0;
		}
		if (s > se) {
			s = se;
		}

		if (s >= w) {
			$('#header').addClass('active');

			if (touchdown == true) {
				$('body').addClass('min-mode');
				$('#header,#panel').addClass('min');
				if (
					$('#detailBtn').length ||
					$('#container .detail-state .action').length
				) {
					$('#detailBtn').addClass('min');
					$('#container .detail-state .action').addClass('min');
				}
			} else if (touchup == true) {
				$('body').removeClass('min-mode');
				$('#header,#panel').removeClass('min');
				if (
					$('#detailBtn').length ||
					$('#container .detail-state .action').length
				) {
					$('#detailBtn').removeClass('min');
					$('#container .detail-state .action').removeClass('min');
				}
			}
		} else {
			$('body').removeClass('min-mode');
			$('#header').removeClass('active');
			$('#header,#panel').removeClass('min');
		}
	}
}
function footer() {
	if ($('#footer').length) {
		let target = $('#footer .navigation');
		let count = target.find('.menu li').length;
		if (count < target.find('.sitemap li').length) {
			count = target.find('.sitemap li').length;
		}

		for (let i = 0; i < count; i++) {
			let w = target.find('.menu li a').eq(i).width();
			if (w < target.find('.sitemap li a').eq(i).width()) {
				w = target.find('.sitemap li a').eq(i).width();
			}
			target.find('.menu li').eq(i).css({ width: w });
			target.find('.sitemap li').eq(i).css({ width: w });
		}
	}
}

function multitab(a) {
	if ($(a).closest('.item').hasClass('active')) {
		$(a).closest('.item').removeClass('active');
	} else {
		$(a).closest('.item').addClass('active');
	}
}

function topmove() {
	$('html,body').animate({ scrollTop: 0 }, 350);
}

let todaygoodsViewList = '';

function todayGoodsView(a) {
	todayopen();

	if (todaygoodsViewList != '') {
		makeTodayGoodsViewTag(todaygoodsViewList);
		multitab(a);
	} else {
		let goodsnostr = getCookie(CONST_COOKIE_GOODS_LOG);
		if (goodsnostr.length == 0) {
			multitab(a);
		} else {
			$.ajax({
				type: 'POST',
				url: '/common/ajax/todaysViewGoods_ajax',
				data: 'goodsnos=' + goodsnostr,
				dataType: 'json',
				success: function (data) {
					todaygoodsViewList = data.data;
					makeTodayGoodsViewTag(todaygoodsViewList);
					multitab(a);
				},
			});
		}
	}
}
function makeTodayGoodsViewTag(data) {
	var addListHtml = '';
	let urlText = CONST_IMG_CDN_URL + CONST_pathgoodssmall;
	addListHtml += '<ul class="list" id="t-list">';
	if (data.length > 0) {
		for (var i = 0; i < data.length; i++) {
			let today = data[i];
			let saleprice = String(today.FINALPRICE).replace(
				/\B(?=(\d{3})+(?!\d))/g,
				',',
			);
			let retailprice = String(today.RETAILPRICE).replace(
				/\B(?=(\d{3})+(?!\d))/g,
				',',
			);

			addListHtml += '<li class="item">';
			addListHtml += '    <a href="../goods/detail?gno=' + today.NO + '">';
			addListHtml +=
				'        <span class="img" style="background-image:url(\'' +
				urlText +
				'/' +
				today.IMGS +
				'\')"><img src="/mw/imgs/global/g-frame.gif" alt=""></span>';
			addListHtml += '        <span class="text">';
			addListHtml +=
				'            <span class="brand">' + today.BRANDNAME + '</span>';
			addListHtml +=
				'            <span class="name">' + today.GOODSNAME + '</span>';
			addListHtml += '            <span class="price">';
			addListHtml += '                ' + today.MARKETPRICE + '원';
			if (today.PRICE < today.MARKETPRICE) {
				addListHtml += '                    <del>' + today.PRICE + '원</del>';
			}
			addListHtml += '            </span>';
			addListHtml += '        </span>';
			addListHtml += '    </a>';
			addListHtml += '</li>';
		}
	} else {
		addListHtml += '<li class="today-none">최근 본 상품이 없습니다.</li>';
	}
	addListHtml += '</ul>';
	$('#quickBarList').empty().html(addListHtml);
}
