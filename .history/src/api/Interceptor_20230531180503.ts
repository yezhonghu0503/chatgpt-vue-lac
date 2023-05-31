import axios, { AxiosRequestConfig } from 'axios';

// 添加请求拦截器
axios.interceptors.request.use(
  (config: any) => {
    // console.log(config)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);