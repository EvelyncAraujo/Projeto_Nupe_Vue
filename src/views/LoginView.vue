<script setup>
import FormLogin from '@/components/FormLogin.vue'
</script>

<template>
  <section class="section is-main-section login-page">
    <!-- <div class="container"> -->
      <div class="columns is-vcentered">
      
        <div class="column is-half has-text-centered login-form">
          <h1>Bem vindo</h1>
          <form-login icon="" title="Acesso ao sistema"></form-login>
          <p>esqueceu a senha?</p>
        </div>
        <div class="column is-half has-text-centered logo">
          <img src="/public/ftNupe.png" alt="Imagem">
        </div>
      </div>
    <!-- </div> -->
  </section>
</template>

<style scoped>

.logo {
  background-color: #325C32;
  min-height: 100vh;
}
img {
  max-width: 100%;
  /* left: 0; */
  height: 95vh;
}

h1 {
  font-size: 4rem;
}

.login-page {
  min-height: 100vh;
  max-height: 100vh;
  margin: 0 !important; 
  padding: 0 !important;
}

.login-form {
  padding: 20rem;
}

p{
  text-align: end;
}

/* .section {
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
} */
</style>
