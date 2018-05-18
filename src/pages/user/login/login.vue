<!--  -->
<template>
    <div class="login-bg">

        <div class="login-layout">

            <div class="login-main">
                <div class="login-left">
                    <div class="left-header">
                        <div class="logo">
                            <img src="../../../images/logo.png" fluid alt="Responsive image">
                        </div>

                        <div class="login-left-info">
                            <h3>微校云系统</h3>
                            <p>教学知识点云慧诊断</p>
                        </div>
                    </div>

                    <div class="left-img">
                        <figure class="c-1">
                            <img src="../../../images/cloud-1.png" alt="">
                        </figure>

                        <figure class="c-2">
                            <img src="../../../images/cloud-2.png" alt="">
                        </figure>

                        <figure class="home">
                            <img src="../../../images/bg-3.png" alt="">
                        </figure>
                    </div>

                    <figure class="loading-g">
                        <img src="../../../images/loading-g.png" alt="">
                    </figure>

                </div>
                <div class="login-right">

                    <figure class="loading-y">
                        <img src="../../../images/loading-y.png" alt="">
                    </figure>

                    <div class="loginform">
                        <h3 class="title"  >用户登录 / User login</h3>
                        <form>
                            <div class="form-group">
                                <input type="text" v-model="form.name" required placeholder="请输入用户名">
                            </div>

                            <div class="form-group">
                                <input type="text" v-model="form.password" required placeholder="请输入密码">
                            </div>

                            <div class="form-group code">
                                <input type="text" v-model="form.code" required placeholder="请输入图片验证码">
                                <span class="verification">
                                    <img src="../../../images/code.png" alt="">
                                </span>
                            </div>
                            <p class="tip">看不清，换一张</p>

                            <div class="form-group">
                                <router-link to="/admin/index">

                                  <btn class="login" @click="login">登录</btn>

                                </router-link>

                                <btn class="registered" >注册</btn>

                                <p class="forget">
                                    <router-link to="/">忘记密码</router-link>
                                </p>

                            </div>

                        </form>
                    </div>

                    <figure class="loading-b">
                        <img src="../../../images/loading-b.png" alt="">
                    </figure>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import btn from "components/btn";
import { userLogin } from "api/user";
export default {
    components: {
        btn
    },
    data() {
        return {
            form: {
                name: "",
                password: "",
                code: ""
            }
        };
    },

    methods: {
        login() {
            let opt = {
                name: this.form.name,
                password: this.form.password
            };
            console.log(opt);
            userLogin(opt);
        }
    }
};
</script>
<style rel='stylesheet/scss' lang='scss' scoped>
@import "styles/_mixins.scss";

.login-bg {
    margin: 0;
    padding: 60px 37px;
    background: url(../../../images/bg-1.png), url(../../../images/bg-2.png);
    background-repeat: no-repeat, no-repeat;
    background-position: 0 0, 85vw 50px;
}

.login-layout {
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 20px 20px rgba(113, 148, 216, 0.22);
    .login-main {
        display: flex;
        display: -webkit-flex;
        .login-left {
            height: 760px;
            padding: 20px;
            flex: 1.5;
            position: relative;
            .left-header {
                display: flex;
                display: -webkit-flex;
                .login-left-info {
                    padding-left: 30px;
                    font-family: PingFang-SC-Heavy;
                    color: rgba(255, 255, 255, 1);
                    h3 {
                        font-size: 22px;
                    }
                    p {
                        font-size: 12px;
                    }
                }
            }
            .left-img {
                position: relative;
                figure.c-1 {
                    position: absolute;
                    top: -50px;
                    right: 250px;
                    img {
                        position: relative;
                        animation: movecloud-1 8s linear infinite;
                        -webkit-animation: movecloud-1 8s linear infinite; /*Safari and Chrome*/
                    }
                    @keyframes movecloud-1 {
                        0% {
                            left: 0vw;
                        }
                        25% {
                            left: 3vw;
                        }
                        50% {
                            left: 7vw;
                        }
                        75% {
                            left: 3vw;
                        }
                        100% {
                            left: 0vw;
                        }
                    }
                    @-webkit-keyframes movecloud-1 {
                        0% {
                            left: 0px;
                        }
                        25% {
                            left: 50px;
                        }
                        50% {
                            left: 100px;
                        }
                        75% {
                            left: 50px;
                        }
                        100% {
                            left: 0px;
                        }
                    }
                }
                figure.c-2 {
                    position: absolute;
                    top: 50px;
                    img {
                        position: relative;
                        animation: movecloud-2 8s linear infinite;
                        -webkit-animation: movecloud-2 8s linear infinite; /*Safari and Chrome*/
                    }
                    @keyframes movecloud-2 {
                        0% {
                            left: 0px;
                        }
                        25% {
                            left: 125px;
                        }
                        50% {
                            left: 250px;
                        }
                        75% {
                            left: 125px;
                        }
                        100% {
                            left: 0px;
                        }
                    }
                    @-webkit-keyframes movecloud-2 {
                        0% {
                            left: 0px;
                        }
                        25% {
                            left: 125px;
                        }
                        50% {
                            left: 250px;
                        }
                        75% {
                            left: 125px;
                        }
                        100% {
                            left: 0px;
                        }
                    }
                }
                figure.home {
                    position: absolute;
                    top: 30px;
                    left: 50px;
                    img {
                        width: 100%;
                    }
                }
            }
        }

        .login-right {
            flex: 1;
            position: relative;
            .loginform {
                position: absolute;
                left: 5vw;
                padding: 30px;
                background: #fff;
                margin-top: 200px;
                box-shadow: -2px 8px 13px #7194d854;
                -moz-border-radius: 3px 3px 0 0;
                -webkit-border-radius: 3px 3px 0 0;
                border-radius: 3px 3px 0 0;
                input::-webkit-input-placeholder {
                    font-size: 14px;
                    color: #b3b3b3;
                }
                input:-ms-input-placeholder {
                    font-size: 14px;
                    color: #b3b3b3;
                }
                input::-moz-placeholder {
                    font-size: 14px;
                    color: #b3b3b3;
                }
                h3.title {
                    font-size: 26px;
                    font-family: MicrosoftYaHei;
                    color: rgba(54, 138, 227, 1);
                }
                form {
                    padding: 35px 10px 0 10px;
                    .form-group {
                        text-align: left;
                        margin-bottom: 20px;
                    }
                    .form-group.code {
                        display: flex;
                        margin-bottom: 0;
                    }
                    .login.btn {
                        padding: 15px 50px;
                    }
                    .registered.btn {
                        padding: 15px 50px;
                        color: #4890ea;
                        background: #fff;
                        border: 1px solid #4890ea;
                    }
                    button.login {
                        @include button(128px, 47px, #fff, #4890ea, 5px);
                    }
                    button.registered {
                        @include button(128px, 47px, #4890ea, #fff, 5px);
                        float: right;
                    }
                    input {
                        display: inline;
                        width: 90%;
                        padding: 0.375rem 0.75rem;
                        font-size: 1rem;
                        line-height: 1.5;
                        color: #495057;
                        background-color: #fff;
                        background-clip: padding-box;
                        border: 1px solid #ced4da;
                        border-radius: 0.25rem;
                        transition: border-color 0.15s ease-in-out,
                            box-shadow 0.15s ease-in-out;
                    }
                    .code input {
                        width: 60%;
                        margin-right: 10px;
                    }
                    p.tip {
                        text-align: right;
                        margin-bottom: 20px;
                        font-size: 12px;
                        color: #1db4eb;
                        font-family: MicrosoftYaHei;
                    }
                    #loginbutton {
                        text-align: left;
                    }
                    p.forget > a {
                        display: inline-block;
                        padding-top: 15px;
                        text-decoration: underline;
                        font-size: 12px;
                        color: #62d862;
                    }
                }
            }
        }
    }

    figure.loading-y {
        @include loading-img;
        position: absolute;
        top: 14vh;
        left: 1vw;
    }
    figure.loading-b {
        @include loading-img;
        position: absolute;
        bottom: 3vh;
        right: 2vw;
    }
    figure.loading-g {
        @include loading-img;
        position: absolute;
        bottom: 8vh;
        left: 3vw;
    }
}
</style>