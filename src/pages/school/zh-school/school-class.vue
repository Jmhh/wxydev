<template>
	<div class="class-container">
		<div class="class-top">
			<button type="button" class="inport class-margin">
				<i class="iconfont icon-daoru"></i> 导入
			</button>
			<Account text='添加班级'></Account>
			<Select :seltext="rult" :list="list" :style="{width:'100px'}"></Select>
			<Select :seltext="rult" :list="list" :style="{width:'100px'}"></Select>
			<div class="account—button class-margin">
				<span class="account—btnfunct account—search" @click="handleClickSwitch('搜索')" :class="{account_isBack:isBackground==='搜索'}">搜索</span>
				<span class="account—btnfunct account—clear" @click="handleClickSwitch('清空')" :class="{account_isBack:isBackground==='清空'}">清空</span>
			</div>
		</div>
		<div class="schools-wrapper">
			<el-scrollbar view-class="view-box" :native="false" style="display:flex">
				<div class="flexWrap">
					<div v-for="item in schoolData" :key="item.id" class="schools-wrapper-item">
						<div class="item-header">
              <div></div>
              <i class="icon iconfont icon-bianji2"></i>
						</div>
            <div>
              <img src="../../../images/school/bj.png" alt="">
              <h3>{{item.name}}</h3>
            </div>
						<div class="item-content">
                相关任课老师<strong>{{item.student}}</strong>人
						</div>
						<div>
							相关任课老师
							<strong>{{item.teacher}}</strong>位
						</div>
					</div>
				</div>
			</el-scrollbar>
		</div>
	</div>
</template>

<script>
import Account from '../../../components/account/account'
import Select from '../../../components/select'
export default {
	data() {
		return {
			isBackground: "搜索",
			schoolData: [
				{
					id: 1,
					name: "初一(1)班",
					img: "test",
					teacher: 200,
					student: 2000,
				},
				{
					id: 2,
					name: "初一(2)班",
					img: "test",
					teacher: 200,
					student: 2000,
				},
				{
					id: 3,
					name: "初一(3)班",
					img: "test",
					teacher: 200,
					student: 2000,
				},
				{
					id: 4,
					name: "初一(4)班",
					img: "test",
					teacher: 200,
					student: 2000,
				},
				{
					id: 5,
					name: "初二(1)班",
					img: "test",
					teacher: 200,
					student: 2000,
				},
				{
					id: 6,
					name: "初二(2)班",
					img: "test",
					teacher: 200,
					student: 2000,
				},
				{
					id: 7,
					name: "初二(3)班",
					img: "test",
					teacher: 200,
					student: 2000,
				},
				{
					id: 8,
					name: "初二(4)班",
					img: "test",
					teacher: 200,
					student: 2000,
				},
				{
					id: 9,
					name: "初二(5)班",
					img: "test",
					teacher: 200,
					student: 2000,
				},
				{
					id: 10,
					name: "初二(6)班",
					img: "test",
					teacher: 200,
					student: 2000,
				}
			],
			list: [
				{
					value: 1,
					name: "2019"
				},
				{
					value: 2,
					name: "2018"
				},
				{
					value: 3,
					name: "2017"
				},
				{
					value: 4,
					name: "2016"
				}
			],
			rult: 0
		}
	},
	methods: {
		//搜索清空切换
		handleClickSwitch(item) {
			if (item === '搜索') {
				console.log(this.search, '搜索功能')
			} else if (item === '清空') {
				this.search = '';
			}
			this.isBackground = item;
		},
	},
	components: {
		Account,
		Select
	}
}
</script>

<style lang='scss' scoped>
@import "styles/_mixins.scss";
.class-container {
  background: #fff;
  padding-left: 26px;
  padding-right: 25px;
  .class-top {
    display: flex;
    align-items: center;
    height: 28px;
    padding-top: 28px;
    .inport {
      outline: none;
      @include button(90px, 28px, 16px, #fff, #62d862, 14px);
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
  }
  .class-margin{
	  margin-right: 28px;
  }
  .flexWrap {
    display: flex;
    flex-wrap: wrap;
  }
  .schools-wrapper {
    max-height: 750px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    margin-top: 26px;
    .schools-wrapper-item {
      position: relative;
      width: 340px;
      height: 280px;
      margin: 0 20px 30px 0;
      padding: 20px;
      background: rgba(255, 255, 255, 1);
      border: 2px solid #edf0f5;
      border-radius: 8px;

      &:before {
        content: "";
        height: 70%;
        background: #edf0f5;
        position: absolute;
        left: -5px;
        top: 15%;
        z-index: 0;
        border-right: 5px solid transparent;
        border-radius: 55px 0 0 55px;
      }
      .item-header {
        display: flex;
        margin-bottom: 30px;
        align-items: center;
        justify-content: space-between;
        img {
          width: 55px;
          height: 55px;
        }
        h3 {
          margin-left: 55px;
          font-size: 23px;
          font-family: PingFang-SC-Bold;
          color: #a3adbd;
          line-height: 30px;
        }
        i{
          font-size: 20px;
          color: #4B83F0;
        }
      }
      .item-content {
        margin-bottom: 30px;
        padding-bottom: 10px;
        border-bottom: 2px solid #edf0f5;
      }
      &:hover {
        .item-header {
          h3 {
            color: #3a4760;
          }
        }

        &:before {
          background: #62d862;
        }
      }
    }
  }
}
</style>
