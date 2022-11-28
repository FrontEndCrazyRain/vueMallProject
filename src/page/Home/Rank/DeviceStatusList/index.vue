<!--
 * @Author: 崔令雨
 * @Date: 2022-11-28 12:56:18
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-28 15:53:34
 * @Description: 
-->
<template>
  <div class="device_status_list">
    <DeviceStatus />
    <DeviceStatus />
    <DeviceStatus />
    <DeviceStatus />
  </div>
</template>

<script>
import DeviceStatus from '@/page/Home/Rank/DeviceStatusList/DeviceStatus';
export default {
  components: { DeviceStatus },
};
</script>

<style lang="scss" scoped>
.device_status_list {
  display: flex;
  justify-content: space-around;
}
</style>
