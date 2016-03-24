function isInViewport(element, offset) {
	offset = offset ? offset : 0;
	var elOffset = element.getBoundingClientRect();

	var topVis = (elOffset.top >= 0 && elOffset.top < window.innerHeight - offset);
	var bottomVis = (elOffset.bottom > 0 && elOffset.bottom <= window.innerHeight - offset);

	if (topVis || bottomVis) return true;
	return false;
}

module.exports = isInViewport;