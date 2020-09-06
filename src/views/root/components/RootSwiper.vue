<template>
  <div>
    <div class="swiper_lsit">
      <div class="swiper_img" v-for="(swiper, index) in swiperimg" :key="index">
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
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.swiper_lsit {
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform-style: preserve-3d;
  overflow: hidden;
}
.swiper_img {
  & > img {
    height: 250px;
    width: 300px;
    object-fit: cover;
  }
}
</style>