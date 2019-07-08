import isMobile from 'is-mobile';

import { delay } from './utils';

const easeOutCubic = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
const easeInOutCubic = 'cubic-bezier(0.645, 0.045, 0.355, 1)';

export const teamworkAnimation = async () => {
  const root = document.getElementById('teamwork-graphic');
  const menu = root.querySelector('.teamwork-item-menu');
  const menuItems = root.querySelectorAll('.teamwork-item-menu-item');
  const modal = root.querySelector('.teamwork-modal');

  const scaleIn = [
    { transform: 'scale(0)', opacity: 0 },
    { transform: 'scale(1)', opacity: 1 },
  ];

  const fadeOutDown = [
    { transform: 'translateY(0)', opacity: 1 },
    { transform: 'translateY(5%)', opacity: 0 },
  ];

  const fadeIn = [{ opacity: 0 }, { opacity: 1 }];

  const tapMenuItemFrames = [
    { background: 'rgba(255, 255, 255, 0.05)' },
    { background: 'rgba(255, 255, 255, 0.2)' },
  ];

  const showMenuAnimation = () =>
    menu.animate(scaleIn, {
      delay: 1600,
      duration: 400,
      fill: 'forwards',
      easing: easeOutCubic,
    });

  const hideMenuAnimation = () =>
    menu.animate(fadeOutDown, {
      delay: 500,
      duration: 400,
      fill: 'forwards',
      easing: easeOutCubic,
    });

  const showModalAnimation = () =>
    modal.animate(scaleIn, {
      delay: 500,
      duration: 600,
      fill: 'forwards',
      easing: easeOutCubic,
    });

  const hideModalAnimation = () =>
    modal.animate(fadeOutDown, {
      delay: 1200,
      duration: 500,
      fill: 'forwards',
      easing: easeInOutCubic,
    });

  const menuItemAnimationFinish = () => {
    const hideMenu = hideMenuAnimation();
    hideMenu.onfinish = unhighlightMenuItemsAnimation;

    const showModal = showModalAnimation();
    showModal.onfinish = async () => {
      await delay(1000);
      hideModalAnimation();
      await delay(500);

      // This triggers the entire animation to play again.
      const showMenu = showMenuAnimation();
      showMenu.onfinish = menuItemAnimation;
    };
  };

  const unhighlightMenuItemsAnimation = () => {
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].animate(fadeIn, {
        duration: 0,
        direction: 'reverse',
        fill: 'forwards',
      });
    }
  };

  const menuItemAnimation = () => {
    for (let i = 0; i < menuItems.length; i++) {
      const isLastIndex = i === menuItems.length - 1;

      const menuItemAnimationI = menuItems[i].animate(fadeIn, {
        delay: i * 180,
        duration: 300,
        fill: isLastIndex ? 'forwards' : 'none',
        easing: easeOutCubic,
      });

      menuItemAnimationI.onfinish = () => {
        if (isLastIndex) {
          const lastMenuItemAnimation = menuItems[menuItems.length - 1].animate(
            tapMenuItemFrames,
            {
              delay: 50,
              duration: 500,
              easing: easeInOutCubic,
            }
          );

          lastMenuItemAnimation.onfinish = menuItemAnimationFinish;
        }
      };
    }
  };

  const init = () => {
    if (isMobile()) {
      return null;
    }

    const showMenu = showMenuAnimation();
    showMenu.onfinish = menuItemAnimation;
  };

  init();
};
