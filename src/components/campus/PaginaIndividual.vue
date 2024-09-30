<template>
    <div>
      <div class="columns">
        <figure class="image column is-one-third">
          <img
            width="25%"
            height="25%"
            class="is-rounded"
            src="@/assets/download.jpeg"
          />
        </figure>
        <ul class="column">
          <li><b>Nome:</b> Instituto Federal Catarinense Campus Araquari</li>
          <li><b>CNPJ:</b> 10.635.424/0003-48</li>
          <li><b>Endereço:</b> Rodovia BR 280, km 27, Araquari</li>
          <li>
            <b>Site:</b>
            <a href="https://araquari.ifc.edu.br/">araquari.ifc.edu.br</a>
          </li>
          <li><b>Total de Alunos:</b> 1500</li>
          <li><b>Total de Servidores:</b> 350</li>
        </ul>
      </div>
      <hr style="background-color: #7a7a7a" />
      <hero-bar><b>Alunos por Curso Técnico:</b></hero-bar>
      <line-chart class="small" :chart-data="datacollection"></line-chart>
      <hr />
      <hero-bar><b>Alunos por Turma(Informática):</b></hero-bar>
      <bar-chart class="small" :chart-data="datacollection"></bar-chart>
      <hr />
      <hero-bar><b>Alunos por Turma(Agropecuária):</b></hero-bar>
      <pie-chart class="small" :chart-data="datacollection"></pie-chart>
      <hr />
      <hero-bar><b>Alunos por Turma(Química):</b></hero-bar>
      <hr />
      <hero-bar><b>Alunos por Curso Superior:</b></hero-bar>
      <hr />
      <hero-bar><b>Servidores por Área de Atuação:</b></hero-bar>
      <hr />
    </div>
  </template>
  
  <script>
  import { reactive, onMounted } from "vue";
  import LineChart from "@/pages/LineChart.js";
  import BarChart from "@/pages/BarChart.js";
  import PieChart from "@/pages/PieChart.js";
  import HeroBar from "@/components/templates/HeroBar";
  
  export default {
    components: {
      LineChart,
      BarChart,
      PieChart,
      HeroBar,
    },
    setup() {
      const datacollection = reactive({});
  
      const fillData = () => {
        datacollection.labels = [
          "1Info1",
          "1Info2",
          "1Info3",
          "2Info1",
          "2Info2",
          "2Info3",
          "3Info1",
          "3Info2",
          "3Info3",
        ];
        datacollection.datasets = [
          {
            label: "Info",
            backgroundColor: "#00ffff ",
            data: Array(9).fill(null).map(() => getRandomInt()),
          },
        ];
      };
  
      const getRandomInt = () => {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
      };
  
      onMounted(() => {
        fillData();
      });
  
      return {
        datacollection,
      };
    },
  };
  </script>
  
  <style>
  .small {
    max-width: 300px;
    margin: 150px auto;
  }
  </style>
  