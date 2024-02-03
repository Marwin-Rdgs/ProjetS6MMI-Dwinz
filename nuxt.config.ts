export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['./assets/scss/main.scss'],
  modules: ['@nuxtjs/axios',],
  axios: {
    baseURL: 'https://api.spotify.com',
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
