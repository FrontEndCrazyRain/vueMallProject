/*
 * @Author: 崔令雨
 * @Date: 2022-11-26 10:39:33
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-27 20:40:18
 * @Description:
 */
import Vue from 'vue';
import App from './App.vue';
import { router } from '@/router';
// import SvgIcon from '@/components/SvgIcon';
import '@/assets/icons/index';
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
