import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTemplateStore = defineStore('template', () => {
  const isDarkMode = ref(false)
  
  function  toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value;
    localStorage.setItem('darkMode', isDarkMode.value);
  }

  return { isDarkMode, toggleDarkMode }
})
