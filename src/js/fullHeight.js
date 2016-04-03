var fullHeight = (function() {
	var ua = navigator.userAgent;
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

		// Do not want to set height on resize on mobile device because it janks when the address bar hides.
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(ua)) {
			return;
		} else {
			setHeight();
		}
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