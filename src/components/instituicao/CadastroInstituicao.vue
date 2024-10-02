 <script setup>
  import { useStore } from "vuex";
  import { ref,  watch, onMounted } from 'vue';
  
  const props = defineProps(['institution'])
      const store = useStore();
      const currentInstitution = ref({ ...props.institution });
      const fetchAllInstitutions = () => {store.dispatch("institution/fetchAllInstitutions");};
      const createInstitution = async (institution) => {return store.dispatch("institution/createInstitution", institution);};
      const save = async () => {
        try {
          if (props.institution.id) {
            await store.$axios.$patch(
              `api/v1/institution/${props.institution.id}/`,
              currentInstitution.value
            );
            // console.log('editar')
          } else {
            console.log("criar");
            await createInstitution(currentInstitution.value);
          }
          store.$buefy.toast.open({
            message: "Sucesso!",
            type: "is-success",
          });
        } catch (error) {
          store.$buefy.toast.open({
            message: "Algo está Errado!",
            type: "is-danger",
          });
          console.log(error);
        }
    
      };
  

      onMounted(() => {
    fetchAllInstitutions();
    createInstitution(currentInstitution.value);
  })  
   watch(
        () => props.institution,
        (newVal) => {
          currentInstitution.value = { ...newVal };
        }
      );
  
    
    
  </script>
  <template>
    <section>
      <b-field label="Nome">
        <b-input
          v-model="currentInstitution.name"
          minlength="1"
          maxlength="50"
          required
          placeholder="Nome da Instituição"
          type="text"
        ></b-input>/ 
       
      </b-field>
  
      <b-button class="is-primary" @click="save">Cadastrar</b-button>
    </section>
  </template>
  
 
  