<template>
    <div class="tree—containers">
      <div class="tree—top">
        <div class="tree—menu">菜单</div>
        <div class="tree—add">添加一级规则</div>
        <div class="tree—remove">删除已选</div>
      </div>
      <div class="tree—menu-bar">
        <el-tree
          :data="arr"
          node-key="id"
          :default-expand-all="false"
          show-checkbox
          @node-drag-start="handleDragStart"
          @node-drag-enter="handleDragEnter"
          @node-drag-leave="handleDragLeave"
          @node-drag-over="handleDragOver"
          @node-drag-end="handleDragEnd"
          @node-drop="handleDrop"
          draggable
          :allow-drop="allowDrop"
          :allow-drag="allowDrag">
        </el-tree>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    arr: Array
  },
  methods: {
    handleDragStart(node, ev) {
      console.log("drag start", node);
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      console.log("tree drag enter: ", dropNode.label);
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      console.log("tree drag leave: ", dropNode.label);
    },
    handleDragOver(draggingNode, dropNode, ev) {
      console.log("tree drag over: ", dropNode.label);
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      console.log("tree drag end: ", dropNode && dropNode.label, dropType);
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      console.log("tree drop: ", dropNode.label, dropType);
    },
    allowDrop(draggingNode, dropNode, type) {
      if (dropNode.data.label === "二级 3-1") {
        return type !== "inner";
      } else {
        return true;
      }
    },
    allowDrag(draggingNode) {
      return draggingNode.data.label.indexOf("三级 3-1-1") === -1;
    }
  }
};
</script>
<style scoped>
.tree—containers {
  width: 100%;
  box-sizing: border-box;
  padding-top: 20px;
  padding-left: 20px;
  flex: 1;
}
.tree—top {
  display: flex;
  height: 26px;
  background-color: #fff;
  margin-bottom: 20px;
}
.tree—menu {
  width: 36px;
  height: 26px;
  font-size: 18px;
  font-family: PingFang-SC-Heavy;
  color: #3a4760;
  line-height: 26px;
  margin-left: 8px;
  cursor: pointer;
}
.tree—add {
  width: 150px;
  height: 26px;
  background: rgba(119, 134, 147, 1);
  border-radius: 13px;
  text-align: center;
  line-height: 26px;
  margin-left: 37px;
  cursor: pointer;
}
.tree—menu-bar {
  height: 368px;
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
  width: 121px;
  height: 26px;
  background: rgba(197, 201, 212, 1);
  border-radius: 13px;
  text-align: center;
  line-height: 26px;
  margin-left: 37px;
  cursor: pointer;
}
</style>