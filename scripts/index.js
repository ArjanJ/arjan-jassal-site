import sal from "sal.js";

import { flowerAnimation } from "./flowerAnimation";
import { workAccordion } from "./workAccordion";

window.addEventListener("DOMContentLoaded", event => {
  sal({
    threshold: 0.36
  });
  flowerAnimation();
  workAccordion();
});
