<script setup>
import { defineProps, reactive, ref, onMounted } from 'vue';
// import { Chart } from 'chart.js/auto';
import {supabase} from '../supabase.js'
import { Radar } from 'vue-chartjs';
import {Chart as ChartJS, Title, Tooltip, Legend, PointElement, LineElement, RadialLinearScale, Filler} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, RadialLinearScale, Filler)

const Like_Rap = ref();
const Like_Latino = ref();
const Like_Rock = ref();
const Like_Pop = ref();
const Like_Reggae = ref();

const propChart = defineProps({
  chartId: {type: String, default:'radar-chart'},
  datasetIdKey: {type: String, default:'label'},
  width: {type: Number, default: 100},
  height: {type: Number, default: 100},
  cssClasses: {type: String, default: ''},
  styles: {type: Object, default: () => {}},
  plugins: {type: Object, default: () => {}},

    data_Rock: Number,
    data_Rap: String,
    data_Pop: Number,
    data_Reggae: Number,
    data_Latino: Number,
})

// const rapRef = toRefs(propChart.data_Rap)
// console.log("rapref =======" , rapRef)

let chartData = reactive({
  labels:['Rap', 'Pop', 'Rock', 'Latino', 'Reggae'],
  datasets: [
      {
          label: "Votre Dwinz",
          data: [Like_Rap.value, propChart.data_Pop, propChart.data_Rock, propChart.data_Latino, propChart.data_Reggae],
          backgroundColor: ['pink'],
          borderWidth: 2
      }
  ]
})

let chartOptions = reactive({
  responsive: true,
  scales: {
    r: {
      angleLines: {
        display: true
      },
      suggestedMin: 0,
      suggestedMax: 10
    }
  }
  // maintainAspectRadar: false
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



onBeforeMount(async() => {
const { data:likeContent, error } = await supabase.from("LikesDwinz").select("Likes_Rap, Likes_Pop, Likes_Rock, Likes_Latino, Likes_Reggae").single();

    console.log(likeContent)
    Like_Rap.value = likeContent.Likes_Rap;
    Like_Latino.value = likeContent.Likes_Latino;
    Like_Rock.value = likeContent.Likes_Rock;
    Like_Pop.value = likeContent.Likes_Pop;
    Like_Reggae.value = likeContent.Likes_Reggae; 
})

console.log(propChart);
</script>

<template>
    <div>
      <!-- <chart :type="'radar'" :data="chartData"></chart> -->
      <!-- <canvas ref="RadarChart" :type="" width="400" height="400"></canvas> -->
      {{ Like_Rap }}
      <Radar 
      :options="chartOptions"
      :data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"/>
    </div>
  </template>

  
  <style scoped lang="scss">
  * {
    background-color: $d-white;
    border-radius: 20%;
    padding: 2%;
    

    @include x-large-up {
      width: 20%;
    }
  }
  </style>