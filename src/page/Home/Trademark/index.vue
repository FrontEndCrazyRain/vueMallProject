<!--
 * @Author: 崔令雨
 * @Date: 2022-11-28 18:11:34
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-28 18:24:45
 * @Description: 
-->
<template>
  <div class="trademark">
    <div class="brand_heart">
      <ul>
        <li>
          <img
            src="../../../assets/brand_11.png"
            alt="brand_11" />
        </li>
        <li>
          <img
            src="../../../assets/brand_11.png"
            alt="brand_11" />
        </li>
        <li>
          <img
            src="../../../assets/brand_11.png"
            alt="brand_11" />
        </li>
        <li>
          <img
            src="../../../assets/brand_11.png"
            alt="brand_11" />
        </li>
        <li>
          <img
            src="../../../assets/brand_11.png"
            alt="brand_11" />
        </li>
        <li>
          <img
            src="../../../assets/brand_11.png"
            alt="brand_11" />
        </li>
        <li>
          <img
            src="../../../assets/brand_11.png"
            alt="brand_11" />
        </li>
        <li>
          <img
            src="../../../assets/brand_11.png"
            alt="brand_11" />
        </li>
        <li>
          <img
            src="../../../assets/brand_11.png"
            alt="brand_11" />
        </li>
        <li>
          <img
            src="../../../assets/brand_11.png"
            alt="brand_11" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../../../mixer/mixer';
.trademark {
  margin: 10px 0;
  .brand_heart {
    @include versionCenter;
    background: #f7f7f7;
    @include clearfix;
    ul {
      display: flex;
      padding: 10px 0;
      justify-content: space-around;
      li {
        width: 120px;
        height: 37px;
        img {
          padding-left: 16px;
        }
        &:nth-child(n + 2) {
          border-left: 1px dashed #cccccc;
        }
      }
    }
  }
}
</style>
