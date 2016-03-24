var HeadingScrollAnimation = require('./HeadingScrollAnimation');
var SmoothScroll = require('./SmoothScroll');
var Nav = require('./Nav');
var addClassWhenInViewport = require('./addClassWhenInViewport');

document.addEventListener('DOMContentLoaded', function() {
	HeadingScrollAnimation.init();
	Nav.init();
	addClassWhenInViewport.init();
});