var HeadingScrollAnimation = require('./HeadingScrollAnimation');
var SmoothScroll = require('./SmoothScroll');
var Nav = require('./Nav');
var addClassWhenInViewport = require('./addClassWhenInViewport');
var ExpandProject = require('./ExpandProject');

document.addEventListener('DOMContentLoaded', function() {
	HeadingScrollAnimation.init();
	Nav.init();
	addClassWhenInViewport.init();
	ExpandProject.init();
});