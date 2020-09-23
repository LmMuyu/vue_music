<template>
  <div class="box">
    <div class="beform">
      <span>星期{{ timeDay }}</span>
      <span>{{ timeDate }}</span>
    </div>
    <DisplayBox
      @dragstart.prevent
      class="display_box"
      v-for="(item, index) in 7"
      :key="index"
    />
  </div>
</template>

<script>
import DisplayBox from "./DisplayBox.vue";

export default {
  components: {
    DisplayBox,
  },
  data() {
    return {
      timeDay: null,
      timeDate: null,
    };
  },
  created() {
    let timeDate = new Date();

    let time = {
      0: "七",
      1: "一",
      2: "二",
      3: "三",
      4: "四",
      5: "五",
      6: "六",
    };

    this.timeDate = timeDate.getDate();
    this.timeDay = time[timeDate.getDay()];
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.display_box {
  margin-top: 15px;
}
.beform {
  margin-top: 15px;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ffffff;

  & > span {
    padding: 5px;
  }

  & > span:nth-child(1) {
    font-size: 30px;
  }

  & > span:nth-child(2) {
    font-size: 100px;
    color: #eb4d4b;
  }
}
</style>