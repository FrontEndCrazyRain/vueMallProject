<!--
 * @Author: 崔令雨
 * @Date: 2022-11-26 16:53:10
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-12-06 14:45:22
 * @Description: 
-->
<template>
  <div class="home">
    <CommodityClassification />
    <RotChartBul />
    <Recommend />
    <Rank />
    <GuessYouLikeIt />
    <HouseholdAppliances
      v-for="item in floorList"
      :key="item.id"
      :item="item" />

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
import { mapState } from 'vuex';

export default {
  components: { CommodityClassification, RotChartBul, Recommend, Rank, GuessYouLikeIt, HouseholdAppliances, Trademark },
  mounted() {},
  computed: {
    ...mapState({
      floorList: state => state.home.floorList,
    }),
  },
  created() {
    this.$store.dispatch('home/getFloorList');
  },
};
</script>

<style lang="scss" scoped>
@import '../../mixer/mixer';

.home {
  @include clearfix;
}
</style>
