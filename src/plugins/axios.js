import axios from 'axios'
import { useAuthStore } from '@/stores/auth'


axios.defaults.baseURL = 'http://localhost:8000/api/v1/'

axios.interceptors.request.use(config => {
    const authStore = useAuthStore()
    if (authStore.state.token) {
        config.headers.Authorization = `Bearer ${authStore.state.token}`        
    }
    return config
})