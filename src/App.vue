<template>
    <Navbar/>
    <router-view /> 
</template>

<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/navbar.vue';
</script>