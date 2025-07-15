<!-- cart.vue -->
<template>
    <div class="shopping-cart">
      <h2 class="cart-title">Your Shopping Cart</h2>
      
      <div v-if="cart.cart.length === 0" class="empty-cart">
        <p>Your cart is currently empty</p>
        <router-link to="/" class="continue-shopping">Continue Shopping</router-link>
      </div>
      
      <form v-else action="">
        <ul class="cart-items">
          <li v-for="item in cart.cart" :key="item.id" class="cart-item">
            <div class="cart-cont">
              <img :src="item.link" :alt="item.name" class="cart-item-image">
              <div class="details">
                <h3 class="name">{{ item.name }}</h3>
                <h4 class="price">₹ {{ item.prise }}</h4>
              </div>
              <div class="actions">
                <button class="btn buying">Buy Now</button>
                <button type="button" @click.prevent="remove(item)" class="btn remove">Remove</button>
              </div>
            </div>
          </li>
        </ul>
        
        <div class="cart-summary">
          <div class="cart-det">
            <h4>{{ cart.cart.length }} {{ cart.cart.length === 1 ? 'item' : 'items' }}</h4>
            <h4>Total: ₹{{ cart.totalprise }}</h4>
          </div>
          <button class="checkout-btn">Proceed to Checkout</button>
        </div>
      </form>
    </div>
  </template>

  <script>
    import { store } from '@/store';

    export default {
    setup() {
    const cart = store(); // ✅ Moved into setup

    const remove = (item) => {
      cart.remove(item);
    };

    return { cart, remove };
  }
}
</script>
  
  <style scoped>
  .shopping-cart {
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 20px;
  }
  
  .cart-title {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
  }
  
  .empty-cart {
    text-align: center;
    padding: 50px 0;
  }
  
  .empty-cart p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  .continue-shopping {
    display: inline-block;
    padding: 10px 20px;
    background-color: #e63946;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.2s;
  }
  
  .continue-shopping:hover {
    background-color: #c1121f;
  }
  
  .cart-items {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .cart-item {
    border-bottom: 1px solid #e1e1e1;
    padding: 20px 0;
  }
  
  .cart-cont {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  .cart-item-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
  }
  
  .details {
    flex-grow: 1;
  }
  
  .name {
    margin: 0 0 5px;
    font-size: 1.1rem;
  }
  
  .price {
    margin: 0;
    color: #e63946;
  }
  
  .actions {
    display: flex;
    gap: 10px;
  }
  
  .btn {
    padding: 8px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
  
  .buying {
    background-color: #e63946;
    color: white;
  }
  
  .buying:hover {
    background-color: #c1121f;
  }
  
  .remove {
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
  }
  
  .remove:hover {
    background-color: #e9ecef;
  }
  
  .cart-summary {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #e1e1e1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .cart-det {
    display: flex;
    gap: 20px;
  }
  
  .cart-det h4 {
    margin: 0;
    font-size: 1.1rem;
  }
  
  .checkout-btn {
    padding: 12px 25px;
    background-color: #2a9d8f;
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .checkout-btn:hover {
    background-color: #21867a;
  }
  </style>