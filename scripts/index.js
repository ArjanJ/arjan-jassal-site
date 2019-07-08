import { aboutModal } from './aboutModal';
import { flowerAnimation } from './flowerAnimation';
import { reactCameraAnimation } from './reactCameraAnimation';
import { readitAnimation } from './readitAnimation';
import { scrollAnimation } from './scrollAnimation';
import { teamworkAnimation } from './teamworkAnimation';
import { toggleScrollIndicator } from './toggleScrollIndicator';
import { workAccordion } from './workAccordion';

window.addEventListener('DOMContentLoaded', event => {
  aboutModal();
  flowerAnimation();
  reactCameraAnimation();
  readitAnimation();
  scrollAnimation();
  teamworkAnimation();
  toggleScrollIndicator();
  workAccordion();
});
