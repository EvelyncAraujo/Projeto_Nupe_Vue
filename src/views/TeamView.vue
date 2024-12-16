<script>
import { onMounted } from 'vue'
import { useStudentStore } from '@/stores/student'

export default {
  setup() {
    const studentStore = useStudentStore()

    onMounted(async () => {
      await studentStore.fetchAllStudents()
    })
    return { studentStore }
  }
}
</script>

<template>
    <div class="lista">
        <p v-for="stu of studentStore.students" :key="stu.id">{{ stu.name }}</p>
    </div>    
</template>

<style scoped></style>
