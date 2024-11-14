<template>
    <div class="register-page">
      <h1>Cadastro</h1>
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
          <label for="female">Feminino</label>
  
          <input v-model="gender" type="radio" id="male" value="Masculino" />
          <label for="male">Masculino</label>
        </div>
  
        <label>Tipo de Usuário:</label>
        <div class="radio-group">
          <input v-model="userType" type="radio" id="student" value="Estudante" />
          <label for="student">Estudante</label>
  
          <input v-model="userType" type="radio" id="staff" value="Servidor" />
          <label for="staff">Servidor</label>
        </div>
  
        <label for="city">Cidade:</label>
        <select v-model="city" id="city" required>
          <option disabled value="">Selecione a cidade</option>
          <option>Florianópolis</option>
          <option>Joinville</option>
          <option>Blumenau</option>
          <option>São José</option>
          <option>Chapecó</option>
        
        </select>
  
        <button type="submit">Cadastrar</button>
      </form>
      <p v-if="message">{{ message }}</p>
    </div>
  </template>
  
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
      };
    },
    methods: {
      registerUser() {
        if (this.password !== this.confirmPassword) {
          this.message = "As senhas não coincidem!";
        } else if (!this.gender || !this.userType || !this.city) {
          this.message = "Por favor, preencha todos os campos!";
        } else {
          this.message = "Cadastro realizado com sucesso!";
          // Aqui você pode adicionar lógica para enviar os dados ao servidor
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .register-page {
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
    font-size: 2rem;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-top: 1rem;
  }
  
  input, select, button {
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .radio-group {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 0.5rem;
  }
  
  button {
    margin-top: 2rem;
    background-color: #325C32;
    color: white;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #287027;
  }
  
  p {
    margin-top: 1rem;
    text-align: center;
    color: #d9534f;
  }
  </style>
  