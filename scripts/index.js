import { aboutModal } from './aboutModal';
import { flowerAnimation } from './flowerAnimation';
import { scrollAnimation } from './scrollAnimation';
import { toggleScrollIndicator } from './toggleScrollIndicator';
import { workAccordion } from './workAccordion';

window.addEventListener('DOMContentLoaded', event => {
  aboutModal();
  flowerAnimation();
  scrollAnimation();
  toggleScrollIndicator();
  workAccordion();
});
