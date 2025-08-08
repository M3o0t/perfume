<!-- product.vue -->
<template>
    <div class="product-detail">
      <div class="container">
        <div class="product">
          <img :src="perfume.link" :alt="perfume.name" class="product-image">
          <div class="details">
            <h3 class="name">{{ perfume.name }}</h3>
            <h4 class="price">₹ {{ perfume.price }}</h4>
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
            //redirecte if the product is not exist 
            router.push('/products');
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
  padding: 60px 20px;
  background: #f9f9f9;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  background: #ffffff;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

/* Improved Image */
.product-image {
  width: 100%;
  height: auto;
  max-height: 420px;
  object-fit: cover;
  border-radius: 12px;
  background-color: #fff;
  border: 1px solid #eee;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* Text Info */
.details {
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 2.2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 10px;
  line-height: 1.3;
  letter-spacing: 0.5px;
}

.price {
  font-size: 1.8rem;
  color: #28a745;
  margin-bottom: 20px;
  font-weight: 600;
}

.description {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 40px;
}

/* Buttons */
.buy {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.btn {
  flex: 1;
  padding: 12px 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: background-color 0.25s ease, transform 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.buying {
  background-color: #2ecc71;
  color: white;
}

.buying:hover {
  background-color: #27ae60;
  transform: translateY(-1px);
}

.cart {
  background-color: #ff6f61;
  color: white;
}

.cart:hover {
  background-color: #e85c4c;
  transform: translateY(-1px);
}

/* Responsive */
@media (max-width: 768px) {
  .product {
    grid-template-columns: 1fr;
  }

  .btn {
    flex: 1 1 100%;
  }
}
</style>