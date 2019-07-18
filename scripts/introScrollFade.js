/**
 * introScrollFade
 * When you scroll down the intro section will fade away.
 */
export const introScrollFade = () => {
  const introSection = document.querySelector('.intro');

  const handleScroll = () => {
    const { scrollY } = window;
    const opacity = Number.parseFloat(1 - scrollY / 600).toFixed(2);

    /**
     * Once the opacity is less than 0 we don't want to update
     * the DOM unecessarily.
     */
    if (opacity < 0) {
      return null;
    }

    introSection.style.opacity = opacity;
  };

  window.addEventListener('scroll', handleScroll);
};
