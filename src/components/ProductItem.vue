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
          <div class="addToCart">
            <button>🛒 Add to cart</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
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
