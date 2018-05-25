import * as Types from "../mutation-types";

const state = {
  login: false,
  token: "", //用户token
  loginCaptcha: "", //验证码
  loginKey: "" //key,由验证码接口获取
};

const getters = {
  doneTodos: state => {
    return state.login;
  },

  getLoginCaptcha: state => {
    return state.loginCaptcha;
  },

  getLoginKey: state => {
    return state.loginKey;
  },

};

const actions = {
  doneTodos: state => {
    console.log("actions");
  },

  //更新验证码
  updateLoginCaptcha({ commit }, data){
    commit(Types.UPDATE_LOGIN_CAPTCHA, data);
  },

  //更新验证码key
  updateLoginKey({ commit }, data){
    commit(Types.UPDATE_LOGIN_KEY, data);
  }
};

// mutations
const mutations = {

  [Types.GET_USER_INFO](state, { id }) {
    console.log(2);
  },
  increment(state) {
    // 变更状态
    state.count++;
  },

  //设置验证码
  [Types.SET_LOGIN_CAPTCHA](state, data) {
    state.loginCaptcha = data;
  },
  
  //更新验证码
  [Types.UPDATE_LOGIN_CAPTCHA](state, data) {
    state.loginCaptcha = data;
  },

  //设置key
  [Types.SET_LOGIN_KEY](state, data) {
    state.loginKey = data;
  },

  //更新key
  [Types.UPDATE_LOGIN_KEY](state, data) {
    state.loginKey = data;
  },

  //设置token
  [Types.SET_LOGIN_TOKEN](state, data) {
    state.token = data;
  },

  //设置login
  [Types.SET_USER_LOGIN](state) {
    state.login = true;
  },

};

export default {
  state,
  getters,
  actions,
  mutations
};
