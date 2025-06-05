export default defineNuxtConfig({

  modules: [
    '@nuxtjs/seo',
    'nuxt-content-twoslash',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'motion-v/nuxt',
    'nuxt-mcp',
    'nuxt-llms'
  ],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Metaflowlabs',
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon-192x192.png' }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' }
      ]
    },
    pageTransition: false,
    layoutTransition: false
  },
  css: ['/assets/css/main.css'],
  router: { options: { scrollBehaviorType: 'smooth' } },
  site: { url: 'https://metaflowlabs.nuxt.space' },
  colorMode: { preference: 'system' },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'material-theme-lighter',
            dark: 'material-theme-palenight'
          },
          langs: ['python']
        }
      }
    }
  },
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'info', 'success', 'warning', 'error']
    }
  },
  routeRules: {
    '/': { prerender: false }
  },
  future: { compatibilityVersion: 4 },
  experimental: {
    viewTransition: true
  },
  compatibilityDate: '2025-01-05',

  fonts: {
    families: [
      { name: 'Nunito', provider: 'google' },
      { name: 'Newsreader', provider: 'google', weights: ['400', '400i', '700'] }
    ]
  },
  llms: {
    domain: 'https://metaflowlabs.nuxt.space',
    title: 'Metaflowlabs',
    description: 'Metaflowlabs is an all-in-one development hub for Metaflow, providing in-depth guides, tutorials and reusable patterns for working with Metaflow.',
    full: {
      title: 'The full Metaflowlabs Landing-Page documentation, blog content for llms',
      description: 'The complete Metaflowlabs documentation and blog posts written in Markdown (MDC syntax).'
    }
  }
})
