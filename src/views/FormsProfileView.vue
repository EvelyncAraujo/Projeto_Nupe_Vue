
<script>
export default {
  name: 'FormularioCadastro',
  data() {
    return {
      form: {
        email: '',
        senha: '',
        confirmarSenha: ''
      },
      errorMessage: ''
    };
  },
  methods: {
    submitForm() {
      if (this.form.senha !== this.form.confirmarSenha) {
        this.errorMessage = 'As senhas não coincidem.';
        return;
      }

      this.errorMessage = '';

      console.log('Email:', this.form.email);
      console.log('Senha:', this.form.senha);

      this.form.email = '';
      this.form.senha = '';
      this.form.confirmarSenha = '';
    }
  }
};
</script>

<template>
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
        <button type="submit">Enviar</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  
  <style scoped>
  .formulario-cadastro {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
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
    background-color: #28a745;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #218838;
  }
  
  .error {
    color: #dc3545;
    font-size: 14px;
  }
  </style>
  