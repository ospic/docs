<template>
  <v-card style="background-color: white;"  flat rounded fluid class="ma-4 px-xs-0 ml-xs-1 px-md-6">
    <v-app-bar color="white" elevation="0" dark>
      <v-toolbar-title>
        <v-icon large color="green"> mdi-text-box-check-outline </v-icon
        >OspicDocs</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <a class="links"  v-if="$vuetify.breakpoint.mdAndUp">Home</a>
      <v-menu offset-y  v-if="$vuetify.breakpoint.smAndUp">
        <template v-slot:activator="{ on, attrs }">
          <a class="links" v-on="on" v-bind="attrs"
            >Docs
            <v-icon medium color="green"> mdi-chevron-down</v-icon>
          </a>
        </template>
        <v-list>
          <v-list-item
            v-for="(page, index) in pages"
            :key="index"
            :to="page.slug"
          >
            <v-list-item-title>{{ page.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <a class="links" href="https://github.com/ospic" target="_blank"  v-if="$vuetify.breakpoint.mdAndUp"
        >Github</a
      >

      <a class="links"  v-if="$vuetify.breakpoint.mdAndUp">FAQ</a>

      <v-spacer></v-spacer>

      <v-btn class="ma-2 colored" color="green"  v-if="$vuetify.breakpoint.mdAndUp"> Changelogs </v-btn>
      <v-btn class="ma-2" outlined color="green"  v-if="$vuetify.breakpoint.mdAndUp"> Contacts </v-btn>
    </v-app-bar>
    <section>
      <v-parallax :src="imageLink.sub_main" height="840">
        <v-layout column align-center justify-center class="white--text">
          <h1
            class="
              primary--text
              mb-2
              display-1
              d-flex
              align-center
              justify-end
              flex-column
            "
            style="font-weight: 900;  #000000"
          >
            Hospital Management System documentation (Ospic HMS)
          </h1>
          <h3
            class="
              primary--text
              subheading
              mb-3
              d-flex
              align-center
              justify-end
              flex-column
            "
            style="font-weight: 400;  #000000"
          >
            Unlesh your creativity without limitations
          </h3>
          <v-btn
            class="primary mt-5"
            dark
            x-large
            style="text-decoration: none !important"
            elevation="1"
            flat
            to="/"
          >
            Get Started
            <v-icon right large dark> mdi-chevron-right </v-icon>
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>
    <section>
      <v-container grid-list-xl fluid class="ma-0 pa-0">
        <p class="headline font-weight-black ma-2 text-h4">
          Browse Your Topics
        </p>
        <v-row  justify-space-around class="my-6">
          <v-col v-for="topic in topics" :key="topic.title"  xs="12"  md="12" lg="3">
            <v-card
              class="elevation-4 ma-2 pa-4"
              :to="topic.to"
              style="text-decoration: none !important"
            >
              <v-list-item-avatar rounded color="primary">
                <v-icon class="primary" dark> mdi-{{ topic.icon }} </v-icon>
              </v-list-item-avatar>
              <v-card-title primary-title class="layout justify-start">
                <div class="headline font-weight-black">{{ topic.title }}</div>
              </v-card-title>
              <v-card-text class="pa-1">{{ topic.subtitle }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-card>
</template>

<script>
export default {
  name: "App",
  layout: "home",
  data: function () {
    return {
      title: "Ospic",
      imageLink: {
        main: "https://cdn2.hubspot.net/hubfs/3790014/hospital-data.jpg",
        sub_main:
          "https://besthqwallpapers.com/Uploads/22-12-2019/116958/thumb2-white-3d-polygons-background-geometric-abstraction-white-background-3d-honeycomb-white-honeycomb-background.jpg",
        logo: "@/static/cherry.png",
        social_cover:
          "https://www.pymnts.com/wp-content/uploads/2020/01/hospitals-healthcare-data.jpg",
      },
      subscribed: false,
      topics: [
        {
          icon: "account",
          to: "/",
          title: "Patient Management",
          subtitle:
            "Learn how to manage patients information in Ospic. How to register new patient, update, assign to medical services or personel etc.",
        },
        {
          icon: "store-cog-outline",
          to: "/inventory",
          title: "Inventory management",
          subtitle:
            "Ospic Inventory management module help you to manage the medicine inventory in real time from medicines provided to patients",
        },
        {
          icon: "bank",
          to: "/finance",
          title: "Finance",
          subtitle:
            "Manage revenue collection, bill payment, and financial record overview. View bills, service transactions, reverse or pay bills.",
        },
        {
          icon: "lock",
          to: "/security",
          title: "System security",
          subtitle:
            "View users, create new users and manage their roles and permissions. Enable and disable selfservice accounts etc",
        },
      ],
    };
  },
  methods: {
    subscribe: function () {
      this.subscribed = !this.subscribed;
    },
  },
  async asyncData({ $content, params, app }) {
    const pages = await $content(`${app.i18n.locale}`)
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "asc")
      .fetch();

    console.log(pages);
    return { pages };
  },

  computed: {
    imgHeight: function () {
      var offset = 320;
      console.log("new image height is " + (this.pageHeight - offset));
      return this.pageHeight - offset;
    },

    isgithubpage() {
      return window.location.hostname === "ospic.github.io";
    },
  },

  mounted: function () {
    //this.calculateHeight();
  },
};
</script>

<style scoped>
.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.social-icon {
  font-size: 21px;
  color: white;
}
</style>