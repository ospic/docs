<template>
  <article>
    <nuxt-content :document="article" />
    <p>Post last updated: {{ article.updatedAt }}</p>
  </article>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles")
    .only(['title','description','img','slug','author']).fetch();
    console.log(article);
    return { article };
  }
};
</script>
