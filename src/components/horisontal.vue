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

<style>
.hori-container{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 40px 0;
}
.horisontal {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 16px;
  width: 640px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
}
.scr {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 18px;
  border: none;
  background-color: #333;
  color: white;
  cursor: pointer;
  transition: background 0.3s;
}

.scr:hover {
  background-color: #555;
}
.image {
  flex: 0 0 auto;
  width: 160px;
}
.image img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}
</style>