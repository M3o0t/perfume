<!-- navbar.vue -->
<template>
    <div class="nav">
        <nav>
            <ul>
                <li><router-link to="/perfume/" >home</router-link></li>
                <li><router-link  to="/cart">cart</router-link></li>
            </ul>
        </nav>
    </div>
</template>


<style>
.nav{
    width: 100%;
}
nav ul{
    display: flex;
    margin:0;
    justify-content: space-evenly;
    padding:20px 0 0 0  ;
    width: 100%;
    border-radius: 8px
}
ul li{
    padding: 10px;
    list-style: none;
}
ul li a{
    text-decoration: none;
    font-size: 1.5rem;
}
</style>