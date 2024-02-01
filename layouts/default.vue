<template>
    <div class="layout">
        <div class="layout__header">
            <Dwinz-Header />
        </div>

        <div class="layout__main">
            <NuxtPage />
        </div>

        <div class="layout__footer">
            <Dwinz-Footer />
        </div>

    </div>
</template>

<style lang="scss" scoped>
    .layout {
        display: grid;
        grid-template: 
        "header"
        "main"
        "footer";

        &__header {
            grid-area: header;
        }

        &__main {
            grid-area: main;
        }

        &__footer {
            grid-area: footer;
        }
    }
</style>