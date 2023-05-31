import axios from "axios";

const axiosInstance = axios.create({});

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
