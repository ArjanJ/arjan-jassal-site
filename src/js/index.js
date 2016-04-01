var HeadingScrollAnimation = require('./HeadingScrollAnimation');
var SmoothScroll = require('smooth-scroll');
var Nav = require('./Nav');
var addClassWhenInViewport = require('./addClassWhenInViewport');
var ExpandProject = require('./ExpandProject');
var HeaderScroll = require('./HeaderScroll');
var fullHeight = require('./fullHeight');

document.addEventListener('DOMContentLoaded', function() {
	HeadingScrollAnimation.init();
	Nav.init();
	addClassWhenInViewport.init();
	ExpandProject.init();
	SmoothScroll.init({
		speed: 500,
		offset: 54
	});
	HeaderScroll.init();
	fullHeight.init();
});