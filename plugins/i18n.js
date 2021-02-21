
import Vue from "vue";
import NuxtI18n from "nuxt-i18n";

// Tell Vue to use our plugin
Vue.use(VueI18n);

export default ({ app }) => {
  // Set the i18n instance on app
  // This way we can use it globally in our components through this.$i18n
  app.i18n = new NuxtI18n({
    // Set the initial locale
    locale: "en",

    // Set the fallback locale in case the current locale can't be found
    fallbackLocale: "en",
    noPrefixDefaultLocale: true,
    // Associate each locale to a content file
    messages: {
      en: require("~/static/locales/en-us.json"),
      sw: require("~/static/locales/sw-sw.json"),
      fr: require("~/static/locales/fr-fr.json"),
      ar: require("~/static/locales/ar-ar.json"),
    },
  });
};