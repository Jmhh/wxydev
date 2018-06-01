import Http from 'utils/http'
import { mapMutations, mapActions } from 'vuex'
import encryptAES from 'utils/encrypt'

const getUserInfo = (that) => {
    Http({
        method: 'get',
        url: 'user/logout',
        // params: {
        //   uniqid: '58f9deaeea4c1'
        // }
    }, (response) => {
        that.items = response.data;
    }, (error) => {
        console.log(error);
    });
};

//获取验证码
const getCaptcha = (that) => {
    Http({
        method: 'get',
        url: 'captcha/base64',
    }, (response) => {
        const data = response.data.data;
        that.base64Url = data.base64;
        that.form.key = data.key;
        that.$store.commit("SET_LOGIN_CAPTCHA", data.base64);
        that.$store.commit("SET_LOGIN_KEY", data.key);

    }, (error) => {
        console.log(error);
    })
};

//更新验证码
const updateGetcaptcha = (that) => {
    Http({
        method: 'get',
        url: 'captcha/base64',
    }, (response) => {
        const data = response.data.data;
        that.base64Url = data.base64;
        that.form.key = data.key;
        that.$store.dispatch("updateLoginCaptcha", data.base64);
        that.$store.dispatch("updateLoginKey", data.key);
    }, (error) => {
        console.log(error);
    })
}

//登录
const getUserLogin = (data, that) => {
    Http({
        method: 'post',
        url: 'login',
        params: data,
    }, (response) => {
        that.$store.commit("SET_LOGIN_TOKEN", response.data.data.token);
        that.$store.commit("SET_USER_LOGIN");
        that.loginStatus = "登录成功";
        that.$router.push('/index');
    }, (error) => {
        const err = error.response.data;
        that.loginStatus = "登录";
        setTimeout(() => {
            that._updateGetcaptcha();
        }, 1000);
        if (err.code === 4007) {
            that.form.username = "";
            that.form.captcha = "";
            that.rulesName();
            that.rulesCode();
        } else if (err.code === 4010) {
            that.form.captcha = "";
            that.form.password = "123456";
            that.rulesCode();
        } else if (err.code === 4008) {
            that.form.password = "";
            that.rulesPassword();
        }
        console.log(err.message);
        that.$notify.error({
            title: '登录失败',
            message: err.message,
        });
    });
};


export {
    getUserInfo,
    getUserLogin,
    getCaptcha,
    updateGetcaptcha,
}