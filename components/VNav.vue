<template>
   <nav>
      <p class="gray--text lighten-2 text-uppercase">In this page</p>
       <v-divider></v-divider>
          <ul>
            <li v-for="link of post.toc" :key="link.id" :class="{ 'py-2': link.depth === 2, 'ml-2 pb-1': link.depth === 3 }">
              <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </nav>
</template>
<script>
export default {
  props:{
    post:{
      type:  Object,
      default: null
    }
  }
}
</script>