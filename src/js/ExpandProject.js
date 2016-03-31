var ExpandProject = (function(window, document) {

	var data = require('./workData');

	var workComponents = {
		items: 	$$('.work__item'),
		bgs: 		$$('.work__item-bg'),
		activeItem: {},
		activeBg: {}
	};

	var detailComponents = {
		title: 				$('[data-work-title]'),
		client: 			$('[data-work-client]'),
		whatIDid: 		$('[data-work-what-i-did]'),
		tagline: 			$('[data-work-tagline]'),
		description: 	$('[data-work-description]'),
		github: 			$('[data-work-github]'),
		live: 				$('[data-work-live]'),
		tech: 				$('[data-work-tech]'),
		process: 			$('[data-work-process]'),
		closeBtn: 		$('.work__details-close'),
		container: 		$('.work__details')
	};

	function $(query) {
		return document.querySelector(query);
	}

	function $$(query) {
		return [].slice.call(document.querySelectorAll(query));
	}

	function init() {
		workComponents.items.forEach(function(item, index) {
			item.addEventListener('click', handleClick.bind(null, index));
		});
		detailComponents.closeBtn.addEventListener('click', close);
	}

	function updateComponents(work) {
		detailComponents.title.innerHTML = data[work].title;
		detailComponents.client.innerHTML = data[work].client;
		detailComponents.whatIDid.innerHTML = data[work].whatIDid;
		detailComponents.tagline.innerHTML = data[work].tagline;
		detailComponents.description.innerHTML = data[work].description;
		detailComponents.github.href = data[work].github;
		detailComponents.live.href = data[work].live;
		detailComponents.process.innerHTML = data[work].process;

		var tech = data[work].tech.map(function(x) {
			return '<li class="c-list__item">' + x + '</li>';
		}).join('');

		detailComponents.tech.innerHTML = tech;
	}

	function handleClick(index) {
		workComponents.items[index].classList.add('active');
		workComponents.activeItem = workComponents.items[index];
		workComponents.activeBg = workComponents.bgs[index];

		updateComponents(workComponents.activeItem.getAttribute('data-work'));
		transformBackground(workComponents.activeItem, workComponents.activeBg);

		detailComponents.container.classList.remove('theme-1', 'theme-2', 'theme-3', 'theme-4');
		detailComponents.container.classList.add('theme-' + parseInt(index+1));

		moveTitle(workComponents.activeItem.querySelector('.work__item-heading'));
	}

	function transformBackground(item, bg) {
		var style = window.getComputedStyle(item, null);
		var background = style.getPropertyValue('background-color');
		detailComponents.container.style.backgroundColor = background;
		bg.style.transform = transform(bg);

		transitionEnd(bg, function() {
			detailComponents.container.classList.add('active');
		});
	}

	function moveTitle(el) {
		var target = document.querySelector('.work__details-title');
		var diff = calcLenthBetweenItems(target, el);

		var transform = 'translate(' + diff.x +'px, ' + diff.y + 'px)';
		el.style.transform = transform;
	}

	function calcLenthBetweenItems(a, b) {
		var aOffset = a.getBoundingClientRect();
		var bOffset = b.getBoundingClientRect();

		return {
			x: aOffset.left - bOffset.left,
			y: aOffset.top - bOffset.top
		};
	}

	function transform(el) {
		var ww = window.innerWidth;
		var wh = window.innerHeight;
		var wcx = ww / 2;
		var wcy = wh / 2;

		var scrollTop = window.pageYOffset;

		var sourceOffset = el.getBoundingClientRect();
		var sourceWidth = sourceOffset.width;
		var sourceHeight = sourceOffset.height;
		var sourceCX = sourceWidth / 2;
		var sourceCY = sourceHeight / 2;

		var translateX = Math.round(wcx - sourceOffset.left - sourceCX);
		var translateY = Math.round(0 + wcy - sourceOffset.top - sourceCY);
		var scaleX = ww / sourceWidth;
		var scaleY = wh / sourceHeight;

		var transformVal = 'translate(' + translateX + 'px,' + translateY + 'px) scale(' + scaleX + ',' + scaleY + ')';

		return transformVal;
	}

	function close() {
		detailComponents.container.classList.add('hide');

		transitionEnd(detailComponents.container, shrinkBg, 300);

		function shrinkBg() {
			var title = workComponents.activeItem.querySelector('.work__item-heading');
			workComponents.activeBg.removeAttribute('style');
			title.removeAttribute('style');
			detailComponents.container.classList.remove('active', 'hide');

			transitionEnd(workComponents.activeBg, function() {
				workComponents.activeItem.classList.remove('active');
				workComponents.activeItem = {};
				workComponents.activeBg = {};
			});
		}
	}

	function transitionEnd(el, callback, delay) {
		var complete = function() {
			setTimeout(function() {
				callback();
			}, delay || 0);
			el.removeEventListener('transitionend', complete);
		};

		el.addEventListener('transitionend', complete);
	}

	return {
		init: init
	};

}(window, document));

module.exports = ExpandProject;