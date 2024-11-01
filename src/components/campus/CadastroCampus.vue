<script setup>
  // import { axios } from 'axios';
  import { useStore } from 'vuex';
  import { ref, computed, watch, onMounted } from 'vue';
  
  const props = defineProps(['campus'])
  const store = useStore();
  const currentCampus = ref({ ...props.campus });
  const institutions = computed(() => store.state.institution.institutions);
  const locations = computed(() => store.state.location.locations)  
  const fetchAllInstitutions = () => store.dispatch('institution/fetchAllInstitutions');
  const fetchAllLocations = () => store.dispatch('location/fetchAllLocations');
  const createCampus = (campus) => store.dispatch('campus/createCampus', campus)  
  const save = async () => {
    try {
      // const { data } = data;
      if (props.campus.id) {
        await store.axios.patch(`api/v1/campus/${props.campus.id}/`, currentCampus.value);
      } else {
        await createCampus(currentCampus.value);
      }
      store._vm.$buefy.toast.open({
        message: 'Sucesso!',
        type: 'is-success',
      });
    } catch (error) {
      store._vm.$buefy.toast.open({
        message: 'Algo está Errado!',
        type: 'is-danger',
      });
    }
  } 
  onMounted(() => {
    fetchAllInstitutions();
    fetchAllLocations();
  })  
  watch(
    () => props.campus,
    (newCampus) => {
      currentCampus.value = { ...newCampus };
    }
  );
  
  </script>
  <template>
    <section>
      <b-field label="Nome">
        <b-input
          v-model="currentCampus.name"
          minlength="1"
          maxlength="50"
          required
          placeholder="Nome do Campus"
          type="text"
        ></b-input>
      </b-field>
  
      <b-field label="CNPJ">
        <b-input
          v-model="currentCampus.cnpj"
          minlength="18"
          maxlength="18"
          required
          placeholder="CNPJ do Campus"
          type="text"
        ></b-input>
      </b-field>
  
      <b-field label="Endereço">
        <b-input
          v-model="currentCampus.address"
          minlength="1"
          maxlength="75"
          required
          placeholder="Endereço do Campus"
          type="text"
        ></b-input>
      </b-field>
  
      <b-field label="Número">
        <b-input
          v-model="currentCampus.number"
          minlength="1"
          maxlength="10"
          required
          placeholder="Número do Campus"
          type="text"
        ></b-input>
      </b-field>
  
      <b-field label="Website">
        <b-input
          v-model="currentCampus.website"
          maxlength="50"
          placeholder="Site do Campus"
          type="url"
        ></b-input>
      </b-field>
  
      <b-field label="Localização">
        <b-select
          v-model="currentCampus.location"
          placeholder="Selecione a Localização"
        >
          <option v-for="loc of locations" :key="loc.id" :value="loc.id">
            {{ loc.name }}
          </option>
        </b-select>
      </b-field>
  
      <b-field label="Selecione a Instituição">
        <b-select
          v-model="currentCampus.institution"
          placeholder="Selecione a Instituição"
        >
          <option v-for="inst of institutions" :key="inst.id" :value="inst.id">
            {{ inst.name }}
          </option>
        </b-select>
      </b-field>
  
      <b-button class="is-primary" @click="save">Cadastrar</b-button>
    </section>
  </template>
  
  
  
  <style scoped></style>
  