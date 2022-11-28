<!--
 * @Author: 崔令雨
 * @Date: 2022-11-27 12:05:53
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-28 12:25:07
 * @Description: 
-->
<template>
  <div class="rot_chart_bul">
    <Carousel />
    <ExpressNews />
  </div>
</template>

<script>
import Carousel from './Carousel';
import ExpressNews from './ExpressNews';
export default {
  components: { Carousel, ExpressNews },
};
</script>

<style lang="scss" scoped>
@import '../../../mixer/mixer';
.rot_chart_bul {
  @include versionCenter;
  @include clearfix;
  height: 100%;
}
</style>
