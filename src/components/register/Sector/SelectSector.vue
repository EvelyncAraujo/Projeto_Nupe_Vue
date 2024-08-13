<template>
  <div class="columns is-vcentered">
    <div class="column has-text-centered">
      <img src="../../../assets/registration.svg" width="300px" />
    </div>
    <div class="column">
      <h3 class="subtitle has-text-centered">
        <b-icon icon="map-marker"></b-icon>
        Editar setor
      </h3>
      <form>
        <b-field label="Setor" :label-position="labelPosition">
          <b-input
            v-model="currentSector.name"
            type="text"
            placeholder="Novo nome ao setor"
            required
          >
          </b-input>
        </b-field>

        <b-field label="Descrição" :label-position="labelPosition">
          <b-input
            v-model="currentSector.description"
            type="textarea"
            placeholder="Novo texto descritivo"
          >
          </b-input>
        </b-field>

        <b-field class="columns">
          <div class="column is-one-half">
            <b-button
              native-type="submit"
              @click.prevent="atualizar"
              class="is-primary"
              expanded
              >Atualizar</b-button
            >
          </div>
          <div class="column is-one-half">
            <b-button
              type="is-danger"
              native-type="reset"
              @click="confirmCustomDelete"
              expanded
            >
              Excluir
            </b-button>
          </div>
        </b-field>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sector: Object,
  },
  data() {
    return {
      labelPosition: "on-border",
      currentSector: {},
    };
  },
  created() {
    this.currentSector = this.sector;
  },
  methods: {
    async atualizar() {
      try {
        await this.$axios.$patch(`/api/v1/sector/${this.currentSector.id}/`, {
          name: this.currentSector.name,
          description: this.currentSector.description,
        });
        this.$buefy.toast.open({
          message: "Setor atualizado com sucesso.",
          type: "is-primary",
        });
        this.$emit("cancelEdit");
      } catch {
        this.$buefy.toast.open({
          message: "Erro ao atualizar o setor!",
          type: "is-danger",
        });
      }
    },
    deleteSector() {
      try {
        this.$axios.$delete(`/api/v1/sector/${this.currentSector.id}/`);
      } catch {
        this.$buefy.toast.open({
          message: "Erro ao deletar setor!",
          type: "is-danger",
        });
      }
      window.location.reload();
    },
    confirmCustomDelete() {
      this.$buefy.dialog.confirm({
        title: "Deletar setor",
        message:
          "Tem certeza que deseja deletar o " +
          this.currentSector.name +
          "? A ação é irreversível",
        confirmText: "Deletar Setor",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => {
          this.$buefy.toast.open({
            message: "Setor deletado com sucesso!",
            type: "is-primary",
          }) && this.deleteSector();
        },
      });
    },
  },
};
</script>

<style>
</style>