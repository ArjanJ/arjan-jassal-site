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

	Preview.init();

}(window, document));