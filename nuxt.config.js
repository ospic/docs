import colors from 'vuetify/es5/util/colors'
import i18n from "./plugins/i18n";
export default {
  target: 'static',
  ssr: false,
  router: {
    base: process.env.NODE_ENV === "production" ? "/docs/" : "/",
    routerNameSplitter: "/",
  },

  loadingIndicator: {
    name: 'pulse',
    color: ' #00A756',
    background: '#FAFAFA'
  },

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

  css: [
    '@/assets/css/styles.css'
  ],
  plugins: [
    "~/plugins/vuetify.js", 
    "~/plugins/prism.js", 
    "~/mixins/mixins.js"
  ],
  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],
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

  build: {
  },

  server: {
    port: process.env.NODE_ENV === "production" ? 8000 : 4000, // default: 3000
    host: "0.0.0.0", // default: localhost
  },
}
