(function(window, document, undefined) {

	'use strict';

	var Preview = (function() {

		var elements = {
			name: document.querySelectorAll('h1.projects__title'),
			bgs: document.querySelectorAll('div.projects__bg')
		};

		var show = function() {
			var e = elements;
			var self = this;
			var project = self.dataset.project;
			var bg = document.getElementById(project);

			for (var i = 0; i < e.name.length; i++) {
				e.bgs[i].classList.remove('projects__bg--show');
			}
			for (var k = 0, kk = e.name.length; k < kk; k++) {
				e.name[k].style.opacity = '0.2';
			}
			bg.classList.add('projects__bg--show');
			self.style.opacity = '1';
		};

		var events = function() {
			var e = elements;
			if (e.bgs.length > 0) e.bgs[0].classList.add('projects__bg--show');
			if (e.name.length > 0) e.name[0].style.opacity = '1';
			for (var i = 0, ii = e.name.length; i < ii; i++) {
				e.name[i].addEventListener('mouseenter', show, false);
			}
		};

		var init = function() {
			events();
		};

		return {
			init: init,
		};

	}());

	var FancyScroll = (function() {

		var elements = {
			theThing: document.querySelector('.fadescroll')
		};

		var init = function() {
			var e = elements;
			var pageHeight = window.outerHeight;

			if (e.theThing) {
				window.addEventListener('scroll', function() {

					var scrollPos = window.scrollY;
					var opacity = 1 - (scrollPos/250);
					var trans = 1 + (scrollPos);

					if (scrollPos < pageHeight / 2) {
						e.theThing.style.opacity = opacity;
						e.theThing.style.transform = 'translateY(' + trans + 'px)';
					}

				});
			}
		};

		return {
			init: init
		};

	}());

	var PageTrans = (function() {

		var elements = {
			trigger: document.querySelectorAll('.smooth-trans'),
			body: document.querySelector('.main')
		};

		var enter = function() {
			var e = elements;
			Velocity(e.body,
				{
					opacity: 1
				},
				{
					duration: 750
				});
		};

		var exit = function(event) {
			var e = elements;
			var that = this;

			Velocity(e.body,
				{
					opacity: 0
				},
				{
					duration: 500,
					complete: function() {
						location.href = that.href;
					}
				});

			event.preventDefault();
		};

		var bindActions = function() {
			var e = elements;

			window.addEventListener('load', enter, false);

			for (var i = 0; i < e.trigger.length; i++) {
				e.trigger[i].addEventListener('click', exit, false);
			}
		};

		var init = function() {
			bindActions();
		};

		return {
			init: init
		};

	}());

	var Nav = (function() {

		var init = function() {

			var trigger = document.querySelector('#js-hamburger');
			var nav = document.querySelector('#js-nav');
			var main = document.querySelector('.main');
			var header = document.querySelector('.header');


			var triggerOpen = function() {
				trigger.classList.toggle('c-hamburger--close');
				nav.classList.toggle('nav--active');
				main.classList.toggle('main--active');
				// header.classList.toggle('header--active');
			};

			trigger.addEventListener('click', triggerOpen, false);
		};

		return {
			init: init
		};

	}());

	var Initializer = (function( Preview, FancyScroll, PageTrans ) {
		return {
			init: function() {
				Nav.init();
				Preview.init();
				FancyScroll.init();
				PageTrans.init();
			}
		};
	}( Preview || {}, FancyScroll || {}, PageTrans || {} ));

	Initializer.init();

}(window, document));