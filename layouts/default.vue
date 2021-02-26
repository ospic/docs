<template>
  <v-app  class="app grey lighten-3 " :oncontextmenu="domain ? 'return true' : 'return false'" fluid>


    <v-main style="background-color: #EEEEEE" >
      <v-container  style="background-color: #EEEEEE" class="pa-0 ma-0" fluid>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer class="primary" rounded fixed absolute padless app>
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
            href="https://app.ospicx.com/"
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
      title: "Ospic documentation"
    };
  },
  computed: {
    domain() {
      return window.location.hostname === "localhost";
    }
  }
};
</script>
