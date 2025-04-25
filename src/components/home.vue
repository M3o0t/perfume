<template>
    <div class="container">
        <div class="product" v-for="perfume in perfumes" :key="perfume.id">

            <img :src="perfume.link">

            <div class="details">
                <h3 class="name">{{ perfume.name }}</h3>
                <h4 class="salary">₹ {{ perfume.salary }}</h4>
            </div>

            <div class="buy">
                <button class="btn buying">buy</button>
                <button @click="cart.add(perfume)" class="btn cart">add to cart</button>
            </div>
            
        </div>
    </div>
    <div class="hr-gallery">
    <Horisontal />
    </div>
</template>

<script setup>
import Horisontal from './horisontal.vue';
import {perfumes} from '../perfumes';
import { store } from '@/store';
const cart = store()
</script>

<style>
.buy{
    display: flex;
    justify-content: space-between; 
    width: 100%;
    border-top: 1px solid black;
    margin-top: 10px
}
.buy .btn{
    margin: 10px;
    border-radius: 8px;
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
    animation: float 3s ease-in-out infinite;
    border-radius: 8px;
    background-color: gray;
    width: 200px;
    transition-duration: 400ms;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.product:hover {
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
</style>