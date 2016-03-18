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

	var lists = [].slice.call(document.querySelectorAll('.work__list-item'));

	function init() {
		window.addEventListener('scroll', handleScroll);
	}

	function handleScroll() {
		window.requestAnimationFrame(animation);
	}

	function animation() {
		var scrolled = window.pageYOffset;

		var offsets = lists.map(function(x) {
			return x.getBoundingClientRect();
		});

		lists.forEach(function(list, i) {
			var topVis = (offsets[i].top >= 0) && (offsets[i].top < window.innerHeight + 150);
			var bottomVis = (offsets[i].bottom > 0) && (offsets[i].bottom <= window.innerHeight + 150);

			if (topVis || bottomVis) {
				list.classList.add('active');
			} else {
				list.classList.remove('active');
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