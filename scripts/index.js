import { aboutModal } from './aboutModal';
import { flowerAnimation } from './flowerAnimation';
import { scrollAnimation } from './scrollAnimation';
import { teamworkAnimation } from './teamworkAnimation';
import { toggleScrollIndicator } from './toggleScrollIndicator';
import { workAccordion } from './workAccordion';

window.addEventListener('DOMContentLoaded', event => {
  aboutModal();
  flowerAnimation();
  scrollAnimation();
  teamworkAnimation();
  toggleScrollIndicator();
  workAccordion();
});
