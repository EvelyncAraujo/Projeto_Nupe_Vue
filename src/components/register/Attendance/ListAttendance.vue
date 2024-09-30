<script >
  import { ref, onMounted } from 'vue';
  import axios from 'axios';// Supondo que use um composable para axios, ajuste se necessário.
  
  export default {
    setup(props, { emit }) {
      const filter = ref('status');
      const sortable = ref(true);
      const hoverable = ref(true);
      const focusable = ref(true);
      const scrollable = ref(true);
     const isPaginated = ref(true);
      const isPaginationSimple = ref(false);
      const isPaginationRounded = ref(false);
      const paginationPosition = ref('bottom');
      const defaultSortDirection = ref('asc');
      const sortIcon = ref('arrow-up');
      const currentPage = ref(1);
      const perPage = ref(5);
      const data = ref([]);
      const backup = ref([]);
  

  
      const fetchAllAttendances = async () => {
        data.value = await axios.get('/api/v1/attendance/');
        backup.value = data.value;
      };
  
      const searchAttendances = async () => {
        const search = await axios.get(`/api/v1/attendance?${filter.value}=${document.getElementById('searchInput').value}`);
        if (search.length > 0) {
          data.value = search;
        } else {
          this.$buefy.toast.open({
            message: 'Sem resultados válidos!',
            type: 'is-danger',
          });
        }
      };
  
      const editAttendance = (attendance) => {
        emit('editAttendance', attendance);
      };
  
      const createAttendance = (value) => {
        emit('createAttendance', value);
      };
  
      const personalAttendance = (value) => {
        emit('personalAttendance', value);
      };
  
      const reportAttendance = (value) => {
        emit('reportAttendance', value);
      };
  
      const deleteAttendance = async (attendance) => {
        try {
          await axios.delete(`/api/v1/attendance/${attendance.id}/`);
        } catch (err) {
          console.log(err);
        }
        location.reload();
      };
  
      const confirmCustomDelete = (attendance) => {
        this.$buefy.dialog.confirm({
          title: 'Deletar atendimento',
          message: `Tem certeza que deseja deletar o ${attendance.attendance}? A ação é irreversível`,
          confirmText: 'Deletar Atendimento',
          type: 'is-danger',
          hasIcon: true,
          onConfirm: () => {
            this.$buefy.toast.open({
              message: 'Atendimento deletado com sucesso!',
              type: 'is-primary',
            });
            deleteAttendance(attendance);
          },
        });
      };
  
      onMounted(() => {
        fetchAllAttendances();
      });
  
      return {
        filter,
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
        currentPage,
        perPage,
        data,
        fetchAllAttendances,
        searchAttendances,
        editAttendance,
        createAttendance,
        personalAttendance,
        reportAttendance,
        deleteAttendance,
        confirmCustomDelete,
      };
    },
  };
  </script><template>
    <section>
      <div class="block">
        <h2 class="title">Admin / atendimento</h2>
      </div>
      <h2 class="subtitle">Todos os atendimentos</h2>
  
      <div class="level">
        <span class="level-left">
          <b-input
            class="level-item"
            id="searchInput"
            type="search"
            icon="magnify"
            icon-clickable
            placeholder="Pesquise na lista"
          />
          <b-button @click="searchAttendances" class="is-primary">Pesquisar</b-button>
        </span>
  
        <span class="level-right">
          <b-button @click="createAttendance(true)" type="is-primary" class="level-item is-primary">
            Criar atendimento
          </b-button>
          <b-button @click="personalAttendance(true)" class="level-item is-primary is-outlined">
            Meus atendimentos
          </b-button>
          <b-button @click="reportAttendance(true)" class="level-item is-primary is-outlined">
            Reporte dos atendimentos
          </b-button>
        </span>
      </div>
  
      <div class="level">
        <div class="block">
          <b-radio v-model="filter" native-value="status"> Status </b-radio>
          <b-radio v-model="filter" native-value="student"> Estudante </b-radio>
          <b-radio v-model="filter" native-value="student_name"> Nome do estudante </b-radio>
          <b-radio v-model="filter" native-value="student_last_name"> Sobrenome do estudante </b-radio>
          <b-radio v-model="filter" native-value="attendants"> Atendentes </b-radio>
          <b-radio v-model="filter" native-value="attendant_name"> Nome do atendente </b-radio>
          <b-radio v-model="filter" native-value="attendant_last_name"> Sobrenome do atendente </b-radio>
          <b-radio v-model="filter" native-value="severity"> Gravidade </b-radio>
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
          <b-table-column label="ID">
            {{ props.row["id"] }}
          </b-table-column>
          <b-table-column label="Status">
            {{ props.row["status"] }}
          </b-table-column>
  
          <b-table-column label="Atendentes">
            <span v-for="(index, key) in props.row['attendants']" :key="key">
              {{ index.full_name }}
            </span>
          </b-table-column>
  
          <b-table-column label="Estudante">
            {{ props.row["student"].full_name }}
          </b-table-column>
  
          <b-table-column custom-key="actions" label="Ações">
            <b-field>
              <b-button type="is-primary" icon-left="pencil" @click="editAttendance(props.row)"></b-button>
            </b-field>
            <b-field>
              <b-button type="is-danger" icon-left="delete" @click="confirmCustomDelete(props.row)"></b-button>
            </b-field>
          </b-table-column>
        </template>
      </b-table>
    </section>
  </template>
  
  
  
  <style >
  /* Seu estilo aqui */
  </style>
  