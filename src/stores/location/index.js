import axios from 'axios'
import { ref } from "vue";
import { defineStore } from "pinia";

export const useLocationStore = defineStore('location', () => {
  const locations = ref([])

  async function fetchAllLocations() {
    const {data} = await axios.get('api/v1/location/')
    locations.value = data
  }

  return { locations, fetchAllLocations}
})
