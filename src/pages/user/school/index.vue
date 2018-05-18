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

                    <div class="main-school-left">
                        <div class="main-school-left-box">
                            <div class="box-title">
                                <img src="../../../images/珠海市第一中学@2x.png" alt="">
                                <span>珠海市第一中学</span>
                            </div>
                            <div class="box-content">
                                <div class="box-content-item">
                                    <p>学段</p>
                                    <span>初中、高中</span>
                                </div>
                                <div class="box-content-item">
                                    <p>老师人数</p>
                                    <span>200人</span>
                                </div>
                                <div class="box-content-item">
                                    <p>学生人数</p>
                                    <span>2000人</span>
                                </div>
                            </div>
                            <div class="box-address">
                                <i class="iconfont icon-dizhi"></i>
                                <span>地址：珠海市香洲区梅华西路2180号</span>

                            </div>
                            <div class="bt">
                                <button type="button" class="check">立即查看</button>
                            </div>

                        </div>

                        <div class="main-school-left-box">
                            <div class="box-title">
                                <img src="../../../images/timg@2x.png" alt="">
                                <span>珠海市实验中学</span>
                            </div>
                            <div class="box-content">
                                <div class="box-content-item">
                                    <p>学段</p>
                                    <span>初中、高中</span>
                                </div>
                                <div class="box-content-item">
                                    <p>老师人数</p>
                                    <span>200人</span>
                                </div>
                                <div class="box-content-item">
                                    <p>学生人数</p>
                                    <span>2000人</span>
                                </div>
                            </div>
                            <div class="box-address">
                                <i class="iconfont icon-dizhi"></i>
                                <span>地址：珠海市香洲区梅华西路2180号</span>
                            </div>
                            <div class="bt">
                                <button type="button" class="check">立即查看</button>
                            </div>

                        </div>
                    </div>
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
    display: flex;
    min-height: 300px;
    margin: 0 25px;
    .main-school-left {
        display: flex;
        .main-school-left-box {
            width: 392px;
            margin-right: 25px;
            margin-bottom: 20px;
            padding: 20px;
            border: 2px solid #edf0f5;
            background: rgba(255, 255, 255, 1);
            border-radius: 8px;
            .box-title {
                text-align: left;
                display: flex;
                align-items: center;
                span {
                    margin-left: 36px;
                    font-size: 23px;
                    font-family: PingFang-SC-Bold;
                    color: rgba(58, 71, 96, 1);
                    line-height: 30px;
                }
            }
            .box-content {
                display: flex;
                padding: 20px 0;
                border-bottom: 1px solid #edf0f5;
                .box-content-item {
                    flex: 1;
                    p {
                        font-size: 16px;
                        font-family: PingFang-SC-Bold;
                        color: rgba(117, 117, 117, 1);
                        line-height: 30px;
                    }
                    span {
                        font-size: 14px;
                        font-family: PingFang-SC-Bold;
                        color: rgba(117, 117, 117, 1);
                        line-height: 30px;
                    }
                }
            }
            .box-address {
                text-align: left;
                padding: 15px;
                font-size: 14px;
                color: #757575;
            }
            .bt {
                text-align: right;
                button.check {
                    @include button(90px,28px,#fff,#CA9FE8,14px);
                }
            }
        }
    }
}
</style>