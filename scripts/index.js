import sal from "sal.js";

import { flowerAnimation } from "./flowerAnimation";
import { toggleScrollIndicator } from "./toggleScrollIndicator";
import { workAccordion } from "./workAccordion";

window.addEventListener("DOMContentLoaded", event => {
  sal({
    threshold: 0.24
  });
  flowerAnimation();
  toggleScrollIndicator();
  workAccordion();
});
