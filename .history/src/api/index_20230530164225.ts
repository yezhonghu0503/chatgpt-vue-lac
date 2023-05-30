import axios from "axios";

const chatAxios = axios({
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
})