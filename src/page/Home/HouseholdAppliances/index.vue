<!--
 * @Author: 崔令雨
 * @Date: 2022-11-28 17:08:10
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-28 18:09:33
 * @Description: 
-->
<template>
  <div class="household_appliances">
    <div class="edition_heart">
      <div class="top">
        <div class="left">
          <h1>家用电器</h1>
        </div>
        <div class="right">
          <ul>
            <li>
              <a href="javascript:;">热门</a>
            </li>
            <li>
              <a href="javascript:;">大家电</a>
            </li>
            <li>
              <a href="javascript:;">生活电器</a>
            </li>
            <li>
              <a href="javascript:;">厨房电器</a>
            </li>
            <li>
              <a href="javascript:;">应季电器</a>
            </li>
            <li>
              <a href="javascript:;">空气/净水</a>
            </li>
            <li>
              <a href="javascript:;">高端电器</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom">
        <div class="tab">
          <div class="tab_01">
            <div class="first">
              <ul>
                <li>节能补贴</li>
                <li>4K电视</li>
                <li>空气净化器</li>
                <li>IH电饭煲</li>
                <li>滚筒洗衣机</li>
                <li>电热水器</li>
              </ul>
            </div>
            <img
              src="../../../assets/floor-1-1.png"
              alt="floor" />
          </div>
          <div class="tab_02">
            <img
              src="../../../assets/floor-1-b01.png"
              alt="floor-1-b01" />
          </div>
          <div class="tab_03">
            <span></span>
            <div>
              <img
                src="../../../assets/floor-1-2.png"
                alt="" />
            </div>
            <div>
              <img
                src="../../../assets/floor-1-3.png"
                alt="" />
            </div>
          </div>
          <div class="tab_04">
            <img
              src="../../../assets/floor-1-4.png"
              alt="" />
          </div>
          <div class="tab_05">
            <span></span>
            <div>
              <img
                src="../../../assets/floor-1-5.png"
                alt="" />
            </div>
            <div>
              <img
                src="../../../assets/floor-1-6.png"
                alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../../../mixer/mixer';
.household_appliances {
  .edition_heart {
    @include versionCenter;
    .top {
      height: 48px;
      line-height: 48px;
      border-bottom: 2px solid #c81623;
      .left {
        float: left;
        h1 {
          color: #c81623;
        }
      }
      .right {
        float: right;
        ul {
          li {
            float: left;
            margin: 0 6px;
            &:first-child {
              a {
                color: #c81623;
              }
            }
            &:nth-child(n + 2) {
              a::before {
                content: '|';
                padding-right: 6px;
              }
            }
          }
        }
      }
    }
    .bottom {
      overflow: hidden;
      height: 360px;
      .tab {
        display: flex;
        height: 100%;
        .tab_01 {
          width: 210px;
          height: 100%;
          background: #f7f7f7;
          .first {
            ul {
              padding-top: 10px;
              li {
                width: 40%;
                float: left;
                text-align: center;
                border-bottom: 1px solid #e4e4e4;
                margin: 5px 10px;
              }
            }
          }
          img {
            width: 100%;
            margin-top: 15px;
          }
        }
        .tab_05,
        .tab_03 {
          position: relative;
          span {
            position: absolute;
            top: 50%;
            transform: translateY(1px);
            width: 100%;
            height: 1px;
            background: #e4e4e4;
          }
        }
      }
    }
  }
}
</style>
