import { chatAxios } from './index';

export function login(data: any) {
    return chatAxios.post('/api/login', data)
}