<template>
  <v-container fluid>
    <div class="posts">
      <v-alert prominent :value="alert" type="error" elevetion="2">
        <v-row align="center">
          <v-col class="grow">
            <strong>
              No blog post with text:
              <i>{{ message }}</i>
            </strong>
          </v-col>
          <v-col class="shrink">
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="pink"
              @click="alert = !alert"
            >
              <v-icon dark>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-alert>
     
        <v-row no-gutters>
          <v-col v-for="doc in docs" :key="doc.dir" md="4" sm="12" xs="12">
            <post-card :key="doc.dir" :post="doc"></post-card>
          </v-col>
        </v-row>
   
    </div>
  </v-container>
</template>
<script>
import PostCard from "~/components/PostCard";
export default {
  components: {
    PostCard
  },
  async asyncData({ params, error, $content }) {
    try {
      const docs = await $content("docs", { deep: true }).fetch();
      return { docs };
    } catch (err) {
      error({
        statusCode: 404,
        message: "Page could not be found"
      });
    }
  },
  data() {
    return {
      clipped: false,
      alert: false,
      fixed: false,
      message: null
    };
  },
  methods: {
    async filterContents() {
      try {
        const array = await this.$content("posts", { deep: true })
          .search(this.message)
          .fetch();
        if (array === undefined || array.length === 0) {
          this.alert = true;
        } else {
          this.alert = false;
          this.posts = array;
        }
        return;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log({
          statusCode: 404,
          message: "Page could not be found"
        });
      }
    }
  },
  head() {
    return {
      title: "Nuxt blog",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Cool nuxt blog"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://nuxt-blog.com/"
        }
      ]
    };
  }
};
</script>
