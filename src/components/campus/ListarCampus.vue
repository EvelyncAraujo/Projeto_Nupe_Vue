<script>
  import { ref, computed, onMounted } from "vue";
  import { useStore } from "vuex";
  import axios from "axios"; // Assuming you're using axios for HTTP requests
  
  export default {
    props: {},
    setup(props, { emit }) {
      const store = useStore();
      const isPaginated = ref(true);
      const perPage = ref(10);
  
      const campus = computed(() => store.state.campus);
  
      const editCampus = (campus) => {
        emit("editCampus", campus);
      };
  
      const deleteCampus = async (campus) => {
        try {
          await axios.delete(`/api/v1/campus/${campus.id}/`);
          // Reload the campus data after deletion
          store.dispatch("campus/fetchAllCampus");
        } catch (error) {
          console.error(error);
        }
      };
  
      onMounted(() => {
        store.dispatch("campus/fetchAllCampus");
      });
  
      return {
        isPaginated,
        perPage,
        campus,
        editCampus,
        deleteCampus,
        
      };
    },
  };
  </script>
  <template>
    <b-table :data="campus" :paginated="isPaginated" :per-page="perPage">
      <template v-slot="props">
        <b-table-column label="Nome">
          {{ props.row["name"] }}
        </b-table-column>
        <b-table-column label="Instituição">
          {{ props.row["institution"].name }}
        </b-table-column>
        <b-table-column label="Endereço">
          {{ props.row["address"] }}
        </b-table-column>
        <b-table-column custom-key="actions" label="Ações">
          <b-button
            type="is-primary"
            icon-left="pencil"
            @click="editCampus(props.row)"
          ></b-button>
          <b-button
            type="is-danger"
            icon-left="delete"
            @click="deleteCampus(props.row)"
          ></b-button>
        </b-table-column>
      </template>
    </b-table>
  </template>
  
  
  
  <style>
  </style>
  