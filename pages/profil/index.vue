<script setup>
import { createClient } from '@supabase/supabase-js';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';
import {user, supabase} from '../supabase'
import RadarChart from '../../components/RadarChart.vue';
// import RadarChart from '../../components/chartTest.vue'
// console.log(user)
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
const Like_Rap = ref();
const Like_Latino = ref();
const Like_Rock = ref();
const Like_Pop = ref();
const Like_Reggae = ref();

onBeforeMount(async() => {
const { data:likeContent, error } = await supabase.from("LikesDwinz").select("Likes_Rap, Likes_Pop, Likes_Rock, Likes_Latino, Likes_Reggae").single();

    console.log(likeContent)
    Like_Rap.value = likeContent.Likes_Rap;
    Like_Latino.value = likeContent.Likes_Latino;
    Like_Rock.value = likeContent.Likes_Rock;
    Like_Pop.value = likeContent.Likes_Pop;
    Like_Reggae.value = likeContent.Likes_Reggae; 
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
        {{ Like_Rap }}
        {{ Like_Rock }}
        {{ Like_Latino }}
        {{ Like_Pop }}
        {{ Like_Reggae }}
        <div class="profil__chart-content">
            <RadarChart 
            :data_Rap="Like_Rap"
            data_Rock="1"
            data_Latino="2"
            data_Pop="4"
            data_Reggae="10"/>
        </div>
        <h4>N'hésitez pas à partager votre <b>Dwinz</b> sur divers réseaux sociaux avec <b>#MyDwinz</b> !</h4>
    </div>    

</template>

<script>
import {useRouter} from 'vue-router'
const SUPABASE_URL = 'https://nmblwsaflcsvzrwfkybl.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tYmx3c2FmbGNzdnpyd2ZreWJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNDE0NDYsImV4cCI6MTk4OTgxNzQ0Nn0.kUNnwOb667kh1RG0YNFBMCDubpEjaE_2EyhAuPEtMhY'
// const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)



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

    h4 {
        color: $d-white;
        font-family: $secondary-font-family;
        font-size: 18px;
        font-weight: normal;

        text-align: center;
        margin-top: 2%;

        > b {
            font-weight: bold;
        }
    }
</style>