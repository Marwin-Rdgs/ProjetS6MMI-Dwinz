<template>
    <main class="main">
        <button>Likes</button>
        <Card />
        <button>Dislikes</button>
    </main>
</template>


<style lang="scss">
    main {
        display: grid;
        grid-template-columns: 30% 30% 30%;
        justify-items: center;

        button {
            border-radius: 100%;
            background-color: $d-pink;

        }
    }
</style>