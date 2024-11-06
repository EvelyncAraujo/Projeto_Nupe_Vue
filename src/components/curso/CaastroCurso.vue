<template>
  <section style="margin-left: 3%; margin-right: 2%">
    <div>
      <title-bar :title-stack="titleStack" />

      <hero-bar>
        Cadastro de Curso
        <template #right>
          <router-link to="/" class="button"> Dashboard </router-link>
        </template>
      </hero-bar>
    </div>
    
    <b-field label="Nome do Curso">
      <b-input placeholder="Informática..."></b-input>
    </b-field>
    
    <b-field grouped>
      <b-field label="Portaria de Credenciamento">
        <b-input placeholder="2020011212"></b-input>
      </b-field>
      
      <b-field label="Data da Portaria" :label-position="labelPosition">
        <b-datepicker
          placeholder="Clique para selecionar"
          icon="calendar-today"
          trap-focus
          width="60%">
        </b-datepicker>
      </b-field>
    </b-field>
    
    <b-field grouped>
      <b-field label="Início de vigência" :label-position="labelPosition">
        <b-datepicker
          placeholder="Clique para selecionar"
          icon="calendar-today"
          trap-focus
          width="60%">
        </b-datepicker>
      </b-field>
      
      <b-field label="Fim de vigência" :label-position="labelPosition">
        <b-datepicker
          placeholder="Clique para selecionar"
          icon="calendar-today"
          trap-focus
          width="60%">
        </b-datepicker>
      </b-field>
      
      <b-field label="Grau">
        <b-select placeholder="Selecione o Grau do curso">
          <option value="1">Grau I</option>
          <option value="2">Grau II</option>
          <option value="3">Grau III</option>
        </b-select>
      </b-field>
    </b-field>

    <b-field label="Observações" :label-position="labelPosition">
      <b-input maxlength="200" type="textarea"></b-input>
    </b-field>

    <b-field label="Nome do Coordenador">
      <b-input placeholder="Paulo Cesar..."></b-input>
    </b-field>
    
    <b-button tag="input"
              native-type="submit"
              value="Cadastrar" @click="success">Cadastrar</b-button>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    // Definindo propriedades reativas no Vue 3 usando a Composition API
    const labelPosition = ref('top')  // Exemplo de uma variável reativa
    const titleStack = ref(["Cadastro", "Curso"])

    // Método que exibe uma notificação
    const success = () => {
      // Aqui você pode disparar a notificação com Buefy ou outras bibliotecas
      // Exemplo com Buefy:
      this.$buefy.notification.open({
        message: 'Cadastrado com Sucesso!',
        type: 'is-success'
      })
    }

    // Retornando as propriedades e métodos que a view precisa acessar
    return {
      labelPosition,
      titleStack,
      success
    }
  }
}
</script>
