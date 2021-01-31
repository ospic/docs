<template>
<v-container fluid >
    <v-content >
      <section>
        <v-parallax :src="imageLink.sub_main" height="600">
          <v-layout column align-center justify-center class="white--text">
            <h1 class="white--text mb-2 display-1 d-flex align-center justify-end  flex-column" style="font-weight: 900; text-shadow: 3px 2px #000000">The hospital data in the safe hand</h1>
            <div class="white--text subheading mb-3 d-flex align-center justify-end  flex-column" style="font-weight: 900; text-shadow: 2px 2px #000000">Unlesh your creativity without limitations</div>
            <v-btn class="primary  mt-5" dark large :href="isgithubpage ? '/docs/docs/index': '/docs/index'">
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout column wrap class="my-5"  align-center>
          <div xs12 sm4 class="my-3" row wrap align-center>
            <div class="d-flex align-center justify-end  flex-column">
              <h2 class="headline ">The best way to share your amazing stuff</h2>
              <span class="subheading ">
                No more restrictions, no more limits
              </span>
            </div>
          </div>
          
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent ">
                    <v-card-text class="d-flex align-center justify-end  flex-column">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-earth</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline d-flex align-center justify-end  flex-column">Reach the world</div>
                    </v-card-title>
                    <v-card-text>
                      Show your stuff to the whole community of Endorfine not only to your mum or your friends. We love making good content viral. In this moment Endorfine is used by artists who are not famous but that want to share their works to the world. Unfortunately with other social networks this is hard, slow and sometime expensive.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="d-flex align-center justify-end  flex-column">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-flash</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Fast feedback</div>
                    </v-card-title>
                    <v-card-text>
                      Time is important, we don't want you to waste it. Here you can get a massive feedback from real users in minutes. And if your stuff is appreciated you won't only get positive feedback but also lovely and sincere fans <3 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="d-flex align-center justify-end  flex-column">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-share-variant</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline d-flex align-center justify-end  flex-column">Create new connections</div>
                    </v-card-title>
                    <v-card-text>
                      Imagine if you can directly speak with the world's population. Don't you think it would be easier to find nice people to interact with? Endorfine is both local and global and help you to connect without limitations with people from your city, your state and your universe! 
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax :src="imageLink.main" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 d-flex align-center justify-end  flex-column">Endorfine is a social network that allows everyone to reach a huge audience with a tap </div>
            <em>With the power of Endorfine you don't need to be famous or post pics of cute cats in order to get visibility</em>
            <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
              Get more info
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

       <section>
        <v-container grid-list-md>

        
          <v-layout row wrap>
          <v-flex xs12 d-flex align-center justify-end  flex-column class="mt-5">
           <div class="headline">Are you amazed? Stay tuned!</div>
           <br>
          <div>We are lunching the beta in a few time. If you want to be one of the first Endorfine users we will email you as soon as we're ready. In the beginning only few people will test before the launch. Let us know how Endorfine will help you!</div>
          </v-flex>
          <v-flex xs8 offset-xs2>

              <v-card class="elevation-0 transparent">

                <v-card-text>
                  <v-flex xs12 v-if="!subscribed">
                    <v-text-field filled label="Email address" :rules="emailRules" v-model="email" hint="Enter your email!" persistent-hint></v-text-field>
                  </v-flex>
                  <v-flex xs12 v-if="!subscribed">
                    <v-text-field filled multi-line label="Bio and curiosities"></v-text-field>
                  </v-flex>
                  <v-flex xs12 class="d-flex align-center justify-end  flex-column" v-if="!subscribed">
                    <v-btn class="blue lighten-2 mb-5" dark large @click="subscribe">Get in touch</v-btn>
                  </v-flex>
                   <v-flex xs12 class="d-flex align-center justify-end  flex-column" v-if="subscribed">
                    <v-btn class="green lighten-2 mb-5" dark large>Welcome on board!</v-btn>
                  </v-flex>
                </v-card-text>

             </v-card>

                </v-flex>
            </v-layout>
          </v-container>
      </section>

       <section>
        <v-parallax :src="imageLink.social_cover" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 d-flex align-center justify-end  flex-column">We are dropping cool news and opportunities on socials</div>
          </v-layout>
          <v-layout justify-space-around justify-center>

              <v-icon x-large dark>mdi-facebook</v-icon>

              <v-icon x-large dark>mdi-twitter</v-icon>

              <v-icon x-large dark>mdi-reddit</v-icon>

              <v-icon x-large dark>mdi-instagram</v-icon>

              <v-icon x-large dark>mdi-discord</v-icon>
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
                  We are not a company. We hate companies. Just imagine us like the guys from the Silicon Valley series. 
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">We are hiring</div>
                </v-card-title>
                <v-card-text>
                  Are you a creative person? Do you like techy stuff? Complete the email form by writing your skills and interests
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

       <section>
        <v-container>
          <v-layout>
            <v-flex xs12 class="d-flex align-center justify-end  flex-column">
                <img height="200px" src="@/static/cherry.png">
            </v-flex>
          </v-layout>
        </v-container>
     </section>

    </v-content>
</v-container>

</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      title: "Ospic documentation",
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