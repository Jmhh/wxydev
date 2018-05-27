import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const page = (dir) => {
    return Vue.extend(require('src/pages/' + dir).default)
};

export default new Router({
    linkActiveClass: 'active',
    routes: [{
            path: '/',
            name: '首页',
            component: page('index/admin')
        },
        {
            path: '/login',
            name: '登录',
            component: page('user/login')
        },
        {
            path: '/school',
            name: '学校',
            component: page('school/index')
        },
        {
            path: '/admin',
            name: '管理',
            component: page('admin/index')
                // /option
        },
    ]
})