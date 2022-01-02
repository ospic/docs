<template>
 <section>
      <v-container grid-list-xl fluid class="ma-0 pa-0">
        <p class="headline font-weight-black ma-2 text-h4">
          Browse Your Topic
        </p>
        <v-row justify-space-around class="my-6">
          <v-col
            v-for="topic in topics"
            :key="topic.title"
            cols="12"
            xs="12"
            sm="6"
            md="3"
            lg="3"
          >
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