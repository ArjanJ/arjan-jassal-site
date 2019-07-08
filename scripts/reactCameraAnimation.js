import isMobile from 'is-mobile';

import { animations } from './utils';

export const reactCameraAnimation = () => {
  const root = document.getElementById('react-camera-graphic');
  const person = root.querySelector('.react-camera-person');

  const init = () => {
    if (isMobile()) {
      return null;
    }

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

      flashPerson.onfinish = () => {
        const hidePerson = person.animate(animations.fadeOutDown, {
          delay: 400,
          duration: 400,
          fill: 'forwards',
          easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        });

        hidePerson.onfinish = () => {
          startAnimation();
        };
      };
    };

    const startAnimation = () => {
      const showPerson = showPersonAnimation();
      showPerson.onfinish = onShowPersonFinish;
    };

    startAnimation();
  };

  init();
};
