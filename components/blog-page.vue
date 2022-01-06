<template>
  <v-container class="white lighten-3 ma-0 pa-0" fluid>
    <v-app-bar class="white ma-0 pa-0" flat  fixed app>
      <v-row>
           <v-col sm="1" v-if="$vuetify.breakpoint.smAndUp"></v-col>
        <v-col sm="10">

          <v-app-bar class="white" flat>
                

      <nuxt-link to="/">
        <v-toolbar-title
          v-if="$vuetify.breakpoint.mdAndUp"
          class="mx-0 black--text plain-link"
          >{{ $t("apptitle") }}</v-toolbar-title
        >
        <v-btn icon v-else>
          <v-icon left color="primary">mdi-home</v-icon>
        </v-btn>
        
        </nuxt-link
      >
      <v-avatar v-if="false">
        <img
          src="https://library.kissclipart.com/20181003/szw/kissclipart-free-corner-ribbon-png-clipart-logo-f2cbd51c4ca46d94.png"
          alt="Image"
        />
      </v-avatar>

      <v-spacer></v-spacer>
      <v-btn v-if="$vuetify.breakpoint.mdAndUp" medium rounded outlined dark color="white" class="primary accent-2 white--text" href="https://opencollective.com/ospic" target="_blank">
       <v-icon >mdi-heart-outline</v-icon>&nbsp;
       Sponsor</v-btn>&nbsp;&nbsp;
      <!--<iframe src="https://github.com/sponsors/ospic/button" title="Sponsor ospic" height="35" width="116" style="border: 0;"></iframe>-->
      <AppSearchInput />
      <h5 v-if="isMdAndUp" class="primary--text">Language:</h5>
      <div v-if="isMdAndUp" class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              color="primary"
              small
              v-bind="attrs"
              v-on="on"
              style="text-transform:none;"
            >
              {{ locale.name }} <v-icon color="primary">mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(locale, index) in locales" :key="index">
              <nuxt-link
                class="primary--text"
                :to="switchLocalePath(locale.code)"
                >{{ locale.name }}</nuxt-link
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
       <a href="https://twitter.com/ospicapp" target="_blank">
        <v-btn text fab x-small>
          <v-icon color="primary">mdi-twitter</v-icon>
        </v-btn></a
      >

      <a href="https://github.com/ospic/docs" target="_blank">
        <v-btn text fab x-small target="_blank">
          <v-icon color="primary">mdi-github</v-icon>
        </v-btn>
      </a>
      <a href="https://app.ospicx.com/" target="_blank">
        <v-btn text fab x-small>
          <v-icon color="primary">mdi-web</v-icon>
        </v-btn></a
      >  <v-btn
            icon
            text
            to="/contacts/#form"
            x-small color="white"
            v-if="$vuetify.breakpoint.mdAndUp"
          >
            <v-icon 
            color="green" small>mdi-phone-outline</v-icon>
          </v-btn>
      
      <v-app-bar-nav-icon
        v-if="!isMdAndUp"
        @click.stop="drawer = !drawer"
      >
      <v-app-bar-nav-icon>
          <v-icon>mdi-text</v-icon>
        </v-app-bar-nav-icon> 
      </v-app-bar-nav-icon>
          </v-app-bar>
        </v-col>
        <v-col sm="1" v-if="$vuetify.breakpoint.smAndUp"></v-col>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      mini-variant.sync="mini"
      overlay-color="primary"
      app
      right
      height="100%"
      class="pa-3"
      v-if="!isMdAndUp"
    >
      <h2 class="ml-2">Pages</h2>
      <v-pages :pages="pages"></v-pages>
      <template v-slot:append>
       
        <h5>{{ $t("selectlanguage") }}</h5>
        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                color="primary"
                small
                block
                v-bind="attrs"
                v-on="on"
                style="text-transform:none; primary--text"
              >
                {{ locale.name }} <v-icon>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list dense>
              <v-list-item
                dense
                v-for="(locale, index) in locales"
                :key="index"
              >
                <nuxt-link
                  class="primary--text"
                  :to="switchLocalePath(locale.code)"
                  >{{ locale.name }}</nuxt-link
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
         <v-btn medium rounded outlined dark color="white" class="primary accent-2 white--text" href="https://opencollective.com/ospic" target="_blank">
       <v-icon >mdi-heart-outline</v-icon>&nbsp;
       Sponsor</v-btn>
      </template>
    </v-navigation-drawer>

    <v-container fluid>
      <v-row>
        <v-col  cols="12"   v-if="$vuetify.breakpoint.smAndUp" :sm="1" ></v-col>
        <v-col cols="12" lg="10" md="12" >
          <v-row>
            <v-col
          cols="12" 
          :sm="$vuetify.breakpoint.smOnly ? '2' : '2'"
          v-if="$vuetify.breakpoint.smAndUp"
        >
         <v-pages :pages="pages"></v-pages>
        </v-col>

        <v-col cols="12" :sm="post.toc.length > 0 ? '7' : '10'">
          <v-sheet tile>
            <div class="pt-4">
              <div class="post-header">
                <h1 class="h1 post-h1">{{ post.title }}</h1>
                <p v-if="post.description" class="excerpt">
                  {{ post.description }}
                </p>
                <div  class="post-tags d-flex justify-space-between">
                  <v-tags :tags="post.tags" v-if="$vuetify.breakpoint.mdAndUp" />
                  Last updated: {{ formatDate(post.updatedAt) }}
                </div>
                <hr/>
              </div>

              <c-image
                v-if="post.image"
                :src="post.image"
                alt="Header image"
              ></c-image>
              <nuxt-content :document="post" />
              <v-author v-if="post.author" :author="post.author"></v-author>
            </div>
            <sheet-footer>
              <prev-next :prev="prev" :next="next" />
            </sheet-footer>
          </v-sheet>
        </v-col>
        <v-col cols="12" sm="3" v-if="post.toc.length > 0 && isMdAndUp">
          <v-sheet rounded="lg" min-height="268" >
            <v-nav :post="post"></v-nav>
          </v-sheet>
        </v-col>

          </v-row>
        </v-col>
        <v-col  cols="12"   v-if="$vuetify.breakpoint.smAndUp" :sm="1"></v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
export default {
  props: ["pages", "post", "prev", "next"],
  components: {
    // A simple helper component
    SheetFooter: {
      functional: true,

      render(h, { children }) {
        return h(
          "v-sheet",
          {
            staticClass: "d-flex flex-row align-self-stretch",
            props: {
              color: "grey lighten-2",
              dark: true,
              height: 50
            }
          },
          children
        );
      }
    }
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      mini: true,

      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Ospic"
    };
  },
  head() {
    return {
      meta: [
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.post.title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.post.description
        }
      ]
    };
  }
};
</script>
