<template>
    <div>
      <h1>Chanson aléatoire depuis Spotify</h1>
      <button @click="getRandomSong">Obtenir une chanson aléatoire</button>
      <div v-if="randomSong">
        <h2>{{ randomSong.name }}</h2>
        <p>Artiste: {{ randomSong.artists[0].name }}</p>
        <p>Album: {{ randomSong.album.name }}</p>
        <p>URL: <a :href="randomSong.external_urls.spotify" target="_blank">{{ randomSong.external_urls.spotify }}</a></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        randomSong: null
      };
    },
    methods: {
      async getRandomSong() {
        try {
          const token = await this.getSpotifyToken();
          const response = await this.$axios.get('https://api.spotify.com/v1/me/player/play', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          this.randomSong = response.data.item;
        } catch (error) {
          console.error('Erreur lors de la récupération de la chanson aléatoire', error);
        }
      },
      async getSpotifyToken() {
        // Implement logic to get Spotify access token using your client ID and client secret
        // You may want to use a server-side solution for security reasons
        // Example: https://github.com/spotify/web-api-auth-examples
        const response = await this.$axios.post('/api/get-spotify-token');
        return response.data.access_token;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Vos styles SCSS ici */
  </style>
  