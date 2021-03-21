import i18n from "./plugins/i18n";
const routerBase = process.env.DEPLOY_ENV === 'prod' ? '/docs/' : '/';
export default {
  ssr: false,
  router: {
    base: routerBase,
    routerNameSplitter: "/",
  },

  loadingIndicator: {
    name: 'pulse',
    color: ' #00A756',
    background: '#FAFAFA'
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Ospic documentation',
    title: 'docs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vuetify.js", 
    "~/plugins/prism.js", 
    "~/mixins/mixins.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    'nuxt-i18n',
  ],
  content: {
    nestedProperties: ['author.name'],
    markdown: {
      prism: {
        theme: false,
      },
      tocDepth: 4
    },
  },
    generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const dynamicRoutes = await $content(`${i18n.locale}`).only(['slug']).fetch()
      return dynamicRoutes.map(myroute => myroute.slug === '/index' ? '/' : '/' + myroute.slug)
    
    }
  },
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
      {
        code: 'sw',
        iso: 'sw-sw',
        name: 'Swahili',
      },
      {
         code: 'es',
         iso: 'en-ES',
         name: 'Español',
       },
     
       {
         code: 'fr',
         iso: 'fr-fr',
         name: 'Français',
       }
     
    ],
    defaultLocale: 'en',
    noPrefixDefaultLocale: true,
    vueI18n: i18n,
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    port: process.env.NODE_ENV === "production" ? 8000 : 4000, // default: 3000
    host: "0.0.0.0", // default: localhost
  },
}
