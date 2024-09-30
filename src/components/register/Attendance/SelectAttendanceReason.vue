<script >
  import { ref, onMounted } from 'vue';
  import axios from 'axios';

  export default {
    props: {
      attendanceReason: Object,
    },
    setup(props, { emit }) {
      const labelPosition = ref("on-border");
      const currentAttendanceReason = ref({ ...props.attendanceReason });
  
      const atualizar = async () => {
        try {
          await axios.patch(`/api/v1/attendance_reason/${currentAttendanceReason.value.id}/`, {
            father_reason: currentAttendanceReason.value.father_reason,
            name: currentAttendanceReason.value.name,
            description: currentAttendanceReason.value.description,
          });
          this.$buefy.toast.open({
            message: "Razão atendimento atualizado com sucesso.",
            type: "is-primary",
          });
          emit("cancelEdit");
        } catch {
          this.$buefy.toast.open({
            message: "Erro ao atualizar a razão atendimento!",
            type: "is-danger",
          });
        }
      };
  
      const deleteAttendanceReason = async () => {
        try {
          await axios.delete(`/api/v1/attendance_reason/${currentAttendanceReason.value.id}`);
          window.location.reload();
        } catch {
          this.$buefy.toast.open({
            message: "Erro ao deletar a razão do atendimento!",
            type: "is-danger",
          });
        }
      };
  
      const confirmCustomDelete = () => {
        this.$buefy.dialog.confirm({
          title: "Deletar razão do atendimento",
          message: `Tem certeza que deseja deletar ${currentAttendanceReason.value.name}? A ação é irreversível`,
          confirmText: "Deletar razão do atendimento",
          type: "is-danger",
          hasIcon: true,
          onConfirm: () => {
            this.$buefy.toast.open({
              message: "Razão do atendimento deletado com sucesso!",
              type: "is-primary",
            });
            deleteAttendanceReason();
          },
        });
      };
  
      onMounted(() => {
        currentAttendanceReason.value = { ...props.attendanceReason };
      });
  
      return {
        labelPosition,
        currentAttendanceReason,
        atualizar,
        confirmCustomDelete,
      };
    },
  };
  </script>
  <template>
    <section>
      <div class="columns is-vcentered">
        <div class="column has-text-centered">
          <img src="../../../assets/registration.svg" />
        </div>
        <div class="column">
          <h3 class="subtitle has-text-centered">
            <b-icon icon="map-marker"></b-icon>
            Editar razão do atendimento
          </h3>
  
          <form>
            <!-- <b-field label="'Razão pai'" :label-position="labelPosition">
              <b-input
                type="number"
                v-model="currentAttendanceReason.father_reason"
                placeholder="'Razão pai'"
              >
              </b-input>
            </b-field> -->
  
            <b-field label="Nome" :label-position="labelPosition">
              <b-input
                type="text"
                v-model="currentAttendanceReason.name"
                placeholder="Nome"
                required
              >
              </b-input>
            </b-field>
  
            <b-field label="Descrição" :label-position="labelPosition">
              <b-input
                type="textarea"
                v-model="currentAttendanceReason.description"
                placeholder="Texto descritivo"
                required
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
                <b-button type="is-danger" @click="confirmCustomDelete" expanded>
                  Excluir
                </b-button>
              </div>
            </b-field>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  
  <style>
  </style>
  