<template>
  <div class="d-flex align-center justify-space-between flex-grow-1 ">
    <v-col md="4">
     
      <NuxtLink
        v-if="prev"
        :to="localePath({ name: 'docs-slug', params: { slug: prev.slug } })"
        class="text-primary font-weight-bold hover:underline"
      >
       <v-icon color="primary" class="mb-1" x-small>mdi-arrow-left</v-icon> {{ prev.title }} 
      </NuxtLink>
    </v-col>
    <v-col md="4">
       <a href="https://app.ospicx.com/"
            target="_blank"
            >Edit this page on Github !</a
          >
    </v-col>
    <v-col md="4" class="d-flex flex-row-reverse ">
      <NuxtLink
        v-if="next" prepend-icon="mdi-chevron-right"
        :to="localePath({ name: 'docs-slug', params: { slug: next.slug } })"
        class=" mt-auto font-weight-bold hover:underline"
      >
        {{ next.title }} <v-icon color="primary" class="mb-1" x-small >mdi-arrow-right</v-icon>
      </NuxtLink>
    </v-col>
  </div>
</template>
<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
};
</script>
