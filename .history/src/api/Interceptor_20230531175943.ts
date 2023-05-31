import axios, { AxiosRequestConfig } from 'axios';

// 添加请求拦截器
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // if (!window.localStorage.getItem('roleList')) {
    // }
    // config.headers['ht-token'] = localStorage.getItem('ht-token');
    return Promise.reject(config);
  },
  (error) => {
    // do something
    return Promise.reject(error);
  }
);