<!--
 * @Author: 崔令雨
 * @Date: 2022-11-27 12:34:23
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-28 16:50:49
 * @Description: 
-->
<template>
  <div class="express_news">
    <div class="top">
      <div class="upper">
        <h2>尚品汇快报</h2>
        <span>更多 ></span>
      </div>
      <div class="lower">
        <ul>
          <li>
            <span>[特惠]</span>
            备战开学季 全民半价购数码
          </li>
          <li>
            <span>[特惠]</span>
            备战开学季 全民半价购数码
          </li>
          <li>
            <span>[特惠]</span>
            备战开学季 全民半价购数码
          </li>
          <li>
            <span>[特惠]</span>
            备战开学季 全民半价购数码
          </li>
          <li>
            <span>[特惠]</span>
            备战开学季 全民半价购数码
          </li>
        </ul>
      </div>
    </div>
    <div class="center">
      <ul>
        <li>
          <SvgIcon
            iconClass="cost"
            className="svgCost" />
          <span>话费</span>
        </li>
        <li>
          <SvgIcon
            iconClass="planeTicket"
            className="svgCost"></SvgIcon>
          <span>机票</span>
        </li>
        <li>
          <SvgIcon
            iconClass="cinemaTicket"
            className="svgCost"></SvgIcon>
          <span>电影票</span>
        </li>
        <li>
          <SvgIcon
            iconClass="game"
            className="svgCost"></SvgIcon>
          <span>游戏</span>
        </li>
        <li>
          <SvgIcon
            iconClass="lottery"
            className="svgCost"></SvgIcon>
          <span>彩票</span>
        </li>
        <li>
          <SvgIcon
            iconClass="gasStation"
            className="svgCost"></SvgIcon>
          <span>加油站</span>
        </li>
        <li>
          <SvgIcon
            iconClass="hotel"
            className="svgCost"></SvgIcon>
          <span>酒店</span>
        </li>
        <li>
          <SvgIcon
            iconClass="huo"
            className="svgCost"></SvgIcon>
          <span>火车票</span>
        </li>
        <li>
          <SvgIcon
            iconClass="zc"
            className="svgCost"></SvgIcon>
          <span>众筹</span>
        </li>
        <li>
          <SvgIcon
            iconClass="lc"
            className="svgCost"></SvgIcon>
          <span>理财</span>
        </li>
        <li>
          <SvgIcon
            iconClass="lpk"
            className="svgCost"></SvgIcon>
          <span>礼品卡</span>
        </li>
        <li>
          <SvgIcon
            iconClass="bt"
            className="svgCost"></SvgIcon>
          <span>白条</span>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <img
        src="../../../../assets/ad1.png"
        alt="ad1" />
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon';
export default {
  components: { SvgIcon },
};
</script>

<style lang="scss" scoped>
@import '../../../../mixer/mixer';

.express_news {
  border: 1px solid #e4e4e4;
  float: left;
  margin-top: 5px;
  height: 453px;
  width: 259px;
  .top {
    padding: 0 4px;
    .upper {
      padding: 10px;
      border-bottom: 1px solid #e4e4e4;
      @include clearfix;
      h2 {
        float: left;
      }
      span {
        float: right;
        line-height: 21px;
      }
    }
    .lower {
      ul {
        padding: 10px;
        li {
          padding: 2px 0;
          span {
            font-weight: 700;
          }
        }
      }
    }
    border-bottom: 1px solid #e4e4e4;
  }
  .center {
    height: 215px;
    ul {
      display: flex;
      flex-wrap: wrap;
      height: 100%;
      li {
        box-sizing: border-box;
        width: 25%;
        text-align: center;
        height: 33%;
        .svgCost {
          color: red;
          width: 30px;
          height: 40px;
        }
        span {
          display: block;
        }
      }
    }
  }
  .bottom {
    margin-top: 2px;
    img {
      opacity: 0.8;
      transition: all 400ms;
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
