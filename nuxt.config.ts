// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // typescript: {
  //   typeCheck: true
  // },
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