<script>
export default {
  data() {
    return {
      menuItems: [
      
        { text: 'Estudante ', link: '/student' },
        { text: 'Setor', link: '/sector' },
        { text: 'Atendimento', link: '/atendimento' },
        { text: 'Campus', link: '/campus' },
        { text: 'Instituição', link: '/instituicao' },
        { text: 'Razões Atendimento', link: '/razoes'}
      ],
     isDarkMode: false 
    }
  },
  mounted() {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'true';
      this.applyTheme(); 
    }
  },
  methods: {
    applyTheme() {
      if (this.isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('darkMode', this.isDarkMode);
      this.applyTheme();
    }
  }
}
</script>

<template>
  <nav class="menu">
    <ul>
      <p>NupeOnline</p>
      <li v-for="item in menuItems" :key="item.text">
        <a :href="item.link">{{ item.text }}</a>
      </li>
    </ul>
    <span @click="toggleDarkMode">
      <img src="@/assets/favicon_io/favicon-32x32.png" alt="">
    </span>
 
  </nav>
</template>

<style>
p {
  font-size: larger;
  color: black;
  font-weight: bolder;
}
.menu {
  background-color: #325c32a9;
  padding: 10px;
}

.menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 6rem;
  margin-left: 15rem;
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
body {
  background-color: #ffffff;
  margin: 0;
  height: 100vh;
}
body.dark-mode {
  background-color: #121212f1;

}
span{
  margin-left: 105rem;

}
</style>
