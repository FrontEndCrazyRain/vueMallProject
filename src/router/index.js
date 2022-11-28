/*
 * @Author: 崔令雨
 * @Date: 2022-11-26 16:52:52
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-26 20:34:53
 * @Description:
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: () => import('@/page/Home'),
    alias: '/',
    meta: { show: true },
  },
  {
    path: '/login',
    component: () => import('@/page/Login'),
    meta: { show: false },
  },
  {
    path: '/register',
    component: () => import('@/page/Register'),
    meta: { show: false },
  },
  {
    path: '/search/:key',
    component: () => import('@/page/Search'),
    name: 'search',
    meta: { show: true },
  },
];

export const router = new VueRouter({
  // base: '/',
  //   mode: 'history',
  routes,
});
