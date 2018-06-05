import * as Types from "../mutation-types";
const state = {
    permissionsData: [],
    permissionsLoad: false,
    seePermissionsData: [],
    seePermissionsLoad: false,
    groupedListData: [],
    groupedListDataPage: [],
    groupedListLoad: false,
    seeGroupedData: [],
    rolePermissionList: [],
    seeGroupedLoad: false,
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
        return val;
    },
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
    //管理-分组-列表
    showGroupedList({ commit }, data) {
        commit(Types.SHOW_GROUPEDLIST_LOAD, data);
    },
    //管理-分组-编辑查看
    seeEditData({ commit }, data) {
        commit(Types.SHOW_EDIT_LOAD, data);
    },
    //管理-分组-编辑查看
    seeEditLoad({ commit }, data) {
        commit(Types.GET_EDIT_LOAD, data);
    },
};

// mutations
const mutations = {
    [Types.GET_PERMISSIONS_MENU](state, data) {
        state.permissionsLoad = true;
    },
    [Types.SHOW_PERMISSIONS_LOAD](state, data) {
        state.permissionsData = data
        state.permissionsLoad = false;
    },
    [Types.GET_SEEPERMISSIONS_MENU](state, data) {
        state.permissionsLoad = true;
    },
    [Types.SHOW_SEEPERMISSIONS_LOAD](state, data) {
        state.seePermissionsData = data
        state.permissionsLoad = false;
    },
    [Types.SHOW_GROUPEDLIST_LOAD](state, data) {
        state.groupedListLoad = true;
    },
    [Types.SHOW_GROUPEDLIST_LOAD](state, data) {
        state.groupedListData = data.data;
        state.groupedListDataPage = data.page;
        state.groupedListLoad = false;
    },
    [Types.GET_EDIT_LOAD](state, data) {
        state.seeGroupedLoad = true
    },
    [Types.SHOW_EDIT_LOAD](state, data) {
        state.seeGroupedData = data.role;
        state.rolePermissionList = data.permissionIds
        state.seeGroupedLoad = false
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};