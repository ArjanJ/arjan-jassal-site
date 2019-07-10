import isMobile from 'is-mobile';

import { animations, supportsAnimate } from './utils';

/**
 * reactCameraAnimation
 * This animation plays in the background of the React Camera
 * project tile.
 */
export const reactCameraAnimation = () => {
  const root = document.getElementById('react-camera-graphic');
  const person = root.querySelector('.react-camera-person');

  const showPersonAnimation = () =>
    person.animate(animations.fadeInUp, {
      delay: 1600,
      duration: 400,
      fill: 'forwards',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    });

  const onShowPersonFinish = () => {
    const flashPerson = person.animate([{ opacity: 0 }, { opacity: 1 }], {
      delay: 400,
      duration: 250,
      fill: 'forwards',
    });

    flashPerson.onfinish = onFlashPersonFinish;
  };

  const onFlashPersonFinish = () => {
    const hidePerson = person.animate(animations.fadeOutDown, {
      delay: 800,
      duration: 400,
      fill: 'forwards',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    });

    hidePerson.onfinish = startAnimation;
  };

  const startAnimation = () => {
    const showPerson = showPersonAnimation();
    showPerson.onfinish = onShowPersonFinish;
  };

  const init = () => {
    if (isMobile() || !supportsAnimate()) {
      return null;
    }

    startAnimation();
  };

  init();
};
