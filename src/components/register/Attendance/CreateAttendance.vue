<template>
    <div>
      <div class="columns is-vcentered">
        <div class="column has-text-centered">
          <img src="../../../assets/registration.svg" width="300px" />
        </div>
        <div class="column has-text-centered">
          <h3 class="subtitle has-text-centered">
            <b-icon icon="map-marker"></b-icon>
            Cadastrar atendimento
          </h3>
  
          <form>
            <b-field label="Razão" :label-position="labelPosition">
              <b-input
                type="number"
                v-model="attendance_reason"
                placeholder="Razão do atendimento"
                required
              >
              </b-input>
            </b-field>
  
            <b-field label="Atendentes" :label-position="labelPosition">
              <b-taginput
                v-model="attendants"
                id="attendantInput"
                field="full_name"
                :data="filteredAccounts"
                placeholder="Nome do atendente"
                @typing="searchAccounts"
                autocomplete
              >
                <template v-slot="props">
                  {{ props.option.full_name }}
                </template>
              </b-taginput>
            </b-field>
  
            <b-field label="Gravidade" :label-position="labelPosition">
              <b-select
                class="is-primary"
                type="text"
                v-model="attendance_severity"
                placeholder="Gravidade do problema"
                required
              >
                <option value="L">Leve</option>
                <option value="M">Média</option>
                <option value="H">Grave</option>
                <option value="S">Alta</option>
              </b-select>
            </b-field>
  
            <b-field label="Estudante" :label-position="labelPosition">
              <b-taginput
                v-model="student"
                id="studentInput"
                field="full_name"
                maxtags="1"
                :data="filteredStudents"
                placeholder="Nome do estudante"
                required
                autocomplete
                @typing="searchStudents"
              >
                <template v-slot="props">
                  <strong>{{ props.option.id }}</strong
                  >: {{ props.option.full_name }}
                </template>
              </b-taginput>
            </b-field>
  
            <b-field label="Status" :label-position="labelPosition">
              <b-select
                type="text"
                v-model="status"
                placeholder="Status do atendimento"
              >
                <option value="O">Aberto</option>
                <option value="OH">Em espera</option>
                <option value="IP">Em andamento</option>
                <option value="C">Fechado</option>
              </b-select>
            </b-field>
  
            <b-field>
              <b-field class="columns">
                <div class="column is-one-half">
                  <b-button
                    native-type="submit"
                    @click.prevent="createAttendance"
                    class="is-primary"
                    expanded
                  >
                    Cadastrar
                  </b-button>
                </div>
                <div class="column is-one-half">
                  <b-button
                    type="is-primary is-outlined"
                    @click="cancelAttendance(false)"
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
  
  <script>
  import { ref, onMounted } from "vue";
  import axios from "axios";
  
  export default {
    setup(props, { emit }) {
      const labelPosition = ref("on-border");
      const filteredAccounts = ref([]);
      const filteredStudents = ref([]);
      const attendance_reason = ref("");
      const attendance_severity = ref("L");
      const attendants = ref([]);
      const student = ref([]);
      const status = ref("O");
  
      const fetchAllAccounts = async () => {
        const studentsAccount = await axios.get("/api/v1/student/");
        const attendantsAccounts = await axios.get("/api/v1/account/");
        filteredAccounts.value = attendantsAccounts.data;
        filteredStudents.value = studentsAccount.data;
      };
  
      const searchAccounts = () => {
        const value = document.getElementById("attendantInput").value;
        filteredAccounts.value = filteredAccounts.value.filter((option) =>
          option.full_name.toLowerCase().includes(value.toLowerCase())
        );
      };
  
      const searchStudents = () => {
        const value = document.getElementById("studentInput").value;
        filteredStudents.value = filteredStudents.value.filter((student) =>
          student.full_name.toLowerCase().includes(value.toLowerCase())
        );
      };
  
      const getAccountsId = () => {
        const attendantAccountsId = attendants.value.map((attendant) => attendant.id);
        const studentAccountId = student.value[0].id;
        return { attendantAccountsId, studentAccountId };
      };
  
      const createAttendance = async () => {
        try {
          const { attendantAccountsId, studentAccountId } = getAccountsId();
          await axios.post("/api/v1/attendance/", {
            attendance_reason: attendance_reason.value,
            attendance_severity: attendance_severity.value,
            attendants: attendantAccountsId,
            student: studentAccountId,
            status: status.value,
          });
          this.$buefy.toast.open({
            message: "Atendimento criado com sucesso.",
            type: "is-primary",
          });
          emit("createAttendance");
        } catch {
          this.$buefy.toast.open({
            message: "Erro ao criar o atendimento!",
            type: "is-danger",
          });
        }
      };
  
      const cancelAttendance = (value) => {
        emit("createAttendance", value);
      };
  
      onMounted(() => {
        fetchAllAccounts();
      });
  
      return {
        labelPosition,
        filteredAccounts,
        filteredStudents,
        attendance_reason,
        attendance_severity,
        attendants,
        student,
        status,
        searchAccounts,
        searchStudents,
        createAttendance,
        cancelAttendance,
      };
    },
  };
  </script>
  
  <style>
  </style>
  