<template>

    <div class="header">
        <img src="../assets/icons/LogoComplet.svg" alt="Logo Dwinz" class="header__logo">
        <h1 class="header__title">Refléter votre personnalité à travers un immense univers musicale</h1>
        <img src="../assets/icons/settings.svg" alt="Icon to settings" class="header__settings">
    </div>

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

    .header {
        background-color: $d-black;
        
        display: grid;
        grid-template-columns: 20% 60% 20%;
        margin-bottom: 10%;

        align-items: center;
        justify-content: center;

        &__logo {
            width: 100%;
            margin: 12%;

            transition: all 0.3s ease;
            transform: scale(100%);

            @include x-large-up {
                width: 40%;
            }

            &:hover {
                transform: scale(110%);
            }
        }

        &__title {
            margin-left: auto;
            margin-right: auto;
            
            text-align: center;
            
            font-family: $primary-font-family;
            color: $d-white;

            font-size: 14px;
            @include x-large-up {
                font-size: 24px;
                width: 50%;
            }
        }

        &__settings {
            
            @include x-large-up {
                width: 15%;
            }
            margin-left: auto;
            margin-right: auto;

            transform: scale(100%);
            transition: all 0.3s ease;

            &:hover {
                transform: scale(105%);
            }
        }
    }
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

            @include x-large-up {
                grid-column: 30%;
            }
        }

        button {
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