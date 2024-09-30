  <script>
  import { ref } from 'vue';
  import { useAxios } from 'vue-axios'; // Exemplo de como importar o Axios (dependerá da sua implementação)
  import { useToast } from 'buefy';
  
  export default {
    setup(props, { emit }) {
      const labelPosition = ref("is-centered");
      const ingress_date = ref(new Date());
      const academic_education_campus = ref("");
      const person = ref("");
      const registration = ref("");
      const responsables = ref([]);
  
      const axios = useAxios();
      const toast = useToast();
  
      const formatDate = (date) => {
        const dateArray = [];
        dateArray.push(date.getDate(), date.getMonth() + 1, date.getFullYear());
        return dateArray.reverse().join("-");
      };
  
      const cancelCreate = (value) => {
        emit("createStudent", value);
      };
  
      const createStudent = async () => {
        const date = formatDate(ingress_date.value);
        try {
          await axios.post("/api/v1/student/", {
            person: person.value,
            academic_education_campus: academic_education_campus.value,
            responsibles: responsables.value,
            registration: registration.value,
            ingress_date: date,
          });
        } catch (error) {
          console.log(error);
          toast.open({
            message: "Ocorreu um erro!",
            type: "is-danger",
          });
        }
      };
  
      return {
        labelPosition,
        ingress_date,
        academic_education_campus,
        person,
        registration,
        responsables,
        createStudent,
        cancelCreate,
      };
    },
  };
  </script><template>
    <section style="margin-left: 3%; margin-right: 2%">
      <h3 class="subtitle">Cadastro de Estudante</h3>
      <form @submit.prevent="createStudent">
        <b-field label="Matrícula">
          <b-input v-model="registration" placeholder="Ex: 2019456952"></b-input>
        </b-field>
        <b-field label="Data de ingresso" :label-position="labelPosition">
          <b-datepicker
            placeholder="Clique para selecionar"
            icon="calendar-today"
            v-model="ingress_date"
            trap-focus
            locale="pt-BR"
            width="60%"
          >
          </b-datepicker>
        </b-field>
  
        <b-field label="Conta pessoal">
          <b-input v-model="person" type="text" placeholder="Conta pessoal" />
        </b-field>
  
        <b-field label="Campus">
          <b-input
            class=""
            placeholder="Campus"
            v-model="academic_education_campus"
          >
          </b-input>
        </b-field>
  
        <b-field label="Adicione os responsáveis">
          <b-taginput
            v-model="responsables"
            ellipsis
            icon="label"
            placeholder="Nome dos responsáveis"
            aria-close-label="Delete esse item"
          >
          </b-taginput>
        </b-field>
        <b-field>
          <b-field class="columns">
            <div class="column is-one-half">
              <b-button native-type="submit" class="is-primary" expanded
                >Cadastrar</b-button
              >
            </div>
            <div class="column is-one-half">
              <b-button
                type="is-primary is-outlined"
                @click="cancelCreate(false)"
                expanded
              >
                Cancelar
              </b-button>
            </div>
          </b-field>
        </b-field>
      </form>
    </section>
  </template>
  

  
  <style scoped>
  </style>
  