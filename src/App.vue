<script>
import ProfileView from '@/views/ProfileView.vue'
import FormsProfileView from '@/views/FormsProfileView.vue';


export default {
  name: 'App',
  components: {
    ProfileView,
    FormsProfileView
  }
};
</script>


<template>
  <div id="app">
    <ProfileView />
    <FormsProfileView />
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
