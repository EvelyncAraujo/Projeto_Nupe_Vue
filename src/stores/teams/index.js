import axios from 'axios'
import { ref } from "vue";
import { defineStore } from "pinia";

export const useTeamStore = defineStore('team', () => {
  const teams = ref([])

  async function fetchAllTeams() {
    const {data} = await axios.get('api/v1/team/')
    teams.value = data
  }

  return { teams, fetchAllTeams}
})