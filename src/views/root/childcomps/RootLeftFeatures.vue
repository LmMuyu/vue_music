<template>
  <div class="left">
    <div class="menu_hover">推荐</div>
    <ul class="leftmenu">
      <li
        :class="{ active: active === index }"
        @click="active = index"
        v-for="(features, index) in features"
        :key="features.id"
      >
        <i class="iconfont icon">&#xe601;</i>
        <span :class="{ active_text: active === index }">{{
          features.name
        }}</span>
      </li>
    </ul>
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

.text_transition {
  transition: all 0.2s ease-in-out;
}

.menu_hover {
  background-color: #202023;
  color: #636e72;
  font-size: 16;
  padding: 8px;
}
.left {
  float: left;
  min-width: 200px;
  position: relative;
  height: 100%;
}

.leftmenu {
  max-width: 300px;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    border-right: 1px solid #3a3737;
  }

  & > li {
    width: 100%;
    background: #202023;
    display: flex;
    align-items: center;
    padding: 5px 0;
    box-sizing: content-box;
    cursor: pointer;

    &:hover span,
    i {
      color: $textcolor;
    }

    & > span {
      @extend .text_transition;
      color: #95a5a6;
      font-size: 12px;
    }

    & .icon {
      @extend .text_transition;
      font-size: 18px;
      color: #95a5a6;
      padding: 0 5px;
      margin-left: 10px;
    }
  }
}

li {
  list-style: none;
}

.active_text {
  color: #ecf0f1 !important;
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