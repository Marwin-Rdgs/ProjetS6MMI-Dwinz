<!-- components/CompactCard.vue -->

<template>
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/18DQCUGYEvzGcCy50phQn7?utm_source=generator&theme=0" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </template>
  
  <script>
  export default {
    props: {
      music: {
        type: Object,
        required: true,
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

// iframe {
  //   margin: 2%;
  //   border-radius: 8px;
  //   background-color: $d-white;
  //   box-shadow: 0 8px 14px rgba(0, 0, 0, 0.1);
  //   transition: all 0.2s ease;
  
  //   &:hover {
  //     transform: scale(1.05);
  //   }
  // }
  
  //   iframe {
  //       position: relative;
        
  //     width: 100%;
  //     height: 100%;
  //     object-fit: cover;
  //     border-top-left-radius: 8px;
  //     border-top-right-radius: 8px;
  //   }

    // iframe {
    //     display: none;
        
    //     position: absolute;

    //     object-fit: cover;
    //     border-top-left-radius: 8px;
    //     border-top-right-radius: 8px;

    //     bottom: 0;
    //     height: 20%;
    //     width: 100%;
    // }

  </style>
  