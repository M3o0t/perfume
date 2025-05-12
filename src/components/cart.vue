<template>
    <div class="cart">
        <h2 class="carttext">hello this is the cart where you put your items </h2>
        <form action="">
            <ul>
               <li v-for="item in cart.cart" :key="item.id">
                 <div class="cart-cont">
                    <img :src="item.link" alt="">
                    <div class="details">
                      <h3 class="name">{{ item.name }}</h3>
                      <h4 class="salary">₹ {{ item.salary }}</h4>
                    </div>
                    <div class="buy">
                      <button class="btn buying">buy</button>
                      <button tybe="button" @click.prevent="remove(item)" class="btn cart">remove</button>
                    </div>
                   
                 </div>
               </li>
            </ul>
            <div v-if="cart.cart.length >= 1" class="cart-det">
                <h4>  {{ cart.cart.length }} items </h4>
                <h4> total salary ₹{{ cart.totalSalary }}</h4>
            </div>
        </form>
    </div>
</template>

<script setup>
import { store } from '@/store';
// import { watch } from 'vue';
const cart =store()
// import { ref } from 'vue';
// const total = ref(0)

// const salary = () => {
//    total.value = cart.cart.reduce((sum,item) => sum + item.salary ,0 )
//    }
//  watch(() => cart.cart , () => salary() , {deep:true})

const remove = (item) => {
    const index = cart.cart.findIndex(i => i.id === item.id)
    if(index !== -1){
        cart.cart.splice(index,1)
    }
}
</script>
<style>
.cart-det{
    display: flex;
    justify-content: center;
}
.cart-cont{
    display: flex;
    justify-content: center;
}
</style>