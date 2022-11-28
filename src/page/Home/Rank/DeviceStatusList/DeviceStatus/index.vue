<!--
 * @Author: 崔令雨
 * @Date: 2022-11-28 15:30:23
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-28 15:53:20
 * @Description: 
-->
<template>
  <div class="device_status">
    <p>
      <a href="javascript:;">
        <img
          src="../../../../../assets/1.jpg"
          alt="" />
      </a>
    </p>
    <div class="bottom">
      <div class="details">
        <a href="javascript:;">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
      </div>
      <p>定金：¥100.00</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.device_status {
  width: 269px;
  border: 1px solid #e1251b;
  background: #fff;
  p {
    &:first-child {
      text-align: center;
    }
    a {
      img {
        width: 200px;
        height: 200px;
      }
    }
  }
  .bottom {
    padding: 10px 0 0 10px;
    .details {
      line-height: 28px;
      a {
        font-size: 14px;
      }
    }
    p {
      margin-top: 10px;
      font-size: 16px;
      color: red;
      font-weight: 700;
      margin-bottom: 5px;
    }
  }
}
</style>
