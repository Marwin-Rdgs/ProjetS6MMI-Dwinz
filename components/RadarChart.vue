<template>
    <div>
      <!-- <chart :type="'radar'" :data="chartData"></chart> -->
      <canvas ref="RadarChart" :type="'radar'" width="400" height="400"></canvas>
    </div>
  </template>
  
  <script>
  import { defineProps, reactive, ref, onMounted } from 'vue';
  import { Chart } from 'chart.js/auto';
  import { Radar } from 'vue-chartjs';
  import {Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale} from 'chart.js';
  

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

  const propChart = defineProps({
    chartId: {type: String, default:'radar-chart'},
    datasetIdKey: {type: String, default:'label'},
    width: {type: Number, default: 500},
    height: {type: Number, default: 500},
    cssClasses: {type: String, default: ''},
    styles: {type: Object, default: () => {}},
    plugins: {type: Object, default: () => {}}
  })

  const chartData = reactive({
    labels:['Rap', 'Pop', 'Rock', 'Tech'],
    datasets: [
        {
            data: [4,1,0,6],
            backgroundColor: ['blue', 'red', 'green', 'black'],
            borderColor: [],
            borderWidth: 1
        }
    ]
  })

  const chartOptions = reactive({
    responsive: true,
    maintainAspectRadar: false
  })
  
//   export default {
//     extends: Radar,
//     data() {
//       return {
//         chartData: {
//           labels: ['Style1', 'Style2', 'Style3', 'Style4', 'Style5'],
//           datasets: [{
//             label: 'My First Dataset',
//             data: [65, 59, 90, 81, 56],
//             fill: true,
//             backgroundColor: 'rgba(255, 99, 132, 0.2)',
//             borderColor: 'rgb(255, 99, 132)',
//             pointBackgroundColor: 'rgb(255, 99, 132)',
//             pointBorderColor: '#fff',
//             pointHoverBackgroundColor: '#fff',
//             pointHoverBorderColor: 'rgb(255, 99, 132)',
//           }],
//         },
//       };
//     },
//     mounted() {
//       // Pas besoin d'utiliser renderChart ici lorsque vous étendez le composant Radar
//     },
//   };
  </script>
  
  <style scoped lang="scss">
  // Ajoutez vos styles SCSS spécifiques au composant ici
  </style>