<!--
 * @Author: 崔令雨
 * @Date: 2022-11-27 11:28:52
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-12-06 19:05:40
 * @Description: 
-->
<template>
  <div
    class="list_class"
    @click="goSearch">
    <h3 class="h">
      <a
        href="javascript:;"
        :data-name="item.categoryName"
        :data-type1="item.categoryId">
        {{ item.categoryName }}
      </a>
    </h3>
    <div class="classification_details">
      <div
        class="subitem"
        v-for="category in item.categoryChild"
        :key="category.categoryId">
        <dl>
          <dt>
            <a
              :data-name="category.categoryName"
              :data-type2="category.categoryId">
              {{ category.categoryName }}
            </a>
          </dt>
          <dd>
            <em
              v-for="tertiary in category.categoryChild"
              :key="tertiary.categoryId">
              <a
                :data-name="tertiary.categoryName"
                :data-type3="tertiary.categoryId">
                {{ tertiary.categoryName }}
              </a>
            </em>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    goSearch(event) {
      let element = event.target;
      let { name, type1, type2, type3 } = element.dataset;
      if (name) {
        let obj = { path: '/search' };
        let query = {
          categoryName: name,
        };
        if (type1) {
          query.category1Id = type1;
        } else if (type2) {
          query.category2Id = type2;
        } else if (type3) {
          query.category3Id = type3;
        }
        obj.query = query;
        // console.log('this.$route', this.$route);
        this.$router.push(obj);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../../mixer/mixer';
.list_class {
  padding: 5px 0;
  h3 {
    font-weight: 400;
  }
  .classification_details {
    width: 734px;
    min-height: 460px;
    background: #f7f7f7;
    border: 1px solid #ddd;
    position: absolute;
    top: 0;
    left: 210px;
    display: none;
    z-index: 9999 !important;
    .subitem {
      width: 650px;
      padding: 0 4px 0 8px;
      @include clearfix;
      dl {
        dt {
          float: left;
          width: 54px;
          line-height: 22px;
          text-align: right;
          padding: 3px 6px 0 0;
          font-weight: 700;
        }
        dd {
          float: left;
          width: 415px;
          padding: 3px 0 0;
          overflow: hidden;
          em {
            float: left;
            height: 14px;
            line-height: 14px;
            padding: 0 8px;
            margin-top: 5px;
            border-left: 1px solid #ccc;
          }
        }
      }
    }
  }
  &:hover {
    .classification_details {
      display: block;
    }
  }
}
</style>
