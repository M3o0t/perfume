// router.js
import { createWebHistory , createRouter } from "vue-router";

import Home from "./components/home.vue";
import Cart from "./components/cart.vue";
import product from "./components/product.vue";
const router = createRouter({
    history: createWebHistory(),
    routes : [
        {path : '/perfume/' , component : Home},
        {path : '/products/:id',component : product},
        {path : '/cart' , component : Cart }
        ]
})

export default router


