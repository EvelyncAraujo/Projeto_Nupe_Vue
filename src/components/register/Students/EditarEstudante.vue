<template>
    <div class="columns is-vcentered">
      <div class="column has-text-centered">
        <img src="../../../assets/registration.svg" width="300px" />
      </div>
      <div class="column">
        <h3 class="subtitle has-text-centered">
          <b-icon icon="map-marker"></b-icon>
          Editar estudante
        </h3>
  
        <form @submit.prevent="atualizar">
          <b-field label="Matrícula" :label-position="labelPosition">
            <b-input
              v-model="currentStudent.registration"
              placeholder="Ex: 2019456952"
              required
            ></b-input>
          </b-field>
          <b-field label="Data de ingresso" :label-position="labelPosition">
            <b-datepicker
              placeholder="Clique para selecionar"
              icon="calendar-today"
              v-model="currentStudent.ingress_date"
              trap-focus
              locale="pt-BR"
              width="60%"
              required
            >
            </b-datepicker>
          </b-field>
  
          <b-field label="Conta pessoal" :label-position="labelPosition">
            <b-input
              v-model="currentStudent.personal_info.id"
              type="text"
              placeholder="Conta pessoal"
              required
            />
          </b-field>
  
          <b-field label="Campus" :label-position="labelPosition">
            <b-input
              class=""
              placeholder="Campus"
              v-model="currentStudent.academic_education_campus"
              required
            >
            </b-input>
          </b-field>
  
          <b-field
            label="Adicione os responsáveis"
            :label-position="labelPosition"
          >
            <b-taginput
              v-model="responsibles"
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
                  type="is-danger"
                  @click="confirmCustomDelete"
                  expanded
                >
                  Excluir
                </b-button>
              </div>
            </b-field>
          </b-field>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { useAxios } from "vue-axios"; // Exemplo de como importar o Axios
  import { useToast, useDialog } from "buefy";
  
  export default {
    props: {
      student: Object,
    },
    setup(props, { emit }) {
      const labelPosition = ref("on-border");
      const currentStudent = ref({});
      const responsibles = ref([]);
      const axios = useAxios();
      const toast = useToast();
      const dialog = useDialog();
  
      onMounted(() => {
        currentStudent.value = props.student;
        responsibles.value = currentStudent.value.responsibles;
      });
  
      const formatDate = (date) => {
        const dateArray = [];
        dateArray.push(date.getDate(), date.getMonth() + 1, date.getFullYear());
        return dateArray.reverse().join("-");
      };
  
      const atualizar = async () => {
        const date = formatDate(currentStudent.value.ingress_date);
        try {
          await axios.patch(
            `/api/v1/student/${currentStudent.value.registration}/`,
            {
              registration: currentStudent.value.registration,
              person: currentStudent.value.personal_info.id,
              academic_education_campus:
                currentStudent.value.academic_education_campus,
              responsibles: responsibles.value,
              ingress_date: date,
            }
          );
          toast.open({
            message: "Estudante atualizado com sucesso.",
            type: "is-primary",
          });
          emit("cancelEdit");
        } catch (error) {
          console.log(error);
          toast.open({
            message: "Erro ao atualizar o Estudante!",
            type: "is-danger",
          });
        }
      };
  
      const deleteStudent = async () => {
        try {
          await axios.delete(
            `/api/v1/student/${currentStudent.value.registration}/`
          );
          toast.open({
            message: "Estudante deletado com sucesso.",
            type: "is-primary",
          });
          window.location.reload();
        } catch (error) {
          toast.open({
            message: "Erro ao deletar estudante!",
            type: "is-danger",
          });
        }
      };
  
      const confirmCustomDelete = () => {
        dialog.confirm({
          title: "Deletar estudante",
          message:
            "Tem certeza que deseja deletar o " +
            currentStudent.value.personal_info.first_name +
            " " +
            currentStudent.value.personal_info.last_name +
            "? A ação é irreversível",
          confirmText: "Deletar Estudante",
          type: "is-danger",
          hasIcon: true,
          onConfirm: deleteStudent,
        });
      };
  
      return {
        labelPosition,
        currentStudent,
        responsibles,
        atualizar,
        confirmCustomDelete,
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  