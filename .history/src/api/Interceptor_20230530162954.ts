import axios from "axios";

const axiosInstance = axios.create({});

const instance = axios.create({
  timeout: 2000,
  headers: { 'X-Custom-Header': 'foobar' }
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    console.log('aaa')
    const token = localStorage.getItem("token");
    if (token) {
      config.hearder["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
