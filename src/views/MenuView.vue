<script setup>
import { useTemplateStore } from '@/stores/template.js'

const menuItems = [
  { text: 'Estudante ', link: '/student' },
  { text: 'Setor', link: '/sector' },
  { text: 'Atendimento', link: '/atendimento' },
  { text: 'Campus', link: '/campus' },
  { text: 'Instituição', link: '/instituicao' },
  { text: 'Razões Atendimento', link: '/razoes' },
  { text: 'Perfil Aluno', link: '/perfil' }
]

const templateStore = useTemplateStore()

</script>
<template>
  <nav class="menu">
    <p>NupeOnline</p>
    <ul>
      <li v-for="item in menuItems" :key="item.text">
        <router-link :to="item.link">{{ item.text }}</router-link>
      </li>
    </ul>
    <span @click="templateStore.toggleDarkMode">
      <img src="@/assets/favicon_io/favicon-32x32.png" alt="" />
    </span>
   
  </nav>

</template>

<style scoped>
p {
  font-size: larger;
  color: black;
  font-weight: bolder;
}
.menu {
  background-color: #325c32a9;
  padding: 25px 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* font-size: 1.2rem; */
}

.menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 6rem;
  /* margin-left: 15rem; */
}

.menu li {
  margin-right: 20px;
}

.menu a {
  color: rgb(0, 0, 0);
  text-decoration: none;
}

.menu a:hover {
  text-decoration: underline;
}
/* span{
  margin-left: 105rem;

} */
</style>
