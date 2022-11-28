<!--
 * @Author: 崔令雨
 * @Date: 2022-11-27 11:28:52
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-27 12:41:26
 * @Description: 
-->
<template>
  <div class="list_class">
    <h3>
      <a href="#">{{ item.title }}</a>
    </h3>
  </div>
</template>

<script>
export default {
  props: ['item'],
};
</script>

<style lang="scss" scoped>
.list_class {
  margin: 10px 0;
  h3 {
    font-weight: 400;
  }
}
</style>
