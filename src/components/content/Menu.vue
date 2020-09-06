<template>
  <div class="menu">
    <ul class="menu_size">
      <li
        :class="{ len: active === index }"
        v-for="(menu, index) in menuList"
        :key="menu.id"
      >
        <span
          class="menu_title"
          :style="{ color: active === index ? '#fff' : '' }"
          @click="active = index"
          >{{ menu.name }}</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      menuList: [
        {
          id: "gedan",
          name: "歌单",
        },
        {
          id: "paihangbang",
          name: "排行榜",
        },
        {
          id: "geshou",
          name: "歌手",
        },
        {
          id: "zuixinyinyue",
          name: "最新音乐",
        },
        {
          id: "gexingyuijian",
          name: "个性推荐",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$textcolor: #969696;
@mixin flex {
  display: flex;
  justify-content: center;
}

.menu {
  padding: 5px 0 0 0;
  @include flex;
  box-shadow: 0 1px 0px #3d4042;
}
.menu_size {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block-start: 0;
  margin-block-end: 0;

  li {
    list-style-type: none;
    cursor: default;
    position: relative;

    span {
      display: block;
      padding: 0 20px 0 20px;
      color: $textcolor;
      line-height: 43px;

      &:hover {
        color: #ffffff;
      }

      font: {
        size: 15px;
        weight: 400;
      }
    }

    .menu_title {
      transition: all 0.1s;
    }
  }
}
.len::after {
  content: "";
  width: 100%;
  height: 1px;
  background: #636e72;
  float: left;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>