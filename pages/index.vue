<script setup>
// import { ref, onMounted } from 'vue';
import { createClient } from '@supabase/supabase-js';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';
import {user} from '../supabase'

const SUPABASE_URL = 'https://nmblwsaflcsvzrwfkybl.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tYmx3c2FmbGNzdnpyd2ZreWJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNDE0NDYsImV4cCI6MTk4OTgxNzQ0Nn0.kUNnwOb667kh1RG0YNFBMCDubpEjaE_2EyhAuPEtMhY';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const Randomizer = ref(Math.floor(Math.random() * 10) + 1);

const LikeRap = ref();
const LikeRock = ref();
const LikeReggae = ref();
const LikePop = ref();
const LikeLatino = ref();
// Like.value = 10;
// console.log("Like= ====== " + Like.value);


// async function upsertData(dataForm) {
//     const { data, error } = await supabase
//     .from("Profils")
//     .upsert(dataForm);
    
//     console.log(Profils.Likes_Rap);
//     console.log(dataForm);
// }

onMounted(async() => {
    // const { data:like_rap, error } = await supabase.from("LikesDwinz").select("Likes_Rap").single();
    // console.log(like_rap.Likes_Rap)
    // LikeRap.value = like_rap.Likes_Rap
  // Code à exécuter après le montage du composant
  // Par exemple, this.$refs.input.focus() peut être déplacé ici
});

const likeTrack = async (dataForm) => {
    console.log(dataForm)
  if (Randomizer.value === 1 || Randomizer.value === 5) {
    // console.log("qighegjgng")
    // console.log("qighegjgng,", await supabase.from("LikesDwinz").select("Likes_Rap").single())
    // console.log("2")
    const { data:likes, error } = await supabase.from("LikesDwinz").select("Likes_Rap, Likes_Pop, Likes_Rock, Likes_Latino, Likes_Reggae").single();
    // console.log(data.Likes_Rap);
    
    if (likes) {
        console.log("LIIIIIKES RAAAP --- "+likes);
        LikeRap.value = likes.Likes_Rap;
        LikeRap.value++
        dataForm.Likes_Rap = LikeRap.value;
        dataForm.Likes_Pop = likes.Likes_Pop;
        dataForm.Likes_Reggae = likes.Likes_Reggae;
        dataForm.Likes_Rock = likes.Likes_Rock;
        dataForm.Likes_Latino = likes.Likes_Latino;
    } else {
        dataForm.Likes_Rap = 1;
        dataForm.Likes_Pop = 0;
        dataForm.Likes_Reggae = 0;
        dataForm.Likes_Rock = 0;
        dataForm.Likes_Latino = 0;
    }

    console.log("Rap :", dataForm);

    const { data, error: updateError } = await supabase.from("LikesDwinz").upsert(dataForm);

    RandomizeTrack();

    // Like.value++;
    // const { data , error } = await supabase.from('LikesDwinz').select("Likes_Rap").upsert(Like.value);
    // await upsertData(dataForm);


  } else if (Randomizer.value === 4 || Randomizer.value === 7) {
    // Logique pour le cas Randomizer === 4 ou 7
        // console.log("qighegjgng,", await supabase.from("LikesDwinz").select("Likes_Pop").single())

        const { data:likes, error } = await supabase.from("LikesDwinz").select("Likes_Rap, Likes_Pop, Likes_Rock, Likes_Latino, Likes_Reggae").single();
    // console.log(data.Likes_Rap);
    
    if (likes) {
        console.log("LIIIIIKES POOOP --- "+likes);
        LikePop.value = likes.Likes_Pop;
        LikePop.value++
        dataForm.Likes_Rap = likes.Likes_Rap;
        dataForm.Likes_Pop = LikePop.value;
        dataForm.Likes_Reggae = likes.Likes_Reggae;
        dataForm.Likes_Rock = likes.Likes_Rock;
        dataForm.Likes_Latino = likes.Likes_Latino;
        console.log("Pop :", dataForm);
    } else {
        dataForm.Likes_Rap = 0;
        dataForm.Likes_Pop = 1;
        dataForm.Likes_Reggae = 0;
        dataForm.Likes_Rock = 0;
        dataForm.Likes_Latino = 0;
    }

    const { data, error: updateError } = await supabase.from("LikesDwinz").upsert(dataForm);

    RandomizeTrack();



  } else if (Randomizer.value === 2 || Randomizer.value === 6) {
    // Logique pour le cas Randomizer === 2 ou 6
        // console.log("qighegjgng,", await supabase.from("LikesDwinz").select("Likes_Rock").single())


        const { data:likes, error } = await supabase.from("LikesDwinz").select("Likes_Rap, Likes_Pop, Likes_Rock, Likes_Latino, Likes_Reggae").single();
    // console.log(data.Likes_Rap);
    
    if (likes) {
        console.log("LIIIIIKES ROOOCK --- "+likes);
        LikeRock.value = likes.Likes_Rock;
        LikeRock.value++
        dataForm.Likes_Rap = likes.Likes_Rap;
        dataForm.Likes_Pop = likes.Likes_Pop;
        dataForm.Likes_Reggae = likes.Likes_Reggae;
        dataForm.Likes_Rock = LikeRock.value;
        dataForm.Likes_Latino = likes.Likes_Latino;
        console.log("Rock :", dataForm);
    } else {
        dataForm.Likes_Rap = 0;
        dataForm.Likes_Pop = 0;
        dataForm.Likes_Reggae = 0;
        dataForm.Likes_Rock = 1;
        dataForm.Likes_Latino = 0;
    }

    const { data, error: updateError } = await supabase.from("LikesDwinz").upsert(dataForm);

    RandomizeTrack();



  } else if (Randomizer.value === 3 || Randomizer.value === 10) {
    // Logique pour le cas Randomizer === 3 ou 10
        // console.log("qighegjgng,", await supabase.from("LikesDwinz").select("Likes_Reggae").single())

        const { data:likes, error } = await supabase.from("LikesDwinz").select("Likes_Rap, Likes_Pop, Likes_Rock, Likes_Latino, Likes_Reggae").single();
        // console.log(data.Likes_Rap);
        
        if (likes) {
        console.log("LIIIIIKES REGGAE--- "+likes);
        LikeReggae.value = likes.Likes_Reggae;
        LikeReggae.value++
        dataForm.Likes_Rap = likes.Likes_Rap;
        dataForm.Likes_Pop = likes.Likes_Pop;
        dataForm.Likes_Reggae = LikeReggae.value;
        dataForm.Likes_Rock = likes.Likes_Rock;
        dataForm.Likes_Latino = likes.Likes_Latino;
        console.log("Reggae :", dataForm);
    } else {
        dataForm.Likes_Rap = 0;
        dataForm.Likes_Pop = 0;
        dataForm.Likes_Reggae = 1;
        dataForm.Likes_Rock = 0;
        dataForm.Likes_Latino = 0;
    }

    const { data, error: updateError } = await supabase.from("LikesDwinz").upsert(dataForm);

    RandomizeTrack();


  } else if (Randomizer.value === 8 || Randomizer.value === 9) {
    // Logique pour le cas Randomizer === 8 ou 9
        // console.log("qighegjgng,", await supabase.from("LikesDwinz").select("Likes_Latino").single())

        const { data:likes, error } = await supabase.from("LikesDwinz").select("Likes_Rap, Likes_Pop, Likes_Rock, Likes_Latino, Likes_Reggae").single();
    // console.log(data.Likes_Rap);
    
    if (likes) {
        console.log("LIIIIIKES LATINNO --- "+likes);
        LikeLatino.value = likes.Likes_Latino;
        LikeLatino.value++
        dataForm.Likes_Rap = likes.Likes_Rap;
        dataForm.Likes_Pop = likes.Likes_Pop;
        dataForm.Likes_Reggae = likes.Likes_Reggae;
        dataForm.Likes_Rock = likes.Likes_Rock;
        dataForm.Likes_Latino = LikeLatino.value;
    } else {
        dataForm.Likes_Rap = 0;
        dataForm.Likes_Pop = 0;
        dataForm.Likes_Reggae = 0;
        dataForm.Likes_Rock = 0;
        dataForm.Likes_Latino = 1;
    }
    // console.log("Latino :", dataForm);

    const { data, error: updateError } = await supabase.from("LikesDwinz").upsert(dataForm);

    RandomizeTrack();
  }
//   RandomizeTrack();
};

// const upsertData = async (dataForm) => {
//   const { data, error } = await supabase.from("LikesDwinz").select("Likes_Rap").single();
//   // Logique pour l'upsert des données
// };

const RandomizeTrack = () => {
  Randomizer.value = Math.floor(Math.random() * 10) + 1;
};



</script>

<template>

    <main class="main">
        <button class="main__dislikeButton" @click="RandomizeTrack"><img src="/assets/icons/cross.svg" alt="Button for Dislike"></button>
        <Card class="main__card" :randomTrack="Randomizer" />       
        <!-- <input type="text" :value="LikeRap"> -->
        <FormKit type="form" @submit="likeTrack" v-model="dataForm"> 
            <FormKit type="hidden" name="id_profil" />
            <FormKit type="hidden" name="Likes_Reggae" />
            <FormKit type="hidden" name="Likes_Rap"/>
            <FormKit type="hidden" name="Likes_Rock" />
            <FormKit type="hidden" name="Likes_Latino"/>
            <FormKit type="hidden" name="Likes_Pop" />
            <button type="submit" class="main__likeButton"><img src="/assets/icons/check.svg" alt="Button for Like"></button>
        </FormKit>
    </main>
</template>


<!-- const SUPABASE_URL = 'https://nmblwsaflcsvzrwfkybl.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tYmx3c2FmbGNzdnpyd2ZreWJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNDE0NDYsImV4cCI6MTk4OTgxNzQ0Nn0.kUNnwOb667kh1RG0YNFBMCDubpEjaE_2EyhAuPEtMhY'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// import {supabase} from '../supabase.js'
import Card from '../components/Card.vue';

export default {
  components: {
    Card,
  },
  data() {
        return {
            Randomizer: Math.floor(Math.random() * 10) + 1,
            data: [],
        };
    },
    mounted() {
        this.$refs.input.focus();
    },
    setup(){
        
    },
    methods: {
        async likeTrack(dataForm) {
          
            //  +1 au Rap
            console.log("Randomize est égal à ---- "+this.Randomizer);

            if (this.Randomizer == 1 || this.Randomizer == 5){
                // Récupérer les données / Envoies des données dans une variable / faire +1 / mettre dans le input type="hidden" / Renvoyer
                const { data, error } = await supabase.from("LikesDwinz").select("Likes_Rap").single();
                // const { data , error } = await supabase.from('LikesDwinz').upsert(dataForm.Likes_Rap++);
                
                console.log('Profils ---- ',data.Likes_Rap);
                
                console.log("mounted ====== " + this.$refs.like.type)

                console.log(dataForm);
                this.upsertData(dataForm);
                // const likes = ref();
                // const likes = this.$refs.input.value;
                // console.log("dfsfsdfdsgdsgsdg -- "+likes)

                // likes.value = data.Likes_Rap;
                // likes.value++;

                // this.$refs.input

                // const { data, error } = await supabase
                // .from("Profils")
                // .upsert(dataForm);
                // console.log(Profils.Likes_Rap);
                // console.log(dataForm);

            }
           else if (this.Randomizer == 4 || this.Randomizer == 7){
                // +1 au POP
            }
           else if (this.Randomizer == 2 || this.Randomizer == 6){
                // +1 au Rock
            }
            if (this.Randomizer == 3 || this.Randomizer == 10){
                // +1 au Reggae
            }
            if (this.Randomizer == 8 || this.Randomizer == 9){
                // +1 au Latino
            }  

            this.RandomizeTrack();
        },


         RandomizeTrack() {
             // Appel Fonction => +1 au genre en question
            this.Randomizer = Math.floor(Math.random() * 10) + 1;
            console.log("Index.vue Track - " + this.Randomizer);
        },
    },
};



// Rap : 1 | 5
// Pop : 4 | 7
// Rock : 2 | 6
// Reggae : 3 | 10
// Latino : 8 | 9

// var Randomizer = Math.floor(Math.random() * 10) + 1;

// function LikeTrack() {

//     // Appel Fonction => +1 au genre en question
//     if (Randomizer == 1 || Randomizer == 5){
//         // +1 au RAP
//     }
//     if (Randomizer == 4 || Randomizer == 7){
//         // +1 au POP
//     }
//     if (Randomizer == 2 || Randomizer == 6){
//         // +1 au Rock
//     }
//     if (Randomizer == 3 || Randomizer == 10){
//         // +1 au Reggae
//     }
//     if (Randomizer == 8 || Randomizer == 9){
//         // +1 au Latino
//     }

//     Randomizer = Math.floor(Math.random() * 10) + 1;
// }

// function DislikeTrack() {
//     Randomizer = Math.floor(Math.random() * 10) + 1;
// } -->

<style lang="scss">
    .formkit-wrapper {

    > button {
        display: none ;
    }
}
</style>


<style lang="scss" scoped>

    .main {
        display: grid;
        justify-items: center;
        align-items: center;
        justify-content: center;

        grid-template-columns: 30% 30% 30%;
        margin-left: 2%;
        margin-right: 2%;

        

        &__card {
            grid-column: 100%;

        }

        button {
            margin-top: 450%;
            @include x-large-up {
                margin-top: 0%;
            }
            border-radius: 100%;

            border: none;
            box-shadow: 3px 3px 3px $d-pinktonic;

            padding: 20px;
        }

         &__likeButton {

            background-color: $d-pinktonic;

            transition: all 0.3s ease;

            &:hover {
                background-color: $d-pink;
                transform: scale(1,10);
                transform: translateX(10px);
                }
        }

        &__dislikeButton {
             background-color: $d-grey;

             transition: all 0.3s ease;

             &:hover {
                background-color: $d-black;
                transform: scale(1,10);
                transform: translateX(-10px);
             }
        }
    }
</style>