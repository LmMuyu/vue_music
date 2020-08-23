<template>
  <div class="header">
    <div class="left">
      <div class="appInfo">
        <el-avatar
          :size="36"
          src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2423808984,2169767440&fm=26&gp=0.jpg"
        ></el-avatar>
        <span>网易云音乐</span>
      </div>
    </div>
    <div class="right">
      <div class="avatar">
        <el-avatar
          :size="36"
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
  methods: {},
  mounted() {},
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 40px;
  -webkit-app-region: drag;
  background: rgb(32, 32, 35);
  padding: 4px 0;
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
    margin-left: 24px;
    font-weight: 300;
  }
}
.avatar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .triangle {
    & :hover::before {
      border-color: #fff transparent transparent transparent;
      transition: all 3s;
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
</style>