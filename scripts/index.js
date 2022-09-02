import { aboutModal } from './aboutModal';
import { introScrollFade } from './introScrollFade';
import { projectLinks } from './projectLinks';
import { reactCameraAnimation } from './reactCameraAnimation';
import { readitAnimation } from './readitAnimation';
import { scrollAnimation } from './scrollAnimation';
import { teamworkAnimation } from './teamworkAnimation';
import { workAccordion } from './workAccordion';

window.addEventListener('DOMContentLoaded', () => {
  aboutModal();
  introScrollFade();
  projectLinks();
  reactCameraAnimation();
  readitAnimation();
  scrollAnimation();
  teamworkAnimation();
  workAccordion();
});
