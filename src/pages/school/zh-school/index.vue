<template>
    <div class="admin_option_container">
        <div class="admin_top">
            <div @click="handleClick(index, item.coms)" class="admin_menu" :class="{admin_dynamicColor:item.isActive}" v-for="(item, index) in tabsName" :key="index">
                <i v-if="index===0" :style="{color : isIndex===0 ? '#4B83F0':''}" class="icon iconfont icon-zhanghu-copy"></i>
                <i v-if="index===1" :style="{color : isIndex===1 ? '#4B83F0':''}" class="icon iconfont icon-guize"></i>
                <i v-if="index===2" :style="{color : isIndex===2 ? '#4B83F0':''}" class="icon iconfont icon-fenzu"></i>
                <i v-if="index===3" :style="{color : isIndex===3 ? '#4B83F0':''}" class="icon iconfont icon-guize"></i>
                {{item.name}}
            </div>
        </div>
        <component :is="componentName"></component>
    </div>
</template>

<script>
import SchoolClass from './school-class'
import SchoolStudent from './school-student'
import SchoolTeacher from './school-teacher'
import SchoolBook from './school-book'
export default {
    data() {
        return {
            tabsName: [
                {
                    name: "班级",
                    isActive: true,
                    coms: "SchoolClass"
                },
                {
                    name: "老师",
                    isActive: false,
                    coms: "SchoolTeacher"
                },
                {
                    name: "学生",
                    isActive: false,
                    coms: "SchoolStudent"
                },
                {
                    name: "课程管理",
                    isActive: false,
                    coms: "SchoolBook"
                }
            ],
            componentName: "SchoolClass",
            active: false,
            isIndex: 0
        }
    },
    methods: {
        handleClick(index, item) {
            this.tabsName.map((t, i) => {
                if (index === i) {
                    this.componentName = t.coms;
                    this.isIndex = index
                    t.isActive = true;
                } else {
                    return (t.isActive = false);
                }
            });
        }
    },
    components: {
        SchoolClass,
        SchoolStudent,
        SchoolTeacher,
        SchoolBook,
    }
}
</script>

<style lang='scss' scoped>
.admin_option_container {
  background: #f8fafc;
  padding-top: 46px;
  padding-left: 26px;
  box-sizing: border-box;
  .admin_top {
        max-width: 600px;
        min-width: 500px;
        display: flex;
        height: 46px;
        align-items: center;
        .admin_menu {
            width: 138px;
            color: #A3ADBD;
            box-sizing: border-box;
            text-align: center;
            height: 46px;
            line-height: 46px;
            border: 2px solid #edf0f5;
            border-radius: 8px 8px 0px 0px;
            background-color: #f8f9fa;
            cursor: pointer;
            font-size: 20px;
        }
        .admin_dynamicColor {
            background-color: #fff;
            border-bottom: 0px;
            color: #3A4760;
        }
    }
}



</style>
