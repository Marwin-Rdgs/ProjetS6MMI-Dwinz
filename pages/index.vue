<template>

    <main class="main">
        <button class="main__dislikeButton" @click="RandomizeTrack"><img src="/assets/icons/cross.svg" alt="Button for Dislike"></button>
        <Card class="main__card" :randomTrack="Randomizer" />       
        <form @submit.prevent="likeTrack"> 
            <input type="hidden" >
            <button type="submit" class="main__likeButton"><img src="/assets/icons/check.svg" alt="Button for Like"></button>
        </form>
    </main>
</template>

<script>
import {supabase} from '../supabase'
import Card from '../components/Card.vue';

export default {
  components: {
    Card,
  },
  data() {
        return {
            Randomizer: Math.floor(Math.random() * 10) + 1,
        };
    },
    methods: {

        async likeTrack() {
    // Identifier l'utilisateur actuel (remplacer 'userId' par l'ID de l'utilisateur)
    
    const userId = 'userId'; // Remplacer cela par la vraie méthode d'identification de l'utilisateur

    // Sélectionner les données de l'utilisateur actuel
    const { data: userProfile, error } = await supabase
        .from('Profils')
        .select()
        .eq('id', userId)
        .single();

    if (error) {
        console.error('Erreur lors de la récupération du profil de l\'utilisateur:', error.message);
        return;
    }

    // Incrémenter le compteur approprié en fonction de la valeur de Randomizer
    let genreToIncrement = '';
    if (this.Randomizer == 1 || this.Randomizer == 5) {
        genreToIncrement = 'Likes_Rap';
    } else if (this.Randomizer == 4 || this.Randomizer == 7) {
        genreToIncrement = 'Likes_Pop';
    } else if (this.Randomizer == 2 || this.Randomizer == 6) {
        genreToIncrement = 'Likes_Rock';
    } else if (this.Randomizer == 3 || this.Randomizer == 10) {
        genreToIncrement = 'Likes_Reggae';
    } else if (this.Randomizer == 8 || this.Randomizer == 9) {
        genreToIncrement = 'Likes_Latino';
    }

    // Incrémenter le compteur dans le profil de l'utilisateur
    const updatedUserProfile = { ...userProfile };
    updatedUserProfile[genreToIncrement] += 1;

    // Mettre à jour ou insérer le profil de l'utilisateur dans la base de données
    const { data: updatedProfileData, error: updateError } = await supabase
        .from('Profils')
        .upsert(updatedUserProfile);

    if (updateError) {
        console.error('Erreur lors de la mise à jour du profil de l\'utilisateur:', updateError.message);
        return;
    }

    console.log('Profil de l\'utilisateur mis à jour avec succès:', updatedProfileData);
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
// }


</script>

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