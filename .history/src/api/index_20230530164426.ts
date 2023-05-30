import axios from "axios";

export const chatAxios = axios({
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
})