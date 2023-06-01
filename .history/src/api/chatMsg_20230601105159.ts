import axios from 'axios';
import { chatAxios } from './index';


export function getChatMessage(data: object) {
    return axios.post('/chat/talks', data)
}