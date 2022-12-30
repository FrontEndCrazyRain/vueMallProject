/*
 * @Author: 崔令雨
 * @Date: 2022-11-26 16:52:52
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-12-26 21:17:02
 * @Description:
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router';
Vue.use(VueRouter);

const vueRouterPush = VueRouter.prototype.push;
const vueRouterReplace = VueRouter.prototype.replace;

VueRouter.prototype.replace = function replace(location, resolve, reject) {
  reject && resolve
    ? vueRouterReplace.call(this, location, resolve, reject)
    : vueRouterReplace.call(
        location,
        () => {},
        () => {}
      );
};
VueRouter.prototype.push = function push(location, resolve, reject) {
  // if (reject && resolve) {
  //   vueRouterPush.call(this, location, resolve, reject);
  // } else {
  //   vueRouterPush.call(
  //     this,
  //     location,
  //     () => {},
  //     () => {}
  //   );
  // }
  reject && resolve
    ? vueRouterPush.call(this, location, resolve, reject)
    : vueRouterPush.call(
        this,
        location,
        () => {},
        () => {}
      );
};

export const router = new VueRouter({
  // base: '/',
  //   mode: 'history',
  scrollBehavior: () => ({ y: 0, behavior: 'smooth' }),
  routes,
});
