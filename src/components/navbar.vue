<template>
    <div class="nav">
        <nav>
            <ul>
                <li><router-link to="/products" >home</router-link></li>
                <li><router-link  to="/cart">cart</router-link></li>
            </ul>
        </nav>
    </div>
</template>


<style>
nav ul{
    display: flex;
    justify-content: space-evenly;
    background-color: lightblue;
}
ul li{
    padding: 10px;
    list-style: none;
}
</style>