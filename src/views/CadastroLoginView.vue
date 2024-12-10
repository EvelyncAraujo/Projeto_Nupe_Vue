<script>
import { useLocationStore } from '@/stores/location'
import { useFunctionStore } from '@/stores/function'
import { onMounted } from 'vue'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      userType: '',
      city: '',
      message: '',
      function: '',
    }
  },
  setup() {
    const locationStore = useLocationStore()
    const functionStore = useFunctionStore()
    onMounted(async () => {
      await locationStore.fetchAllLocations()
      await functionStore.fetchAllFunctions()
    })
    return {
      locationStore, functionStore
    }
  },

  methods: {
    showToast(message, type) {
      const toast = document.createElement('div')
      toast.className = `toast ${type}`
      toast.innerText = message

      document.body.appendChild(toast)

      setTimeout(() => {
        toast.remove()
      }, 3000) // Remove o toast após 3 segundos
    },
    registerUser() {
      if (this.password !== this.confirmPassword) {
        this.showToast('As senhas não coincidem!', 'error')
        // } else if (!this.name || !this.email || !this.password || !this.gender || !this.city || !this.userType) {
        //   this.showToast("Por favor, preencha todos os campos obrigatórios!", "warning");
      } else {
        // this.showToast("Cadastro realizado com sucesso!", "success");
        // Redireciona para a página inicial
        this.$router.push('/home')
      }
    }
  }
}
</script>

<template>
  <div class="register-container">
    <div class="register-page">
      <h1>Bem-vindo</h1>
      <form @submit.prevent="registerUser">
        <label for="name">Nome:</label>
        <input v-model="name" type="text" id="name" required />

        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" required />

        <label for="password">Senha:</label>
        <input v-model="password" type="password" id="password" required />

        <label for="confirmPassword">Confirmar Senha:</label>
        <input v-model="confirmPassword" type="password" id="confirmPassword" required />

        <label>Gênero:</label>
        <div class="radio-group">
          <input v-model="gender" type="radio" id="female" value="Feminino" />
          <label for="female"> Feminino</label>
        </div>
        <div class="radio-group 2">
          <input v-model="gender" type="radio" id="male" value="Masculino" />
          <label for="male">Masculino</label>
        </div>

        <label for="city">
        Cidade:
          <select v-model="city">
            <option v-for="loc of locationStore.locations" :key="loc.id" :value="loc.id">
              {{ loc.name }}
            </option>
          </select>
        </label>

        <label for="function">Servidor:</label>
        <select v-model="person">
        <option v-for="fun of functionStore.functions" :key="fun.id" :value="fun.id">
            {{ fun.name }}
        </option>
        </select>

        <div class="conteiner">
          <a href="/src/views/HomeView.vue"><button type="submit">Cadastrar</button></a>
        </div>
      </form>
      
      <p v-if="message">{{ message }}</p>
    </div>
    <div class="logo">
      <img src="/public/ftNupe.png" alt="Imagem" />
    </div>
  </div>
</template>

<style scoped>
/* .radio-group{
margin-left: -5rem;
  
} */

h1 {
  text-align: center;
  font-size: 2rem;
}

.register-page {
  max-width: 50rem;
  padding: 2rem;
  /* margin: 5 auto; */
  /* padding: 3rem; */
  background-color: #21631400;

  /* margin-top: 9rem;
  margin-left: 11rem; */
}

form {
  display: flex;
  flex-direction: column;
  width: 45rem;
  margin-left: 5rem;
}

label {
  margin-top: 1rem;
  margin-right: 40rem;
}

input,
select,
button {
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.radio-group {
  display: flex;
  gap: 2rem;
  align-items: center;
  /* margin-top: 0.5rem; */
}

button {
  margin-top: 2rem;
  background-color: #325c32;
  color: white;
  cursor: pointer;
  width: 15rem;
}

button:hover {
  background-color: #287027;
}

/* p {
  margin-top: 5rem;
  text-align: center;
  color: #d9534f;
} */
.register-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 75%;
  /* margin: 0 auto; */
  margin-top: 2rem;
}

/* .register-page {
  flex: 1;
  max-width: 60%;
  padding: 1rem;
  background-color: #f9f9f913;
  border-radius: 8px;
} */

.logo {
  /* flex: 0 0 auto; */
  margin-right: -40rem;
  background-color: rgba(50, 92, 50, 1);

  /* height: 90rem; */
  padding: 19rem;

  margin-top: -15rem;
}

.img {
  max-width: 100%;
  max-height: 150%;
  /* object-fit: contain; */

  margin-top: 1rem;
}

.container {
  display: flex;
  height: 100vh;
}
</style>
