 <script >
  import { ref, onMounted } from "vue";
 import LineChart from "./LineChart.js";
  import BarChart from "./BarChart.js";
  import PieChart from "./PieChart.js";
  
  export default {
    components: {
      LineChart,
      BarChart,
      PieChart,
    },
    setup() {
      const datacollection = ref({});
  
      const getRandomInt = () => {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
      };
  
      const fillData = () => {
        datacollection.value = {
          labels: ["2020", "2021"],
          datasets: [
            {
              label: "Info",
              backgroundColor: "#00ffff ",
              data: [getRandomInt(), getRandomInt()],
            },
          ],
        };
      };
  
      onMounted(() => {
        fillData();
      });
  
      return {
        datacollection,
        fillData,
      };
    },
  };
  </script>
  <template>
    <div class="small">
      <hero-bar>Alunos em Processo de Atendimento:</hero-bar>
      <bar-chart :chart-data="datacollection"></bar-chart>
      <hr />
      <hero-bar>Alunos Atendidos:</hero-bar>
      <bar-chart :chart-data="datacollection"></bar-chart>
      <hr />
      <hero-bar>Alunos Não Atendidos:</hero-bar>
      <bar-chart :chart-data="datacollection"></bar-chart>
      <button @click="fillData">Randomize</button>
    </div>
    <line-chart ></line-chart>
    <pie-chart></pie-chart>
  </template>
  
 
  
  <style scoped> 
  .small {
    max-width: 600px;
    margin: 150px auto;
  }
  </style>