/*
 * @Author: 崔令雨
 * @Date: 2022-11-28 20:19:30
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-28 21:10:21
 * @Description:
 */
import axios from 'axios';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

const requests = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

//请求拦截器
requests.interceptors.request.use(
  config => {
    nProgress.start();
    return config;
  },
  err => {
    console.log(err);
    return Promise.reject(err);
  }
);
requests.interceptors.response.use(
  res => {
    nProgress.done();
    return res.data;
  },
  err => {
    console.log(err);
    return Promise.reject(err);
  }
);

export default requests;
