import Vue from 'vue';

import VImg from "~/components/VImg.vue";
import VTags from "~/components/VTags.vue";
import VNav from "~/components/VNav";
import VPages from "@/components/VPages";
import BlogPage from "@/components/blog-page.vue";
import AuthorPage from "@/components/Author.vue"
Vue.mixin({
  components:{
    "VImg":VImg,
    "VTags":VTags,
    "VNav":VNav,
    "v-pages": VPages,
    "blog-page":BlogPage,
    "v-author": AuthorPage
  },
  data: function () {
    return {     }
  },
  methods: {
    formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      }
  },
  computed: {
    isMdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    domain() {
      return window.location.hostname === "localhost";
    },
    locales(){
      return this._i18n.locales;
    },
    locale(){
      return this._i18n.localeProperties;
    },

  },
});