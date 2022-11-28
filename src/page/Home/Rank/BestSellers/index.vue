<!--
 * @Author: 崔令雨
 * @Date: 2022-11-28 12:53:26
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-28 15:23:37
 * @Description: 
-->
<template>
  <div class="tab">
    <div class="tab_list">
      <a href="javascript:;">
        <p>
          <i></i>
        </p>
        <p>热卖排行</p>
      </a>
      <a href="javascript:;">
        <p>
          <i></i>
        </p>
        <p>特价排行</p>
      </a>
      <a href="javascript:;">
        <p>
          <i></i>
        </p>
        <p>新品排行</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tab {
  width: 312px;
  margin: auto;
  padding: 20px;
  .tab_list {
    display: flex;
    justify-content: space-evenly;
    a {
      p {
        i {
          display: block;
          width: 35px;
          height: 35px;
          background: url('../../../../assets/bg0.png');
        }
      }
      &:first-child {
        p {
          i {
            background-position: -35px 0;
          }
        }
      }
    }
  }
}
</style>
