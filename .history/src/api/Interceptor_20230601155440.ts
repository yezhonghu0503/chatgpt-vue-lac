import { AxiosRequestConfig } from 'axios';
import { chatAxios } from './index';
import { ElMessage } from 'element-plus'
// 添加请求拦截器
chatAxios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!localStorage.getItem('token')) {
      ElMessage({
        type: 'error',
        message: '未获得鉴权，请先鉴权再使用'
      })
      return;
    }
    if (config.url !== '/api/login') {

    }
    return config;
  },
  (error: AxiosRequestConfig) => {
    return Promise.reject(error);
  }
);