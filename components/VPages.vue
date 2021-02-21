<template>
   <nav>
      <ul>
            <li v-for="page of pages" :key="page.slug" style="list-style-type: square;" >
               <NuxtLink :to="localePath({ name: 'docs-slug', params: { slug: page.slug } })">{{page.title}}</NuxtLink>
            </li>
          </ul>
        </nav>
</template>
<script>
export default {
  props:{
    pages:{
      type: Array,
      default: null
    }
  }
}
</script>