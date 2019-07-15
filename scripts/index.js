import { aboutModal } from './aboutModal';
import { projectLinks } from './projectLinks';
import { reactCameraAnimation } from './reactCameraAnimation';
import { readitAnimation } from './readitAnimation';
import { scrollAnimation } from './scrollAnimation';
import { teamworkAnimation } from './teamworkAnimation';
import { toggleScrollIndicator } from './toggleScrollIndicator';
import { workAccordion } from './workAccordion';

window.addEventListener('DOMContentLoaded', () => {
  aboutModal();
  projectLinks();
  reactCameraAnimation();
  readitAnimation();
  scrollAnimation();
  teamworkAnimation();
  toggleScrollIndicator();
  workAccordion();
});
