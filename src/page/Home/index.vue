<!--
 * @Author: 崔令雨
 * @Date: 2022-11-26 16:53:10
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-28 18:14:21
 * @Description: 
-->
<template>
  <div class="home">
    <CommodityClassification />
    <RotChartBul />
    <Recommend />
    <Rank />
    <GuessYouLikeIt />
    <HouseholdAppliances />
    <HouseholdAppliances />
    <Trademark />
  </div>
</template>

<script>
import CommodityClassification from '@/page/CommodityClassification';
import RotChartBul from './RotChartBul';
import Recommend from '@/page/Home/Recommend';
import Rank from '@/page/Home/Rank';
import GuessYouLikeIt from '@/page/Home/GuessYouLikeIt';
import HouseholdAppliances from '@/page/Home/HouseholdAppliances';
import Trademark from '@/page/Home/Trademark';
export default {
  components: { CommodityClassification, RotChartBul, Recommend, Rank, GuessYouLikeIt, HouseholdAppliances, Trademark },
};
</script>

<style lang="scss" scoped>
@import '../../mixer/mixer';
.home {
  @include clearfix;
}
</style>
