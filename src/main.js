import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Btn from './components/Btn.vue'
import Block from './Block.vue'

const app = createApp(App)

app.component('btn', Btn)
app.component('block', Block)

app.mount('#app')
