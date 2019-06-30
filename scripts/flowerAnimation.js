import svg from "svg.js";

import { delay, svgUtils } from "./utils";

export const flowerAnimation = () => {
  const flowerSvg = document.querySelector(".intro-flower-svg");

  // The SVG located in intro.pug
  const flower = svg.adopt(flowerSvg);

  const [
    petal1,
    petal2,
    petal3,
    petal4,
    petal5,
    petalCenter,
    petal7
  ] = flower.children();

  flowerSvg.addEventListener("mouseenter", () => showFlower());
  flowerSvg.addEventListener("mouseleave", () => hideFlowerAnimate());

  /**
   * Store the original positions because we will move the petals
   * back to these values later.
   */
  const originalPetalPositions = flower
    .children()
    .map(child => [child.cx(), child.cy()]);

  // Positions of the center petal/circle.
  const originX = petalCenter.cx();
  const originY = petalCenter.cy();
  const originalRadius = 106;

  hideFlower();

  function hideFlower() {
    flower.each(async function(i) {
      if (i === 5) {
        return null;
      }

      this.center(originX, originY);
      this.opacity(0);
    });
  }

  function hideFlowerAnimate() {
    flower.each(async function(i) {
      if (i === 5) {
        return null;
      }

      this.animate({
        delay: `${i * 0.05}s`,
        duration: 600,
        ease: svgUtils.easeInCubic
      })
        .center(originX, originY)
        .opacity(0);
    });
  }

  function showFlower() {
    flower.each(async function(i) {
      const isCenterPetal = i === 5;

      // Grow the rest of the petals and rotate the whole svg.
      this.animate({
        delay: `${i * 0.05}s`,
        duration: 600,
        ease: svgUtils.easeOutCubic
      })
        .center(originalPetalPositions[i][0], originalPetalPositions[i][1])
        .attr({
          opacity: 1
        });
    });
  }
};
