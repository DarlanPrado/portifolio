// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/html-validator',
    '@nuxtjs/i18n',
    '@nuxt/image',
    'nuxt-libras',
    '@nuxtjs/mdc'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    defaultLocale: 'br',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'us', name: 'English' },
      { code: 'br', name: 'Português' }
    ],
    customRoutes: 'config',
    pages: {
      projects: {
        us: '/projects',
        br: '/projetos'
      },
      project: {
        us: '/project',
        br: '/projeto'
      }
    }
  }
})