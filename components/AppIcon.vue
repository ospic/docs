<template>
    <v-btn x-small fab  class="primary ma-0 pa-0 mx-1 mb-1 icon">
      <v-icon small class="icon"  color="white">mdi-{{icon}}</v-icon>
    </v-btn>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    }
  }
}
</script>
<style scoped>

</style>