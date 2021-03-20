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
        flat 
        solo
        light clearable
        single-line
        append-icon="mdi-magnify"
        class="shrink mr-3"
      >
      </v-text-field>
    </div>
    <div  class="mt-0">
      <ul v-if="articles.length" class="articles">
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink
            :to=" article.slug">
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
      this.articles = await this.$content(`docs/${this.$i18n.locale}`)
        .limit(6)
        .search(searchQuery)
        .fetch();
    }
  }
};
</script>
<style scoped lang="css">
  @media screen and ( min-width: 265px){
.articles {
  position: fixed;
  padding: .2% 4% .3% 2%;
  background-color: #424242;
  
}
  }
ul li a {
  display: inline-block; 
}

</style>
