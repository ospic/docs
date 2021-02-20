<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="2">
        <v-sheet rounded="lg" min-height="268" class="pa-3">
          <v-nav :post="post"></v-nav>
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="8">
        <v-sheet min-height="120vh" class="pa-5">
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
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="2">
        <v-sheet rounded="lg" min-height="268" class="pa-5">
          <v-pages :pages="pages"></v-pages>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content("docs", params.slug).fetch();

    const pages = await $content("docs")
      .only(["title", "description", "img", "slug", "author"])
      .fetch();
    return { post, pages };
  }
};
</script>
