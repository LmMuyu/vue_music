<template>
  <div style="position: relative; overflow: hidden">
    <div class="music">
      <i class="iconfont">&#xe602;</i>
      <span>123万</span>
    </div>
    <div ref="description" class="description">
      <span>骄傲的叫我急急急，大晚上的安吉万达今晚就阿加大家啊</span>
    </div>
    <div class="display_box">
      <img
        @mouseenter="mouseenter"
        @mouseout="mouseout"
        @dragstart.prevent
        src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1363986892,2342137081&fm=26&gp=0.jpg"
        alt=""
      />
    </div>
    <div ref="playicon" class="play">
      <i class="iconfont">&#xe7ae;</i>
    </div>
    <div style="title">
      <span style="color:#fff">咿呀咿：看看看看</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    mouseenter() {
      this.$refs.playicon.style = "opacity: 1";
      this.$refs.description.style = "transform: translateY(0px);";
    },
    mouseout() {
      this.$refs.playicon.style = "opacity: 0";
      this.$refs.description.style = "transform: translateY(-50px);";
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.display_box {
  width: 200px;
  height: 200px;

  & > img {
    object-fit: cover;
    width: 200px;
    height: 200px;
  }
}

.play {
  @include flex;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(47, 54, 64, 0.534);
  position: absolute;
  right: 0;
  bottom: 5px;
  opacity: 0;
  transition: all 0.3s ease-in-out;

  & > i {
    font-size: 20px;
    color: #f1ecec;
    position: relative;
    left: 2px;
  }
}

.music {
  @include flex;
  width: calc(100% - 50%);
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  top: 0;
  background: linear-gradient(
    to right,
    rgba(47, 54, 64, 0.25),
    rgba(47, 54, 64, 0.514),
    #2f3640
  );

  & > i,
  span {
    color: #ffffff;
  }

  & > span {
    position: relative;
    top: 1px;
  }
}

.description {
  background: rgba(47, 54, 64);
  padding: 5px 10px;
  line-height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  transform: translateY(-50px);
  transition: all 0.3s ease-in-out;

  & > span {
    color: #f1f2f6;
    white-space: pre-wrap;
    cursor: default;
  }
}

.title{
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #ffffff;
}
</style>