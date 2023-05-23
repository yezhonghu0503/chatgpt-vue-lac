import { createApp } from 'vue'
import './style.css'

import App from './App.vue'

const app = createApp(App)
app.directive('testhtml', {
    update: function (el, binding) {
        el.innerHTML = binding.value
    }
})
app.mount('#app')
