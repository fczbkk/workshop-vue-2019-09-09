<template>
  <div class="home">
    <categories-list />
    <products-list />
  </div>
</template>

<script>
  import CategoriesList from './../components/CategoriesList'
  import ProductsList from './../components/ProductsList'

export default {
  components: {
    CategoriesList,
    ProductsList
  }
}
</script>
