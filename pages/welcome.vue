<template>
<v-container fluid >
      <section>
        <v-parallax :src="imageLink.sub_main" height="600">
          <v-layout column align-center justify-center class="white--text">
            <h1 class="blue--text mb-2 display-1 d-flex align-center justify-end  flex-column" style="font-weight: 900;  #000000">Hospital Management System documentation (Ospic HMS)</h1>
            <h3 class="blue--text subheading mb-3 d-flex align-center justify-end  flex-column" style="font-weight: 900;  #000000">Unlesh your creativity without limitations</h3>
            <v-btn class="primary  mt-5" dark small rounded elevation="1" flat to="/">
              Getting Started with documentation
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>
                  We are not a company. We hate companies. Just imagine us like the guys from the Silicon Valley series. Hoping to make a world a better place.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Open for contribution</div>
                </v-card-title>
                <v-card-text>
                  Are you a creative person? Do you like techy stuff? You can jump to our github repository and check what you can add there. We value each individual contributions
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>   
</v-container>

</template>

<script>
export default {
  name: "App",
  layout:"home",
  data: function() {
    return {
      title: "Ospic",
      imageLink: {
        main:
          "https://cdn2.hubspot.net/hubfs/3790014/hospital-data.jpg",
        sub_main:
          "https://futurehealthcaretoday.com/wp-content/uploads/2017/10/shutterstock_561360403.jpg",
        logo:
          "@/static/cherry.png",
        social_cover:
          "https://www.pymnts.com/wp-content/uploads/2020/01/hospitals-healthcare-data.jpg"
      },
      email: "",
      emailRules: [
        v => {
          return !!v || "E-mail is required";
        },
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],
      subscribed: false
    };
  },
  methods: {
    subscribe: function() {
      this.subscribed = !this.subscribed;
    }
  },

  computed: {
    imgHeight: function() {
      var offset = 320;
      console.log("new image height is " + (this.pageHeight - offset));
      return this.pageHeight - offset;
    },
      
    isgithubpage(){
      return (window.location.hostname === 'ospic.github.io');
    }
  
  },

  mounted: function() {
    //this.calculateHeight();
  }
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