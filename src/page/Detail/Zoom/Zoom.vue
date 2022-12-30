<!--
 * @Author: 崔令雨
 * @Date: 2022-12-26 21:13:33
 * @LastEditors: [崔令雨]
 * @LastEditTime: 2022-12-30 18:21:07
 * @Description: 
-->
<template>
  <div class="spec-preview">
    <img :src="imageObj.imgUrl" />
    <div
      class="event"
      @mousemove="handler"></div>
    <div class="big">
      <img
        :src="imageObj.imgUrl"
        ref="big" />
    </div>
    <div
      class="mask"
      ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'Zoom',
  props: ['skuImageList'],
  data() {
    return {
      imageIndex: 0,
    };
  },
  computed: {
    imageObj() {
      return this.skuImageList[this.imageIndex] || {};
    },
  },
  methods: {
    handler(e) {
      const maskNode = this.$refs.mask;
      const target = e.target;
      let left = e.offsetX - maskNode.offsetWidth / 2;
      let top = e.offsetY - maskNode.offsetHeight / 2;
      left =
        left > 0 && left < target.parentElement.offsetWidth - maskNode.offsetWidth
          ? left
          : left < 0
          ? 0
          : target.parentElement.offsetWidth - maskNode.offsetWidth;
      top =
        top > 0 && top < target.parentElement.offsetHeight - maskNode.offsetHeight
          ? top
          : top < 0
          ? 0
          : target.parentElement.offsetHeight - maskNode.offsetHeight;
      maskNode.style.left = left + 'px';
      maskNode.style.top = top + 'px';
      const bigNode = this.$refs.big;
      bigNode.style.left = -left + 'px';
      bigNode.style.top = -top + 'px';
    },
  },
  mounted() {
    this.$bus.$on('changeIndex', index => {
      this.imageIndex = index;
    });
  },
};
</script>

<style lang="scss">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>
