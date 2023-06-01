import axios, { AxiosRequestConfig } from 'axios';
import { chatAxios } from './index';
// 添加请求拦截器
axios.interceptors.request.use(
  (config: any) => {
    console.log('aaaa')
    console.log(config)
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);