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

  & > div {
    width: 100%;
    background: #202023;
    display: flex;
    align-items: center;
    padding: 5px 0;
    cursor: pointer;
    box-sizing: border-box;

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

  &::before {
    content: "";
    width: 0;
    height: 0;
    border-width: 5px;
    border-style: solid;
    border-color: aqua;
  }

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    background: red;
  }
}
</style>