/*
 * @Author: 崔令雨
 * @Date: 2022-11-28 21:24:40
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-12-26 21:57:53
 * @Description:
 */
import api from '@/api/index';
const actions = {
  async getDetail({ commit }, skuId) {
    let res = await api.getDetail(skuId);
    res.code === 200 && commit('GETDETAIL', res.data);
  },
};

export default actions;
