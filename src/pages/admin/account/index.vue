<template>
    <div class="account_container">
       <div class="account_function">
            <addAccount></addAccount>
            <input type="text" placeholder="搜索账户、姓名"  class="account_name">
            <div class="account_button">
                <span class="account_btnfunct account_search" @click="handleClick('搜索')" :class="{account_isBack:isBackground==='搜索'}">搜索</span>
                <span class="account_btnfunct account_clear" @click="handleClick('清空')" :class="{account_isBack:isBackground==='清空'}">清空</span>
            </div>
       </div>
       <div class="account_data">
           <div class="account_title">
               <span class="account_span" v-for="(item, index) in title" :key='index'>{{item}}</span>
            </div>
           <div class="account_content" v-for="(item, index) in data" :key='index'>
               <span class="account_span">{{item.id}}</span>
               <span class="account_span">{{item.name}}</span>
               <span class="account_span">{{item.sex}}</span>
               <span class="account_span">{{item.grouping}}</span>
               <span class="account_span">{{item.landTime}}</span>
               <span class="account_span">{{item.cleaterTime}}</span>
               <span class="account_span">{{item.operation}}</span>
           </div>
       </div>
    </div>
</template>

<script>
import addAccount from "../../../components/addAccount";
export default {
  data() {
    return {
      isBackground: "搜索",
      title: ["账户", "姓名", "性别", "分组", "登陆时间", "创建时间", "操作"],
      data: [
        {
          id: 1,
          name: "小明",
          sex: "男",
          grouping: "分组55",
          landTime: "登陆时间55",
          cleaterTime: "创建时间11",
          operation: "操作"
        },
        {
          id: 2,
          name: "小明",
          sex: "男",
          grouping: "分组55",
          landTime: "登陆时间55",
          cleaterTime: "创建时间11",
          operation: "操作"
        },
        {
          id: 3,
          name: "小明",
          sex: "男",
          grouping: "分组55",
          landTime: "登陆时间55",
          cleaterTime: "创建时间11",
          operation: "操作"
        },
        {
          id: 4,
          name: "小明",
          sex: "男",
          grouping: "分组55",
          landTime: "登陆时间55",
          cleaterTime: "创建时间11",
          operation: "操作"
        },
        {
          id: 5,
          name: "小明",
          sex: "男",
          grouping: "分组55",
          landTime: "登陆时间55",
          cleaterTime: "创建时间11",
          operation: "操作"
        },
        {
          id: 6,
          name: "小明",
          sex: "男",
          grouping: "分组55",
          landTime: "登陆时间55",
          cleaterTime: "创建时间11",
          operation: "操作"
        }
      ]
    };
  },
  methods: {
    handleClick(item) {
      this.isBackground = item;
    }
  },
  components: {
    addAccount
  }
};
</script>

<style scoped>
.account_container {
  background-color: #fff;
  padding-left: 28px;
}
.account_function {
  display: flex;
  align-items: center;
  width: 538px;
  height: 28px;
  padding-top: 28px;
}
.account_name {
  width: 211px;
  height: 21px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 1px 0px 3px rgba(119, 134, 147, 0.66);
  border: 1px solid #e9ebf2;
  margin: 0 33px;
  padding-left: 10px;
}
.account_button {
  display: flex;
  width: 138px;
  height: 28px;
  align-items: center;
  justify-content: center;
}
.account_btnfunct {
  width: 69px;
  height: 28px;
  background: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 28px;
  color: #62d862;
  border: 1px solid #62d862;
  cursor: pointer;
}
.account_search {
  border-radius: 25px 0px 0 25px;
}
.account_clear {
  border-radius: 0px 25px 25px 0;
}
.account_isBack {
  background-color: #62d862;
  color: #fff;
}
.account_data {
  width: 100%;
  margin-top: 26px;
}
.account_title {
  width: 100%;
  height: 65px;
  display: flex;
  background-color: #e3e9f0;
}
.account_content {
  width: 100%;
  display: flex;
}
.account_span {
  height: 65px;
  flex: 1px;
  box-sizing: border-box;
  line-height: 65px;
  text-align: center;
  border-left: 2px solid #f5f6f8;
  border-bottom: 2px solid #f5f6f8;
}
.account_span:nth-last-child(1) {
  border-right: 2px solid #f5f6f8;
}
</style>
