<!-- product.vue -->
<template>
    <div class="product-detail">
      <div class="container">
        <div class="product">
          <img :src="perfume.link" :alt="perfume.name" class="product-image">
          <div class="details">
            <h3 class="name">{{ perfume.name }}</h3>
            <h4 class="price">₹ {{ perfume.prise }}</h4>
            <p class="description" v-if="perfume.description">{{ perfume.description }}</p>
          </div>
          <div class="buy">
            <button class="btn buying">Buy Now</button>
            <button @click="cart.add(perfume)" class="btn cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
      import { store } from '@/store';
      import { perfumes } from '@/perfumes';
      import { useRoute, useRouter } from 'vue-router';

      export default {
        setup() {
          const route = useRoute();
          const router = useRouter();
          const cart = store();

          const id = Number(route.params.id);
          const perfume = perfumes.find(p => p.id === id);

          if (!perfume) {
            router.push('/products'); // إعادة التوجيه لو ما لقى المنتج
          }

          return { perfume, cart };
        }
      }
</script>

  
<!-- 
<script>
import { store } from '@/store';

export default {
  props: ['perfume'],
  setup(props) {
    const cart = store();
    return { cart };
  }
}
</script> -->


  
  <style scoped>
  .product-detail {
    padding: 40px 0;
  }
  
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    background: white;
    border-radius: 8px;
    padding: 30px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }
  
  .product-image {
    width: 100%;
    max-height: 400px;
    object-fit: contain;
    border-radius: 4px;
  }
  
  .details {
    display: flex;
    flex-direction: column;
  }
  
  .name {
    font-size: 1.8rem;
    margin: 0 0 15px;
    color: #333;
  }
  
  .price {
    font-size: 1.5rem;
    color: #e63946;
    margin: 0 0 20px;
  }
  
  .description {
    line-height: 1.6;
    color: #555;
    margin-bottom: 30px;
  }
  
  .buy {
    display: flex;
    gap: 15px;
    margin-top: auto;
  }
  
  .btn {
    flex: 1;
    padding: 12px;
    font-size: 1rem;
  }
  
  @media (max-width: 768px) {
    .product {
      grid-template-columns: 1fr;
    }
  }
  </style>