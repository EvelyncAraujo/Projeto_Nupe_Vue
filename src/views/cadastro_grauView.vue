<script>
  import { ref } from "vue";
  import { useToast } from "buefy";
  
  export default {
    setup() {
      const labelPosition = ref("is-centered");
      const nomeGrau = ref("");
      const dataInicial = ref(null);
      const dataFinal = ref(null);
  
      const toast = useToast();
  
      const submitForm = () => {
        // Aqui você pode adicionar lógica de envio de formulário, se necessário
        toast.open({
          message: "Grau cadastrado com sucesso",
          type: "is-success",
        });
      };
  
      return {
        labelPosition,
        nomeGrau,
        dataInicial,
        dataFinal,
        submitForm,
      };
    },
  };
  </script>
  <template>
    <section style="margin-left: 3%; margin-right: 2%">
      <h3 class="subtitle">Cadastro de Grau</h3>
      <b-field label="Nome">
        <b-input v-model="nomeGrau" placeholder="Grau I"></b-input>
      </b-field>
      <b-field grouped>
        <b-field label="Data inicial de vigência" :label-position="labelPosition">
          <b-datepicker
            v-model="dataInicial"
            placeholder="Clique para selecionar"
            icon="calendar-today"
            trap-focus
            width="60%"
          >
          </b-datepicker>
        </b-field>
        <b-field label="Data final de vigencia" :label-position="labelPosition">
          <b-datepicker
            v-model="dataFinal"
            placeholder="Clique para selecionar"
            icon="calendar-today"
            trap-focus
            width="60%"
          >
          </b-datepicker>
        </b-field>
      </b-field>
      <a href="index">
        <b-button type="is-warning is-light">Voltar</b-button>
      </a>
      <b-button
        tag="input"
        native-type="submit"
        value="Enviar Cadastro"
        type="is-success"
        @click="submitForm"
      >
        Enviar Cadastro
      </b-button>
    </section>
  </template>
  
  
  <style scoped>
  </style>
  