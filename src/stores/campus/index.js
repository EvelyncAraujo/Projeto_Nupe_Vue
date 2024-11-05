import axios from 'axios'
import { defineStore } from 'pinia';
import { computed, reactive } from 'vue'

export const useCampusStore = defineStore('campus', () => {
  const state = reactive({
    campus: [
      // { institution: {} }
    ]
  })

  const campus = computed(() => state.campus.map(c => {
    const retCampus = {...c}
    retCampus.institution = c.institution.name
    return retCampus
  }))

  async function fetchAllCampus() {
    const { data } = await axios.get('api/v1/campus/')
    state.campus = data
  }

  async function createCampus(campus) {
    await axios.post('api/v1/campus/', campus)
    await fetchAllCampus()
  }
  
  async function updateCampus(id, campus) {
    await axios.patch(`api/v1/campus/${id}/`, campus);
    await fetchAllCampus()
  }

  async function deleteCampus(id) {
    await axios.delete(`api/v1/campus/${id}/`);
    await fetchAllCampus()
  }

  return { state, campus, fetchAllCampus, updateCampus, deleteCampus, createCampus}
})
