import isMobile from 'is-mobile';

/**
 * projectsLinks
 * On mobile the project links are added to the DOM
 * using javascript because the actual link doesn't
 * fit into the mobile design (it's hidden).
 */
export const projectLinks = () => {
  const projects = document.querySelectorAll('.projects-box');

  const handleClick = ({ target }) => {
    const projectBox = target.closest('.projects-box');
    const link = projectBox.getAttribute('data-link');

    // Open project link in new tab.
    window.open(link, '_blank');
  };

  const addEventListeners = () => {
    for (let i = 0; i < projects.length; i++) {
      projects[i].addEventListener('click', handleClick, false);
    }
  };

  const init = () => {
    // If we're on a desktop machine we don't need to bother adding links.
    if (!isMobile()) {
      return null;
    }

    addEventListeners();
  };

  init();
};
