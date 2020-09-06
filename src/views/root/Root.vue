<template>
  <div class="root">
    <RootHeader :content.sync="searchContent" />
    <RootLeftFeatures />
    <div class="content">
      <component :is="iscomponents" v-bind="$attrs" name="name"></component>
    </div>
  </div>
</template>

<script>
import RootHeader from "./childcomps/RootHeader.vue";
import RootLeftFeatures from "./childcomps/RootLeftFeatures.vue";

import RootMusicMenu from "./childcomps/RootMusicMenu.vue";

export default {
  components: {
    RootLeftFeatures,
    RootMusicMenu,
    RootHeader,
  },
  data() {
    return {
      searchContent: "",
      iscomponents: "RootMusicMenu",
      name: "123",
    };
  },
};
</script>

<style scoped>
.root {
}
.content {
  padding: 0 12px;
  overflow: hidden;
}
</style>