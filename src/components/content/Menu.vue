<template>
  <div class="menu">
    <div>个性推荐</div>
    <div>歌单</div>
    <div>排行榜</div>
    <div>歌手</div>
    <div>最新音乐</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
$textcolor: #b2bec3;
.menu {
  width: 100vh;
  display: flex;
  justify-content: center;
  & > div {
    color: $textcolor;
    font-size: 16px;
  }
}
</style>