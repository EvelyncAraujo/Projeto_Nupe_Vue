<script setup>
  import { ref, onMounted } from "vue";
  
  import { useCampusStore } from "@/stores/campus";

  const emit = defineEmits(['editCampus'])
  const campusStore = useCampusStore()

  const isPaginated = ref(true);
  const perPage = ref(10);
  
  const editCampus = (campus) => {
    emit("editCampus", campus);
  };
  
  const deleteCampus = async (campus) => {
    try {
      await campusStore.deleteCampus(campus.id)
    } catch (error) {
      console.error(error);
    }
  };

  onMounted(async () => {
    await campusStore.fetchAllCampus()
  });

  </script>
  <template>
    <b-table :data="campusStore.campus" :paginated="isPaginated" :per-page="perPage">
      <b-table-column v-slot="props" class="nome" label="Nome">
          {{ props.row.name }}
        </b-table-column>
        <b-table-column v-slot="props" class="inst" label="Instituição">
          {{ props.row.institution }}
        </b-table-column>
        <b-table-column v-slot="props" class="end" label="Endereço">
          {{ props.row.address }}
        </b-table-column>
        <b-table-column v-slot="props" custom-key="actions" class="acoes" label="Ações">
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
    </b-table>
  </template>
  <style>


</style>
  