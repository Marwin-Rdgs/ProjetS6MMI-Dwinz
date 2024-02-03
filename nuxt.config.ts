// import { defineNuxtConfig } from 'nuxt3';

export default({
  devtools: { enabled: true },
  css: ['./assets/scss/main.scss'],
  env: {
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REDIRECT_URI: process.env.SPOTIFY_REDIRECT_URI,
  },
  auth: {
    strategies: {
      spotify: {
        clientId: process.env.SPOTIFY_CLIENT_ID,
        codeChallengeMethod: '',
        responseType: 'token',
        redirectUri: process.env.SPOTIFY_REDIRECT_URI,
      },
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/scss/foundations/mixins.scss";
          @import "@/assets/scss/foundations/variables.scss";          `
        }
      }
    }
  }
})