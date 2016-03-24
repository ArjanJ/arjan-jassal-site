var HeadingScrollAnimation = require('./HeadingScrollAnimation');
var SmoothScroll = require('./SmoothScroll');
var Nav = require('./Nav');

var WorkScrollAnimation = (function() {

	var items = [].slice.call(document.querySelectorAll('.work__item'));

	function init() {
		window.addEventListener('scroll', handleScroll);
	}

	function handleScroll() {
		window.requestAnimationFrame(animation);
	}

	function animation() {
		var scrolled = window.pageYOffset;

		var offsets = items.map(function(x) {
			return x.getBoundingClientRect();
		});

		items.forEach(function(item, i) {
			var topVis = (offsets[i].top >= 0) && (offsets[i].top < window.innerHeight - 50);
			var bottomVis = (offsets[i].bottom > 0) && (offsets[i].bottom <= window.innerHeight - 50);

			if (topVis || bottomVis) {
				item.classList.add('work__item--active');
			}
		});
	}

	return {
		init: init
	};

}());


document.addEventListener('DOMContentLoaded', function() {
	HeadingScrollAnimation.init();
	WorkScrollAnimation.init();
	Nav.init();
});