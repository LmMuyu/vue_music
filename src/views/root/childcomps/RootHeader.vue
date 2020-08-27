<template>
  <div class="header">
    <div class="left">
      <div class="appInfo">
        <el-avatar
          :size="32"
          src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2423808984,2169767440&fm=26&gp=0.jpg"
        ></el-avatar>
        <span>网易云音乐</span>
      </div>
      <div class="search">
        <el-input
          :value="content"
          @input="search"
          size="mini"
          :placeholder="searchText"
          suffix-icon="el-icon-search"
        ></el-input>
      </div>
    </div>
    <div class="right">
      <div class="avatar">
        <el-avatar
          :size="32"
          src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1671247724,3484152546&fm=26&gp=0.jpg"
        ></el-avatar>
        <span class="login"> <router-link to="/">未登录</router-link></span>
        <span class="triangle" />
      </div>
      <div class="application">
        <i class="iconfont" @click="$ipcRenderer.send('miniMize')">&#xe7b1;</i>
        <i class="iconfont" @click="$ipcRenderer.send('close')">&#xe600;</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
  },
  data() {
    return {
      searchText: "搜索",
    };
  },
  methods: {
    search(value) {
      this.$emit("update:content", value);
    },
  },

  mounted() {
    let input = document.querySelector(".el-input__inner");
    input.style.backgroundColor = "#2d3436";
    input.style.height = "20px";
  },
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 40px;
  -webkit-app-region: drag;
  background: #202023;
  padding: 3px 0;
}
.header {
  display: flex;
}
.header div {
  flex: 1;
}
.appInfo {
  display: flex;
  align-items: center;
  & > span {
    color: #ffffff;
    margin-left: 10px;
    font-weight: 300;
  }
}
.avatar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > img {
    cursor: pointer;
  }
  .triangle {
    &::before:hover {
      border-color: #fff transparent transparent transparent;
    }
    &::before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border: 6px solid;
      border-color: #dfe6e9 transparent transparent transparent;
      cursor: pointer;
      -webkit-app-region: no-drag;
    }
  }
  & .login {
    & > a:hover {
      color: #fff;
    }

    & > a {
      text-decoration: none;
      color: #dfe6e9;
      margin-left: 15px;
      cursor: pointer;
      -webkit-app-region: no-drag;
    }
  }
  & span:nth-last-child(1) {
    margin-left: 10px;
    position: relative;
    top: -2px;
  }
}
.right {
  display: flex;
  justify-content: flex-end;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 26px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}
.application {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  i {
    padding: 0 5px;
    cursor: pointer;
    -webkit-app-region: no-drag;
  }
}
.left {
  display: flex;
  align-items: center;
  & .search {
    -webkit-app-region: no-drag;
  }
  & .search > input {
    border-radius: 13px;
    background-color: #202023;
  }
  & div:nth-child(1) {
    flex: 2;
  }
  & div:nth-child(2) {
    flex: 1;
  }
}
.input__inner {
  background: #202023 !important;
}
</style>