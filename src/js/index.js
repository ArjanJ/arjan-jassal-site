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

var WorkScrollAnimation = (function() {

	var items = [].slice.call(document.querySelectorAll('.work__item'));

	function init() {
		window.addEventListener('scroll', handleScroll);
	}

	function handleScroll() {
		window.requestAnimationFrame(animation);
	}

	function animation() {
		var scrolled = window.pageYOffset;

		var offsets = items.map(function(x) {
			return x.getBoundingClientRect();
		});

		items.forEach(function(item, i) {
			var topVis = (offsets[i].top >= 0) && (offsets[i].top < window.innerHeight - 50);
			var bottomVis = (offsets[i].bottom > 0) && (offsets[i].bottom <= window.innerHeight - 50);

			if (topVis || bottomVis) {
				item.classList.add('work__item--active');
			}
		});
	}

	return {
		init: init
	};

}());

var Nav = (function() {
	var hamburger = document.querySelector('button.c-hamburger');
	var nav = document.querySelector('nav.nav');
	var navItems = [].slice.call(nav.querySelectorAll('li.nav__item'));
	var navLinks = [].slice.call(nav.querySelectorAll('[data-link]'));

	hamburger.addEventListener('click', toggleNav);

	navLinks.forEach(function(link) {
		link.addEventListener('click', toggleNav);
	});

	function toggleNav() {
		hamburger.classList.toggle('c-hamburger--close');
		nav.classList.toggle('nav--active');
		setTimeout(function() {
			navItems.map(function(item) {
				return item.classList.toggle('nav__item--active');
			});
		}, 75);
	}
}());

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

document.addEventListener('DOMContentLoaded', function() {
	HeadingScrollAnimation.init();
	WorkScrollAnimation.init();
});