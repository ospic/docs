import Vue from 'vue';

import VImg from "~/components/VImg.vue";
import VTags from "~/components/VTags.vue";
import VNav from "~/components/VNav";
import VPages from "@/components/VPages";
import BlogPage from "@/components/blog-page.vue";

Vue.mixin({
  components:{
    "VImg":VImg,
    "VTags":VTags,
    "VNav":VNav,
    "v-pages": VPages,
    "blog-page":BlogPage
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

  },
});