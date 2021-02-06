<template>
  <p class="tags">
    <span v-for="tag in tags" :key="tag" class="tag">
      <nuxt-link class="link primary lighten-2" :to="`/tags/${tag}`">{{ tag }}</nuxt-link
      >&nbsp;
    </span>
  </p>
</template>

<script lang="js">
export default {
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

