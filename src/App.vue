<script>
import Profile from '@/views/AboutView.vue'
import FormsProfile from '.../src/views/FormsProfileView.vue'

export default {
  name: 'App',
  components: {
    Profile,
    FormsProfile
  }
};
</script>


<template>
  <div id="app">
    <Profile />
    <FormsProfile />
    <router-view />
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
