<template>
 <v-container >
        <v-row>
          <v-col
            v-for="article in articles"
            :key="article.dir"
           
          >
          <article>
             <h1>{{ article.title }}</h1>
             <p>{{ article.description }}</p>
             <img :src="article.img" :alt="article.alt" />
             <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>

            <nuxt-content :document="article" />
            </article>
          
          </v-col>
        </v-row>
 </v-container>
</template>

<script>
export default {
  async asyncData({ $content, error, params}){
    try{
    const articles = await $content('home', {deep: true}).fetch()
  
      return { articles }
      } catch (err) {
      error({
        statusCode: 404,
        message: "Page could not be found",
      });
    }
  },
 methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
 }
}
</script>
<style scoped>
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }
</style>