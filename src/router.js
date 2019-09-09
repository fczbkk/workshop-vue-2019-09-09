import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Error404 from './views/Error404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product-detail/:productId',
      name: 'product',
      component: () => import(/* webpackChunkName: "product" */ './views/Product.vue')
    },
    {
      path: '*',
      name: 'error404',
      component: Error404
    }
  ]
})
