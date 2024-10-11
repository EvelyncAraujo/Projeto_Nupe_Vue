<script>
import { ref } from 'vue';
import ListAttendanceReason from "@/components/register/Attendance/ListAttendanceReason";
import CreateAttendanceReason from "@/components/register/Attendance/CreateAttendanceReason";
import SelectAttendanceReason from "@/components/register/Attendance/SelectAttendanceReason";

export default {
  components: {
    ListAttendanceReason,
    CreateAttendanceReason,
    SelectAttendanceReason,
  },
  setup() {
    // Declaração das propriedades reativas
    const editing = ref(false);
    const creating = ref(false);
    const currentAttendanceReason = ref({});
    const value = ref("");

    // Métodos
    const createAttendanceReason = () => {
      creating.value = true;
    };

    const editAttendanceReason = (attendanceReason) => {
      editing.value = true;
      currentAttendanceReason.value = attendanceReason;
    };

    const cancelEdit = () => {
      editing.value = false;
      currentAttendanceReason.value = {};
    };

    // Retorna as propriedades e métodos para o template
    return {
      editing,
      creating,
      currentAttendanceReason,
      value,
      createAttendanceReason,
      editAttendanceReason,
      cancelEdit,
    };
  },
};
</script>

<template>
  <section class="section is-main-section">
    <div class="is-vcentered">
      <select-attendance-reason
        v-if="editing"
        :attendanceReason="currentAttendanceReason"
        @cancelEdit="cancelEdit"
      />
      <create-attendance-reason
        v-else-if="creating"
        :value="value"
      ></create-attendance-reason>
      <list-attendance-reason
        v-else
        @createAttendanceReason="createAttendanceReason"
        @editAttendanceReason="editAttendanceReason"
      />
    </div>
  </section>
</template>
<style scoped>

</style>
