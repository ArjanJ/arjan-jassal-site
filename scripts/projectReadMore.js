/**
 * projectReadMore
 * This is what toggles the height of the selected project section
 * when you click "read more".
 */
export const projectReadMore = () => {
  const state = {
    isOpen: false
  };

  const elements = {
    overlay: document.querySelector(".project-write-up-overlay"),
    readMoreButton: document.getElementById("project-read-more"),
    readMoreButtonArrow: document.querySelector("#project-read-more svg"),
    readMoreButtonText: document.querySelector("#project-read-more span"),
    paragraphWrapper: document.querySelector(".project-write-up-wrapper"),
    paragraphs: Array.from(document.querySelectorAll(".project-write-up"))
  };

  const CLOSED_HEIGHT = "200px";
  const CLOSED_TEXT = "Read more";
  const OPENED_TEXT = "Show less";
  const OPENED_ARROW_TRANSFORM = "rotate(180deg)";
  const CLOSED_ARROW_TRANSFORM = "none";

  if (!elements.readMoreButton) {
    throw new Error("Cannot find button#project-read-more element.");
  }

  elements.readMoreButton.addEventListener("click", handleClick);

  function handleClick() {
    if (state.isOpen) {
      close();
    } else {
      open();
    }
  }

  function open() {
    const {
      overlay,
      paragraphWrapper,
      readMoreButton,
      readMoreButtonArrow,
      readMoreButtonText
    } = elements;

    const openedHeight = `${paragraphWrapper.clientHeight +
      getOpenedHeight()}px`;

    paragraphWrapper.style.height = openedHeight;
    overlay.style.opacity = 0;
    readMoreButtonText.innerHTML = OPENED_TEXT;
    readMoreButtonArrow.style.transform = OPENED_ARROW_TRANSFORM;

    return (state.isOpen = true);
  }

  function close() {
    const {
      overlay,
      paragraphWrapper,
      readMoreButton,
      readMoreButtonArrow,
      readMoreButtonText
    } = elements;

    paragraphWrapper.style.height = CLOSED_HEIGHT;
    overlay.style.opacity = 1;
    readMoreButtonText.innerHTML = CLOSED_TEXT;
    readMoreButtonArrow.style.transform = CLOSED_ARROW_TRANSFORM;

    return (state.isOpen = false);
  }

  /**
   * getOpenedHeight
   * This function gets the bottom position of the last paragraph
   * and the current bottom position of the wrapper. Then returns
   * an integer which is the difference between the bottom positions
   * of those two elements. That difference is the height that needs
   * to be added to the current height of the wrapper. (200 + x)
   */
  function getOpenedHeight() {
    const { scrollY } = window;
    const { paragraphWrapper, paragraphs } = elements;

    const paragraphsLength = paragraphs.length;
    const lastParagraphIndex = paragraphsLength - 1;
    const lastParagraph = elements.paragraphs[lastParagraphIndex];

    const {
      bottom: lastParagraphBottom
    } = lastParagraph.getBoundingClientRect();
    const { bottom: wrapperBottom } = paragraphWrapper.getBoundingClientRect();

    const bottomOfLastParagraph = scrollY + lastParagraphBottom;
    const bottomOfWrapper = scrollY + wrapperBottom;

    return bottomOfLastParagraph - bottomOfWrapper;
  }
};
