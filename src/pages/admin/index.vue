<template>
  <div class="layout">
    <section class="layout-content">
      <aside>
        <Sider/>
      </aside>
      <main>
        <Header/>
        <div class="option_container">
          <div class="top">
            <div @click="handleClick(index, item.coms)" class="menu" :class="{dynamicColor:item.isActive}" v-for="(item, index) in tabsName" :key="index">
              <i v-if="index===0" class="icon iconfont icon-zhanghu-copy"></i>
              <i v-if="index===1" class="icon iconfont icon-guize"></i>
              <i v-if="index===2" class="icon iconfont icon-fenzu"></i>
              {{item.name}}
            </div>
          </div>
          <keep-alive>
            <component :is="componentName"></component>
          </keep-alive>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
import Sider from "components/a-siderbar";
import Header from "components/header";
import account from "./account";
import rule from "./rule";
import grouping from "./grouping";
export default {
    data() {
        return {
            tabsName: [
                {
                    name: "账号",
                    isActive: true,
                    coms: "account"
                },
                {
                    name: "规则",
                    isActive: false,
                    coms: "rule"
                },
                {
                    name: "分组",
                    isActive: false,
                    coms: "grouping"
                }
            ],
            active: false,
            componentName: "account"
        };
    },
    components: {
        account,
        rule,
        grouping,
        Header,
        Sider
    },
    methods: {
        handleClick(index, item) {
            this.tabsName.map((t, i) => {
                if (index === i) {
                    this.componentName = t.coms;
                    t.isActive = true;
                } else {
                    return (t.isActive = false);
                }
            });
        }
    }
};
</script>

<style scoped>
/* @import "styles/_mixins.scss"; */
.option_container {
    width: 100%;
    background: #f8fafc;
    padding-top: 46px;
    padding-left: 25px;
    box-sizing: border-box;
}
.top {
    width: 414px;
    display: flex;
    height: 46px;
    align-items: center;
}
.menu {
    width: 138px;
    text-align: center;
    height: 46px;
    line-height: 46px;
    border: 2px solid #edf0f5;
    border-radius: 8px 8px 0px 0px;
    background-color: #f8f9fa;
    cursor: pointer;
}
.dynamicColor {
    background-color: #fff;
    border-bottom: 0px;
}
</style>
