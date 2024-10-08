  <script setup>
  import { reactive, computed } from "vue";

  import HeroBar from "@/components/templates/HeroBar";
  import TitleBar from "@/components/templates/TitleBar";
  import CardComponent from "@/components/templates/CardComponent";
  
  import CadastroInstituicao from "@/components/instituicao/CadastroInstituicao";
  import ListarInstituicao from "@/components/instituicao/ListarInstituicao";
  
        const state = reactive({
        editing: false,
        creating: false,
        currentInstitution: {},
      });
  
      const titleStack = computed(() => ["Admin", "Listagem de Instituição"]);
  
      const editInstitution = (institution) => {
        state.editing = true;
        Object.assign(state.currentInstitution, institution);
      };
  
      const createInstitution = () => {
        state.creating = true;
        state.editing = false;
      };
  
      const reset = () => {
        state.creating = false;
        state.editing = false;
        state.currentInstitution = {};
      };
  
    
      
    
  </script>
  <template>
    <div class="section is-main-section">
      <title-bar :title-stack="titleStack" />
  
      <hero-bar>
        Gerenciamento de Instituição
        <template #right>
          <b-button
            v-if="!creating && !editing"
            type="is-success"
            icon-left="plus"
            @click="createInstitution"
          />
          <b-button
            v-else
            type="is-primary"
            icon-left="arrow-left-bold"
            @click="reset"
          />
        </template>
      </hero-bar>
      <card-component
        class="has-table has-mobile-sort-spaced"
        title="Câmpus"
        icon="puzzle"
      >
        <cadastro-instituicao v-if="editing" :institution="currentInstitution" />
        <cadastro-instituicao
          v-else-if="creating"
          :institution="currentInstitution"
        />
        <listar-instituicao v-else @editInstitution="editInstitution" />
      </card-component>
    </div>
  </template>
  <style scoped></style>
