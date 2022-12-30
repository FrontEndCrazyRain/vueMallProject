<!--
 * @Author: 崔令雨
 * @Date: 2022-11-26 16:54:50
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-12-26 21:27:09
 * @Description: 
-->
<template>
  <div class="search">
    <CommodityClassification />

    <div class="bread">
      <dl>
        <dt><a href="#">全部结果</a></dt>
        <dd v-if="searchListParams.categoryName">
          {{ searchListParams.categoryName }}
          <i @click="removeClass">×</i>
        </dd>
        <dd v-if="searchListParams.keyWord">
          {{ searchListParams.keyWord }}
          <i @click="removeKeyWord">×</i>
        </dd>
        <dd v-if="searchListParams.trademark">
          {{ searchListParams.trademark.substring(2) }}
          <i @click="removeTrademark">×</i>
        </dd>
        <dd
          v-for="(item, index) in searchListParams.props"
          :key="index">
          {{ item.split(':')[1] }}
          <i @click="removeProp(index)">×</i>
        </dd>
      </dl>
    </div>
    <Selector
      @chooseABrand="chooseABrand"
      @specificationSelection="specificationSelection" />

    <div class="comprehensive_nav">
      <div class="comprehensive">
        <ul>
          <li
            :class="{ redStyle: isComprehensive }"
            @click="productSorting(1)">
            综合
            <SvgIcon
              v-show="isComprehensive"
              :iconClass="iconClass" />
          </li>
          <li
            :class="{ redStyle: isSales }"
            @click="productSorting(2)">
            销量
            <SvgIcon
              v-show="isSales"
              :iconClass="iconClass" />
          </li>
          <li
            :class="{ redStyle: isNew }"
            @click="productSorting(3)">
            新品
            <SvgIcon
              v-show="isNew"
              :iconClass="iconClass" />
          </li>
          <li
            :class="{ redStyle: isEvaluation }"
            @click="productSorting(4)">
            评价
            <SvgIcon
              v-show="isEvaluation"
              :iconClass="iconClass" />
          </li>
          <li
            :class="{ redStyle: isPrice }"
            @click="productSorting(5)">
            价格
            <SvgIcon
              v-show="isPrice"
              :iconClass="iconClass" />
          </li>
        </ul>
      </div>
    </div>
    <div class="phone">
      <div class="phone_list">
        <ul>
          <li
            v-for="item in goodsList"
            :key="item.id">
            <div class="list_wrap">
              <div class="p_img">
                <router-link :to="`/detail/${item.id}`">
                  <img
                    :src="item.defaultImg"
                    alt="mobile01" />
                </router-link>
              </div>
              <div class="price">
                <strong>
                  <em>¥</em>
                  <i>{{ item.price }}</i>
                </strong>
              </div>
              <div class="describe">
                <a
                  href="javascript:;"
                  :title="item.title">
                  {{ item.title }}
                </a>
              </div>
              <div class="evaluate">
                <i>
                  已有
                  <span>{{ item.hotScore }}</span>
                  人评价
                </i>
              </div>
              <div class="operation">
                <a href="javascript:;">加入购物车</a>
                <a href="javascript:;">收藏</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Pager
      :current="searchListParams.pageNo"
      :pageSize="searchListParams.pageSize"
      :total="total"
      :consecutive="5"
      @pageEmit="pageEmit" />
    <div class="hot_commodities">
      <div class="commodities">
        <h3>热卖商品</h3>
        <div class="commodity">
          <ul>
            <li>
              <div class="wrap">
                <div class="img_wrap">
                  <img
                    src="../../../public/images/like_01.png"
                    alt="like_01" />
                </div>
                <div class="attr">
                  <em>Apple苹果iPhone 6s (A1699)</em>
                </div>
                <div class="price">
                  <strong>
                    <em>¥</em>
                    <i>4088.00</i>
                  </strong>
                </div>
                <div class="commit">
                  <i>已有700人评价</i>
                </div>
              </div>
            </li>
            <li>
              <div class="wrap">
                <div class="img_wrap">
                  <img
                    src="../../../public/images/like_01.png"
                    alt="like_01" />
                </div>
                <div class="attr">
                  <em>Apple苹果iPhone 6s (A1699)</em>
                </div>
                <div class="price">
                  <strong>
                    <em>¥</em>
                    <i>4088.00</i>
                  </strong>
                </div>
                <div class="commit">
                  <i>已有700人评价</i>
                </div>
              </div>
            </li>
            <li>
              <div class="wrap">
                <div class="img_wrap">
                  <img
                    src="../../../public/images/like_01.png"
                    alt="like_01" />
                </div>
                <div class="attr">
                  <em>Apple苹果iPhone 6s (A1699)</em>
                </div>
                <div class="price">
                  <strong>
                    <em>¥</em>
                    <i>4088.00</i>
                  </strong>
                </div>
                <div class="commit">
                  <i>已有700人评价</i>
                </div>
              </div>
            </li>
            <li>
              <div class="wrap">
                <div class="img_wrap">
                  <img
                    src="../../../public/images/like_01.png"
                    alt="like_01" />
                </div>
                <div class="attr">
                  <em>Apple苹果iPhone 6s (A1699)</em>
                </div>
                <div class="price">
                  <strong>
                    <em>¥</em>
                    <i>4088.00</i>
                  </strong>
                </div>
                <div class="commit">
                  <i>已有700人评价</i>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommodityClassification from '@/page/CommodityClassification';
import Selector from './Selector';
import { mapState } from 'vuex';
export default {
  components: { CommodityClassification, Selector },
  methods: {
    getSearchList() {
      this.$store.dispatch('search/getSearchList', this.searchListParams);
    },
    clearSearchParams() {
      this.searchListParams.category1Id = '';
      this.searchListParams.category2Id = '';
      this.searchListParams.category3Id = '';
    },
    removeClass() {
      this.searchListParams.category1Id = undefined;
      this.searchListParams.category2Id = undefined;
      this.searchListParams.category3Id = undefined;
      this.searchListParams.categoryName = undefined;
      this.getSearchList();
      let params = this.$route.params;
      Object.values(params).length !== 0 && this.$router.push({ name: 'search', params });
    },
    removeKeyWord() {
      this.searchListParams.keyWord = undefined;
      this.$bus.$emit('deleteKey');
      this.getSearchList();
      let query = this.$route.query;
      Object.values(query).length !== 0 && this.$router.push({ name: 'search', query });
    },
    chooseABrand({ tmId, tmName }) {
      this.searchListParams.trademark = `${tmId}:${tmName}`;
      this.getSearchList();
    },
    removeTrademark() {
      this.searchListParams.trademark = undefined;
      this.getSearchList();
    },
    specificationSelection({ attrId, attrName }, val) {
      let arr = this.searchListParams.props;
      let str = `${attrId}:${val}:${attrName}`;
      arr.indexOf(str) === -1 && arr.push(str);
      this.getSearchList();
    },
    removeProp(index) {
      this.searchListParams.props.splice(index, 1);
      this.getSearchList();
    },
    productSorting(flag) {
      let order = this.searchListParams.order;
      const originalFlag = order.split(':')[0];
      const originalSort = order.split(':')[1];
      originalFlag === flag + ''
        ? (this.searchListParams.order = `${originalFlag}:${originalSort === 'desc' ? 'asc' : 'desc'}`)
        : (this.searchListParams.order = `${flag}:desc`);
    },
    pageEmit(current) {
      this.searchListParams.pageNo = current;
      this.getSearchList();
    },
  },
  mounted() {
    this.getSearchList();
  },
  //#region
  // beforeRouteUpdate(to, from) {
  //   this.clearSearchParams();
  //   Object.assign(this.searchListParams, to.params, from.query, to.query);
  //   this.getSearchList();
  //   console.log('this.searchListParams', this.searchListParams);
  // },
  //endregion
  data() {
    return {
      searchListParams: {
        category1Id: '',
        category2Id: '',
        category3Id: '',
        categoryName: '',
        keyWord: '',
        order: '1:desc',
        pageNo: 1,
        pageSize: 3,
        props: [],
        trademark: '',
      },
    };
  },
  created() {
    Object.assign(this.searchListParams, this.$route.query, this.$route.params);
  },

  computed: {
    ...mapState('search', {
      goodsList: state => state.searchList.goodsList || [],
      pageNo: state => state.searchList.pageNo,
      pageSize: state => state.searchList.pageSize,
      total: state => state.searchList.total,
      totalPages: state => state.searchList.totalPages,
    }),
    iconClass() {
      return this.searchListParams.order.indexOf('desc') !== -1 ? 'down' : 'up';
    },
    isComprehensive() {
      return this.searchListParams.order.indexOf('1') !== -1;
    },
    isSales() {
      return this.searchListParams.order.indexOf('2') !== -1;
    },
    isNew() {
      return this.searchListParams.order.indexOf('3') !== -1;
    },
    isEvaluation() {
      return this.searchListParams.order.indexOf('4') !== -1;
    },
    isPrice() {
      return this.searchListParams.order.indexOf('5') !== -1;
    },
    ...mapState('search', {
      total: state => state.searchList.total,
      totalPages: state => state.searchList.totalPages,
    }),
  },
  watch: {
    $route(newV, oldV) {
      Object.assign(this.searchListParams, this.$route.query, this.$route.params);
      this.getSearchList();
      this.clearSearchParams();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../mixer/mixer';
.search {
  .bread {
    @include versionCenter;
    margin-top: 10px;
    margin-bottom: 10px;
    dl {
      dt {
        display: inline-block;
        padding: 0 15px;
      }
      dd {
        cursor: pointer;
        display: inline-block;
        padding: 0 5px;
        border: 1px solid #dedede;
        background: #f7f7f7;
        margin-right: 4px;
        i {
          padding-left: 4px;
        }
      }
    }
  }
  .comprehensive_nav {
    @include versionCenter;
    height: 42px;
    box-shadow: 0 1px 4px rgb(0, 0, 0, 7%);
    margin-top: 10px;
    border: 1px solid #dddddd;
    .comprehensive {
      ul {
        @include clearfix;
        li {
          color: #8c8c8c;
          float: left;
          text-align: center;
          line-height: 42px;
          padding: 0 20px;
          cursor: pointer;
        }
        .redStyle {
          background: red;
        }
      }
    }
  }
  .phone {
    @include versionCenter;
    .phone_list {
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 20%;
          height: 100%;
          .p_img {
            width: 215px;
            height: 255px;
            img {
              width: 100%;
            }
          }
          .price {
            padding-left: 10px;
            strong {
              font-size: 16px;
              color: red;
              font-weight: 700;
            }
          }
          .describe {
            min-height: 38px;
            line-height: 1.8;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            padding-left: 10px;
            a {
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .evaluate {
            padding-left: 10px;
            margin-bottom: 8px;
            i {
              span {
                color: #646fb0;
                font-weight: 700;
              }
            }
          }
          .operation {
            padding-left: 10px;
            a {
              padding: 4px 8px;
              &:hover {
                text-decoration: none;
              }
              &:first-child {
                border: 1px solid red;
                margin-right: 10px;
                color: red;
              }

              &:last-child {
                border: 1px solid #8c8c8c;
                padding: 4px 26px;
                color: #8c8c8c;
              }
              &:first-child:hover {
                background: red;
                color: #f7f7f7;
              }
              &:last-child:hover {
                background: #8c8c8c;
                color: #f7f7f7;
              }
            }
            margin-bottom: 8px;
          }
        }
      }
    }
  }

  .hot_commodities {
    @include versionCenter;
    .commodities {
      border: 1px solid #dddddd;
      h3 {
        padding: 2px 0 2px 10px;
        background: #f1f1f1;
        border-bottom: 1px solid #dddddd;
      }
      .commodity {
        ul {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          li {
            .wrap {
              padding-left: 20px;
              .attr {
                width: 85%;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
              }
              .price {
                color: red;
                font-size: 18px;
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
}
</style>
