<!-- components/CompactCard.vue -->

<template>
        <iframe style="border-radius:12px" :src="iframeSrc" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </template>
  
  <script>
// Assurez-vous d'installer axios dans votre projet NuxtJS
// npm install axios

// Importez axios dans votre fichier
import axios from 'axios';

export default {
  data() {
    return {
      iframeSrc: null
    };
  },
  async mounted() {
    this.iframeSrc = await this.getRandomTrack();
  },  
  methods: {
    async getRandomTrack() {
      try {
        // Obtenez le token d'accès Spotify en utilisant vos identifiants d'application
        // const accessToken = await this.getSpotifyAccessToken();
console.log(await this.getSpotifyAccessToken())
        // Utilisez l'API Spotify pour obtenir une liste de pistes (exemple avec 50 pistes)
        const response = await axios.get('https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK', {
          headers: {
            "Authorization": "Bearer"
          },
        })
        // .then(response => {
        //   return response.json()}
        //   )
        // .then(data => console.log(data));
        console.log(response.data)
        // Sélectionnez une piste aléatoire parmi la liste
        const randomTrack = response.data.items[Math.floor(Math.random() * response.data.items.length)];

        // Construisez le lien de l'iframe Spotify avec l'ID de la piste sélectionnée
        const iframeSrc = `https://open.spotify.com/embed/track/${randomTrack.id}`;

        return iframeSrc;
      } catch (error) {
        console.error('Erreur lors de la récupération de la piste aléatoire :', error);
        return null;
      }
    },
    async getSpotifyAccessToken() {
    // const clientId = process.env.SPOTIFY_CLIENT_ID;
    // const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    // const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

    // Encodez les identifiants client (client ID et client secret) en base64
    // const base64Credentials = btoa(`${clientId}:${clientSecret}`);
try{
    // Effectuez une demande de token d'accès en utilisant le flux d'authentification de l'application
   const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      // new URLSearchParams({
      //   grant_type: 'client_credentials',
      // }),
      {
        headers: {
          // Authorization: `Basic ${base64Credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:"grant_type=client_credentials&client_id=81e2ef79316d47f4b36de1a7239c7b47&client_secret=bdb7d535d8dd424681995fee39a4049a",
      }
    )

    // Récupérez le token d'accès dans la réponse
    // console.log("console log d'hugo : " + response);
    // const accessToken = response.data.access_token;
    console.log("console log d'hugo : " + response)
  } catch (error) {
        console.error('Erreur lors de la récupération de la piste aléatoire :', error);
        return null;
      }
    // return accessToken;
  
  // console.error('Erreur lors de l\'obtention du token d\'accès Spotify :', error);
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
  