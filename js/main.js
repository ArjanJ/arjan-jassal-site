(function(window, document, undefined) {

	'use strict';

	var Preview = (function() {

		var elements = {
			name: document.querySelectorAll('h1.projects__title')
		};

		var show = function() {
			var e = elements;
			var self = this;
			var project = self.dataset.project;
			var bg = document.getElementById(project);

			if (bg.classList.contains('project__bg--show')) {
				bg.classList.remove('project__bg--show');

				for (var i = 0, ii = e.name.length; i < ii; i++) {
					e.name[i].style.opacity = '1';
				}
			} else {
				bg.classList.add('project__bg--show');

				for (var j = 0, jj = e.name.length; j < jj; j++) {
					e.name[j].style.opacity = '0';
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
			init: init
		};

	}());

	Preview.init();

}(window, document));