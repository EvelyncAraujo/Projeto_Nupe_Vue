<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { useTemplateStore } from '@/stores/template'
import MenuView from '@/views/MenuView.vue'

const route = useRoute()
const templateStore = useTemplateStore()
const esconderMenu = computed(() => route.name === 'login')
</script>

<template>
  <div id="app" :class="templateStore.isDarkMode ?'dark-mode' : ''">
    <MenuView v-if="!esconderMenu" />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

.dark-mode {
  background-color: rgba(7, 7, 7, 0.849);
}

.dark-mode h1, .dark-mode h2, .dark-mode .infoAluno, .dark-mode a{
  color: #f1f1f1;
}

</style>
