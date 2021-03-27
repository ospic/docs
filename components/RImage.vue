<template>
  <div class="round">
    <img :src="imgSrc()" :alt="alt" />
  </div>
</template>

<script lang="js">
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  methods: {
    imgSrc() {
      try {
        const { post } = this.$parent;
         // eslint-disable-next-line no-console

        return require(`@/static/${this.src}`);
      } catch (error) {
        return null;
      }
    },

  },

};
</script>

