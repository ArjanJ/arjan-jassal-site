import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

/**
 * aboutModal
 * When you click 'About' an element gets a bunch of
 * classnames added to it and then the content shows.
 */
export const aboutModal = () => {
  const elements = {
    about: document.querySelector('.about'),
    aboutWrapper: document.querySelector('.about-wrapper'),
    closeButton: document.getElementById('about-btn-close'),
    main: document.querySelector('main'),
    openButton: document.getElementById('about-btn'),
  };

  const ABOUT_OPEN_CLASSNAME = 'about--open';
  const MAIN_OPEN_CLASSNAME = 'main--blur';

  const handleKeyDown = ({ keyCode }) => {
    // Close modal when esc key is pressed.
    if (keyCode === 27) {
      close();
    }
  };

  const close = () => {
    const { about, aboutWrapper, main } = elements;

    enableBodyScroll(aboutWrapper);

    about.classList.remove(ABOUT_OPEN_CLASSNAME);
    main.classList.remove(MAIN_OPEN_CLASSNAME);

    document.removeEventListener('keydown', handleKeyDown, false);
  };

  const open = () => {
    const { about, aboutWrapper, main } = elements;

    disableBodyScroll(aboutWrapper);

    about.classList.add(ABOUT_OPEN_CLASSNAME);
    main.classList.add(MAIN_OPEN_CLASSNAME);

    // Only listen for keydown events when modal is open.
    document.addEventListener('keydown', handleKeyDown, false);
  };

  const init = () => {
    elements.openButton.addEventListener('click', open);
    elements.closeButton.addEventListener('click', close);
  };

  init();
};
