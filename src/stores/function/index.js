import axios from 'axios'
import { ref } from "vue";
import { defineStore } from "pinia";

export const useFunctionStore = defineStore('function', () => {
  const functions = ref([])

  async function fetchAllFunctions() {
    const {data} = await axios.get('api/v1/function/')
    functions.value = data
  }

  return { functions, fetchAllFunctions}
})
