import axios from 'axios'
import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
    const state = reactive({
        loggedIn: false,
        token: ''
    })

    const user = ref({});

    async function login(user) {
        console.log(user)
        try {
            const response = await axios.post('api/v1/token/', user)
            state.token = response.data.access
            state.loggedIn = true
        } catch (e){
            console.log('errado')
            return Promise.reject(e)
        }
     }

  return { user, state, login };
});