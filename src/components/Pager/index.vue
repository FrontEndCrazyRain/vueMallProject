<!--
 * @Author: 崔令雨
 * @Date: 2022-12-06 11:09:41
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-12-06 13:24:44
 * @Description: 
-->
<template>
  <div class="page">
    <div class="pagination_bar">
      <div class="container">
        <ul>
          <li
            v-show="pageCurrent.start > 2"
            @click="paginationQuery(current - 1)">
            <a href="javascript:;">«上一页</a>
          </li>
          <li
            v-show="pageCurrent.start >= 2"
            @click="paginationQuery(1)"
            :class="{ active: current === 1 }">
            <a href="javascript:;">1</a>
          </li>
          <li v-show="pageCurrent.start > 2">
            <a href="javascript:;">...</a>
          </li>
          <template v-for="(item, index) in pageCurrent.end">
            <li
              v-if="item >= pageCurrent.start"
              :key="index"
              @click="paginationQuery(item)"
              :class="{ active: current === item }">
              <a href="javascript:;">
                {{ item }}
              </a>
            </li>
          </template>
          <li v-show="pageCurrent.end <= pageCount - 2">
            <a href="javascript:;">...</a>
          </li>
          <li
            v-show="consecutive <= pageCount"
            @click="paginationQuery(pageCount)"
            :class="{ active: current === pageCount }">
            <a href="javascript:;">{{ pageCount }}</a>
          </li>
          <li
            v-show="pageCurrent.end < pageCount"
            @click="paginationQuery(pageCurrent.end - 1)">
            <a href="javascript:;">下一页»</a>
          </li>
        </ul>
        <div class="total">
          <span>共{{ pageCount }}页</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['current', 'pageSize', 'total', 'consecutive'],
  computed: {
    pageCount() {
      return Math.ceil(this.total / this.pageSize);
    },
    pageCurrent() {
      let start = 0,
        end = 0;
      if (this.consecutive >= this.pageCount) {
        start = 1;
        end = this.pageCount;
      } else {
        this.current < 3 ? (start = 1) : (start = this.current - Math.floor(this.consecutive / 2));
        this.current > 29 ? (end = 31) : (end = this.current + Math.floor(this.consecutive / 2));
      }
      console.log(start, end);
      return { start, end };
    },
  },
  methods: {
    paginationQuery(current) {
      this.$emit('pageEmit', current);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../mixer/mixer.scss';
.page {
  @include versionCenter;

  .pagination_bar {
    display: flex;
    justify-content: center;
    .container {
      @include clearfix;
      margin: 20px 0;
      ul {
        float: left;

        li {
          float: left;
          line-height: 18px;
          padding: 9px 18px;
          border: 1px solid #e0e9ee;
          cursor: pointer;
        }
      }
      .total {
        float: left;
        margin-left: 10px;
        padding: 9px 18px;
      }
      .active {
        background: rgb(0, 204, 255);
      }
    }
  }
}
</style>
