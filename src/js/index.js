var HeadingScrollAnimation = (function() {

	var heading = document.querySelector('h1.home__heading');

	function init() {
		window.addEventListener('scroll', handleScroll);
	}

	function handleScroll() {
		if (window.pageYOffset < window.innerHeight)
			window.requestAnimationFrame(animation);
	}

	function animation() {
		var scrolled		= window.pageYOffset;
		var translateY	= scrolled / 2;
		var opacity			= 1 - (scrolled / 700);

		heading.style.transform = 'translateY(' + translateY + 'px)';
		heading.style.opacity = opacity;
	}

	return {
		init: init
	};

}());

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
});