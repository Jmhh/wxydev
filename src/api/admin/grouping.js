import Http from 'utils/http'

//获取列表
const groupedList = (that, data) => {
    Http({
        method: 'get',
        url: '/roles',
        params: data,
    }, (response) => {
        console.log(response)
        that.$store.dispatch("showGroupedList", response.data);
    }, (error) => {
        const err = error.response.data;
        that.$notify.error({
            title: '请求失败',
            message: err.message,
        });
    });
};

//分组添加
const addGrouped = (that, data) => {
    Http({
        method: 'post',
        url: '/roles',
        params: data,
    }, (response) => {
        groupedList(that)
    }, (error) => {
        const err = error.response.data;
        that.$notify.error({
            title: '添加失败',
            message: err.message,
        });
    });
};

//管理-规则/菜单数据查看
const seeGrouped = (that, data) => {
    Http({
        method: 'get',
        url: `/roles/${data}`
    }, (response) => {
        that.$store.dispatch("seeEditData", response.data.data);
    }, (error) => {
        const err = error.response.data;
        that.$notify.error({
            title: '查看失败',
            message: err.message,
        });
    });
};

//管理-规则/菜单数据编辑
const editGrouped = (that, index, data) => {
    Http({
        method: 'PUT',
        url: `/roles/${index}`,
        params: data,
    }, (response) => {
        groupedList(that)
    }, (error) => {
        const err = error.response.data;
        that.$notify.error({
            title: '编辑失败',
            message: err.message,
        });
    });
};
export {
    groupedList,
    addGrouped,
    seeGrouped,
    editGrouped
}