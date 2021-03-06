/**
 * scrollAnimation
 * Add a classname to an element when it scrolls into view.
 */
export const scrollAnimation = () => {
  const elements = Array.from(document.querySelectorAll('.js-scroll'));

  const config = {
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  };

  /**
   * When an element with .js-scroll comes into view
   * we add 'js-scroll-animate' classname and then stop
   * observing it because we don't want the animation to play again.
   */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.3) {
        entry.target.classList.add('js-scroll-animate');
        observer.unobserve(entry.target);
      }
    });
  }, config);

  elements.forEach(el => observer.observe(el));
};
