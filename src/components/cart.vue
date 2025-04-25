<template>
    <div class="cart">
        <h2 class="carttext">hello this is the cart where you put your items </h2>
        <form action="">
            <ul>
               <li v-for="(item, index) in cart.cart" :key="index">
                 {{ item.name }}
               </li>
    </ul>
        </form>
    </div>
</template>

<script setup>
import { store } from '@/store';
const cart =store()
</script>