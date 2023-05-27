import axios from 'axios'

export function getChatMessage(data:object) {
    return axios.get('/chat/talks',data)
}