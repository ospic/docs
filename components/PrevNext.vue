<template>
    <div class="mx-auto">
    <NuxtLink
      v-if="prev"
      :to="localePath({ name: 'docs-slug', params: { slug: prev.slug } })"
      class="d-flex align-start text-primary font-bold hover:underline"
    >
      {{ prev.title }}
    </NuxtLink>
    <NuxtLink
      v-if="next"
      :to="localePath({ name: 'docs-slug', params: { slug: next.slug } })"
      class="d-flex align-start font-bold hover:underline"
    >
     {{ next.title }}
    </NuxtLink>
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
