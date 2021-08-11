<template>
  <v-card
    dense
    :to="`/author/${author.name}`"
    class=" ma-2 pa-3"
    width="400"
    outlined
    flat
  >
    <v-list-item dense :key="item.title">
      <v-list-item-avatar size="52" color="primary">
        <v-img :src="author.image" alt="Author"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-html="author.name"></v-list-item-title>
        <v-list-item-subtitle v-html="author.bio"></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>
<script>
export default {
  props: {
    author: {
      type: Object,
      default: () => null
    }
  },
  data: () => ({
    item: {
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
      subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`
    }
  })
};
</script>
