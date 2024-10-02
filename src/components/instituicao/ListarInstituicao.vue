<template>
    <b-table :data="institutions">
      <template v-slot="props">
        <b-table-column label="ID"> {{ props.row.id }} </b-table-column>
        <b-table-column label="Nome"> {{ props.row.name }}</b-table-column>
  
        <b-table-column custom-key="actions" label="Ações">
          <b-button
            type="is-primary"
            icon-left="pencil"
            @click="editInstitution(props.row)"
          ></b-button>
          <b-button
            type="is-danger"
            icon-left="delete"
            @click="deleteInstitution(props.row)"
          ></b-button>
        </b-table-column>
      </template>
    </b-table>
  </template>
  
  <script>
  import { useStore } from "vuex";
  import { onMounted } from "vue";
  import axios from "axios";
  
  export default {
    setup(_, { emit }) {
      const store = useStore();
  
      // Acessa o estado institutions usando a função computada do Vuex
      const institutions = store.state.institution.institutions;
  
      const fetchAllInstitutions = () => {
        store.dispatch("institution/fetchAllInstitutions");
      };
  
      const editInstitution = (institution) => {
        emit("editInstitution", institution);
      };
  
      const deleteInstitution = async (institution) => {
        try {
          await axios.delete(`/api/v1/institution/${institution.id}/`);
          store.dispatch("institution/fetchAllInstitutions");
        } catch (error) {
          console.log(error);
        }
      };
  
      // Carrega as instituições quando o componente é montado
      onMounted(() => {
        fetchAllInstitutions();
      });
  
      return {
        institutions,
        editInstitution,
        deleteInstitution,
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  