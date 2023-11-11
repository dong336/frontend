$(function () {
	// Top Banner Rollover
	$('#header').rollover();

	// Top Banner
	topBannerSetting();

	// Top CategorySetting
	topCategoryBrandSetting();

	/*
  // no image
  // 메인
  $('#main .img').error().attr('src','/data/base/imgs/goods/no.gif');
  
  // 상품리스트
  $('.product_list_hor li a img').error().attr('src','/data/base/imgs/goods/no.gif');
  $('.product_list_ver .product a>img').error().attr('src','/data/base/imgs/goods/no.gif');
  
  // 상품상세
  $('#detail_view .pro_photo .pro_photo_viewer img').error().attr('src','/data/base/imgs/goods/no_big.gif');
  $('#pro_photo_slide li img').error().attr('src','/data/base/imgs/goods/no.gif');
  $('.product_list_long li a img').error().attr('src','/data/base/imgs/goods/no.gif');
  
  // 확대보기
  $('.zoom_left img').error().attr('src','/data/base/imgs/goods/no_big.gif');
  $('.zoom_right li img').error().attr('src','/data/base/imgs/goods/no.gif');
  
  // 장바구니/주문
  $('.order_ver .product a img').error().attr('src','/data/base/imgs/goods/no.gif');
  
  // 주문내역
  $('.myorder_list .order_pro a img').error().attr('src','/data/base/imgs/goods/no.gif');
  
  // 관심상품
  $('.table_product a img').error().attr('src','/data/base/imgs/goods/no.gif');
  */

	// 최근 본 상품
	todayGoodsView();
	$(document).on('click', '#todayGoodsViewer', function () {
		todayGoodsView(this);
	});
});

function topAdHidden() {
	var h = $('#topAd').height();
	$('#topAd')
		.css({
			height: '0',
			'-moz-transition': '0.3s',
			'-webkit-transition': '0.3s',
			transition: '0.3s',
		})
		.one('transitionend webkitTransitionEnd oTransitionEnd', function () {
			setCookie('pwTopAd', 'done');
			$('#topAd').addClass('hidden');
		});
}

function topBannerSetting() {
	$('#header .topBanner img').each(function () {
		if ($(this).parent()[0].tagName == 'A') {
			$(this).parent().addClass('bannerItem');
		} else {
			$(this).addClass('bannerItem');
		}
	});
	if ($('#header .topBanner .bannerItem').length < 2) {
		$('#header .topBanner button').remove();
	}
	$('#header .topBanner .bannerItem')
		.eq(0)
		.addClass('active')
		.css({ display: 'block', left: '0' });
}

function topCategoryBrandSetting() {
	// 카테고리
	$.ajax({
		type: 'GET',
		url: '../common/ajax/topTotalCategory_ajax',
		cache: false,
		success: function (data) {
			var categoryHtml = categoryGrid(data.category, '');
			$('#top_category .over-area .contents').html(categoryHtml);
		},
	});

	//브랜드
	$.ajax({
		type: 'GET',
		url: '../common/ajax/topBrand_ajax',
		cache: false,
		success: function (data) {
			var brandHtml = brandGrid(data.brand, '');
			$('#top_brand .over-area .contents').html(brandHtml);
		},
	});
}

function categoryGrid(categoryList, categoryHtml) {
	_.each(categoryList, function (category) {
		if (category.DEPTH == '3') return categoryHtml;

		if (category.DEPTH == '1') {
			categoryHtml += '<dl class="cate-list">';
			categoryHtml += '    <dt>';
			categoryHtml +=
				'        <a href="/goods/main?cate=' +
				category.IDX +
				'" class="cateTitle">' +
				category.NAME +
				'</a>';
			categoryHtml += '    </dt>';
			categoryHtml = categoryGrid(category.category, categoryHtml);
			categoryHtml += '</dl>';
		} else {
			categoryHtml += '    <dd>';
			categoryHtml +=
				'        <a href="/goods/category?cate=' +
				category.IDX +
				'">' +
				category.NAME +
				'</a>';
			categoryHtml += '    </dd>';
		}
	});
	return categoryHtml;
}

function brandGrid(brandList, brandHtml) {
	brandHtml += '<ul class="brand-list">';
	_.each(brandList, function (brand) {
		brandHtml += '    <li>';
		brandHtml +=
			'        <a href="/goods/brand_goods?brand=' +
			brand.IDX +
			'" class="cateTitle">';
		brandHtml += '            <strong>' + brand.NAME + '</strong>';
		brandHtml += '        </a>';
		brandHtml += '    </li>';
	});
	brandHtml += '</ul>';
	return brandHtml;
}

function topBannerMove(a) {
	var speed = 250;
	var target = $('#header .topBanner');
	var item = target.find('.bannerItem');
	var total = item.length;
	var active = target.find('.bannerItem.active');
	if ($(a).hasClass('prev')) {
		var activeX = 100;
		var nextX = -100;
		if (active.index() == 0) {
			var next = item.eq(total - 1);
		} else {
			var next = active.prev();
		}
	}
	if ($(a).hasClass('next')) {
		var activeX = -100;
		var nextX = 100;
		if (active.index() == total - 1) {
			var next = item.eq(0);
		} else {
			var next = active.next();
		}
	}

	if (item.is(':animated')) {
	} else {
		active.animate({ left: activeX + '%' }, speed).queue(function () {
			$(this).css({ display: 'none' }).removeClass('active').dequeue();
		});
		next
			.css({ display: 'block', left: nextX + '%' })
			.animate({ left: '0' }, speed)
			.queue(function () {
				$(this).addClass('active').dequeue();
			});
	}
}

/* main visual */
/*var visualPlay=0;
function mainVisual(a){
  if(a=='play'){
    visualPlay=setInterval(mainVisualPlay,4000);
    $('.mainVisual .tab,.mainVisual button').on('mouseenter',function(){
      clearInterval(visualPlay);
    }).on('mouseleave',function(){
      visualPlay=setInterval(mainVisualPlay,4000);
    });
  }
  
  $('.mainVisual').on('mouseenter',function(){
    $(this).addClass('buttonShow');
  }).on('mouseleave',function(){
    $(this).removeClass('buttonShow');
  });
  $('.mainVisual .visualList li .tab').each(function(){
    $(this).attr('def',$(this).attr('src'));
  });
  $('.mainVisual .visualList li .cont').each(function(){
    //$(this).css({'left':$(this).parent().index()*100+'%'});
  });
  
  var w=0;
  for(var i=0;i<$('.mainVisual .visualList li').length;i++){
    w=w+($('.mainVisual .visualList li').eq(i).width()+1);
  }
  $('.mainVisual .visualList').css({'visibility':'visible','width':w+2,'padding-left':$('.mainVisual .visualList li').length*1});
  
  $('.mainVisual .visualList li').eq(0).addClass('active');
  $('.mainVisual .visualList li.active').find('.tab').attr('src',$('.mainVisual .visualList li.active .tab').attr('hover'));
  
  if(navigator.appVersion.indexOf('MSIE 7.0')>=0){
    $('.mainVisual .visualList li.active').find('>.cont>div').css({'opacity':'1'});
  }else if(navigator.appVersion.indexOf('MSIE 8.0')>=0){
    $('.mainVisual .visualList li.active').find('>.cont>div').css({'opacity':'1'});
  }else if(navigator.appVersion.indexOf('MSIE 9.0')>=0){
    $('.mainVisual .visualList li.active').find('>.cont>div').css({'opacity':'1'});
  }else{
    $('.mainVisual').addClass('cssAni');
  }
  
  $('.mainVisual .visualList').css({'float':'none','margin':'0 auto'});
  if($('.mainVisual .visualList li').length<2){
    $('.mainVisual .prev').remove();
    $('.mainVisual .next').remove();
  }else{
    $('.mainVisual .prev').css({'display':'block'});
    $('.mainVisual .next').css({'display':'block'});
  }
}
function mainVisualMove(a){
  var target=$('.mainVisual .visualList');
  var total=target.find('>li').length;
  var active=target.find('>li.active');
  if(a=='prev'){
    if(active.index()==0){
      var move=total-1;
    }else{
      var move=active.prev().index();
    }
  }else if(a=='next'){
    if(active.index()==total-1){
      var move=0;
    }else{
      var move=active.next().index();
    }
  }else{
    var move=$(a).closest('li').index();
  }
  
  target.find('>li').removeClass('active');
  target.find('>li').eq(move).addClass('active');
  mainVisualOverImg();
  
  if(navigator.appVersion.indexOf('MSIE 7.0')>=0){
    target.find('>li>.cont').each(function(){
      //$(this).stop().animate({'left':($(this).parent().index()-target.find('>li.active').index())*100+'%'},600);
      if($(this).parent().hasClass('active')){
        $(this).find('>div').stop().animate({'opacity':'1'},600);
      }else{
        $(this).find('>div').stop().animate({'opacity':'0'},600);
      }
    });
  }else if(navigator.appVersion.indexOf('MSIE 8.0')>=0){
    target.find('>li>.cont').each(function(){
      //$(this).stop().animate({'left':($(this).parent().index()-target.find('>li.active').index())*100+'%'},600);
      if($(this).parent().hasClass('active')){
        $(this).find('>div').stop().animate({'opacity':'1'},600);
      }else{
        $(this).find('>div').stop().animate({'opacity':'0'},600);
      }
    });
  }else if(navigator.appVersion.indexOf('MSIE 9.0')>=0){
    target.find('>li>.cont').each(function(){
      //$(this).stop().animate({'left':($(this).parent().index()-target.find('>li.active').index())*100+'%'},600);
      if($(this).parent().hasClass('active')){
        $(this).find('>div').stop().animate({'opacity':'1'},600);
      }else{
        $(this).find('>div').stop().animate({'opacity':'0'},600);
      }
    });
  }else{
    target.find('>li>.cont').each(function(){
      $(this).find('>div').css({'-moz-transition':'0.7s','-webkit-transition':'0.7s','transition':'0.7s'});
      //$(this).css({'left':($(this).parent().index()-target.find('>li.active').index())*100+'%'});
    });
  }
}
function mainVisualOverImg(){
  $('.mainVisual .visualList li .tab').each(function(){
    var hover=$(this).attr('hover');
    var def=$(this).attr('def');
    if($(this).closest('li').hasClass('active')){
      $(this).attr('src',hover);
    }else{
      $(this).attr('src',def);
    }
  });
}
function mainVisualPlay(){
  mainVisualMove('next');
}

*/
/* main recommend */
var recommendCount = 0;
var recommendPlay = 0;
function mainRecommend(a) {
	for (var i = 0; i < $('.mainRecommend .products ul li').length; i++) {
		recommendCount = recommendCount + 4;
		$('.mainRecommend .products ul li').eq(0).addClass('first');
		$('.mainRecommend .products ul li').eq(recommendCount).addClass('first');
	}
	if ($('.mainRecommend .products ul li.first:last').next().length == 0) {
		$('.mainRecommend .products ul').append('<li></li><li></li><li></li>');
	} else if (
		$('.mainRecommend .products ul li.first:last').next().next().length == 0
	) {
		$('.mainRecommend .products ul').append('<li></li><li></li>');
	} else if (
		$('.mainRecommend .products ul li.first:last').next().next().next()
			.length == 0
	) {
		$('.mainRecommend .products ul').append('<li></li>');
	}

	$('.mainRecommend .products ul li')
		.eq(0)
		.css({ display: 'block', top: '-2px', left: '0' })
		.addClass('active');
	$('.mainRecommend .products ul li')
		.eq(1)
		.css({ display: 'block', top: '-2px', left: '290px' });
	$('.mainRecommend .products ul li')
		.eq(2)
		.css({ display: 'block', top: '278px', left: '0' });
	$('.mainRecommend .products ul li')
		.eq(3)
		.css({ display: 'block', top: '278px', left: '290px' });

	$('.mainRecommend .products')
		.on('mouseenter', function () {
			$(this).addClass('buttonShow');
		})
		.on('mouseleave', function () {
			$(this).removeClass('buttonShow');
		});
	if (a == 'play') {
		if ($('.mainRecommend .products ul li').length > 4) {
			recommendPlay = setInterval(mainRecommendPlay, 3000);
			$('.mainRecommend .products')
				.on('mouseenter', function () {
					clearInterval(recommendPlay);
				})
				.on('mouseleave', function () {
					recommendPlay = setInterval(mainRecommendPlay, 3000);
				});
		}
	}

	$(window).load(function () {
		if ($('.mainRecommend .products ul li').length < 5) {
			$('.mainRecommend .products .prev').remove();
			$('.mainRecommend .products .next').remove();
		} else {
			$('.mainRecommend .products .prev').css({ display: 'block' });
			$('.mainRecommend .products .next').css({ display: 'block' });
		}
	});
}
function mainRecommendMove(a) {
	var speed = 400;
	var target = $('.mainRecommend .products ul');
	var item = target.find('>li');
	var total = item.length;
	var active1 = target.find('>li.active');
	var active2 = active1.next();
	var active3 = active1.next().next();
	var active4 = active1.next().next().next();

	if (a == 'prev') {
		var activeX1 = 580;
		var activeX2 = 870;

		if (active1.index() == 0) {
			var next1 = target.find('>li').eq(total - 4);
			var next2 = target.find('>li').eq(total - 3);
			var next3 = target.find('>li').eq(total - 2);
			var next4 = target.find('>li').eq(total - 1);
		} else {
			var next1 = target.find('>li').eq(active1.index() - 4);
			var next2 = target.find('>li').eq(active1.index() - 3);
			var next3 = target.find('>li').eq(active1.index() - 2);
			var next4 = target.find('>li').eq(active1.index() - 1);
		}

		var nextX1 = -580;
		var nextX2 = -290;
	} else if (a == 'next') {
		var activeX1 = -580;
		var activeX2 = -290;

		if (active1.index() == total - 4) {
			var next1 = target.find('>li').eq(0);
			var next2 = target.find('>li').eq(1);
			var next3 = target.find('>li').eq(2);
			var next4 = target.find('>li').eq(3);
		} else {
			var next1 = target.find('>li').eq(active1.index() + 4);
			var next2 = target.find('>li').eq(active1.index() + 5);
			var next3 = target.find('>li').eq(active1.index() + 6);
			var next4 = target.find('>li').eq(active1.index() + 7);
		}

		var nextX1 = 580;
		var nextX2 = 870;
	}

	if (item.is(':animated')) {
	} else {
		active1.animate({ left: activeX1 }, speed).queue(function () {
			$(this).css({ display: 'none' }).removeClass('active').dequeue();
		});
		active2.animate({ left: activeX2 }, speed).queue(function () {
			$(this).css({ display: 'none' }).dequeue();
		});
		active3.animate({ left: activeX1 }, speed).queue(function () {
			$(this).css({ display: 'none' }).dequeue();
		});
		active4.animate({ left: activeX2 }, speed).queue(function () {
			$(this).css({ display: 'none' }).dequeue();
		});

		next1
			.css({ display: 'block', top: '-2px', left: nextX1 })
			.animate({ left: '0' }, speed)
			.queue(function () {
				$(this).addClass('active').dequeue();
			});
		next2
			.css({ display: 'block', top: '-2px', left: nextX2 })
			.animate({ left: '290px' }, speed);
		next3
			.css({ display: 'block', top: '278px', left: nextX1 })
			.animate({ left: '0' }, speed);
		next4
			.css({ display: 'block', top: '278px', left: nextX2 })
			.animate({ left: '290px' }, speed);
	}
}
function mainRecommendPlay() {
	mainRecommendMove('next');
}

/* main review */
var reviewPlay = 0;
function mainReview(a) {
	if (a == 'play') {
		reviewPlay = setInterval(mainReviewPlay, 3000);
		$('.mainReview')
			.on('mouseenter', function () {
				clearInterval(reviewPlay);
			})
			.on('mouseleave', function () {
				reviewPlay = setInterval(mainReviewPlay, 3000);
			});
	}
	if (($('.mainReview .reviewList li').length %= 2) == 1) {
		var item = $('.mainReview .reviewList ul li').length + 1;
	} else {
		var item = $('.mainReview .reviewList ul li').length;
	}
	for (var i = 0; i < item / 2; i++) {
		$('.mainReview .indicator').append(
			'<li><button type="button" onclick="mainReviewMove(this);">' +
				(i + 1) +
				'</button></li>',
		);
	}
	$('.mainReview .indicator li').eq(0).addClass('active');
}
function mainReviewMove(a) {
	if (isNaN(a) == true) {
		var origin = $(a).parent().index();
	} else {
		var origin = a;
	}
	var number = origin * 2;
	var position = $('.mainReview .reviewList ul li').eq(number).position().left;

	$('.mainReview .indicator li').removeClass('active');
	$('.mainReview .indicator li').eq(origin).addClass('active');

	if (navigator.appVersion.indexOf('MSIE 7.0') >= 0) {
		$('.mainReview .reviewList ul').stop().animate({ left: -position }, 300);
	} else if (navigator.appVersion.indexOf('MSIE 8.0') >= 0) {
		$('.mainReview .reviewList ul').stop().animate({ left: -position }, 300);
	} else if (navigator.appVersion.indexOf('MSIE 9.0') >= 0) {
		$('.mainReview .reviewList ul').stop().animate({ left: -position }, 300);
	} else {
		$('.mainReview .reviewList ul').css({ left: -position });
	}
}
function mainReviewPlay() {
	var total = $('.mainReview .indicator li').length;
	var active = $('.mainReview .indicator li.active').index();
	if (total == active + 1) {
		var next = 0;
	} else {
		var next = active + 1;
	}
	mainReviewMove(next);
}

/* main news tab */
function newsTab(a) {
	$(a).closest('.news').find('button').removeClass('active');
	$(a).closest('.news').find('ul').css({ display: 'none' });
	$(a).closest('.news').find('.more').css({ display: 'none' });
	$(a).addClass('active');
	$(a).parent().find('ul').css({ display: 'block' });
	$(a).parent().find('.more').css({ display: 'block' });
}

/* brand banners */
function brandBanners() {
	var item = $('.banners .bannerList ul li').length;
	$('.banners .bannerList ul').css({ width: 1000 * item });
	for (var i = 0; i < item; i++) {
		$('.banners .indicator').append(
			'<li><button type="button" onclick="bannersMove(this);">' +
				(i + 1) +
				'</button></li>',
		);
	}
	$('.banners .indicator li').eq(0).addClass('active');
	$('.banners .bannerList ul li').eq(0).addClass('active');
	$(window).on('load', function () {
		$('.banners .bannerList').css({
			height: $('.banners .bannerList ul .active').height(),
		});
		setTimeout(function () {
			if (navigator.appVersion.indexOf('MSIE 7.0') >= 0) {
			} else if (navigator.appVersion.indexOf('MSIE 8.0') >= 0) {
			} else if (navigator.appVersion.indexOf('MSIE 9.0') >= 0) {
			} else {
				$('.banners .bannerList').css({
					'-moz-transition': '0.4s',
					'-webkit-transition': '0.4s',
					transition: '0.4s',
				});
			}
		}, 100);
	});
}
function bannersMove(a) {
	var number = $(a).parent().index();
	var position = $('.banners .bannerList ul li').eq(number).position().left;

	$('.banners .indicator li').removeClass('active');
	$('.banners .bannerList ul li').removeClass('active');
	$(a).parent().addClass('active');
	$('.banners .bannerList ul li').eq(number).addClass('active');
	var h = $('.banners .bannerList ul li').eq(number).height();

	if (navigator.appVersion.indexOf('MSIE 7.0') >= 0) {
		$('.banners .bannerList').stop().animate({ height: h }, 300);
		$('.banners .bannerList ul').stop().animate({ left: -position }, 300);
	} else if (navigator.appVersion.indexOf('MSIE 8.0') >= 0) {
		$('.banners .bannerList').stop().animate({ height: h }, 300);
		$('.banners .bannerList ul').stop().animate({ left: -position }, 300);
	} else if (navigator.appVersion.indexOf('MSIE 9.0') >= 0) {
		$('.banners .bannerList').stop().animate({ height: h }, 300);
		$('.banners .bannerList ul').stop().animate({ left: -position }, 300);
	} else {
		$('.banners .bannerList').css({ height: h });
		$('.banners .bannerList ul').css({ left: -position });
	}
}
function brandBannersPlay() {
	var total = $('.banners .indicator li').length;
	if ($('.banners').hasClass('play')) {
		if ($('.banners .indicator .active').index() == total - 1) {
			$('.banners .indicator li').eq(0).find('>button').click();
		} else {
			$('.banners .indicator .active').next().find('>button').click();
		}
	}
}

/* brand photo list */
function brandPhoto() {
	var item = $('.field .photo_list li');

	if (item.length < 6) {
		$('.field button').remove();
	}

	item.eq(0).addClass('first').css({ display: 'block' });
	item.eq(1).css({ display: 'block' });
	item.eq(2).css({ display: 'block' });
	item.eq(3).css({ display: 'block' });
	item.eq(4).addClass('last').css({ display: 'block' });

	item.each(function () {
		if ($(this).is(':visible')) {
			$(this).css({ left: $(this).index() * 190 });
		}
	});
}
function brandPhotoMove(a) {
	var target = $('.field .photo_list');
	var item = target.find('>li');
	var total = item.length;

	if (a == 'prev') {
		if (target.find('.first').index() == 0) {
			var move = item.eq(total - 1);
		} else {
			var move = target.find('.first').prev();
		}
		var movex = -190;
		move.css({ display: 'block', left: '-190px' });
	}
	if (a == 'next') {
		if (target.find('.last').index() == total - 1) {
			var move = item.eq(0);
		} else {
			var move = target.find('.last').next();
		}
		var movex = 190;
		move.css({ display: 'block', left: '950px' });
	}

	if (item.is(':animated')) {
	} else {
		item.removeClass();
		item.each(function () {
			if ($(this).is(':visible')) {
				var position = $(this).position().left;
				$(this)
					.animate({ left: position - movex }, 250)
					.queue(function () {
						if ($(this).position().left < 0) {
							$(this).css({ display: 'none' });
						} else if ($(this).position().left > 930) {
							$(this).css({ display: 'none' });
						} else if ($(this).position().left == 0) {
							$(this).addClass('first');
						} else if ($(this).position().left == 760) {
							$(this).addClass('last');
						}
						$(this).dequeue();
					});
			}
		});
	}
}

function eventFocus(a) {
	var text = $(a).html();
	$('h4.ctg_title').each(function () {
		if ($(this).find('strong').html() == text) {
			$('html,body').animate({ scrollTop: $(this).parent().offset().top }, 300);
		}
	});
}

/*
 * 공통 ajax
 */
function cmAxios(obj) {
	if (typeof obj.params == 'undefined') {
		obj.params = {};
	}
	obj.params.userId = 'tmpId-zedvzsds';
	$.ajax({
		method: obj.method == '' ? 'GET' : obj.method,
		url: obj.url,
		data: JSON.stringify(obj.params),
		timeout: 30000,
		contentType: 'application/json; charset=UTF-8',
		dataType: 'json',
		success: function (data) {
			console.log('seccess: ', data);
			/*
			 * ... 공통 로직 ...
			 */
			if (typeof obj.success === 'function') {
				obj.success(data);
			}
			return data;
		},
		error: function (request, status, error) {
			alert(request.responseText);
		},
	});
}

/*
 * jquery-serialize-object
 */
$.fn.serializeObject = function () {
	'use strict';
	var a = {},
		b = function (b, c) {
			var d = a[c.name];
			'undefined' != typeof d && d !== null
				? $.isArray(d)
					? d.push(c.value)
					: (a[c.name] = [d, c.value])
				: (a[c.name] = c.value);
		};
	return $.each(this.serializeArray(), b), a;
};

/* 2022 renewal */
var _direction;

window.__scrollPosition = document.documentElement.scrollTop || 0;
document.addEventListener('scroll', function () {
	let _documentY = document.documentElement.scrollTop;
	_direction = _documentY - window.__scrollPosition >= 0 ? 1 : -1;
	window.__scrollPosition = _documentY;
});
function multitab(a) {
	if ($(a).closest('.item').hasClass('active')) {
		$(a).closest('.item').removeClass('active');
	} else {
		$(a).closest('.item').addClass('active');
	}
	if ($('#asidegoods').length > 0 && $('.product-util').length > 0) {
		hChk();
	}
}

/* single section */
var singlesectionidx = 0;
var singlesectionplay = new Array();
function singlesectionsetting(a, b, c, d, e) {
	var target = $(a);
	if (target.length > 0) {
		var total = target.find('.stage .item-list').length;
		var count = b;
		if (count == 1) {
			var width = 100;
		}
		if (count == 2) {
			var width = 50;
		}
		if (count == 3) {
			var width = 33;
		}
		if (count == 4) {
			var width = 25;
		}
		if (count == 5) {
			var width = 20;
		}
		if (count == 6) {
			var width = 16.5;
		}
		if (count == 7) {
			var width = 14;
		}
		var effect = c;

		target
			.attr('ssi', singlesectionidx)
			.attr('ssc', count)
			.attr('ssw', width)
			.attr('sse', c)
			.addClass('single-section');
		if (total <= count) {
			target
				.find('.stage .item-list')
				.css({ display: 'block', position: 'relative' });
			if (c == 'recommend') {
				target.find('.stage .item-list').eq(0).css({
					display: 'block',
					position: 'absolute',
					left: '0',
					width: '19.3%',
				});
				target.find('.stage .item-list').eq(1).css({
					display: 'block',
					position: 'absolute',
					left: '19.3%',
					width: '19.3%',
				});
				target.find('.stage .item-list').eq(2).css({
					display: 'block',
					position: 'absolute',
					left: '38.6%',
					width: '22.8%',
				});
				target.find('.stage .item-list').eq(3).css({
					display: 'block',
					position: 'absolute',
					left: '61.4%',
					width: '19.3%',
				});
				target.find('.stage .item-list').eq(4).css({
					display: 'block',
					position: 'absolute',
					left: '80.7%',
					width: '19.3%',
				});
			}
		} else {
			target.find('.prev-button').show();
			target.find('.next-button').show();

			var h = target.find('.stage').html();
			if (total < count + 4) {
				if (count == 1) {
					target.find('.stage').append(h).append(h).append(h).append(h);
				} else if (count == 2 || count == 3) {
					target.find('.stage').append(h).append(h);
				} else {
					target.find('.stage').append(h);
				}
			}

			target.find('.stage .item-list').eq(0).addClass('active');

			for (var i = 0; i < count + 2; i++) {
				target
					.find('.stage .item-list')
					.eq(i)
					.attr('idx', i)
					.css({ display: 'block', left: i * width + '%' });
			}
			target
				.find('.stage .item-list')
				.eq(target.find('.stage .item-list').length - 1)
				.attr('idx', -1)
				.css({ display: 'block', left: -1 * width + '%' });
			target
				.find('.stage .item-list')
				.eq(target.find('.stage .item-list').length - 2)
				.attr('idx', -2)
				.css({ display: 'block', left: -2 * width + '%' });

			if (c == 'recommend') {
				target
					.find('.stage .item-list[idx=-2]')
					.css({ left: '-38.6%', width: '19.3%' });
				target
					.find('.stage .item-list[idx=-1]')
					.css({ left: '-19.3%', width: '19.3%' });
				target
					.find('.stage .item-list[idx=0]')
					.css({ left: '0', width: '19.3%' });
				target
					.find('.stage .item-list[idx=1]')
					.css({ left: '19.3%', width: '19.3%' });
				target
					.find('.stage .item-list[idx=2]')
					.css({ left: '38.6%', width: '22.8%' });
				target
					.find('.stage .item-list[idx=3]')
					.css({ left: '61.4%', width: '19.3%' });
				target
					.find('.stage .item-list[idx=4]')
					.css({ left: '80.7%', width: '19.3%' });
				target
					.find('.stage .item-list[idx=5]')
					.css({ left: '100%', width: '19.3%' });
				target
					.find('.stage .item-list[idx=6]')
					.css({ left: '119.3%', width: '19.3%' });
			} else if (c == 'magazine') {
				target
					.find('.stage .item-list[idx=-2]')
					.css({ left: '-57%', width: '27%' });
				target
					.find('.stage .item-list[idx=-1]')
					.css({ left: '-30%', width: '30%' });
				target
					.find('.stage .item-list[idx=0]')
					.find('.text')
					.css({ opacity: '1' });
				target
					.find('.stage .item-list[idx=1]')
					.find('.text')
					.css({ opacity: '1' });
				target
					.find('.stage .item-list[idx=2]')
					.find('.text')
					.css({ opacity: '1' });
				target
					.find('.stage .item-list[idx=3]')
					.css({ left: '99%', width: '30%' });
				target
					.find('.stage .item-list[idx=4]')
					.css({ left: '129%', width: '27%' });
			} else if (c == 'event') {
				target
					.find('.stage .item-list[idx=0]')
					.css({ position: 'relative', left: '0', float: 'left' });
				target
					.find('.stage .item-list[idx=1]')
					.css({ position: 'relative', left: '0', float: 'right' });
			}

			if (d == 'play') {
				target.attr('sst', e).addClass('play');
				clearInterval(singlesectionplay[target.attr('ssi')]);
				singlesectionplay[target.attr('ssi')] = setInterval(function () {
					singlesectionmove(target.find('.stage'), 'next');
				}, e);
			}
		}
	}
	singlesectionidx++;
}
function singlesectionmove(a, b) {
	var target = $(a).closest('.single-section');
	var count = eval(target.attr('ssc'));
	var width = eval(target.attr('ssw'));
	var effect = target.attr('sse');
	var total = target.find('.stage .item-list').length;
	var active = target.find('.stage .item-list.active');
	var move;
	var ax;
	var mx;

	if (target.hasClass('play')) {
		var ssi = target.attr('ssi');
		var sst = target.attr('sst');
		clearInterval(singlesectionplay[target.attr('ssi')]);
		singlesectionplay[target.attr('ssi')] = setInterval(function () {
			singlesectionmove(target.find('.stage'), 'next');
		}, sst);
	}

	if (target.hasClass('ing')) {
		return false;
	}
	target.addClass('ing');
	active.removeClass('active');
	target.find('.stage .item-list').attr('idx', '');

	if (b == 'prev') {
		ax = width;
		mx = width * -1;

		if (active.index() == 0) {
			target
				.find('.stage .item-list')
				.eq(total - 1)
				.addClass('active');
		} else {
			active.prev().addClass('active');
		}
	}
	if (b == 'next') {
		ax = width * -1;
		mx = width;

		if (active.index() == total - 1) {
			target.find('.stage .item-list').eq(0).addClass('active');
		} else {
			active.next().addClass('active');
		}
	}
	for (var r = -2; r < count + 2; r++) {
		var i = target.find('.stage .item-list.active').index() + r;

		if (i < 0) {
			i = total + i;
		}
		if (i > total - 1) {
			i = i - total;
		}

		target.find('.stage .item-list').eq(i).attr('idx', r);
	}

	if (effect == 'recommend') {
		recommendeffect(target, b);
	} else if (effect == 'magazine') {
		magazineeffect(target, b);
	} else if (effect == 'event') {
		eventeffect(target, b);
	} else if (effect == 'detail') {
		detaileffect(target, b);
	} else {
		target
			.find('.stage .item-list:visible')
			.css({
				'margin-left': ax + '%',
				'-moz-transition': 'margin 0.4s',
				'-webkit-transition': 'margin 0.4s',
				transition: 'margin 0.4s',
			})
			.one('transitionend', function () {
				target.find('.stage .item-list').attr('style', '');
				for (var i = -2; i < count + 2; i++) {
					target
						.find('.stage .item-list[idx=' + i + ']')
						.css({ display: 'block', left: width * i + '%' });
					target.removeClass('ing');
				}
			});

		//A-TV lazyload 수동
		if (target.hasClass('main-atv')) {
			setTimeout(function () {
				target.find('.stage .item-list[idx="2"]').find('.lazyTab').lazy();
				target.find('.stage .item-list[idx="1"]').find('.lazyTab').lazy();
				target.find('.stage .item-list[idx="0"]').find('.lazyTab').lazy();
				target.find('.stage .item-list[idx="-1"]').find('.lazyTab').lazy();
			}, 0);
		}
		//A-picker lazyload 수동
		if (target.hasClass('a-picker')) {
			setTimeout(function () {
				target.find('.stage .item-list[idx="0"]').find('.lazyTab').lazy();
				target.find('.stage .item-list[idx="3"]').find('.lazyTab').lazy();
				target.find('.stage .item-list[idx="4"]').find('.lazyTab').lazy();
			}, 0);
		}
	}
}

/* tab section */
var tabsectionidx = 0;
var tabsectionplay = new Array();
function tabsectionsetting(a, b, c, d) {
	var target = $(a);
	var total = target.find('.stage .item-list').length;
	if (target.length > 0) {
		target.attr('tsi', tabsectionidx).addClass('tab-section');
		target.find('.stage .item-list').eq(0).addClass('active');
		if (d == 'popup') {
			target.find('.stage .item-list').eq(0).css({ visibility: 'visible' });
			if (total > 1) {
				tabsectiondrag(target);
			}
		}

		if (target.find('.indicator').length > 0) {
			for (var i = 0; i < target.find('.stage .item-list').length; i++) {
				if (d == 'popup') {
					if (target.find('.stage .item-list').length > 1) {
						target
							.find('.indicator ul')
							.append(
								'<li><button type="button" onclick="tabsectionmove(this,' +
									i +
									')">' +
									(i + 1) +
									'</button></li>',
							);
					}
				} else {
					target
						.find('.indicator ul')
						.append(
							'<li><button type="button" onclick="tabsectionindicator(this,' +
								i +
								')">' +
								(i + 1) +
								'</button></li>',
						);
				}
			}
			target.find('.indicator ul li').eq(0).addClass('active');
		}

		if (b == 'play' && target.find('.stage .item-list').length > 1) {
			target.attr('tst', c).addClass('play');
			clearInterval(tabsectionplay[target.attr('tsi')]);
			tabsectionplay[target.attr('tsi')] = setInterval(function () {
				if (d == 'popup') {
					tabsectionmove(target, 'next');
				} else {
					tabsectionnext(target);
					//lazyload 자동
					//$(target).find('.item-list.active').find('.lazyTab').lazy();
				}
			}, c);
		}
		tabsectionidx++;
	}
}
function tabsectionbutton(a) {
	var target = $(a).closest('.tab-section');

	if (target.hasClass('play')) {
		var tsi = target.attr('tsi');
		var tst = target.attr('tst');
		clearInterval(tabsectionplay[tsi]);
		tabsectionplay[tsi] = setInterval(function () {
			tabsectionnext(target);
		}, tst);
	}

	target.find('.stage .item-list').removeClass('active');
	$(a).closest('.item-list').addClass('active');

	//lazyload 수동
	$(a).closest('.item-list').find('.lazyTab').lazy();
}
function tabsectionindicator(a, b) {
	var target = $(a).closest('.tab-section');

	if (target.hasClass('play')) {
		var tsi = target.attr('tsi');
		var tst = target.attr('tst');
		clearInterval(tabsectionplay[tsi]);
		tabsectionplay[tsi] = setInterval(function () {
			tabsectionnext(target);
		}, tst);
	}

	target.find('.indicator ul li').removeClass('active');
	target.find('.indicator ul li').eq(b).addClass('active');
	target.find('.stage .item-list').removeClass('active');
	target.find('.stage .item-list').eq(b).addClass('active');

	//lazyload 수동
	//$(target).find('.item-list.active').find('.lazyTab').lazy();
}
function tabsectionnext(a) {
	var target = $(a);
	var total = target.find('.stage .item-list').length;
	var active = target.find('.stage .item-list.active');

	active.removeClass('active');

	if (active.index() == total - 1) {
		target.find('.stage .item-list').eq(0).addClass('active');
	} else {
		active.next().addClass('active');
	}

	target.find('.indicator ul li').removeClass('active');
	target
		.find('.indicator ul li')
		.eq(target.find('.stage .item-list.active').index())
		.addClass('active');
}

function tabsectionmove(a, b) {
	var target = $(a).closest('.tab-section');
	var total = target.find('.stage .item-list').length;
	var active = target.find('.stage .item-list.active');
	var move;
	var ax;
	var mx;

	if (active.index() == b || target.hasClass('ing')) {
		return false;
	}
	target.addClass('ing');

	if (b == 'prev') {
		mx = -100;
		ax = 100;

		if (active.index() == 0) {
			move = target.find('.stage .item-list').eq(total - 1);
		} else {
			move = active.prev();
		}
	} else if (b == 'next') {
		mx = 100;
		ax = -100;

		if (active.index() == total - 1) {
			move = target.find('.stage .item-list').eq(0);
		} else {
			move = active.next();
		}
	} else {
		if (active.index() > b) {
			mx = -100;
			ax = 100;
		}
		if (active.index() < b) {
			mx = 100;
			ax = -100;
		}

		move = target.find('.stage .item-list').eq(b);
	}

	target.find('.indicator ul li').removeClass('active');
	target.find('.indicator ul li').eq(move.index()).addClass('active');

	move.css({
		visibility: 'visible',
		left: mx + '%',
		'margin-left': ax + '%',
		'-moz-transition': 'margin 0.4s',
		'-webkit-transition': 'margin 0.4s',
		transition: 'margin 0.4s',
	});
	active
		.css({
			'margin-left': ax + '%',
			'-moz-transition': 'margin 0.4s',
			'-webkit-transition': 'margin 0.4s',
			transition: 'margin 0.4s',
		})
		.one('transitionend', function () {
			target.find('.stage .item-list').attr('style', '');
			move.addClass('active').css({ visibility: 'visible' });
			active.removeClass('active');
			target.removeClass('ing');
		});

	if (target.hasClass('play')) {
		var tsi = target.attr('tsi');
		var tst = target.attr('tst');
		clearInterval(tabsectionplay[tsi]);
		tabsectionplay[tsi] = setInterval(function () {
			tabsectionmove(target, 'next');
		}, tst);
	}
}
function tabsectiondrag(a) {
	var target = a;
	var total = target.find('.stage .item-list').length;
	var active;
	var move;
	var w = target.outerWidth();
	var tsi = target.attr('tsi');

	var sx = 0;
	var mx = 0;

	target.find('.stage .item-list img').on('mousedown', function (e) {
		e.preventDefault();
	});

	target.find('.stage').on('mousedown', function (e) {
		if (target.hasClass('ing')) {
			return false;
		}

		active = target.find('.stage .item-list.active');
		sx = e.pageX || e.clientX;
		target.addClass('drag');

		if (target.hasClass('play')) {
			clearInterval(tabsectionplay[tsi]);
		}
	});
	$(window)
		.on('mousemove', function (e) {
			if (target.hasClass('ing')) {
				return false;
			}

			if (target.hasClass('drag')) {
				mx = (e.pageX || e.clientX) - sx;
				if (mx > w) {
					mx = w;
				}
				if (mx < w * -1) {
					mx = w * -1;
				}

				if (Math.abs(mx) > 10) {
					target.addClass('lock');
				}
				active.css({
					left: mx,
					'-moz-transition': 'left 0s',
					'-webkit-transition': 'left 0s',
					transition: 'left 0s',
				});
				if (mx > 0) {
					if (active.index() == 0) {
						move = target.find('.stage .item-list').eq(total - 1);
					} else {
						move = active.prev();
					}
					move.css({
						visibility: 'visible',
						left: mx,
						'margin-left': '-100%',
						'-moz-transition': 'left 0s',
						'-webkit-transition': 'left 0s',
						transition: 'left 0s',
					});
				}
				if (mx < 0) {
					if (active.index() == total - 1) {
						move = target.find('.stage .item-list').eq(0);
					} else {
						move = active.next();
					}
					move.css({
						visibility: 'visible',
						left: mx,
						'margin-left': '100%',
						'-moz-transition': 'left 0s',
						'-webkit-transition': 'left 0s',
						transition: 'left 0s',
					});
				}
			}
		})
		.on('mouseup', function () {
			if (target.hasClass('drag')) {
				if (target.hasClass('lock')) {
					target.addClass('ing');
				}
				target.removeClass('drag lock');

				if (move != undefined) {
					if (mx > w / 4) {
						target.find('.indicator ul li').removeClass('active');
						target.find('.indicator ul li').eq(move.index()).addClass('active');
						move.css({
							left: '100%',
							'-moz-transition': 'left 0.4s',
							'-webkit-transition': 'left 0.4s',
							transition: 'left 0.4s',
						});
						active
							.css({
								left: '100%',
								'-moz-transition': 'left 0.4s',
								'-webkit-transition': 'left 0.4s',
								transition: 'left 0.4s',
							})
							.one('transitionend', function () {
								target.find('.stage .item-list').attr('style', '');
								move.addClass('active').css({ visibility: 'visible' });
								active.removeClass('active');
								target.removeClass('ing');
							});
					} else if (mx < (w / 4) * -1) {
						target.find('.indicator ul li').removeClass('active');
						target.find('.indicator ul li').eq(move.index()).addClass('active');
						move.css({
							left: '-100%',
							'-moz-transition': 'left 0.4s',
							'-webkit-transition': 'left 0.4s',
							transition: 'left 0.4s',
						});
						active
							.css({
								left: '-100%',
								'-moz-transition': 'left 0.4s',
								'-webkit-transition': 'left 0.4s',
								transition: 'left 0.4s',
							})
							.one('transitionend', function () {
								target.find('.stage .item-list').attr('style', '');
								move.addClass('active').css({ visibility: 'visible' });
								active.removeClass('active');
								target.removeClass('ing');
							});
					} else {
						move.css({
							left: '0',
							'-moz-transition': 'left 0.4s',
							'-webkit-transition': 'left 0.4s',
							transition: 'left 0.4s',
						});
						active
							.css({
								left: '0',
								'-moz-transition': 'left 0.4s',
								'-webkit-transition': 'left 0.4s',
								transition: 'left 0.4s',
							})
							.one('transitionend', function () {
								target.find('.stage .item-list').attr('style', '');
								active.css({ visibility: 'visible' });
								target.removeClass('ing');
							});
					}
				}

				if (target.hasClass('play')) {
					var tst = target.attr('tst');
					clearInterval(tabsectionplay[tsi]);
					tabsectionplay[tsi] = setInterval(function () {
						tabsectionmove(target, 'next');
					}, tst);
				}

				sx = 0;
				mx = 0;
			}
		});
}

//iniput checkbox(login.jsp)
$(window).on('load', function () {
	//checkbox
	input($('.input'));
});

function input(a) {
	var target = a;
	var type;

	target.each(function () {
		if (!$(this).parent().hasClass('inputDummy')) {
			if ($(this).is('[type=checkbox]')) {
				type = 'checkboxDummy';
			}

			if ($(this).is(':checked')) {
				$(this).wrap('<span class="' + type + ' inputDummy active" />');
			} else {
				$(this).wrap('<span class="' + type + ' inputDummy" />');
			}

			$(this).on('click change', function () {
				$('input[type=radio],input[type=checkbox]').each(function () {
					inputMove($(this));
				});
			});
		}
	});
}
function inputMove(a) {
	var target = a.parent('.inputDummy');

	if (a.is(':checked')) {
		target.addClass('active');
	} else {
		target.removeClass('active');
	}

	if (a.is('[type=radio]')) {
		var name = a.attr('name');
		$('input[name=' + name + ']').each(function () {
			if ($(this).is(':checked')) {
				$(this).parent('.inputDummy').addClass('active');
			} else {
				$(this).parent('.inputDummy').removeClass('active');
			}
		});
	}
}

function todayGoodsView(a) {
	let goodsnostr = getCookie(CONST_COOKIE_GOODS_LOG);
	if (goodsnostr.length == 0) {
		multitab(a);
	} else {
		$.ajax({
			type: 'POST',
			url: '../common/ajax/todaysViewGoods_ajax',
			data: 'goodsnos=' + goodsnostr,
			dataType: 'json',
			success: function (data) {
				makeTodayGoodsViewTag(data.data);
				multitab(a);
			},
		});
	}
}
function makeTodayGoodsViewTag(data) {
	var addListHtml = '';
	let urlText = CONST_IMG_CDN_URL + CONST_pathgoodssmall;
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
			addListHtml += '<li class="' + today.SOLDOUT + '">';
			addListHtml += '  <a href="../goods/detail?gno=' + today.NO + '">';
			addListHtml +=
				'    <span class="img" style="background-image:url(' +
				urlText +
				'/' +
				today.IMGS +
				')"></span>';
			addListHtml += '    <span class="brand">' + today.BRANDNAME + '</span>';
			addListHtml += '    <span class="name">' + today.GOODSNAME + '</span>';
			addListHtml += '    <span class="price">' + today.MARKETPRICE;
			if (today.PRICE < today.MARKETPRICE) {
				addListHtml += '      <del>' + today.PRICE + '</del>';
			}
			addListHtml += '    </span>';
			addListHtml += '  </a>';
			addListHtml += '</li>';
		}
		$('#todaylist').empty().html(addListHtml);
	}
}

function topmove() {
	$('html,body').animate({ scrollTop: 0 }, 350);
}
