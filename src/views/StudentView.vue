<script>
export default {
  name: "PerfilAluno",
  data() {
    return {
      aluno: {
        nome: " Ana Clara Fidêncio da Silva",
        matricula: "2022314325",
        curso: " Informática para Internet",
        nivel: "3",
        status: "Matriculado",
        email: "fidenciosilvaanaclara@gmail.com",
        entrada: "2022",
      },
      form: {
        avatar: "",
      },
    };
  },
  methods: {
    upload(e) {
      e.preventDefault();
      const files = e.target.files;
      if (files.length) {
        this.form.avatar = URL.createObjectURL(files[0]);
      }
    },
    async fetchStudentData() {
      try {
        const response = await fetch("/api/student-data"); // Substitua pelo seu endpoint real
        const data = await response.json();
        this.aluno = data;
      } catch (error) {
        console.error("Erro ao buscar dados do aluno:", error);
      }
    },
  },
  created() {
    this.fetchStudentData();
  },
};
</script>

<template>
  <div class="student-items">
    <div class="registros">
      <h1>Últimos registros</h1>
    
     <div class=" ocorrencia">
      <p >Chegada tardia 24/11/2024</p>
      <p>Sem Uniforme-Geografia-12/10/2024</p> 
      <p>Sem Uniforme-Geografia-18/10/2024</p>
      <p>Sem Uniforme-Geografia-16/10/2024</p>
      <p>Sem Uniforme-Geografia-11/10/2024</p>
      <p>Sem Uniforme-Geografia-15/10/2024</p></div> 
    
 
        </div>

    <div class="perfil">
      <img
        v-if="form.avatar"
        :src="form.avatar"
        style="border-radius: 55%; width: 280px; height: 290px"
        alt="Foto do Aluno"
      />
      <input type="file" id="avatarField" @change="upload" />
      <p class="infoAluno">Nome: {{ aluno.nome }}</p>
      <p class="infoAluno">Matrícula: {{ aluno.matricula }}</p>
      <p class="infoAluno">Curso: {{ aluno.curso }}</p>
      <p class="infoAluno">Nível: {{ aluno.nivel }}</p>
      <p class="infoAluno">Status: {{ aluno.status }}</p>
      <p class="infoAluno">E-Mail: {{ aluno.email }}</p>
      <p class="infoAluno">Entrada: {{ aluno.entrada }}</p>
    </div>
  </div>

  <footer class="footer">
    <p>Dias letivos: 200</p>
    <p>Total de faltas: XX</p>
    <p>Percentual de falta durante o período letivo: XX%</p>
  </footer>
</template>

<style scoped>
.student-items {
  margin-top: -10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow-y: scroll;
}

@media screen and (min-width: 768px) {
  .perfil {
    margin-top: 20rem;
    margin-right: 5rem;
    background-color: rgba(138, 135, 135, 0.123);
    border-radius: 10px;
    text-align: left;
    line-height: 2rem;
  }
}

@media screen and (max-width: 768px) {
  .student-items {
    display: flex;
    flex-direction: column;
  }
}

.footer {
  display: flex;
  padding: 1em;
  background-color: #f1f1f1;
  position: fixed;
  bottom: 0;
  width: 100%;
  justify-content: center;
  gap: 6rem;
  text-align: center;
  font-size: 18px;
}

h1 {
  font-size: 40px;
  text-align: left;
  margin-top: 15rem;
  margin-left: 2rem;
}

h2 {
  text-align: left;
  margin-top: 1rem;
  margin-left: 2rem;
}

.infoAluno {
  font-size: 18px;
  margin-right: 4rem;
}

a {
  margin-left: 7rem;
}

a:hover {
  margin-left: 7rem;
  color: #9b9898;
}
img{
margin: 0 auto;
display: block;
text-align: center;
margin-top: 1rem;
margin-bottom: 1rem;
}
.perfil{
  width: 25rem ;
}
.ocorrencia{
  text-align:left;
  margin-left: 2rem;
  color: red;
}
</style>
