import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@/api/interceptor'

const app = createApp(App)
// app.directive('chathtml', {
//     updated(el: HTMLElement, binding: any) {
//         el.innerHTML = binding.value
//         console.log(el)
//     }
// })
app.mount('#app')
