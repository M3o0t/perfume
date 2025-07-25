<!-- //home.vue -->
<template>  
  <div class="product-gallery">
      
    <div class="container">
        <div class="product" v-for="perfume in perfumes" :key="perfume.id">
          
            <router-link :to="`/products/${perfume.id}`" class="product-link">
                <img :src="perfume.link" :alt="perfume.name" class="product-image">
                <div class="details">
                    <h3 class="name">{{ perfume.name }}</h3>
                    <h4 class="price">₹ {{ perfume.price }}</h4>
                </div>
            </router-link>

            <div class="buy">
                <button class="btn buying" >Buy Now</button>
                <button @click.prevent="cart.add(perfume)" class="btn cart">Add to Cart</button>
            </div>

        </div>
    </div>

    <div class="hr-gallery">
       <horizontal />
    </div>

  </div>
</template>

<script setup>

import { store } from '@/store';
import horizontal from './horizontal.vue';
import { perfumes } from '@/perfumes';


const cart = store();
</script>

<style scoped>

.product-gallery {
  padding: 20px 0;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  padding: 20px 0;
}

.product {
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.product:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.product-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.details {
  padding: 15px;
}

.name {
  margin: 0 0 10px;
  font-size: 1.1rem;
  color: #333;
}

.price {
  margin: 0;
  color: #e63946;
  font-weight: bold;
}

.buy {
  display: flex;
  padding: 0 15px 15px;
  gap: 10px;
}

.btn {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
}

.buying {
  background-color: #e63946;
  color: white;
}

.buying:hover {
  background-color: #c1121f;
}

.cart {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
}

.cart:hover {
  background-color: #e9ecef;
}

.hr-gallery {
  margin-top: 40px;
}
</style>
<!-- <style>
.buy{
    display: flex;
    justify-content: space-between; 
    width: 100%;
    border-top: 1px solid black;
    margin-top: 10px
}
.buy .btn{
    width: 40%;
    font-size: 15px;
    font-weight: bold;
    font-family:Arial, Helvetica, sans-serif;
    margin: 10px;
    border-radius: 19px;
    background-color:rgb(70, 241, 170);
}
img{
    width: 100%;
    height: 180px;
    border-radius: 8px;
}
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}
.product{
    border-radius: 8px;
    background-color: gray;
    width: 200px;
    transition-duration: 400ms;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.product:hover {
  animation: float 3s ease-in-out infinite;
  transform: scale(1.03);
  box-shadow: 10px 8px 8px 1px  rgba(30, 31, 30, 0.2);
}
.details{
    text-align: center;
}
.details h4{
    margin: 0px 65px;
    padding: 3px 0px;
    background-color: lightblue;
    border-radius: 8px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  background-image: url('/public/images/background.jpeg'); /* move image to public/images */
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}
</style> -->