<template>
  <v-card max-width="450" class="mx-auto transparent" flat>
    <v-list three-line color="transparent">
      <template v-for="(item, index) in items">
        <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

        <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

        <v-list-item v-else :key="item.title" >
          <v-list-item-avatar>
            <v-icon v-html="item.icon" size="40" color="black"></v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title" class="overline font-weight-bold black--text"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle" class="caption black--text"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    items: [
      { header: "Contact Us" },
      {
        title: "Address",
        icon: "mdi-map-marker",
        subtitle:
          "<span class='black--text'> Dar es Salaam, Tanzania</span> "
      },
      { divider: true, inset: true },
      {
        title: "Phone",
        icon: "mdi-phone",
        subtitle: "<span class='font-weight-bold'>+255 716 087 522</span>"
      },
      { divider: true, inset: true },
      {
        title: "Email",
        icon: "mdi-email",
        subtitle: "ospicinfo@gmail.com "
      },
      { divider: true, inset: true }
    ]
  })
};
</script>