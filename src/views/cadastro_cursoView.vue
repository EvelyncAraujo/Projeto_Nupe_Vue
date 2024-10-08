 <script>
  import { computed } from "vue";
  import HeroBar from "@/components/templates/HeroBar";
  import TitleBar from "@/components/templates/TitleBar";
  import CardComponent from "@/components/templates/CardComponent";
  import CadastroCurso from "@/components/curso/CadastroCurso";
  
  export default {
    components: {
      CadastroCurso,
      TitleBar,
      HeroBar,
      CardComponent,
    },
    setup() {
      const titleStack = computed(() => ["Admin", "Cadastro de Curso"]);
  
      return {
        titleStack,
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  <template>
    <div>
      <title-bar :title-stack="titleStack" />
  
      <hero-bar>
        Cadastro de Curso
        <template v-slot:right>
          <router-link to="/" class="button"> Dashboard </router-link>
        </template>
      </hero-bar>
  
      <card-component
        class="has-table has-mobile-sort-spaced"
        title="Curso"
        icon="puzzle"
      >
        <cadastro-curso />
      </card-component>
    </div>
  </template>

  <style scoped></style>
  
 
  