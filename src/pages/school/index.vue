<!-- 管理端学校页面 -->
<template>
    <div class="layout">
        <section class="layout-content">
            <aside>
                <Sider/>
            </aside>

            <main>
                <Header/>
                <div class="button-nav">
                    <button type="button" class="inport">
                        <i class="iconfont icon-daoru"></i> 导入 </button>

                    <button type="button" class="inport">
                        <i class="iconfont icon-new"></i> 添加学校 </button>
                </div>
                <article class="main-school">

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
@import "styles/_mixins.scss";

.button-nav {
    margin: 20px 30px;
    text-align: left;
    .inport {
        @include button(125px,27px,#fff,#62d862,14px);
    }
    i {
        font-size: 16px;
    }
}

article.main-school {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    min-height: 300px;
    margin: 0 25px;
}
</style>