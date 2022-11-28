<!--
 * @Author: 崔令雨
 * @Date: 2022-11-28 12:52:58
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-28 15:43:11
 * @Description: 
-->
<template>
  <div class="rank">
    <BestSellers />
    <DeviceStatusList />
  </div>
</template>

<script>
import BestSellers from '@/page/Home/Rank/BestSellers';
import DeviceStatusList from '@/page/Home/Rank/DeviceStatusList';
export default {
  components: { BestSellers, DeviceStatusList },
};
</script>

<style lang="scss" scoped>
@import '../../../mixer/mixer';
.rank {
  @include versionCenter;
}
</style>
