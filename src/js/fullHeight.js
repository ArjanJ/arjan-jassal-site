var fullHeight = (function() {
	var elems = document.querySelectorAll('[data-full-height]');
	var wh = window.innerHeight;

	function init() {
		for (var i = 0; i < elems.length; i++) {
			elems[i].style.minHeight = wh + 'px';
		}
	}

	return {
		init: init
	};
}());

module.exports = fullHeight;