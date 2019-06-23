/**
 * workAccordion
 * This code toggles the sections under "Work Experience".
 */
export const workAccordion = () => {
  /**
   * heights: The heights of each accordion section when open.
   * openShelves: The indices of open accordion sections.
   */
  const state = {
    heights: [],
    openShelves: []
  };

  const accordionElement = document.getElementById("workAccordion");

  const elements = {
    parent: accordionElement,
    children: getChildren(accordionElement)
  };

  const CONTENT_OPEN_CLASSNAME = "work-group-content--open";
  const HEIGHT_OFFSET = 48;

  init();

  /**
   * init
   * First, add data-index attr to each accordion section, so we
   * know which one we clicked. Then get the heights of each section,
   * then close all of the sections by setting their height to 0.
   */
  function init() {
    addIndexAttr();
    state.heights = getHeights();
    setupEventListeners();
    collapseHeightOfShelves();
  }

  function getChildren(parent) {
    if (parent.children) {
      return parent.children;
    } else {
      return [];
    }
  }

  /**
   * Add one event listener to the accordion element instead
   * of each section within.
   */
  function setupEventListeners() {
    elements.parent.addEventListener("click", handleClick, false);
  }

  /**
   * handleClick
   * When a section within the accordion is clicked we check
   * if it's open (if the index is in the state.openShelves array).
   * If it's open we close it, and vice-versa.
   */
  function handleClick(event) {
    const { openShelves } = state;
    const { target } = event;
    const workGroupElement = target.closest(".work-group");

    if (workGroupElement) {
      const index = parseInt(workGroupElement.getAttribute("data-index"), 10);
      const isOpen = openShelves.includes(index);
      const contentElement = workGroupElement.querySelector(
        ".work-group-content"
      );

      // Close the section.
      if (isOpen) {
        setHeight(getContentElement(workGroupElement));
        contentElement.classList.remove(CONTENT_OPEN_CLASSNAME);
        return removeOpenShelf(index);
      }

      // Open the section.
      contentElement.style.height = `${state.heights[index] + HEIGHT_OFFSET}px`;
      contentElement.classList.add(CONTENT_OPEN_CLASSNAME);
      return addOpenShelf(index);
    }
  }

  function addOpenShelf(index) {
    state.openShelves = [...state.openShelves, index];
  }

  function removeOpenShelf(index) {
    state.openShelves = state.openShelves.filter(x => x !== index);
  }

  /**
   * getHeights
   * Returns the heights of content within each accordion section.
   */
  function getHeights() {
    const { children } = elements;

    if (children.length === 0) {
      return null;
    }

    return Array.from(children).map(
      child => getContentElement(child).offsetHeight
    );
  }

  function collapseHeightOfShelves() {
    const { children } = elements;

    if (children.length === 0) {
      return null;
    }

    const childrenArr = Array.from(children);
    const getContentAndCloseShelf = shelf =>
      setHeight(getContentElement(shelf));

    return childrenArr.forEach(getContentAndCloseShelf);
  }

  function setHeight(element, value = 0) {
    element.style.height = `${value}px`;
  }

  function getContentElement(shelf) {
    return shelf.querySelector(".work-group-content");
  }

  function addIndexAttr() {
    const { children } = elements;

    if (children.length === 0) {
      return null;
    }

    const childrenArr = Array.from(children);

    childrenArr.forEach((child, index) => {
      child.setAttribute("data-index", index);
    });
  }
};
