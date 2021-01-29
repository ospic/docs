<template>
  <div class="posts">
    <h1>Posts</h1>
    <div v-for="post in posts" :key="post.dir">
      <h3 class="heading">{{ post.title }}</h3>
      <p>{{ post.description }}</p>
      <p class="tags">
        <span v-for="tag in post.tags" :key="tag" class="tag">
          <nuxt-link :to="`/tags/${tag}`">{{ tag }}</nuxt-link>
          &nbsp;
        </span>
      </p>
      <nuxt-link :to="post.dir">Read more</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ params, error, $content }) {
    try {
      const posts = await $content("posts", { deep: true }).fetch();
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
      title: "Home",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Cool nuxt blog",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://nuxt-blog.com/",
        },
      ],
    };
  },
};
</script>
<style scoped>
.tag{
  text-decoration: none;
}
</style>