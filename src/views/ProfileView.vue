<script>
export default {
  name: 'PerfilAluno',
  data() {
    return {
      aluno: {
        uploadfoto: 'escolher foto existente'
      },
      form: {
        email: '',
        senha: '',
        confirmarSenha: ''
      }
    }
  },
  methods: {
    checkPasswords() {
      if (this.form.senha === this.form.confirmarSenha) {
        alert('Senhas correspondem!')
      } else {
        alert('As senhas não correspondem. Tente novamente.')
      }
    }
  }
}
</script>

<template>
  <div class="perfil-Info">
    <h1 class="atz">Atualizar dados institucionais</h1>
    <form @submit.prevent="submitForm"></form>
    <div class="forms">
      <FormsProfileView />
    </div>

    <div class="perfil-aluno">
      <h1 class="atz">Foto de perfil</h1>
      <img src="/public/circuloImagem.jpeg" alt="Foto do Aluno" class="perfil-foto" />
      <h2>{{ aluno.nome }}</h2>
      <p><strong>Arquivo:</strong> {{ aluno.uploadfoto }}</p>
    </div>
    <!-- Seção de Cadastro -->
    <div class="formulario-cadastro">
      <h2>Cadastro</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="Digite seu email"
            required
          />
        </div>
        <div class="form-group">
          <label for="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            v-model="form.senha"
            placeholder="Digite sua senha"
            required
          />
        </div>
        <div class="form-group">
          <label for="confirmar-senha">Confirmar Senha:</label>
          <input
            type="password"
            id="confirmar-senha"
            v-model="form.confirmarSenha"
            placeholder="Confirme sua senha"
            required
          />
        </div>
        <button type="submit">Confirmar</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<style scoped>
.perfil-aluno {
  max-width: 600px;
  margin-top: 15rem;
  margin-left: 35rem;
  padding: 20px;
  text-align: center;
  border: none;
}

.perfil-Info {
  max-width: 600px;
  margin-top: 15rem;
  margin-left: 35rem;
  padding: 20px;
  text-align: center;
  border: none;
}

.perfil-foto {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 20px;
}

h1 {
  text-align: left;
  font-size: larger;
}

.perfil-aluno,
.perfil-Info,
.formulario-cadastro {
  max-width: 600px;
  margin: 2rem auto;
  padding: 20px;

  text-align: center;
}
.perfil-Info {
  border-radius: 10px;
}

.perfil-Info {
  background-color: rgba(215, 235, 213, 0.322);
}

.perfil-foto {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 20px;
}

h1 {
  text-align: left;
  font-size: larger;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #218838;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #176327;
}

.error {
  color: #dc3545;
  font-size: 14px;
}
.atz {
  text-align: center;
  color: black;
  font-size: larger;
}
</style>
