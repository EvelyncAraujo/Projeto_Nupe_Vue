<template>
  <img src="/public/PortariaIFC.png" alt="" class="Portaria">
  <div class="container">

    <main class="main">
      <h1>Turmas:</h1>
      <h2>IFC - Campus Araquari</h2>
      <div class="grid-buttons">
        <button class="info" v-for="tea of teamStore.teams" :key="tea.id" @click="">{{ tea.name }}</button>
      </div>
    </main>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useTeamStore } from '@/stores/teams'

export default {
  setup() {
  const teamStore = useTeamStore()

  onMounted(async () => {
    await teamStore.fetchAllTeams()
  })
  return { teamStore }
  }
}
</script>

<style scoped>
.Portaria {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.container {
  font-family: Arial, sans-serif;
}

.main {
  text-align: center;
  margin: 20px;
}

h1 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: bold;
}

h2 {
  font-size: 1.2rem;
  margin-bottom: 20px;

}

.grid-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px;
}

button {
  font-size: 0.9rem;
  padding: 15px 20px;
  border: 2px solid transparent;
  border-radius: 15px;

  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

button.info {
  border-color: #2d7ddb;
  color: #2d7ddb;
}

button.info:hover {
  background-color: #2d7ddb;
  color: white;
}

button.agro {
  border-color: #3b6e39;
  color: #3b6e39;
}

button.agro:hover {
  background-color: #3b6e39;
  color: white;
}

button.quimi {
  border-color: #7a3e8c;
  color: #7a3e8c;
}

button.quimi:hover {
  background-color: #7a3e8c;
  color: white;
}

/* Responsividade */
@media (max-width: 768px) {
  .grid-buttons {
    grid-template-columns: repeat(2, 1fr);
  }

  button {
    font-size: 0.8rem;
    padding: 10px 15px;
  }
}
</style>
