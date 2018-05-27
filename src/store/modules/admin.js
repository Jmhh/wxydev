import * as Types from "../mutation-types";
import {get } from '../../utils/get'
console.log(get)
const state = {
    menu: []
};

const getters = {

};

const actions = {
    async hideloader({ commit }) {
        let data = await get('http://192.168.0.10:3000/mock/9/menu')
        commit(Types.GET_LOGIN_MENU, data.data)
    },
};

// mutations
const mutations = {
    [Types.GET_LOGIN_MENU](state, data) {
        console.log(data)
        state.menu = data;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};