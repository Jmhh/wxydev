<!-- 老师子组件 -->
<template>
  <div class="school-teacher">
    <div class="button-nav">
      <button type="button" class="inport">
        <i class="iconfont icon-daoru"></i> 导入 </button>

      <button type="button" class="inport" @click="showDialog('showAdd')">
        <i class="iconfont icon-new"></i> 添加老师 </button>
    </div>

    <div class="teacher-data-table">
      <div class="border-line"></div>
      <div class="table-title">
        <span class="title-span" v-for="(item,index) in tableTitle" :key="index">{{item}}</span>
      </div>
      <div class="table-content" v-for="(item, index) in teacherData" :key='index'>
        <span class="content-span">{{item.id}}</span>
        <span class="content-span">{{item.name}}</span>
        <span class="content-span">{{item.sex}}</span>
        <span class="content-span">{{item.class}}</span>
        <span class="content-span">{{item.tell}}</span>
        <span class="content-span">{{item.type}}</span>
        <span class="content-span">{{item.subject}}</span>
        <span class="content-span">{{item.cleaterTime}}</span>
        <span class="content-span">{{item.landTime}}</span>
        <span class="content-span" style="display: flex;">
           <span class="edit"><i class="iconfont icon-bianji"></i> <a href="javascript:void(0)"> {{item.edit}}</a></span>
           <span class="chart"><i class="iconfont icon-zonghefenxi"></i> <a href="javascript:void(0)"> {{item.chart}}</a></span>
        </span>
      </div>
    </div>
    <Dialog :show="showAdd" :title="dialogTitle" @on-close="hideDialog('showAdd')">
      <h4>添加老师弹窗</h4>
    </Dialog>
  </div>
</template>

<script>
import Dialog from "./dialog";
export default {
    components: {
        Dialog
    },
    data() {
        return {
            showAdd: false,
            dialogTitle: "添加老师",
            tableTitle: [
                "教师号",
                "姓名",
                "性别",
                "执教班级",
                "联系电话",
                "类型",
                "执教学科",
                "入职时间",
                "登录时间",
                "操作"
            ],
            teacherData: [
                {
                    id: 1,
                    name: "明少",
                    sex: "男",
                    class: "初二(1)班、初二(1)班",
                    tell: "13677168180",
                    type: "专职",
                    subject: "数学",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑",
                    chart: "图表"
                },
                {
                    id: 1,
                    name: "明少",
                    sex: "男",
                    class: "初二(1)班、初二(1)班",
                    tell: "13677168180",
                    type: "专职",
                    subject: "数学",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑",
                    chart: "图表"
                },
                {
                    id: 1,
                    name: "明少",
                    sex: "男",
                    class: "初二(1)班、初二(1)班",
                    tell: "13677168180",
                    type: "专职",
                    subject: "数学",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑",
                    chart: "图表"
                },
                {
                    id: 1,
                    name: "明少",
                    sex: "男",
                    class: "初二(1)班、初二(1)班",
                    tell: "13677168180",
                    type: "专职",
                    subject: "数学",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑",
                    chart: "图表"
                },
                {
                    id: 1,
                    name: "明少",
                    sex: "男",
                    class: "初二(1)班、初二(1)班",
                    tell: "13677168180",
                    type: "专职",
                    subject: "数学",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑",
                    chart: "图表"
                },
                {
                    id: 1,
                    name: "明少",
                    sex: "男",
                    class: "初二(1)班、初二(1)班",
                    tell: "13677168180",
                    type: "专职",
                    subject: "数学",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑",
                    chart: "图表"
                },
                {
                    id: 1,
                    name: "明少",
                    sex: "男",
                    class: "初二(1)班、初二(1)班",
                    tell: "13677168180",
                    type: "专职",
                    subject: "数学",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑",
                    chart: "图表"
                },
                {
                    id: 1,
                    name: "明少",
                    sex: "男",
                    class: "初二(1)班、初二(1)班",
                    tell: "13677168180",
                    type: "专职",
                    subject: "数学",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑",
                    chart: "图表"
                },
                {
                    id: 1,
                    name: "明少",
                    sex: "男",
                    class: "初二(1)班、初二(1)班",
                    tell: "13677168180",
                    type: "专职",
                    subject: "数学",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑",
                    chart: "图表"
                },
                {
                    id: 1,
                    name: "明少",
                    sex: "男",
                    class: "初二(1)班、初二(1)班",
                    tell: "13677168180",
                    type: "专职",
                    subject: "数学",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑",
                    chart: "图表"
                },
                {
                    id: 1,
                    name: "明少",
                    sex: "男",
                    class: "初二(1)班、初二(1)班",
                    tell: "13677168180",
                    type: "专职",
                    subject: "数学",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑",
                    chart: "图表"
                },
                {
                    id: 1,
                    name: "明少",
                    sex: "男",
                    class: "初二(1)班、初二(1)班",
                    tell: "13677168180",
                    type: "专职",
                    subject: "数学",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑",
                    chart: "图表"
                }
            ]
        };
    },
    methods: {
        showDialog(e) {
            this[e] = true;
        },
        hideDialog(e) {
            this[e] = false;
            console.log(this[e]);
        }
    }
};
</script>
<style rel='stylesheet/scss' lang='scss' scoped>
@import "styles/_mixins.scss";
.button-nav {
    margin: 25px 30px;
    text-align: left;
    .inport {
        @include button(auto, 28px, 16px, #fff, #62d862, 14px);
        padding: 0 25px;
    }
    i {
        font-size: 16px;
    }
}

.teacher-data-table {
    margin: 0 30px;
    border-left: 2px solid #f5f6f8;
    .border-line {
        border-bottom: 10px solid #e3e9f0;
        margin-bottom: 2px;
    }
    .table-title span:nth-of-type(1),
    .table-content span:nth-of-type(1) {
        width: 10%;
    }
    .table-title span:nth-of-type(2),
    .table-content span:nth-of-type(2) {
        width: 8%;
    }
    .table-title span:nth-of-type(3),
    .table-content span:nth-of-type(3) {
        width: 5%;
    }
    .table-title span:nth-of-type(4),
    .table-content span:nth-of-type(4) {
        width: 15%;
    }
    .table-title span:nth-of-type(5),
    .table-content span:nth-of-type(5) {
        width: 10%;
    }
    .table-title span:nth-of-type(6),
    .table-content span:nth-of-type(6) {
        width: 5%;
    }
    .table-title span:nth-of-type(7),
    .table-content span:nth-of-type(7) {
        width: 8%;
    }
    .table-title span:nth-of-type(8),
    .table-content span:nth-of-type(8) {
        width: 9%;
    }
    .table-title span:nth-of-type(9),
    .table-content span:nth-of-type(9) {
        width: 9%;
    }
    .table-title span:nth-of-type(10),
    .table-content span:nth-of-type(10) {
        width: 20%;
    }
    .table-title {
        width: 100%;
        height: 50px;
        display: flex;
        background: #e3e9f0;
        span.title-span {
            line-height: 50px;
            font-size: 16px;
            font-weight: bold;
            font-family: NotoSansHans-Medium;
            color: #757575;
            border-right: 2px solid #f5f6f8;
        }
    }
    .table-content {
        width: 100%;
        display: flex;
        span.content-span {
            height: 40px;
            line-height: 40px;
            color: #757575;
            font-size: 14px;
            font-family: NotoSansHans-Regular;
            border-right: 2px solid #f5f6f8;
            border-bottom: 2px solid #f5f6f8;
        }
        span.edit{
          flex: 1;
          font-size: 16px;
          color: #B189E5;
          i{
            font-size: 22px;
          }
          a{
            color: #B189E5;
          }
        }
        span.chart{
          flex: 1;
          font-size: 16px;
          color: #4B83F0;
          i{
            font-size: 22px;
          }
           a{
            color: #4B83F0;
          }
        }
    }
}
</style>