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
		var translateY	= scrolled / 3;
		var opacity			= 1 - (scrolled / 600);

		heading.style.transform = 'translateY(' + translateY + 'px)';
		heading.style.opacity = opacity;
	}

	return {
		init: init
	};

}());


document.addEventListener('DOMContentLoaded', function() {
	HeadingScrollAnimation.init();
});