/*
 * @Author: 崔令雨
 * @Date: 2022-11-29 16:01:49
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-29 16:13:48
 * @Description:
 */
export let antiShake = (fn, time = 200) => {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    setTimeout(() => {
      fn.apply(this, args);
    }, time);
  };
};

export let throttle = (fn, time = 200) => {
  let flag = true;
  return function (...args) {
    if (!flag) return;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, time);
  };
};
