import { createApp } from 'vue'
import App from './App.vue'
import '@/css/style.css'
import router from './router'
import store from './store'

window.app = createApp(App).use(store).use(router).mount('#app')
