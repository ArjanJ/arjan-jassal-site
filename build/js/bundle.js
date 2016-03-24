(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var HeadingScrollAnimation = (function() {

	var heading = document.querySelector('h1.home__heading');

	function init() {
		window.addEventListener('scroll', handleScroll);
	}

	function handleScroll() {
		if (window.pageYOffset < window.innerHeight)
			window.requestAnimationFrame(animation);
	}

	function animation() {
		var scrolled		= window.pageYOffset;
		var translateY	= scrolled / 2;
		var opacity			= 1 - (scrolled / 700);

		heading.style.transform = 'translateY(' + translateY + 'px)';
		heading.style.opacity = opacity;
	}

	return {
		init: init
	};

}());

module.exports = HeadingScrollAnimation;
},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
(function() {

  'use strict';

  // Feature Test
  if ('querySelector' in document && 'addEventListener' in window && Array.prototype.forEach) {

    // Function to animate the scroll
    var smoothScroll = function(anchor, duration) {

      // Calculate how far and how fast to scroll
      var startLocation = window.pageYOffset;
      var endLocation = anchor.offsetTop;
      var distance = endLocation - startLocation;
      var increments = distance / (duration / 25);
      var stopAnimation;

      // Scroll the page by an increment, and check if it's time to stop
      var animateScroll = function() {
        window.scrollBy(0, increments);
        stopAnimation();
      };

      // If scrolling down
      if (increments >= 0) {
        // Stop animation when you reach the anchor OR the bottom of the page
        stopAnimation = function() {
          var travelled = window.pageYOffset;
          if ((travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight)) {
            clearInterval(runAnimation);
          }
        };
      }
      // If scrolling up
      else {
        // Stop animation when you reach the anchor OR the top of the page
        stopAnimation = function() {
          var travelled = window.pageYOffset;
          if (travelled <= (endLocation || 0)) {
            clearInterval(runAnimation);
          }
        };
      }

      // Loop the animation function
      var runAnimation = setInterval(animateScroll, 16);

    };

    // Define smooth scroll links
    var scrollToggle = document.querySelectorAll('.js-scroll');

    // For each smooth scroll link
    [].forEach.call(scrollToggle, function(toggle) {

      // When the smooth scroll link is clicked
      toggle.addEventListener('click', function(e) {

        // Prevent the default link behavior
        e.preventDefault();

        // Get anchor link and calculate distance from the top
        var dataID = toggle.getAttribute('href');
        var dataTarget = document.querySelector(dataID);
        var dataSpeed = toggle.getAttribute('data-speed');

        // If the anchor exists
        if (dataTarget) {
          // Scroll to the anchor
          smoothScroll(dataTarget, dataSpeed || 400);
        }

      }, false);

    });

  }

})();
},{}],4:[function(require,module,exports){
var isInViewport = require('./isInViewport');

var addClassWhenInViewport = (function() {
	var elements = [].slice.call(document.querySelectorAll('[data-add-class]'));
	var w = window;

	function init() {
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('load', handleScroll);
	}

	function handleScroll() {
		window.requestAnimationFrame(animation);
	}

	function animation() {
		elements.forEach(function(el) {
			if (isInViewport(el, el.getAttribute('data-add-class-offset') || 0)) {
				el.classList.add(el.getAttribute('data-add-class'));
			}
		});
	}

	return {
		init: init
	};
}());

module.exports = addClassWhenInViewport;
},{"./isInViewport":6}],5:[function(require,module,exports){
var HeadingScrollAnimation = require('./HeadingScrollAnimation');
var SmoothScroll = require('./SmoothScroll');
var Nav = require('./Nav');
var addClassWhenInViewport = require('./addClassWhenInViewport');

document.addEventListener('DOMContentLoaded', function() {
	HeadingScrollAnimation.init();
	Nav.init();
	addClassWhenInViewport.init();
});
},{"./HeadingScrollAnimation":1,"./Nav":2,"./SmoothScroll":3,"./addClassWhenInViewport":4}],6:[function(require,module,exports){
function isInViewport(element, offset) {
	offset = offset ? offset : 0;
	var elOffset = element.getBoundingClientRect();

	var topVis = (elOffset.top >= 0 && elOffset.top < window.innerHeight - offset);
	var bottomVis = (elOffset.bottom > 0 && elOffset.bottom <= window.innerHeight - offset);

	if (topVis || bottomVis) return true;
	return false;
}

module.exports = isInViewport;
},{}]},{},[5]);
