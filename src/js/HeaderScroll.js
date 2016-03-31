var HeaderScroll = (function() {
	var header = document.querySelector('header.header');
	var headerHeight = header.offsetHeight;
	var headerScrolledClass = 'header--scrolled';

	function init() {
		window.addEventListener('scroll', handleScroll);
	}

	function handleScroll() {
		window.requestAnimationFrame(animation);
	}

	function animation() {
		var scrolled = window.pageYOffset;
		var wh = window.innerHeight - headerHeight;

		if (scrolled > wh && !(header.classList.contains(headerScrolledClass))) {
			header.classList.add(headerScrolledClass);
		}

		if (scrolled < wh && header.classList.contains(headerScrolledClass)) {
			header.classList.remove(headerScrolledClass);
		}
	}

	return {
		init: init
	};
}());

module.exports = HeaderScroll;