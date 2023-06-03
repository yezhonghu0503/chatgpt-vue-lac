import axios from "axios";

export const chatAxios: any = axios.create({
    baseURL: 'http://43.134.90.37:8999',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': ''
    },
})

// chatAxios.interceptors.request.use(
//     (config: any) => {
//         console.log('aaa')
//         const token = localStorage.getItem("token");
//         if (token) {
//             config.hearder["Authorization"] = token;
//         }
//         return config;
//     },
//     (error: any) => {
//         return Promise.reject(error);
//     }
// );