import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
AOS.init()
