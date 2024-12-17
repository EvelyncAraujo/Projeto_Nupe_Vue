<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useTemplateStore } from '@/stores/template.js'

const menuItems = [
  { text: 'Estudante ', link: '/student' },
  { text: 'Setor', link: '/sector' },
  { text: 'Atendimento', link: '/atendimento' },
  { text: 'Campus', link: '/campus' },
  { text: 'Perfil Aluno', link: '/perfil' }
]

const isMobile = ref(false)

const checkIfMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkIfMobile()
  window.addEventListener('resize', checkIfMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkIfMobile)
})




const templateStore = useTemplateStore()
</script>

<template>
 <div class="responsive-menu"> <nav class="menu-hamburger">
    <input id="menu-hamburguer" type="checkbox" />
    <label for="menu-hamburguer">
      <div class="menu">
        <span class="hamburguer"></span>
      </div>
    </label>

    <ul class="menu-hamburguer-elements show">
      <a href="Home"><p class="logo">NupeOnline</p></a>
      <li v-for="item in menuItems" :key="item.text">
        <router-link :to="item.link">{{ item.text }}</router-link>
      </li>
    </ul>

    <div :class="['checkbox-container', isMobile ? 'mobile' : 'desktop']">
      <input
        id="switch-shadow"
        class="switch switch--shadow"
        type="checkbox"
        @click="templateStore.toggleDarkMode"
      />
      <label for="switch-shadow"></label>
    </div>
  </nav>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Red+Rose:wght@300..700&display=swap');

/* Smartphones */
@media (max-width: 480px) {
  /* Ajustes específicos para telas muito pequenas */
}

/* Tablets */
@media (min-width: 481px) and (max-width: 768px) {
  /* Ajustes para tablets */
}

/* Telas intermediárias */
@media (min-width: 769px) and (max-width: 1024px) {
  /* Ajustes específicos para telas menores, mas maiores que celulares */
}

body {
  font-size: 100%; /* Base relativa ao navegador */
}

@media (max-width: 768px) {
  body {
    font-size: 90%; /* Reduz tamanho em telas menores */
  }
}
.menu-hamburguer-elements a {
  padding: 0.5rem 1rem; /* Escala bem em telas pequenas */
}

@media (max-width: 768px) {
  .checkbox-container {
    top: auto;
    bottom: 370px;
    right: 15px;
  }
}
.checkbox-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -5px;
  background-color: transparent;
  position: fixed;
}


.checkbox-container.mobile {
  top: 15px;
  right: 15px;
  position:fixed;
}
.switch {
  position: absolute;

  visibility: hidden;
}

.checkbox-container.mobile {
  position: fixed; /* Para fixar no canto */
  top: 10px; /* Distância do topo */
  right: 10px; /* Distância da borda direita */
  z-index: 1000; /* Garante que fique acima de outros elementos */
}

.checkbox-container.desktop {
  position:static; /* Permanece na posição padrão em desktops */
} 
.switch + label {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  user-select: none;
}
.switch--shadow + label {
  top: 4px;
  padding: 1px;
  width: 80px;
  height: 40px;
  background-color: black;
  border-radius: 40px;
  left: px;
}
.switch--shadow + label:before,
.switch--shadow + label:after {
  display: block;
  position: absolute;
  top: 1px;
  left: 1px;
  bottom: 1px;
  content: '';
}
.switch--shadow + label:before {
  right: 1px;
  background-color: rgba(0, 0, 0, 0.247);
  border-radius: 60px;
  transition: all 0.2s;
}
.switch--shadow + label:after {
  width: 36px; 
  height: 36px; 
  background-color: #fff;
  border-radius: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3); 
  transition: all 0.4s;
}
.switch--shadow:checked + label:before {
  background-color: #ffffff;
}
.switch--shadow:checked + label:after {
  transform: translateX(40px); 
}
.hide-on-mobile {
  display: block;
}
/* @media (max-width: 768px) {
  .hide-on-mobile {
    display: none;
  }
} */
.dark-b {
  margin-left: 6rem;
  margin-bottom: 4rem;
;
}

h1 {
  font-family: 'Julius Sans One', sans-serif;
  font-weight: 400;
  font-style: normal;
}
p {
  font-family: 'Julius Sans One', sans-serif;
  font-weight: 400;
  font-style: normal;
}
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  background-color: #074707;
}

.toggleTheme,
p,
li,
ul,
img,
span,
a {
  background-color: transparent;
  font-size: large;
}
.toggleTheme,
p {
  font-weight: bold;

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

}
.menu-hamburguer-elements {
  display: flex;
  width: 80%;
  height: 20vh;
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
  color: aliceblue;
  text-decoration: none;
  align-items: baseline;
  font-family: 'Playfair Display SC', serif;
  font-weight: 400;
  font-style: normal;
}

.menu-hamburguer-elements a:hover {
  color: #fff;
  text-decoration: underline;
}

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
  background-color: black;
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
@media (max-width: 900px) {
  header {
    height: 20%;
  }
 .switch {
  justify-content: end;
 }
 @media (max-width: 768px) {
  .menu-hamburguer-elements {
    height: 100vh;
  }
}
  .menu-hamburguer-elements a:hover {
    color: darkgreen;
  }
  .menu-hamburguer-elements a {
  padding: 10px 15px;
  text-align: center;
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

  .menu-hamburguer-elements {
    width: 50%;
    height: 125%;
    background-color: rgb(0, 0, 0);
    position: absolute;
    left: -50%;
    top: 0px;

    transition: left cubic-bezier(1, 0, 0, 1) 0.8s;

    display: flex;
    align-items: normal;
    flex-direction: column;
    justify-content: center;

    z-index: 1;
    color: #ffffff;
  }

  .menu {
  display: flex;
  cursor: pointer;
  z-index: 2;
}
 
  .hamburguer{
  background-color:white
  }
  .checkbox{
    justify-content: end;
   
  }

}
img {
  max-width: 100%;
  height: auto;
}
</style>
