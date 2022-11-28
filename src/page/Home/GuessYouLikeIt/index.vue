<!--
 * @Author: 崔令雨
 * @Date: 2022-11-28 16:28:14
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-28 17:02:56
 * @Description: 
-->
<template>
  <div class="guess_you_like_it">
    <div class="top">
      <h3>猜你喜欢</h3>
      <a href="javascript:;">换一换</a>
    </div>
    <div class="bottom">
      <ul>
        <li>
          <img
            src="../../../assets/like_01.png"
            alt="like_01" />
          <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
          <h3>¥116.00</h3>
        </li>
        <li>
          <img
            src="../../../assets/like_01.png"
            alt="like_01" />
          <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
          <h3>¥116.00</h3>
        </li>
        <li>
          <img
            src="../../../assets/like_01.png"
            alt="like_01" />
          <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
          <h3>¥116.00</h3>
        </li>
        <li>
          <img
            src="../../../assets/like_01.png"
            alt="like_01" />
          <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
          <h3>¥116.00</h3>
        </li>
        <li>
          <img
            src="../../../assets/like_01.png"
            alt="like_01" />
          <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
          <h3>¥116.00</h3>
        </li>
        <li>
          <img
            src="../../../assets/like_01.png"
            alt="like_01" />
          <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
          <h3>¥116.00</h3>
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
.guess_you_like_it {
  @include versionCenter;

  margin-top: 20px;

  .top {
    @include clearfix;

    h3 {
      float: left;
      font-size: 16px;
    }
    a {
      float: right;
      color: #e4e4e4;
      width: 66px;
      height: 25px;
      text-align: left;
      line-height: 25px;
      background: url('../../../assets/icons.png');
      background-position: -378px -104px;
    }
  }
  .bottom {
    border: 1px solid #e4e4e4;
    ul {
      display: flex;
      li {
        padding: 20px;
        border-right: 1px solid #e4e4e4;
        h3 {
          margin-top: 10px;
        }
        cursor: pointer;
        transition: all 1s;
        &:hover img {
          opacity: 0.8;
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
