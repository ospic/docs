<template>
   <nav>
       <ul>
          <li v-for="page of pages" :key="page.slug" style="list-style-type: none;" class="pa-2 font-weight-bold " >
               <NuxtLink :to=" page.slug " class="font-weight-medium ">{{page.title}}</NuxtLink>
               
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