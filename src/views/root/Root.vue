<template>
  <div class="root">
    <RootHeader :content.sync="searchContent" />
    <RootLeftFeatures />

    <div class="content">
      <nav class="nav">
        <Menu />
      </nav>
      <article class="zhu_content">
        <div>
          <Swiper />
          <RootRecommendedRlaylist />
          <DisplayBoxContent />
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/content/Menu.vue";
import Swiper from "@/components/content/Swiper.vue";
import DisplayBoxContent from "@/components/content/DisplayBox/DisplayBoxContent.vue";

import RootHeader from "./childcomps/RootHeader.vue";
import RootLeftFeatures from "./childcomps/RootLeftFeatures.vue";
import RootRecommendedRlaylist from "./childcomps/RootRecommendedRlaylist.vue";

export default {
  components: {
    RootRecommendedRlaylist,
    DisplayBoxContent,
    RootLeftFeatures,
    RootHeader,
    Swiper,
    Menu,
  },
  data() {
    return {
      searchContent: "",
    };
  },
};
</script>

<style scoped lang="scss">
.root {
  height: 100%;
  overflow: auto;
}
.content {
  padding: 0 12px;
  overflow: scroll;
}

.zhu_content {
  margin: 0 32px;
}
</style>