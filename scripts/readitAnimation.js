import isMobile from 'is-mobile';

/**
 * readitAnimation
 * This is the animation that plays in the background
 * of the Readit project tile.
 */
export const readitAnimation = () => {
  const root = document.getElementById('readit-graphic');
  const list = root.querySelector('.readit-wrapper');

  const init = async () => {
    if (isMobile()) {
      return null;
    }

    list.animate(
      [{ transform: 'translateY(0)' }, { transform: 'translateY(-43%)' }],
      {
        duration: 2400,
        iterations: Infinity,
      }
    );
  };

  init();
};
