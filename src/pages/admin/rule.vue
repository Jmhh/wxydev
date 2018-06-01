<template>
    <div class="rule—container">
        <div class="tree—left" @click="handleClickContextmenu">
            <div class="tree—top">
                <div class="tree—menu">菜单</div>
                <div class="tree—add" @click="handleRightMenu('添加一级')">添加一级规则</div>
                <div class="tree—remove" @click="handleRightMenu('删除')">删除已选</div>
            </div>
            <div class="tree—menu-bar">
                <el-tree :data="filter" 
                    node-key="id" :default-expand-all="false" 
                    :allow-drop="allowDrop" show-checkbox draggable
                    ref="tree" @check="handleCheck" @node-click="handleNodeClick" 
                    @node-contextmenu="handleContextmenu" 
                    @node-drop="handleNodeDrop"
                    @node-collapse="handleNodeCollapse" @node-expand="handleNodeExpand">
                </el-tree>
            </div>
            <div id="menu" :style="{left: styleX,top: styleY}" v-show="contextmenu">
                <div v-show="isAdd" class="menu" @click="handleRightMenu('添加')">添加（子规则）</div>
                <div class="menu" @click="handleRightMenu('编辑')">编辑</div>
                <div class="menu" @click="handleRightMenu('删除')">删除</div>
            </div>
        </div>
        <div class="detail-right">
            <div class="detail-title">{{addText}}</div>
            <div v-show="isShow" class="detail-title detail-limit" style="background:#fff">
                <div class="detail-cue">
                    <i class="icon iconfont icon-tishi" :style="{color: '#62D862'}"></i>
                    <p>提示：规则限制三级。</p>
                </div>
                <i @click="handleClickInfo()" class="icon iconfont icon-guanbi detail-deletes"></i>
            </div>
            <div class="detail-from">
                <div class="detail-name">
                    <span>名称*：</span><input type="text" @focus="handleFocus('名称')" @blur="handleBlur('名称')" @input="handleInput('名称')" class="detail-input" :class="{ borderColor:'名称'==name}" v-model="rule.name" placeholder="请输入名称"></div>
                <div class="detail-show">
                    <p class="detail-show" v-show="show.isName">长度1-20个字符</p>
                </div>
                <div class="detail-name">
                    <span>路径*：</span><input type="text" @focus="handleFocus('路径')" @blur="handleBlur('路径')" @input="handleInput('路径')" class="detail-input" :class="{ borderColor:'路径'==name}" v-model="rule.path" placeholder="请输入路径"></div>
                <div class="detail-show">
                    <p class="detail-show" v-show="show.isPath">长度1-80个字符</p>
                </div>
                <div class="detail-name">
                    <span>图标*：</span><input type="text" @focus="handleFocus('图标')" @blur="handleBlur('图标')" @input="handleInput('图标')" class="detail-input" :class="{ borderColor:'图标'==name}" v-model="rule.icon" placeholder="请输入图标"></div>
                <div class="detail-show">
                    <p class="detail-show" v-show="show.isIcon">长度1-60个字符</p>
                </div>
                <div class="sel_wrap">
                    <span>请选择*：</span>
                    <Select :seltext="rule.method" :list="list" :style="{width:'100px'}" @handleSelect='handleSelect'></Select>
                </div>
                <div>
                    <span>是否显示*：</span>
                    <label><input type="radio" value="1" v-model="rule.isDisplay">是</label>
                    <label><input type="radio" value="0" v-model="rule.isDisplay">否</label>
                </div>
                <div v-if="switchText === '添加'" class='detail-add' @click="handleSave('添加')">添加</div>
                <div v-else class='detail-add' @click="handleSave('保存')">保存</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { getPermissions, postPermissions, deletePermissions, seePermissions, putPermissions, sortPermissions } from "api/admin.js";
import Loading from '../../components/loading'
import Select from '../../components/select'
export default {
    data() {
        return {
            contextmenu: false, //右键菜单
            styleX: '', //右键菜单位置
            styleY: '', //右键菜单位置
            isAdd: true, //控制右键添加子规则
            addRule: '',
            addText: '明细 - 添加一级规则',
            isShow: true, //提示：规则限制
            // rule: {
            //     path: "",
            //     name: "",
            //     method: '',
            //     status: '',
            //     pid: '0',
            //     icon: "flaticon-folder-1",
            //     isDisplay: 1,
            //     id: '',
            //     permission: '',
            //     sort: '',
            // },
            name: '', //控制边框
            show: { //控制提示信息
                isName: false,
                isPath: false,
                isIcon: false,
            },
            list: [
                {
                    value: 1,
                    name: "get"
                },
                {
                    value: 2,
                    name: "post"
                },
                {
                    value: 3,
                    name: "pull"
                },
                {
                    value: 4,
                    name: "del"
                }
            ],
            arrId: '', //保存选中数据
            dropNodeLabel: '', //序号
            text: '添加',
            switchText: '添加' //切换 保存跟添加按钮
        }
    },
    computed: {
        ...mapState({
            rule: state => state.admin.seePermissionsData
        }),
        ...mapGetters(["filter"])
    },
    created() {
        this.getPermissionsList()
        getPermissions(this) //获取菜单列表数据
    },
    methods: {
        ...mapActions(["getPermissionsList", "showPermissionsList", "getEditList", "showEditList"]),
        //下拉选择
        handleSelect(index) {
            this.rule.method = index 
        },
        //input获取焦点 
        handleFocus(item) {
            if (item === '名称') {
                this.show.isName = false;
                this.name = '名称';
            } else if (item === '路径') {
                this.show.isPath = false;
                this.name = '路径';
            } else if (item === '图标') {
                this.show.isIcon = false;
                this.name = '图标';
            }
        },
        //input失去焦点 
        handleBlur(item) {
            if (item === '名称') {
                this.name = '';
            }
            if (item === '路径') {
                this.name = '';
            }
            if (item === '图标') {
                this.name = '';
            }
        },
        //input输入触发
        handleInput(item) {           
            if (item === '名称') {
                if (this.rule.name.length > 20) {
                    this.show.isName = true;
                } else {
                    this.show.isName = false;
                }
            }
            if (item === '路径') {
                if (this.rule.path.length > 80) {
                    this.show.isPath = true;
                } else {
                    this.show.isPath = false;
                }
            }
            if (item === '图标') {
                if (this.rule.icon.length > 60) {
                    this.show.isIcon = true;
                } else {
                    this.show.isIcon = false;
                }
            }
        },
        //关闭提示限制信息
        handleClickInfo() {
            this.isShow = false;
        },
        //保存添加规则
        handleSave(item) {
            let data = {
                ...this.rule
            }
            if(item === '添加') {
                if (this.rule.name.length > 0 && this.rule.name.length < 20 && this.rule.path.length < 80 && this.rule.path.length >= 1 && this.rule.icon.length < 60 && this.rule.icon.length >= 1) {
                    postPermissions(this, data) //提交添加规则数据
                    this.rule.path = '';
                    this.rule.name = '';
                    this.rule.method = '';
                } else {
                    if (this.rule.name !== '') {
                        this.show.isName = false;
                    } else {
                        this.show.isName = true;
                    }
                    if (this.rule.path !== '') {
                        this.show.isPath = false;
                    } else {
                        this.show.isPath = true;
                    }
                    if (this.rule.icon !== '') {
                        this.show.isIcon = false;
                    } else {
                        this.show.isIcon = true;
                    }
                }
            }else if(item === '保存') {
                if (this.rule.name.length > 0 && this.rule.name.length < 20 && this.rule.path.length < 80 && this.rule.path.length >= 1 && this.rule.icon.length < 60 && this.rule.icon.length >= 1) {
                    putPermissions(this, this.rule.id, data) //编辑保存规则数据
                } else {
                    if (this.rule.name !== '') {
                        this.show.isName = false;
                    } else {
                        this.show.isName = true;
                    }
                    if (this.rule.path !== '') {
                        this.show.isPath = false;
                    } else {
                        this.show.isPath = true;
                    }
                    if (this.rule.icon !== '') {
                        this.show.isIcon = false;
                    } else {
                        this.show.isIcon = true;
                    }
                }
            }
            
            
        },
        //添加/删除/编辑菜单规则-一级/子级规则
        handleRightMenu(item) {
            if (item === '添加一级') {
                this.rule.name = '';
                this.rule.path = '';
                this.rule.status = 1;
                this.rule.icon = 'flaticon-folder-1';
                this.rule.isDisplay = 1;
                this.rule.method = '';
                this.switchText = '添加';
                this.addText = '明细 - 添加一级规则';
                this.rule.pid = 0;
            } else if (item === '编辑') {
                this.switchText = '编辑';
                this.text = '编辑';                
                this.addText = '明细 - ' + this.dropNodeLabel;
                seePermissions(this, this.rule.pid)
                // this.rule.name=this.admin.seePermissions.id
            } else if (item === '删除') {
                if(this.arrId) {
                    deletePermissions(this,this.arrId.join(','))
                }else {
                    console.log('请选择')
                }
            } else if (item === '添加') {
                this.rule.name = '';
                this.rule.path = '';
                this.rule.icon = 'flaticon-folder-1';
                this.rule.isDisplay = 1;
                this.rule.status = 1;
                this.rule.method = '';
                this.text = '添加';
                this.switchText = '添加';
                this.addText = this.addRule;
            }
        },
        //拖拽
        allowDrop(draggingNode, dropNode, type) {
            this.contextmenu = false;
            if (draggingNode.level === 1 && dropNode.level === 1) {
                return type !== "inner"
            } else if (draggingNode.level === 2 && dropNode.level === 2) {
                return type !== "inner"
            } else if (draggingNode.level === 3 && dropNode.level === 3) {
                return false
            } else if (draggingNode.level > dropNode.level) {
                return false
            } else if (draggingNode.level === dropNode.level) {
                return type === "inner"
            } else {
                return false;
            }

        },
        handleNodeDrop(draggingNode, dropNode, type, a) {
            let data = {
                id: draggingNode.data.id,
                pid: draggingNode.data.pid,
                orderJson: []
            }
            dropNode.parent.childNodes.map((t, i) => {
                console.log(t.data.id, t.data.sort,t.data)
                data.orderJson.push({id: t.data.id, sort: t.data.sort})
            })
            // console.log(draggingNode.data.id,draggingNode.data.pid,'这是父')
            console.log(draggingNode.data.sort,dropNode.data.sort)
            data.orderJson.map((t, i) => {
                
            })
            data.orderJson = JSON.stringify(data.orderJson);
            // console.log(data)
            // sortPermissions(this, data)
        },
        //右键菜单
        handleContextmenu(draggingNode, dropNode, dropType, ev) {
            let arr = [];
            this.$refs.tree.children.map((t, i) => {
                if (t.children) {
                    return t.children.map((x, y) => {
                        if (x.children) {
                            return x.children.map((a, b) => {
                                return arr.push(a.label)
                            })
                        } else {
                            return
                        }
                    })
                } else {
                    return
                }
            })

            if (arr.indexOf(dropNode.label) !== -1) {
                this.isAdd = false;
            } else {
                this.isAdd = true;
            }
            this.dropNodeLabel = dropNode.label;
            this.addRule = '明细 - ' + dropNode.label + ' - 添加子规则'
            this.contextmenu = true;
            this.styleX = draggingNode.clientX + 10 + 'px';
            this.styleY = draggingNode.clientY + 20 + 'px';
            this.rule.pid = dropNode.id
        },
        //取消右键菜单
        handleClickContextmenu() {
            this.contextmenu = false
        },
        //下拉
        handleNodeExpand(a) {
            this.contextmenu = false;
        },
        handleNodeClick() {
            this.contextmenu = false;
        },
        //获取选中的数据
        handleCheck(data,type) {
            this.arrId = type.checkedKeys;
            this.contextmenu = false;
        },
        handleNodeCollapse() {
            this.contextmenu = false;
        },
    },
    components: {
        Loading,
        Select
    }
};
</script>
<style scoped>
.rule—container {
  display: flex;
  box-sizing: border-box;
  flex: 1;
  border: 2px solid #edf0f5;
  height: 584px;
  border-top: 0;
}
.tree—left {
  flex: 1;
  box-sizing: border-box;
  margin-top: 27px;
  margin-left: 27px;
  border: 2px solid #edf0f5;
  background: #fff;
  border-radius: 8px;
  height: 530px;
  min-width: 283px;
}
.tree—top {
  display: flex;
  margin-top: 20px;
  height: 26px;
  background-color: #fff;
  margin-bottom: 27px;
}
.tree—menu {
  min-width: 42px;
  flex: 1;
  height: 26px;
  font-size: 18px;
  font-family: PingFang-SC-Heavy;
  color: #3a4760;
  line-height: 26px;
  margin-left: 8px;
  cursor: pointer;
}
.tree—add {
  flex: 3;
  height: 26px;
  background: rgba(119, 134, 147, 1);
  border-radius: 16px;
  text-align: center;
  line-height: 26px;
  margin-left: 20px;
  cursor: pointer;
  font-size: 16px;
}
.tree—menu-bar {
  height: 23rem;
  overflow-y: auto;
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
.tree—remove {
  flex: 2;
  height: 26px;
  background: rgba(197, 201, 212, 1);
  border-radius: 13px;
  text-align: center;
  line-height: 26px;
  margin-left: 26px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
}
#menu {
  padding: 5px 0;
  width: 125px;
  overflow: hidden;
  box-shadow: 0 1px 1px #888, 1px 0 1px #ccc;
  position: absolute;
  z-index: 20;
  background: #fff;
  border-radius: 4px;
}

.menu {
  box-sizing: border-box;
  width: 100%;
  height: 26px;
  line-height: 26px;
  padding: 0 10px;
  font-size: 14px;
}
.menu:hover {
  height: 26px;
  background: #f4f5f8;
  cursor: pointer;
}
.detail-right {
  box-sizing: border-box;
  border: 2px solid #edf0f5;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  margin-top: 26px;
  margin-left: 26px;
  flex: 3;
  height: 530px;
}
.detail-title {
  width: 100%;
  height: 76px;
  /* font-weight: Heavy; */
  font: PingFang-SC-Heavy;
  box-sizing: border-box;
  text-align: left;
  padding-left: 2.0625rem;
  line-height: 76px;
  font-size: 20px;
  color: #3a4760;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #edf0f5;
}
.detail-limit {
  box-shadow: 0px 6px 20px #edf0f5;
}
.detail-cue {
  display: flex;
  height: 14px;
  align-items: center;
  font-size: 14px;
  font-family: Adobe Heiti Std R;
  color: rgba(58, 71, 96, 1);
}
.detail-cue p {
  margin-left: 15px;
}
.detail-deletes {
  font-size: 26px;
  height: 26px;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  margin-top: 15px;
}
.detail-from div:first-child {
  margin-top: 55px;
}
.detail-name {
  padding-left: 31px;
  display: flex;
}
.detail-from span {
  width: 55px;
  font-size: 16px;
}
.detail-from {
  text-align: left;
  padding-left: 33px;
  color: #4b83f0;
  font-weight: Bold;
}
.detail-input {
  background: none;
  outline: none;
  box-sizing: border-box;
  border: 1px solid #e9ebf2;
  padding-left: 10px;
  flex: 1;
  height: 22px;
  box-shadow: 1px 0px 3px rgba(119, 134, 147, 0.66);
  min-width: 100px;
  max-width: 600px;
}
.sel_wrap{
    display: flex;
    padding-left: 15px;
    margin-bottom: 20px;
}
.sel_wrap span{
   width: 71px;

}
.detail-add {
  width: 98px;
  height: 26px;
  background: rgba(98, 216, 98, 1);
  border-radius: 0.8125rem;
  text-align: center;
  color: #fff;
  line-height: 26px;
  font-size: 14px;
  margin-left: 92px;
  cursor: pointer;
  margin-top: 24px;
}
.borderColor {
  border: 1px solid #cdcfdb;
}
.detail-show {
    width: 172px;
    text-align: right;
    margin: 0px;
    font-size: 12px;
    height: 35px;
    line-height: 25px;
    color: #f4516c;
    font-weight: 400;
}
</style>