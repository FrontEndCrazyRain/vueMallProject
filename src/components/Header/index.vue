<!--
 * @Author: 崔令雨
 * @Date: 2022-11-26 11:44:02
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-28 15:11:29
 * @Description: 
-->
<template>
  <header>
    <div class="top">
      <div class="top_versionCenter">
        <div class="right">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register">免费注册</router-link>
          </p>
        </div>
        <div class="left">
          <a href="#">我的订单</a>
          <a href="#">我的购物车</a>
          <a href="#">我的尚品汇</a>
          <a href="#">尚品汇会员</a>
          <a href="#">企业采购</a>
          <a href="#">关注尚品汇</a>
          <a href="#">合作招商</a>
          <a href="#">商家后台</a>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom_versionCenter">
        <div class="left">
          <h1>
            <router-link to="/home">
              <img
                src="../../assets/logo.png"
                alt="logo" />
            </router-link>
          </h1>
        </div>
        <div class="right">
          <form>
            <input
              type="text"
              placeholder="请输入"
              v-model.trim="commodity" />
            <button @click="searchProducts">搜索</button>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      commodity: '' || undefined,
    };
  },
  methods: {
    searchProducts() {
      this.$router.push(`/search/${this.commodity}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../mixer/mixer';
header {
  .top {
    background: #eaeaea;
    .top_versionCenter {
      @include clearfix;
      @include versionCenter;
      .right {
        float: left;
        padding: 6px;
        p {
          float: left;
          margin-right: 5px;
          font-size: 12px;
          a {
            display: inline-block;
            padding: 0 5px;
          }
          & :nth-child(2) {
            border-right: 1px solid #b3aeae;
          }
        }
      }
      .left {
        float: right;
        padding: 6px 0;
        a {
          padding: 0 12px;
        }
        & :nth-child(n + 2) {
          border-left: 1px solid #b3aeae;
        }
      }
    }
  }
  .bottom {
    @include clearfix;
    .bottom_versionCenter {
      @include versionCenter;
      .left {
        float: left;
        h1 {
          a {
            img {
              padding: 25px 45px;
            }
          }
        }
      }
      .right {
        float: right;
        margin-top: 30px;
        form {
          position: relative;
          input {
            box-sizing: border-box;
            width: 490px;
            height: 32px;
            border: 1px solid #ea4a36;
            padding-left: 5px;
            outline: none;
          }
          button {
            position: absolute;
            height: 32px;
            width: 68px;
            background: #ea4a36;
            color: #ffffff;
            border: none;
            top: 0;
            right: 0;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
