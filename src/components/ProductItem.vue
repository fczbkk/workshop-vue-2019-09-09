<template>
    <div class="box">
      <div class="title">
        <h3>
          <router-link :to="{name: 'product', params: {productId: productData.id}}">
            {{ productData.title }}
          </router-link>
        </h3>
      </div>
      <div class="content">
        <div class="productItem">
          <div class="productImage">
            <img
              :src="'http://localhost:3000/images/' + productData.variants.default"
              alt="" height="100"
            >
          </div>
          <p>{{ productData.description }}</p>
          <div class="price">
            {{ productData.price }},- Kč
          </div>
          <add-to-cart
            :availability="productData.availability"
            :productId="productData.id"
          />
        </div>
      </div>
    </div>
</template>

<script>
  import AddToCart from './AddToCart'

  export default {
    components: {
      AddToCart
    },
    props: {
      productData: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
