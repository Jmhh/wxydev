<template>
    <div class="top" >
        <div class="head-prev">{{this.text}}</div>
        <div class="head-next" @click.stop='handleClose'>X</div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    text: String
  },
  methods: {
    //关闭弹窗
    handleClose() {
      this.$emit("handleAddAccount");
    }
  }
};
</script>
<style rel='stylesheet/scss' lang='scss' scoped>
.top {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  background-color: #4b83f0;
  border-radius: 8px 8px 0px 0px;
  padding: 0px 40px;
  .head-prev {
    font-size: 22px;
    color: #eeeeee;
    font-family: PingFang-SC-Heavy;
  }
  .head-next {
    width: 30px;
    height: 30px;
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
    color: #fff;
    border: 2px dashed #fff;
    cursor: pointer;
  }
}
</style>

