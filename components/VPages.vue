<template>
   <nav>
      <ul>
          <li v-for="page of pages" :key="page.slug" style="list-style-type: square;" class="pa-2" >
               <NuxtLink :to="localePath({ name: 'docs-slug', params: { slug: page.slug } })">{{page.title}}</NuxtLink>

               <hr class="dotted">
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