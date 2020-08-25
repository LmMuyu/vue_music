<template>
  <div class="left">
    <div
      style="
        background-color: #202023;
        color: #636e72;
        font-size: 16;
        padding: 0 0 0 8px;
      "
    >
      推荐
    </div>
    <div class="leftmenu">
      <div
        :class="{ active: active === index }"
        @click="active = index"
        v-for="(features, index) in features"
        :key="features.id"
      >
        <i class="iconfont icon">&#xe601;</i>
        <div>{{ features.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          id: "title1",
          name: "发现音乐",
        },
        {
          id: "title2",
          name: "直播",
        },
      ],
      active: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
$textcolor: #dfe6e9;
.left {
  float: left;
  min-width: 200px;
  position: relative;
  height: 100%;
}

.left_title {
  display: flex;
  align-items: center;
  & i {
    padding: 0 5px 0 0;
  }
  & .font {
    font-size: 20px;
  }

  & .titleBefore::before {
    content: "";
    position: relative;
    width: 0;
    height: 0;
    border: 5px solid red;
  }
}
.leftmenu {
  max-width: 300px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 100%;
    box-shadow: 1px 0 0 0 #424242;
  }

  & > div {
    width: 100%;
    background: #202023;
    display: flex;
    align-items: center;
    padding: 5px 0;
    cursor: pointer;
    box-sizing: content-box;

    & > div {
      color: $textcolor;
      font-size: 12px;
    }

    & .icon {
      font-size: 18px;
      color: $textcolor;
      padding: 0 5px;
      margin-left: 10px;
    }
  }
}
.active {
  background: #2e3030 !important;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border-width: 1.5px;
    border-style: solid;
    border-color: #ff7675;
  }
}
</style>