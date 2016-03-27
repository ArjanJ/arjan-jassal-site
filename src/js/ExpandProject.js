var ExpandProject = (function(window, document) {

	var items = [].slice.call($$('.work__item'));
	var bgs = [];
	var details = $('.work__details');
	var closeBtn = details.querySelector('.work__details-close');
	var data = require('./workData');

	var components = {
		title: $('[data-work-title]'),
		client: $('[data-work-client]'),
		whatIDid: $('[data-work-what-i-did]'),
		tagline: $('[data-work-tagline]'),
		description: $('[data-work-description]'),
		github: $('[data-work-github]'),
		live: $('[data-work-live]'),
		tech: $('[data-work-tech]'),
		process: $('[data-work-process]')
	};

	function $(query) {
		return document.querySelector(query);
	}

	function $$(query) {
		return [].slice.call(document.querySelectorAll(query));
	}

	function init() {
		appendDiv();
		items.forEach(function(item, index) {
			item.addEventListener('click', handleClick.bind(null, index));
		});
		closeBtn.addEventListener('click', close);
	}

	function updateComponents(work) {
		components.title.innerHTML = data[work].title;
		components.client.innerHTML = data[work].client;
		components.whatIDid.innerHTML = data[work].whatIDid;
		components.tagline.innerHTML = data[work].tagline;
		components.description.innerHTML = data[work].description;
		components.github.href = data[work].github;
		components.live.href = data[work].live;
		components.process.innerHTML = data[work].process;
		
		var tech = data[work].tech.map(function(x) {
			return '<li class="c-list__item">' + x + '</li>';
		}).join('');

		components.tech.innerHTML = tech;
	}

	function appendDiv() {
		items.forEach(function(item) {
			var div = document.createElement('div');
			div.className = 'work__item-bg';
			item.appendChild(div);
			bgs.push(item.querySelector('.work__item-bg'));
		});
	}

	function handleClick(index) {
		updateComponents(items[index].getAttribute('data-work'));
		items.forEach(function(item) {
			setZIndex(item, 1);
		});
		setZIndex(items[index], 2);

		if (items[index].classList.contains('active')) {
			return;
		} else {
			bgs[index].style.transform = transform(bgs[index]);
			items[index].classList.add('active');
			details.classList.remove('theme-1', 'theme-2', 'theme-3', 'theme-4');
			details.classList.add('theme-' + parseInt(index+1));
			
			var itemTitle = items[index].querySelector('.work__item-heading');
			var itemStyle = window.getComputedStyle(items[index]);
			var itemBackgroundVal = itemStyle.getPropertyValue('background');

			moveTitle(itemTitle);

			details.style.background = itemBackgroundVal;

			setTimeout(function() {
				details.classList.add('active');
			}, 450);
		}
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

	function setZIndex(el, val) {
		el.style.zIndex = val;
	}

	function close() {
		// details.classList.remove('active');
		details.classList.add('hide');

		setTimeout(function() {
			items.forEach(function(item) {
				var bg = item.querySelector('.work__item-bg');
				var title = item.querySelector('.work__item-heading');
				bg.removeAttribute('style');
				title.removeAttribute('style');
				item.classList.remove('active');
			});
			details.classList.remove('active', 'hide');
		}, 500);

		
	}

	return {
		init: init
	};

}(window, document));

module.exports = ExpandProject;