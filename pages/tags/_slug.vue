<template>
  <div class="posts">
 

      <v-container fluid>
    <v-row>
      <v-col cols="12" sm="2">
        
      </v-col>

      <v-col cols="12" sm="8">
        <v-sheet min-height="120vh" class="pa-5">
          <h1 class="ma-2">Searches for Tag: {{ $route.params.slug }}</h1>
          <v-divider></v-divider>
          <div  v-for="(post,index) in posts" :key="post.dir">
            <h1 class="h1 post-h1">
              <nuxt-link :to="post.dir"> {{index}}.&nbsp;{{ post.title }}</nuxt-link></h1> 
            <p v-if="post.description" class="excerpt">
              {{ post.description }}
            </p>
            <div class="post-details">
              <v-row>
                 <v-col cols="12" md="6" sm="12">Last updated: {{ formatDate(post.updatedAt) }}</v-col>
                <v-col cols="12" md="6" sm="12"><v-tags :tags="post.tags" /></v-col>
              </v-row>
            </div>

          <v-divider></v-divider>
          </div>
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="2">
       
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>
<script>
export default {
  async asyncData({ params, error, $content ,app}) {
    try {
      const posts = await $content(`${app.i18n.locale}/docs`, { deep: true }).where({ tags: { $contains: params.slug } }).fetch();
        console.log(posts);
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
      title: "Tags",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Cool nuxt blog tags",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://nuxt-blog.com/tags",
        },
      ],
    };
  },
  methods:{
    handletagclick(tag){
      
    }
  }
};
</script>