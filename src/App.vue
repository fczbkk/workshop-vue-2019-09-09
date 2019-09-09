<template>
  <div>
    <header>
      <div id="logo">
        <a href="#">Vue E-shop</a>
      </div>
      <div id="cart">
        🛒
        empty
      </div>
    </header>

    <main>

      <h1>E-shop home</h1>

      <h2>Categories</h2>

      <ul>
        <li><a href="#">First category</a></li>
        <li><a href="#">Second category</a></li>
        <li><a href="#">Third category</a></li>
        <li><a href="#">First category</a></li>
        <li><a href="#">Second category</a></li>
        <li><a href="#">Third category</a></li>
      </ul>

      <h2>Highlighted products</h2>

      <div class="productsList">

        <div class="box">
          <div class="title">
            <h3>Product title</h3>
          </div>
          <div class="content">
            <div class="productItem">
              <div class="productImage">
                <img src="blue-t-shirt.jpg" alt="" height="100">
              </div>
              <p>Product description</p>
              <div class="price">
                500,- Kč
              </div>
              <div class="addToCart">
                <button>🛒 Add to cart</button>
              </div>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="title">
            <h3>Product title</h3>
          </div>
          <div class="content">
            <div class="productItem">
              <div class="productImage">
                <img src="blue-t-shirt.jpg" alt="" height="100">
              </div>
              <p>Product description</p>
              <div class="price">
                500,- Kč
              </div>
              <div class="addToCart">
                <button>-</button>
                <input type="text" size="3" value="1">
                <button>+</button>
              </div>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="title">
            <h3>Product title</h3>
          </div>
          <div class="content">
            <div class="productItem">
              <div class="productImage">
                <img src="blue-t-shirt.jpg" alt="" height="100">
              </div>
              <p>Product description</p>
              <div class="price">
                500,- Kč
              </div>
              <div class="addToCart">
                <span class="soldOut">Sold out</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <h1>Product detail</h1>

      <div class="productDetail">

        <div class="details">

          <h2>Product title</h2>

          <div class="tabs">
            <button>Description</button>
            <button class="active">Variants</button>
          </div>
          <div class="tabContent">
            <ul>
              <li>
                <label>
                  <input type="radio" name="variant" value="blue" checked>
                  blue
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="variant" value="red">
                  red
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="variant" value="purple">
                  purple
                </label>
              </li>
            </ul>
          </div>

          <div class="price">
            500,- Kč
          </div>

          <div class="addToCart">
            <button>🛒 Add to cart</button>
          </div>

        </div>

        <div class="image">
          <img src="blue-t-shirt.jpg" alt="">
        </div>

      </div>

    </main>

    <footer>
      <div id="usefulLinks">
        <a href="#">Send us feedback</a>
      </div>
      <div id="copyright">
        &copy; 2019 by Fczbkk
      </div>
    </footer>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>

  body {
    background: #C0C0C0;
    color: #333;
    font-family: helvetica, arial, sans-serif;
    padding: 0;
    margin: 0;
  }

  a {
    color: #FF6700;
  }

  header, main, footer {
    padding: 2em;
  }

  header, footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  header {
    background: #004E98;
    color: #fff;
  }

  header div {
    font-weight: bold;
    font-size: 1.25em;
  }

  header a {
    text-decoration: none;
    color: #EBEBEB;
  }

  main {
    background: #EBEBEB;
  }

  .productsList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-column-gap: 1em;
    grid-row-gap: 1em;
  }

  .productDetail {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  .productDetail .details {
    flex-grow: 1;
  }

  .productDetail .image {
    margin-left: 2em;
  }

  .productDetail .image img {
    width: 100%;
    max-width: 500px;
  }

  .box {
    border: 2px solid #3A6EA5;
  }

  .box .title {
    background: #3A6EA5;
    color: #EBEBEB;
  }

  .box .title h3 {
    margin: 0;
    font-size: 1em;
  }

  .box .title, .box .content {
    padding: 1em;
  }

  .soldOut {
    display: inline-block;
    font-weight: bold;
    background: #FF6700;
    color: #EBEBEB;
    padding: 0.5em 1em;
    transform: rotate(-15deg);
    transform-origin: center center;
  }

  .tabs {
    border-bottom: 2px solid #3A6EA5;
  }

  .tabs button {
    font-weight: bold;
    border: 2px solid #3A6EA5;
    border-bottom: none;
    padding: 0.5em 2em;
    background: #C0C0C0;
  }

  .tabs button:hover {
    background: #FF6700;
  }

  .tabs button.active {
    background: #3A6EA5;
    color: #EBEBEB;
  }

  .addToCart button, .addToCart input {
    font-weight: bold;
    padding: 0.5em 1em;
    border: 2px solid #004E98;
  }

  .addToCart input {
    text-align: right;
    background: #EBEBEB;
  }

  .addToCart button {
    background: #3A6EA5;
    color: #EBEBEB;
  }

  .addToCart button:hover {
    background: #FF6700;
  }

  .price {
    font-size: 2em;
    font-weight: bold;
    padding: 0.25em;
  }


</style>
