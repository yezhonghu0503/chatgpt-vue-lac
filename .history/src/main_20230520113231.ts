import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.directive('char-by-char', {
    mounted(el, binding) {
        const delay = binding.value || 50
        const html = el.innerHTML
        let i = 0
        el.innerHTML = ''
        setTimeout(() => {
            const interval = setInterval(() => {
                el.innerHTML += html[i]
                i++
                if (i === html.length) {
                    clearInterval(interval)
                }
            }, delay)
        }, delay)
    }
})
app.mount('#app')
