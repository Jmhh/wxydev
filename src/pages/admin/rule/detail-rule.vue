<template>
    <div class="detail-right">
        <div class="detail-title">{{title}}</div>
        <div class="detail-title detail-limit" style="background:#fff">
            <div class="detail-cue">
                <i class="icon iconfont icon-tishi"></i>
                <p>提示：规则限制三级。</p>
            </div>
            <i class="icon iconfont icon-guanbi detail-deletes"></i>
        </div>
        <div class="detail-from">
          <div class="detail-name"><span>名称*：</span><input type="text" class="detail-input"></div>
          <div class="detail-name"><span>路径*：</span><input type="text" class="detail-input"></div>
          <div class="detail-name"><span>图标*：</span><input type="text" class="detail-input"></div>
          <div>
            <span>是否显示*：</span>
            <label><input type="radio" name="yes">是</label>
            <label><input type="radio" name="yes">否</label>
          </div>
          <div class='detail-add'>添加</div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: "明细 - 添加一级规则"
    };
  }
};
</script>

<style scoped>
.detail-right {
  flex: 1;
  border: 2px solid #edf0f5;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  margin-top: 26px;
  margin-left: 26px;
}
.detail-title {
  width: 100%;
  height: 70px;
  /* font-weight: Heavy; */
  font: PingFang-SC-Heavy;
  box-sizing: border-box;
  text-align: left;
  padding-left: 33px;
  line-height: 70px;
  font-size: 18px;
  color: #3a4760;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #edf0f5;
}
.detail-limit {
  box-shadow: 0px 6px 20px #edf0f5;
}
.detail-cue {
  display: flex;
  height: 14px;
  align-items: center;
  font-size: 14px;
  font-family: Adobe Heiti Std R;
  color: rgba(58, 71, 96, 1);
}
.detail-cue p {
  margin-left: 15px;
}
.detail-deletes {
  font-size: 27px;
  height: 27px;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  margin-top: 15px;
}
.detail-from div:first-child {
  margin-top: 56px;
}
.detail-name {
  padding-left: 31px;
  display: flex;
}
.detail-from span {
  width: 56px;
}
.detail-from div {
  margin-bottom: 31px;
  flex: 1;
}
.detail-from {
  text-align: left;
  padding-left: 33px;
  color: #4b83f0;
  font-weight: Bold;
}
.detail-input {
  background: none;
  outline: none;
  box-sizing: border-box;
  border: 1px solid #e9ebf2;
  padding-left: 10px;
  width: 500px;
  height: 21px;
}
.detail-add {
  width: 99px;
  height: 26px;
  background: rgba(98, 216, 98, 1);
  border-radius: 13px;
  text-align: center;
  color: #fff;
  line-height: 26px;
  font-size: 14px;
  margin-left: 90px;
  cursor: pointer;
  margin-top: 40px;
}
</style>
