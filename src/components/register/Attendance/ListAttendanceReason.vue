 <script>
  import { ref, onMounted } from "vue";
  
  export default {
    setup(props, { emit }) {
      const filter = ref("search");
      const searchQuery = ref("");
      const currentPage = ref(1);
      const perPage = ref(5);
      const data = ref([]);
      const backup = ref([]);
  
      // Propriedades da tabela
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
        { field: "id", label: "Id" },
        { field: "name", label: "Razão do atendimento" },
        { field: "description", label: "Descrição" },
      ];
  
      // Carregar todas as razões de atendimento ao montar o componente
      const fetchAllAttendanceReasons = async () => {
        data.value = await fetch("/api/v1/attendance_reason/").then((res) =>
          res.json()
        );
        backup.value = data.value;
      };
  
      const searchAttendanceReasons = async () => {
        const searchResults = await fetch(
          `/api/v1/attendance_reason?${filter.value}=${searchQuery.value}`
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
  
      const createAttendanceReason = () => {
        emit("createAttendanceReason");
      };
  
      const editAttendanceReason = (attendanceReason) => {
        emit("editAttendanceReason", attendanceReason);
      };
  
      const deleteAttendanceReason = async (attendanceReason) => {
        await fetch(`/api/v1/attendance_reason/${attendanceReason.id}/`, {
          method: "DELETE",
        });
        window.location.reload();
      };
  
      const confirmCustomDelete = (attendanceReason) => {
        this.$buefy.dialog.confirm({
          title: "Deletar razão do atendimento",
          message:
            "Tem certeza que deseja deletar o " +
            attendanceReason.name +
            "? A ação é irreversível",
          confirmText: "Deletar Razão do Atendimento",
          type: "is-danger",
          hasIcon: true,
          onConfirm: () =>
            this.$buefy.toast.open({
              message: "Razão de atendimento deletado com sucesso!",
              type: "is-primary",
            }) && deleteAttendanceReason(attendanceReason),
        });
      };
  
      onMounted(fetchAllAttendanceReasons);
  
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
        searchAttendanceReasons,
        createAttendanceReason,
        editAttendanceReason,
        deleteAttendanceReason,
        confirmCustomDelete,
      };
    },
  };
  </script>
  <template>
    <div>
      <div class="block">
        <h2 class="title">Admin / razão do atendimento</h2>
      </div>
      <h2 class="subtitle">Todos as razões de atendimento</h2>
  
      <div class="level">
        <span class="level-left">
          <b-input
            class="level-item"
            id="searchInput"
            type="search"
            icon="magnify"
            placeholder="Pesquise na lista"
            v-model="searchQuery"
          />
  
          <b-button @click="searchAttendanceReasons" class="is-primary">
            Pesquisar
          </b-button>
        </span>
  
        <span class="level-right">
          <b-button
            @click="createAttendanceReason"
            type="is-primary"
            class="level-item"
          >
            Criar razão de atendimento
          </b-button>
        </span>
      </div>
  
      <div class="level">
        <span class="level-left">
          <div class="block">
            <b-radio v-model="filter" native-value="father_reason">
              Razão pai
            </b-radio>
            <b-radio v-model="filter" native-value="search">
              Qualquer correspondência
            </b-radio>
          </div>
        </span>
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
          <b-table-column custom-key="actions" label="Ações">
            <b-field>
              <b-button
                type="is-primary"
                icon-left="pencil"
                @click="editAttendanceReason(props.row)"
              />
            </b-field>
            <b-field>
              <b-button
                type="is-danger"
                icon-left="delete"
                @click="confirmCustomDelete(props.row)"
              />
            </b-field>
          </b-table-column>
        </template>
      </b-table>
    </div>
  </template>
  
 