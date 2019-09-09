<template>
    <div class="addToCart">
      <button @click="changeQuantity(-1)">-</button>
      <input type="text" size="3" v-model.number="quantity">
      <button @click="changeQuantity(1)">+</button>
      <br>
      skladem: {{ availability }},
      zbývá: {{ availability - quantity }}
    </div>
</template>

<script>
  export default {
    props: {
      availability: {
        type: Number,
        default: 0
      },
      productId: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        quantity: 0
      }
    },
    methods: {
      changeQuantity (delta) {
        const newQuantity = this.quantity + delta
        if ((newQuantity >= 0) && (newQuantity <= this.availability)) {
          this.quantity = newQuantity
        }
      }
    },
    watch: {
      quantity (newValue) {
        if (newValue < 0) {
          this.quantity = 0
        }
        if (newValue > this.availability) {
          this.quantity = this.availability
        }
        this.$store.commit('setProductQuantityInCart', {
          productId: this.productId,
          quantity: this.quantity
        })
      }
    }
  }
</script>

<style scoped>

</style>
