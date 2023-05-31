import axios from "axios";

export const chatAxios: any = axios.create({
    baseURL: 'http://43.134.90.37:8999',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
})

chatAxios.interceptors.request.use(
    (config: any) => {
        console.log('aaa')
        const token = localStorage.getItem("token");
        if (token) {
            config.hearder["Authorization"] = token;
        }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);