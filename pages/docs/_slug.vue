<template>

<blog-page :pages="pages" :post="post"></blog-page>
</template>
<script>
import blogPage from '../../components/blog-page.vue';
export default {
  layout: 'blog',
  components: { blogPage },
  async asyncData({ $content, params,app }) {
    const post = await $content(`${app.i18n.locale}/docs`, params.slug).fetch();

    const pages = await $content(`${app.i18n.locale}/docs`)
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "asc")
      .fetch();
    return { post, pages };
  }
};
</script>
