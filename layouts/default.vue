<template>
  <v-app class="app">
    <v-app-bar dense flat absolute hide-on-scroll app>
      <v-toolbar-title>
        <strong class="text--primary">Ospic Documentation</strong>
      </v-toolbar-title>
      <v-spacer />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt class="ma-0 pa-0" />
      </v-container>
    </v-main>
    <v-footer-component></v-footer-component>
  </v-app>
</template>

<script>
import FooterComponent from "@/components/global/Footer";
export default {
  components: {
    VFooterComponent: FooterComponent,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      message: null,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
<style>
.app {
  font-family: "Nunito", sans-serif;
}
</style>
