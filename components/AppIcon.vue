<template>
    <v-icon  color="primary">mdi-{{icon}}</v-icon>
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