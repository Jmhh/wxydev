/**
 * imgUrl: 图片域名
 * apiUrl: API接口
 * routerMode: 路由模式
 */
let imgUrl = 'http://192.168.0.153:3000/';
let apiUrl = 'http://192.168.0.153:3000/';
let routerMode = 'hash';
if (process.env.NODE_ENV === 'production') {
  imgUrl = 'http://192.168.0.153:3000/';
  apiUrl = 'http://192.168.0.153:3000/';
  //routerMode = 'history';
}
export {
  imgUrl,
  apiUrl,
  routerMode
}
