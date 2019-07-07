import { delay } from './utils';

const easeOutCubic = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
const easeInOutCubic = 'cubic-bezier(0.645, 0.045, 0.355, 1)';

export const teamworkAnimation = async () => {
  const root = document.getElementById('teamwork-graphic');
  const menu = root.querySelector('.teamwork-item-menu');
  const menuItems = root.querySelectorAll('.teamwork-item-menu-item');

  const timing = {
    duration: 1000,
  };

  const showMenuFrames = [
    { transform: 'scale(0)', opacity: 0 },
    { transform: 'scale(1)', opacity: 1 },
  ];

  const hideMenuFrames = [
    { transform: 'translateY(0)', opacity: 1 },
    { transform: 'translateY(5%)', opacity: 0 },
  ];

  const highlightMenuItemFrames = [{ opacity: 0 }, { opacity: 1 }];

  const tapMenuItemFrames = [
    { background: 'rgba(0, 0, 255, 0.08)' },
    { background: 'rgba(0, 0, 255, 0.2)' },
  ];

  const showMenuAnimation = () =>
    menu.animate(showMenuFrames, {
      delay: 1600,
      duration: 400,
      fill: 'forwards',
      easing: easeOutCubic,
    });

  const hideMenuAnimation = () =>
    menu.animate(hideMenuFrames, {
      delay: 500,
      duration: 400,
      fill: 'forwards',
      easing: easeOutCubic,
    });

  const onAllEnd = () => {
    const hideMenu = hideMenuAnimation();
    hideMenu.onfinish = unhighlightMenuItemsAnimation;

    // This triggers the entire animation to play again.
    const showMenu = showMenuAnimation();
    showMenu.onfinish = menuItemAnimation;
  };

  const unhighlightMenuItemsAnimation = () => {
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].animate(highlightMenuItemFrames, {
        duration: 0,
        direction: 'reverse',
        fill: 'forwards',
      });
    }
  };

  const menuItemAnimation = () => {
    for (let i = 0; i < menuItems.length; i++) {
      const isLastIndex = i === menuItems.length - 1;

      const menuItemAnimationI = menuItems[i].animate(highlightMenuItemFrames, {
        delay: i * 250,
        duration: 250,
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

          lastMenuItemAnimation.onfinish = () => {
            onAllEnd();
          };
        }
      };
    }
  };

  const showMenu = showMenuAnimation();
  showMenu.onfinish = menuItemAnimation;
};
