<template>
    <main class="main">
        <button><img src="/assets/icons/check.svg" alt=""></button>
        <Card />
        <button><img src="/assets/icons/cross.svg" alt=""></button>
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