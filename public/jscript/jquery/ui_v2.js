$(document).ready(function () {
	$('#topSlide').owlCarousel({
		navigation: true, // Show next and prev buttons
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true,
	});
});

$(function () {
	function auto_visual() {
		roll = setInterval(function () {
			$('.arrows .next').click();
		}, 5000);
	}
	auto_visual();

	$('.arrows .next').click(function () {
		var i = $('.visual_view').children('.on').index() + 1,
			max = $('.visual_view').children().size(),
			space = $('.visual_view').width();
		i++;
		$('.visual_view > div').stop(true, true);
		$('.visual_view .on')
			.fadeOut()
			.next()
			.css('z-index', '3')
			.fadeIn('slow', function () {
				$(this).siblings().removeClass('on');
			})
			.addClass('on')
			.siblings()
			.css('z-index', '1');
		$('.thumb .on').next().addClass('on');
		$('.thumb .on').prev().removeClass('on');
		clearInterval(roll);
		auto_visual();
		if (i > max) {
			$('.visual_view')
				.children('div:first')
				.css('z-index', '3')
				.fadeIn('slow', function () {
					$(this).siblings().removeClass('on');
				})
				.addClass('on')
				.siblings()
				.css('z-index', '1');
			$('.thumb a').removeClass('on');
			$('.thumb a:first').addClass('on');
			i = 1;
		}
	});
	$('.arrows .prev').click(function () {
		var i = $('.visual_view').children('.on').index() + 1,
			max = $('.visual_view').children().size(),
			space = $('.visual_view').width();
		i--;
		$('.visual_view > div').stop(true, true);
		$('.visual_view .on')
			.fadeOut()
			.prev()
			.css('z-index', '3')
			.fadeIn('slow', function () {
				$(this).siblings().removeClass('on');
			})
			.addClass('on')
			.siblings()
			.css('z-index', '1');
		$('.thumb .on').prev().addClass('on');
		$('.thumb .on').next().removeClass('on');
		clearInterval(roll);
		auto_visual();
		if (i < 1) {
			i = 1;
			$('.visual_view')
				.children('div:last')
				.css('z-index', '3')
				.fadeIn('slow', function () {
					$(this).siblings().removeClass('on');
				})
				.addClass('on')
				.siblings()
				.css('z-index', '1');
			$('.thumb a').removeClass('on');
			$('.thumb a:last').addClass('on');
		}
	});

	$('.thumb a').click(function () {
		var num = $(this).index(),
			space = $('.visual_view').width();
		$('.visual_view > div').stop(true, true);
		$(this).addClass('on');
		$(this).siblings().removeClass('on');
		$('.visual_view')
			.children()
			.eq(num)
			.css('z-index', '3')
			.fadeIn('slow', function () {
				$(this).siblings().removeClass('on');
			})
			.addClass('on')
			.siblings()
			.fadeOut('slow')
			.css('z-index', '1');
		clearInterval(roll);
		auto_visual();
	});
});

$(function () {
	function auto_brand() {
		roll2 = setInterval(function () {
			$('.brand_arrows .next').click();
		}, 5000);
	}
	auto_brand();

	$('.brand_arrows .next').click(function () {
		var i = $('.brand_view').children('.on').index() + 1,
			max = $('.brand_view').children().size(),
			space = $('.brand_view').width();
		i++;
		$('.brand_view > div').stop(true, true);
		$('.brand_view .on')
			.fadeOut()
			.next()
			.css('z-index', '3')
			.fadeIn('slow', function () {
				$(this).siblings().removeClass('on');
			})
			.addClass('on')
			.siblings()
			.css('z-index', '1');
		$('.brand_thumb .on').next().addClass('on');
		$('.brand_thumb .on').prev().removeClass('on');
		clearInterval(roll2);
		auto_brand();
		if (i > max) {
			$('.brand_view')
				.children('div:first')
				.css('z-index', '3')
				.fadeIn('slow', function () {
					$(this).siblings().removeClass('on');
				})
				.addClass('on')
				.siblings()
				.css('z-index', '1');
			$('.brand_thumb a').removeClass('on');
			$('.brand_thumb a:first').addClass('on');
			i = 1;
		}
	});
	$('.brand_arrows .prev').click(function () {
		var i = $('.brand_view').children('.on').index() + 1,
			max = $('.brand_view').children().size(),
			space = $('.brand_view').width();
		i--;
		$('.brand_view > div').stop(true, true);
		$('.brand_view .on')
			.fadeOut()
			.prev()
			.css('z-index', '3')
			.fadeIn('slow', function () {
				$(this).siblings().removeClass('on');
			})
			.addClass('on')
			.siblings()
			.css('z-index', '1');
		$('.brand_thumb .on').prev().addClass('on');
		$('.brand_thumb .on').next().removeClass('on');
		clearInterval(roll2);
		auto_brand();
		if (i < 1) {
			i = 1;
			$('.brand_view')
				.children('div:last')
				.css('z-index', '3')
				.fadeIn('slow', function () {
					$(this).siblings().removeClass('on');
				})
				.addClass('on')
				.siblings()
				.css('z-index', '1');
			$('.brand_thumb a').removeClass('on');
			$('.brand_thumb a:last').addClass('on');
		}
	});

	$('.brand_thumb a').click(function () {
		var num = $(this).index(),
			space = $('.brand_view').width();
		$('.brand_view > div').stop(true, true);
		$(this).addClass('on');
		$(this).siblings().removeClass('on');
		$('.brand_view')
			.children()
			.eq(num)
			.css('z-index', '3')
			.fadeIn('slow', function () {
				$(this).siblings().removeClass('on');
			})
			.addClass('on')
			.siblings()
			.fadeOut('slow')
			.css('z-index', '1');
		clearInterval(roll2);
		auto_brand();
	});
});

$(document).ready(function () {
	$('#quick_btn').click(function () {
		$('#quick_bar').toggleClass('on');
	});
});

$(document).ready(function () {
	$('#all_view').click(function () {
		var state = $('#all_menu').css('display');

		if (state == 'none') {
			$.ajax({
				type: 'GET',
				url: '../common/ajax/topTotalCategory_v2_ajax',
				success: function (data) {
					$('#all_menu_inner').append(data);
					$('#all_menu').slideDown('500');
					$('#all_view').addClass('close');

					/*
					$('#all_menu_inner').append(data).slideDown(500, function() {
						$('#all_view').addClass('close');
					});
					*/
					/*
					$('#all_menu_inner').append(data).css({
						top: $('#header').height() - 1
					}).slideDown(500, function() {
						$('#all_view').addClass('close');
					});
					*/
				},
			});

			// $('#all_menu').slideDown('500');
			// $('#all_view').addClass('close');
		} else {
			$('#all_menu_inner').find('dl').remove();
			$('#all_menu').slideUp('500');
			$('#all_view').removeClass('close');
		}
	});
});

$(document).ready(function () {
	$.ajax({
		type: 'GET',
		url: '../common/ajax/topSearchWord_v2_ajax',
		success: function (data) {
			$('#header_box .search_issue').append(data);
		},
	});
});

// quickBar todays
function todayGoodsViewer(obj, max, complete) {
	var viewer = {
		container: $(obj).find('.todays_container'),
		pagination: $(obj).find('.todays_pagination'),
		total: { size: 0, page: 0 },
		viewH: 0,
		itemH: 0,
		maxH: 0,
		top: 0,
		setPage: function () {
			var page = Math.abs(this.top / this.viewH) + 1;
			if (page > this.total.page) page = this.total.page;
			this.pagination
				.find('span')
				.text(this.total.page)
				.end()
				.find('strong')
				.text(page); // print page number
			if (page <= 1)
				this.pagination
					.find('.prev')
					.prop('disabled', true)
					.addClass('pageDisabled');
			else
				this.pagination
					.find('.prev')
					.prop('disabled', false)
					.removeClass('pageDisabled');
			if (page >= this.total.page)
				this.pagination
					.find('.next')
					.prop('disabled', true)
					.addClass('pageDisabled');
			else
				this.pagination
					.find('.next')
					.prop('disabled', false)
					.removeClass('pageDisabled');
		},
		init: function () {
			var me = this;
			$.ajax({
				type: 'POST',
				url: '../common/ajax/todaysViewGoods_ajax',
				success: function (data) {
					$('<ul />').html(data).appendTo(me.container);
					me.run();
				},
			});
		},
		run: function () {
			var me = this;
			var control = this.container.children();

			this.total.size = control.children().size();

			if (this.total.size > 0) {
				this.total.page = Math.ceil(this.total.size / max);
				this.itemH = control.children(':first').height() + 1; // + bottom border size
				this.viewH =
					this.total.size < max
						? this.itemH * this.total.size
						: this.itemH * max;
				this.maxH = this.itemH * this.total.size;
				this.container.css({
					height: this.viewH - 1 + 'px',
					overflow: 'hidden',
				}); // - item bottom border size

				if (this.total.size > max) {
					// pagination event
					this.setPage();
					this.pagination.find('.prev').click(function () {
						if (me.top < 0) {
							me.top =
								Math.floor(Math.floor(control.position().top) / me.viewH) *
									me.viewH +
								me.viewH;
							control.animate({ top: me.top }, 200, function () {
								me.setPage();
							});
						}
						return false;
					});
					this.pagination.find('.next').click(function () {
						if (me.top > me.viewH * (me.total.page - 1) * -1) {
							me.top =
								Math.ceil(Math.floor(control.position().top) / me.viewH) *
									me.viewH -
								me.viewH;
							control.animate({ top: me.top }, 200, function () {
								me.setPage();
							});
						}
						return false;
					});
					// this.pagination.show();
				} else {
					// this.pagination.hide();
				}

				obj.fadeIn();
			} else {
				obj.hide();
			}

			if (typeof complete == 'function') {
				complete();
			}
		},
	};

	viewer.init();
}
