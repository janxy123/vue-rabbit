//该文件用于进行二次封装axios
// 利用axios.create()创建新的axios实例

import axios from 'axios'

// 创建axios实例
const http = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
http.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
http.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e)
})

export default http
