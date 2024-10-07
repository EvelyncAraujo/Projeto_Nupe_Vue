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
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;

}


</style>
