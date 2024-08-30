import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import store from './store/index.js'

//import 'buefy/dist/buefy.css'
import './assets/scss/main.scss'

// import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
const app = createApp(App)

app.use(createPinia())
app.use(store)
app.use(router)
app.use(Buefy)

// import "./store/index.js"

app.mount('#app')
