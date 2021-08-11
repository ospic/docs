<template>
  <div class="image">
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
      default: "Image",
    },
  },
  methods: {
    imgSrc() {
      try {
        const { post } = this.$parent;
         // eslint-disable-next-line no-console
         console.log(require(`@/content/a/${this.src}`).default)

        return require(`@/content/a/${this.src}`).default;
      } catch (error) {
        return null;
      }
    },

  },

};
</script>

<style scoped>
.img {
  border: 0px solid #eee;
  border-radius: 0px;
  padding: 0px;
}
img {
  max-width: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
