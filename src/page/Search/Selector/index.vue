<!--
 * @Author: 崔令雨
 * @Date: 2022-11-30 20:52:34
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-12-05 16:38:33
 * @Description: 
-->
<template>
  <div class="selector">
    <div class="container">
      <dl>
        <dt>品牌</dt>
        <dd>
          <ul>
            <li
              v-for="item in trademarkList"
              @click="brand(item)"
              :key="item.tmId">
              {{ item.tmName }}
            </li>
          </ul>
        </dd>
      </dl>
      <dl
        v-for="attr in attrsList"
        :key="attr.attrId">
        <dt>{{ attr.attrName }}</dt>
        <dd
          v-for="(attrValue, i) in attr.attrValueList"
          @click="salesAttributeSelection(attr, attrValue)"
          :key="i">
          {{ attrValue }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('search', {
      trademarkList: state => state.searchList.trademarkList,
      attrsList: state => state.searchList.attrsList,
    }),
  },
  methods: {
    brand(item) {
      this.$emit('chooseABrand', item);
    },
    salesAttributeSelection(arg, val) {
      this.$emit('specificationSelection', arg, val);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../mixer/mixer.scss';
.selector {
  @include versionCenter;
  .container {
    dl {
      @include clearfix;
      dt {
        width: 125px;
        float: left;
        background: #f1f1f1;
        text-align: center;
        border: 1px solid #dddddd;
      }
      &:nth-child(n + 2) dt,
      &:nth-child(n + 2) dd {
        height: 34px;
        line-height: 34px;
      }
      &:nth-child(n + 2) dt {
        border-top: none;
      }
      dd {
        float: left;
      }
      &:nth-child(n + 2) dd {
        padding: 0 10px;
      }

      &:first-child {
        dt {
          height: 105px;
          line-height: 105px;
          border-right: none;
        }
        dd {
          width: 1069px;
          ul {
            @include clearfix;
            li {
              float: left;
              width: 105px;
              height: 52px;
              white-space: nowrap;
              text-overflow: ellipsis;
              text-align: center;
              line-height: 52px;
              color: red;
              font-style: italic;
              font-size: 16px;
              font-weight: 700;
              border: 1px solid #dddddd;
              overflow: hidden;
              &:nth-child(n + 10) {
                margin-top: -1px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
