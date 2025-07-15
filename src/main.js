//main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './assets/style.css';


const app = createApp(App)
app.use(router)
const pinia = createPinia()
app.use(pinia)
app.mount('#app')
