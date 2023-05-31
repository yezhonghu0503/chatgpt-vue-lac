import axios, { AxiosRequestConfig } from 'axios';

// 添加请求拦截器
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log(config)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);