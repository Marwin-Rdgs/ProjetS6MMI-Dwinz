<template>

    <main class="main">
        <button class="main__dislikeButton" @click="dislikeTrack"><img src="/assets/icons/cross.svg" alt="Button for Dislike"></button>
        <Card class="main__card" :randomTrack="Randomizer" />        
        <button class="main__likeButton" @click="likeTrack"><img src="/assets/icons/check.svg" alt="Button for Like"></button>
    </main>
</template>

<script>

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
        likeTrack() {
            //     // Appel Fonction => +1 au genre en question
            if (this.Randomizer == 1 || this.Randomizer == 5){
                // +1 au RAP
            }
            if (this.Randomizer == 4 || this.Randomizer == 7){
                // +1 au POP
            }
            if (this.Randomizer == 2 || this.Randomizer == 6){
                // +1 au Rock
            }
            if (this.Randomizer == 3 || this.Randomizer == 10){
                // +1 au Reggae
            }
            if (this.Randomizer == 8 || this.Randomizer == 9){
                // +1 au Latino
            }
            this.Randomizer = Math.floor(Math.random() * 10) + 1;
            console.log("Index.vue Track - " + this.Randomizer);
        },
        dislikeTrack() {
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