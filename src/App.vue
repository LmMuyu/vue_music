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
    "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  -webkit-app-region: no-drag;
}
@font-face {
  font-family: "iconfont"; /* project id 1810160 */
  src: url("https://at.alicdn.com/t/font_1810160_qt5ucv0rom.eot");
  src: url("https://at.alicdn.com/t/font_1810160_qt5ucv0rom.eot?#iefix")
      format("embedded-opentype"),
    url("https://at.alicdn.com/t/font_1810160_qt5ucv0rom.woff2") format("woff2"),
    url("https://at.alicdn.com/t/font_1810160_qt5ucv0rom.woff") format("woff"),
    url("https://at.alicdn.com/t/font_1810160_qt5ucv0rom.ttf")
      format("truetype"),
    url("https://at.alicdn.com/t/font_1810160_qt5ucv0rom.svg#iconfont")
      format("svg");
}
</style>
