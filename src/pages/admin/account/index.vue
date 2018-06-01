<template>
	<div class="account—container">
		<div class="account—function">
			<account @handleAddAccount='handleAddAccount' text='添加账户'></account>
			<input type="text" placeholder="搜索账户、姓名" class="account—name" v-model="search">
			<div class="account—button">
				<span class="account—btnfunct account—search" @click="handleClickSwitch('搜索')" :class="{account_isBack:isBackground==='搜索'}">搜索</span>
				<span class="account—btnfunct account—clear" @click="handleClickSwitch('清空')" :class="{account_isBack:isBackground==='清空'}">清空</span>
			</div>
		</div>
		<div class="account—data">
			<div class="account—title">
				<span class="account—span" v-for="(item, index) in title" :key='index'>{{item}}</span>
			</div>
			<div class="account—content" v-for="(item, index) in data" :key='index'>
				<span class="account—span">{{item.id}}</span>
				<span class="account—span">{{item.name}}</span>
				<span class="account—span">{{item.sex}}</span>
				<span class="account—span">{{item.grouping}}</span>
				<span class="account—span">{{item.landTime}}</span>
				<span class="account—span">{{item.cleaterTime}}</span>
				<span class="account—span"><i class="iconfont icon-bianji"></i>{{item.operation}}</span>
			</div>
			<div class="block">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="10" background layout="total, sizes, prev, pager, next, jumper" :total="40">
				</el-pagination>
			</div>
		</div>
		<div class="account-container" v-show="isShowAccount">
			<div class="account-popup">
				<FormHead :text='text' @handleAddAccount='handleAddAccount'></FormHead>
				<div class="account-bottom">
					<div class="account-name">
						<span>*账户：</span><input type="text" class="account-input" v-model="addAccount.account"></div>
					<div class="account-name">
						<span>*姓名：</span><input type="text" class="account-input" v-model="addAccount.name"></div>
					<div>
						<span>*性別：</span>
						<label><input type="radio"  value="1" v-model="addAccount.sex">男</label>
						<label><input type="radio"  value="0" v-model="addAccount.sex">女</label>
					</div>
					<div>
						<span>*分組：</span>
						<label><input type="radio" value="1" v-model="addAccount.grouping">管理組</label>
						<label><input type="radio" value="0" v-model="addAccount.grouping">教务</label>
					</div>
					<Button @handleAddAccount='handleAddAccount' @handleAddKeep='handleAddKeep'></Button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Account from "../../../components/account/account.vue";
import Button from "../../../components/account/button";
import FormHead from "../../../components/form-head";
export default {
	data() {
		return {
			//分页
			currentPage4: 1,//默认第一页

			isBackground: "搜索",
			title: ["#", "名称", "性别", "分组", "登陆时间","创建时间", "操作"],
			data: [
				{
					id: 1,
					name: "小明小明",
					sex: "男",
					grouping: "管理组",
					landTime: "2018-01-1",
					cleaterTime: "2018-01-5",
					operation: "编辑"
				},
				{
					id: 2,
					name: "小明小明",
					sex: "男",
					grouping: "管理组",
					landTime: "2018-02-2",
					cleaterTime: "2018-02-5",
					operation: "编辑"
				},
				{
					id: 3,
					name: "小明小明",
					sex: "男",
					grouping: "管理组",
					landTime: "2018-03-3",
					cleaterTime: "2018-03-5",
					operation: "编辑"
				},
				{
					id: 4,
					name: "小明小明",
					sex: "男",
					grouping: "管理组",
					landTime: "2018-04-4",
					cleaterTime: "2018-04-5",
					operation: "编辑"
				},
				{
					id: 5,
					name: "小明小明",
					sex: "男",
					grouping: "管理组",
					landTime: "2018-05-5",
					cleaterTime: "2018-05-5",
					operation: "编辑"
				},
				{
					id: 6,
					name: "小明小明",
					sex: "男",
					grouping: "管理组",
					landTime: "2018-06-6",
					cleaterTime: "2018-06-5",
					operation: "编辑"
				}
			],
			isShowAccount: false,
			text: "添加账户",
			addAccount: { //添加新账户
				name: '',
				account: '',
				sex: '',
				grouping: ''
			},
			search: '' //搜索
		};
	},
	methods: {
		//分页功能
		  handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
		//搜索清空切换
		handleClickSwitch(item) {
			if(item === '搜索') {
			console.log(this.search,'搜索功能')				
			}else if(item === '清空') {
				this.search = '';
			}
			this.isBackground = item;
		},
		//关闭添加账户
		handleAddAccount() {
			console.log('关闭添加账户')							
			this.isShowAccount = !this.isShowAccount;
		},
		//添加保存
		handleAddKeep() {
			console.log(this.addAccount.name, this.addAccount.account, this.addAccount.sex, this.addAccount.grouping)
		}
	},
	components: {
		Account,
		FormHead,
		Button
	}
};
</script>

<style scoped>
.account—container {
  background-color: #fff;
  padding-left: 26px;
  padding-right: 25px;
}
.account—function {
  display: flex;
  align-items: center;
  height: 28px;
  padding-top: 28px;
}
.account—name {
  width: 211px;
  height: 21px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 1px 0px 3px rgba(119, 134, 147, 0.66);
  border: 1px solid #e9ebf2;
  margin: 0 33px;
  padding-left: 10px;
}
.account—button {
  display: flex;
  width: 138px;
  height: 28px;
  align-items: center;
  justify-content: center;
}
.account—btnfunct {
  width: 69px;
  height: 28px;
  background: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 28px;
  color: #62d862;
  border: 1px solid #62d862;
  cursor: pointer;
  font-size: 14px;
}
.account—search {
  border-radius: 25px 0px 0 25px;
}
.account—clear {
  border-radius: 0px 25px 25px 0;
}
.account_isBack {
  background-color: #62d862;
  color: #fff;
}
.account—data {
  width: 100%;
  margin-top: 26px;
}
.account—title {
  width: 100%;
  height: 65px;
  display: flex;
  background-color: #e3e9f0;
}
.account—content {
  width: 100%;
  display: flex;
}
.account—span {
  height: 65px;
  /* flex: 1px; */
  box-sizing: border-box;
  line-height: 65px;
  text-align: center;
  border-left: 2px solid #f5f6f8;
  border-bottom: 2px solid #f5f6f8;
  font-size: 14px;
}
.account—title span:nth-of-type(1),.account—content span:nth-of-type(1){
   width: 11%;
}
.account—title span:nth-of-type(2),.account—content span:nth-of-type(2){
   width: 12%;
}
.account—title span:nth-of-type(3),.account—content span:nth-of-type(3){
   width: 6%;
}
.account—title span:nth-of-type(4),.account—content span:nth-of-type(4){
   width: 11%;
}
.account—title span:nth-of-type(5),.account—content span:nth-of-type(5){
	 width: 13%;
}
.account—title span:nth-of-type(6),.account—content span:nth-of-type(6){
	 width: 13%;
}
.account—title span:nth-of-type(7),.account—content span:nth-of-type(7){
	 width: 40%;
}

.account—content span:nth-of-type(7){
	color: #B189E5;
}
.account—content span i{
	margin-right: 11px;
}
.account—span:nth-last-child(1) {
  border-right: 2px solid #f5f6f8;
}
/* 分页 */
.block{
	margin-top: 19px;
}
.el-pager li.active{
    color: #fff;
    border-radius: 5px;
    background: #68DCE7;
}

.account-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 20;
}
.account-popup {
  width: 461px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
}
.account-bottom {
  height: 284px;
  text-align: left;
  padding-left: 33px;
  color: #4b83f0;
  font-weight: Bold;
  font-size: 16px;
  background: rgba(255, 255, 255, 1);
  border-radius: 0px 0px 8px 8px;
  box-shadow: 20px 0px 20px rgba(113, 148, 216, 0.22);
}
.account-name {
  display: flex;
}
.account-bottom span {
  width: 56px;
  padding-left: 30px;
}
.account-bottom div {
  width: 300px;
  margin: 0 auto 25px auto;
}
.account-bottom div:first-child {
  padding-top: 30px;
}
.account-input {
  background: none;
  outline: none;
  box-sizing: border-box;
  border: 1px solid #e9ebf2;
  padding-left: 10px;
  width: 178px;
  height: 21px;
}
</style>
