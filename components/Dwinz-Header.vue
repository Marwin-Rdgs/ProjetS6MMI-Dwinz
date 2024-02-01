<template>
        <div class="header">
            <NuxtLink to="/"><img src="../assets/icons/LogoComplet.svg" alt="Logo Dwinz" class="header__logo"></NuxtLink>
            <h1 class="header__title">Refléter votre personnalité à travers un immense univers musicale</h1>
        <NuxtLink to="/profil/12"><img src="../assets/icons/profil.svg" alt="Icon to settings" class="header__settings"></NuxtLink>
    </div>
</template>

<style lang="scss">
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
</style>