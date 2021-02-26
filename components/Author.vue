<template>
  <v-card dense :to="`/docs/author/${author.name}`" class=" ma-2 pa-3" width="300" outlined flat>
    <img
      v-if="author.img"
      class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
      :src="author.img"
      :alt="author.name"
    />
    <div class="flex flex-col m-4">
      <h4 class="font-semibold">Author</h4>
      <ul style="list-style-type:none;">
        <li>{{ author.name }}</li>
        <li>{{ author.bio }}</li>
      </ul>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    author: {
      type: Object,
      default: () => null
    }
  }
};
</script>
