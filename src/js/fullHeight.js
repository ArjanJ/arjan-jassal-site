var fullHeight = (function() {
	var elems = document.querySelectorAll('[data-full-height]');

	function init() {
		setHeight();
		window.addEventListener('resize', debounce(handleResize, 200));
	}

	function setHeight() {
		var wh = window.innerHeight;

		for (var i = 0; i < elems.length; i++) {
			elems[i].style.minHeight = wh + 'px';
		}
	}

	function handleResize() {
		setHeight();
	}

	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}

	return {
		init: init
	};
}());

module.exports = fullHeight;