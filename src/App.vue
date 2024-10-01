<script setup>
import MenuView from '@/views/MenuView.vue'
</script>

<template>
  <div id="app">
    <menu-view />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
