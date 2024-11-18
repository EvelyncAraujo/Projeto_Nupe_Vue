<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    async submitEmail() {
      try {
        const response = await fetch('http://localhost:3000/api/auth/forgot-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: this.email })
        })

        const data = await response.json()

        if (response.ok) {
          this.message = 'Verifique seu email para o link de recuperação!'
        } else {
          this.message = data.error || 'Erro ao enviar o email'
        }
      } catch (error) {
        console.error('Erro:', error)
        this.message = 'Erro ao conectar ao servidor'
      }
    },
    async resetPassword() {
      if (this.password !== this.confirmPassword) {
        this.message = 'As senhas não correspondem'
        return
      }

      const token = this.$route.params.token
      try {
        const response = await fetch(`http://localhost:3000/api/auth/reset-password/${token}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password: this.password })
        })

        const data = await response.json()

        if (response.ok) {
          this.message = 'Senha redefinida com sucesso'
        } else {
          this.message = data.error || 'Erro ao redefinir a senha'
        }
      } catch (error) {
        console.error('Erro:', error)
        this.message = 'Erro ao conectar ao servidor'
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="forms-login">
      <h1>Esqueceu a senha?</h1>
      <form @submit.prevent="submitEmail">
        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" required />
        <button type="submit" class="link">Enviar link de recuperação</button>
      </form>
      <button class="conf">voltar ao login</button>
      <p v-if="message">{{ message }}</p>
    </div>
    <div class="logo">
      <img src="/public/ftNupe.png" alt="Imagem" />
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 50px;
}
label {
  font-size: 20px;
}

input {
  margin-left: 10px;
  margin-top: 10px;
  padding: 5px 15px;
  border-radius: 5px;
}
.container {
  display: flex;
  height: 100vh;
  width: 100%;
}
.conf {
  color: #000000;
  border: 1px solid #325c32;
  border-radius: 8px;
  padding: 8px 20px;
  margin-left: 9rem;
  margin-top: 5px;
  display: inline-block;
  font-size: 11px;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #325c328c;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
}
.link {
  margin-left: 9px;
  color: #000000;
  border: 1px solid #325c32;
  border-radius: 8px;
  padding: 5px 10px;
  box-shadow: inset 0 0 0 0 #325c3291;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
}
.conf:hover {
  box-shadow: inset 400px 0 0 0 #325c3280;
}
.link:hover {
  box-shadow: inset 400px 0 0 0 #325c3277;
}

.forms-login {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.logo {
  margin-right: -40rem;
  flex: 2; /* Faz com que ocupe metade da largura */
  background-color: #325c32;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100rem; */
}

img {
  max-width: 100%;
  max-height: 150%;
  /* object-fit: contain; */
}
</style>
