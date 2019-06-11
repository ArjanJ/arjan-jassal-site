import svg from "svg.js";

window.addEventListener("DOMContentLoaded", event => {
  const flowerSvgId = "flower";
  const flowerSvg = document.getElementById(flowerSvgId);

  if (flowerSvg === null) {
    throw new Error(`No SVG with id '${flowerSvgId}' found.`);
  }

  const flower = svg.adopt(flowerSvg);
  const easeOutCubic = pos => Math.pow(pos - 1, 3) + 1;

  flower
    .rotate(-180, 0, 0)
    .animate({
      duration: 1000,
      ease: easeOutCubic
    })
    .rotate(0, 0, 0);

  flower.each(function(i) {
    this.opacity(0);
    this.radius(0);

    this.animate({
      duration: 1000,
      ease: easeOutCubic
    })
      .opacity(1)
      .radius(106);
  });
});
