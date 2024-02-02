<!-- components/CompactCard.vue -->

<template>
        <iframe style="border-radius:12px" src="https://open.spotify.com/intl-fr/track/11dFghVXANMlKmJXsNCbNl?si=f8fc58e8826d4b6c" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </template>
  
  <!-- <script>
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

        // Utilisez l'API Spotify pour obtenir une liste de pistes (exemple avec 50 pistes)
        const response = await axios.get('https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA', {
          headers: {
            "Authorization": "Bearer BQAFzjw-F3Dg8n5DJu0hTQUispsPlaSFL-XMMxrgvp-cPAzPpRGCRGT4a7-ExOB6jMdWdmft3DkVHTMCGjQ6WaCzwvVF1u_InrRL4JT09tbsUVVfCGs",
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
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

    // Encodez les identifiants client (client ID et client secret) en base64
    // const base64Credentials = btoa(`${clientId}:${clientSecret}`);

    // Effectuez une demande de token d'accès en utilisant le flux d'authentification de l'application
   return await fetch(
      'https://accounts.spotify.com/api/token',
      // new URLSearchParams({
      //   grant_type: 'client_credentials',
      // }),
      {
        method: "POST",
        headers: {
          // Authorization: `Basic ${base64Credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:"grant_type=client_credentials&client_id=81e2ef79316d47f4b36de1a7239c7b47&client_secret=bdb7d535d8dd424681995fee39a4049a",
      }
    )
    .then(result => {
      return result.json()
    })
    .then(data => console.log(data))

    // Récupérez le token d'accès dans la réponse
    // console.log("console log d'hugo : " + response);
    // const accessToken = response.data.access_token;
    console.log("console log d'hugo : " + data)

    // return accessToken;
  .catch (error => {throw error}) 
  // console.error('Erreur lors de l\'obtention du token d\'accès Spotify :', error);
},
  },
};


  </script> -->
  
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
  