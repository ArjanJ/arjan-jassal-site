(function($, window, document, undefined) {
	// 'use strict';

	var toggleMenu = {

		elements: {
			hamburger:		$('#js-hamburger'),
			menu:					$('#js-menu'),
			overlay:			$('#js-overlay'),
			link:					$('#js-menu').find('a'),
			window:				$(window)
		},

		init: function() {
			e = this.elements;
			this.bindActions();
		},

		open: function() {
			e = this.elements;
			e.hamburger.toggleClass('c-hamburger--close');
			e.menu.toggleClass('menu--open');
			e.overlay.toggleClass('c-overlay--active');
			e.link.toggleClass('menu__link--active');
		},

		close: function() {
			e = this.elements;
			if (e.menu.hasClass('menu--open')) {
				e.hamburger.removeClass('c-hamburger--close');
				e.menu.removeClass('menu--open');
				e.overlay.removeClass('c-overlay--active');
				e.link.removeClass('menu__link--active');
			}
		},

		bindActions: function() {
			e.hamburger.on('click', function() {
				toggleMenu.open();
				return false;
			});
			e.window.on('click', function() {
				toggleMenu.close();
			});
		}
	};

	toggleMenu.init();

	var width = $(window).width();
		if (width < 768) {
			// For Mobile
			// Init FullPage Scrolling
			$('#fullpage').fullpage({
				navigation: true,
				resize: false,
				scrollbar: true,
				paddingTop: '69px',
				paddingBottom: '45px',
				autoScrolling: false,
				easecss3: 'ease-out',
				anchors: ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide', 'fifthSlide']
			});
		}

		if (width > 768) {
			// For Desktop
			// Init FullPage Scrolling
			$('#fullpage').fullpage({
				navigation: true,
				resize: false,
				scrollbar: true,
				paddingTop: '83px',
				paddingBottom: '105px',
				autoScrolling: true,
				easecss3: 'ease-out',
				// normalScrollElements: '#pricing-table',
				anchors: ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide', 'fifthSlide']
			});
		}

}(jQuery, window, document));