<template>
  <v-app  dark>
     <v-main class="ma-0 pa-0 welcome"  >
         <v-card style="background-color: white;"  flat rounded fluid class="ma-4 px-xs-0 ml-xs-1 px-md-6">
    <v-app-bar color="white" elevation="0" dark>
      <v-toolbar-title>
        <v-icon large color="green"> mdi-text-box-check-outline </v-icon
        >OspicDocs</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <nuxt-link class="links" to="/">Home</nuxt-link>
      <v-menu offset-y  v-if="$vuetify.breakpoint.smAndUp">
        <template v-slot:activator="{ on, attrs }" >
          <a class="links" v-on="on" v-bind="attrs"
            >Docs
            <v-icon medium color="green"> mdi-chevron-down</v-icon>
          </a>
        </template>
       
            <v-list v-if="$vuetify.breakpoint.mdAndDown">
          <v-list-item 
            v-for="(page, index) in pages"
            :key="index"
            :to="page.slug"
          >
            <v-list-item-title>{{ page.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
        
      
      <v-row v-else no-gutters class="white">
        <v-col cols="12" sm="4">
            <v-list>
          <v-list-item
            v-for="(page, index) in firstPart"
            :key="index"
            :to="page.slug"
          >
            <v-list-item-title>{{ page.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
        </v-col>
         <v-col cols="12" sm="4">
            <v-list>
          <v-list-item
            v-for="(page, index) in secondPart"
            :key="index"
            :to="page.slug"
          >
            <v-list-item-title >{{ page.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
        </v-col>
         <v-col cols="12" sm="4">
            <v-list>
          <v-list-item
            v-for="(page, index) in thirdPart"
            :key="index"
            :to="page.slug"
          >
            <v-list-item-title>{{ page.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
        </v-col>
      </v-row>
      </v-menu>
      <a class="links" href="https://github.com/ospic" target="_blank"  v-if="$vuetify.breakpoint.mdAndUp"
        >Github</a
      >

      <a class="links"  v-if="$vuetify.breakpoint.mdAndUp">FAQ</a>

      <v-spacer></v-spacer>

      <v-btn class="ma-2 colored" color="green"  v-if="$vuetify.breakpoint.mdAndUp"> Changelogs </v-btn>
      <v-btn class="ma-2" outlined color="green" to="/contacts" v-if="$vuetify.breakpoint.mdAndUp"> Contacts </v-btn>
    </v-app-bar>
      <v-container class=" ma-0 pa-0"  fluid>
        <nuxt class=" ma-0 pa-0"  />
      </v-container>
         </v-card>
    </v-main>
        <v-footer class="primary" fixed :absolute="!$vuetify.breakpoint.mdAndUp" padless app>
      <v-flex xs12 class="d-flex align-center justify-end  flex-column">
  
        <div class="white--text ml-3">
          Made by
          <a
            href="https://github.com/ospic"
            style="color: white"
            target="_blank"
            >Ospic
          </a>
          as official documentation for
          <a
            style="color: blue; text-decoration: underline;"
            href="https://app.ospicx.com/"
            target="_blank"
            >Ospic HMS</a
          >
        </div>
      </v-flex>
    </v-footer>
  </v-app>
</template>