<!--  -->
<template>
    <header class="header-info">
        <div class="header-info-left">
            <h3>微校云系统</h3>
            <p>教学知识点云慧诊断</p>
        </div>
        <div class="header-info-right"  @mouseout="listhide" @mousemove="list">
            <img src="../images/header/avatar.png" alt="">
            <a> Alexandr</a>
            <span>
                <img src="../images/header/icon-header.png" alt="">
            </span>
            <div class="right-pull" v-show="inlist">
                <ul>
                    <li><i class="iconfont icon-wodetiku"></i>我的题库</li>
                    <li><i class="iconfont icon-xiugaimima"></i>我的备课</li>
                    <li  @click="tadded"><i class="iconfont icon-wodebeike"></i>修改密码</li>
                    <li><i class="iconfont icon-tuichudenglu"></i>退出登陆</li>
                </ul>
            </div>
        </div>
        <changefrom v-show="switcher" @amend="amend"></changefrom>
    </header>
</template>

<script>
import changefrom from '../pages/user/change'
export default {
    data() {
        return {
            inlist:false,
            switcher:false,
            changeview:changefrom
        };
    },
    methods:{
        list(){
           this.inlist=true
        },
        listhide(){
            this.inlist=false
        },
        // 显示修改密码
        tadded(){
            this.switcher=true;
       },
       //隐藏修改密码
       amend:function(){
           console.log('修改密码')
           this.switcher=false;
       },
    },
    components:{
        changefrom
    }
};
</script>
<style rel='stylesheet/scss' lang='scss' scoped>

.header-info {
    display: flex;
    height: 80px;
    background: #fff;
    position: relative;
    .header-info-left {
        width: 100%;
        text-align: left;
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
        padding-right: 20px;
        a{
            margin-left: 26px;
            text-decoration: none;
            color: #7A8FB8;
            font-size: 1.25rem
        }
        span{
            margin-left: 27px;
            display: inherit;
        }
    }
    .right-pull{
        position: absolute;
        top: 80px;
        right: 0;
        max-width: 220px;
        min-width: 220px;
        background: #fff;
        ul{
            li{
                padding:10px 0px;
                font-size: 1rem;
                color: #7A8FB8;
                border-bottom: 1px solid #eee;
                cursor: pointer;
                i{
                    margin-right: 15px;
                    color: #FFD16E;
                }
            }
        }
    }
}
</style>