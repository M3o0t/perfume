<!-- horisontal.vue -->
<template>
  <div class="hori-container">
    <button class="scr L" @click="scrollLeft"><=</button>

    <div class="horisontal" ref="scrollGallery">
      <div class="image" v-for="perfume in perfumes" :key="perfume.id">
        <img :src="perfume.link" alt="">
      </div>
    </div>

    <button class="scr R" @click="scrollRight">=></button>
  </div>
    
</template>

<script setup>
import {ref} from 'vue' ;
import { perfumes } from '@/perfumes';
const scrollGallery = ref(null);

const scrollLeft = () => {
  scrollGallery.value.scrollBy({ left: -200, behavior: 'smooth' });
};

const scrollRight = () => {
  scrollGallery.value.scrollBy({ left: 200, behavior: 'smooth' });
};
</script>

<style scoped>
.hori-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 40px 0;
}

.horisontal {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 20px;
  width: 90%;
  max-width: 1000px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.image {
  flex: 0 0 auto;
  width: 180px;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.image:hover {
  transform: scale(1.05);
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}


.scr {
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  background-color: #e63946;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.scr:hover {
  background-color: #c1121f;
  transform: scale(1.1);
}
</style>