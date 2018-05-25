<!--  -->
<template>
  <div class="registerform">
    <h3 class="title">申请开通</h3>
    <form>
      <div class="form-group">
        <span class="item">学校名称：</span>
        <input type="text" v-model="form.schoolName">
      </div>
      <div class="form-group">
        <span class="item">联系人：</span>
        <input type="text" v-model="form.name">
      </div>
      <div class="form-group">
        <span class="item">联系电话：</span>
        <input type="text" v-model="form.tell">
      </div>
      <div class="form-group code">
        <input type="text" v-model="form.code" required placeholder="请输入图片验证码">
        <span class="verification">
          <img src="../../images/login/code.png" alt="">
        </span>
      </div>
      <p class="tip">看不清，换一张</p>
      <div class="form-group">
        <button type="submit" class="register">立即开通</button>
      </div>
    </form>


  </div>
</template>

<script>
import Button from "components/button";

export default {
    data() {
        return {
            form: {
                name: "",
                schoolName: "",
                tell: "",
                code: ""
            }
        };
    },
    components: {
        Button
    }
};
</script>
<style rel='stylesheet/scss' lang='scss' scoped>
@import "styles/_mixins.scss";

.registerform {
    position: absolute;
    left: 5vw;
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
        padding: 15px;
        font-size: 30px;
        font-family: MicrosoftYaHei;
        color: #fff;
        background: rgba(54, 138, 227, 1);
    }
    form {
        padding: 35px 45px;
        .form-group {
            text-align: left;
            margin-bottom: 20px;
            .item {
                display: inline-block;
                width: 106px;
                height: 19px;
                font-size: 20px;
                font-family: NotoSansHans-Medium;
                color: rgba(72, 144, 234, 1);
                line-height: 0px;
            }
        }
        .form-group.code {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
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
        button.register {
            @include button(100%, 47px, 18px, #fff, #4890ea, 5px);
        }
        input {
            display: inline;
            width: 195px;
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: 0.25rem;
            -webkit-transition: border-color 0.15s ease-in-out,
                -webkit-box-shadow 0.15s ease-in-out;
            transition: border-color 0.15s ease-in-out,
                -webkit-box-shadow 0.15s ease-in-out;
            -o-transition: border-color 0.15s ease-in-out,
                box-shadow 0.15s ease-in-out;
            transition: border-color 0.15s ease-in-out,
                box-shadow 0.15s ease-in-out;
            transition: border-color 0.15s ease-in-out,
                box-shadow 0.15s ease-in-out,
                -webkit-box-shadow 0.15s ease-in-out;
        }
        .code input {
            width: 68%;
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
</style>