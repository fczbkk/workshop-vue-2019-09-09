<template>
  <ul>
    <li
      v-for="(value, key) in categoriesList"
      :key="key"
    >
      <a :href="'/category/' + key">{{ value }}</a>
    </li>
  </ul>
</template>

<script>
  const CATEGORIES_LIST_URL = 'http://localhost:3000/categories'

  export default {
    data () {
      return {
        categoriesList: {}
      }
    },
    mounted () {
      fetch(CATEGORIES_LIST_URL)
        .then((response) => response.json())
        .then((data) => this.categoriesList = data)
    }
  }
</script>

<style scoped>

</style>
