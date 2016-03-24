var Nav = (function() {
	var hamburger = document.querySelector('button.c-hamburger');
	var nav = document.querySelector('nav.nav');
	var navItems = [].slice.call(nav.querySelectorAll('li.nav__item'));
	var navLinks = [].slice.call(nav.querySelectorAll('[data-link]'));

	function toggleNav() {
		hamburger.classList.toggle('c-hamburger--close');
		nav.classList.toggle('nav--active');
		setTimeout(function() {
			navItems.map(function(item) {
				return item.classList.toggle('nav__item--active');
			});
		}, 75);
	}

	function init() {
		hamburger.addEventListener('click', toggleNav);

		navLinks.forEach(function(link) {
			link.addEventListener('click', toggleNav);
		});
	}

	return {
		init: init
	};

}());

module.exports = Nav;