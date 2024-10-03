  
  <script>
  import { ref, reactive, onMounted } from "vue";
  
  export default {
    props: {
      attendance: Object,
    },
    setup(props, { emit }) {
      const currentAttendance = reactive({ ...props.attendance });
      const labelPosition = ref("on-border");
      const studentsAccount = ref([]);
      const attendantsAccounts = ref([]);
      const filteredAccounts = ref([]);
      const filteredStudents = ref([]);
      const attendants = ref([]);
      const student = ref([]);
      const attendantAccountsId = ref([]);
      const studentAccountId = ref(null);
  
      const fetchAllAccounts = async () => {
        studentsAccount.value = await fetch("/api/v1/student/").then((res) => res.json());
        attendantsAccounts.value = await fetch("/api/v1/account/").then((res) => res.json());
      };
  
      const fillTagInputs = () => {
        student.value.push(currentAttendance.student.full_name);
        currentAttendance.attendants.forEach((attendant) => {
          attendants.value.push(attendant.full_name);
        });
      };
  
      const searchAccounts = () => {
        const value = document.getElementById("attendantInput").value;
        filteredAccounts.value = attendantsAccounts.value.filter((option) =>
          option.full_name.toLowerCase().includes(value.toLowerCase())
        );
      };
  
      const searchStudents = () => {
        const value = document.getElementById("studentInput").value;
        filteredStudents.value = studentsAccount.value.filter((student) =>
          student.full_name.toLowerCase().includes(value.toLowerCase())
        );
      };
  
      const getAccountsId = () => {
        attendantAccountsId.value = attendants.value.map(
          (attendant) => attendant.id
        );
        studentAccountId.value = student.value[0].id;
      };
  
      const atualizar = async () => {
        try {
          getAccountsId();
          await fetch(`/api/v1/attendance/${currentAttendance.id}/`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: currentAttendance.id,
              attendants: attendantAccountsId.value,
              attendance_reason: currentAttendance.attendance_reason,
              attendance_severity: currentAttendance.attendance_severity,
              student: studentAccountId.value,
              status: currentAttendance.status,
            }),
          });
          emit("cancelEdit");
          alert("Atendimento atualizado com sucesso.");
        } catch (error) {
          alert("Erro ao atualizar atendimento!");
        }
      };
  
      const deleteAttendance = async () => {
        try {
          await fetch(`/api/v1/attendance/${props.attendance.id}/`, {
            method: "DELETE",
          });
          alert("Atendimento deletado com sucesso!");
        } catch {
          alert("Erro ao deletar atendimento!");
        }
        window.location.reload();
      };
  
      const confirmCustomDelete = () => {
        if (confirm(`Tem certeza que deseja deletar o atendimento? A ação é irreversível.`)) {
          deleteAttendance();
        }
      };
  
      onMounted(() => {
        fillTagInputs();
        fetchAllAccounts();
      });
  
      return {
        currentAttendance,
        labelPosition,
        studentsAccount,
        attendantsAccounts,
        filteredAccounts,
        filteredStudents,
        attendants,
        student,
        searchAccounts,
        searchStudents,
        atualizar,
        confirmCustomDelete,
      };
    },
  };
  </script>
  <template>
    <div class="columns is-vcentered">
      <div class="column has-text-centered">
        <!-- <img src="../../../assets/registration.svg" width="300px" /> -->
      </div>
      <div class="column">
        <h3 class="subtitle has-text-centered">
          <b-icon icon="map-marker"></b-icon>
          Editar atendimento
        </h3>
  
        <form>
          <b-field label="Razão do atendimento" :label-position="labelPosition">
            <b-input
              type="text"
              v-model="currentAttendance.attendance_reason"
              placeholder="Novo motivo ao atendimento"
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
                <strong>{{ props.option.id }}</strong
                >: {{ props.option.full_name }}
              </template>
            </b-taginput>
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
              v-model="currentAttendance.status"
              placeholder="Status do atendimento"
            >
              <option value="O">Aberto</option>
              <option value="OH">Em espera</option>
              <option value="IP">Em andamento</option>
              <option value="C">Fechado</option>
            </b-select>
          </b-field>
  
          <b-field label="Gravidade" :label-position="labelPosition">
            <b-select
              class="is-primary"
              type="text"
              v-model="currentAttendance.attendance_severity"
              placeholder="Gravidade do problema"
              required
            >
              <option value="L">Leve</option>
              <option value="M">Média</option>
              <option value="H">Grave</option>
              <option value="S">Alta</option>
            </b-select>
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
  </template>

  
  <style scoped>
  </style>
  