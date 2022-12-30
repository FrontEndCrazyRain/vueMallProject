/*
 * @Author: 崔令雨
 * @Date: 2022-11-26 10:39:33
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-28 20:45:15
 * @Description:
 */
const { defineConfig } = require('@vue/cli-service');

const path = require('path');

let absolutePath = val => path.join(__dirname, val);
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例
  // 允许对内部的 webpack 配置进行更细粒度的修改
  chainWebpack: config => {
    // 配置svg默认规则排除icons目录中svg文件处理
    config.module.rule('svg').exclude.add(absolutePath('src/assets/icons')).end();

    // 新增icons规则，设置svg-sprite-loader处理icons目录中svg文件
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(absolutePath('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
      .end();
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
      },
    },
  },
});
