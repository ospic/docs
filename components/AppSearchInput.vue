<template>
  <div>
    <div>
      <v-text-field
        v-model="searchQuery"
        hide-details
        label="Search"
        placeholder="Search"
        filled
        dense
        flat rounded 
        solo
        light clearable
        single-line
        append-icon="mdi-magnify"
        class="shrink mr-3 mt-1"
      >
      </v-text-field>
    </div>
    <div  class="mt-2">
      <ul v-if="articles.length" class="articles">
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink
            :to="
              localePath({ name: 'docs-slug', params: { slug: article.slug } })
            "
          >
            {{ article.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: "",
      articles: []
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = [];
        return;
      }
      this.articles = await this.$content(`${this.$i18n.locale}/docs`)
        .limit(6)
        .search(searchQuery)
        .fetch();
    }
  }
};
</script>
<style scoped lang="css">
.articles {
  position: fixed;
  padding: 2%;
  background-color: white;
  
}
ul li::before {
  content: "\2022";
  color: red;
  font-weight: bold;
  display: inline-block; 
 
}

</style>
