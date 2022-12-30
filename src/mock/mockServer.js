/*
 * @Author: 崔令雨
 * @Date: 2022-11-30 10:43:26
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-12-02 15:58:17
 * @Description:
 */
import banner from '@/mock/banner';
import floor from '@/mock/floor';
import searchList from './searchList';
import mock from 'mockjs';
mock.mock('/mock/banner', { code: 200, data: banner });
mock.mock('/mock/floor', { code: 200, data: floor });
