<script>
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
      message: ''
    }
  },

methods: {
    showToast(message, type) {
      const toast = document.createElement("div");
      toast.className = `toast ${type}`;
      toast.innerText = message;

      document.body.appendChild(toast);

      setTimeout(() => {
        toast.remove();
      }, 3000); // Remove o toast após 3 segundos
    },
    registerUser() {
      if (this.password !== this.confirmPassword) {
        this.showToast("As senhas não coincidem!", "error");
      // } else if (!this.name || !this.email || !this.password || !this.gender || !this.city || !this.userType) {
      //   this.showToast("Por favor, preencha todos os campos obrigatórios!", "warning");
      } else {
        // this.showToast("Cadastro realizado com sucesso!", "success");
        // Redireciona para a página inicial
        this.$router.push("/home");
      }
    },
  },
};
</script><template>
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

        <label for="city">Cidade:</label>
        <select v-model="city" id="city" required>
          <option disabled value="">Selecione a cidade</option>
          <option>Abelardo Luz</option>
          <option>Ibirama</option>
          <option>Sombrio</option>
          <option>Videira</option>
          <option>Luzerna</option>
          <option>Fraiburgo</option>
          <option>Concórdia</option>
          <option>São Bento do Sul</option>
          <option>Santa Rosa do Sul</option>
          <option>Rio do Sul</option>
          <option>Camboriú</option>
          <option>Brusque</option>
          <option>Blumenau</option>
          <option>São Francisco do Sul</option>
          <option>Araquari</option>
        </select>

        <label for="person">Servidor:</label>
        <select v-model="person" id="person" required>
          <option>Estudante</option>
          <option>Servidor Nupe</option>
          <option>Coordenadoria-Geral de Assistência Estudantil</option>
          <option>Coordenação PROEJA</option>
          <option>Secretaria Escolar e Acadêmica</option>
          <option>Assessor de Ensino</option>
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
  width: -40rem;
  /* height: 90rem; */
  padding: 19rem;
  justify-content: center;
  margin-top: -15rem;

}

.logo img {
  max-width: 75rem;
  justify-content: center;

  /* height: auto;  */
  /* border-radius: 10px; */
}

.container {
  float: left;
}

</style>
