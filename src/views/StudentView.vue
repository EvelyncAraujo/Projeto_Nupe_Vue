<template>
    <div class="registros">
        <h1>Últimos registros</h1>
        <h2> Não tem nenhuma pendência do aluno</h2>
        <!-- <a href="link">Ver detalhes</a> -->
    </div>

    <div class="perfil">
        <img src="/public/circuloImagem.jpeg" alt="Foto do Aluno" class="perfil-foto" />
        essa imagem só de exemplo
        <h1 class="aluno">Dados institucionais:</h1>
        <p class="infoAluno">Nome:</p>
        <p class="infoAluno">Matrícula:</p>
        <p class="infoAluno">Curso:</p>
        <p class="infoAluno">Nível:</p>
        <p class="infoAluno">Status: Ativo</p>
        <p class="infoAluno">E-Mail:</p>
        <p class="infoAluno">Entrada:</p>
    </div>

    <footer class="footer">
        <p> Dias letivos:
            200</p>
        <p>total de falta:
            XX</p>
        <p>percentual de falta durante o período letivo:
            XX%</p>
    </footer>
</template>



<style scoped>
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

.perfil {
    background-color: rgba(56, 231, 173, 0.288);
    max-width: 15rem;
    margin-left: 90rem;
    border-radius: 15px;
    line-height: 2rem;
}

.aluno {
    font-size: 15px;
    text-align: end;
    margin-right: 4rem;
    position:absolute; 

}

.infoAluno {
    font-size: 15px; 
    margin-right: 4rem;
}
.perfil-foto{
    width: 150px;
    height: 150px;
}

</style>