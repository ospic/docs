<template>
  <v-app  class="app grey lighten-3 " :oncontextmenu="domain ? 'return true' : 'return false'" fluid>


    <v-main >
      <v-container class="" fluid>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer class="primary" fixed :absolute="!$vuetify.breakpoint.mdAndUp" padless app>
      <v-flex xs12 class="d-flex align-center justify-end  flex-column">
  
        <div class="white--text ml-3">
          Made by
          <a
            href="https://github.com/ospic"
            style="color: white"
            target="_blank"
            class="text-caption"
            >Ospic
          </a>
          as official documentation for
          <a 
            style="color: blue; text-decoration: underline;"
            href="https://app.ospicx.com/"
            target="_blank"
            class="text-caption"

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
      title: "Ospic"
    };
  },
  computed: {
    domain() {
      return window.location.hostname === "localhost";
    }
  }
};
</script>
