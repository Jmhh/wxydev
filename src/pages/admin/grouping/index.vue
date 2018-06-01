<template>
    <div class="grouping—container">
        <div class="grouping—function">
        <account @handleAddAccount="handleAddAccount" :text="text"></account>
        </div>
        <div class="grouping—data">
          <div class="grouping—title">
                <span class="grouping—span" v-for="(item, index) in title" :key='index'>{{item}}</span>
          </div>
          <div class="grouping—content" v-for="(item, index) in data" :key='index'>
              <span class="grouping—span">{{item.id}}</span>
              <span class="grouping—span">{{item.name}}</span>
              <span class="grouping—span">{{item.sex}}</span>
              <span class="grouping—span">{{item.grouping}}</span>
              <span class="grouping—span"><i class="iconfont icon-bianji"></i>{{item.landTime}}</span>
          </div>
        </div>
       <!-- <groupingForm :arr='arr'></groupingForm> -->
        <div class="gruping" v-show="setting">
           <div class="tree—container">
            <formHead :text="text" @handleAddAccount="handleAddAccount"></formHead>
            <div class="container">
                <div class="tree—containers" @click="handleClickContextmenu">
                    <div class="tree—top">
                        <div class="tree—menu">*规则:</div>
                    </div>
                    <div class="tree—menu-bar">
                        <el-tree 
                        :data="filter" node-key="id" 
                        :default-expand-all="false" 
                        show-checkbox draggable  
                        ref="tree"
                        @check="handleCheck"
                        @node-click="handleNodeClick"
                        @node-contextmenu="handleContextmenu" 
                        @node-collapse="handleNodeCollapse"
                        :allow-drop="allowDrop" 
                        :allow-drag="allowDrag"
                        @node-expand="handleNodeExpand"
                        >
                        </el-tree>
                    </div>
                    <div id="menu" :style="{left: styleX,top: styleY}" v-show="contextmenu">
                        <div class="menu" @click="add">添加（子规则）</div>
                        <div class="menu" @click="edit">编辑</div>
                        <div class="menu" @click="del">删除</div>
                    </div>
                </div>
                <div class="detail-right">
                    <div class="detail-from">
                        <div class="detail-name">
                            <span>名称*：</span><input type="text" class="detail-input" v-model="rule.name" placeholder="请输入名称">
                        </div>
                        <div class="detail-name">
                            <span>*类型:</span>
                            <Select seltext="选择身份类型" :list="list"></Select>
                        </div>
                        <div class="detail-name">
                            <span>*状态:</span>
                            <label><input type="radio" value="1" v-model="rule.yes">禁用</label>
                            <label><input type="radio" value="0" v-model="rule.yes">启用</label>
                        </div>
                        <div class="detail-select">
                            <button  @click="handleInpute">添加</button>  
                            <button @click="handleAddAccount">取消</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import formHead from "../../../components/form-head";
import Select from '../../../components/select'
import { mapMutations, mapActions } from "vuex";
// import groupingForm from './grouping-form'
import Account from "../../../components/account/account.vue";
export default {
  data() {
    return {
      setting:false,
      draggable: true,
      contextmenu: false,
      styleX: "",
      styleY: "",
      addRule: "",
      addText: "明细 - 添加一级规则",
      isShow: true,
      rule: {
        name: "",
        route: "",
        icon: "",
        yes: ""
      },
      
     
      text: "添加分组",

      title: ["#", "名称", "类型", "状态", "操作"],
      list: [
        {
          value: 1,
          name: "管理员"
        },
        {
          value: 2,
          name: "校长"
        },
        {
          value: 3,
          name: "老师"
        },
        {
          value: 4,
          name: "学生"
        }
      ],
      data: [
        {
          id: 1,
          name: "小明",
          sex: "管理组",
          grouping: "启用",
          landTime: "编辑",
          cleaterTime: "创建时间11",
          operation: "操作"
        },
        {
          id: 2,
          name: "小明",
          sex: "管理组",
          grouping: "启用",
          landTime: "编辑",
          cleaterTime: "创建时间11",
          operation: "操作"
        },
        {
          id: 3,
          name: "小明",
          sex: "管理组",
          grouping: "启用",
          landTime: "编辑",
          cleaterTime: "创建时间11",
          operation: "操作"
        },
        {
          id: 4,
          name: "小明",
          sex: "管理组",
          grouping: "启用",
          landTime: "编辑",
          cleaterTime: "创建时间11",
          operation: "操作"
        },
        {
          id: 5,
          name: "小明",
          sex: "管理组",
          grouping: "启用",
          landTime: "编辑",
          cleaterTime: "创建时间11",
          operation: "操作"
        },
        {
          id: 6,
          name: "小明",
          sex: "管理组",
          grouping: "启用",
          landTime: "编辑",
          cleaterTime: "创建时间11",
          operation: "操作"
        }
      ],
      arr: [
        {
          id: 98,
          label: "学院",
          mark: 180652,
          pid: 0,
          icon: "flaticon-users",
          sort: 1
        },
        {
          id: 1,
          text: "首页",
          mark: 180511,
          pid: 0,
          icon: "flaticon-line-graph",
          sort: 2
        },
        {
          id: 3,
          text: "账户",
          mark: 112454,
          pid: 2,
          icon: "flaticon-folder-1",
          sort: 3
        },
        {
          id: 4,
          text: "规则",
          mark: 131923,
          pid: 2,
          icon: "flaticon-folder-1",
          sort: 4
        },
        {
          id: 5,
          text: "保存",
          mark: 112152,
          pid: 4,
          icon: "flaticon-folder-1",
          sort: 5
        },
        {
          id: 6,
          text: "读取",
          mark: 101523,
          pid: 4,
          icon: "flaticon-folder-1",
          sort: 6
        },
        {
          id: 7,
          text: "删除",
          mark: 192546,
          pid: 4,
          icon: "flaticon-folder-1",
          sort: 7
        },
        {
          id: 8,
          text: "排序",
          mark: 192651,
          pid: 4,
          icon: "flaticon-folder-1",
          sort: 8
        },
        {
          id: 9,
          text: "添加",
          mark: 192600,
          pid: 3,
          icon: "flaticon-folder-1",
          sort: 9
        },
        {
          id: 10,
          text: "分组",
          mark: 192611,
          pid: 2,
          icon: "flaticon-folder-1",
          sort: 10
        },
        {
          id: 11,
          text: "类型",
          mark: 192621,
          pid: 10,
          icon: "flaticon-folder-1",
          sort: 11
        },
        {
          id: 12,
          text: "添加",
          mark: 181554,
          pid: 10,
          icon: "flaticon-folder-1",
          sort: 12
        },
        {
          id: 13,
          text: "编辑",
          mark: 101924,
          pid: 3,
          icon: "flaticon-folder-1",
          sort: 13
        },
        {
          id: 14,
          text: "读取",
          mark: 104122,
          pid: 3,
          icon: "flaticon-folder-1",
          sort: 14
        },
        {
          id: 15,
          text: "编辑",
          mark: 181829,
          pid: 10,
          icon: "flaticon-folder-1",
          sort: 15
        },
        {
          id: 16,
          text: "读取",
          mark: 94833,
          pid: 10,
          icon: "flaticon-folder-1",
          sort: 16
        },
        {
          id: 18,
          text: "学校",
          mark: 140332,
          pid: 98,
          icon: "flaticon-folder-1",
          sort: 18
        },
        {
          id: 19,
          text: "添加",
          mark: 145458,
          pid: 18,
          icon: "flaticon-folder-1",
          sort: 19
        },
        {
          id: 20,
          text: "地区",
          mark: 161944,
          pid: 2,
          icon: "flaticon-folder-1",
          sort: 20
        },
        {
          id: 21,
          text: "三级联",
          mark: 162039,
          pid: 20,
          icon: "flaticon-folder-1",
          sort: 21
        },
        {
          id: 22,
          text: "编辑",
          mark: 172621,
          pid: 18,
          icon: "flaticon-folder-1",
          sort: 22
        },
        {
          id: 23,
          text: "读取",
          mark: 105718,
          pid: 18,
          icon: "flaticon-folder-1",
          sort: 23
        },
        {
          id: 24,
          text: "校长",
          mark: 135824,
          pid: 98,
          icon: "flaticon-folder-1",
          sort: 24
        },
        {
          id: 25,
          text: "添加",
          mark: 135923,
          pid: 24,
          icon: "flaticon-folder-1",
          sort: 25
        },
        {
          id: 26,
          text: "编辑",
          mark: 140007,
          pid: 24,
          icon: "flaticon-folder-1",
          sort: 26
        },
        {
          id: 27,
          text: "读取",
          mark: 140231,
          pid: 24,
          icon: "flaticon-folder-1",
          sort: 27
        },
        {
          id: 28,
          text: "名称",
          mark: 154008,
          pid: 18,
          icon: "flaticon-folder-1",
          sort: 28
        },
        {
          id: 83,
          text: "获取学校折线图",
          mark: 105432,
          pid: 97,
          icon: "flaticon-folder-1",
          sort: 83
        },
        {
          id: 2,
          text: "系统",
          mark: 180813,
          pid: 0,
          icon: "flaticon-settings",
          sort: 97
        },
        {
          id: 97,
          text: "报表",
          mark: 180211,
          pid: 0,
          icon: "flaticon-pie-chart",
          sort: 98
        },
        {
          id: 1232,
          text: "1",
          mark: 100732,
          pid: 0,
          icon: "flaticon-folder-1",
          sort: 1232
        },
        {
          id: 1233,
          text: "2",
          mark: 104647,
          pid: 1232,
          icon: "flaticon-folder-1",
          sort: 1233
        },
        {
          id: 1234,
          text: "2",
          mark: 132348,
          pid: 0,
          icon: "flaticon-folder-1",
          sort: 1234
        },
        {
          id: 1235,
          text: "3",
          mark: 132353,
          pid: 0,
          icon: "flaticon-folder-1",
          sort: 1235
        },
        {
          id: 1236,
          text: "22",
          mark: 132406,
          pid: 1234,
          icon: "flaticon-folder-1",
          sort: 1236
        },
        {
          id: 1237,
          text: "33",
          mark: 132415,
          pid: 1234,
          icon: "flaticon-folder-1",
          sort: 1237
        },
        {
          id: 1238,
          text: "333",
          mark: 132435,
          pid: 1237,
          icon: "flaticon-folder-1",
          sort: 1238
        }
      ]
    };
  },
  computed: {
    //数据过滤处理
    filter() {
      let data = this.arr;
      data.forEach(item => {
        delete item.children;
      });
      let map = {};
      data.forEach(item => {
        item["label"] = item["text"];
        map[item.id] = item;
      });
      let val = [];
      data.forEach(item => {
        let parent = map[item.pid];
        if (parent) {
          (parent.children || (parent.children = [])).push(item);
        } else {
          val.push(item);
        }
      });
      return val;
    }
  },
  components: {
    Account,
    formHead,
    Select
  },
  methods: {
    //显示隐藏弹出框
    handleAddAccount(){
      this.setting =! this.setting
    },
   
 
    ...mapMutations(["abc"]),
    //关闭提示限制信息
    handleClickInfo() {
      this.isShow = false;
    },
    //保存添加规则
    handleInpute() {
      console.log(
        this.rule.name,
        this.rule.route,
        this.rule.icon,
        this.rule.yes
      );
    },
    //删除已选
    getCheckedKeys(a) {
      console.log(a);
    },
    //添加
    add() {
      this.addText = this.addRule;
    },
    //编辑
    edit() {
      console.log("b");
    },
    //删除
    del() {
      console.log("c");
    },


    //拖拽
    allowDrop(draggingNode, dropNode, type) {
     
      this.contextmenu = false;
         if (draggingNode.level === 1 && dropNode.level === 1) {
                return type !== "inner"
            }else if (draggingNode.level === 2 && dropNode.level === 2) {
                return type !== "inner"
            }else if (draggingNode.level === 3 && dropNode.level === 3) {
                return type !== "inner"
            }else if (draggingNode.level > dropNode.level) {
                return type === "inner"
            }else if (draggingNode.level === dropNode.level) {
                return type === "inner"
            }else {
                return false;
            }
      
    },
    //右键菜单
    handleContextmenu(draggingNode, dropNode, dropType, ev) {
      this.addRule = "明细 - " + dropNode.label + " - 添加子规则";
      this.contextmenu = true;
      this.styleX = draggingNode.clientX + 10 + "px";
      this.styleY = draggingNode.clientY + 20 + "px";
    },
    //取消右键菜单
    handleClickContextmenu() {
      this.contextmenu = false;
    },
    //下拉
    handleNodeExpand(a) {
      this.contextmenu = false;
    },
    handleNodeClick() {
      this.contextmenu = false;
    },
    handleCheck() {
      this.contextmenu = false;
    },
    handleNodeCollapse() {
      this.contextmenu = false;
    },
    allowDrag(draggingNode) {
      return draggingNode.data.label.indexOf("编辑") === -1;
    }
  }
};
</script>

<style scoped rel='stylesheet/scss' lang='scss' scoped>
.grouping—container {
  background-color: #fff;
  padding: 0 25px 0px 26px;
  .grouping—function {
    display: flex;
    align-items: center;
    height: 28px;
    padding-top: 28px;
  }
  .grouping—data {
    width: 100%;
    margin-top: 26px;
    .grouping—title {
      width: 100%;
      height: 65px;
      display: flex;
      background-color: #e3e9f0;
    }
    .grouping—content {
      width: 100%;
      display: flex;
      i{
        margin-right: 11px;
      }
    }
    .grouping—title span:nth-of-type(1),.grouping—content span:nth-of-type(1){
         width: 15%;
    }
    .grouping—title span:nth-of-type(2),.grouping—content span:nth-of-type(2){
         width: 15%;
    }
    .grouping—title span:nth-of-type(3),.grouping—content span:nth-of-type(3){
         width: 15%;
    }
    .grouping—title span:nth-of-type(4),.grouping—content span:nth-of-type(4){
         width: 10%;
    }
    .grouping—title span:nth-of-type(5),.grouping—content span:nth-of-type(5){
         width: 45%;
    }
    .grouping—content span:nth-of-type(5){
         	color: #B189E5;
    }

  }
  .grouping—span {
    height: 65px;
    // flex: 1px;
    box-sizing: border-box;
    line-height: 65px;
    text-align: center;
    border-left: 2px solid #f5f6f8;
    border-bottom: 2px solid #f5f6f8;
    font-size: 1rem;
  }
  .grouping—span:nth-last-child(1) {
    border-right: 2px solid #f5f6f8;
  }
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
        padding-top: 1.25rem;
        padding-left: 1.25rem;
        .tree—top {
          display: flex;
          height: 1.625rem;
          background-color: #fff;
          margin-bottom: 1.25rem;
          .tree—menu {
            min-width: 42px;
            flex: 1;
            height: 1.625rem;
            font-size: 16px;
            font-weight: Bold;
            font-family: PingFang-SC-Heavy;
            color: #4b83f0;
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
      #menu {
        width: 7.8125rem;
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
          font-size: 0.875rem;
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
        margin-top: 1.625rem;
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
            border: 1px solid #E9EBF2;
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
          select{
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
            height: 1.625rem;
            border-radius: 0.8125rem;
            text-align: center;
            color: #fff;
            line-height: 1.625rem;
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
