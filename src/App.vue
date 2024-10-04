<script setup>

import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MenuView from '@/views/MenuView.vue';

// Obter a rota atual
const route = useRoute();

// Computar o valor de "esconderMenu" com base na rota atual (login)
const esconderMenu = computed(() => route.name === 'login');

// Criar estado reativo para o Dark Mode
const isDarkMode = ref(false);

// Função para aplicar o tema
const applyTheme = () => {
  if (isDarkMode.value) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
};

// Alternar entre os modos
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('darkMode', isDarkMode.value);
  applyTheme();
};

// Quando o componente for montado, verifica o estado salvo
onMounted(() => {
  const savedTheme = localStorage.getItem('darkMode');
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'true';
    applyTheme();
  }
});
</script>

<template>
  <div id="app"  >
    <MenuView v-if="!esconderMenu" />
    <router-view />
    <button @click="toggleDarkMode">
      {{ isDarkMode ? 'Modo Claro' : 'Modo Escuro' }}
    </button>
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;

  color: #2c3e50;
  /* margin-top: 60px; */
}
body {
  background-color: #ffffff;

}

/* Estilos para o tema escuro */
body.dark-mode {
  background-color: #121212f1;

}
button{
  border: none;
  background-color: rgb(129, 201, 129);
}

button:active{
  background-color: rgb(39, 70, 35);
}

</style>
