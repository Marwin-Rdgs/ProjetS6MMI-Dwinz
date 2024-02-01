<template>
    <div>
      <chart
        :type="'radar'"
        :data="chartData"
        :options="chartOptions"
      ></chart>
    </div>
  </template>
  
  <script>
  import { Radar } from 'vue-chartjs';
  
  export default {
    extends: Radar,
    data() {
      return {
        chartData: {
          labels: ['Style1', 'Style2', 'Style3', 'Style4', 'Style5'],
          datasets: [
            {
              label: 'Nombre de Likes',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              data: [12, 19, 3, 5, 2],
            },
          ],
        },
        chartOptions: {
          // Options du graphique (personnalisez selon vos besoins)
        },
      };
    },
    mounted() {
      this.renderChart(this.chartData, this.chartOptions);
    },
  };
  </script>
  
  <style scoped lang="scss">
  // Ajoutez vos styles SCSS spécifiques au composant ici
  </style>
  