<!--
 * @Author: 崔令雨
 * @Date: 2022-11-27 12:05:53
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-30 14:58:14
 * @Description: 
-->
<template>
  <div class="rot_chart_bul">
    <div class="carousel">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="item in bannerList"
            :key="item.id">
            <img :src="item.imgUrl" />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination pager"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
    <ExpressNews />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ExpressNews from './ExpressNews';
import 'swiper/swiper-bundle.min.css';
import Swiper from 'swiper/swiper-bundle.min.js';
export default {
  components: { ExpressNews },
  computed: {
    ...mapState({
      bannerList: state => state.home.bannerList,
    }),
  },
  mounted() {
    this.$store.dispatch('home/getBanner');
  },
  updated() {
    var mySwiper = new Swiper('.swiper', {
      // direction: 'vertical', // 垂直切换选项
      loop: false, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  },
};
</script>

<style lang="scss" scoped>
@import '../../../mixer/mixer';
.rot_chart_bul {
  @include versionCenter;
  @include clearfix;
  height: 100%;
  .carousel {
    height: 100%;
    overflow: hidden;
    width: 721px;
    display: inline-block;
    margin-top: 6px;
    position: relative;
  }
}
</style>
