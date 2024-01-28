// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    'nuxt-primevue',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
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
