<template>
   <nav>
      <p class="gray--text lighten-2 text-uppercase">Pages</p>
       <v-divider></v-divider>
      <ul>
      
          <li v-for="page of pages" :key="page.slug" style="list-style-type: square;" class="pa-2" >

               <NuxtLink :to=" page.slug ">{{page.title}}</NuxtLink>

               <!-- Disable locale path
                 <NuxtLink :to="localePath({ name: 'docs-slug', params: { slug: page.slug } })">{{page.title}}</NuxtLink>-->
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