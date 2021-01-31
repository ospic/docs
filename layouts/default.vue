<template>
  <v-app class="app">
   <v-app-bar flat dense fixed app>
      <img src="@/static/logo.png" alt="Vuetify.js" height="100%"/>
      <nuxt-link to="/">
      <v-toolbar-title class="mx-0 title plain-link" v-text="title"></v-toolbar-title></nuxt-link>
      <p>Beta</p>
      <v-spacer></v-spacer>
          <v-text-field 
            hide-details 
            label="Search text" 
            placeholder="Search" 
            filled 
            clearable
            rounded 
            dense
            single-line 
            append-icon="mdi-magnify" class="shrink">
      </v-text-field>
    
   </v-app-bar>
    <v-main>
      <v-container fluid class="ma-0 pa-0" >
        <nuxt style="background-color: #EAEAEA" />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" class="primary" app>
      <v-flex xs12 class="d-flex align-center justify-end  flex-column">
        <div  style="color: white" >
          Copyright &copy; {{ new Date().getFullYear() }} The Apache Software
          Foundation, Licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" style="color: white" target="_blank"> Apache License, Version 2.0.</a>
        </div>
        <div class="white--text ml-3">
          Made by <a href="https://github.com/ospic" style="color: white"   target="_blank">Ospic </a>
          as official documentation for 
          <a class="white--text" href="http://ospic.github.io/webapp/" target="_blank"
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
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Ospic documentation",
      imageLink: {
        main:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fb13f0434-b228-11e6-8e5d-5252025056ab_web_scale_0.4666667_0.4666667__.jpg?alt=media&token=660df23e-599e-434b-9313-ba69c973eeea",
        sub_main:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2FNight-Club-Clubbing-Jobs-Abroad2.jpg?alt=media&token=82bbda7d-5df4-430b-9217-adaf1c8485c5",
        logo:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fandroid-chrome-512x512.png?alt=media&token=8a0a66f6-4741-4ff6-8f28-eb9ec74374df",
        social_cover:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fo-NIGHTCLUB-facebook.jpg?alt=media&token=cefc5c4c-9714-41da-9c22-f63caf5e89a4"
      }
    };
  }
};
</script>
