<template>
  <div id="cart">
    🛒
    produkty: {{ countProducts }},
    kusy: {{ countItems }}
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters(['countProducts', 'countItems'])
    }
  }
</script>

<style scoped>

</style>
