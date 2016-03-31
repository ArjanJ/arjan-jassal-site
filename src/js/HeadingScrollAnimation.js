var HeadingScrollAnimation = (function() {

	var heading = document.querySelector('.home__wrapper');

	function init() {
		if (window.innerWidth >= 768)
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

module.exports = HeadingScrollAnimation;