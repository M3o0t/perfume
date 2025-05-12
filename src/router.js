
import { createWebHistory , createRouter } from "vue-router";

import Home from "./components/home.vue";
import Cart from "./components/cart.vue";
import product from "./components/product.vue";
const router = createRouter({
    history: createWebHistory(),
    routes : [
        {path : '/products' , component : Home } ,
        {path : '/products/:id',component : product},
        {path : '/cart' , component : Cart }
        ]
})

export default router