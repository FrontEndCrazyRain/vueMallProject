/*
 * @Author: 崔令雨
 * @Date: 2022-11-26 10:39:33
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-12-06 11:12:22
 * @Description:
 */
import Vue from 'vue';
import App from './App.vue';
import { router } from '@/router';
import SvgIcon from '@/components/SvgIcon';
import '@/assets/icons/index';
import store from '@/store/index';
import mockServer from '@/mock/mockServer';
Vue.config.productionTip = false;
import Pager from '@/components/Pager';
Vue.component('SvgIcon', SvgIcon);
Vue.component('Pager', Pager);

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount('#app');
