<template>
  <div class="flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="localePath({ name: 'docs-slug', params: { slug: prev.slug } })"
      class="text-primary font-bold hover:underline"
    >
      {{ prev.title }}
    </NuxtLink>
    <NuxtLink
      v-if="next"
      :to="localePath({ name: 'docs-slug', params: { slug: next.slug } })"
      class="font-bold hover:underline"
    >
     Next:  {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
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
