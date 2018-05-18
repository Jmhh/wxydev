import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const page = (dir) => {
  return Vue.extend(require('src/pages/' + dir).default)
};

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'user',
      component: page('user/login/login')
    },
    {
      path: '/admin/index',
      name: '首页',
      component: page('user/admin/index')
    },
    {
      path: '/admin/school',
      name: '学校',
      component: page('user/school/index')
    },
    {
      path: '/admin/guanli',
      name: '管理',
      component: page('user/guanli/index')
    },
  ]
})
