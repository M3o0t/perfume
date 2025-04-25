
import { createWebHistory , createRouter } from "vue-router";

import Home from "./components/home.vue";
import Cart from "./components/cart.vue";
const router = createRouter({
    history: createWebHistory(),
    routes : [
        {path : '/' , component : Home},
        {path : '/cart' , component : Cart}
    ]
})

export default router