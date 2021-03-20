<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="2"> </v-col>
      <v-col cols="12" sm="8">
        <v-sheet min-height="120vh" class="pa-5">
          <h1>Author: {{ articles[0].author.name }}</h1>
          <p>Bio: {{ articles[0].author.bio }}</p>
          <h3>Here are a list of articles by {{ articles[0].author.name }}:</h3>
          <v-divider></v-divider>
          <div v-for="(post, index) in articles" :key="post.dir">
            <h1 class="h1 post-h1">
              <nuxt-link :to=" post.slug">
                {{ index }}.&nbsp;{{ post.title }}</nuxt-link
              >
            </h1>
            <p v-if="post.description" class="excerpt">
              {{ post.description }}
            </p>
            <div class="post-details">
              <v-row>
                <v-col cols="12" md="6" sm="12"
                  >Last updated: {{ formatDate(post.updatedAt) }}</v-col
                >
                <v-col cols="12" md="6" sm="12" class="d-flex flex-row-reverse"
                  ><v-tags :tags="post.tags"
                /></v-col>
              </v-row>
            </div>

            <v-divider></v-divider>
          </div>
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="2"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, params, app }) {
    const articles = await $content(`docs/${app.i18n.locale}`, params.slug)
      .where({ "author.name": { $regex: [params.author, "i"] } })
      .without("body")
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles
    };
  }
};
</script>
