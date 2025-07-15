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
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
 
  </style>