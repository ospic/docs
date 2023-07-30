<template>
  <v-app dark>
    <v-main class="ma-0 pa-0 welcome">
      <v-card
        style="background-color: white"
        flat
        rounded
        fluid
        class="ma-4 px-xs-0 ml-xs-1 px-md-6"
      >
        <v-app-bar color="white" elevation="0" dark>
          <v-toolbar-title>
            <v-icon large color="green"> mdi-text-box-check-outline </v-icon
            >OspicDocs</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <nuxt-link class="links" to="/">Home</nuxt-link>
          <v-menu offset-y v-if="$vuetify.breakpoint.smAndUp">
            <template v-slot:activator="{ on, attrs }">
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
                    <v-list-item-title>{{ page.title }}</v-list-item-title>
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
          <a
            class="links"
            href="https://github.com/ospic"
            target="_blank"
            v-if="$vuetify.breakpoint.mdAndUp"
            >Github</a
          >

          <a class="links" v-if="$vuetify.breakpoint.mdAndUp">FAQ</a>

          <v-spacer></v-spacer>

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
          <a href="https://app.ospic.app/" target="_blank">
            <v-btn text fab x-small>
              <v-icon color="primary">mdi-web</v-icon>
            </v-btn></a
          >
          <v-btn
            icon
            text
            to="/contacts/#form"
            x-small color="white"
            v-if="$vuetify.breakpoint.mdAndUp"
          >
            <v-icon 
            color="green" small>mdi-phone-outline</v-icon>
          </v-btn>
        </v-app-bar>
        <v-container class="ma-0 pa-0" fluid>
          <section>
            <v-parallax
              dark
              height="840"
              src="https://static.vecteezy.com/system/resources/previews/002/783/382/non_2x/blur-hospital-background-free-photo.jpg"
            >
              <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                  <h1
                    class="
                      black--text
                      mb-4
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
                      black--text
                      subheading
                      mb-3
                      d-flex
                      align-center
                      justify-end
                      flex-column
                    "
                    style="font-weight: 400;  #000000; opacity: 90%;"
                  >
                    Medical data is our own data's
                  </h3>
                  <v-btn
                    class="primary mt-5 font-weight-black headline white--text"
                    dark
                    x-large
                    style="text-transform: none !important"
                    elevation="1"
                    flat
                    to="/home"
                  >
                    Get started
                    <v-icon right dark> mdi-chevron-right </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-parallax>
          </section>
        </v-container>
        <nuxt class="ma-0 mt-6 pa-0" />
      </v-card>
    </v-main>
    <v-footer
      class="primary"
      fixed
      :absolute="!$vuetify.breakpoint.mdAndUp"
      padless
      app
    >
      <v-flex xs12 class="d-flex align-center justify-end flex-column">
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
            style="color: blue; text-decoration: underline"
            href="https://app.ospic.app/"
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

    const threePartIndex = Math.ceil(pages.length / 3);

    const thirdPart = pages.splice(-threePartIndex);
    const secondPart = pages.splice(-threePartIndex);
    const firstPart = pages;

    return { pages, firstPart, secondPart, thirdPart };
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