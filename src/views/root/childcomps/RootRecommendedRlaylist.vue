<template>
  <div>
    <div class="recommended">
      <h2 class="playlist">推荐歌单</h2>
      <span>
        更多
        <i class="iconfont">&#xe694;</i>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.recommended {
  display: flex;
  align-items: center;
  position: relative;

  & > h2,
  span {
    flex: 1;
  }

  & > span {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #c6cace;
    font-size: 12px;
    cursor: pointer;

    & > i {
      font-size: 12px;

      position: relative;
      top: -1px;
    }
  }

  & > span:hover {
    color: #f5f6fa;
  }
}
.playlist {
  color: #f5f6fa;
  font-family: "楷体";
  cursor: default;
}
.recommended::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #2f3542;
}
</style>