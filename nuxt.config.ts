// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        { name: 'google-site-verification', content: 'jvGt8cPvoYQile3Fh5yqwYk3K3qGkPgFE8ozb9bLg2E'}
      ]
    }
  },
  modules: [
    "@pinia/nuxt",
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    ['@nuxtjs/google-fonts', {
      families: {
        "Bebas Neue": true,
        "Mukta": true
      },
      preload: true
    }],
  ],
  icon: ["heroicons", "grommet-icons"],
})