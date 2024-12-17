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
    <div v-for="stu of studentStore.students" :key="stu.id" class="card">
      <div>
        <div class="img"></div>
      </div>
      <div class="info">
        <p>{{ stu.full_name }}</p>
        <p>Matricula: {{ stu.registration }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lista {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
}

.card {
  display: flex;
  padding: 20px 10px;
  border-radius: 15px;
  background-color: #dddddd;
  width: 300px;
  gap: 10px;
}

.img {
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 50%;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
}
</style>
