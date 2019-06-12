import svg from "svg.js";

import { delay, svgUtils } from "./utils";

export const flowerAnimation = () => {
  const flowerSvgId = "flower";
  const flowerSvg = document.getElementById(flowerSvgId);

  if (flowerSvg === null) {
    throw new Error(`No SVG with id '${flowerSvgId}' found.`);
  }

  // The SVG located in index.html
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

  // Flower is hidden to start with.
  hideFlower(async () => {
    await delay(600);
    showFlower();
  });

  function hideFlower(callback) {
    flower.rotate(-540, 0, 0);
    flower.each(async function(i) {
      const isCenterPetal = i === 5;

      // Make the center petal a small white circle.
      if (isCenterPetal) {
        return this.attr({
          r: 16,
          fill: "white"
        });
      }

      // Hide each petal/circle and position them in the center of the svg.
      this.attr({ fill: "white", r: 0, opacity: 0 });
      this.center(originX, originY);
    });

    if (callback) {
      callback();
    }
  }

  function showFlower() {
    flower.each(async function(i) {
      const isCenterPetal = i === 5;

      // Grow center petal first.
      if (isCenterPetal) {
        return this.animate({
          duration: 450,
          ease: svgUtils.easeOutCubic
        }).attr({
          r: originalRadius,
          "fill-opacity": 0
        });
      }

      await delay(100);

      // Grow the rest of the petals and rotate the whole svg.
      this.animate({
        duration: 500,
        ease: svgUtils.easeInCubic
      })
        .center(originalPetalPositions[i][0], originalPetalPositions[i][1])
        .attr({
          opacity: 1,
          r: 10
        })
        .after(() => {
          flower
            .animate({
              duration: 1000,
              ease: svgUtils.easeInOutCubic
            })
            .rotate(0, 0, 0);

          this.animate({
            duration: 1000,
            ease: svgUtils.easeInOutCubic
          }).attr({
            r: originalRadius,
            "fill-opacity": 0
          });
        });
    });
  }
};
