import isMobile from 'is-mobile';

import { animations, delay } from './utils';

const easeOutCubic = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
const easeInOutCubic = 'cubic-bezier(0.645, 0.045, 0.355, 1)';

/**
 * teamworkAnimation
 * This animation plays in the background of the Teamwork
 * side project tile.
 */
export const teamworkAnimation = async () => {
  const root = document.getElementById('teamwork-graphic');
  const menu = root.querySelector('.teamwork-item-menu');
  const menuItems = root.querySelectorAll('.teamwork-item-menu-item');
  const modal = root.querySelector('.teamwork-modal');
  const modalDialog = modal.querySelector('.teamwork-modal-dialog');

  const showMenuAnimation = () =>
    menu.animate(animations.scaleUp, {
      delay: 1600,
      duration: 400,
      fill: 'forwards',
      easing: easeOutCubic,
    });

  const hideMenuAnimation = () =>
    menu.animate(animations.fadeOutDown, {
      delay: 500,
      duration: 400,
      fill: 'forwards',
      easing: easeOutCubic,
    });

  const showModalAnimation = () =>
    modal.animate(animations.fadeIn, {
      delay: 500,
      duration: 600,
      fill: 'forwards',
      easing: easeOutCubic,
    });

  const hideModalAnimation = () =>
    modal.animate(animations.fadeOut, {
      delay: 1600,
      duration: 500,
      fill: 'forwards',
      easing: easeInOutCubic,
    });

  const showModalDialogAnimation = () =>
    modalDialog.animate(animations.fadeInUp, {
      duration: 400,
      fill: 'forwards',
      easing: easeOutCubic,
    });

  const hideModalDialogAnimation = () =>
    modalDialog.animate(animations.fadeOutDown, {
      duration: 250,
      fill: 'forwards',
      easing: easeInOutCubic,
    });

  const onMenuItemAnimationFinish = () => {
    // Hide dropdown menu
    const hideMenu = hideMenuAnimation();
    hideMenu.onfinish = unhighlightMenuItemsAnimation;

    // Show Modal overlay
    const showModal = showModalAnimation();
    showModal.onfinish = onShowModalFinish;
  };

  const onShowModalFinish = () => {
    // Show inner Modal dialog
    const showModalDialog = showModalDialogAnimation();
    showModalDialog.onfinish = onShowModalDialogFinish;
  };

  const onShowModalDialogFinish = () => {
    // Hide Modal overlay
    const hideModal = hideModalAnimation();
    hideModal.onfinish = onHideModalFinish;
  };

  const startAnimation = () => {
    const showMenu = showMenuAnimation();
    showMenu.onfinish = menuItemAnimation;
  };

  const onHideModalFinish = () => {
    // Hide inner modal Dialog
    hideModalDialogAnimation();

    // This triggers the entire animation to play again.
    startAnimation();
  };

  const unhighlightMenuItemsAnimation = () => {
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].animate(animations.fadeIn, {
        duration: 0,
        direction: 'reverse',
        fill: 'forwards',
      });
    }
  };

  const menuItemAnimation = async () => {
    await delay(100);

    for (let i = 0; i < menuItems.length; i++) {
      const isLastIndex = i === menuItems.length - 1;

      const menuItemAnimationI = menuItems[i].animate(animations.fadeIn, {
        delay: i * 180,
        duration: 300,
        fill: isLastIndex ? 'forwards' : 'none',
        easing: easeOutCubic,
      });

      menuItemAnimationI.onfinish = () => {
        if (isLastIndex) {
          const lastMenuItemAnimation = menuItems[menuItems.length - 1].animate(
            [
              { background: 'rgba(0,0,0, 0.08)' },
              { background: 'rgba(0,0,0, 0.15)' },
            ],
            {
              delay: 50,
              duration: 500,
              easing: easeInOutCubic,
            }
          );

          lastMenuItemAnimation.onfinish = onMenuItemAnimationFinish;
        }
      };
    }
  };

  const init = () => {
    if (isMobile()) {
      return null;
    }

    startAnimation();
  };

  init();
};
