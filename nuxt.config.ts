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
  modules: ["@pinia/nuxt", '@nuxt/ui', '@nuxt/eslint', '@nuxt/image', ['@nuxtjs/google-fonts', {
    families: {
      "Bebas Neue": true,
      "Mukta": true
    },
    preload: true, 
    prefetch: true,
    download: true,
    inject: true 
  }], '@nuxtjs/robots', '@nuxtjs/sitemap', "nuxt-link-checker", 'nuxt-vitalizer'],
  icon: ["heroicons", "grommet-icons"],
    image: {
    format: ['avif', 'webp'],
    quality: 75,
  },
  nitro: {
    serveStatic: true,
    prerender: {
      routes: ['/',]
    }
  },
  experimental: {
    renderJsonPayloads: true,
    // payloadExtraction: true,
  },
})