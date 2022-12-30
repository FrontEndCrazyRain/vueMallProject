<!--
 * @Author: 崔令雨
 * @Date: 2022-11-28 12:14:39
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-12-06 11:04:43
 * @Description: 
-->
<template>
  <div class="recommend">
    <div class="core">
      <ul>
        <li>
          <img
            src="../../../assets/clock.png"
            alt="clock" />
          <h3>今日推荐</h3>
        </li>
        <li>
          <img
            src="../../../assets/today01.png"
            alt="today01" />
        </li>
        <li>
          <img
            src="../../../assets/today02.png"
            alt="today02" />
        </li>
        <li>
          <img
            src="../../../assets/today03.png"
            alt="today03" />
        </li>
        <li>
          <img
            src="../../../assets/today04.png"
            alt="today04" />
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
.recommend {
  margin-top: 4px;
  height: 163px;
  .core {
    @include versionCenter;
    margin-top: 15px;
    ul {
      display: flex;
      li {
        width: 25%;
        text-align: center;
        cursor: pointer;
        background: #ebebeb;
        &:first-child {
          background: #5c5251;
          img {
            margin-top: 40px;
          }
          h3 {
            margin-top: 5px;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
