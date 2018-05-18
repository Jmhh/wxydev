<!-- 管理端首页侧边栏 -->
<template>
    <div class="admin-siderbar">
        <ul>
            <li>
                <a href="#"><img src="../images/logo.png" alt=""></a>
            </li>
            <li v-for="item in items" :key="item.name">
                <router-link :to="item.href">
                    <i :class="item.icon"></i>
                    <p>{{item.name}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    href: "index",
                    icon: "iconfont icon-shouye",
                    name: "首页"
                },
                {
                    href: "school",
                    icon: "iconfont icon-tubiaozhizuomoban-",
                    name: "学校"
                },
                {
                    href: "guanli",
                    icon: "iconfont icon-guanliyuan",
                    name: "管理"
                }
            ]
        };
    },
    mounted() {
        let Rname = this.$route.name;
    }
};
</script>
<style rel='stylesheet/scss' lang='scss' scoped>
.admin-siderbar {
    width: 80px;
    height: 100%;
    min-height: 800px;
    background: #4b83f0;
    border-radius: 20px 0 0 20px;
    ul {
        list-style: none;
        margin: 0;
        padding-left: 0;
        li {
            a {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 80px;
                color: #fff;
                text-decoration: none;
                border-bottom: 1px solid #73a3ff;
                i {
                    font-size: 32px;
                }
            }
            a.router-link-exact-active.active {
                background: #62d862;
            }
            p {
                font-size: 12px;
                padding-top: 5px;
            }
        }
    }
}
</style>