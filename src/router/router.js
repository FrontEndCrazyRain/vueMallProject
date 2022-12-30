/*
 * @Author: 崔令雨
 * @Date: 2022-12-26 21:31:50
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-12-30 21:32:45
 * @Description:
 */
const routes = [
  {
    path: '/addCartSuccess',
    component: () => import('@/page/AddCartSuccess'),
    name: 'AddCartSuccess',
    meta: { show: true },
  },
  {
    path: '/addSuccess',
    component: () => import('@/page/ShopCart'),
    meta: { show: true },
  },
  {
    path: '/cart',
    component: () => import('@/page/cart'),
    meta: { show: true },
  },
  {
    path: '/detail/:skuId',
    component: () => import('@/page/Detail'),
    meta: { show: true },
  },
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
    path: '/search/:keyWord?',
    name: 'search',
    meta: { show: true },
    component: () => import('@/page/Search'),
  },
];
export default routes;
