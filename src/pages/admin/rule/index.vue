<template>
    <div class="rule—container">
      <div class="rule—left">
        <tree :arr='filter'></tree>
      </div>
      <Detail></Detail>
    </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
import Tree from "./tree";
import Detail from "./detail-rule";
export default {
  data() {
    return {
      arr: [
        {
          id: 98,
          text: "学院",
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
    ...mapState(["menu"]),
    //数据过滤处理
    filter() {
      console.log(this.$store.state.admin.menu)
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
    Tree,
    Detail
  },
  methods: {
    ...mapActions(["hideloader"]),
  },
  created() {
    this.hideloader()
  },
};
</script>

<style scoped>
.rule—container {
  display: flex;
  background-color: #fff;
  border: 2px solid #EDF0F5;
  border-top: 0;
}
.rule—left {
  height: 530px;
  border: 2px solid #edf0f5;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  margin-top: 26px;
  margin-left: 26px;
  display: flex;
  flex: 1;
}
</style>
