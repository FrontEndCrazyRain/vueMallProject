/*
 * @Author: 崔令雨
 * @Date: 2022-11-28 20:19:30
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-30 10:49:03
 * @Description:
 */
import axios from 'axios';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

const requestMock = axios.create({
  baseURL: '/mock',
  timeout: 5000,
});

//请求拦截器
requestMock.interceptors.request.use(
  config => {
    nProgress.start();
    return config;
  },
  err => {
    console.log(err);
    return Promise.reject(err);
  }
);
requestMock.interceptors.response.use(
  res => {
    nProgress.done();
    return res.data;
  },
  err => {
    console.log(err);
    return Promise.reject(err);
  }
);

export default requestMock;
