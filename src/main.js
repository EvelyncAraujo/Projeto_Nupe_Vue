import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
// import './assets/scss/main.scss  

import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(Buefy)
app.use(router)
app.use(Vuex)

import "./store/index.js"

app.mount('#app')
