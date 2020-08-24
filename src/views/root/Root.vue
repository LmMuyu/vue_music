<template>
  <div class="root">
    <RootHeader :content.sync="searchContent" />
    <RootLeftFeatures />
  </div>
</template>

<script>
import RootHeader from "./childcomps/RootHeader.vue";
import RootLeftFeatures from "./childcomps/RootLeftFeatures.vue";

export default {
  components: {
    RootLeftFeatures,
    RootHeader,
  },
  data() {
    return {
      searchContent: "",
    };
  },
};
</script>

<style scoped>
.root {
  overflow: hidden;
}
</style>