<template>
  <div>
    <div class="post-header">
      <h1 class="h1 post-h1">{{ post.title }}</h1>
      <p v-if="post.description" class="excerpt">
        {{ post.description }}
      </p>
      <div class="post-details">
        <div class="tags">
          <span v-for="(tag, i) in post.tags" :key="i" class="tag">
            <nuxt-link :to="'/tags/' + tag">#{{ tag }}</nuxt-link>
          </span>
        </div>
        <div class="date">{{ post.date | date }}</div>
      </div>
      <v-img
        v-if="post.image"
        class="post-img"
        :src="post.image"
        :alt="post.title"
      ></v-img>
    </div>
    <nuxt-content :document="post" />
  </div>
</template>
<script>
import VImg from "~/components/VImg";

export default {
  components: {
    VImg
  },
  async asyncData({ params, error, $content }) {
    try {
      const postPath = `/posts/${params.slug}`;
      const [post] = await $content("posts", { deep: true })
        .where({ dir: postPath })
        .fetch();
      return { post };
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
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.description
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://matthewblewitt.com/posts/" + this.post.slug
        }
      ]
    };
  }
};
</script>