<!--
 * @Author: 崔令雨
 * @Date: 2022-11-26 13:31:18
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-26 16:20:07
 * @Description: 
-->
<template>
  <div class="footer_item">
    <div v-if="!detail.img">
      <h2>{{ detail.title }}</h2>
      <ul>
        <li
          v-for="(item, index) in detail.information"
          :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
    <div v-else>
      <h2>{{ detail.title }}</h2>
      <img
        :src="detail.img"
        alt="微信二维码" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['detail'],
};
</script>

<style lang="scss" scoped></style>
