import axios from 'axios'
import {ref} from 'vue'
import { defineStore } from 'pinia';

export const useInstitutionStore = defineStore('institution', () => {
  const institutions = ref([])

  async function fetchAllInstitutions() {
    const {data} = await axios.get('api/v1/institution')
    institutions.value = data
  }

  async function createInstitution(institution) {
    await axios.post('api/v1/institution/', institution)
    await fetchAllInstitutions()
  }

  return { institutions, fetchAllInstitutions, createInstitution}
})

