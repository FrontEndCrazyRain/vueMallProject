<!--
 * @Author: 崔令雨
 * @Date: 2022-11-27 10:51:18
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-27 11:54:26
 * @Description: 
-->
<template>
  <div class="commodityClassification">
    <div class="nav">
      <div class="left">
        <h1>全部商品分类</h1>
        <hr />
        <ClassNav />
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
