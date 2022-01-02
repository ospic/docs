<template>
 
        <v-container fill-height grid-list-md text-xs-center class="pb-8 pt-8">
          <v-layout row wrap align-center>
            <v-flex shrink xs12 sm12 md5 order-md1 order-sm1>
              <address-component></address-component>
            </v-flex>
            <v-flex grow xs12 sm12 md2 order-md2 order-sm3></v-flex>

            <v-flex grow xs12 sm12 md5 order-md3 order-sm2>
              <v-card tile>
                <v-card-text color="white">
                  <v-container>
                    <v-form ref="form" color="white" v-model="valid" :lazy-validation="lazy">
                      <v-text-field
                        v-model="subject"
                        :rules="subjectRules"
                        label="Subject"
                        autocomplete="false"
                        required
                      ></v-text-field>
                      <v-textarea
                        v-model="message"
                         :rules="messageRules"
                        name="input-7-4"
                        label
                        placeholder="What do you want to tell us"
                      ></v-textarea>
                    </v-form>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-container fluid>
                    <v-btn
                      color="primary"
                      style="width: 72px; display: inline-block;"
                      wrap
                      @click="mailTo()"
                    >Send</v-btn>
                  </v-container>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>

</template>
<script>
import AddressComponent from "~/components/ContactAddress.vue";
export default {
name: "Contacts",
  layout: "home",
  components: {
    AddressComponent
  },
  data() {
    return {
      subject: null,
      email: null,
      message: "",
      lazy: false,
      valid:true,
      subjectRules: [
        v => !!v || "Field is required",
        v => (v && v.length <= 50) || "It must be less than 50 characters",
         v => (v && v.length >= 10) || "It must be not less than 10 characters"
      ],
      messageRules: [
        v => !!v || "Field is required",
        v => (v && v.length >= 10) || "It must be not less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    mailTo() {
      if (this.$refs.form.validate()) {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=ospicinfo@gmail.com&su=[DOCS]: '+this.subject+'&body='+this.message);
      }
    }
  }
};
</script>