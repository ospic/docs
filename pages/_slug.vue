<template>
  <blog-page :pages="pages" :post="post" :next="next" :prev="prev"></blog-page>
</template>
<script>
import blogPage from "../components/blog-page.vue";

export default {
  layout: "blog",
  components: { blogPage },
  async asyncData({ $content, params, app }) {
    const post = await $content(`${app.i18n.locale}`, params.slug).fetch();

    const pages = await $content(`${app.i18n.locale}`)
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "asc")
      .fetch();

    const [prev, next] = await $content(`${app.i18n.locale}`)
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();
    return { post, pages, prev, next };
  },
   head() {
    return {
      title: this.post.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.post.title },
        { hid: 'og:description', property: 'og:description', content: this.post.description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.post.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.post.description }
      ]
    }
  },
  data() {
    return {
      title: "Home page"
    };
  },
};
</script>
