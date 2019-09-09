<template>
  <div class="productsList">
    <product-item
      v-for="(product) in productsList"
      :key="product.id"
      :productData="product"
    />
  </div>
</template>

<script>
  const PRODUCTS_LIST_URL = 'http://localhost:3000/highlighted'

  import ProductItem from './ProductItem'

  export default {
    components: {
      ProductItem
    },
    data () {
      return {
        productsList: []
      }
    },
    mounted () {
      fetch(PRODUCTS_LIST_URL)
        .then((response) => response.json())
        .then((data) => this.productsList = data)
    }

  }
</script>

<style scoped>

</style>
