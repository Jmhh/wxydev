<!-- 管理端首页 -->
<template>
    <div class="layout">
        <section class="layout-content">
            <aside>
                <Sider/>
            </aside>

            <main>
                <Header/>
                <ul class="admin-nav">
                    <li class="active">
                        <i class="iconfont icon-fenxi"></i>
                        <span> 校情分析</span>
                    </li>
                    <li>
                        <router-link to="/">
                            <i class="iconfont icon-iconset0204"></i>
                            <span class="color-g"> 设置课程表</span>
                        </router-link>
                    </li>
                </ul>
                <article class="main">
                    
                </article>
            </main>
        </section>

    </div>
</template>

<script>
import Sider from "components/a-siderbar";
import Header from "components/header";
export default {
    data() {
        return {};
    },
    components: {
        Sider,
        Header
    }
};
</script>
<style rel='stylesheet/scss' lang='scss' scoped>
ul.admin-nav {
    display: flex;
    display: -webkit-flex;
    text-align: left;
    margin: 50px 30px 0 30px;
    list-style: none;
    li {
        padding: 12px 25px;
        display: flex;
        align-items: center;
        a {
            text-decoration: none;
        }
        span {
            margin-left: 5px;
            height: 25px;
            font-size: 16px;
            font-family: PingFang-SC-Heavy;
            color: rgba(58, 71, 96, 1);
        }
        span.color-g {
            font-size: 16px;
            color: #62d862;
        }
        i {
            font-size: 18px;
            color: #62d862;
        }
    }
    li.active {
        z-index: 100;
        margin-bottom: -2px;
        background: #fff;
        border-radius: 8px 8px 0 0;
        border: 2px solid #edf0f5;
        border-bottom: none;
        i {
            font-size: 30px;
            color: #4b83f0;
        }
    }
}

article.main {
    position: relative;
    min-height: 500px;
    background: #fff;
    margin: 0 30px 50px 30px;
    border: 2px solid #edf0f5;
    border-radius: 0 8px 8px 8px;
    &:before {
        content: "";
        height: 70%;
        background: #62d862;
        position: absolute;
        left: -5px;
        top: 15%;
        z-index: 0;
        border-right: 5px solid transparent;
        border-radius: 55px 0 0 55px;
    }
}
</style>
