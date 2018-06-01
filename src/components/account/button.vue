<template>
    <div class="button-container">
        <div class="button-btn" @click.stop="handleAdd">添加</div>
        <div class="button-btn sub" @click.stop="handleClose">取消</div>
    </div>
</template>
<script>
export default {
    methods: {
        //关闭弹窗
        handleClose() {
            this.$emit("handleAddAccount");
        },
        //添加
        handleAdd() {
            this.$emit('handleAddKeep')
            this.$emit("handleAddAccount");            
        }
    }
}
</script>
<style rel='stylesheet/scss' lang='scss' scoped>
.button-container {
  width: 100%;
  height: 28px;
  display: flex;
  border-radius: 14px;
  justify-content: center;
  .button-btn {
    width: 80px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    background: rgba(119, 134, 147, 1);
    border-radius: 15px;
    margin-right: 20px;
    cursor: pointer;
    color: #fff;
    font-size: 14px;
  }
  .sub {
    background: rgba(197, 201, 212, 1);
  }
}
</style>
