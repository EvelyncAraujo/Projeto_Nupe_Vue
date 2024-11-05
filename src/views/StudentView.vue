<template>
  <div class="student-items">
    <div class="registros">
      <h1>Últimos registros</h1>
      <h2>Não tem nenhuma pendência do aluno</h2>
      <!-- <a href="link">Ver detalhes</a> -->
    </div>

    <div class="perfil">
      <img src="/circuloImagem.jpeg" alt="Foto do Aluno" class="perfil-foto" />

      <p class="infoAluno">Nome:</p>
      <p class="infoAluno">Matrícula:</p>
      <p class="infoAluno">Curso:</p>
      <p class="infoAluno">Nível:</p>
      <p class="infoAluno">Status: Ativo</p>
      <p class="infoAluno">E-Mail:</p>
      <p class="infoAluno">Entrada:</p>
      <a href="Perfil">atualizar dados</a>
    </div>
  </div>

  <footer class="footer">
    <p>Dias letivos: 200</p>
    <p>total de falta: XX</p>
    <p>percentual de falta durante o período letivo: XX%</p>
  </footer>
</template>

<style scoped>

.student-items {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow-y: scroll;
  /* min-height?  */
  /* background-color: red */
}

.perfil {
  background-color: rgba(236, 236, 236, 0.288);
  border-radius: 10px;
  text-align: left;
  line-height: 2rem;
  max-width: 20rem;
  /* margin-left: 90rem;
  margin-top: -8rem; */
}

@media screen and (min-width: 768px) {
  .perfil {
    margin-top: 15rem;
    margin-right: 5rem;
  }
}

@media screen and (max-width: 768px) {
  .student-items {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* align-items: center; */
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



.aluno {
  font-size: 15px;
  text-align: end;
  margin-right: 4rem;
  position: absolute;
}

.infoAluno {
  font-size: 18px;
  margin-right: 4rem;
}
.perfil-foto {
  width: 150px;
  height: 150px;
  display: block;
  /* margin: 0px auto; */
}

a {
  margin-left: 7rem;
}
a:hover {
  margin-left: 7rem;
  color: #9b9898;
}
</style>
