import { createApp } from 'vue'
import './style.css'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/idea.css';
import App from './App.vue'

const app = createApp(App)
app.use(VueHighlightJS)
app.mount('#app')
