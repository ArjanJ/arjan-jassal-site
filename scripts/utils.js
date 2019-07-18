export const delay = async ms =>
  new Promise(resolve => setTimeout(resolve, ms));

export const svgUtils = {
  easeOutCubic: pos => Math.pow(pos - 1, 3) + 1,
  easeInCubic: pos => Math.pow(pos, 3),
  easeInOutCubic: pos => {
    if ((pos /= 0.5) < 1) return 0.5 * Math.pow(pos, 3);
    return 0.5 * (Math.pow(pos - 2, 3) + 2);
  },
};

export const animations = {
  fadeIn: [{ opacity: 0 }, { opacity: 1 }],
  fadeInUp: [
    { transform: 'translateY(25%)', opacity: 0 },
    { transform: 'translateY(0)', opacity: 1 },
  ],
  fadeOut: [{ opacity: 1 }, { opacity: 0 }],
  fadeOutDown: [
    { transform: 'translateY(0)', opacity: 1 },
    { transform: 'translateY(5%)', opacity: 0 },
  ],
  scaleUp: [
    { transform: 'scale(0)', opacity: 0 },
    { transform: 'scale(1)', opacity: 1 },
  ],
};

export const supportsAnimate = () => {
  const el = document.createElement('div');
  return !!el.animate;
};
