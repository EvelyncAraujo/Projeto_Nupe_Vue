<script setup>
import { ref } from 'vue';
import { useTemplateStore } from '@/stores/template.js';

const menuItems = [
  { text: 'Estudante ', link: '/student' },
  { text: 'Setor', link: '/sector' },
  { text: 'Atendimento', link: '/atendimento' },
  { text: 'Campus', link: '/campus' },
  { text: 'Instituição', link: '/instituicao' },
  { text: 'Razões Atendimento', link: '/razoes' },
  { text: 'Perfil Aluno', link: '/perfil' }
];

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const templateStore = useTemplateStore();
</script>

<template>
  <nav class="menu">
    <p>NupeOnline</p>
    <button class="hamburger" @click="toggleMenu">
      ☰
    </button>
    <ul :class="{ 'menu-open': isMenuOpen }">
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
  justify-content: space-between;
}

.menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 2rem;
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

/* Botão de menu sanduíche (hambúrguer) */
.hamburger {
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  position: fixed;

}

/* Estilo responsivo */
@media (max-width: 768px) {
  .menu {
    justify-content:space-around;
  }

  /* Esconde o menu padrão em telas menores */
  .menu ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: #325c32a9;
    padding: 1rem;
  }

  /* Estilos para exibir o menu quando aberto */
  .menu ul.menu-open {
    display: flex;
    background-color: rgba(5, 119, 53, 0.397);
    opacity: 1;
    overflow-x: hidden;
    
  
  }

  /* Exibe o botão de menu sanduíche */
  .hamburger {
    display: block;
  }

  /* Estilo de lista no modo sanduíche */
  .menu li {
    margin: 1.5rem 0;
    text-align: center;

  }

  .menu a {
    font-size: 1.2rem;
  }
}
</style>
