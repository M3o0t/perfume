<!-- navbar.vue -->
<template>
    <div class="nav">
        <nav>
            <div class="content">
                
                <ul>
                    <li><router-link to="/perfume/" >home</router-link></li>
                    <li><router-link  to="/cart">cart</router-link></li>
               </ul>
            </div>
            
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
    padding:10px 0 10px 0  ;
    width: 100%;
    border-radius: 8px;
    background-color: rgb(215, 221, 223);
}
ul li{
    padding: 10px;
    list-style: none;
}
ul li a{
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
}
ul li:hover{
    background-color: skyblue ;
    border-radius: 10px;

}
</style>