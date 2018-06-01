<template>
    <div class="accounts-container" @click="handleOpen()">
        <span><i class="icon iconfont icon-new" style="color:#fff"></i></span>
        <p class="account-add">{{text}}</p>
    </div>
</template>

<script>
export default {
  props: {
    text: String
  },
  methods: {
    //打开添加账户弹窗
    handleOpen() {
      this.$emit("handleAddAccount");
    }
  }
};
</script>

<style scoped>
.accounts-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 28px;
  background: rgba(98, 216, 98, 1);
  border-radius: 14px;
  cursor: pointer;
}
.accounts-container span{
  display: flex;
}
.account-add {
  width: 66px;
  height: 16px;
  font-size: 16px;
  font-family: PingFang-SC-Bold;
  color: rgba(255, 255, 255, 1);
  line-height: 16px;
  margin-left: 5px;
}
</style>
