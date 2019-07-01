import sal from "sal.js";

import { aboutModal } from "./aboutModal";
import { flowerAnimation } from "./flowerAnimation";
import { toggleScrollIndicator } from "./toggleScrollIndicator";
import { workAccordion } from "./workAccordion";

window.addEventListener("DOMContentLoaded", event => {
  sal({
    threshold: 0.24
  });

  aboutModal();
  flowerAnimation();
  toggleScrollIndicator();
  workAccordion();
});
