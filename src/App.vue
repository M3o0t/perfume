<!-- app.vue -->
<template>
    <div class="app-container">
      <Navbar/>
      <router-view />

    </div>
  </template>
  
  <script>
import Navbar from './components/navbar.vue'
  
  export default {
    components: {
      Navbar
    }
  }
  </script>
  
  <style scoped>
  .app-container {
    font-family: 'Arial', sans-serif;
    max-width: 100%;
    margin: 0 auto;
    margin-top:0;
    padding: 0 0px;
    background-color: rgb(250, 253, 253);
  }
 
  </style>