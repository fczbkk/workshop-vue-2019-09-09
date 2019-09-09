<template>
  <div>
    product detail
    {{ productId }}
  </div>
</template>

<script>
  export default {
    computed: {
      productId () {
        return this.$route.params.productId
      }
    }
  }
</script>

<style scoped>

</style>
