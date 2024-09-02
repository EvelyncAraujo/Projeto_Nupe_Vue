<script >
export default {
    name: 'PerfilAluno, PerfilInfo',
    data() {
        return {
            aluno: {
                uploadfoto: 'escolher foto existente'

                //   foto: 'https://via.placeholder.com/150'
            }
        }
    }
}
</script>

<template>
    <div class="perfil-aluno">
        <h1>Foto de perfil</h1>
        <img src="/public/circuloImagem.jpeg" alt="Foto do Aluno" class="perfil-foto" />
        <h2>{{ aluno.nome }}</h2>
        <p><strong>Arquivo:</strong> {{ aluno.uploadfoto }}</p>
    </div>

    <div class="perfil-Info">
        <h1>Atualizar dados institucionais</h1>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="form.email" placeholder="Digite seu email" required />
            </div>
            <div class="form-group">
                <label for="senha">Senha:</label>
                <input type="password" id="senha" v-model="form.senha" placeholder="Digite sua senha" required />
            </div>
            <div class="form-group">
                <label for="confirmar-senha">Confirmar Senha:</label>
                <input type="password" id="confirmar-senha" v-model="form.confirmarSenha"
                    placeholder="Confirme sua senha" required />
            </div>
            <button type="submit">Enviar</button>
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </form>
    </div>
</template>

<style scoped>
.perfil-aluno {
    max-width: 600px;
    margin-top: 15rem;
    margin-left: 35rem;
    padding: 20px;
    text-align: center;
    border: 2px solid #000000;
}

.perfil-Info {
    background-color: rgb(112, 64, 0);
    max-width: 600px;
    margin-top: 15rem;
    margin-left: 35rem;
    padding: 20px;
    text-align: center;
    border: 2px solid #000000;
}

.perfil-foto {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-bottom: 20px;
}

h1 {
    text-align: left;
    font-size: larger;
}
</style>
