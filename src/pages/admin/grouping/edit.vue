<template>
   <div class="container">
        <Loading v-if="seeGroupedLoad"></Loading>
        <div v-else style="display:flex">
            <div class="tree—containers">
                <div class="tree—top">
                    <div class="tree—menu">*规则:</div>
                </div>
                <div class="tree—menu-bar">
                    <el-tree :data="filter" node-key="id" 
                        :default-expand-all="false" show-checkbox 
                        draggable ref="tree" @check="handleCheck" 
                        :default-checked-keys='rolePermissionList'>
                    </el-tree>
                </div>
            </div>
            <div class="detail-right">
                <div class="detail-from">
                    <div class="detail-name">
                        <span>名称*：</span>
                        <el-input  type="text" v-model="datas.name" placeholder="请输入名称"></el-input>
                        <span v-show="detail" class="detail-span">请输入名称</span>
                    </div>
                    <div class="detail-name">
                        <span>*类型:</span>
                        <el-input
                         placeholder="请输入类型"
                        v-model="datas.role" 
                        :disabled="true">
                        </el-input>
                        <i class="iconfont icon-35_xiangxiajiantou"></i>
                    </div>
                    <div class="detail-name">
                        <span>*状态:</span>
                        <label><input type="radio" value="1" v-model="datas.status">启用</label>
                        <label><input type="radio" value="0" v-model="datas.status">禁用</label>
                    </div>
                    <div class="detail-select">
                        <button @click="handleInpute('保存')">保存</button>
                        <button @click="handleInpute('取消')">取消</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { groupedList, editGrouped } from "api/admin/grouping.js";
import { getPermissions } from "api/admin/rule.js";
import Loading from '../../../components/loading'
export default {
    data() {
        return {
            detail: false,
            checkedKeys: ''
        };
    },
    props: ['index'],
    computed: {
        ...mapState({
            datas: state => state.admin.seeGroupedData,
            rolePermissionList: state => state.admin.rolePermissionList,
            seeGroupedLoad: state => state.admin.seeGroupedLoad && state.admin.seeGroupedLoad,
        }),
        ...mapGetters(['filter']),
    },
    methods: {
        //关闭提示限制信息
        handleClickInfo(item) {
            this.isShow = false;
        },
        //保存添加规则
        handleInpute(item) {
            if(item === '保存') {
                let data = {
                    name: this.datas.name,
                    role: this.datas.role,
                    status: this.datas.status,
                    checkedKeys: this.datas.checkedKeys
                }
                editGrouped(this, this.index, data)
                console.log(this.datas.name, this.datas.role, this.datas.status, this.checkedKeys,this.index)
                this.$emit('handleEdits')
            }else if(item === '取消') {
                this.$emit('handleEdits')                
            }
        },
        handleCheck(data, type) {
            this.checkedKeys = type.checkedKeys;
        },
    },
    components: {
        Loading
    }
};
</script>

<style scoped rel='stylesheet/scss' lang='scss' scoped>
.container {
  display: flex;
  justify-content: center;
  background: #fff;
  .tree—containers {
    width: 250px;
    padding-top: 1.25rem;
    margin-right: 10%;
    .tree—top {
      .tree—menu {
        min-width: 42px;
        flex: 1;
        height: 1.625rem;
        font-size: 16px;
        font-family: PingFang-SC-Heavy;
        color: #3f4047;
        text-align: left;
        line-height: 1.625rem;
        margin-left: 0.5rem;
        cursor: pointer;
      }
    }
    .tree—menu-bar {
      height: 23rem;
      overflow-y: auto;
      margin-left: 50px;
    }
    .tree—menu-bar::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 0.25rem;
      /*高宽分别对应横竖滚动条的尺寸*/
      height: 0.25rem;
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
  .detail-from {
    text-align: left;
    color: #3f4047;
    margin-top: 3.5rem;
    .detail-name {
      height: 32px;
      line-height: 32px;
      padding-left: 1.9375rem;
      display: flex;
      position: relative;
      span {
        width: 3.5rem;
        line-height: 40px;
        font-size: 1rem;
      }
      .detail-input {
        background: none;
        outline: none;
        box-sizing: border-box;
        border: 1px solid #e9ebf2;
        padding: 15px 90px 15px 5px;
        border-radius: 5px;
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
      .detail-span {
        position: absolute;
        top: 32px;
        margin-left: 58px;
        width: 173px;
        font-size: 12px;
        color: #f4516c;
        font-weight: 500;
      }
      i {
        position: absolute;
        top: 5px;
        right: 10px;
        font-size: 25px;
        color: #ccc;
      }
    }

    div {
      margin-bottom: 1.9375rem;
      flex: 1;
      font-size: 1rem;
    }
    .detail-select {
      button {
        width: 6.1875rem;
        height: 1.625rem;
        border-radius: 0.8125rem;
        text-align: center;
        color: #fff;
        line-height: 1.625rem;
        font-size: 14px;
        border: none;
        outline: none;
        cursor: pointer;
        background: #778693;
      }
      button:nth-of-type(1){
           margin-left: 35px;
           margin-right: 25px;
      }
       button:nth-of-type(2){
          background: #C5C9D4;
      }
    }
  }
}
</style>
