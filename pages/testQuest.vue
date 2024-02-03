<template>
    <div>
      <h1>Chanson Aléatoire Spotify</h1>
      <iframe :src="spotifyEmbedUrl" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const spotifyEmbedUrl = ref('');
  
  const fetchRandomTrack = async () => {
    await this.$auth.loginWith('spotify');
    const response = await this.$axios.get('https://api.spotify.com/v1/me/tracks');
    const randomTrack = response.data.items[Math.floor(Math.random() * response.data.items.length)].track;
    spotifyEmbedUrl.value = `https://open.spotify.com/embed/track/${randomTrack.id}`;
    console.log('Spotify Embed URL:', spotifyEmbedUrl.value);
  };
  
  onMounted(() => {
    fetchRandomTrack();
  });
  </script>  