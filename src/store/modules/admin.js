import * as Types from "../mutation-types";
const state = {
    permissionsData: [],
    permissionsLoad: false,
    seePermissionsData: [],
    seePermissionsLoad: false,
};

const getters = {
    //管理-规则-菜单过滤
    filter(state) {
        let data = state.permissionsData;
        data.forEach(item => {
            delete item.children;
        });
        let map = {};
        data.forEach(item => {
            item["label"] = item["name"];
            map[item.id] = item;
        });
        let val = [];
        data.forEach(item => {
            let parent = map[item.pid];
            if (parent) {
                (parent.children || (parent.children = [])).push(item);
            } else {
                val.push(item);
            }
        });
        console.log(val)
        return val;
    }
};

const actions = {
    //管理-规则-菜单/获取
    getPermissionsList({ commit }, data) {
        commit(Types.GET_PERMISSIONS_MENU, data);
    },
    showPermissionsList({ commit }, data) {
        commit(Types.SHOW_PERMISSIONS_LOAD, data);
    },
    //管理-规则-菜单/查看
    getEditList({ commit }, data) {
        commit(Types.GET_SEEPERMISSIONS_MENU, data);
    },
    showEditList({ commit }, data) {
        commit(Types.SHOW_SEEPERMISSIONS_LOAD, data);
    },
};

// mutations
const mutations = {
    //管理-规则-菜单/获取
    [Types.GET_PERMISSIONS_MENU](state, data) {
        state.permissionsLoad = true;
    },
    [Types.SHOW_PERMISSIONS_LOAD](state, data) {
        state.permissionsData = data
        state.permissionsLoad = false;
    },
    //管理-规则-菜单/查看
    [Types.GET_SEEPERMISSIONS_MENU](state, data) {
        state.permissionsLoad = true;
    },
    [Types.SHOW_SEEPERMISSIONS_LOAD](state, data) {
        console.log(data)
        state.seePermissionsData = data
        state.permissionsLoad = false;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};