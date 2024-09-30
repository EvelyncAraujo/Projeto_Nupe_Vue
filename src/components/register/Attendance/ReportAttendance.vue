 <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup(props, { emit }) {
      const filter = ref(["status"]);
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
        { field: "attendance_reason", label: "Razão do atendimento" },
        { field: "attendance_severity", label: "Gravidade" },
        { field: "student", label: "Estudante" },
        { field: "account_attendance", label: "Atendente" },
        { field: "status", label: "Status" },
        { field: "opened_at", label: "Aberto em" },
        { field: "closed_at", label: "Fechado em" },
      ];
  
      // Função para buscar todos os atendimentos ao montar o componente
      const fetchAllAttendances = async () => {
        data.value = await fetch("/api/v1/attendance/report/").then((res) => res.json());
        backup.value = data.value;
      };
  
      const searchAttendances = () => {
        const inputLowerCase = searchQuery.value.toLowerCase();
        if (inputLowerCase !== "") {
          const matchingItems = [];
          filter.value.forEach((filterValue) => {
            backup.value.forEach((attendance) => {
              if (attendance[filterValue]) {
                const attendanceValue = attendance[filterValue].toLowerCase();
                if (attendanceValue.includes(inputLowerCase)) {
                  matchingItems.push(attendance);
                }
              }
            });
          });
          data.value = matchingItems;
        } else {
          data.value = backup.value;
        }
      };
  
      const reportAttendance = (value) => {
        emit("reportAttendance", value);
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
        reportAttendance,
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
            type="search"
            id="searchInput"
            icon="magnify"
            icon-clickable
            placeholder="Pesquise na lista"
            v-model="searchQuery"
          />
          <b-button class="is-primary" @click="searchAttendances">Pesquisar</b-button>
        </span>
        <span class="level-right">
          <b-button
            @click="reportAttendance(false)"
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
          <b-radio v-model="filter" native-value="student_name"> Nome do estudante </b-radio>
          <b-radio v-model="filter" native-value="student_last_name"> Sobrenome do estudante </b-radio>
          <b-radio v-model="filter" native-value="attendants"> Atendentes </b-radio>
          <b-radio v-model="filter" native-value="attendant_name"> Nome do atendente </b-radio>
          <b-radio v-model="filter" native-value="attendant_last_name"> Sobrenome do atendente </b-radio>
          <b-radio v-model="filter" native-value="severity"> Gravidade </b-radio>
          <b-radio v-model="filter" native-value="student"> Estudante </b-radio>
          <b-radio v-model="filter" native-value="search"> Qualquer correspondência </b-radio>
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
            <span v-if="column.field == 'student'">
              <span v-for="(value, index) in props.row[column.field]" :key="index">
                {{ index }}: {{ value }}
              </span>
            </span>
            <span v-else>
              {{ props.row[column.field] }}
            </span>
          </b-table-column>
        </template>
      </b-table>
    </section>
  </template>
  
 
  
  <style scoped>
  </style>
  