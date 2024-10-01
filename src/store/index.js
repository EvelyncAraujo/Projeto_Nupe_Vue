import { createStore } from "vuex";
import { ui } from './ui'
import { location  }  from './location'
import { institution }  from './institution'


const store = createStore({
    modules: {
        ui,
        location,
        institution
    }
})

export default store