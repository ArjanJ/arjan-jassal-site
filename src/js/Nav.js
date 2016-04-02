var Nav = (function() {
	var hamburger = document.querySelector('button.c-hamburger');
	var nav = document.querySelector('nav.nav');
	var navItems = [].slice.call(nav.querySelectorAll('li.nav__item'));
	var navLinks = [].slice.call(nav.querySelectorAll('[data-link]'));

	function toggleNav(event) {
		event.preventDefault();

		hamburger.classList.toggle('c-hamburger--close');
		nav.classList.toggle('nav--active');
		setTimeout(function() {
			navItems.map(function(item) {
				return item.classList.toggle('nav__item--active');
			});
		}, 75);

		setAriaAttributes();
	}

	function init() {
		hamburger.addEventListener('click', toggleNav);

		navLinks.forEach(function(link) {
			link.addEventListener('click', toggleNav);
		});
	}

	function setAriaAttributes() {
		if (hamburger && nav) {
			if (nav.classList.contains('nav--active')) {
				hamburger.setAttribute('aria-expanded', 'true');
				nav.setAttribute('aria-hidden', 'false');
			} else {
				hamburger.setAttribute('aria-expanded', 'false');
				nav.setAttribute('aria-hidden', 'true');
			}
		}
	}

	return {
		init: init
	};

}());

module.exports = Nav;