<script setup>
import { createClient } from '@supabase/supabase-js';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';

import RadarChart from '../../components/RadarChart.vue';
// import RadarChart from '../../components/chartTest.vue'

const router = useRoute();
// export default {
//   components: {
//     RadarChart,
//   },
//   // 
// };

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
</script>


<template>
    <!-- <h1>Profil</h1> -->

    <div class="profil__head">
        <img src="../../assets/icons/profil.svg" alt="">
        <hr />
        <h1>Profil</h1>
        <button @click="logout">Se déconnecter</button>
    </div>
    <!-- <button class="profil__edit">Modifier</button> -->

    <div class="profil__chart">
    <!-- ChartJS -->
        <h1>Votre Dwinz</h1>
        <div class="profil__chart-content">
            <RadarChart />
        </div>
    </div>    

</template>

<script>
const SUPABASE_URL = 'https://aglwlxinesjnvxdjfdqx.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnbHdseGluZXNqbnZ4ZGpmZHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxMTc2OTMsImV4cCI6MjAyMjY5MzY5M30.Xkfnez7lHZcwnMYNd8dIkoVJWq0nUCN2iNpPE19UlYA'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

export default {
    methods:{
        async logout(){ 
      try { 
        const { user, session, error } = await supabase.auth.signOut(); 
        if (error) throw error; 
        // document.getElementById('status').innerHTML='You are disconnected !' 
      } catch (error) { 
        alert(error.error_description || error.message); 
      }  
    }, 
    }
}

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

            &-content {
                display: flex; 
                justify-content: center;
                align-items: center
            }
        }
    }

    h1 {
        color: $d-white;
        font-family: $primary-font-family;
        font-size: 24px;
    }
</style>