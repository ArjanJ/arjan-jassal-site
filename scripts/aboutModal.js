export const aboutModal = () => {
  const elements = {
    about: document.querySelector(".about"),
    closeButton: document.getElementById("about-btn-close"),
    main: document.querySelector("main"),
    openButton: document.getElementById("about-btn")
  };

  const ABOUT_OPEN_CLASSNAME = "about--open";
  const MAIN_OPEN_CLASSNAME = "main--blur";

  elements.openButton.addEventListener("click", open);
  elements.closeButton.addEventListener("click", close);

  function handleKeyDown({ keyCode }) {
    // Close modal when esc key is pressed.
    if (keyCode === 27) {
      close();
    }
  }

  function close() {
    const { about, main } = elements;

    about.classList.remove(ABOUT_OPEN_CLASSNAME);
    main.classList.remove(MAIN_OPEN_CLASSNAME);
  }

  function open() {
    const { about, main } = elements;

    about.classList.add(ABOUT_OPEN_CLASSNAME);
    main.classList.add(MAIN_OPEN_CLASSNAME);
  }
};
