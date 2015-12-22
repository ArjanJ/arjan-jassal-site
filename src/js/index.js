// document.addEventListener('DOMContentLoaded', function() {
// 	window.addEventListener('scroll', handleScroll);
// });

// var layers = document.querySelector('.layers');
// var layer = document.querySelectorAll('.layer');

// function layersHeight(layers) {
// 	var h = 0;

// 	for (var i = 0; i < layer.length; i++) {
// 		h += parseInt(layer[i].offsetHeight);
// 	}

// 	return h;
// }

// layers.style.height = layersHeight(layer) + 'px';

// window.addEventListener('scroll', handleScroll);


// function handleScroll() {
// 	window.requestAnimationFrame(animateSection);
// }

// function animateSection() {
// 	var scrollAmt = window.pageYOffset;

// 	var transform, transY;

// 	for (var i = 0; i < layer.length; i++) {

// 		transY = (-scrollAmt + (i * layer[i].offsetHeight));

// 		transform = 'translateY(' + transY + 'px)';

// 		minYOffset = i * layer[i].offsetHeight;
// 		maxYOffset = (i * layer[i].offsetHeight) + (layer[i].offsetHeight); 

// 		if (scrollAmt >= minYOffset && scrollAmt <= maxYOffset) {
// 			layer[i].style.transform = transform;
// 		}
// 	}
// }


// function debounce(func, wait, immediate) {
// 	var timeout;
// 	return function() {
// 		var context = this, args = arguments;
// 		var later = function() {
// 			timeout = null;
// 			if (!immediate) func.apply(context, args);
// 		};
// 		var callNow = immediate && !timeout;
// 		clearTimeout(timeout);
// 		timeout = setTimeout(later, wait);
// 		if (callNow) func.apply(context, args);
// 	};
// }