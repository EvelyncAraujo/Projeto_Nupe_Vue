import axios from 'axios'
import { ref } from "vue";
import { defineStore } from "pinia";

export const useStudentStore = defineStore('student', () => {
  const students = ref([])

  async function fetchAllStudents() {
    const {data} = await axios.get('api/v1/student/')
    students.value = data
  }

  return { students, fetchAllStudents}
})