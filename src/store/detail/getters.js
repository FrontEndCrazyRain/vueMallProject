/*
 * @Author: 崔令雨
 * @Date: 2022-11-28 21:26:39
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-12-28 20:24:53
 * @Description:
 */
const getters = {
  categoryView(state) {
    return state.goodInfo.categoryView || {};
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || [];
  },
};
export default getters;
