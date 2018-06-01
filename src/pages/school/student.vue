<!-- 学生子组件 -->
<template>
  <div class="school-student">

    <div class="button-nav">
      <button type="button" class="inport">
        <i class="iconfont icon-daoru"></i> 导入 </button>

      <button type="button" class="inport" @click="showDialog('showAdd')">
        <i class="iconfont icon-new"></i> 添加学生 </button>
    </div>

    <div class="teacher-data-table">
      <div class="border-line"></div>
      <div class="table-title">
        <span class="title-span" v-for="(item,index) in tableTitle" :key="index">{{item}}</span>
      </div>
      <div class="table-content" v-for="(item, index) in studentData" :key='index'>
        <span class="content-span">{{item.id}}</span>
        <span class="content-span">{{item.name}}</span>
        <span class="content-span">{{item.sex}}</span>
        <span class="content-span">{{item.class}}</span>
        <span class="content-span">{{item.type}}</span>
        <span class="content-span">{{item.parentsName}}</span>
        <span class="content-span">{{item.parentsTell}}</span>
        <span class="content-span">{{item.cleaterTime}}</span>
        <span class="content-span">{{item.landTime}}</span>
        <span class="content-span">
          <i class="iconfont icon-bianji"></i> {{item.edit}}
        </span>
      </div>
    </div>


  </div>
</template>

<script>
export default {
    data() {
        return {
            tableTitle: [
                "学号",
                "姓名",
                "性别",
                "班级",
                "状态",
                "家长姓名",
                "家长电话",
                "入校时间",
                "登陆时间",
                "操作"
            ],
            studentData: [
                {
                    id: 201040740116,
                    name: "明少明少",
                    sex: "男",
                    class: "初二(1)班",
                    type: "在读",
                    parentsName: "明少明少",
                    parentsTell: "13677168180",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑"
                },
                {
                    id: 201040740116,
                    name: "明少明少",
                    sex: "男",
                    class: "初二(1)班",
                    type: "在读",
                    parentsName: "明少明少",
                    parentsTell: "13677168180",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑"
                },
                {
                    id: 201040740116,
                    name: "明少明少",
                    sex: "男",
                    class: "初二(1)班",
                    type: "在读",
                    parentsName: "明少明少",
                    parentsTell: "13677168180",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑"
                },
                {
                    id: 201040740116,
                    name: "明少明少",
                    sex: "男",
                    class: "初二(1)班",
                    type: "在读",
                    parentsName: "明少明少",
                    parentsTell: "13677168180",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑"
                },
                {
                    id: 201040740116,
                    name: "明少明少",
                    sex: "男",
                    class: "初二(1)班",
                    type: "在读",
                    parentsName: "明少明少",
                    parentsTell: "13677168180",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑"
                },
                {
                    id: 201040740116,
                    name: "明少明少",
                    sex: "男",
                    class: "初二(1)班",
                    type: "在读",
                    parentsName: "明少明少",
                    parentsTell: "13677168180",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑"
                },
                {
                    id: 201040740116,
                    name: "明少明少",
                    sex: "男",
                    class: "初二(1)班",
                    type: "在读",
                    parentsName: "明少明少",
                    parentsTell: "13677168180",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑"
                },
                {
                    id: 201040740116,
                    name: "明少明少",
                    sex: "男",
                    class: "初二(1)班",
                    type: "在读",
                    parentsName: "明少明少",
                    parentsTell: "13677168180",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑"
                },
                {
                    id: 201040740116,
                    name: "明少明少",
                    sex: "男",
                    class: "初二(1)班",
                    type: "在读",
                    parentsName: "明少明少",
                    parentsTell: "13677168180",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑"
                },
                {
                    id: 201040740116,
                    name: "明少明少",
                    sex: "男",
                    class: "初二(1)班",
                    type: "在读",
                    parentsName: "明少明少",
                    parentsTell: "13677168180",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑"
                },
                {
                    id: 201040740116,
                    name: "明少明少",
                    sex: "男",
                    class: "初二(1)班",
                    type: "在读",
                    parentsName: "明少明少",
                    parentsTell: "13677168180",
                    cleaterTime: "2018-04-08",
                    landTime: "2018-05-01",
                    edit: "编辑"
                }
            ]
        };
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
        width: 15%;
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
        width: 10%;
    }
    .table-title span:nth-of-type(5),
    .table-content span:nth-of-type(5) {
        width: 5%;
    }
    .table-title span:nth-of-type(6),
    .table-content span:nth-of-type(6) {
        width: 8%;
    }
    .table-title span:nth-of-type(7),
    .table-content span:nth-of-type(7) {
        width: 10%;
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
    }
}
</style>