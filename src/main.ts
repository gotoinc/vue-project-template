import { createApp } from 'vue'
import './assets/css/main.pcss'
import App from './App.vue'
import { router } from './router/router.ts'
import { pinia } from './store/pinia.ts'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
