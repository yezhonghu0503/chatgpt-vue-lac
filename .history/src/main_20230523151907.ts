import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.directive('chathtml', {
    updated(el: HTMLElement, binding: any) {
        el.innerHTML = binding.value
    }
})
app.mount('#app')
