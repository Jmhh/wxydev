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
                <div v-for="item in schholData" :key="item.id" class="schools-wrapper-item">
                    <div class="item-header">
                        <img src="../../images/header/avatar.png" alt="">
                        <h3>{{item.name}}</h3>
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
                                    <td>{{item.section}}</td>
                                    <td>{{item.teacherNo}}人</td>
                                    <td>{{item.studentNo}}人</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="item-footer">
                        <p>
                            <i class="iconfont icon-xuesheng"></i> 地址：{{item.address}}</p>
                               <router-link :to="{ name: '学校内页', params: { id: item.id }}">
                            <btn class="check"> 立即查看 </btn>
                        </router-link>
                    </div>
                </div>
            </el-scrollbar>
        </div>

        <Dialog :show="showAdd" :title="dialogTitle" @on-close="hideDialog('showAdd')">
            <div class="addSchooolFrom">
                <div class="form-line" :style="{display: flex}">
                    <span class="form-label">*名称:</span>
                    <div class="form-input">
                        <input type="text" v-model="form.name" placeholder="">
                    </div>
                    <span class="form-label">学段:</span>
                    <Select seltext="请选择学段" :list="sectionOptions"></Select>
                </div>
                <div class="form-city-pick">
                    <div class="form-line">
                        <span class="form-label">省:</span>
                        <div class="form-select">
                            <select v-model="form.section">
                                <option v-for="option in sectionOptions" v-bind:value="option.value">
                                    {{ option.value }}
                                </option>
                            </select>
                        </div>

                        <span class="form-label">市:</span>
                        <div class="form-select">
                            <select v-model="form.section">
                                <option v-for="option in sectionOptions" v-bind:value="option.value">
                                    {{ option.value }}
                                </option>
                            </select>
                        </div>

                        <span class="form-label">区:</span>
                        <div class="form-select">
                            <select v-model="form.section">
                                <option v-for="option in sectionOptions" v-bind:value="option.value">
                                    {{ option.value }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-line-textarea">
                    <span class="form-label">*地址: </span>
                    <div class="form-text-area">
                        <textarea></textarea>
                    </div>
                </div>
                <div class="form-line">
                    <span class="form-label">*状态</span>
                    <label><input type="radio" value="运行" v-model="form.status">运行</label>
                    <label><input type="radio" value="关闭" v-model="form.status">关闭</label>
                </div>
                <div class="form-footer">
                    <button type="button" class="add"> 添加 </button>
                    <button type="button" class="cancel" @click="hideDialog('showAdd')"> 取消 </button>
                </div>
            </div>
        </Dialog>

    </div>
</template>

<script>
import Btn from "components/button";
import Dialog from "./dialog";
import Select from "components/select";
export default {
    data() {
        return {
            showAdd: false,
            dialogTitle: "添加学校",
            flex: "flex",
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
                    name: "珠海市第一中学",
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
                    name: "珠海市第一中学",
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
            form: {
                name: "",
                section: "",
                status: ""
            }
        };
    },
    components: {
        Dialog,
        Btn,
        Select
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
    .el-scrollbar {
        width: 100%;
        .el-scrollbar__view {
            display: flex;
            flex-wrap: wrap;
        }
        .el-scrollbar__wrap {
            overflow-x: auto;
        }
        .el-scrollbar__bar {
            z-index: 0;
        }
        .el-scrollbar__bar.is-vertical {
            opacity: 1;
            background: #edf0f5;
        }
    }

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
                margin-left: 55px;
                font-size: 23px;
                font-family: PingFang-SC-Bold;
                color: #a3adbd;
                line-height: 30px;
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
            .check.button {
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
            }

            .item-footer {
                p {
                    color: #757575;
                }
                i {
                    color: #4b83f0;
                }
                .check.button {
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
    padding: 30px;
    .form-line {
        margin-bottom: 30px;
        text-align: left;
        .form-label {
            display: inline-block;
            width: 50px;
            margin-right: 12px;
            text-align: right;
            font-size: 16px;
            font-family: PingFang-SC-Bold;
            color: #4b83f0;
            line-height: 16px;
            font-weight: bold;
        }
        .form-input {
            width: 219px;
            height: 21px;
            display: inline-block;
            input {
                border: 1px solid #e9ebf2;
                padding: 2px 3px;
                border-radius: 3px;
            }
        }
        .form-select {
            display: inline-block;
            width: 100px;
            height: 22px;
            line-height: 22px;
            select {
                width: 100px;
                border: 1px solid #e9ebf2;
                padding: 2px 3px;
                border-radius: 3px;
            }
        }
    }
    .form-line-textarea {
        margin-bottom: 30px;
        span.form-label {
            float: left;
            display: inline-block;
            width: 50px;
            margin-right: 12px;
            text-align: right;
            font-size: 16px;
            font-family: PingFang-SC-Bold;
            color: #4b83f0;
            line-height: 16px;
            font-weight: bold;
        }
        .form-text-area {
            text-align: left;
            padding-left: 50px;
            textarea {
                width: 330px;
                min-height: 47px;
                border: 1px solid #e9ebf2;
                border-radius: 4px;
            }
        }
    }
    input:focus,
    textarea:focus,
    select:focus {
        outline: none;
        border: 1px solid #62d862 !important;
    }
    .wai-sel {
        width: 250px;
    }
    .add,
    .button-add {
        @include button(80px, 26px, 14px, #fff, #778693, 14px);
        margin-right: 30px;
    }
    .cancel {
        @include button(80px, 26px, 14px, #fff, #c5c9d4, 14px);
    }
}
</style>