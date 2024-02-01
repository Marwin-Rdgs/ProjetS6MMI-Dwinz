<template>
    <footer>
        <div class="listicon">
            <a href="https://www.instagram.com/dwinz.off/" target="_blank"><img src="../assets/icons/Instagram.svg" alt="Icon for Instagram" class="listicon_item"></a>
            <a href="https://www.tiktok.com/@.dwinz"><img src="../assets/icons/Tiktok.svg" alt="Icon for Tiktok" class="listicon_item"></a>
        </div>
        <div class="footer__legal">
            <p><NuxtLink to="/legal"> Mentions Légales</NuxtLink> | <NuxtLink to="/legal">Politique de Confidentialité</NuxtLink></p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>

    footer {
        background-color: $d-black;
        padding-top: 5%;
        padding-bottom: 2%;

        margin-top: 10%;
        

        > .listicon {
            display: flex;
            justify-content: center;

            gap: 2%;

            > a > img {
                transform: scale(100%);
                transition: all 0.3s ease;

                &:hover {
                    transform: scale(120%);
                    transform: translateY(-10px);
                }
            }
        }

        > .footer__legal {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;

            margin-top: 2%;

            gap: 4%;

             > p { 
                color: $d-white;
                font-family: $secondary-font-family;
                font-size: 16px;
             
                > a {
                    color: $d-white;
                    text-decoration: none;

                    &:hover {
                        text-decoration: underline;
                        font-weight: bold;
                    }
                }
            }
        }

    }

</style>