<!--
 * @Author: 崔令雨
 * @Date: 2022-11-28 17:08:10
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-30 15:36:39
 * @Description: 
-->
<template>
  <div class="household_appliances">
    <div class="edition_heart">
      <div class="top">
        <div class="left">
          <h1>{{ item.name }}</h1>
        </div>
        <div class="right">
          <ul>
            <li
              v-for="(ketWord, index) in item.keywords"
              :key="index">
              <a href="javascript:;">{{ ketWord }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom">
        <div class="tab">
          <div class="tab_01">
            <div class="first">
              <ul>
                <li
                  v-for="(n, i) in item.navList"
                  :key="i">
                  {{ n.text }}
                </li>
              </ul>
            </div>
            <img
              :src="item.imgUrl"
              alt="floor" />
          </div>
          <div class="tab_02">
            <div class="swiper">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="carousel in item.carouselList"
                  :key="carousel.id">
                  <img :src="carousel.imgUrl" />
                </div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination pager"></div>

              <!-- 如果需要导航按钮 -->
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
          <div class="tab_03">
            <span></span>
            <div>
              <img
                :src="item.recommendList[0]"
                alt="" />
            </div>
            <div>
              <img
                :src="item.recommendList[1]"
                alt="" />
            </div>
          </div>
          <div class="tab_04">
            <img
              :src="item.bigImg"
              alt="" />
          </div>
          <div class="tab_05">
            <span></span>
            <div>
              <img
                :src="item.recommendList[2]"
                alt="" />
            </div>
            <div>
              <img
                :src="item.recommendList[3]"
                alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/swiper-bundle.min.css';
import Swiper from 'swiper/swiper-bundle.min.js';
export default {
  props: ['item'],
  mounted() {
    var mySwiper = new Swiper('.swiper', {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  },
};
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
        .tab_02 {
          width: 330px;
          position: relative;
          overflow: hidden;
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
