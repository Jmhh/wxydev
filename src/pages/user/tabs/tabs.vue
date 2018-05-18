<!-- tabs组件 -->
<template>

    <div class="box">
        <ul class="tabs clearfix">
            <li v-for="(tab,index) in tabsName">

                <a href="javascript:;" class="tab-link" @click="tabsSwitch(index)" v-bind:class="{active:tab.isActive}">
                    <i :class="tab.icon"></i> {{tab.name}}</a>
            </li>
        </ul>

        <div class="cards">
            <div class="tab-card" style="display: block;">班级</div>
            <div class="tab-card" style="display: none;">老师</div>
            <div class="tab-card" style="display: none;">学生</div>
            <div class="tab-card" style="display: none;">课本管理</div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            tabsName: [
                {
                    icon: "iconfont icon-ai-connection",
                    name: "班级",
                    isActive: true
                },
                {
                    icon: "iconfont icon-ai-connection",
                    name: "老师",
                    isActive: false
                },
                {
                    icon: "iconfont icon-ai-connection",
                    name: "学生",
                    isActive: false
                },
                {
                    icon: "iconfont icon-ai-connection",
                    name: "课本管理",
                    isActive: false
                }
            ],
            active: false
        };
    },
    methods: {
        tabsSwitch: function(tabIndex) {
            var tabCardCollection = document.querySelectorAll(".tab-card"),
                len = tabCardCollection.length;

            for (var i = 0; i < len; i++) {
                tabCardCollection[i].style.display = "none";
                this.tabsName[i].isActive = false;
            }
            this.tabsName[tabIndex].isActive = true;
            tabCardCollection[tabIndex].style.display = "block";
        }
    }
};
</script>
<style rel='stylesheet/scss' lang='scss' scoped>
.box {
    height: 200px;
    margin: 36px 24px;
    .tabs > li {
        width: 134px;
        float: left;
        list-style: none;
    }
    .tabs .tab-link {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: -1px;
        line-height: 47px;
        font-size: 16px;
        font-family: PingFang-SC-Heavy;
        color: rgba(163, 173, 189, 1);
        text-decoration: none;
        background: #f8f9fa;
        border: 2px solid #edf0f5;
        border-bottom: none;
        border-radius: 5px 5px 0 0;
        > i{
           margin-right: 10px;
        }
    }

    .tabs .tab-link.active {
        color: rgba(58, 71, 96, 1);
        height: 47px;
        -webkit-transition: 0.3s;
        transition: 0.3s;
        background: #fff;
        > i{
            font-size: 30px;
            color: #4b83f0;
        }
    }
}

.cards {
    width: 100%;
    float: left;
    background: #fff;
    border: 2px solid #edf0f5;
    border-radius: 0 8px 8px 8px;
    .cards .tab-card {
        display: none;
    }
    .clearfix:after {
        content: "";
        display: block;
        height: 0;
        clear: both;
    }
    .clearfix {
        zoom: 1;
    }
}
</style>