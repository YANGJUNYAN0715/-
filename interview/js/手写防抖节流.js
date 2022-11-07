const { timeout } = require("nodemon/lib/config");

// 防抖函数
function debounce(funs, delay) {
  let timer;
  return function () {
    let arg = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      funs(...arg);
    }, delay);
  };
}
// 节流函数
function throttle(funs, wait) {
  let timer;
  return function () {
    let arg = arguments;
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      timer = null;
      funs(...arg);
    }, wait);
  };
}
