<!-- components/CompactCard.vue -->

<template>
  <iframe
    style="border-radius: 12px"
    :src="track"
    frameborder="0"
    allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
</template>

<script>
export default {
  props: {
    randomTrack: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      track: "",
    };
  },
  watch: {
    randomTrack: "generateTrackUrl",
  },
  mounted() {
    this.generateTrackUrl();
  },
  methods: {
    generateTrackUrl() {
      switch (this.randomTrack) {
        case 1:
          // RAP FR - Demain | PLK
          this.track =
            "https://open.spotify.com/embed/track/66TAAKeoOD0cFpVRug9IXZ?utm_source=generator&theme=0";
            console.log("Track 1");
          break;

        case 2:
          // ROCK - ThunderStruck | ACDC
          this.track =
            "https://open.spotify.com/embed/track/57bgtoPSgt236HzfBOd8kj?utm_source=generator&theme=0";
            console.log("Track 2");
          break;

        case 3:
          // Reggae - Is This Love | Bob Marley
          this.track =
            "https://open.spotify.com/embed/track/6JRLFiX9NJSoRRKxowlBYr?utm_source=generator";
            console.log("Track 3");
            break;

        case 4:
          // Pop - Billie Jean | Michael Jackson
          this.track =
            "https://open.spotify.com/embed/track/7J1uxwnxfQLu4APicE5Rnj?utm_source=generator&theme=0";
            console.log("Track 4");
            break;

        case 5:
          // Rap - Life | Hamza
          this.track =
            "https://open.spotify.com/embed/track/1oHh0DAi8nJDORn90H97QA?utm_source=generator&theme=0";
            console.log("Track 5");
            break;

        case 6:
          // Rock - Pyromane | Bandit Bandit
          this.track =
            "https://open.spotify.com/embed/track/7fpg6UBygCX0UR93lBPATO?utm_source=generator&theme=0";
            console.log("Track 6");
            break;

        case 7:
          // POP - When we wre young | David Guetta
          this.track =
            "https://open.spotify.com/embed/track/1CcLA0eaauck34YEIrvAAq?utm_source=generator&theme=0";
            console.log("Track 7");
            break;

        case 8:
          // Latino - J.Balvin
          this.track =
            "https://open.spotify.com/embed/track/4s7hIsoRpnmaSvdETaIOSe?utm_source=generator&theme=0";
            console.log("Track 8");
            break;

        case 9:
        //  Latino
          this.track =
            "https://open.spotify.com/embed/track/2NGbCghWkDGTZtknazgEuf?utm_source=generator&theme=0";
            console.log("Track 9");
            break;

        case 10:
          // Reggae 
          this.track =
            "https://open.spotify.com/embed/track/6faizLtnq6b1tlU1iVE8W1?utm_source=generator&theme=0";
            console.log("Track 10");
        
        default:
          this.track = 
          "https://open.spotify.com/embed/track/57bgtoPSgt236HzfBOd8kj?utm_source=generator";
          console.log("Track Default");
          break;
      }
    },
  },
};
</script>

<style scoped lang="scss">
  iframe {
    transition: all 0.2s ease;

    @include x-large-up {
      width: 150%;
      height: 200%;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
</style>
