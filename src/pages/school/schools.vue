<!-- 学校组件 -->
<template>
    <div class="school-main">
        <div class="button-nav">
            <button type="button" class="inport">
                <i class="iconfont icon-daoru"></i> 导入 </button>

            <button type="button" class="inport" @click="showDialog('showAdd')">
                <i class="iconfont icon-new"></i> 添加学校 </button>
        </div>

        <div class="schools-wrapper">
            <el-scrollbar view-class="view-box" :native="false">

                <school-item :data="schholData">
                    <template slot-scope="scope">
                        <div class="item-header">
                            <img src="../../images/header/avatar.png" alt="logo">
                            <h3>{{scope.row.name}}</h3>
                            <span class="edit-icon" @click="editSchool(scope.row)">
                                <i class="iconfont icon-bianji2"></i>
                            </span>
                        </div>
                        <div class="item-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>学段</th>
                                        <th>老师人数</th>
                                        <th>学生人数</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{{scope.row.section}}</td>
                                        <td>{{scope.row.teacherNo}}人</td>
                                        <td>{{scope.row.studentNo}}人</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="item-footer">
                            <p>
                                <i class="iconfont icon-xuesheng"></i> 地址：{{scope.row.address}}
                            </p>
                                <router-link :to="{name: '学校内页', params: {id: scope.row.id }}">
                                    <button type="button" class="check"> 立即查看 </button>
                                </router-link>
                        </div>
                    </template>
                </school-item>

            </el-scrollbar>
        </div>

        <Dialog :show="showAdd" :title="dialogTitle" @on-close="hideDialog('showAdd')">
            <div class="addSchooolFrom">
                <el-form :model="addForm" :rules="rules" label-position="right" :inline="true" ref="addForm" label-width="80px" class="demo-addForm">
                    <div class="form-line">
                        <el-form-item label="名字" prop="name">
                            <el-input v-model="addForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="学段">
                            <el-select v-model="addForm.section" placeholder="请选择学段">
                                <el-option v-for="(item,index) in sectionOptions" :key="item.name" :label="item.name" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="form-line area">
                        <el-form-item label="省">
                            <el-select v-model="addForm.area" placeholder="省">
                            </el-select>
                        </el-form-item>
                        <el-form-item label="市">
                            <el-select v-model="addForm.area" placeholder="市">
                            </el-select>
                        </el-form-item>
                        <el-form-item label="区">
                            <el-select v-model="addForm.area" placeholder="区">
                            </el-select>
                        </el-form-item>
                    </div>

                    <div class="form-line">
                        <el-form-item label="地址" prop="address">
                            <el-input type="textarea" v-model="addForm.address"></el-input>
                        </el-form-item>
                    </div>

                    <div class="form-line">
                        <el-form-item label="状态" prop="status">
                            <el-radio-group v-model="addForm.status">
                                <el-radio label="运行" value="1"></el-radio>
                                <el-radio label="关闭" value="2"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </div>
                    <el-form-item>
                        <button v-show="addButton" type="button" class="add" @click="submitForm('addForm')"> 添加 </button>
                        <button v-show="editButton" type="button" class="add" @click="submitForm('addForm')"> 提交修改 </button>
                        <button type="button" class="cancel" @click="hideDialog('showAdd')"> 取消 </button>
                    </el-form-item>
                </el-form>
            </div>
        </Dialog>

    </div>
</template>

<script>
import Dialog from "./components/dialog";
import schoolItem from "./components/school-item";
export default {
    data() {
        return {
            showAdd: false, //弹窗
            dialogTitle: "添加学校", //弹窗标题
            flex: "flex",
            addButton: false,
            editButton: false,
            editid: "", //编辑id
            schholData: [
                {
                    id: 1,
                    name: "珠海市第一中学",
                    img: "test",
                    section: "初中,高中",
                    teacherNo: 200,
                    studentNo: 2000,
                    address: "珠海市香洲区梅华西路2180号"
                },
                {
                    id: 2,
                    name: "珠海市实验中学",
                    img: "test",
                    section: "初中,高中",
                    teacherNo: 200,
                    studentNo: 2000,
                    address: "珠海市香洲区梅华西路2180号"
                },
                {
                    id: 3,
                    name: "珠海市第二中学",
                    img: "test",
                    section: "初中,高中",
                    teacherNo: 200,
                    studentNo: 2000,
                    address: "珠海市香洲区梅华西路2180号"
                },
                {
                    id: 4,
                    name: "珠海市实验中学",
                    img: "test",
                    section: "初中,高中",
                    teacherNo: 200,
                    studentNo: 2000,
                    address: "珠海市香洲区梅华西路2180号"
                },
                {
                    id: 5,
                    name: "珠海市第三中学",
                    img: "test",
                    section: "初中,高中",
                    teacherNo: 200,
                    studentNo: 2000,
                    address: "珠海市香洲区梅华西路2180号"
                },
                {
                    id: 6,
                    name: "珠海市实验中学",
                    img: "test",
                    section: "初中,高中",
                    teacherNo: 200,
                    studentNo: 2000,
                    address: "珠海市香洲区梅华西路2180号"
                },
                {
                    id: 7,
                    name: "珠海市实验中学",
                    img: "test",
                    section: "初中,高中",
                    teacherNo: 200,
                    studentNo: 2000,
                    address: "珠海市香洲区梅华西路2180号"
                },
                {
                    id: 8,
                    name: "珠海市实验中学",
                    img: "test",
                    section: "初中,高中",
                    teacherNo: 200,
                    studentNo: 2000,
                    address: "珠海市香洲区梅华西路2180号"
                },
                {
                    id: 9,
                    name: "珠海市实验中学",
                    img: "test",
                    section: "初中,高中",
                    teacherNo: 200,
                    studentNo: 2000,
                    address: "珠海市香洲区梅华西路2180号"
                },
                {
                    id: 10,
                    name: "珠海市实验中学",
                    img: "test",
                    section: "初中,高中",
                    teacherNo: 200,
                    studentNo: 2000,
                    address: "珠海市香洲区梅华西路2180号"
                }
            ],
            sectionOptions: [
                { value: 1, name: "初中、高中" },
                { value: 2, name: "初中" },
                { value: 3, name: "高中" }
            ],
            addForm: {
                name: "",
                section: "",
                address: "",
                status: ""
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: "请输入学校名称",
                        trigger: "blur"
                    },
                    {
                        min: 3,
                        max: 35,
                        message: "长度在 3 到 35 个字符",
                        trigger: "blur"
                    }
                ],
                address: [
                    {
                        required: true,
                        message: "请填写学校地址",
                        trigger: "blur"
                    }
                ],
                status: [
                    {
                        required: true,
                        message: "请选择学校状态",
                        trigger: 'change'
                    }
                ]
            }
        };
    },
    components: {
        Dialog,
        schoolItem
    },
    methods: {
        //操作弹窗
        showDialog(e) {
            this[e] = true;
            if (this.editid != "") {
                this.editButton = true;
                this.addButton = false;
            } else {
                this.addButton = true;
                this.editButton = false;
            }
        },
        hideDialog(e) {
            this[e] = false;
            this.editid = ""; 
            this.addForm.name = "";
            this.addForm.section = "";
            this.addForm.address = "";
            this.addForm.status = "";

        },
        //提交表单
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.$message.error('暂时无法提交添加或编辑');
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        //编辑学校
        editSchool(row) {
            console.log(row);
            this.editid = row.id;
            this.addForm.name = row.name;
            this.addForm.section = row.section;
            this.addForm.address = row.address;

            this.dialogTitle = "编辑学校";
            this.showDialog("showAdd");
        }
    }
};
</script>
<style rel='stylesheet/scss' lang='scss'>
@import "styles/_mixins.scss";

.school-main {
    padding: 20px 30px;
}

.button-nav {
    padding: 0 0 27px 0;
    text-align: left;
    .inport {
        @include button(125px, 28px, 16px, #fff, #62d862, 14px);
    }
    i {
        font-size: 16px;
    }
}

.schools-wrapper {
    max-height: 780px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    @include customize-el-scrollbar(4px);

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
            img {
                width: 55px;
                height: 55px;
            }
            h3 {
                margin-left: 35px;
                font-size: 23px;
                font-family: PingFang-SC-Bold;
                color: #a3adbd;
                line-height: 30px;
            }
            span.edit-icon {
                margin-left: 50px;
                cursor: pointer;
                display: none;
            }
            span.edit-icon i {
                font-size: 30px;
                color: #4b83f0;
            }
        }
        .item-content {
            margin-bottom: 30px;
            padding-bottom: 10px;
            border-bottom: 2px solid #edf0f5;
            table {
                width: 100%;
                th {
                    font-size: 16px;
                    font-weight: bold;
                    font-family: PingFang-SC-Bold;
                    color: rgba(117, 117, 117, 1);
                    line-height: 30px;
                }
                td {
                    font-size: 14px;
                    font-family: PingFang-SC-Bold;
                    color: rgba(117, 117, 117, 1);
                    line-height: 30px;
                }
            }
        }
        .item-footer {
            p {
                text-align: left;
                font-size: 16px;
                font-family: PingFang-SC-Bold;
                color: rgba(117, 117, 117, 1);
                line-height: 30px;
            }
            button.check{
                float: right;
                margin-top: 20px;
                @include button(90px, 28px, 14px, #fff, #c5c9d4, 14px);
            }
        }
        &:hover {
            .item-header {
                h3 {
                    color: #3a4760;
                }
                span.edit-icon {
                    display: block;
                }
            }

            .item-footer {
                p {
                    color: #757575;
                }
                i {
                    color: #4b83f0;
                }
                button.check {
                    background: #ca9fe8;
                }
            }

            &:before {
                background: #62d862;
            }
        }
    }
}

.addSchooolFrom {
    padding: 10px;
    @include customize-el-form(); //form样式
    .add,
    .button-add {
        @include button(80px, 26px, 14px, #fff, #778693, 14px);
        margin-right: 30px;
    }
    .cancel {
        @include button(80px, 26px, 14px, #fff, #c5c9d4, 14px);
    }
}

@include customize-el-select(); //select样式
</style>