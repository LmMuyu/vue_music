<template>
  <div>
    <Menu />
    <RootSwiper />
  </div>
</template>

<script>
import RootSwiper from "../components/RootSwiper.vue";

import Menu from "@/components/content/Menu.vue";

export default {
  components: {
    RootSwiper,
    Menu,
  },
};
</script>

<style lang="scss" scoped>
</style>