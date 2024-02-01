<template>
    <!-- <h1>Profil</h1> -->

    <div class="profil__head">
        <img src="../../assets/icons/profil.svg" alt="">
        <hr />
        <h1>Profil</h1>
    </div>
    <!-- <button class="profil__edit">Modifier</button> -->

    <div class="profil__chart">
    <!-- ChartJS -->
        <h1>Votre Dwinz</h1>
        <RadarChart />
    </div>    

</template>

<script setup>
import RadarChart from '../../components/RadarChart.vue';

const router = useRoute();

// export default {
//   components: {
//     RadarChart,
//   },
//   // 
// };

</script>

<style lang="scss" scoped>
    .profil {
        &__head {
            display: flex;
            gap: 2px;

            width: 50%;

            align-items: center;

            > img {
                border-radius: 100%;
                background-color: $d-white;
                border: 2px solid $d-black;
                width: 10%;
                margin: 2%;
            }

            > hr {
                width: 20%;
            }
        }

        &__chart {
            margin-top: 10%;
            margin-left: 2%;
        }
    }

    h1 {
        color: $d-white;
        font-family: $primary-font-family;
        font-size: 24px;
    }
</style>