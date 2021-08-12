import i18n from "./plugins/i18n";
import metajs from './plugins/meta';
const meta = metajs();
const routerBase = process.env.DEPLOY_ENV === 'prod' ? '/docs/' : '/';
const createSitemapRoutes = async () => {
  let routes = [];
  let posts = [];
  const { $content } = require('@nuxt/content')
  if (posts === null || posts.length === 0)
   posts = await $content(`${i18n.locale}`).fetch();
  for (const post of posts) {
    routes.push(`${post.slug}`);
  }
  return routes;
}

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
    //titleTemplate: 'Ospic documentation',
    //title: 'Ospic documentation',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      ...meta,
      { charset: 'utf-8' },
      /**Chrome, Firefox OS and Opera **/
      { name: "theme-color", content: "#00A756" },
      /**Windows phone **/
      { name: "msapplication-navbutton-color", content: "#00A756" },
      /**iOS Safari**/
     { name: "apple-mobile-web-app-status-bar-style", content: "#00A756" },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
     /**   { hid: 'description', name: 'description', content: 'Hospital Management System documentation' },
      { hid: 'og:image', property: 'og:image', content: "https://docs.ospicx.com/preview.png" || '' },
      { property: "og:site_name", content: "Ospic documentation" },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: "https://docs.ospicx.com", },
      { hid: "og:title", property: "og:title",content: "Ospic documentation",},
       **/
      //Twitter meta-data
        { hid: "twitter:site", name: "twitter:site", content: "ospicapp" },
        { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
        { hid: "twitter:image:alt", name:"twitter:image:alt",content: "Ospic documentation"},
     
    
      
        
     
       

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    'nuxt-i18n',
    '@nuxtjs/sitemap',
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
    async routes() {
      const { $content } = require('@nuxt/content')
      const dynamicRoutes = await $content(`${i18n.locale}`, { deep: true }).only(['slug']).fetch()
      //return dynamicRoutes.map(myroute => myroute.slug === '/index' ? '/' : `/${i18n.locale}` + myroute.slug)
      return dynamicRoutes.map(file => file.slug === '/index' ? '/' :  file.slug)

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
        /*
     ** You can extend webpack config here
     */
     publicPath: process.env.NODE_ENV === 'production' ? '/assets/' : '',
     extend(config, ctx) { },
     postcss: {
       preset: {
         features: {
           customProperties: false
         }
       }
     },
     terser: {
       extractComments: false // default was LICENSES
     }
  },
  pwa: {
    manifest: {
      name: 'Ospic documentation',
      short_name: 'Ospic Doc',
      color_theme: "#2F4454",
      background_color:"#2F4454",
      lang: 'en',
      useWebmanifestExtension: false
    },
    meta: {
      /* meta options */
      name: "OspicDoc",
      author: "Ospic",
      description: "Ospic Hospital management system documentation",
      lang: "en",
      ogType: "website",
      ogSiteName: "OspicDoc",
      ogTitle: "Ospic Documentation",
      ogDescription: "Ospic Hospital management system documentation",
      ogHost: "https://docs.ospicx.com/",
      ogImage: "https://docs.ospicx.com/preview.png",
      ogUrl: "",
      twitterCard: "Ospic",
      twitterSite: "ospicapp",


    },
    icon: {
      iconSrc: '/static/icon.png'
    }
  },
  /**Sitemap file */
  sitemap: {
    hostname: 'https://docs.ospicx.com',
    gzip: false,
  
    /** 
    i18n:{
      locales:['en','es','fr','sw'],
      routerNameSplitter: '/'
    },
    **/
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    },
    routes: createSitemapRoutes
  },

  server: {
    port: process.env.NODE_ENV === "production" ? 8000 : 4000, // default: 3000
    host: "0.0.0.0", // default: localhost
  },
}
