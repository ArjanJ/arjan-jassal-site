/**
 * scrollAnimation
 * Add a classname to an element when it scrolls into view.
 */
export const scrollAnimation = () => {
  const elements = Array.from(document.querySelectorAll('.js-scroll'));

  const config = {
    threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
  };

  /**
   * When an element with .js-scroll comes into view
   * we add 'js-scroll-animate' classname and then stop
   * observing it because we don't want the animation to play again.
   */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.2) {
        entry.target.classList.add('js-scroll-animate');
        observer.unobserve(entry.target);
      }
    });
  }, config);

  elements.forEach(el => observer.observe(el));
};
