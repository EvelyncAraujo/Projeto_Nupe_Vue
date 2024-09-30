<script>
import Menu from '@/views/MenuView.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
};
</script>

<template>
  <div id="app">
    <router-view />
    <!-- <menu-view /> -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
