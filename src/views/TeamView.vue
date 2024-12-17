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
  <h1>3INFO3</h1>
  <div class="lista">
    <div v-for="stu of studentStore.students" :key="stu.id" class="card">
      <div>
        <div class="img"></div>
      </div>
      <div class="info">
       
        <router-link to="/student" class="pagestudante"><p>{{ stu.full_name }}</p></router-link>
        <p>Matricula: {{ stu.registration }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

p{
  color: black;
  

}
h1{
color: black;

font-size: 25px;
font-family: "Poppins", sans-serif;
}
.lista {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
}

.card {
  padding: 20px 10px;
  gap: 10px;
  margin-left: 5px;
  width: 300px; 
  background-color: #ffffffd8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  border-radius: 28px;
  margin-right: 20px;
  align-items: center;
}

.img {
  width: 80px;
  height: 80px;
  background-color:rgb(230, 231, 231);
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
