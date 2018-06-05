import Http from 'utils/http'

//管理-规则/菜单数据获取
const getPermissions = (that) => {
    Http({
        method: 'get',
        url: '/permissions',
    }, (response) => {
        that.$store.dispatch("showPermissionsList", response.data.data);
        that.permissionsData = response.data.data;
    }, (error) => {
        const err = error.response.data;
        that.$notify.error({
            title: '请求失败',
            message: err.message,
        });
    });
};

//管理-规则/菜单数据添加
const postPermissions = (that, data) => {
    Http({
        method: 'post',
        url: '/permissions',
        params: data,
    }, (response) => {
        getPermissions(that) //数据重新获取
    }, (error) => {
        const err = error.response.data;
        that.$notify.error({
            title: '添加失败',
            message: err.message,
        });
    });
};

//管理-规则/菜单数据删除
const deletePermissions = (that, data) => {
    Http({
        method: 'DELETE',
        url: `/permissions/${data}`
    }, (response) => {
        getPermissions(that) //数据重新获取
    }, (error) => {
        const err = error.response.data;
        that.$notify.error({
            title: '删除失败',
            message: err.message,
        });
    });
};

//管理-规则/菜单数据查看
const seePermissions = (that, data) => {
    Http({
        method: 'get',
        url: `/permissions/${data}`
    }, (response) => {
        that.$store.dispatch("showEditList", response.data.data);
        that.seePermissionsData = response.data.data;
    }, (error) => {
        const err = error.response.data;
        that.$notify.error({
            title: '查看失败',
            message: err.message,
        });
    });
};

//管理-规则/菜单数据修改
const putPermissions = (that, index, data) => {
    console.log(data)
    Http({
        method: 'PUT',
        url: `/permissions/${index}`,
        params: data,
    }, (response) => {
        getPermissions(that) //数据重新获取
    }, (error) => {
        const err = error.response.data;
        that.$notify.error({
            title: '修改失败',
            message: err.message,
        });
    });
};

//管理-规则/菜单数据排序
const sortPermissions = (that, data) => {
    Http({
        method: 'PUT',
        url: '/permissions/order',
        params: data,
    }, (response) => {
        console.log(response)
    }, (error) => {
        const err = error.response.data;
        that.$notify.error({
            title: '排序失败',
            message: err.message,
        });
    });
};
export {
    getPermissions,
    postPermissions,
    deletePermissions,
    seePermissions,
    putPermissions,
    sortPermissions
}