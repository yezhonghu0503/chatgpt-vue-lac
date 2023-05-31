import axios from "axios";

axios.interceptors.request.use(
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
