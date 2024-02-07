export default ({
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL || 'https://nmblwsaflcsvzrwfkybl.supabase.co',
    SUPABASE_KEY: process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tYmx3c2FmbGNzdnpyd2ZreWJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNDE0NDYsImV4cCI6MTk4OTgxNzQ0Nn0.kUNnwOb667kh1RG0YNFBMCDubpEjaE_2EyhAuPEtMhY',
  },
  modules: ['@formkit/nuxt'],
  formkit: {
    autoImport: true,
  },
  auth: {
    strategies: {
      spotify: {
        clientId: '81e2ef79316d47f4b36de1a7239c7b47',
        codeChallengeMethod: '',
        responseType: 'token',
        redirectUri: 'https://nmblwsaflcsvzrwfkybl.supabase.co/auth/v1/callback',
      },
    },
  },
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
