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
        solo rounded
        light clearable
        single-line 
        background-color="#EEEEEE"
        append-icon="mdi-magnify"
        class="shrink mr-4"
      >
      </v-text-field>
    </div>
    <div  class="mt-0">
      <!--<ul v-if="articles.length" class="articles">
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink
            :to=" article.slug">
            {{ article.title }}
          </NuxtLink>
        </li>
      </ul>-->
      <v-list dense v-if="articles.length" class="articles mt-1 pr-14" color="primary">
    
        <v-list-item v-for="article of articles" :key="article.slug" dense class="ma-0 pa-0">
          <v-list-item-icon>
            <v-icon small color="white">mdi-magnify</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>  <NuxtLink style="color:white"
            :to=" article.slug">
            {{ article.title }}
          </NuxtLink></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-list>
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
      this.articles = await this.$content(`${this.$i18n.locale}`)
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
