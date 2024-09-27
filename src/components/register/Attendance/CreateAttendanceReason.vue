<script>
import { ref } from 'vue';
import { useAxios } from '@/composables/axios'; // se você estiver usando um hook personalizado para axios, ajuste esse caminho.

export default {
  setup(props, { emit }) {
    const labelPosition = ref('on-border');
    const name = ref('');
    const description = ref('');
    const fatherReason = ref('');

    const axios = useAxios(); // caso você use um hook para o axios, ou substitua pela sua chamada de axios padrão.

    const createAttendanceReason = async () => {
      try {
        await axios.post('/api/v1/attendance_reason/', {
          name: name.value,
          description: description.value,
          father_reason: fatherReason.value,
        });
        this.$buefy.toast.open({
          message: 'Razão de atendimento criada com sucesso.',
          type: 'is-primary',
        });
        emit('createAttendanceReason');
      } catch (err) {
        this.$buefy.toast.open({
          message: 'Erro ao criar a razão de atendimento!',
          type: 'is-danger',
        });
        console.error(err);
      }
    };

    const cancelAttendanceReason = () => {
      emit('createAttendanceReason', false);
    };

    return {
      labelPosition,
      name,
      description,
      fatherReason,
      createAttendanceReason,
      cancelAttendanceReason,
    };
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
            <b-input type="number" v-model="fatherReason" placeholder="Número"></b-input>
          </b-field>

          <b-field>
            <div class="columns">
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
            </div>
          </b-field>
        </form>
      </div>
    </div>
  </div>
</template>



<style>
/* Seu estilo aqui */
</style>
