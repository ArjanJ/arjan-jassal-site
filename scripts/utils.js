export const delay = async ms =>
  new Promise(resolve => setTimeout(resolve, ms));

export const svgUtils = {
  easeOutCubic: pos => Math.pow(pos - 1, 3) + 1,
  easeInCubic: pos => Math.pow(pos, 3),
  easeInOutCubic: pos => {
    if ((pos /= 0.5) < 1) return 0.5 * Math.pow(pos, 3);
    return 0.5 * (Math.pow(pos - 2, 3) + 2);
  }
};

export const debounce = (func, wait, immediate) => {
  let timeout;
  return function() {
    let context = this,
      args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
