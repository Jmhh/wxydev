<!-- 学校内页组件 -->
<template>
    <div class="school-tabs">
        <ul class="school-tabs-navs">
            <li @click="toggle(index,tab.view)" v-for="(tab,index) in tabs" :class="{active: active == index}">
                <i :class="tab.icon"></i> {{ tab.type }}</li>
        </ul>
        <div class="school-tabs-content">
            <keep-alive>
                <component :is="currentView"></component>
            </keep-alive>
        </div>

    </div>
</template>

<script>
import Class from "./class";
import Teacher from "./teacher";
import Student from "./student";
import Book from "./book";

export default {
    created(){
        console.log('学校id:'+this.$route.params.id);
    },
    data() {
        return {
            currentView: "Class",
            active: 0,
            tabs: [
                {
                    type: "班级",
                    icon: "iconfont icon-banjichengzhang",
                    view: "Class"
                },
                {
                    type: "老师",
                    icon: "iconfont icon-laoshi",
                    view: "Teacher"
                },
                {
                    type: "学生",
                    icon: "iconfont icon-xuesheng",
                    view: "Student"
                },
                {
                    type: "课本管理",
                    icon: "iconfont icon-kebenguanli",
                    view: "Book"
                }
            ]
        };
    },
    components: {
        Class,
        Teacher,
        Student,
        Book
    },
    methods: {
        toggle(i, v) {
            this.active = i;
            this.currentView = v;
        }
    }
};
</script>
<style rel='stylesheet/scss' lang='scss' scoped>
.school-tabs {
    padding: 20px 30px;
    ul {
        height: 45px;
        z-index: 2;
        border-bottom: none;
        border-radius: 4px 4px 0 0;
        margin-bottom: -1px;
        li {
            float: left;
            list-style: none;
            width: 138px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            text-align: center;
            height: 46px;
            line-height: 46px;
            color: #a3adbd; 
            border: 2px solid #edf0f5;
            border-radius: 8px 8px 0px 0px;
            background-color: #f8f9fa;
            cursor: pointer;
            font-size: 20px;
            i {
                font-size: 22px;
                margin-right: 10px;
            }
        }
        li.active {
            background: #fff;
            color: #3a4760;
            border-bottom: 1px solid transparent;
            i {
                color: #4b83f0;
            }
        }
    }
    .school-tabs-content {
        border: 2px solid #edf0f5;
        background: rgba(255, 255, 255, 1);
        border-radius: 0 8px 8px;
        min-height: 300px;
    }
}
</style>