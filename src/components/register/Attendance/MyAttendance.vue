 <script>
  import { ref, onMounted } from "vue";
  
  export default {
    setup(props, { emit }) {
      const filter = ref("status");
      const searchQuery = ref("");
      const currentPage = ref(1);
      const perPage = ref(5);
      const data = ref([]);
      const backup = ref([]);
  
      const sortable = true;
      const hoverable = true;
      const focusable = true;
      const scrollable = true;
      const isPaginated = true;
      const isPaginationSimple = false;
      const isPaginationRounded = false;
      const paginationPosition = "bottom";
      const defaultSortDirection = "asc";
      const sortIcon = "arrow-up";
  
      const columns = [
        { field: "id", label: "ID" },
        { field: "public_annotation", label: "Anotação pública" },
        { field: "private_annotation", label: "Anotação privada" },
        { field: "group_annotation", label: "Anotação grupal" },
        { field: "attendance", label: "Atendimento" },
        { field: "attendance_at", label: "Atendimento em" },
        { field: "updated_at", label: "Atualizado em" },
      ];
  
      // Função para buscar todos os atendimentos ao montar o componente
      const fetchAllAttendances = async () => {
        data.value = await fetch("/api/v1/attendance/my/").then((res) => res.json());
        backup.value = data.value;
      };
  
      const searchAttendances = async () => {
        const searchResults = await fetch(
          `/api/v1/attendance/my?${filter.value}=${searchQuery.value}`
        ).then((res) => res.json());
  
        if (searchResults.length > 0) {
          data.value = searchResults;
        } else {
          this.$buefy.toast.open({
            message: "Sem resultados válidos!",
            type: "is-danger",
          });
        }
      };
  
      const personalAttendance = (value) => {
        emit("personalAttendance", value);
      };
  
      onMounted(fetchAllAttendances);
  
      return {
        filter,
        searchQuery,
        currentPage,
        perPage,
        data,
        sortable,
        hoverable,
        focusable,
        scrollable,
        isPaginated,
        isPaginationSimple,
        isPaginationRounded,
        paginationPosition,
        defaultSortDirection,
        sortIcon,
        columns,
        searchAttendances,
        personalAttendance,
      };
    },
  };
  </script>
  <template>
    <section>
      <div class="block">
        <div class="title">Admin / atendimento</div>
      </div>
      <h2 class="subtitle">Todos os meus atendimentos</h2>
  
      <div class="level">
        <span class="level-left">
          <b-input
            class="level-item"
            id="searchInput"
            type="search"
            icon="magnify"
            icon-clickable
            placeholder="Pesquise na lista"
            v-model="searchQuery"
          />
          <b-button class="is-primary" @click="searchAttendances">
            Pesquisar
          </b-button>
        </span>
  
        <span class="level-right">
          <b-button
            @click="personalAttendance(false)"
            type="is-primary"
            class="level-item is-primary"
          >
            Todos os atendimentos
          </b-button>
        </span>
      </div>
  
      <div class="level">
        <div class="block">
          <b-radio v-model="filter" native-value="status"> Status </b-radio>
          <b-radio v-model="filter" native-value="student_name">
            Nome do estudante
          </b-radio>
          <b-radio v-model="filter" native-value="student_last_name">
            Sobrenome do estudante
          </b-radio>
          <b-radio v-model="filter" native-value="attendants"> Atendentes </b-radio>
          <b-radio v-model="filter" native-value="attendant_name">
            Nome do atendente
          </b-radio>
          <b-radio v-model="filter" native-value="attendant_last_name">
            Sobrenome do atendente
          </b-radio>
          <b-radio v-model="filter" native-value="severity"> Gravidade </b-radio>
          <b-radio v-model="filter" native-value="student"> Estudante </b-radio>
          <b-radio v-model="filter" native-value="search">
            Qualquer correspondência
          </b-radio>
        </div>
      </div>
  
      <b-table
        :data="data"
        :paginated="isPaginated"
        :per-page="perPage"
      
        :pagination-simple="isPaginationSimple"
        :pagination-position="paginationPosition"
        :default-sort-direction="defaultSortDirection"
        :pagination-rounded="isPaginationRounded"
        :sort-icon="sortIcon"
        :hoverable="hoverable"
        :focusable="focusable"
        :scrollable="scrollable"
      >
        <template v-slot="props">
          <b-table-column
            v-for="(column, index) in columns"
            :key="index"
            :field="column.field"
            :label="column.label"
            :sortable="sortable"
          >
            {{ props.row[column.field] }}
          </b-table-column>
        </template>
      </b-table>
    </section>
  </template>
  
 
  <style>
  </style>
  