/**
 * workAccordion
 * This code expands/collapses the work sections.
 */
export const workAccordion = () => {
  const SECTION_SELECTOR = '.work-group';
  const CONTENT_SELECTOR = '.work-group-content';

  const elements = {
    accordion: document.getElementById('workAccordion'),
  };

  function expandSection(element) {
    element.setAttribute('data-expanded', 'true');
    const content = element.querySelector(CONTENT_SELECTOR);

    /**
     * scrollHeight is the height of the content
     * inside of the element.
     */
    content.style.height = `${content.scrollHeight}px`;
  }

  function collapseSection(element) {
    element.setAttribute('data-expanded', 'false');
    const content = element.querySelector(CONTENT_SELECTOR);
    content.removeAttribute('style');
  }

  function handleClick(event) {
    const { target } = event;
    const isCollapsibleContent = target.closest(CONTENT_SELECTOR);

    /**
     * If the content inside of the collapsible section was clicked
     * then we don't do anything because it would be bad UX if someone
     * tried to highlight some text and it collapsed the section on click.
     */
    if (isCollapsibleContent) {
      return null;
    }

    const section = target.closest(SECTION_SELECTOR);
    const isExpanded = section.getAttribute('data-expanded') === 'true';

    if (isExpanded) {
      return collapseSection(section);
    }

    return expandSection(section);
  }

  function init() {
    elements.accordion.addEventListener('click', handleClick, false);
  }

  init();
};
