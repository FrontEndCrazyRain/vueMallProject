/*
 * @Author: 崔令雨
 * @Date: 2022-11-28 21:17:41
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-12-26 21:41:40
 * @Description:
 */
import Vue from 'vue';
import Vuex from 'vuex';
import actions from '@/store/global/actions';
import state from '@/store/global/state';
import mutations from '@/store/global/mutations';
import getters from '@/store/global/getters';
import home from './home';
import search from './search';
import detail from './detail';
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    home,
    search,
    detail,
  },
});
