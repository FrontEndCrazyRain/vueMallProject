/*
 * @Author: 崔令雨
 * @Date: 2022-11-27 19:05:21
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-27 19:07:13
 * @Description:
 */
const req = require.context('./svg', false, /\.svg$/);
req.keys().map(req);
