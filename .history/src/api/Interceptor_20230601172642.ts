import { AxiosRequestConfig } from 'axios';
import { chatAxios } from './index';
import { ElMessage } from 'element-plus'

if (localStorage.getItem('token')) {
  chatAxios.defaults.headers.Authorization = localStorage.getItem('token')
}
// 添加请求拦截器
chatAxios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!localStorage.getItem('token') && config.url !== '/api/login') {
      ElMessage({
        type: 'error',
        message: '未获得鉴权，请先鉴权再使用'
      })
      return;
    }
    // 临时设置token方式
    if (config.url !== '/api/login') {
      // chatAxios.defaults.headers.Authorization = localStorage.getItem('token')
      // console.log(config)
    }
    return config;
  },
  (error: AxiosRequestConfig) => {
    return Promise.reject(error);
  }
);