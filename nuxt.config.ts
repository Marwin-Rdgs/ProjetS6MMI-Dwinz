export default ({
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL || 'https://aglwlxinesjnvxdjfdqx.supabase.co',
    SUPABASE_KEY: process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnbHdseGluZXNqbnZ4ZGpmZHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxMTc2OTMsImV4cCI6MjAyMjY5MzY5M30.Xkfnez7lHZcwnMYNd8dIkoVJWq0nUCN2iNpPE19UlYA',
  },
  auth: {
    strategies: {
      spotify: {
        clientId: '81e2ef79316d47f4b36de1a7239c7b47',
        codeChallengeMethod: '',
        responseType: 'token',
        redirectUri: 'https://aglwlxinesjnvxdjfdqx.supabase.co/auth/v1/callback',
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
