/**
 * workAccordion
 * This code toggles the sections under "Work Experience".
 */
export const workAccordion = () => {
  const ACCORDION_ID = "workAccordion";
  const CONTENT_OPEN_CLASSNAME = "work-group-content--open";
  const WORK_GROUP_CLASSNAME = "work-group";
  const WORK_GORUP_CONTENT_CLASSNAME = "work-group-content";

  /**
   * heights: The heights of each accordion section when open.
   * openShelves: The indices of open accordion sections.
   */
  const state = {
    heights: [],
    openShelves: []
  };

  const accordionElement = document.getElementById(ACCORDION_ID);

  const elements = {
    parent: accordionElement,
    children: getChildren(accordionElement)
  };

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
    if (parent && parent.children) {
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
    const workGroupElement = target.closest(`.${WORK_GROUP_CLASSNAME}`);
    const workGroupContentElement = target.closest(
      `.${WORK_GROUP_CONTENTCLASSNAME}`
    );

    /**
     * If we clicked on an element that has a parent of .work-group-content
     * we don't want to do anything because the inner content should be
     * clickable without the section closing or opening.
     */
    if (!workGroupContentElement && workGroupElement) {
      const index = parseInt(workGroupElement.getAttribute("data-index"), 10);
      const isOpen = openShelves.includes(index);
      const backgroundColor = workGroupElement.getAttribute("data-color");
      const contentElement = workGroupElement.querySelector(
        `.${WORK_GROUP_CONTENTCLASSNAME}`
      );

      // Close the section.
      if (isOpen) {
        setHeight(getContentElement(workGroupElement));
        contentElement.classList.remove(CONTENT_OPEN_CLASSNAME);
        removeBackgroundColor();
        return removeOpenShelf(index);
      }

      // Open the section.
      contentElement.style.height = `${state.heights[index]}px`;
      contentElement.classList.add(CONTENT_OPEN_CLASSNAME);
      setBackgroundColor(backgroundColor);
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
   * Returns the height of content within each accordion section.
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

  /**
   * collapseHeightOfShelves
   * Visually closes all of the accordion sections.
   */
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

  function getContentElement(element) {
    return element.querySelector(`.${WORK_GROUP_CONTENT_CLASSNAME}`);
  }

  /**
   * addIndexAttr
   * Adds 'data-index={}` attribute to all accordion sections.
   */
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

  function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }

  function removeBackgroundColor() {
    document.body.removeAttribute("style");
  }
};
