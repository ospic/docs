<template>
   <nav>
          <ul>
            <li v-for="page of pages" :key="page.title" >
              <NuxtLink :to="`/${page.path}`">{{ page.title }}</NuxtLink>
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