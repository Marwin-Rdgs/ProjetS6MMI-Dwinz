<template>
    <div id="DwinzBg">

      <NuxtLayout />

    </div>
</template>

<script>
import 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';


export default {
  mounted() {
    // Chargez le script directement dans le fichier HTML
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js";
    document.head.appendChild(script);

    script.onload = () => {
      // Initialisez Vanta.js avec les options souhaitées (couleurs personnalisées)
      VANTA.FOG({
        el: "#DwinzBg", // ID ou sélecteur du conteneur
        highlightColor: 0xff8787, // Couleur de surbrillance personnalisée
        midtoneColor: 0xff9e96, // Couleur médiane personnalisée
        lowlightColor: 0xff6262, // Couleur de faible luminosité personnalisée
        baseColor: 0xefcfcf,
        blurFactor: 0.38,
        speed: 4,
      });
    };
  },
  beforeDestroy() {
    // Nettoyez Vanta.js lors de la destruction du composant
    if (window.VANTA) {
      window.VANTA.FOG.destroy();
    }
  },
};
</script>

<style lang="scss">

#DwinzBg {
  position: absolute;
  z-index: -1;
  width: 100%;
}

</style>