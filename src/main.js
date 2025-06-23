import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Btn from './components/Btn.vue'

const app = createApp(App)

app.component('btn', Btn)

app.mount('#app')
