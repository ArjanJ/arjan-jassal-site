import { aboutModal } from './aboutModal';
import { flowerAnimation } from './flowerAnimation';
import { readitAnimation } from './readitAnimation';
import { scrollAnimation } from './scrollAnimation';
import { teamworkAnimation } from './teamworkAnimation';
import { toggleScrollIndicator } from './toggleScrollIndicator';
import { workAccordion } from './workAccordion';

window.addEventListener('DOMContentLoaded', event => {
  aboutModal();
  flowerAnimation();
  readitAnimation();
  scrollAnimation();
  teamworkAnimation();
  toggleScrollIndicator();
  workAccordion();
});
