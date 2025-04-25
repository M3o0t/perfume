<template>
    <Navbar/>
    <router-view />
    <img src="/public/images/10.jpg" alt="test image" />
    
</template>

<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/navbar.vue';
</script>