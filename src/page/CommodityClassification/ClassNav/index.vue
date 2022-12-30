<!--
 * @Author: 崔令雨
 * @Date: 2022-11-27 11:25:26
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-12-06 19:05:51
 * @Description: 
-->
<template>
  <div class="classificationNavigation">
    <div class="class_nav">
      <ListClass
        v-for="(item, index) in categoryList"
        :key="item.categoryId"
        :item="item"
        :class="{ cur: backgroundStyle === index }"
        @mouseenter.native="mouseMoveInToAddBackground(index)" />
    </div>
  </div>
</template>

<script>
import ListClass from './ListClass';
import { mapState } from 'vuex';
import { throttle } from '@/utils/util';
export default {
  props: ['alirKeluarLatar'],
  components: { ListClass },
  data() {
    return {
      backgroundStyle: -1,
    };
  },
  computed: {
    ...mapState({
      categoryList: state => state.home.categoryList,
    }),
  },
  methods: {
    // mouseMoveInToAddBackground: throttle(function (index) {
    //   this.backgroundStyle = index;
    // }, 50),
    mouseMoveInToAddBackground: throttle(function (index) {
      this.backgroundStyle = index;
    }, 50),
    mouseLeftToRemoveBackground() {
      this.backgroundStyle = -1;
    },
  },
  mounted() {
    this.alirKeluarLatar(this.mouseLeftToRemoveBackground);
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
  position: absolute;
  z-index: 2;
  .class_nav {
    position: absolute;
    /* padding: 13px 20px; */
    .cur {
      background: #e1251b;
      transition: all 500ms;
    }
  }
}
</style>
