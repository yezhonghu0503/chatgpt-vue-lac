import axios from 'axios'

export function getChatMessage() {
    return axios.get('/msg')
}