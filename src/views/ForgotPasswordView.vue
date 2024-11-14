<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    async submitEmail() {
      try {
        const response = await fetch('http://localhost:3000/api/auth/forgot-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: this.email })
        });

        const data = await response.json();

        if (response.ok) {
          this.message = 'Verifique seu email para o link de recuperação!';
        } else {
          this.message = data.error || 'Erro ao enviar o email';
        }
      } catch (error) {
        console.error('Erro:', error);
        this.message = 'Erro ao conectar ao servidor';
      }
    },
    async resetPassword() {
      if (this.password !== this.confirmPassword) {
        this.message = 'As senhas não correspondem';
        return;
      }

      const token = this.$route.params.token;
      try {
        const response = await fetch(`http://localhost:3000/api/auth/reset-password/${token}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password: this.password })
        });

        const data = await response.json();

        if (response.ok) {
          this.message = 'Senha redefinida com sucesso';
        } else {
          this.message = data.error || 'Erro ao redefinir a senha';
        }
      } catch (error) {
        console.error('Erro:', error);
        this.message = 'Erro ao conectar ao servidor';
      }
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="forms-login">
      <h1>Esqueceu a senha?</h1>
      <form @submit.prevent="submitEmail">
        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" required />
        <button type="submit">Enviar link de recuperação</button>
      </form>
      
        <p v-if="message">{{ message }}</p>
    </div>

    <div class="logo">
      <img src="/public/ftNupe.png" alt="Imagem">
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  align-items: center;
  /* justify-content: center; */
  /* margin-left: 0rem; */
  width: 150vh;
  margin-left: 40rem;
  
}

.forms-login {
  flex: 1;
  padding: 2rem;
  margin-right: 15rem;
}

.logo {
   background-color: #325C32;
   height: 100vh;
   
}

h1 {
  font-size: 3rem;
}

img {
  max-width: 100%;
  height: 90vh;
  
}
</style>
