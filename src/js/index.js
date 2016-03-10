var workItems = document.querySelectorAll('.work-item');

var project = document.querySelector('.project');
var projectTitle = document.querySelector('[data-project-title]');
var projectDate = document.querySelector('[data-project-date]');
var projectContent = document.querySelector('[data-project-content]');

var data = require('../content/ribeye');

for (var i = 0; i < workItems.length; i++) {
	workItems[i].addEventListener('click', function(event) {
		var param = this.getAttribute('data-load');

		projectTitle.innerHTML = data[param].title;
		projectDate.innerHTML = data[param].date.month;
		projectContent.innerHTML = data[param].content;
  	project.classList.add('project--active');

	});
}

(function() {

	var header = document.querySelector('[data-header]');
	var wh = window.innerHeight;

	// var target = (wh - header.offsetHeight);

	window.addEventListener('scroll', onScroll);

	function onScroll() {
		var scrollAmt = window.pageYOffset;

		if (scrollAmt >= header.offsetHeight) {
			header.classList.add('header--scrolled');
		}

		if (scrollAmt < header.offsetHeight) {
			header.classList.remove('header--scrolled');
		}
	}

}());