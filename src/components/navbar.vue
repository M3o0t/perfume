<!-- navbar.vue -->
<template>
    <div class="nav">
        <nav>
            <div class="content">
                
                <ul>
                    <li><router-link class="link" to="/perfume/" >home</router-link></li>
                    <li><router-link  to="/cart" class="link">cart</router-link></li>
               </ul>
            </div>
            
        </nav>
    </div>
</template>



<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  background-color: #2c3e50;
  opacity: 0.9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

nav ul {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 0;
  padding: 12px 0;
  list-style: none;
}

ul li a {
  display: inline-block;
  min-width: 90px;
  text-align: center;
  padding: 10px 16px;
  color: #f0f0f0;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 8px;
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;
}

ul li a:hover {
  background-color: #1abc9c;
  color: #fff;
  transform: scale(1.05);
}

.router-link-active {
  background-color: #1abc9c;
  color: #fff;
}
</style>
