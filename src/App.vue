<template>
    <div class="container">
        <div class="product" v-for="perfume in perfumes" :key="perfume.id">
            <img :src="perfume.link" alt="">
            <div class="details">
                <h3 class="name">{{ perfume.name }}</h3>
                <h4 class="salary">₹ {{ perfume.salary }}</h4>
            </div>
        </div>
    </div>
    <div class="hr-gallery">
    <Horisontal/>
    </div>
</template>

<script setup>
import Horisontal from './components/horisontal.vue';
import {perfumes} from './perfumes.js';
</script>

<style>
img{
    width: 100%;
    height: 180px;
    border-radius: 8px;
}
.product{
    height: 300px;
    border-radius: 8px;
    background-color: gray;
    width: 200px;
    transition-duration: 400ms;
}
.product:hover {
  transform: scale(1.03);
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