<script>
  import { computed } from "vue";
  import HeroBar from "@/components/templates/HeroBar";
  import TitleBar from "@/components/templates/TitleBar";
  import CardComponent from "@/components/templates/CardComponent";
  import ListagemCursos from "@/components/curso/ListagemCursos";
  
  export default {
    components: {
      ListagemCursos,
      TitleBar,
      HeroBar,
      CardComponent,
    },
    setup() {
      const titleStack = computed(() => ["Admin", "Listagem de Cursos"]);
  
      return {
        titleStack,
      };
    },
  };
  </script>
  
  <template>
    <div>
      <title-bar :title-stack="titleStack" />
  
      <hero-bar>
        Listagem de Cursos
        <template v-slot:right>
          <router-link to="/" class="button"> Dashboard </router-link>
        </template>
      </hero-bar>
      <card-component
        class="has-table has-mobile-sort-spaced"
        title="Cursos"
        icon="puzzle"
      >
        <listagem-cursos />
      </card-component>
    </div>
  </template>
  
  
  