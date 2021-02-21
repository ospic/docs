<template>
   <v-container class="grey lighten-3"  fluid>

    <v-app-bar class="primary" flat dark dense fixed app>
      <img src="@/static/logo.png" alt="Vuetify.js" height="100%" />
      <nuxt-link to="/">
        <v-toolbar-title v-if="$vuetify.breakpoint.mdAndUp"
          class="mx-0 title white--text plain-link"
          v-text="title"
        ></v-toolbar-title
      ></nuxt-link>
      <p>Beta</p>
      <v-spacer></v-spacer>
      <nuxt-link class="white--text" :to="switchLocalePath('en')"
        >English</nuxt-link
      >
      <nuxt-link class="white--text" :to="switchLocalePath('sw')"
        >Français</nuxt-link
      >

      <a href="https://github.com/ospic/docs" target="_blank">
        <v-btn text fab x-small target="_blank">
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </a>
      <a href="https://app.ospicx.com/" target="_blank">
        <v-btn text fab x-small>
          <v-icon>mdi-web</v-icon>
        </v-btn></a
      >
       <v-app-bar-nav-icon v-if="!isMdAndUp"    @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      mini-variant.sync="mini"
      overlay-color="primary"
      app right
      
      height="100%"
      class="pa-3"
       v-if="!isMdAndUp">
       <h2 class="pa-2">Pages</h2>
     <v-pages :pages="pages"></v-pages>
    
    </v-navigation-drawer>
  <v-container  fluid>
    <v-row>
      <v-col cols="12" sm="2" v-if="post.toc.length > 0 && isMdAndUp">
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

      <v-col cols="12" sm="2" v-if="isMdAndUp">
        <v-sheet rounded="lg" min-height="268" class="pa-5">
          <v-pages :pages="pages"></v-pages>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
   </v-container>

</template>
<script>
export default {
    props:['pages', 'post'],
      data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      mini:true,
     
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Ospic documentation",
     
    };
  },
}
</script>