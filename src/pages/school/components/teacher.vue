<!-- 老师子组件 -->
<template>
  <div class="teacher">
       <div class="teacher-nav">
            <button type="button" class="inport">
              <i class="iconfont icon-daoru"></i> 导入
            </button>
            <Account text="添加班级" @handleAddAccount="handleAddAccount"></Account>
            <Select :seltext="seltext" :list="list" :class="[navpull]"></Select>
            <Select seltext="选择班级" :list="grade" :class="[navpull]"></Select>
            <input type="text" v-model="search" class="nav-inpit" placeholder="搜索学号、姓名">
            <div class="account—button">
                <span class="account—btnfunct account—search" @click="handleClickSwitch('搜索')" :class="{account_isBack:isBackground==='搜索'}">搜索</span>
                <span class="account—btnfunct account—clear" @click="handleClickSwitch('清空')" :class="{account_isBack:isBackground==='清空'}">清空</span>
          </div>
       </div>
      <div class="teacher-table">
          <div class="table-title">
           <span v-for="item in arr">{{item}}</span>
          </div>
          <div class="table-content" v-for="list in data">
          <span>{{list.id}}</span>
          <span>{{list.name}}</span>
          <span>{{list.sex}}</span>
          <span>{{list.grouping}}</span>
          <span>{{list.landTime}}</span>
          <span>{{list.cleaterTime}}</span>
          <span>{{list.typology}}</span>
          <span>{{list.subject}}</span>
          <span>{{list.entry}}</span>
          <span> <button><i class="iconfont icon-bianji"></i>{{list.operation}}</button><button><i class="iconfont icon-zonghefenxi"></i>{{list.chart}}</button></span>
       </div>
      </div>
      <div class="teacher-form" v-show="teacherform">
          <div class="entirety">
              <Formhead text="添加老师" @handleAddAccount="handleAddAccount"></Formhead>
              <form action="">
                <label for="" class="label-first">
                  <span>*教师号：<input type="text" class="label-text" v-model="form.teacher">
                    <span class="prompt-text" v-show="error.teacher">请输入教师号</span>
                  </span>
                  <span class="first-span">*姓名：<input type="text" class="label-text" v-model="form.name"> 
                    <span class="prompt-text" v-show="error.name">请输入姓名</span>
                  </span>
                  <span class="third-span">*性别：<input type="radio" name="" value="1" v-model="form.single"><em>男</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="" value="0" v-model="form.single"><em>女</em></span>
                </label>
                <label for="" class="label-second">
                  <span>联系电话：<input type="text" class="label-text" v-model="form.tel">
                    <span class="prompt-text span-text" v-show="error.call">请输联系电话</span>
                    <span class="prompt-text span-text" v-show="error.tag">请输正确电话号码</span>
                  </span>
                  <span class="second-span">执教学科：<Select seltext="请选择科目" :list="course" :class="[course]"></Select>
                    <span class="prompt-text prompt-span" v-show="error.subjects">请选择科目</span>
                  </span>
                  <span class="second-third"> *类型：<input type="radio" name="" value="1"  v-model="form.genre "><em>专职</em>&nbsp;&nbsp;&nbsp;<input type="radio" name="" value="0" v-model="form.genre"><em>兼职</em></span>
                </label>
                <label for="">
                  入职时间：<el-date-picker :class="[picker]" v-model="form.time" type="date" placeholder="选择日期"></el-date-picker>
                  <span class="prompt-sele" v-show="error.schedule">请输入入职时间</span>
                </label>
                <label for="" class="label-fourth">
                  *任教班级：
                  <span>初一</span>
                </label>
                <div class="sixth">
                   <span v-for="(box,index) in and" :key="index" v-model="form.troupe">  
                      <input type="checkbox" >
                      {{box}}
                    </span>
                </div>
                <div class="seventh">
                      初二
                </div>
                <div class="sixth">
                    <span v-for="(box,index) in and" :key="index" v-model="form.classtwo">
                      <input type="checkbox" >
                      {{box}}
                    </span>
                </div>
                <div class="bottom">
                  <span @click="addition">添加</span>
                  <span @click="handleAddAccount">取消</span>
                </div>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
import Formhead from 'components/form-head'
import Account from 'components/account/account'
import Select from 'components/select'
export default {
  data () {
    return {
      pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }], 
      },
      seltext:"选择届时",
      search:"",
      picker: "picker", 
      navpull:"navpull",
      isBackground: "搜索",
      search: '', //搜索
      teacherform:false,
      course:"course",

      form:{
        teacher:"",
        name:"",
        single:1,
        tel:"",
        genre:1,
        time:"",
       

        troupe:[],
        classtwo:[]
      },
      error:{
          teacher:false,
          name:false,
          call:false,
          tag:false,
          subjects:false,
          schedule:false,
      },
      list: [
        {
          value: 1,
          name: "2017"
        },
        {
          value: 2,
          name: "2016"
        },
      ],
      grade:[
        {
          value: 1,
          name: "一班"
        },
        {
          value: 2,
          name: "二班"
        },
      ],
       course:[
        {
          value: 1,
          name: "科目一"
        },
        {
          value: 2,
          name: "科目二"
        },
      ],
      arr:["教师号" ,"姓名" ,"性别","执教班级" ,"联系电话","类型","执教学科","入职时间" ,"登陆时间","操作"],
      	data: [
					{
					id: 1,
					name: "小明小明",
					sex: "男",
					grouping: "初二(1)班、初二(1)班",
					landTime: "13677168180",
          cleaterTime: "2018-06-5",
          typology:"专职",
          subject:"数学",
          entry:"2018-04-08",
          operation: "编辑",
          chart:"图表"
				},
				{
					id: 2,
					name: "小明小明",
					sex: "男",
					grouping: "初二(1)班、初二(1)班",
					landTime: "13677168180",
          cleaterTime: "2018-06-5",
          typology:"专职",
          subject:"数学",
          entry:"2018-04-08",
          operation: "编辑",
          chart:"图表"
				},
				{
					id: 3,
					name: "小明小明",
					sex: "男",
					grouping: "初二(1)班、初二(1)班",
					landTime: "13677168180",
          cleaterTime: "2018-06-5",
          typology:"专职",
          subject:"数学",
          entry:"2018-04-08",
          operation: "编辑",
          chart:"图表"
				},
				{
					id: 4,
					name: "小明小明",
					sex: "男",
					grouping: "初二(1)班、初二(1)班",
					landTime: "13677168180",
          cleaterTime: "2018-06-5",
          typology:"专职",
          subject:"数学",
          entry:"2018-04-08",
          operation: "编辑",
          chart:"图表"
				},
					{
					id: 5,
					name: "小明小明",
					sex: "男",
					grouping: "初二(1)班、初二(1)班",
					landTime: "13677168180",
          cleaterTime: "2018-06-5",
          typology:"专职",
          subject:"数学",
          entry:"2018-04-08",
          operation: "编辑",
          chart:"图表"
				},
				{
					id: 6,
					name: "小明小明",
					sex: "男",
          grouping: "初二(1)班、初二(1)班",
           subject:"数学",
					landTime: "13677168180",
          cleaterTime: "2018-06-5",
          typology:"专职",
         
          entry:"2018-04-08",
          operation: "编辑",
          chart:"图表"
				}
      ],
      and:["(1)班","(2)班","(3)班","(4)班","(5)班","(6)班","(7)班","(8)班","(9)班","(10)班"],
      
    };
  },
  
  methods:{
      
    	//搜索清空切换
      handleClickSwitch(item) {
        if(item === '搜索') {
        console.log(this.search,'搜索功能')				
        }else if(item === '清空') {
          this.search = '';
        }
        this.isBackground = item;
      },
      handleAddAccount(){
          this.teacherform =! this.teacherform;
      },
      //添加
      addition(){
        if(this.form.teacher==""){
          this.error.teacher=true;
        }else{
            this.error.teacher=false;

        }

        if(this.form.name==""){
            this.error.name=true;
        }else{
              this.error.name=false;
        }

        if(this.form.tel==""){
            this.error.call=true; 
            this.error.tag=false;
        }else if(this.form.tel.search(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/) != 0){
            this.error.tag=true;
            this.error.call=false;
        }else{
            this.error.call=false;
            this.error.tag=false;
        }
        
        if(this.form.genre==""){
            this.error.subjects=true;
        }else{
            this.error.subjects=false;
        }

        if(this.form.time==""){
             this.error.schedule=true;
        }else{
            this.error.schedule=false;
        }
      }
  },
  components: {
    Account,
    Select,
    Formhead
  }
}

</script>
<style rel='stylesheet/scss' lang='scss'>
@import "styles/_mixins.scss";
.teacher{
  .teacher-nav{
      display: flex;
      justify-content: space-around;
      width: 60%;
      height: 60px;
      align-items: center;
      .inport {
        @include button(90px,28px,16px,#fff,#62d862,14px);
      }
      .nav-inpit{
        padding: 2px 8px;
        border: 1px solid #E9EBF2;

      }
      .account—button {
        display: flex;
        width: 138px;
        height: 28px;
        align-items: center;
        justify-content: center;
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
            color: #757575;
            font-family: NotoSansHans-Regular;
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
      .navpull{
          width: 121px;
      }
  }
  .teacher-table {
    div{
      width: 100%;
      display: flex;
      
    }
    span{
        height: 65px;
        // flex: 1px; 
        box-sizing: border-box;
        line-height: 65px;
        text-align: center;
        border-left: 2px solid #f5f6f8;
        border-bottom: 2px solid #f5f6f8;
        font-size: 14px;
    }
    span:nth-of-type(1){
        width: 8%;
        min-width: 117px;
        // max-width: 17px;
        padding: 0px 6px 0px 6px;
    
    }
     span:nth-of-type(2){
        width: 7%;
        min-width: 100px;
        padding: 0px 6px 0px 6px;
    }
     span:nth-of-type(3){
        width: 6%;
        min-width: 58px;
        padding: 0px 6px 0px 6px;
    }
     span:nth-of-type(4){
        width: 13%;
        min-width: 184px;
        padding: 0px 6px 0px 6px;
    }
     span:nth-of-type(5){
        width: 10%;
        min-width: 117px;
        padding: 0px 6px 0px 6px;
    }
     span:nth-of-type(6){
        width: 8%;
        min-width: 80px;
        padding: 0px 6px 0px 6px;
    }
     span:nth-of-type(7){
        width: 8%;
        min-width:99px;
        padding: 0px 6px 0px 6px;
    }
     span:nth-of-type(8){
        width: 10%;
        min-width:99px;
        padding: 0px 6px 0px 6px;
    }
     span:nth-of-type(9){
        width: 10%;
        min-width: 109px;
        padding: 0px 6px 0px 6px;
    }
     span:nth-of-type(10){
        width: 20%;
        min-width: 250px;
        padding: 0px 6px 0px 6px;
    }
    .table-title{
         background:#e3e9f0;
         span{
           font-size: 16px;
           color: #757575;
           font-weight: 600;
           font-family: NotoSansHans-Medium;
         }
        
    }
    
    .table-content{
        span{
          button{
              font-size: 16px;
          }
          button:nth-of-type(1){
             color: #B189E5;
          }
          button:nth-of-type(2){
              color: #4B83F0;
          } 
        }
    }
   
  }
  .teacher-form{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 101;
    .entirety{
      position: relative;
      max-width: 893px;
      top: 25%;
      left: 50%;
      margin-left: -446px;
      border-radius: 8px;
    }
    form{
      width: 100%;
      padding-top: 41px;
      background: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      input{
          border: 1px solid #E9EBF2;
          padding: 2px 0;
          font-size: 14px;
          color: #757575;
      }
      label{
        position: relative; 
        width: 90%; 
        font-size: 16px;
        color: #4B83F0;
        font-family: PingFang-SC-Bold;
        margin-bottom: 23px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        input{
            padding-left: 11px;
        }
        span{
            position: relative;
            .prompt-text{
                position: absolute;
                top: 23px;
                left: 70px;
                font-size: 12px;
                color: #ed3f14;
            }
        }
        em{
              font-size: 14px;
              color: #757575;
          }
        .picker{
          width: 85%;
          margin-right: 5%;
           input{
             height: 21px;
             border-radius: 0;
             padding-left: 11px;
           }
           span{
             width: 100%;
             position: relative;
             i{
              position: absolute;
              font-size: 18px;
              color: #62D862;
              line-height: 21px;
             }
           }
          .el-input__suffix-inner{
           .el-input__icon{
             display:none;
           }
           }
        }
        .label-text{
        }
        .prompt-sele{
            position: absolute;
            top: 22px;
            left: 80px;
            font-size: 12px;
            color: #ed3f14;
        }
      }
      .label-first{
          padding-left: 15px; 
          .first-span{
            span{
                left: 55px;
            }
            input{
              width: 233px;
            }
          }
      }
      .third-span{
        margin-right: 22px;
        
      }
      .label-second{
        .span-text{
        left: 78px;
        }
        .prompt-span{
        left: 100px;
        }
        .second-span{
          width: 312px;
          display: flex;
          padding-left: 21px;
          div{
               width: 213px;
               padding: 1px 1px 0 0;
          }
        }
      }
      .label-fourth{
          justify-content: start;
          margin-bottom: 11px;
          span{
            font-size: 14px;
            color: #B189E5;
            margin-left: 25px;
          }
      }
      .sixth{
        font-size: 14px;
        color: #757575;
        width: 80%;
        display: flex;
        justify-content: space-around;
        margin-left: 110px;
        margin-bottom: 11px;
        input{
          cursor: pointer;
        }
      }
      .seventh{
        width: 65%;
        text-align: left;
        font-size: 14px;
        color: #B189E5;
        margin-bottom: 11px;
      }
    }
    .bottom{
      margin: 56px 0px 39px 0;
      span{
        width: 80px;
        height: 26px;
        border-radius: 13px;
        display: inline-block;
        line-height: 26px;
        font-size: 14px;
        color: #fff;
        font-family: PingFang-SC-Bold;
        cursor: pointer;
      }
      span:nth-of-type(1){
          background: #778693;
          margin-right: 31px;
      }
      span:nth-of-type(2){
         background:#C5C9D4
      }
    }
  }
  button{
    border: none;
    background: no-repeat;
    outline: none;
    cursor: pointer;
      i{
        margin-right: 11px;
      }
  }
}
</style>