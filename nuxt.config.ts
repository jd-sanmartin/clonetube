// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-primevue',
    '@nuxtjs/tailwindcss',
  ],
  app: {
    head: {
      title: 'CloneTube',
    },
  },
  runtimeConfig: {
    youtubeApiKey: process.env.NUXT_YOUTUBE_API_KEY,
    public: {
      youtubeApiUrl: process.env.NUXT_YOUTUBE_API_URL,
      firebaseConfig: {
        apiKey: process.env.NUXT_FIREBASE_API_KEY,
        authDomain: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NUXT_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NUXT_FIREBASE_APP_ID,
      },
    },
  },
  primeVue: {
    usePrimeVue: true,
    unstyled: true,
  },
  css: [
    'primevue/resources/themes/aura-dark-green/theme.css',
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css',
  ],
})
