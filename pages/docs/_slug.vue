<template>

  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="2" v-if="post.toc.length > 0">
        <v-sheet rounded="lg" min-height="268" class="pa-3">
          <v-nav :post="post"></v-nav>
        </v-sheet>
      </v-col>

      <v-col cols="12" :sm="post.toc.length > 0 ? '8':'10'">
        <v-sheet min-height="70vh" rounded="lg" class="pa-5">
          <div>
            <h1 class="h1 post-h1">{{ post.title }}</h1>
            <p v-if="post.description" class="excerpt">
              {{ post.description }}
            </p>
             <div class="post-tags d-flex justify-space-between">
                <v-tags :tags="post.tags" />
                Last updated: {{ formatDate(post.updatedAt) }}
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
