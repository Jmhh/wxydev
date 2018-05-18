<!--  -->
<template>
    <div>
        <header>
            <div class="header-info">
                <div class="header-info-left">
                    <h3>微校云系统</h3>
                    <p>教学知识点云慧诊断</p>
                </div>
                <div class="header-info-right">
                    <img src="../images/avatar.png" alt="">
                    <a href="http://"> Alexandr</a>
                    <span>
                        <img src="../images/icon-header.png" alt="">
                    </span>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>
<style rel='stylesheet/scss' lang='scss' scoped>

.header-info {
    display: flex;
    height: 80px;
    background: #fff;
    .header-info-left {
        padding: 20px;
        h3 {
            font-size: 22px;
            font-family: PingFang-SC-Heavy;
            color: rgba(58, 71, 96, 1);
            line-height: 21px;
        }
        p {
            font-size: 12px;
            font-family: PingFang-SC-Medium;
            color: rgba(163, 173, 189, 1);
            line-height: 30px;
        }
    }
    .header-info-right {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 20px;
        a{
            margin-left: 26px;
            text-decoration: none;
            color: #7A8FB8;
        }
        span{
            margin-left: 27px;
        }
    }
}
</style>