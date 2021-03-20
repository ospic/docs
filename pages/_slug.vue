<template>

   <blog-page :pages="pages" :post="post" :next="next" :prev="prev"></blog-page>

</template>
<script>
import blogPage from '../components/blog-page.vue';
export default {
  layout: 'blog',
  components: { blogPage },
  async asyncData({ $content, params,app }) {
    const post = await $content(`docs/${app.i18n.locale}`, params.slug).fetch();

    const pages = await $content(`docs/${app.i18n.locale}`)
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "asc")
      .fetch();

      const [prev, next] = await $content(`docs/${app.i18n.locale}`)
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
      return { post, pages, prev, next };
  }
};
</script>
