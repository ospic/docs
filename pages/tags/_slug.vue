<template>
  <div class="posts">
    <h1>Tags: {{ $route.params.slug }}</h1>
    <div v-for="post in posts" :key="post.dir">
      <h3 class="heading">{{ post.title }}</h3>
      <p>{{ post.description }}</p>
       <v-tags :tags="post.tags" />
      <nuxt-link :to="post.dir">Read more</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ params, error, $content }) {
    try {
      const posts = await $content("posts", { deep: true })
        .where({ tags: { $contains: params.slug } })
        .fetch();
      return { posts };
    } catch (err) {
      error({
        statusCode: 404,
        message: "Page could not be found",
      });
    }
  },
  head() {
    return {
      title: "Tags",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Cool nuxt blog tags",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://nuxt-blog.com/tags",
        },
      ],
    };
  },
};
</script>