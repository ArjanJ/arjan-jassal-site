/**
 * toggleScrollIndicator
 * This hides/shows the "scroll" thing in the intro section
 * when you scroll down a little.
 */
export const toggleScrollIndicator = () => {
  const element = document.querySelector('.intro-scroll-indicator');
  const TOGGLE_CLASSNAME = 'intro-scroll-indicator--hide';

  window.addEventListener('scroll', () => {
    const { scrollY } = window;

    if (scrollY > 10) {
      element.classList.add(TOGGLE_CLASSNAME);
    } else {
      element.classList.remove(TOGGLE_CLASSNAME);
    }
  });
};
