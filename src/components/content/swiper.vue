<template>
  <div class="swiper_content">
    <div class="swiper_lsit">
      <div
        class="swiper_img"
        :class="activeClass(index)"
        v-for="(swiper, index) in swiperimg"
        :key="index"
      >
        <img :src="swiper" @dragstart.prevent alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperimg: [
        "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg",
        "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg",
        "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg",
        "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3083628958,720420874&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1232126147,3359655446&fm=26&gp=0.jpg",
      ],
      currentIndex: 0,
    };
  },
  computed: {
    activeClass() {
      return function (i) {
        let prev =
          this.currentIndex === 0 ? this.swiperimg - 1 : this.currentIndex - 1;
        let next =
          this.currentIndex === this.swiperimg - 1 ? 0 : this.currentIndex + 1;

        switch (i) {
          case this.currentIndex:
            return "active";
          case prev:
            return "prev";
          case next:
            return "next";
          default:
            return "";
        }
      };
    },
  },
  methods: {
    runSwiper() {
      setInterval(() => {
        this.currentIndex =
          this.currentIndex < this.swiperimg.length - 1
            ? (this.currentIndex += 1)
            : 0;
      }, 6000);
    },
  },
  mounted() {
    this.runSwiper();
  },
};
</script>

<style lang="scss" scoped>
.swiper_content {
  margin-top: 10px;
  width: 100%;
}
.swiper_lsit {
  width: 100%;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  transform-style: preserve-3d;
  overflow: hidden;
}
.swiper_img {
  position: absolute;
  transform: translate3d(0, 0, -300px) scale(0.8);
  transition: all 5s linear;
  border-radius: 8px;
  overflow: hidden;

  & > img {
    height: 200px;
    width: 400px;
    object-fit: cover;
  }
}
.active {
  transform: translate3d(0, 0, 300px) scale(1);
}
.prev {
  transform: translate3d(-80%, 0, -200px) scale(0.8);
}
.next {
  transform: translate3d(80%, 0, -100px) scale(0.8);
}
</style>