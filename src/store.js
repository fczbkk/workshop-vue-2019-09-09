import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemsInCart: {}
  },

  mutations: {
    setProductQuantityInCart (state, {productId, quantity}) {
      //state.itemsInCart[productId] = quantity
      if (quantity === 0) {
        Vue.delete(state.itemsInCart, productId)
      } else {
        Vue.set(state.itemsInCart, productId, quantity)
      }
    }
  },

  actions: {

  },

  getters: {
    countProducts (state) {
      return Object.keys(state.itemsInCart).length
    },
    countItems (state) {
      return Object.values(state.itemsInCart).reduce(
        (accumulated, current) => accumulated + current,
        0
      )
    }
  }
})
