import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8000/"
import { useAuthStore } from '@/stores/auth'

axios.interceptors.request.use(config => {
    const authStore = useAuthStore()
    if (authStore.state.token) {
        config.headers.Authorization = `Bearer ${authStore.state.token}`        
    }
    return config
})
