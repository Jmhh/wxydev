<!-- 班级子组件 -->
<template>
    <div class="school-class">

        <div class="button-nav">
            <button type="button" class="inport">
                <i class="iconfont icon-daoru"></i> 导入 </button>

            <button type="button" class="inport" @click="showDialog('showAdd')">
                <i class="iconfont icon-new"></i> 添加班级 </button>
        </div>

        <div class="class-wrapper">
            <el-scrollbar view-class="view-box" :native="false">
                <div class="class-wrapper-item" v-for="item in classData" :key="item.id">
                    <div class="item-body">
                        <div class="item-header">
                            <img src="../../../images/class.png" alt="">
                            <h3 class="title">{{item.name}}</h3>
                        </div>
                        <div class="item-content">
                            <p>在读学生
                                <span>{{item.studentNo}}</span> 人</p>
                            <p class="border-bottom">相关任课老师
                                <span>{{item.teacherNo}}</span> 位</p>
                        </div>
                    </div>
                </div>
            </el-scrollbar>
        </div>

        <Dialog :show="showAdd" :title="dialogTitle" @on-close="hideDialog('showAdd')">
            <h4>添加班级弹窗</h4>
        </Dialog>

    </div>

</template>

<script>
import Dialog from "./dialog";
export default {
    components:{
        Dialog
    },
    data() {
        return {
            classId:"", //学校id
            showAdd: false,
            dialogTitle: "添加班级",
            classData: [
                {
                    id: 1,
                    name: "初二(1)班",
                    teacherNo: 8,
                    studentNo: 50
                },
                {
                    id: 2,
                    name: "初二(1)班",
                    teacherNo: 8,
                    studentNo: 50
                },
                {
                    id: 3,
                    name: "初二(1)班",
                    teacherNo: 8,
                    studentNo: 50
                },
                {
                    id: 4,
                    name: "初二(1)班",
                    teacherNo: 8,
                    studentNo: 50
                },
                {
                    id: 5,
                    name: "初二(1)班",
                    teacherNo: 8,
                    studentNo: 50
                },
                {
                    id: 6,
                    name: "初二(1)班",
                    teacherNo: 8,
                    studentNo: 50
                },
                {
                    id: 7,
                    name: "初二(1)班",
                    teacherNo: 8,
                    studentNo: 50
                },
                {
                    id: 8,
                    name: "初二(1)班",
                    teacherNo: 8,
                    studentNo: 50
                },
                {
                    id: 9,
                    name: "初二(1)班",
                    teacherNo: 8,
                    studentNo: 50
                },
                {
                    id: 10,
                    name: "初二(1)班",
                    teacherNo: 8,
                    studentNo: 50
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
<style rel='stylesheet/scss' lang='scss'>
@import "styles/_mixins.scss";

.school-class {
    .button-nav {
        margin: 25px 30px ;
        text-align: left;
        .inport {
            @include button(auto, 28px, 16px, #fff, #62d862, 14px);
            padding: 0 25px;
        }
        i {
            font-size: 16px;
        }
    }

    .class-wrapper {
        max-height: 680px;
        overflow: hidden;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin: 0 30px;
        @include customize-el-scrollbar($width:4px);
        .class-wrapper-item {
            position: relative;
            width: 366px;
            height: 226px;
            margin: 0 20px 30px 0;
            background: white;
            border: 2px solid #edf0f5;
            border-radius: 8px;
            cursor: pointer;
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
            .item-body {
                padding: 20px 35px 0 35px;
                .item-header {
                    display: flex;
                    h3.title {
                        font-size: 24px;
                        font-family: PingFang-SC-Bold;
                        color: #a3adbd;
                        line-height: 28px;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
                .item-content {
                    padding: 20px 0;
                    text-align: left;
                    p {
                        margin: 15px 0;
                        font-size: 14px;
                        color: #757575;
                        span {
                            color: #a3adbd;
                        }
                    }
                    p.border-bottom {
                        border-top: 1px solid #edf0f5;
                        padding-top: 15px;
                    }
                }
            }
            &:hover {
                h3.title {
                    color: #3a4760;
                }
                .item-content {
                    p {
                        span {
                            color: #ca9fe8;
                        }
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