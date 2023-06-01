import { AxiosRequestConfig } from 'axios';
import { chatAxios } from './index';
// 添加请求拦截器
chatAxios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log(config)
    return config;
  },
  (error: AxiosRequestConfig) => {
    return Promise.reject(error);
  }
);