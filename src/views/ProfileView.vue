<script>
export default {
  name: 'PerfilAluno',
  data() {
    return {
      aluno: {
        uploadfoto: 'escolher foto existente'
      },
      form: {
        email: '',
        senha: '',
        confirmarSenha: '',
        avatar: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    checkPasswords() {
      if (this.form.senha === this.form.confirmarSenha) {
        this.showToast()
        this.errorMessage = ''
      } else {
        this.errorMessage = 'As senhas não correspondem. '
      }
    },
    upload(e) {
        console.log('eee')
        e.preventDefault()
        var files = e.target.files
        this.form.avatar =  URL.createObjectURL(files[0])
      },
    showToast() {
      var toast = document.getElementById('toast')
      toast.className = 'toast show'
      setTimeout(() => {
        toast.className = toast.className.replace('show', '')
      }, 3000)
    },
    // async deleteCampus(campusId) {
    //   try {
    //     this.campuses = this.campuses.filter((campus) => campus.id !== campusId);
    //     this.showToast(); // Mostra um toast informando sucesso
    //   } catch (error) {
    //     console.error('Erro ao excluir o campus:', error);
    //   }
    // },

    // handleFileUpload(e) {
    //   const target = e.target
    //   if (target && target.files) {
    //     const file = target.files[0]
    //     user.avatar = URL.createObjectURL(file)
    //   }
    // }
    
  }
}
</script>
<template>
  <div class="perfil-Info">
    <h1 class="atz">Atualizar dados institucionais</h1>
    <form @submit.prevent="checkPasswords">
      <div class="forms">
        <FormsProfileView />
      </div>

      <div class="perfil-aluno">
        <h1 class="atz">Foto de perfil</h1>
        <img v-if="form.avatar" :src="form.avatar" style="border-radius: 50%; width: 250px; height: 250px;"/>
         <input type="file" id="avatarField" @change="upload" />
        <h2>{{ aluno.nome }}</h2>
        <!-- <b-button
            type="is-danger"
            icon-left="delete"
            @click="deleteCampus(props.row)"
          ></b-button> -->
        </div>
      
      <div class="formulario-cadastro">
        <h2>Cadastro</h2>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="Digite seu email"
            required
          />
        </div>
        <div class="form-group">
          <label for="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            v-model="form.senha"
            placeholder="Digite sua senha"
            required
          />
        </div>
        <div class="form-group">
          <label for="confirmar-senha">Confirmar Senha:</label>
          <input
            type="password"
            id="confirmar-senha"
            v-model="form.confirmarSenha"
            placeholder="Confirme sua senha"
            required
          />
        </div>
        <div id="toast" class="toast">Ação confirmada!</div>
        <button type="submit">Confirmar</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </div>
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
  border: none;
}

.perfil-Info {
  max-width: 600px;
  margin-top: 15rem;
  margin-left: 35rem;
  padding: 20px;
  text-align: center;
  border: none;
}

.perfil-foto {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 20px;
}
.arqv {
  border-bottom: none;
}
h1 {
  text-align: left;
  font-size: larger;
}

.perfil-aluno,
.perfil-Info,
.formulario-cadastro {
  max-width: 600px;
  margin: 2rem auto;
  padding: 20px;

  text-align: center;
}
.perfil-Info {
  border-radius: 10px;
}

.perfil-Info {
  background-color: rgba(215, 235, 213, 0.322);
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

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 50%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #218838;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #176327;
}

/* .error {
  color: #dc3545;
  font-size: 14px;
}  */
.atz {
  text-align: center;
  color: black;
  font-size: larger;
}
.toast {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #176327;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
}

.toast.show {
  visibility: visible;
  animation:
    fadein 0.5s,
    fadeout 0.5s 2.5s;
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>
