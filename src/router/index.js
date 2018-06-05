import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const page = (dir) => {
    return Vue.extend(require('src/pages/' + dir).default)
};

export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [{
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            name: '登录',
            component: page('user/login')
        },
        {
            path: '/index',
            name: '首页',
            component: page('index/admin')
        },
        {
            path: '/school',
            name: '学校',
            component: page('school/index'),
            children: [{
                path: '',
                component: page('school/schools'),
            }, {
                path: '/school/components/pages/:id',
                name: '学校内页',
                component: page('school/components/pages'),
            }]
        },
        {
            path: '/admin',
            name: '管理',
            component: page('admin/index')
        },
        {
            path: '*',
            redirect: '/index'
        }
    ]
})