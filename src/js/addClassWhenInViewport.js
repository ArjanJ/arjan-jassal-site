var isInViewport = require('./isInViewport');

var addClassWhenInViewport = (function() {
	var elements = [].slice.call(document.querySelectorAll('[data-add-class]'));
	var w = window;

	function init() {
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('load', handleScroll);
	}

	function handleScroll() {
		window.requestAnimationFrame(animation);
	}

	function animation() {
		elements.forEach(function(el) {
			if (isInViewport(el, el.getAttribute('data-add-class-offset') || 0)) {
				el.classList.add(el.getAttribute('data-add-class'));
			}
		});
	}

	return {
		init: init
	};
}());

module.exports = addClassWhenInViewport;