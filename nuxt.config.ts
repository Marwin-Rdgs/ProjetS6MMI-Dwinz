export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['./assets/scss/main.scss'],
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
