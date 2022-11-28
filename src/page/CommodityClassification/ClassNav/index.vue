<!--
 * @Author: 崔令雨
 * @Date: 2022-11-27 11:25:26
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-27 12:41:31
 * @Description: 
-->
<template>
  <div class="classificationNavigation">
    <div class="class_nav">
      <ListClass
        v-for="(item, index) in list"
        :key="index"
        :item="item" />
    </div>
  </div>
</template>

<script>
import ListClass from './ListClass';
export default {
  components: { ListClass },
  data() {
    return {
      list: [
        {
          title: '图书、音像、数字商品',
        },
        {
          title: '家用电器',
        },
        {
          title: '手机、数码、充值',
        },
        {
          title: '电脑、办公',
        },
        {
          title: '家居、家具、家装、厨具',
        },
        {
          title: '服饰内衣',
        },
        {
          title: '个护化妆',
        },
        {
          title: '运动健康',
        },
        {
          title: '汽车用品',
        },
        {
          title: '彩票、旅行',
        },
        {
          title: '理财、众筹',
        },
        {
          title: '母婴、玩具',
        },
        {
          title: '箱包',
        },
        {
          title: '运动户外',
        },
        {
          title: '嘿嘿嘿',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../../mixer/mixer';
.classificationNavigation {
  background: #fafafa;
  @include versionCenter;
  width: 210px;
  height: 100%;
  .class_nav {
    padding: 13px 20px;
  }
}
</style>
