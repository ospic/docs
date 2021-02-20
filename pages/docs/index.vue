<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" md="12" lg="2" sm="12" v-if="post.toc.length > 0">
        <v-nav :post="post"></v-nav>
      </v-col>
      <v-col cols="12" md="12" lg="10" sm="12">
        <div>
          
          <h1 class="h1 post-h1">{{ post.title }}</h1>
          <p v-if="post.description" class="excerpt">
            {{ post.description }}
          </p>
          <div class="post-details">
            <v-tags :tags="post.tags" />
            <div class="date">
              Las updated: {{ formatDate(post.updatedAt) }}
            </div>
          </div>
        </div>
        <nuxt-content :document="post" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import VImg from "~/components/VImg";

export default {
  components: {
    VImg
  },
  async asyncData({ params, error, $content }) {
    try {
      const postPath = `/docs/index`;
      const [post] = await $content("docs", { deep: true })
        .where({ dir: postPath })
        .fetch();
        console.log(post)
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
  },
  computed: {
    screen() {
      console.log(window.screen.height);
      return window.screen.height - 150;
    }
  }
};
</script>
