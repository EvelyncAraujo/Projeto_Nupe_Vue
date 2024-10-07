<script>
export default {
  data() {
    return {
      labelPosition: "on-border",
      name: "",
      description: "",
      father_reason: "",
    };
  },
  methods: {
    async createAttendanceReason() {
      try {
        // Supondo que axios tenha sido configurado globalmente
        await this.$axios.post("/api/v1/attendance_reason/", {
          name: this.name,
          description: this.description,
          father_reason: this.father_reason,
        });
        this.$buefy.toast.open({
          message: "Razão de atendimento criada com sucesso.",
          type: "is-primary",
        });
        // Emite o evento para indicar que a razão foi criada
        this.$emit("createAttendanceReason");
      } catch (err) {
        this.$buefy.toast.open({
          message: "Erro ao criar a razão de atendimento!",
          type: "is-danger",
        });
        console.error(err);
      }
    },
    cancelAttendanceReason() {
      this.$emit("createAttendanceReason");
    },
  },
};
</script>


<template>
  <div>
    <div class="columns is-vcentered">
      <div class="column has-text-centered">
        <img src="../../../assets/registration.svg" width="300px" />
      </div>
      <div class="column has-text-centered">
        <h3 class="subtitle has-text-centered">
          <b-icon icon="map-marker"></b-icon>
          Cadastrar razão de atendimento
        </h3>
        <form @submit.prevent="createAttendanceReason">
          <b-field label="Razão do atendimento" :label-position="labelPosition">
            <b-input
              type="text"
              placeholder="Digite um nome ao registro"
              v-model="name"
              required
            ></b-input>
          </b-field>

          <b-field label="Descrição" :label-position="labelPosition">
            <b-input
              type="textarea"
              v-model="description"
              placeholder="Texto descritivo"
              required
            ></b-input>
          </b-field>

          <b-field label="Razão Pai" :label-position="labelPosition">
            <b-input type="number" v-model="father_reason" placeholder="Número"></b-input>
          </b-field>

          <b-field>
            <b-field class="columns">
              <div class="column is-one-half">
                <b-button native-type="submit" class="is-primary" expanded>
                  Cadastrar
                </b-button>
              </div>
              <div class="column is-one-half">
                <b-button
                  type="is-primary is-outlined"
                  @click="cancelAttendanceReason"
                  expanded
                >
                  Cancelar
                </b-button>
              </div>
            </b-field>
          </b-field>
        </form>
      </div>
    </div>
  </div>
</template>
