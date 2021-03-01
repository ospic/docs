<template>
    <v-btn elevation="0" x-small fab  class="primary ma-0 pa-0 mb-1">
      <v-icon small class="icon" color="white">mdi-{{icon}}</v-icon>
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