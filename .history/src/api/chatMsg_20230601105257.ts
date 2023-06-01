import { chatAxios } from './index';

export function getChatMessage(data: object) {
    return chatAxios.post('/chat/talks', data)
}