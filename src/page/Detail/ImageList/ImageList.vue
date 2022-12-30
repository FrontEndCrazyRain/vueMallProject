<!--
 * @Author: 崔令雨
 * @Date: 2022-12-26 21:13:33
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-12-30 17:50:32
 * @Description: 
-->
<template>
  <div
    class="swiper-container"
    ref="swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(item, index) in skuImageList"
        :key="index">
        <img
          :src="item.imgUrl"
          @click="changeImage(index)" />
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
export default {
  name: 'ImageList',
  props: ['skuImageList'],
  methods: {
    changeImage(index) {
      this.$bus.$emit('changeIndex', index);
    },
  },
  watch: {
    skuImageList() {
      this.$nextTick(() => {
        var mySwiper = new Swiper(this.$refs.swiper, {
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          slidesPerGroup: 3,
          slidesPerView: 3,
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      &:hover {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>
