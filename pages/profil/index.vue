<script setup>
import { createClient } from '@supabase/supabase-js';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';
import {user} from '../supabase'
import RadarChart from '../../components/RadarChart.vue';
// import RadarChart from '../../components/chartTest.vue'
console.log(user)
// const router = useRouter();

// export default {
//   components: {
//     RadarChart,
//   },
//   // 
// };

// const SUPABASE_URL = 'https://aglwlxinesjnvxdjfdqx.supabase.co'
// const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnbHdseGluZXNqbnZ4ZGpmZHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxMTc2OTMsImV4cCI6MjAyMjY5MzY5M30.Xkfnez7lHZcwnMYNd8dIkoVJWq0nUCN2iNpPE19UlYA'
// const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// const user = ref()
// supabase.auth.onAuthStateChange(async () => {
//     const { data, error } = await supabase.auth.getSession()
//     user.value = data.session.user
// })
const Likes_Rap = ref();
const Likes_Latino = ref();
const Likes_Rock = ref();
const Likes_Pop = ref();
const Likes_Reggae = ref();

onMounted(async() => {
const { data, error } = await supabase.from("LikesDwinz").select("*").single();

    Likes_Rap.value = data.Likes_Rap;
    Likes_Latino.value = data.Likes_Latino;
    Likes_Rock.value = data.Likes_Rock;
    Likes_Pop.value = data.Likes_Pop;
    Likes_Reggae.value = data.Likes_Reggae; 
})


</script>


<template>
    <!-- <h1>Profil</h1> -->

    <div class="profil__head">
        <img src="../../assets/icons/profil.svg" alt="">
        <hr />
        <!-- <button @click="logout">Se déconnecter</button> -->
        <!-- <NuxtLink @click="logout" to="/">Se déconnecter</NuxtLink> -->
    </div>
    <!-- <button class="profil__edit">Modifier</button> -->

    <div class="profil__chart">
    <!-- ChartJS -->
        <h1>Votre Dwinz</h1>
        <div class="profil__chart-content">
            <RadarChart 
            :data_Rap="Likes_Rap"
            :data_Rock="Likes_Rock"
            :data_Latino="Likes_Latino"
            :data_Pop="Likes_Pop"
            :data_Reggae="Likes_Reggae"/>
        </div>
    </div>    

</template>

<script>
import {useRouter} from 'vue-router'
const SUPABASE_URL = 'https://nmblwsaflcsvzrwfkybl.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tYmx3c2FmbGNzdnpyd2ZreWJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNDE0NDYsImV4cCI6MTk4OTgxNzQ0Nn0.kUNnwOb667kh1RG0YNFBMCDubpEjaE_2EyhAuPEtMhY'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)



// console.log(data);

export default {
    setup(){
        const router = useRouter();
    },
    data() {
        return {
            data: [],
        };
    },
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