import isMobile from 'is-mobile';

/**
 * readitAnimation
 * This is the animation that plays in the background
 * of the Readit project tile.
 */
export const readitAnimation = () => {
  const root = document.getElementById('readit-graphic');
  const list = root.querySelector('.readit-wrapper');

  const init = () => {
    if (isMobile()) {
      return null;
    }

    // Looks like you're scrolling up/down.
    list.animate(
      [
        { transform: 'translateY(0)' },
        { transform: 'translateY(-200px)' },
        { transform: 'translateY(-200px)' },
        { transform: 'translateY(-200px)' },
        { transform: 'translateY(0)' },
        { transform: 'translateY(0)' },
        { transform: 'translateY(0)' },
        { transform: 'translateY(0)' },
        { transform: 'translateY(-200px)' },
        { transform: 'translateY(-250px)' },
        { transform: 'translateY(-250px)' },
        { transform: 'translateY(-250px)' },
        { transform: 'translateY(0)' },
        { transform: 'translateY(0)' },
        { transform: 'translateY(0)' },
        { transform: 'translateY(0)' },
        { transform: 'translateY(0)' },
        { transform: 'translateY(0)' },
      ],
      {
        delay: 2000,
        duration: 10000,
        iterations: Infinity,
      }
    );
  };

  init();
};
