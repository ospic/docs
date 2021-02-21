<template>
  <v-app class="app grey lighten-3"  :oncontextmenu="domain ? 'return true' : 'return false'" app>
      <v-system-bar color="primary darken-3"></v-system-bar>

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
       <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute right
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="grey lighten-3">
      <v-container class=" pa-0" fluid>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer class="primary" fixed>
      <v-flex xs12 class="d-flex align-center justify-end  flex-column">
        <div style="color: white">
          Copyright &copy; {{ new Date().getFullYear() }} The Apache Software
          Foundation, Licensed under the
          <a
            href="https://www.apache.org/licenses/LICENSE-2.0"
            style="color: blue;  text-decoration: underline;"
            target="_blank"
          >
            Apache License, Version 2.0.</a
          >
        </div>
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
            href="http://ospic.github.io/webapp/"
            target="_blank"
            >Ospic HMS</a
          >
        </div>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,

     
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Ospic documentation",
     
    };
  },
  computed: {
    domain() {
      return window.location.hostname === "localhost";
    }
  }
};
</script>
