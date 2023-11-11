/*
 * slidex
 * By: HanSeungho landboy@gmail.com
 * Version: 1.1.1
 * Updated: 2014-03-23
 */

(function ($) {
	$.fn.slidex = function (opts) {
		var options = $.extend(
			{
				clsPanel: 'sx-panel',
				clsControl: 'sx-control',
				clsIndicator: 'sx-indicator',
				clsPrev: 'sx-prev',
				clsNext: 'sx-next',
				clsCurrent: 'current',
				attrHover: 'sx-hover',
				attrHon: 'sx-hon',
				attrHoff: 'sx-hoff',
				slideSpeed: 350,
				slideEasing: '',
				fadeSpeed: 350,
				fadeEasing: '',
				effectDirection: 'horizontal', // horizontal: 수평 slide, vertical: 수직 slide, fade
				effectIndicator: '', // blank: same direction effect, fade
				autoPlay: true,
				direction: 'next',
				idle: 3000,
				hoverStop: true,
				functionLoaded: function () {},
				functionStart: function () {},
				functionComplete: function () {},
			},
			opts,
		);

		return this.each(function () {
			var $slide = $(this).css({
					overflow: 'hidden',
				}),
				$spanel = $('.' + options.clsPanel, $slide)
					.css({
						overflow: 'hidden',
						position: 'relative',
						visibility: 'hidden',
						display: 'block',
					})
					.children()
					.wrapAll('<div class="' + options.clsControl + '" />')
					.end(),
				$sindicator = $('.' + options.clsIndicator, $slide).css({
					zIndex: 15,
					visibility: 'hidden',
					display: 'block',
				}),
				$scontrol = $('.' + options.clsControl, $slide)
					.children()
					.css({
						display: 'block',
					})
					.end();
			var s = {
				total: $scontrol.children().size(),
				width: $scontrol.children().outerWidth(),
				height: $scontrol.children().outerHeight(),
				currentIndex: 0,
				active: false,
				loaded: false,
			};

			function play(direction, effect, page) {
				var prevIndex, nextIndex;
				var position = (destination = 0);

				if (s.loaded && !s.active) {
					s.active = true;

					options.functionStart(s.currentIndex);

					switch (direction) {
						case 'next':
							prevIndex = s.currentIndex;
							nextIndex = prevIndex + 1;
							if (nextIndex >= s.total) nextIndex = 0;

							switch (effect) {
								case 'horizontal':
									position = s.width * 2;
									destination = -s.width * 2;
									break;
								case 'vertical':
									position = s.height * 2;
									destination = -s.height * 2;
									break;
							}
							options.direction = direction;
							break;
						case 'prev':
							prevIndex = s.currentIndex;
							nextIndex = prevIndex - 1;
							if (nextIndex < 0) nextIndex = s.total - 1;
							options.direction = direction;
							break;
						case 'page':
							nextIndex = parseInt(page, 10);
							prevIndex = parseInt(
								$sindicator
									.find('a.' + options.clsCurrent)
									.attr('href')
									.match('[^#/]+$'),
								10,
							);

							if (nextIndex > prevIndex) {
								switch (effect) {
									case 'horizontal':
										position = s.width * 2;
										destination = -s.width * 2;
										break;
									case 'vertical':
										position = s.height * 2;
										destination = -s.height * 2;
										break;
								}
							}
							break;
					}
					s.currentIndex = nextIndex;

					switch (effect) {
						case 'horizontal':
							$scontrol
								.children(':eq(' + nextIndex + ')')
								.css({
									left: position,
									display: 'block',
								})
								.end()
								.animate(
									{
										left: destination,
									},
									options.slideSpeed,
									options.slideEasing,
									function () {
										$scontrol.children(':eq(' + prevIndex + ')').css({
											display: 'none',
											zIndex: 0,
										});
										$scontrol
											.css({
												left: -s.width,
											})
											.children(':eq(' + nextIndex + ')')
											.css({
												left: s.width,
												zIndex: 10,
											});
										options.functionComplete(nextIndex);
										s.active = false;
									},
								);
							break;
						case 'vertical':
							$scontrol
								.children(':eq(' + nextIndex + ')')
								.css({
									top: position,
									display: 'block',
								})
								.end()
								.animate(
									{
										top: destination,
									},
									options.slideSpeed,
									options.slideEasing,
									function () {
										$scontrol.children(':eq(' + prevIndex + ')').css({
											display: 'none',
											zIndex: 0,
										});
										$scontrol
											.css({
												top: -s.height,
											})
											.children(':eq(' + nextIndex + ')')
											.css({
												top: s.height,
												zIndex: 10,
											});
										options.functionComplete(nextIndex);
										s.active = false;
									},
								);
							break;
						case 'fade':
							$scontrol
								.children(':eq(' + nextIndex + ')', $slide)
								.css({
									zIndex: 10,
								})
								.fadeIn(options.fadeSpeed, options.fadeEasing, function () {
									$scontrol.children(':eq(' + prevIndex + ')', $slide).css({
										display: 'none',
										zIndex: 0,
									});
									$scontrol.children(':eq(' + nextIndex + ')', $slide).css({
										zIndex: 0,
									});
									options.functionComplete(nextIndex);
									s.active = false;
								});
							break;
					}

					if ($sindicator.length) {
						$sindicator
							.find('a.' + options.clsCurrent)
							.removeClass(options.clsCurrent)
							.find('img')
							.attr('src', function () {
								var src = $(this).attr(options.attrHoff);
								return src ? src : $(this).attr('src');
							});
						$sindicator
							.find('a:eq(' + nextIndex + ')')
							.addClass(options.clsCurrent)
							.find('img')
							.attr('src', function () {
								var src = $(this).attr(options.attrHon);
								return src ? src : $(this).attr('src');
							});
					}

					if (options.autoPlay) {
						run();
					}
				}
			}

			function stop() {
				clearTimeout($scontrol.data('timer'));
			}

			function run() {
				clearTimeout($scontrol.data('timer'));
				var timer = setTimeout(function () {
					play(options.direction, options.effectDirection);
				}, options.idle);
				$scontrol.data('timer', timer);
			}

			$slide.unload(function () {
				stop();
			});

			if (s.total <= 1) {
				$('.' + options.clsPrev + ', .' + options.clsNext, $slide).hide();
				$sindicator
					.css({
						visibility: 'visible',
					})
					.find('a')
					.click(function () {
						return false;
					});
				$spanel.css({ visibility: 'visible' });
				if ($sindicator.length) {
					$sindicator
						.find('a:first')
						.addClass(options.clsCurrent)
						.find('img')
						.attr('src', function () {
							var src = $(this).attr(options.attrHon);
							return src ? src : $(this).attr('src');
						});
				}
				s.loaded = true;
				options.functionLoaded();
				return false;
			}

			switch (options.effectDirection) {
				case 'horizontal':
					$scontrol.css({
						position: 'relative',
						width: s.width * 3,
						height: s.height,
						left: -s.width,
					});
					break;
				case 'vertical':
					$scontrol.css({
						position: 'relative',
						width: s.width,
						height: s.height * 3,
						top: -s.height,
					});
					break;
				case 'fade':
					$scontrol.css({
						position: 'relative',
						width: s.width,
						height: s.height,
					});
					break;
			}

			$scontrol.children().css({
				position: 'absolute',
				top: options.effectDirection == 'vertical' ? s.height : 0,
				left: options.effectDirection == 'horizontal' ? s.width : 0,
				zIndex: 0,
				display: 'none',
			});

			if (options.hoverStop && options.autoPlay) {
				$spanel.hover(
					function () {
						stop();
					},
					function () {
						run();
					},
				);
			}

			$('.' + options.clsPrev + ', .' + options.clsNext, $slide).css({
				zIndex: 15,
			});

			$('.' + options.clsNext, $slide).click(function () {
				clearTimeout($slide.data('timer'));
				play('next', options.effectDirection);
				return false;
			});

			$('.' + options.clsPrev, $slide).click(function () {
				clearTimeout($slide.data('timer'));
				play('prev', options.effectDirection);
				return false;
			});

			$sindicator.find('a').each(function (index) {
				if (index < s.total) {
					$(this)
						.attr('href', '#' + index)
						.click(function () {
							if (s.currentIndex != index && s.total > index) {
								play(
									'page',
									options.effectIndicator || options.effectDirection,
									index,
								);
							}
							return false;
						})
						.find('img')
						.each(function () {
							if (options.attrHover && $(this).attr(options.attrHover)) {
								$(this).attr(options.attrHon, $(this).attr(options.attrHover));
								$(this).attr(options.attrHoff, $(this).attr('src'));
							}
						});
				} else {
					$(this).css({
						visibility: 'hidden',
					});
				}
			});

			$sindicator.css({ visibility: 'visible' });
			$spanel.css({ visibility: 'visible' });

			$scontrol.children(':first').show(0, function () {
				if ($sindicator.length) {
					$sindicator
						.find('a:first')
						.addClass(options.clsCurrent)
						.find('img')
						.attr('src', function () {
							var src = $(this).attr(options.attrHon);
							return src ? src : $(this).attr('src');
						});
				}
				s.loaded = true;
				options.functionLoaded();
			});

			if (options.autoPlay) {
				run();
			}

			/* external call */
			$(this).on('doNext', function () {
				// $obj.trigger('doNext');
				clearTimeout($slide.data('timer'));
				play('next', options.effectDirection);
			});

			$(this).on('doPrev', function () {
				// $obj.trigger('doPrev');
				clearTimeout($slide.data('timer'));
				play('prev', options.effectDirection);
			});
		});
	};

	$.fn.slidexGrouping = function (options) {
		options = $.extend(
			{
				clsGroupPanel: 'sx-group-panel',
				clsGroupControl: 'sx-group-control',
				clsGroupIndicator: 'sx-group-indicator',
				clsCurrent: 'current',
				attrHover: 'sx-hover',
				attrHon: 'sx-hon',
				attrHoff: 'sx-hoff',
				fadeSpeed: 350,
				fadeEasing: '',
				slideOptions: {},
			},
			options,
		);

		return this.each(function () {
			var $group = $(this),
				$gpanel = $('.' + options.clsGroupPanel, $group),
				$gtab = $('.' + options.clsGroupIndicator, $group),
				$gcontrol = $('<div class=".' + options.clsGroupControl + '">')
					.css({
						display: 'none',
					})
					.append($gpanel.children())
					.children()
					.each(function () {
						$(this).wrapAll('<div />');
					})
					.end()
					.appendTo($group);
			var w = {
				total: $gcontrol.children().size(),
				currentIndex: 0,
				loaded: false,
				active: false,
			};

			function move(page) {
				if (w.loaded && !w.active) {
					w.active = true;

					$gpanel.children().trigger('unload').remove();

					if ($gtab.length) {
						$gtab
							.find('a.' + options.clsCurrent)
							.removeClass(options.clsCurrent)
							.find('img')
							.attr('src', function () {
								var src = $(this).attr(options.attrHoff);
								return src ? src : $(this).attr('src');
							});
						$gtab
							.find('a:eq(' + page + ')')
							.addClass(options.clsCurrent)
							.find('img')
							.attr('src', function () {
								var src = $(this).attr(options.attrHon);
								return src ? src : $(this).attr('src');
							});
					}

					$gpanel
						.append($gcontrol.children(':eq(' + page + ')').html())
						.children()
						.slidex(options.slideOptions);

					w.currentIndex = page;
					w.active = false;
				}
			}

			$gtab.find('a').each(function (index) {
				$(this)
					.attr('href', '#' + index)
					.click(function () {
						if (w.currentIndex != index && w.total > index) {
							move(index);
						}
						return false;
					})
					.find('img')
					.each(function () {
						if (options.attrHover && $(this).attr(options.attrHover)) {
							$(this).attr(options.attrHon, $(this).attr(options.attrHover));
							$(this).attr(options.attrHoff, $(this).attr('src'));
						}
					});
			});

			if ($gtab.length) {
				$gtab
					.find('a:first')
					.addClass(options.clsCurrent)
					.find('img')
					.attr('src', function () {
						var src = $(this).attr(options.attrHon);
						return src ? src : $(this).attr('src');
					});
			}

			$gpanel
				.append($gcontrol.children(':first').html())
				.fadeIn(options.fadeSpeed, options.fadeEasing, function () {
					$gpanel.children().slidex(options.slideOptions);
					w.loaded = true;
				});
		});
	};
})(jQuery);
