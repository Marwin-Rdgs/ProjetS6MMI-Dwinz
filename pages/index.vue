<template>

    <main class="main">
        <button class="main__dislikeButton"><img src="/assets/icons/cross.svg" alt="Button for Dislike"></button>
        <Card class="main__card" 
        :music="musicexemple"/>
        
        <button class="main__likeButton"><img src="/assets/icons/check.svg" alt="Button for Like"></button>
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
        musicexemple: {
        title: 'Titre de la musique',
        photo: 'https://media3.giphy.com/media/R7KRZAeVVphDy/giphy.gif',
        author: 'Nom',
        style: 'Rap',
        // Ajoutez d'autres informations ici
      },
    };
  },
};
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