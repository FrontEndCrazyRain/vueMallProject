<!--
 * @Author: 崔令雨
 * @Date: 2022-11-27 10:51:18
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-12-28 19:55:37
 * @Description: 
-->
<template>
  <div class="commodityClassification">
    <div class="nav">
      <div class="left">
        <div
          @mouseleave="mouseLeftToRemoveBackground"
          @mouseenter="moveInDisplay">
          <h1>全部商品分类</h1>
          <hr />
          <transition name="sort">
            <ClassNav
              :alirKeluarLatar="alirKeluarLatar"
              v-show="show" />
          </transition>
        </div>
      </div>

      <div class="right">
        <a href="#">服装城</a>
        <a href="#">美妆馆</a>
        <a href="#">尚品汇超市</a>
        <a href="#">全球购</a>
        <a href="#">闪购</a>
        <a href="#">团购</a>
        <a href="#">有趣</a>
        <a href="#">秒杀</a>
      </div>
    </div>
  </div>
</template>

<script>
import ClassNav from './ClassNav';
export default {
  components: { ClassNav },
  created() {
    this.$store.dispatch('home/categoryList');
  },
  data() {
    return {
      res: '',
      show: true,
    };
  },

  methods: {
    mouseLeftToRemoveBackground() {
      if ((this.$route.path !== '/home') & (this.$route.path !== '/')) this.show = false;
      this.res();
    },
    alirKeluarLatar(res) {
      this.res = res;
    },
    moveInDisplay() {
      this.show = true;
    },
  },
  mounted() {
    let path = this.$route.path;
    if (path === '/search' || path.indexOf('/detail') !== -1) {
      this.show = false;
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../../mixer/mixer';
.commodityClassification {
  border-bottom: 1px solid #e1251b;
  height: 45px;
  .nav {
    @include versionCenter;
    .left {
      width: 210px;
      float: left;
      h1 {
        width: 100%;
        /* height: 100%; */
        background: #e1251b;
        text-align: center;
        padding: 14px 0;
        color: #ffffff;
        font-size: 14px;
      }
      .sort-enter {
        height: 0;
      }
      .sort-enter-to {
        height: 479.4px;
      }
      .sort-enter-active {
        transition: all 0.5s linear;
      }
    }
    .right {
      line-height: 45px;
      margin-left: 30px;
      float: left;
      a {
        padding: 10px 20px;
        font-size: 14px;
        &:hover {
          color: aqua;
        }
      }
    }
  }
}
</style>
