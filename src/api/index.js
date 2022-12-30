/*
 * @Author: 崔令雨
 * @Date: 2022-11-28 20:29:26
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-12-30 21:04:01
 * @Description:对api进行统一管理
 */

import requests from './request';
import requestMock from './requestMock';

export default {
  threeLevelLinkage() {
    return requests.get('/product/getBaseCategoryList');
  },
  getBanner() {
    return requestMock.get('/banner');
  },
  getFloorList() {
    return requestMock.get('/floor');
  },
  getSearchList(data) {
    return requests.post('/list', data);
  },
  getDetail(skuId) {
    return requests.get(`/item/${skuId}`);
  },
  saveOrUpdate({ skuId, num }) {
    return requests.post(`/cart/addToCart/${skuId}/${num}`);
  },
};
