<template>
  <div>
    <div class="block">
      <h2 class="title">Lista de Setores</h2>
    </div>
    
    <h2 class="subtitle">Todos os setores</h2>
    
    <div class="level">
      <span class="level-left">
        <b-input
          class="level-item"
          id="searchInput"
          type="text"
          icon="magnify"
          placeholder="Pesquise na lista"
          v-model="search"
        />
        <b-button class="is-primary" @click="searchSectors">
          Pesquisar
        </b-button>
      </span>
      <span class="level-right">
        <b-button @click="createSector" type="is-primary" class="level-item">
          Criar Setor
        </b-button>
      </span>
    </div>

    <!-- Tabela de Setores -->
    <b-table
      id="table"
      :data="data"
      :paginated="isPaginated"
      :per-page="perPage"
    >
      <b-table-column v-slot="props" field="name" label="Setor" :sortable="true">
        {{ props.row.name }}
      </b-table-column>

      <!-- Coluna de Ações -->
      <b-table-column v-slot="props" label="Ações">
        <b-button
            type="is-primary"
            icon-left="pencil"
            @click="editSector(props.row)"
          ></b-button>
          <b-button
            type="is-danger"
            icon-left="delete"
            @click="deleteSector(props.row)"
          ></b-button>
      </b-table-column>
    </b-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const emit = defineEmits(['createSector', 'editSector'])

const data = ref([]);
const search = ref('');
const perPage = ref(10);
const isPaginated = ref(true);

// Funções de API
const fetchAllSectors = async () => {
  try {
    const { data: sectors } = await axios.get("/api/v1/sector/");
    data.value = sectors;
  } catch (error) {
    console.error("Erro ao buscar setores:", error);
  }
};

// Função de pesquisa
const searchSectors = async () => {
  try {
    const { data: sectors } = await axios.get(`/api/v1/sector?search=${search.value}`);
    data.value = sectors.length > 0 ? sectors : [];
    if (sectors.length === 0) {
      alert("Nenhum setor encontrado.");
    }
  } catch (error) {
    console.error("Erro ao buscar setores:", error);
  }
};

// Função para criar setor
const createSector = () => {
  emit('createSector')
};

// Função para editar setor
  const editSector = (sector) => {
    emit("editSector", sector);
  };

// Função para excluir setor
   const deleteSector = async (sector) => {
    try {
      await axios.delete(`/api/v1/sector/${sector.id}/`);
      fetchAllSectors();
    } catch (error) {
      console.error(error);
    }
  };

// Quando o componente for montado, buscar os dados
onMounted(() => {
  fetchAllSectors();
});
</script>