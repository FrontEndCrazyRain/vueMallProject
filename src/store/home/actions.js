/*
 * @Author: 崔令雨
 * @Date: 2022-11-28 21:24:40
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-30 15:01:53
 * @Description:
 */
import api from '@/api/index';
const actions = {
  async categoryList({ commit }) {
    let list = await api.threeLevelLinkage();
    commit('CATEGORYLIST', list.data);
  },
  async getBanner({ commit }) {
    let data = api.getBanner();
    commit('GETBANNER', (await data).data);
  },
  async getFloorList({ commit }) {
    let data = await api.getFloorList();
    commit('GET_FLOOR_LIST', (await data).data);
  },
};

export default actions;
