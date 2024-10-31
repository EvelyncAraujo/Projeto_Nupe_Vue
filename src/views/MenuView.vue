<script setup>
import { ref } from 'vue'
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

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const templateStore = useTemplateStore()


</script>

<template>
  <nav class="menu-hamburger">
    <input id="menu-hamburguer" type="checkbox" />
    <label for="menu-hamburguer">
      <h1  >NupeOnline</h1> 
      <div class="menu">
        <span class="hamburguer"></span>
      </div>
    </label>

    <ul class="menu-hamburguer-elements show">
      <p>NupeOnline</p>
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

@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Red+Rose:wght@300..700&display=swap');



h1{

  font-family: "Julius Sans One", sans-serif;
  font-weight: 400;
  font-style: normal;


 
}
p{
  font-family: "Julius Sans One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  background-color: #325c32;
}

.toggleTheme,
p,
li,
a,
ul,
img,
span {
  background-color: transparent;
  font-size: large;
}
.toggleTheme,
p {
  font-weight: bold;
  color: black;
}
.toggleTheme,

body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
}

.dark-mode {
  background-color: black;
}

header {
  width: 100%;
  height: 10%;
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #325c32a9;
  background-color: rgba(23, 23, 23, 0.4);
}

.menu-hamburger {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: baseline;
}
.menu-hamburguer-elements {
  display: flex;
  width: 80%;
  height: 10vh;
  justify-content: space-around;
  align-items: baseline;
}

.menu-hamburguer-elements li {
  list-style: none;
  font-size: 1.4rem;
 
  font-size: 1.4rem;
  list-style: none;
  align-items: baseline;
}

.menu-hamburguer-elements a {
  color:aliceblue;
  text-decoration: none;
  align-items: baseline;
  font-family: "Playfair Display SC", serif;
  font-weight: 400;
  font-style: normal;
 
}

.menu-hamburguer-elements a:hover {
  color: #fff;
  text-decoration: underline;
}

/* BOTÃO MENU HAMBURGUER */
.menu {
  width: 40px;
  height: 40px;

  border-radius: 5px;
  cursor: pointer;
  display: none;
  position: relative;
  background-color: transparent;
}

.hamburguer {
  position: sticky;
  display: block;
  background: #fff;
  width: 27px;
  height: 1px;
  top: 29px;
  left: 15px;
  transition: 0.5s ease-in-out;
  z-index: 2;
}

.hamburguer:before,
.hamburguer:after {
  background: #ffff;
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: 0.5s ease-in-out;
}

.hamburguer:before {
  top: -10px;
}

.hamburguer:after {
  bottom: -10px;
}

input {
  display: none;
}

/* rotação dos elementos do span */
input:checked ~ label .hamburguer {
  transform: rotate(45deg);
}

input:checked ~ label .hamburguer:before {
  transform: rotate(90deg);
  top: 0;
}

input:checked ~ label .hamburguer:after {
  transform: rotate(90deg);
  bottom: 0;
}

input:checked ~ .menu-hamburguer-elements {
  left: 0;
}

/* ATIVANDO O BOTÃO HAMBURGUER QUANDO O TAMANHO DA TELA ATINGIR 600PX */
@media (max-width: 600px) {
  header {
    height: 20%;
  }

  .menu-hamburguer-elements a:hover {
    color: darkgreen;
  }
  .menu-hamburguer-elements a {
    color: #ffffff;
    margin-bottom: 100px;
    
    
    padding-right: 15px;
  }
  .menu-hamburguer-elements p {
    color: darkgreen;
    
  }
  .menu-hamburguer-elements li {
   margin-bottom: 15px;
  }
  .mobile {
    color: black;
    text-align: center;
    font-size: 30px;
    text-decoration: solid;
  }
  .menu-hamburger {
    display: flex;
    width: auto;
    flex-direction: column;
    align-self: flex-start;
    overflow: auto;
    z-index: 1;
    color: white;
  }

  .menu-hamburguer-elements  {
    width: 50%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.808);
    position: absolute;
    left: -50%;
    top: 0px;

    transition: left cubic-bezier(1, 0, 0, 1) 0.8s;

    display: flex;
    align-items:normal;
    flex-direction: column;
    justify-content:center;

    z-index: 1;
    color: #ffffff;
    
  }

  .menu {
    display: flex;
    height: 20px;
    width: 60px;
  }

  
}
</style>
