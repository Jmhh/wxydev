<!--登录组件-->
<template>
    <div class="login-bg">

        <div class="login-layout">

            <div class="login-main">
                <div class="login-left">
                    <div class="left-header">
                        <div class="logo">
                            <img src="../../images/login/logo.png" fluid alt="Responsive image">
                        </div>

                        <div class="login-left-info">
                            <h3>微校云系统</h3>
                            <p>教学知识点云慧诊断</p>
                        </div>
                    </div>

                    <div class="left-img">
                        <figure class="c-1">
                            <img src="../../images/login/cloud-1.png" alt="">
                        </figure>

                        <figure class="c-2">
                            <img src="../../images/login/cloud-2.png" alt="">
                        </figure>

                        <figure class="home">
                            <img src="../../images/login/bg-3.png" alt="">
                        </figure>
                    </div>

                    <figure class="loading-g">
                        <img src="../../images/login/loading-g.png" alt="">
                    </figure>

                </div>
                <div class="login-right">

                    <figure class="loading-y">
                        <img src="../../images/login/loading-y.png" alt="">
                    </figure>

                    <div class="loginform" v-if="show" >
                        <h3 class="title">用户登录 / User login</h3>
                        <form >
                            <div class="form-group">
                                <input type="text" v-model.trim="form.username" @blur.prevent="rulesName" placeholder="请输入用户名">
                                <span class="successInfo" v-show="validate.successName">
                                    <i class="iconfont icon-dui1"></i>
                                </span>
                                <span class="errorInfo" v-show="validate.errorsName">
                                    <i class="iconfont icon-cuowu"></i> 用户名不能为空而且用户名在4到16位之间
                                </span>
                            </div>

                            <div class="form-group">
                                <input type="password" v-model.trim="form.password" @blur.prevent="rulesPassword" placeholder="请输入密码">
                                <span class="successInfo" v-show="validate.successPassword">
                                    <i class="iconfont icon-dui1"></i>
                                </span>
                                <span class="errorInfo" v-show="validate.errorsPassword">
                                    <i class="iconfont icon-cuowu"></i> 密码不能为空
                                </span>
                            </div>

                            <div class="form-group identity">

                                <label>
                                    <span class="radio-name">管理员</span>
                                    <input type="radio" id="one" value="1" v-model="form.type" checked="true">
                                    <label for="one" class="radio-beauty"></label>
                                </label>

                                <label>
                                    <span class="radio-name">教育局</span>
                                    <input type="radio" id="two" value="2" v-model="form.type">
                                    <label for="two" class="radio-beauty"></label>
                                </label>

                                <label>
                                    <span class="radio-name">教务</span>
                                    <input type="radio" id="three" value="3" v-model="form.type">
                                    <label for="three" class="radio-beauty"></label>
                                </label>

                                <label>
                                    <span class="radio-name">老师</span>
                                    <input type="radio" id="four" value="4" v-model="form.type">
                                    <label for="four" class="radio-beauty"></label>
                                </label>

                                <label>
                                    <span class="radio-name">学生</span>
                                    <input type="radio" id="five" value="5" v-model="form.type">
                                    <label for="five" class="radio-beauty"></label>
                                </label>

                            </div>

                            <div class="form-group code">
                                <input type="text" v-model.trim="form.captcha" @blur.prevent="rulesCode" placeholder="请输入图片验证码">
                                <span class="verification">
                                    <img @click="_updateGetcaptcha" :src="base64Url" alt="验证码图片">
                                </span>
                                <span class="successInfo" v-show="validate.successCode">
                                    <i class="iconfont icon-dui1"></i>
                                </span>
                                <span class="errorInfo" v-show="validate.errorsCode">
                                    <i class="iconfont icon-cuowu"></i> 验证码长度必须为4
                                </span>

                            </div>

                            <p @click="_updateGetcaptcha" class="tip">看不清，换一张</p>

                            <div class="form-group">

                                <button type="submit" class="login" @click="login">{{loginStatus}}</button>

                                <button class="registered" @click="changeForm">申请开通</button>

                                <p class="forget">
                                    <router-link to="/">忘记密码</router-link>
                                </p>

                            </div>

                        </form>
                    </div>

                    <transition name="fade">
                        <register-form v-if="!show"></register-form>
                    </transition>

                    <figure class="loading-b">
                        <img src="../../images/login/loading-b.png" alt="">
                    </figure>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RegisterForm from "./register-form";
import Button from "components/button";
import { getCaptcha, getUserLogin, updateGetcaptcha } from "api/user";
import Encrypt from "utils/encrypt";
import CryptoJS from "crypto-js";
import { Notify } from "element-ui";

export default {

    components: {
        Button,
        RegisterForm
    },

    data() {
        return {
            show: true,
            base64Url: "",
            form: {
                username: "13143002525",
                password: "123456",
                captcha: "",
                key: "",
                type: "1"
            },
            validate: {
                errorsName: false,
                successName: false,
                successPassword: false,
                errorsPassword: false,
                successCode: false,
                errorsCode: false
            },
            loginStatus: "登录"
        };
    },

    created() {
        //获取验证码
        const that = this;
        getCaptcha(that);
    },

    methods: {

        //切换注册表单
        changeForm() {
            this.show = false;
        },

        //登录
        login() {
            const that = this,
                form = this.form;

            //验证通过执行
            if (this.rulesName() && this.rulesPassword() && this.rulesCode()) {
                //密码进行加密处理
                var password = CryptoJS.SHA1(form.password).toString(),
                    password = CryptoJS.enc.Utf8.parse(
                        CryptoJS.SHA1(form.username + password).toString()
                    ),
                    key = CryptoJS.enc.Utf8.parse(form.key + form.captcha);
                password = Encrypt.encryptAes(password, key, key);
                form.password = password;
                //发送登录请求
                getUserLogin(form, that);
                that.loginStatus = "登录中...";
            } else {
                //验证不通过执行
                if (!this.rulesName()) {
                    this.validate.errorsName = true;
                } else if (!this.rulesPassword()) {
                    this.validate.errorsPassword = true;
                } else if (!this.rulesCode()) {
                    this.validate.errorsCode = true;
                }
            }
        },

        //更新验证码
        _updateGetcaptcha() {
            const that = this;
            updateGetcaptcha(that);
        },

        //检查名称
        rulesName() {
            if (
                this.form.username == "" ||
                !/^[a-zA-Z0-9_-]{4,16}$/.test(this.form.username)
            ) {
                this.validate.errorsName = true;
                this.validate.successName = false;
                return false;
            } else {
                this.validate.errorsName = false;
                this.validate.successName = true;
                return true;
            }
        },

        //检查密码
        rulesPassword() {
            if (this.form.password == "") {
                this.validate.errorsPassword = true;
                this.validate.successPassword = false;
                return false;
            } else {
                this.validate.errorsPassword = false;
                this.validate.successPassword = true;
                return true;
            }
        },

        //检查验证码 验证码长度必须等于4
        rulesCode() {
            if (
                this.form.captcha == "" ||
                !/^[a-zA-Z0-9_-]{4}$/.test(this.form.captcha)
            ) {
                this.validate.errorsCode = true;
                this.validate.successCode = false;
                return false;
            } else {
                this.validate.errorsCode = false;
                this.validate.successCode = true;
                return true;
            }
        }
        
    }
};
</script>
<style rel='stylesheet/scss' lang='scss' scoped>
@import "styles/_mixins.scss";

.login-bg {
    margin: 0;
    padding: 60px 37px;
    background: url(../../images/login/bg-1.png),
        url(../../images/login/bg-2.png);
    background-repeat: no-repeat, no-repeat;
    background-position: 0 0, 85vw 50px;
}

.login-layout {
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.2);
    -webkit-box-shadow: 0px 20px 20px rgba(113, 148, 216, 0.22);
    box-shadow: 0px 20px 20px rgba(113, 148, 216, 0.22);
    .login-main {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        display: -webkit-flex;
        .login-left {
            height: 760px;
            padding: 20px;
            -webkit-box-flex: 1.5;
            -webkit-flex: 1.5;
            -ms-flex: 1.5;
            flex: 1.5;
            position: relative;
            .left-header {
                display: -webkit-box;
                display: -ms-flexbox;
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
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            -ms-flex: 1;
            flex: 1;
            position: relative;
            .loginform {
                position: absolute;
                left: 5vw;
                padding: 30px;
                background: #fff;
                margin-top: 200px;
                -webkit-box-shadow: -2px 8px 13px #7194d854;
                box-shadow: -2px 8px 13px #7194d854;
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
                        position: relative;
                        span.errorInfo {
                            display: block;
                            width: 100%;
                            padding: 2px 8px;
                            margin-top: 3px;
                            font-size: 12px;
                            color: #fb0000;
                            background: #fff0f0;
                            border: 1px solid #ffd2d2;
                            border-radius: 3px;
                        }
                        span.successInfo {
                            position: absolute;
                            right: 10px;
                            top: 10px;
                            font-size: 18px;
                            color: #62d862;
                        }
                    }
                    .form-group.code {
                        position: relative;
                        display: -webkit-box;
                        display: -webkit-flex;
                        display: -ms-flexbox;
                        display: flex;
                        margin-bottom: 0;
                        span.errorInfo {
                            top: 45px;
                            position: absolute;
                            width: 68%;
                        }
                        span.successInfo {
                            right: 35%;
                        }
                    }

                    .form-group.identity {
                        font-size: 0;
                        input {
                            display: none;
                        }
                        label {
                            cursor: pointer;
                        }
                    }
                    .form-group.identity .radio-beauty:hover,
                    .form-group.identity
                        input[type="radio"]:checked
                        + .radio-beauty {
                        padding: 2px;
                        background-color: #62d862;
                        background-clip: content-box;
                    }
                    .form-group.identity .radio-name {
                        vertical-align: middle;
                        font-size: 14px;
                    }
                    .form-group.identity .radio-beauty {
                        width: 16px;
                        height: 16px;
                        box-sizing: border-box;
                        display: inline-block;
                        border: 2px solid #62d862;
                        vertical-align: middle;
                        margin: 0 15px 0 3px;
                        border-radius: 50%;
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
                        @include button(128px, 47px, 18px, #fff, #4890ea, 5px);
                    }
                    button.registered {
                        @include button(128px, 47px, 18px, #4890ea, #fff, 5px);
                        float: right;
                    }
                    input {
                        display: inline;
                        width: 90%;
                        padding: 5px 30px 5px 8px;
                        font-size: 1rem;
                        line-height: 1.5;
                        color: #495057;
                        background-color: #fff;
                        background-clip: padding-box;
                        border: 1px solid #ced4da;
                        border-radius: 0.25rem;
                        ::focus {
                            border-color: #4fb6ff;
                            outline: 0;
                            box-shadow: 0 0 0 2px rgba(35, 149, 241, 0.2);
                        }
                    }

                    .code input {
                        width: 80%;
                        margin-right: 10px;
                        max-height: 38px;
                    }
                    p.tip {
                        cursor: pointer;
                        text-align: right;
                        margin-bottom: 20px;
                        font-size: 12px;
                        color: #1db4eb;
                        font-family: MicrosoftYaHei;
                    }
                    span.verification img {
                        border: 1px solid #ced4da;
                        height: 38px;
                        cursor: pointer;
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
            .fade-enter-active,
            .fade-leave-active {
                transition: opacity 0.8s;
            }
            .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
                opacity: 0;
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