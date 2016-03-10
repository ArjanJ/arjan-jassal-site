(function() {

	var header = document.querySelector('[data-header]');
	var wh = window.innerHeight;

	window.addEventListener('scroll', onScroll);

	function onScroll() {
		var scrollAmt = window.pageYOffset;

		if (scrollAmt >= header.offsetHeight) {
			header.classList.add('header--scrolled');
		}

		if (scrollAmt < header.offsetHeight) {
			header.classList.remove('header--scrolled');
		}
	}

}());