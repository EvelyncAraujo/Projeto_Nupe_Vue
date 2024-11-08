<script setup>
  import { reactive, ref, computed } from "vue";
  import HeroBar from "@/components/templates/HeroBar";
  import TitleBar from "@/components/templates/TitleBar";
  // import CardComponent from "@/components/templates/CardComponent";
  import ListarCampus from "@/components/campus/ListarCampus";
  import CadastroCampus from "@/components/campus/CadastroCampus";

  const editing = ref(false);
  const creating = ref(false);
  const currentCampus = reactive({});

  const titleStack = computed(() => ["Admin", "Listagem de Campus"]);

  const editCampus = (campus) => {
    editing.value = true;
    Object.assign(currentCampus, campus);
    currentCampus.institution = currentCampus.institution.id;
    // currentCampus.location = currentCampus.location;
  };

  const createCampus = () => {
    creating.value = true;
    editing.value = false;
  };

  const reset = () => {
    creating.value = false;
    editing.value = false;
    Object.assign(currentCampus, {});
  };
</script>
<template>
  <div class="section is-main-section">
    <title-bar :title-stack="titleStack" />

    <hero-bar>
    <h1>Gerenciamento de Campus</h1> 
      <template v-slot:right>
        <b-button
          v-if="!creating.value && !editing.value"
          type="is-success"
          icon-left="plus"
          @click="createCampus"
        />
        <b-button
          v-else
          type="is-primary"
          icon-left="arrow-left-bold"
          @click="reset"
        />
      </template>
    </hero-bar>

    <!-- <card-component
      class="has-table has-mobile-sort-spaced"
      title="Câmpus"
      icon="puzzle"
    > -->
      <cadastro-campus v-if="editing" :campus="currentCampus" />
      <cadastro-campus v-else-if="creating" :campus="currentCampus" />
      <listar-campus v-else @editCampus="editCampus" />
    <!-- </card-component> -->
  </div>
</template>



<style scoped>

</style>
