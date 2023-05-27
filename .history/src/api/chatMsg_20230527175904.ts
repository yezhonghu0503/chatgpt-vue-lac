import axios from 'axios'

axios.defaults.baseURL = "http://43.134.90.37:8999";

export function getChatMessage(data: object) {
    return axios.post('/chat/talks', data)
}