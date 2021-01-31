<template>
  <v-card flat>
    <v-toolbar
      color="primary"
    
      extended
      flat
    >
       <v-avatar size="36" class="mb-4">
      <img 
        src="@/assets/images/icon.png"
        alt="John"
      >
    </v-avatar>
    </v-toolbar>

    <v-card
      class="mx-auto "
      style="margin-top: -64px; overflow-y: scroll;" :height="screen"
    >
      <v-toolbar flat>
        <v-toolbar-title class="grey--text">
          Ospic documentation
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn medium icon>
          <v-icon small>mdi-magnify</v-icon>
        </v-btn>

        <v-btn medium icon href="https://app.ospicx.com" target="_blank">
          <v-icon color="black"  small>mdi-application</v-icon>
        </v-btn>

        <v-btn medium icon href="https://github.com/ospic/docs" target="_blank">
          <v-icon small color="black" >mdi-github</v-icon>
        </v-btn>
      </v-toolbar>

      <v-divider></v-divider>

      <v-card-text >

        <v-row no-gutters>
      <v-col md="2" v-if="post.toc.length > 0">
        <v-nav :post="post"></v-nav>
      </v-col>
      <v-col md="10">
        <div>
          <h1 class="h1 post-h1">{{ post.title }}</h1>
          <p v-if="post.description" class="excerpt">
            {{ post.description }}
          </p>
          <div class="post-details">
            <v-tags :tags="post.tags" />
            <div class="date">
              Post last updated: {{ formatDate(post.updatedAt) }}
            </div>
          </div>
        </div>
        <nuxt-content :document="post" />
      </v-col>
    </v-row>
      </v-card-text>
    </v-card>
  </v-card>
</template>
<script>
import VImg from "~/components/VImg";

export default {
  components: {
    VImg
  },
  async asyncData({ params, error, $content }) {
    try {
      const postPath = `/docs/${params.slug}`;
      const [post] = await $content("docs", { deep: true })
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
  },
  computed:{
    screen(){
      console.log(window.screen.height)
      return window.screen.height - 150;
    }
  }
};
</script>
