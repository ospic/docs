<template>
   <nav>
      <p class="primary--text text-center lighten-2 text-uppercase"> On this page</p>
       <v-divider></v-divider>
          <ul>
            <li :style="link.depth === 2 ?'list-style-type: disc;':'list-style-type: circle;'" v-for="link of post.toc" :key="link.id" :class="{ 'py-2': link.depth === 2, 'ml-2 pb-1': link.depth === 3 }">
              <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
               <hr v-if="link.depth === 2" class="dashed">
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