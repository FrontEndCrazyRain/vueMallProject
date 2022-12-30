/*
 * @Author: 崔令雨
 * @Date: 2022-11-28 21:26:10
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-30 10:55:39
 * @Description:
 */
const mutations = {
  CATEGORYLIST(state, data) {
    state.categoryList = data;
  },
  GETBANNER(state, data) {
    state.bannerList = data;
  },
  GET_FLOOR_LIST(state, data) {
    state.floorList = data;
  },
};
export default mutations;
