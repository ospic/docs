<template>
<div>
    <blog-page :pages="pages" :post="post" :next="next"></blog-page>
</div>
</template>
<script>
export default {
   layout: 'blog',
  async asyncData({ params, error, $content,app }) {
    console.log(app.i18n.locale)
    try {
      const [post] = await $content(`${app.i18n.locale}/docs`, { deep: true }).fetch();
      const pages = await $content(`${app.i18n.locale}/docs`)
        .only(["title", "description", "img", "slug", "author"])
        .sortBy("createdAt", "asc")
        .fetch();

      const [prev, next] = await $content(`${app.i18n.locale}/docs`)
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc').fetch()
      return { post, pages, prev, next };
    } catch (err) {
      error({
        statusCode: 404,
        message: "Page could not be found"
      });
    }
  },

  mounted() {
    Prism.highlightAll();
  },
  computed: {
    screen() {
      console.log(window.screen.height);
      return window.screen.height - 150;
    }
  }
};
</script>
