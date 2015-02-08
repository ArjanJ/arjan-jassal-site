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

			if (bg.classList.contains('projects__bg--show')) {
				for (var i = 0, ii = e.name.length; i < ii; i++) {
					e.bgs[i].classList.remove('projects__bg--show');
					e.bgs[i].classList.add('projects__bg--hide');
				}

				bg.classList.add('projects__bg--hide');

				for (var j = 0, jj = e.name.length; j < jj; j++) {
					e.name[j].style.opacity = '1';
				}

			} else {
				bg.classList.remove('projects__bg--hide');
				bg.classList.add('projects__bg--show');

				for (var k = 0, kk = e.name.length; k < kk; k++) {
					e.name[k].style.opacity = '0.2';
				}

				self.style.opacity = '1';
			}
		};

		var events = function() {
			var e = elements;
			for (var i = 0, ii = e.name.length; i < ii; i++) {
				e.name[i].addEventListener('mouseenter', show, false);
				e.name[i].addEventListener('mouseleave', show, false);
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
			homeTitle: document.querySelector('.home__title'),
			projectTitle: document.querySelector('h1.post-header__title')
		};

		var init = function() {
			var e = elements;
			var pageHeight = window.outerHeight;

			window.addEventListener('scroll', function() {

				var scrollPos = window.scrollY;
				var opacity = 1 - (scrollPos/250);
				var trans = 1 + (scrollPos);

				if (scrollPos < pageHeight / 2) {
					if (e.homeTitle) {
						e.homeTitle.style.opacity = opacity;
						e.homeTitle.style.transform = 'translateY(' + trans + 'px)';
					}

					if (e.projectTitle) {
						e.projectTitle.style.opacity = opacity;
						e.projectTitle.style.transform = 'translateY(' + trans + 'px)';
					}
				}

			});
		};

		return {
			init: init
		};

	}());

	var PageTrans = (function() {

		var elements = {
			trigger: document.querySelectorAll('.smooth-trans'),
			body: document.getElementById('body')
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
			var page = [];
			for (var i = 0; i < e.trigger.length; i++) {
				page.push(e.trigger[i].href);
			}

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

	var Initializer = (function( Preview, FancyScroll, PageTrans ) {
		return {
			init: function() {
				Preview.init();
				FancyScroll.init();
				PageTrans.init();
			}
		};
	}( Preview || {}, FancyScroll || {}, PageTrans || {} ));

	Initializer.init();

}(window, document));
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

			if (bg.classList.contains('projects__bg--show')) {
				for (var i = 0, ii = e.name.length; i < ii; i++) {
					e.bgs[i].classList.remove('projects__bg--show');
					e.bgs[i].classList.add('projects__bg--hide');
				}

				bg.classList.add('projects__bg--hide');

				for (var j = 0, jj = e.name.length; j < jj; j++) {
					e.name[j].style.opacity = '1';
				}

			} else {
				bg.classList.remove('projects__bg--hide');
				bg.classList.add('projects__bg--show');

				for (var k = 0, kk = e.name.length; k < kk; k++) {
					e.name[k].style.opacity = '0.2';
				}

				self.style.opacity = '1';
			}
		};

		var events = function() {
			var e = elements;
			for (var i = 0, ii = e.name.length; i < ii; i++) {
				e.name[i].addEventListener('mouseenter', show, false);
				e.name[i].addEventListener('mouseleave', show, false);
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
			homeTitle: document.querySelector('.home__title'),
			projectTitle: document.querySelector('h1.post-header__title')
		};

		var init = function() {
			var e = elements;
			var pageHeight = window.outerHeight;

			window.addEventListener('scroll', function() {

				var scrollPos = window.scrollY;
				var opacity = 1 - (scrollPos/250);
				var trans = 1 + (scrollPos);

				if (scrollPos < pageHeight / 2) {
					if (e.homeTitle) {
						e.homeTitle.style.opacity = opacity;
						e.homeTitle.style.transform = 'translateY(' + trans + 'px)';
					}

					if (e.projectTitle) {
						e.projectTitle.style.opacity = opacity;
						e.projectTitle.style.transform = 'translateY(' + trans + 'px)';
					}
				}

			});
		};

		return {
			init: init
		};

	}());

	var PageTrans = (function() {

		var elements = {
			trigger: document.querySelectorAll('.smooth-trans'),
			body: document.getElementById('body')
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
			var page = [];
			for (var i = 0; i < e.trigger.length; i++) {
				page.push(e.trigger[i].href);
			}

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

	var Initializer = (function( Preview, FancyScroll, PageTrans ) {
		return {
			init: function() {
				Preview.init();
				FancyScroll.init();
				PageTrans.init();
			}
		};
	}( Preview || {}, FancyScroll || {}, PageTrans || {} ));

	Initializer.init();

}(window, document));
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

			if (bg.classList.contains('projects__bg--show')) {
				for (var i = 0, ii = e.name.length; i < ii; i++) {
					e.bgs[i].classList.remove('projects__bg--show');
					e.bgs[i].classList.add('projects__bg--hide');
				}

				bg.classList.add('projects__bg--hide');

				for (var j = 0, jj = e.name.length; j < jj; j++) {
					e.name[j].style.opacity = '1';
				}

			} else {
				bg.classList.remove('projects__bg--hide');
				bg.classList.add('projects__bg--show');

				for (var k = 0, kk = e.name.length; k < kk; k++) {
					e.name[k].style.opacity = '0.2';
				}

				self.style.opacity = '1';
			}
		};

		var events = function() {
			var e = elements;
			for (var i = 0, ii = e.name.length; i < ii; i++) {
				e.name[i].addEventListener('mouseenter', show, false);
				e.name[i].addEventListener('mouseleave', show, false);
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
			homeTitle: document.querySelector('.home__title'),
			projectTitle: document.querySelector('h1.post-header__title')
		};

		var init = function() {
			var e = elements;
			var pageHeight = window.outerHeight;

			window.addEventListener('scroll', function() {

				var scrollPos = window.scrollY;
				var opacity = 1 - (scrollPos/250);
				var trans = 1 + (scrollPos);

				if (scrollPos < pageHeight / 2) {
					if (e.homeTitle) {
						e.homeTitle.style.opacity = opacity;
						e.homeTitle.style.transform = 'translateY(' + trans + 'px)';
					}

					if (e.projectTitle) {
						e.projectTitle.style.opacity = opacity;
						e.projectTitle.style.transform = 'translateY(' + trans + 'px)';
					}
				}

			});
		};

		return {
			init: init
		};

	}());

	var PageTrans = (function() {

		var elements = {
			trigger: document.querySelectorAll('.smooth-trans'),
			body: document.getElementById('body')
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
			var page = [];
			for (var i = 0; i < e.trigger.length; i++) {
				page.push(e.trigger[i].href);
			}

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

	var Initializer = (function( Preview, FancyScroll, PageTrans ) {
		return {
			init: function() {
				Preview.init();
				FancyScroll.init();
				PageTrans.init();
			}
		};
	}( Preview || {}, FancyScroll || {}, PageTrans || {} ));

	Initializer.init();

}(window, document));
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

			if (bg.classList.contains('projects__bg--show')) {
				for (var i = 0, ii = e.name.length; i < ii; i++) {
					e.bgs[i].classList.remove('projects__bg--show');
					e.bgs[i].classList.add('projects__bg--hide');
				}

				bg.classList.add('projects__bg--hide');

				for (var j = 0, jj = e.name.length; j < jj; j++) {
					e.name[j].style.opacity = '1';
				}

			} else {
				bg.classList.remove('projects__bg--hide');
				bg.classList.add('projects__bg--show');

				for (var k = 0, kk = e.name.length; k < kk; k++) {
					e.name[k].style.opacity = '0.2';
				}

				self.style.opacity = '1';
			}
		};

		var events = function() {
			var e = elements;
			for (var i = 0, ii = e.name.length; i < ii; i++) {
				e.name[i].addEventListener('mouseenter', show, false);
				e.name[i].addEventListener('mouseleave', show, false);
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
			homeTitle: document.querySelector('.home__title'),
			projectTitle: document.querySelector('h1.post-header__title')
		};

		var init = function() {
			var e = elements;
			var pageHeight = window.outerHeight;

			window.addEventListener('scroll', function() {

				var scrollPos = window.scrollY;
				var opacity = 1 - (scrollPos/250);
				var trans = 1 + (scrollPos);

				if (scrollPos < pageHeight / 2) {
					if (e.homeTitle) {
						e.homeTitle.style.opacity = opacity;
						e.homeTitle.style.transform = 'translateY(' + trans + 'px)';
					}

					if (e.projectTitle) {
						e.projectTitle.style.opacity = opacity;
						e.projectTitle.style.transform = 'translateY(' + trans + 'px)';
					}
				}

			});
		};

		return {
			init: init
		};

	}());

	var PageTrans = (function() {

		var elements = {
			trigger: document.querySelectorAll('.smooth-trans'),
			body: document.getElementById('body')
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
			var page = [];
			for (var i = 0; i < e.trigger.length; i++) {
				page.push(e.trigger[i].href);
			}

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

	var Initializer = (function( Preview, FancyScroll, PageTrans ) {
		return {
			init: function() {
				Preview.init();
				FancyScroll.init();
				PageTrans.init();
			}
		};
	}( Preview || {}, FancyScroll || {}, PageTrans || {} ));

	Initializer.init();

}(window, document));
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

			if (bg.classList.contains('projects__bg--show')) {
				for (var i = 0, ii = e.name.length; i < ii; i++) {
					e.bgs[i].classList.remove('projects__bg--show');
					e.bgs[i].classList.add('projects__bg--hide');
				}

				bg.classList.add('projects__bg--hide');

				for (var j = 0, jj = e.name.length; j < jj; j++) {
					e.name[j].style.opacity = '1';
				}

			} else {
				bg.classList.remove('projects__bg--hide');
				bg.classList.add('projects__bg--show');

				for (var k = 0, kk = e.name.length; k < kk; k++) {
					e.name[k].style.opacity = '0.2';
				}

				self.style.opacity = '1';
			}
		};

		var events = function() {
			var e = elements;
			for (var i = 0, ii = e.name.length; i < ii; i++) {
				e.name[i].addEventListener('mouseenter', show, false);
				e.name[i].addEventListener('mouseleave', show, false);
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
			homeTitle: document.querySelector('.home__title'),
			projectTitle: document.querySelector('h1.post-header__title')
		};

		var init = function() {
			var e = elements;
			var pageHeight = window.outerHeight;

			window.addEventListener('scroll', function() {

				var scrollPos = window.scrollY;
				var opacity = 1 - (scrollPos/250);
				var trans = 1 + (scrollPos);

				if (scrollPos < pageHeight / 2) {
					if (e.homeTitle) {
						e.homeTitle.style.opacity = opacity;
						e.homeTitle.style.transform = 'translateY(' + trans + 'px)';
					}

					if (e.projectTitle) {
						e.projectTitle.style.opacity = opacity;
						e.projectTitle.style.transform = 'translateY(' + trans + 'px)';
					}
				}

			});
		};

		return {
			init: init
		};

	}());

	var PageTrans = (function() {

		var elements = {
			trigger: document.querySelectorAll('.smooth-trans'),
			body: document.getElementById('body')
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
			var page = [];
			for (var i = 0; i < e.trigger.length; i++) {
				page.push(e.trigger[i].href);
			}

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

	var Initializer = (function( Preview, FancyScroll, PageTrans ) {
		return {
			init: function() {
				Preview.init();
				FancyScroll.init();
				PageTrans.init();
			}
		};
	}( Preview || {}, FancyScroll || {}, PageTrans || {} ));

	Initializer.init();

}(window, document));
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

			if (bg.classList.contains('projects__bg--show')) {
				for (var i = 0, ii = e.name.length; i < ii; i++) {
					e.bgs[i].classList.remove('projects__bg--show');
					e.bgs[i].classList.add('projects__bg--hide');
				}

				bg.classList.add('projects__bg--hide');

				for (var j = 0, jj = e.name.length; j < jj; j++) {
					e.name[j].style.opacity = '1';
				}

			} else {
				bg.classList.remove('projects__bg--hide');
				bg.classList.add('projects__bg--show');

				for (var k = 0, kk = e.name.length; k < kk; k++) {
					e.name[k].style.opacity = '0.2';
				}

				self.style.opacity = '1';
			}
		};

		var events = function() {
			var e = elements;
			for (var i = 0, ii = e.name.length; i < ii; i++) {
				e.name[i].addEventListener('mouseenter', show, false);
				e.name[i].addEventListener('mouseleave', show, false);
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
			homeTitle: document.querySelector('.home__title'),
			projectTitle: document.querySelector('h1.post-header__title')
		};

		var init = function() {
			var e = elements;
			var pageHeight = window.outerHeight;

			window.addEventListener('scroll', function() {

				var scrollPos = window.scrollY;
				var opacity = 1 - (scrollPos/250);
				var trans = 1 + (scrollPos);

				if (scrollPos < pageHeight / 2) {
					if (e.homeTitle) {
						e.homeTitle.style.opacity = opacity;
						e.homeTitle.style.transform = 'translateY(' + trans + 'px)';
					}

					if (e.projectTitle) {
						e.projectTitle.style.opacity = opacity;
						e.projectTitle.style.transform = 'translateY(' + trans + 'px)';
					}
				}

			});
		};

		return {
			init: init
		};

	}());

	var PageTrans = (function() {

		var elements = {
			trigger: document.querySelectorAll('.smooth-trans'),
			body: document.getElementById('body')
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
			var page = [];
			for (var i = 0; i < e.trigger.length; i++) {
				page.push(e.trigger[i].href);
			}

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

	var Initializer = (function( Preview, FancyScroll, PageTrans ) {
		return {
			init: function() {
				Preview.init();
				FancyScroll.init();
				PageTrans.init();
			}
		};
	}( Preview || {}, FancyScroll || {}, PageTrans || {} ));

	Initializer.init();

}(window, document));
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

			if (bg.classList.contains('projects__bg--show')) {
				for (var i = 0, ii = e.name.length; i < ii; i++) {
					e.bgs[i].classList.remove('projects__bg--show');
					e.bgs[i].classList.add('projects__bg--hide');
				}

				bg.classList.add('projects__bg--hide');

				for (var j = 0, jj = e.name.length; j < jj; j++) {
					e.name[j].style.opacity = '1';
				}

			} else {
				bg.classList.remove('projects__bg--hide');
				bg.classList.add('projects__bg--show');

				for (var k = 0, kk = e.name.length; k < kk; k++) {
					e.name[k].style.opacity = '0.2';
				}

				self.style.opacity = '1';
			}
		};

		var events = function() {
			var e = elements;
			for (var i = 0, ii = e.name.length; i < ii; i++) {
				e.name[i].addEventListener('mouseenter', show, false);
				e.name[i].addEventListener('mouseleave', show, false);
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
			homeTitle: document.querySelector('.home__title'),
			projectTitle: document.querySelector('h1.post-header__title')
		};

		var init = function() {
			var e = elements;
			var pageHeight = window.outerHeight;

			window.addEventListener('scroll', function() {

				var scrollPos = window.scrollY;
				var opacity = 1 - (scrollPos/250);
				var trans = 1 + (scrollPos);

				if (scrollPos < pageHeight / 2) {
					if (e.homeTitle) {
						e.homeTitle.style.opacity = opacity;
						e.homeTitle.style.transform = 'translateY(' + trans + 'px)';
					}

					if (e.projectTitle) {
						e.projectTitle.style.opacity = opacity;
						e.projectTitle.style.transform = 'translateY(' + trans + 'px)';
					}
				}

			});
		};

		return {
			init: init
		};

	}());

	var PageTrans = (function() {

		var elements = {
			trigger: document.querySelectorAll('.smooth-trans'),
			body: document.getElementById('body')
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
			var page = [];
			for (var i = 0; i < e.trigger.length; i++) {
				page.push(e.trigger[i].href);
			}

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

	var Initializer = (function( Preview, FancyScroll, PageTrans ) {
		return {
			init: function() {
				Preview.init();
				FancyScroll.init();
				PageTrans.init();
			}
		};
	}( Preview || {}, FancyScroll || {}, PageTrans || {} ));

	Initializer.init();

}(window, document));
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

			if (bg.classList.contains('projects__bg--show')) {
				for (var i = 0, ii = e.name.length; i < ii; i++) {
					e.bgs[i].classList.remove('projects__bg--show');
					e.bgs[i].classList.add('projects__bg--hide');
				}

				bg.classList.add('projects__bg--hide');

				for (var j = 0, jj = e.name.length; j < jj; j++) {
					e.name[j].style.opacity = '1';
				}

			} else {
				bg.classList.remove('projects__bg--hide');
				bg.classList.add('projects__bg--show');

				for (var k = 0, kk = e.name.length; k < kk; k++) {
					e.name[k].style.opacity = '0.2';
				}

				self.style.opacity = '1';
			}
		};

		var events = function() {
			var e = elements;
			for (var i = 0, ii = e.name.length; i < ii; i++) {
				e.name[i].addEventListener('mouseenter', show, false);
				e.name[i].addEventListener('mouseleave', show, false);
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
			homeTitle: document.querySelector('.home__title'),
			projectTitle: document.querySelector('h1.post-header__title')
		};

		var init = function() {
			var e = elements;
			var pageHeight = window.outerHeight;

			window.addEventListener('scroll', function() {

				var scrollPos = window.scrollY;
				var opacity = 1 - (scrollPos/250);
				var trans = 1 + (scrollPos);

				if (scrollPos < pageHeight / 2) {
					if (e.homeTitle) {
						e.homeTitle.style.opacity = opacity;
						e.homeTitle.style.transform = 'translateY(' + trans + 'px)';
					}

					if (e.projectTitle) {
						e.projectTitle.style.opacity = opacity;
						e.projectTitle.style.transform = 'translateY(' + trans + 'px)';
					}
				}

			});
		};

		return {
			init: init
		};

	}());

	var PageTrans = (function() {

		var elements = {
			trigger: document.querySelectorAll('.smooth-trans'),
			body: document.getElementById('body')
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
			var page = [];
			for (var i = 0; i < e.trigger.length; i++) {
				page.push(e.trigger[i].href);
			}

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

	var Initializer = (function( Preview, FancyScroll, PageTrans ) {
		return {
			init: function() {
				Preview.init();
				FancyScroll.init();
				PageTrans.init();
			}
		};
	}( Preview || {}, FancyScroll || {}, PageTrans || {} ));

	Initializer.init();

}(window, document));
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

			if (bg.classList.contains('projects__bg--show')) {
				for (var i = 0, ii = e.name.length; i < ii; i++) {
					e.bgs[i].classList.remove('projects__bg--show');
					e.bgs[i].classList.add('projects__bg--hide');
				}

				bg.classList.add('projects__bg--hide');

				for (var j = 0, jj = e.name.length; j < jj; j++) {
					e.name[j].style.opacity = '1';
				}

			} else {
				bg.classList.remove('projects__bg--hide');
				bg.classList.add('projects__bg--show');

				for (var k = 0, kk = e.name.length; k < kk; k++) {
					e.name[k].style.opacity = '0.2';
				}

				self.style.opacity = '1';
			}
		};

		var events = function() {
			var e = elements;
			for (var i = 0, ii = e.name.length; i < ii; i++) {
				e.name[i].addEventListener('mouseenter', show, false);
				e.name[i].addEventListener('mouseleave', show, false);
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
			homeTitle: document.querySelector('.home__title'),
			projectTitle: document.querySelector('h1.post-header__title')
		};

		var init = function() {
			var e = elements;
			var pageHeight = window.outerHeight;

			window.addEventListener('scroll', function() {

				var scrollPos = window.scrollY;
				var opacity = 1 - (scrollPos/250);
				var trans = 1 + (scrollPos);

				if (scrollPos < pageHeight / 2) {
					if (e.homeTitle) {
						e.homeTitle.style.opacity = opacity;
						e.homeTitle.style.transform = 'translateY(' + trans + 'px)';
					}

					if (e.projectTitle) {
						e.projectTitle.style.opacity = opacity;
						e.projectTitle.style.transform = 'translateY(' + trans + 'px)';
					}
				}

			});
		};

		return {
			init: init
		};

	}());

	var PageTrans = (function() {

		var elements = {
			trigger: document.querySelectorAll('.smooth-trans'),
			body: document.getElementById('body')
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
			var page = [];
			for (var i = 0; i < e.trigger.length; i++) {
				page.push(e.trigger[i].href);
			}

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

	var Initializer = (function( Preview, FancyScroll, PageTrans ) {
		return {
			init: function() {
				Preview.init();
				FancyScroll.init();
				PageTrans.init();
			}
		};
	}( Preview || {}, FancyScroll || {}, PageTrans || {} ));

	Initializer.init();

}(window, document));
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

			if (bg.classList.contains('projects__bg--show')) {
				for (var i = 0, ii = e.name.length; i < ii; i++) {
					e.bgs[i].classList.remove('projects__bg--show');
					e.bgs[i].classList.add('projects__bg--hide');
				}

				bg.classList.add('projects__bg--hide');

				for (var j = 0, jj = e.name.length; j < jj; j++) {
					e.name[j].style.opacity = '1';
				}

			} else {
				bg.classList.remove('projects__bg--hide');
				bg.classList.add('projects__bg--show');

				for (var k = 0, kk = e.name.length; k < kk; k++) {
					e.name[k].style.opacity = '0.2';
				}

				self.style.opacity = '1';
			}
		};

		var events = function() {
			var e = elements;
			for (var i = 0, ii = e.name.length; i < ii; i++) {
				e.name[i].addEventListener('mouseenter', show, false);
				e.name[i].addEventListener('mouseleave', show, false);
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
			homeTitle: document.querySelector('.home__title'),
			projectTitle: document.querySelector('h1.post-header__title')
		};

		var init = function() {
			var e = elements;
			var pageHeight = window.outerHeight;

			window.addEventListener('scroll', function() {

				var scrollPos = window.scrollY;
				var opacity = 1 - (scrollPos/250);
				var trans = 1 + (scrollPos);

				if (scrollPos < pageHeight / 2) {
					if (e.homeTitle) {
						e.homeTitle.style.opacity = opacity;
						e.homeTitle.style.transform = 'translateY(' + trans + 'px)';
					}

					if (e.projectTitle) {
						e.projectTitle.style.opacity = opacity;
						e.projectTitle.style.transform = 'translateY(' + trans + 'px)';
					}
				}

			});
		};

		return {
			init: init
		};

	}());

	var PageTrans = (function() {

		var elements = {
			trigger: document.querySelectorAll('.smooth-trans'),
			body: document.getElementById('body')
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
			var page = [];
			for (var i = 0; i < e.trigger.length; i++) {
				page.push(e.trigger[i].href);
			}

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

	var Initializer = (function( Preview, FancyScroll, PageTrans ) {
		return {
			init: function() {
				Preview.init();
				FancyScroll.init();
				PageTrans.init();
			}
		};
	}( Preview || {}, FancyScroll || {}, PageTrans || {} ));

	Initializer.init();

}(window, document));
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

			if (bg.classList.contains('projects__bg--show')) {
				for (var i = 0, ii = e.name.length; i < ii; i++) {
					e.bgs[i].classList.remove('projects__bg--show');
					e.bgs[i].classList.add('projects__bg--hide');
				}

				bg.classList.add('projects__bg--hide');

				for (var j = 0, jj = e.name.length; j < jj; j++) {
					e.name[j].style.opacity = '1';
				}

			} else {
				bg.classList.remove('projects__bg--hide');
				bg.classList.add('projects__bg--show');

				for (var k = 0, kk = e.name.length; k < kk; k++) {
					e.name[k].style.opacity = '0.2';
				}

				self.style.opacity = '1';
			}
		};

		var events = function() {
			var e = elements;
			for (var i = 0, ii = e.name.length; i < ii; i++) {
				e.name[i].addEventListener('mouseenter', show, false);
				e.name[i].addEventListener('mouseleave', show, false);
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
			homeTitle: document.querySelector('.home__title'),
			projectTitle: document.querySelector('h1.post-header__title')
		};

		var init = function() {
			var e = elements;
			var pageHeight = window.outerHeight;

			window.addEventListener('scroll', function() {

				var scrollPos = window.scrollY;
				var opacity = 1 - (scrollPos/250);
				var trans = 1 + (scrollPos);

				if (scrollPos < pageHeight / 2) {
					if (e.homeTitle) {
						e.homeTitle.style.opacity = opacity;
						e.homeTitle.style.transform = 'translateY(' + trans + 'px)';
					}

					if (e.projectTitle) {
						e.projectTitle.style.opacity = opacity;
						e.projectTitle.style.transform = 'translateY(' + trans + 'px)';
					}
				}

			});
		};

		return {
			init: init
		};

	}());

	var PageTrans = (function() {

		var elements = {
			trigger: document.querySelectorAll('.smooth-trans'),
			body: document.getElementById('body')
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
			var page = [];
			for (var i = 0; i < e.trigger.length; i++) {
				page.push(e.trigger[i].href);
			}

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

	var Initializer = (function( Preview, FancyScroll, PageTrans ) {
		return {
			init: function() {
				Preview.init();
				FancyScroll.init();
				PageTrans.init();
			}
		};
	}( Preview || {}, FancyScroll || {}, PageTrans || {} ));

	Initializer.init();

}(window, document));
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

			if (bg.classList.contains('projects__bg--show')) {
				for (var i = 0, ii = e.name.length; i < ii; i++) {
					e.bgs[i].classList.remove('projects__bg--show');
					e.bgs[i].classList.add('projects__bg--hide');
				}

				bg.classList.add('projects__bg--hide');

				for (var j = 0, jj = e.name.length; j < jj; j++) {
					e.name[j].style.opacity = '1';
				}

			} else {
				bg.classList.remove('projects__bg--hide');
				bg.classList.add('projects__bg--show');

				for (var k = 0, kk = e.name.length; k < kk; k++) {
					e.name[k].style.opacity = '0.2';
				}

				self.style.opacity = '1';
			}
		};

		var events = function() {
			var e = elements;
			for (var i = 0, ii = e.name.length; i < ii; i++) {
				e.name[i].addEventListener('mouseenter', show, false);
				e.name[i].addEventListener('mouseleave', show, false);
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
			homeTitle: document.querySelector('.home__title'),
			projectTitle: document.querySelector('h1.post-header__title')
		};

		var init = function() {
			var e = elements;
			var pageHeight = window.outerHeight;

			window.addEventListener('scroll', function() {

				var scrollPos = window.scrollY;
				var opacity = 1 - (scrollPos/250);
				var trans = 1 + (scrollPos);

				if (scrollPos < pageHeight / 2) {
					if (e.homeTitle) {
						e.homeTitle.style.opacity = opacity;
						e.homeTitle.style.transform = 'translateY(' + trans + 'px)';
					}

					if (e.projectTitle) {
						e.projectTitle.style.opacity = opacity;
						e.projectTitle.style.transform = 'translateY(' + trans + 'px)';
					}
				}

			});
		};

		return {
			init: init
		};

	}());

	var PageTrans = (function() {

		var elements = {
			trigger: document.querySelectorAll('.smooth-trans'),
			body: document.getElementById('body')
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
			var page = [];
			for (var i = 0; i < e.trigger.length; i++) {
				page.push(e.trigger[i].href);
			}

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

	var Initializer = (function( Preview, FancyScroll, PageTrans ) {
		return {
			init: function() {
				Preview.init();
				FancyScroll.init();
				PageTrans.init();
			}
		};
	}( Preview || {}, FancyScroll || {}, PageTrans || {} ));

	Initializer.init();

}(window, document));
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

			if (bg.classList.contains('projects__bg--show')) {
				for (var i = 0, ii = e.name.length; i < ii; i++) {
					e.bgs[i].classList.remove('projects__bg--show');
					e.bgs[i].classList.add('projects__bg--hide');
				}

				bg.classList.add('projects__bg--hide');

				for (var j = 0, jj = e.name.length; j < jj; j++) {
					e.name[j].style.opacity = '1';
				}

			} else {
				bg.classList.remove('projects__bg--hide');
				bg.classList.add('projects__bg--show');

				for (var k = 0, kk = e.name.length; k < kk; k++) {
					e.name[k].style.opacity = '0.2';
				}

				self.style.opacity = '1';
			}
		};

		var events = function() {
			var e = elements;
			for (var i = 0, ii = e.name.length; i < ii; i++) {
				e.name[i].addEventListener('mouseenter', show, false);
				e.name[i].addEventListener('mouseleave', show, false);
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
			homeTitle: document.querySelector('.home__title'),
			projectTitle: document.querySelector('h1.post-header__title')
		};

		var init = function() {
			var e = elements;
			var pageHeight = window.outerHeight;

			window.addEventListener('scroll', function() {

				var scrollPos = window.scrollY;
				var opacity = 1 - (scrollPos/250);
				var trans = 1 + (scrollPos);

				if (scrollPos < pageHeight / 2) {
					if (e.homeTitle) {
						e.homeTitle.style.opacity = opacity;
						e.homeTitle.style.transform = 'translateY(' + trans + 'px)';
					}

					if (e.projectTitle) {
						e.projectTitle.style.opacity = opacity;
						e.projectTitle.style.transform = 'translateY(' + trans + 'px)';
					}
				}

			});
		};

		return {
			init: init
		};

	}());

	var PageTrans = (function() {

		var elements = {
			trigger: document.querySelectorAll('.smooth-trans'),
			body: document.getElementById('body')
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
			var page = [];
			for (var i = 0; i < e.trigger.length; i++) {
				page.push(e.trigger[i].href);
			}

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

	var Initializer = (function( Preview, FancyScroll, PageTrans ) {
		return {
			init: function() {
				Preview.init();
				FancyScroll.init();
				PageTrans.init();
			}
		};
	}( Preview || {}, FancyScroll || {}, PageTrans || {} ));

	Initializer.init();

}(window, document));
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

			if (bg.classList.contains('projects__bg--show')) {
				for (var i = 0, ii = e.name.length; i < ii; i++) {
					e.bgs[i].classList.remove('projects__bg--show');
					e.bgs[i].classList.add('projects__bg--hide');
				}

				bg.classList.add('projects__bg--hide');

				for (var j = 0, jj = e.name.length; j < jj; j++) {
					e.name[j].style.opacity = '1';
				}

			} else {
				bg.classList.remove('projects__bg--hide');
				bg.classList.add('projects__bg--show');

				for (var k = 0, kk = e.name.length; k < kk; k++) {
					e.name[k].style.opacity = '0.2';
				}

				self.style.opacity = '1';
			}
		};

		var events = function() {
			var e = elements;
			for (var i = 0, ii = e.name.length; i < ii; i++) {
				e.name[i].addEventListener('mouseenter', show, false);
				e.name[i].addEventListener('mouseleave', show, false);
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
			homeTitle: document.querySelector('.home__title'),
			projectTitle: document.querySelector('h1.post-header__title')
		};

		var init = function() {
			var e = elements;
			var pageHeight = window.outerHeight;

			window.addEventListener('scroll', function() {

				var scrollPos = window.scrollY;
				var opacity = 1 - (scrollPos/250);
				var trans = 1 + (scrollPos);

				if (scrollPos < pageHeight / 2) {
					if (e.homeTitle) {
						e.homeTitle.style.opacity = opacity;
						e.homeTitle.style.transform = 'translateY(' + trans + 'px)';
					}

					if (e.projectTitle) {
						e.projectTitle.style.opacity = opacity;
						e.projectTitle.style.transform = 'translateY(' + trans + 'px)';
					}
				}

			});
		};

		return {
			init: init
		};

	}());

	var PageTrans = (function() {

		var elements = {
			trigger: document.querySelectorAll('.smooth-trans'),
			body: document.getElementById('body')
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
			var page = [];
			for (var i = 0; i < e.trigger.length; i++) {
				page.push(e.trigger[i].href);
			}

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

	var Initializer = (function( Preview, FancyScroll, PageTrans ) {
		return {
			init: function() {
				Preview.init();
				FancyScroll.init();
				PageTrans.init();
			}
		};
	}( Preview || {}, FancyScroll || {}, PageTrans || {} ));

	Initializer.init();

}(window, document));
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

			if (bg.classList.contains('projects__bg--show')) {
				for (var i = 0, ii = e.name.length; i < ii; i++) {
					e.bgs[i].classList.remove('projects__bg--show');
					e.bgs[i].classList.add('projects__bg--hide');
				}

				bg.classList.add('projects__bg--hide');

				for (var j = 0, jj = e.name.length; j < jj; j++) {
					e.name[j].style.opacity = '1';
				}

			} else {
				bg.classList.remove('projects__bg--hide');
				bg.classList.add('projects__bg--show');

				for (var k = 0, kk = e.name.length; k < kk; k++) {
					e.name[k].style.opacity = '0.2';
				}

				self.style.opacity = '1';
			}
		};

		var events = function() {
			var e = elements;
			for (var i = 0, ii = e.name.length; i < ii; i++) {
				e.name[i].addEventListener('mouseenter', show, false);
				e.name[i].addEventListener('mouseleave', show, false);
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
			homeTitle: document.querySelector('.home__title'),
			projectTitle: document.querySelector('h1.post-header__title')
		};

		var init = function() {
			var e = elements;
			var pageHeight = window.outerHeight;

			window.addEventListener('scroll', function() {

				var scrollPos = window.scrollY;
				var opacity = 1 - (scrollPos/250);
				var trans = 1 + (scrollPos);

				if (scrollPos < pageHeight / 2) {
					if (e.homeTitle) {
						e.homeTitle.style.opacity = opacity;
						e.homeTitle.style.transform = 'translateY(' + trans + 'px)';
					}

					if (e.projectTitle) {
						e.projectTitle.style.opacity = opacity;
						e.projectTitle.style.transform = 'translateY(' + trans + 'px)';
					}
				}

			});
		};

		return {
			init: init
		};

	}());

	var PageTrans = (function() {

		var elements = {
			trigger: document.querySelectorAll('.smooth-trans'),
			body: document.getElementById('body')
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
			var page = [];
			for (var i = 0; i < e.trigger.length; i++) {
				page.push(e.trigger[i].href);
			}

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

	var Initializer = (function( Preview, FancyScroll, PageTrans ) {
		return {
			init: function() {
				Preview.init();
				FancyScroll.init();
				PageTrans.init();
			}
		};
	}( Preview || {}, FancyScroll || {}, PageTrans || {} ));

	Initializer.init();

}(window, document));
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

			if (bg.classList.contains('projects__bg--show')) {
				for (var i = 0, ii = e.name.length; i < ii; i++) {
					e.bgs[i].classList.remove('projects__bg--show');
					e.bgs[i].classList.add('projects__bg--hide');
				}

				bg.classList.add('projects__bg--hide');

				for (var j = 0, jj = e.name.length; j < jj; j++) {
					e.name[j].style.opacity = '1';
				}

			} else {
				bg.classList.remove('projects__bg--hide');
				bg.classList.add('projects__bg--show');

				for (var k = 0, kk = e.name.length; k < kk; k++) {
					e.name[k].style.opacity = '0.2';
				}

				self.style.opacity = '1';
			}
		};

		var events = function() {
			var e = elements;
			for (var i = 0, ii = e.name.length; i < ii; i++) {
				e.name[i].addEventListener('mouseenter', show, false);
				e.name[i].addEventListener('mouseleave', show, false);
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
			homeTitle: document.querySelector('.home__title'),
			projectTitle: document.querySelector('h1.post-header__title')
		};

		var init = function() {
			var e = elements;
			var pageHeight = window.outerHeight;

			window.addEventListener('scroll', function() {

				var scrollPos = window.scrollY;
				var opacity = 1 - (scrollPos/250);
				var trans = 1 + (scrollPos);

				if (scrollPos < pageHeight / 2) {
					if (e.homeTitle) {
						e.homeTitle.style.opacity = opacity;
						e.homeTitle.style.transform = 'translateY(' + trans + 'px)';
					}

					if (e.projectTitle) {
						e.projectTitle.style.opacity = opacity;
						e.projectTitle.style.transform = 'translateY(' + trans + 'px)';
					}
				}

			});
		};

		return {
			init: init
		};

	}());

	var PageTrans = (function() {

		var elements = {
			trigger: document.querySelectorAll('.smooth-trans'),
			body: document.getElementById('body')
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
			var page = [];
			for (var i = 0; i < e.trigger.length; i++) {
				page.push(e.trigger[i].href);
			}

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

	var Initializer = (function( Preview, FancyScroll, PageTrans ) {
		return {
			init: function() {
				Preview.init();
				FancyScroll.init();
				PageTrans.init();
			}
		};
	}( Preview || {}, FancyScroll || {}, PageTrans || {} ));

	Initializer.init();

}(window, document));
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

			if (bg.classList.contains('projects__bg--show')) {
				for (var i = 0, ii = e.name.length; i < ii; i++) {
					e.bgs[i].classList.remove('projects__bg--show');
					e.bgs[i].classList.add('projects__bg--hide');
				}

				bg.classList.add('projects__bg--hide');

				for (var j = 0, jj = e.name.length; j < jj; j++) {
					e.name[j].style.opacity = '1';
				}

			} else {
				bg.classList.remove('projects__bg--hide');
				bg.classList.add('projects__bg--show');

				for (var k = 0, kk = e.name.length; k < kk; k++) {
					e.name[k].style.opacity = '0.2';
				}

				self.style.opacity = '1';
			}
		};

		var events = function() {
			var e = elements;
			for (var i = 0, ii = e.name.length; i < ii; i++) {
				e.name[i].addEventListener('mouseenter', show, false);
				e.name[i].addEventListener('mouseleave', show, false);
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
			homeTitle: document.querySelector('.home__title'),
			projectTitle: document.querySelector('h1.post-header__title')
		};

		var init = function() {
			var e = elements;
			var pageHeight = window.outerHeight;

			window.addEventListener('scroll', function() {

				var scrollPos = window.scrollY;
				var opacity = 1 - (scrollPos/250);
				var trans = 1 + (scrollPos);

				if (scrollPos < pageHeight / 2) {
					if (e.homeTitle) {
						e.homeTitle.style.opacity = opacity;
						e.homeTitle.style.transform = 'translateY(' + trans + 'px)';
					}

					if (e.projectTitle) {
						e.projectTitle.style.opacity = opacity;
						e.projectTitle.style.transform = 'translateY(' + trans + 'px)';
					}
				}

			});
		};

		return {
			init: init
		};

	}());

	var PageTrans = (function() {

		var elements = {
			trigger: document.querySelectorAll('.smooth-trans'),
			body: document.getElementById('body')
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
			var page = [];
			for (var i = 0; i < e.trigger.length; i++) {
				page.push(e.trigger[i].href);
			}

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

	var Initializer = (function( Preview, FancyScroll, PageTrans ) {
		return {
			init: function() {
				Preview.init();
				FancyScroll.init();
				PageTrans.init();
			}
		};
	}( Preview || {}, FancyScroll || {}, PageTrans || {} ));

	Initializer.init();

}(window, document));