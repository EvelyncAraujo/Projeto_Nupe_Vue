<script>
  import { ref } from "vue";
  import ListAttendance from "@/components/register/Attendance/ListAttendance";
  import MyAttendance from "@/components/register/Attendance/MyAttendance";
  import ReportAttendance from "@/components/register/Attendance/ReportAttendance";
  import CreateAttendance from "@/components/register/Attendance/CreateAttendance";
  import SelectAttendance from "@/components/register/Attendance/SelectAttendance";
  export default {
    components: {
      ListAttendance, 
      CreateAttendance,
      MyAttendance,
      ReportAttendance,
      SelectAttendance,

    },
    setup() {
      const editing = ref(false);
      const creating = ref(false);
      const personal = ref(false);
      const report = ref(false);
      const currentAttendance = ref({});
    
      const value = ref("");
  
      const cancelEdit = () => {
        editing.value = false;
        currentAttendance.value = {};
      };
  
      const personalAttendance = (val) => {
        personal.value = val;
      };
  
      const createAttendance = (val) => {
        creating.value = val;
      };
  
      const editAttendance = (attendance) => {
        editing.value = true;
        currentAttendance.value = attendance;
      };
  
      const reportAttendance = (val) => {
        report.value = val;
      };
  
      return {
        editing,
        creating,
        personal,
        report,
        currentAttendance,
        value,
        cancelEdit,
        personalAttendance,
        createAttendance,
        editAttendance,
        reportAttendance,
        
      };
    },
  };
  </script>
  <template>

    <Menu-view />
    <section class="section is-main-section">
      <div class="is-vcentered"  >
        <select-attendance
          v-if="editing"
          @cancelEdit="cancelEdit"
          :attendance="currentAttendance"
        />
        <create-attendance
          v-else-if="creating"
          @createAttendance="createAttendance"
          :value="value"
        />
        <my-attendance
          v-else-if="personal"
          @personalAttendance="personalAttendance"
          :value="value"
        ></my-attendance>
        <report-attendance
          v-else-if="report"
          @reportAttendance="reportAttendance"
          :value="value"
        ></report-attendance>
        <list-attendance
          v-else
          @personalAttendance="personalAttendance"
          @editAttendance="editAttendance"
          @reportAttendance="reportAttendance"
          @createAttendance="createAttendance"
          :value="value"
        />
      </div>
    </section>
  </template>
  
  
  <style scoped>
  .dark-mode level{
    color: white;
  }
  </style>
  