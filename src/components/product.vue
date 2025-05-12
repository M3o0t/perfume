<template>
   <div class="container">
     <div class="product">
        <img :src="perfume.link" alt="error with image">
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
</template>
<script setup>
import {perfumes} from '../perfumes';
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.params.id)
const id = route.params.id;

const perfume = perfumes.find(p => p.id == id);
</script>