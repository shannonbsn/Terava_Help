import './assets/main.css'
import 'swiper/swiper-bundle.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerSW } from 'virtual:pwa-register'

registerSW({ immediate: true })

import App from './App.vue'
import router from './router'
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Varlet)
app.mount('#app')
