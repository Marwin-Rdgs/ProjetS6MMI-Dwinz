<template>
    <main class="main">
        <button class="main__dislikeButton"><img src="/assets/icons/cross.svg" alt="Button for Dislike"></button>
        <Card class="main__card"/>
        <button class="main__likeButton"><img src="/assets/icons/check.svg" alt="Button for Like"></button>
    </main>
</template>


<style lang="scss" scoped>
    .main {
        display: grid;
        justify-items: center;
        align-items: center;

        grid-template-columns: 30% 30% 30%;

        &__card {
            grid-column: 100%;

            @include x-large-up {
                grid-column: 30%;
            }
        }

        button {
            border-radius: 100%;

            border: none;

            padding: 20px;
        }

         &__likeButton {

            background-color: $d-pink;

            transition: all 0.3s ease;

            &:hover {
                background-color: $d-pinktonic;
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