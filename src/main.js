// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'normalize.css'
import elementUi, { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 配置 axios 拦截
// 错误提示
let error = () => {
  elementUi.Message({
    type: 'error',
    message: '加载出错，请刷新重试。',
    duration: 2000
  })
}

// 设置加载效果
let loading

let loadingStart = () => {
  loading = elementUi.Loading.service({
    lock: true,
    fullscreen: true,
    text: '加载中...',
    background: 'rgba(255, 255, 255, 0.3)'
  })
}

let loadingClose = ()=>{
  loading.close()
}

let axiosService = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 5000 // 超时时间
})

// 设置请求拦截
axiosService.interceptors.request.use((config)=>{
  loadingStart()
  return config
},(err)=>{
  loadingClose()
  error()
  return Promise.reject(err)
})

//设置响应拦截
axiosService.interceptors.response.use((response)=>{
  loadingClose()
  return response
},(err)=>{
  loadingClose()
  error()
  return Promise.reject(err)
})

Vue.prototype.$http = axiosService

Vue.config.productionTip = false
Vue.use(elementUi)


Vue.filter('formatDate', function (str) {
  if (!str) return ''
  var date = new Date(str)
  var time = new Date().getTime() - date.getTime()
  if (time < 0) {
    return ''
  } else if ((time / 1000 < 30)) {
    return '刚刚'
  } else if (time / 1000 < 60) {
    return parseInt((time / 1000)) + ' 秒前'
  } else if ((time / 60000) < 60) {
    return parseInt((time / 60000)) + ' 分钟前'
  } else if ((time / 3600000) < 24) {
    return parseInt(time / 3600000) + ' 小时前'
  } else if ((time / 86400000) < 31) {
    return parseInt(time / 86400000) + ' 天前'
  } else if ((time / 2592000000) < 12) {
    return parseInt(time / 2592000000) + ' 月前'
  } else {
    return parseInt(time / 31536000000) + ' 年前'
  }
}
)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


