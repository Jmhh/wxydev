<template>
    <div class="grouping-container">
        <div v-if="!isEdit" class="grouping-top">
            <account @handleAddAccount="handleAddAccount" :text="text"></account>
            <el-table :data="this.rule" style="width: 100%">
                <el-table-column label="名称" width="180">
                    <template slot-scope="scope">
                        <span>{{ scope.row.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="类型" width="180">
                    <template slot-scope="scope">
                        <span>{{ scope.row.role }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="状态" width="180">
                    <template slot-scope="scope">
                        <span>{{ scope.row.status === 1 ? '启用' : '关闭' }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.row.id, scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.page" :page-sizes="[10, 20]" :page-size="10" background layout="total,  prev, pager, next, jumper" :total="page.total">
                </el-pagination>
            </div>
            <div class="gruping" v-show="setting">
                <div class="tree—container">
                    <formHead @handleAddAccount="handleAddAccount" :text="text"></formHead>
                    <div class="container">
                        <div class="tree—containers">
                            <div class="tree—top">
                                <div class="tree—menu">*规则:</div>
                            </div>
                            <div class="tree—menu-bar">
                                <el-tree :data="filter" show-checkbox @check="handleCheck" node-key="id" :default-expand-all="false" draggable ref="tree">
                                </el-tree>
                            </div>
                        </div>
                        <div class="detail-right">
                            <div class="detail-from">
                                <div class="detail-name">
                                    <span>名称*：</span><input type="text" class="detail-input" v-model="rule.name" placeholder="请输入名称">
                                </div>
                                <div class="detail-name">
                                    <span>*类型:</span>
                                    <input type="text" v-model="rule.role" placeholder="请输入类型">
                                </div>
                                <div class="detail-name">
                                    <span>*状态:</span>
                                    <label><input type="radio" value="0" v-model="rule.status">禁用</label>
                                    <label><input type="radio" value="1" v-model="rule.status">启用</label>
                                </div>
                                <div class="detail-select">
                                    <button @click="handleInpute">添加</button>
                                    <button @click="handleAddAccount">取消</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Edit v-else @handleEdits="handleEdits" :index='index'></Edit>
    </div>
</template>

<script>
import { groupedList, addGrouped, seeGrouped } from "api/admin/grouping.js";
import { getPermissions } from "api/admin/rule.js";
import { mapState, mapGetters, mapActions } from 'vuex'
import Account from "../../../components/account/account.vue";
import formHead from "../../../components/form-head";
import Edit from "./edit";
import Loading from '../../../components/loading'

export default {
    data() {
        return {
            setting: false,
            text: "添加分组",
            checkedKeys: '',
            isEdit: false,
            detail: false,
            index: '', 
            currentPage4: 1,//默认第一页
        }
    },
    created() {
        groupedList(this)
    },
    computed: {
        ...mapState({
            rule: state => state.admin.groupedListData,
            page: state => state.admin.groupedListDataPage && state.admin.groupedListDataPage,
        }),
        ...mapGetters(['filter']),
    },
    methods: {
        ...mapActions(["seeEditLoad"]),
        //编辑
        handleEdit(index, row) {
            this.index = index
            getPermissions(this)
            this.seeEditLoad()
            seeGrouped(this, index)
            this.isEdit = !this.isEdit;
        },
        //取消编辑
        handleEdits(index, row) {
            this.isEdit = !this.isEdit;
        },
        //显示隐藏弹出框
        handleAddAccount() {
            getPermissions(this)
            this.setting = !this.setting
        },
        //保存添加规则
        handleInpute() {
            if (this.rule.name && this.rule.role && this.checkedKeys && this.rule.status) {
                let data = {
                    name: this.rule.name,
                    role: this.rule.role,
                    permissionIds: this.checkedKeys.join(','),
                    status: this.rule.status,
                }
                addGrouped(this, data)
                this.setting = !this.setting
            } else {
                console.log('a')
            }
        },
        //获取选中的数据
        handleCheck(data, type) {
            this.checkedKeys = type.checkedKeys;
        },
        //分页功能
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            let data = {
                page: val,
                limit: 10
            }
            groupedList(this, data)
            console.log(`当前页: ${val}`);
        },
    },
    components: {
        Account,
        formHead,
        Edit,
        Loading
    }
}
</script>
<style rel='stylesheet/scss' lang='scss' scoped>
.grouping-container{
    display: flex;
    .grouping-top{
        flex: 1;
    }
}
.el-table th > .cell {
  text-align: center;
}
.el-table th{
    text-align: center;
}
.el-table {
  z-index: 0;
}
.grouping—span {
  height: 65px;
  // flex: 1px;
  box-sizing: border-box;
  line-height: 65px;
  text-align: center;
  border-left: 2px solid #f5f6f8;
  border-bottom: 2px solid #f5f6f8;
}
.grouping—span:nth-last-child(1) {
  border-right: 2px solid #f5f6f8;
}
.gruping {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  .tree—container {
    width: 646px;
    height: 475px;
    overflow: hidden;
    border-radius: 8px;
    background: #fff;
    position: relative;
    top: 25%;
    left: 50%;
    margin-left: -323px;

    .container {
      display: flex;
      justify-content: center;
      .tree—containers {
        width: 250px;
        box-sizing: border-box;
        padding-top: 20px;
        padding-left: 20px;
        .tree—top {
          display: flex;
          height: 26px;
          background-color: #fff;
          margin-bottom: 20px;
          .tree—menu {
            min-width: 42px;
            flex: 1;
            height: 26px;
            font-size: 16px;
            font-weight: Bold;
            font-family: PingFang-SC-Heavy;
            color: #4b83f0;
            text-align: left;
            line-height: 26px;
            margin-left: 8px;
            cursor: pointer;
          }
        }
        .tree—menu-bar {
          height: 368px;
          overflow-y: auto;
          margin-left: 50px;
        }
        .tree—menu-bar::-webkit-scrollbar {
          /*滚动条整体样式*/
          width: 4px;
          /*高宽分别对应横竖滚动条的尺寸*/
          height: 4px;
          background-color: #f5f5f5;
        }

        .tree—menu-bar::-webkit-scrollbar-thumb {
          /*滚动条里面小方块*/
          border-radius: 5px;
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
          background: rgba(0, 0, 0, 0.2);
        }

        .tree—menu-bar::-webkit-scrollbar-track {
          /*滚动条里面轨道*/
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
          border-radius: 0;
          background: rgba(0, 0, 0, 0.1);
        }
      }
      #menu {
        width: 125px;
        overflow: hidden;
        box-shadow: 0 1px 1px #888, 1px 0 1px #ccc;
        position: absolute;
        z-index: 20;
        background: #fff;
        .menu {
          box-sizing: border-box;
          width: 100%;
          height: 25px;
          line-height: 25px;
          padding: 0 10px;
        }
        .menu:hover {
          height: 1.5625rem;
          background: #f4f5f8;
          cursor: pointer;
        }
      }
      .detail-right {
        background: rgba(255, 255, 255, 1);
        border-radius: 0.5rem;
        margin-top: 26px;
      }
      .detail-from {
        text-align: left;
        color: #4b83f0;
        font-weight: Bold;
        margin-top: 3.5rem;
        .detail-name {
          height: 22px;
          padding-left: 1.9375rem;
          display: flex;
          span {
            width: 3.5rem;
            font-size: 1rem;
          }
          .detail-input {
            background: none;
            outline: none;
            box-sizing: border-box;
            border: 1px solid #e9ebf2;
            padding-left: 10px;
            flex: 1;
            height: 1.3125rem;
          }
          label {
            font-size: 14px;
            color: #757575;
            display: flex;
            align-items: center;
          }
          label:nth-of-type(1) {
            margin-right: 15px;
          }
          select {
            width: 173px;
          }
        }

        div {
          margin-bottom: 1.9375rem;
          flex: 1;
          font-size: 1rem;
        }
        .detail-select {
          margin-top: 56px;
          margin-left: 50px;
          button {
            width: 6.1875rem;
            height: 26px;
            border-radius: 0.8125rem;
            text-align: center;
            color: #fff;
            line-height: 26px;
            font-size: 14px;
            border: none;
            outline: none;
            cursor: pointer;
          }
          button:nth-of-type(1) {
            background: #778693;
            margin-right: 31px;
          }
          button:nth-of-type(2) {
            background: #c5c9d4;
          }
        }
      }
    }
  }
}
</style>
