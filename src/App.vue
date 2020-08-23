<template>
  <div id="app">
    <keep-alive>
      <router-view> </router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(0, 0, 0, 0.65);
  font-size: 13px;
  -webkit-app-region: no-drag;
}
@font-face {
  font-family: "iconfont"; /* project id 1810160 */
  src: url("https://at.alicdn.com/t/font_1810160_u9z4h6kvyt.eot");
  src: url("https://at.alicdn.com/t/font_1810160_u9z4h6kvyt.eot?#iefix")
      format("embedded-opentype"),
    url("https://at.alicdn.com/t/font_1810160_u9z4h6kvyt.woff2") format("woff2"),
    url("https://at.alicdn.com/t/font_1810160_u9z4h6kvyt.woff") format("woff"),
    url("https://at.alicdn.com/t/font_1810160_u9z4h6kvyt.ttf")
      format("truetype"),
    url("https://at.alicdn.com/t/font_1810160_u9z4h6kvyt.svg#iconfont")
      format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
