/*
 * @Author: 崔令雨
 * @Date: 2022-11-28 21:33:51
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-28 21:38:48
 * @Description:
 */
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import state from './state';

const home = {
  namespaced: true,
  actions,
  mutations,
  getters,
  state,
};
export default home;
