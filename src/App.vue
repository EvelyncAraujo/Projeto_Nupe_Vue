<script setup>

import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MenuView from '@/views/MenuView.vue';

const route = useRoute();
const esconderMenu = computed(() => route.name === 'login');

</script>

<template>
  <div id="app"  >
    <MenuView v-if="!esconderMenu" />
    <router-view />
   
    <!-- <button  >
      {{ isDarkMode ? 'Modo Claro' : 'Modo Escuro' }}
    </button> -->
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
/* body {
  background-color: #ffffff;
  margin: 0;
  height: 100vh;
}
body.dark-mode {
  background-color: #121212f1;

}
button{
  border: none;
  background-color: rgb(129, 201, 129);
}

button:active{
  background-color: rgb(39, 70, 35);
} */

</style>
