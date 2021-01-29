<template>
   <nav>
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
      type: Array,
      default: null
    }
  }
}
</script>