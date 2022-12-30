/*
 * @Author: 崔令雨
 * @Date: 2022-11-28 21:24:40
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-12-26 21:42:53
 * @Description:
 */
import api from '@/api/index';
const actions = {
  async getSearchList({ commit }, data = {}) {
    let searchData = await api.getSearchList(data);
    commit('GETSEARCHLIST', searchData.data);
  },
};

export default actions;
