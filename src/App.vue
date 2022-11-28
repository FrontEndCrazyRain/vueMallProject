<!--
 * @Author: 崔令雨
 * @Date: 2022-11-26 10:39:33
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-11-26 20:34:01
 * @Description: 
-->
<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="footerDisplay" />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
  name: 'App',
  components: { Header, Footer },
  computed: {
    footerDisplay() {
      return this.$route.meta.show;
    },
  },
};
</script>

<style lang="scss"></style>
